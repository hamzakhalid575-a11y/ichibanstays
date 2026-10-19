import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGES, pathFor, metadataFor } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
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
    <nav aria-label="Posts" className="max-w-[700px] mx-auto px-5 pb-16 grid sm:grid-cols-2 gap-6 text-sm">
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
  if (!find(params.slug)) return {};
  return metadataFor(pathFor(params.slug));
}

function Consultation({ html }: { html: string }) {
  // The WordPress export flattens this Elementor page; the hero and form are rebuilt here.
  const rest = html.slice(html.indexOf("<h2>What Happens"));
  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(/wp-content/uploads/2026/07/ea1c886d-00d7-476f-80ca-1c32043767d7.webp)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-white/0" />
        <div className="relative max-w-[1400px] mx-auto px-5 pt-[50px] pb-[30px] grid lg:grid-cols-[65fr_35fr] gap-10 items-start">
          <div className="lg:pr-[60px]">
            <p className="text-base uppercase text-[#a28d62]">Premium Property Management</p>
            <h1 className="font-serif text-[40px] sm:text-[58px] font-medium text-brand-ink leading-[1.4]">
              Maximise Your <br />Rental Income. <br />
              <span className="text-[#2e5b3f]">We Handle <br />Everything.</span>
            </h1>
            <div className="font-body text-sm text-brand-ink mt-1 max-w-[300px] leading-[1.45] lg:pr-0">
              We help UK landlords earn more through fully managed short stay accommodation. We handle everything so you
              enjoy higher returns without the day-to-day hassle.
            </div>
            <div className="grid grid-cols-3 mt-12 lg:mt-[100px] max-w-[730px] rounded-[15px] bg-[#082112]/[0.68] text-white text-center p-5">
              {[
                [Shield, "No Upfront Fees", "100% free to get started"],
                [UserCog, "Dedicated Manager", "One point of contact"],
                [LockOpen, "Your Data is Safe", "We never share your data"],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Shield;
                return (
                  <div key={t as string} className="px-2">
                    <I className="w-10 h-10 mx-auto text-[#a28d62]" />
                    <h3 className="font-semibold text-xs sm:text-lg mt-2 [text-shadow:0_0_10px_rgba(0,0,0,0.3)]">{t as string}</h3>
                    <p className="text-[10px] sm:text-sm">{d as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-[15px] shadow-xl pt-[33px] px-6 sm:px-10 pb-[30px]">
            <CalendarDays className="w-7 h-7 mx-auto text-[#a28d62]" />
            <h2 className="text-2xl font-semibold text-center text-[#2e5b3f] mt-2">Book Your Free Consultation</h2>
            <div className="flex items-center justify-center gap-2 my-4 mx-auto w-[40%]" aria-hidden="true">
              <span className="flex-1 h-px bg-[#a28d62]" />
              <span className="w-2 h-2 rotate-45 border border-[#a28d62]" />
              <span className="flex-1 h-px bg-[#a28d62]" />
            </div>
            <p className="text-[15px] text-slate-500 text-center mb-7 leading-[1.7]">
              Schedule a no-obligation consultation with one of our property specialists to discuss how we can maximise
              your rental income.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
      <section className="px-5 py-[60px]">
        <WpContent html={rest} plain />
      </section>
    </>
  );
}

export default function WpPage({ params }: { params: { slug: string } }) {
  const page = find(params.slug);
  if (!page) return notFound();

  const path = pathFor(params.slug);
  if (params.slug === "book-a-consultation")
    return (
      <>
        <JsonLd path={path} />
        <Consultation html={page.html} />
      </>
    );

  const isPost = page.kind === "post";
  return (
    <article>
      <JsonLd path={path} />
      <header className={`page-hero${isPost ? " is-post" : ""}`}>
        <h1>{page.title}</h1>
        {isPost && (
          <p className="meta">
            By Ichiban Stays Team /{" "}
            {new Date(page.date + "T12:00:00Z").toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
          </p>
        )}
      </header>
      <div className="px-5 pt-12 pb-16">
        <WpContent html={page.html} post={isPost} />
      </div>
      {isPost && <PostNav slug={params.slug} />}
    </article>
  );
}
