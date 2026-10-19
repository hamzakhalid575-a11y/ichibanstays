import React from "react";
import { notFound } from "next/navigation";
import { GUIDES } from "@/data/siteData";
import ProjectionForm from "@/components/ProjectionForm";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default function GuideArticlePage({ params }: { params: { slug: string } }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return notFound();

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="text-xs text-[#1F8A88] font-semibold uppercase tracking-widest">
          {guide.category} • {guide.readTime} • {guide.publishedDate}
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
          {guide.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">{guide.excerpt}</p>
        <div className="space-y-6 pt-4 border-t border-slate-100">
          {guide.sections.map((s) => (
            <div key={s.heading} className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-slate-900">{s.heading}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </article>

      <ProjectionForm />
    </div>
  );
}
