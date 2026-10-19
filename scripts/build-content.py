#!/usr/bin/env python3
"""Convert a WordPress WXR export into src/content/site.json.

Usage: python3 -I scripts/build-content.py export.xml
"""
import json, re, sys
import xml.etree.ElementTree as ET

NS = {'wp': 'http://wordpress.org/export/1.2/', 'content': 'http://purl.org/rss/1.0/modules/content/'}
SITE = 'https://ichibanstays.com'
root = ET.parse(sys.argv[1]).getroot().find('channel')

items = []
for i in root.findall('item'):
    g = lambda t: i.findtext(t, namespaces=NS)
    meta = {m.findtext('wp:meta_key', namespaces=NS): m.findtext('wp:meta_value', namespaces=NS) or ''
            for m in i.findall('wp:postmeta', NS)}
    items.append(dict(id=g('wp:post_id'), type=g('wp:post_type'), status=g('wp:status'), slug=g('wp:post_name'),
                      title=g('title') or '', date=g('wp:post_date'), content=g('content:encoded') or '',
                      order=int(g('wp:menu_order') or 0), cats=[c.text for c in i.findall('category')],
                      meta=meta, url=g('wp:attachment_url')))

atts = {x['id']: x['url'] for x in items if x['type'] == 'attachment'}
published = {x['id']: x for x in items if x['type'] in ('page', 'post') and x['status'] == 'publish'}
HOME_ID = '16'


def path_for(x):
    return '/' if x['id'] == HOME_ID else f"/{x['slug']}/"


def clean(html):
    html = html.replace(SITE + '/', '/').replace(SITE, '/')
    html = html.replace('/go/whatsapp/', 'https://wa.me/447572190291')
    html = re.sub(r'\[wpforms id="\d+"\]', '<div data-projection-form></div>', html)
    return html


def seo(x):
    m = x['meta']
    title = m.get('_yoast_wpseo_title') or m.get('_siteseo_titles_title') or ''
    desc = m.get('_yoast_wpseo_metadesc') or m.get('_siteseo_titles_desc') or ''
    return title.replace('%%sitename%%', 'Ichiban Stays').replace('%%page%%', '').replace('%%sep%%', '|').strip(), desc


pages = {}
for x in published.values():
    t, d = seo(x)
    pages[path_for(x)] = dict(
        kind=x['type'], slug=x['slug'], title=x['title'], seoTitle=t, description=d,
        date=x['date'][:10], categories=[c for c in x['cats'] if c], html=clean(x['content']),
        image=atts.get(x['meta'].get('_thumbnail_id', ''), ''))
# Privacy policy is a draft in WP but linked from the footer; ship it.
for x in items:
    if x['type'] == 'page' and x['slug'] == 'privacy-policy':
        t, d = seo(x)
        pages['/privacy-policy/'] = dict(kind='page', slug='privacy-policy', title=x['title'], seoTitle=t,
                                         description=d, date=x['date'][:10], categories=[], html=clean(x['content']), image='')

# Navigation tree
nav = {x['id']: x for x in items if x['type'] == 'nav_menu_item' and x['status'] == 'publish'}
nodes = {}
for n in nav.values():
    m = n['meta']
    if m.get('_menu_item_type') == 'custom':
        href, label = clean(m.get('_menu_item_url', '')), n['title']
    else:
        tgt = published.get(m.get('_menu_item_object_id'))
        if not tgt:
            continue
        href, label = path_for(tgt), n['title'] or tgt['title']
    nodes[n['id']] = dict(label=label, href=href, order=n['order'], parent=m.get('_menu_item_menu_item_parent', '0'), children=[])
tree = []
for nid, nd in sorted(nodes.items(), key=lambda kv: kv[1]['order']):
    (nodes[nd['parent']]['children'] if nd['parent'] in nodes else tree).append(nd)
strip = lambda n: dict(label=n['label'], href=n['href'], children=[strip(c) for c in n['children']])
nav_tree = [strip(n) for n in tree]

json.dump(dict(pages=pages, nav=nav_tree), open('src/content/site.json', 'w'), ensure_ascii=False, indent=1)
print(len(pages), 'pages;', len(nav_tree), 'top-level nav items')
for n in nav_tree:
    print(n['label'], n['href'], [c['label'] for c in n['children']][:8])
