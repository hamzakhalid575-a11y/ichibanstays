import React from "react";
import Link from "next/link";
import { GUIDES } from "@/data/siteData";

export default function GuidesIndexPage() {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
          Knowledge Base for UK Landlords
        </span>
        <h1 className="font-serif text-4xl font-bold text-slate-900">
          Short-Let & Property Management Guides
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GUIDES.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#1F8A88] shadow-sm flex flex-col justify-between transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="text-[#1F8A88] font-semibold">{g.category}</span>
                <span>{g.readTime}</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-slate-900">{g.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{g.excerpt}</p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-slate-900">
              Read Guide →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
