import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGES, pathFor } from "@/lib/site";
import WpContent from "@/components/WpContent";
import BookingForm from "@/components/BookingForm";

const entries = Object.entries(PAGES).filter(([p]) => p !== "/");

export function generateStaticParams() {
  return entries.map(([, v]) => ({ slug: v.slug }));
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
  // The WordPress export flattens this Elementor page; the intro and form are rebuilt here.
  const rest = html.slice(html.indexOf("<h2>What Happens"));
  return (
    <>
      <section className="bg-brand-sage">
        <div className="max-w-5xl mx-auto px-5 py-16 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-brand-green font-semibold mb-4">Premium Property Management</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-brand-ink leading-tight">
            Maximise Your Rental Income. <span className="text-brand-green">We Handle Everything.</span>
          </h1>
          <p className="font-body text-brand-muted mt-6 max-w-2xl mx-auto">
            We help UK landlords earn more through fully managed short stay accommodation. We handle everything so you
            enjoy higher returns without the day-to-day hassle.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-10 text-left">
            {[
              ["No Upfront Fees", "100% free to get started"],
              ["Dedicated Manager", "One point of contact"],
              ["Your Data is Safe", "We never share your data"],
            ].map(([t, d]) => (
              <div key={t} className="bg-white rounded-lg p-5 border border-[#dfe3d8]">
                <h3 className="font-serif text-xl font-semibold text-brand-green">{t}</h3>
                <p className="text-sm text-brand-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-xl mx-auto px-5 py-14">
        <div className="bg-white border border-[#dfe3d8] rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif text-3xl font-semibold text-center text-brand-green mb-2">Book Your Free Consultation</h2>
          <p className="text-sm text-brand-muted text-center mb-6">
            Schedule a no-obligation consultation with one of our property specialists to discuss how we can maximise your
            rental income.
          </p>
          <BookingForm />
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-5 pb-20">
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
      <header className="bg-brand-sage">
        <div className="max-w-3xl mx-auto px-5 py-14 sm:py-20">
          {isPost && (
            <p className="text-xs tracking-[0.2em] uppercase text-brand-green font-semibold mb-3">
              {page.categories[0] || "Guides"} ·{" "}
              {new Date(page.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-brand-ink leading-tight">{page.title}</h1>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-5 py-12">
        {isPost && page.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={page.image} alt="" className="w-full rounded-lg mb-10" />
        )}
        <WpContent html={page.html} />
        {isPost && (
          <p className="mt-12">
            <Link href="/landlord-guides/" className="text-brand-green underline underline-offset-4">
              ← All landlord guides
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
