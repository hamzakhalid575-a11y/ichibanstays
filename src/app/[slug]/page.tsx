import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGES, pathFor } from "@/lib/site";
import WpContent from "@/components/WpContent";
import { CalendarDays, LockOpen, Shield, UserCog } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const entries = Object.entries(PAGES).filter(([p]) => p !== "/");

export function generateStaticParams() {
  return entries.map(([, v]) => ({ slug: v.slug }));
}

const POSTS = entries.filter(([, v]) => v.kind === "post").sort((a, b) => a[1].order.localeCompare(b[1].order));

function PostNav({ slug }: { slug: string }) {
  const i = POSTS.findIndex(([, v]) => v.slug === slug);
  const prev = POSTS[i - 1];
  const next = POSTS[i + 1];
  return (
    <nav aria-label="Posts" className="max-w-[780px] mx-auto px-5 pb-16 grid sm:grid-cols-2 gap-6 text-sm">
      <div>
        {prev && (
          <Link href={prev[0]} rel="prev" className="block border-t border-slate-200 pt-4 hover:text-brand-green">
            <span className="text-slate-500">Previous</span>
            <p className="font-medium text-brand-forest">{prev[1].title}</p>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {next && (
          <Link href={next[0]} rel="next" className="block border-t border-slate-200 pt-4 hover:text-brand-green">
            <span className="text-slate-500">Next</span>
            <p className="font-medium text-brand-forest">{next[1].title}</p>
          </Link>
        )}
      </div>
    </nav>
  );
}

function find(slug: string) {
  return PAGES[pathFor(slug)];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = find(params.slug);
  if (!page) return {};
  return {
    title: page.seoTitle || `${page.title} | Ichiban Stays`,
    description: page.description || undefined,
    alternates: { canonical: pathFor(params.slug) },
    openGraph: page.image ? { images: [page.image] } : undefined,
  };
}

function Consultation({ html }: { html: string }) {
  // The WordPress export flattens this Elementor page; the hero and form are rebuilt here.
  const rest = html.slice(html.indexOf("<h2>What Happens"));
  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(https://ichibanstays.com/wp-content/uploads/2026/10/ichiban-hero-living-room.webp)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/0" />
        <div className="relative max-w-[1440px] mx-auto px-5 py-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div className="pt-4">
            <p className="text-[15px] tracking-wide uppercase text-[#a08b5b]">Premium Property Management</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-brand-ink leading-[1.3] mt-2">
              Maximise Your <br />Rental Income. <br />
              <span className="text-brand-green">We Handle <br />Everything.</span>
            </h1>
            <div className="font-body text-sm text-brand-ink mt-4 max-w-[300px] leading-6">
              We help UK landlords earn more through fully managed short stay accommodation. We handle everything so you
              enjoy higher returns without the day-to-day hassle.
            </div>
            <div className="grid grid-cols-3 mt-24 max-w-[580px] rounded-lg bg-[#4d5d45]/90 text-white text-center py-4">
              {[
                [Shield, "No Upfront Fees", "100% free to get started"],
                [UserCog, "Dedicated Manager", "One point of contact"],
                [LockOpen, "Your Data is Safe", "We never share your data"],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Shield;
                return (
                  <div key={t as string} className="px-2">
                    <I className="w-9 h-9 mx-auto text-[#b79b5a]" />
                    <h3 className="font-semibold text-sm mt-2">{t as string}</h3>
                    <p className="text-xs">{d as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CalendarDays className="w-7 h-7 mx-auto text-brand-green" />
            <h2 className="text-xl font-semibold text-center text-brand-green mt-3">Book Your Free Consultation</h2>
            <p className="text-sm text-slate-500 text-center my-5">
              Schedule a no-obligation consultation with one of our property specialists to discuss how we can maximise
              your rental income.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
      <section className="px-5 py-16">
        <WpContent html={rest} />
      </section>
    </>
  );
}

export default function WpPage({ params }: { params: { slug: string } }) {
  const page = find(params.slug);
  if (!page) return notFound();

  if (params.slug === "book-a-consultation") return <Consultation html={page.html} />;

  const isPost = page.kind === "post";
  return (
    <article>
      <header className="page-hero">
        <h1>{page.title}</h1>
        {isPost && (
          <p className="meta">
            By Ichiban Stays Team /{" "}
            {new Date(page.date + "T12:00:00Z").toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
          </p>
        )}
      </header>
      <div className="px-5 pt-12 pb-16">
        {isPost && page.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={page.image} alt="" className="w-full max-w-[780px] mx-auto rounded-lg mb-10" />
        )}
        <WpContent html={page.html} />
      </div>
      {isPost && <PostNav slug={params.slug} />}
    </article>
  );
}
