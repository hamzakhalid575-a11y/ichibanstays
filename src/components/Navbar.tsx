"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { BRAND, NAV, NavItem } from "@/lib/site";

function Desktop({ item }: { item: NavItem }) {
  if (!item.children.length) {
    return (
      <Link href={item.href} className="text-sm text-brand-ink hover:text-brand-green transition-colors">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative group">
      <Link href={item.href} className="inline-flex items-center gap-1 text-sm text-brand-ink hover:text-brand-green transition-colors">
        {item.label} <ChevronDown className="w-3.5 h-3.5" />
      </Link>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition absolute left-0 top-full pt-3 z-50">
        <ul className="min-w-[230px] bg-white border border-slate-200 shadow-lg rounded-md py-2">
          {item.children.map((c) => (
            <li key={c.href + c.label} className="relative group/sub">
              <Link href={c.href} className="flex items-center justify-between px-4 py-2 text-sm text-brand-ink hover:bg-brand-sage hover:text-brand-green">
                {c.label} {c.children.length > 0 && <ChevronDown className="w-3.5 h-3.5 -rotate-90" />}
              </Link>
              {c.children.length > 0 && (
                <ul className="invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition absolute left-full top-0 min-w-[220px] max-h-[70vh] overflow-y-auto bg-white border border-slate-200 shadow-lg rounded-md py-2">
                  {c.children.map((g) => (
                    <li key={g.href}>
                      <Link href={g.href} className="block px-4 py-2 text-sm text-brand-ink hover:bg-brand-sage hover:text-brand-green">
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Mobile({ item, close, depth = 0 }: { item: NavItem; close: () => void; depth?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center justify-between" style={{ paddingLeft: depth * 16 }}>
        <Link href={item.href} onClick={close} className="py-2.5 text-sm text-brand-ink">
          {item.label}
        </Link>
        {item.children.length > 0 && (
          <button aria-label={`Toggle ${item.label}`} onClick={() => setOpen(!open)} className="p-2">
            <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {open && (
        <ul>
          {item.children.map((c) => (
            <Mobile key={c.href + c.label} item={c} close={close} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#eee8dc]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 h-24 flex items-center justify-between">
        <Link href="/" aria-label={BRAND.name} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND.logo} alt="Ichiban Stays logo" width={310} height={52} className="h-[52px] w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
          {NAV.map((n) => (
            <Desktop key={n.href + n.label} item={n} />
          ))}
        </nav>
        <Link
          href="/book-a-consultation/"
          target="_blank"
          className="hidden lg:inline-flex items-center px-5 py-3 rounded-md bg-brand-green hover:bg-brand-greenDark text-white text-sm font-medium transition-colors"
        >
          Get Free Projection
        </Link>
        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <ul className="lg:hidden border-t border-slate-200 px-5 pb-4 max-h-[80vh] overflow-y-auto bg-white">
          {NAV.map((n) => (
            <Mobile key={n.href + n.label} item={n} close={() => setOpen(false)} />
          ))}
        </ul>
      )}
    </header>
  );
}
