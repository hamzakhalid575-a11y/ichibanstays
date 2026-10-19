import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: { absolute: "Page not found - Ichiban Stays" } };

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-24 text-center text-[#1f2937]">
      <h1 className="text-4xl sm:text-[40px] font-normal">This page doesn&apos;t seem to exist.</h1>
      <p className="text-2xl mt-8">It looks like the link pointing here was faulty.</p>
      <p className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-md bg-brand-green hover:bg-brand-greenDark text-white text-sm font-medium transition-colors"
        >
          Back to the homepage
        </Link>
      </p>
    </section>
  );
}
