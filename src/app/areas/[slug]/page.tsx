import React from "react";
import { notFound } from "next/navigation";
import { ALL_AREAS } from "@/data/siteData";
import ProjectionForm from "@/components/ProjectionForm";

export function generateStaticParams() {
  return ALL_AREAS.map((a) => ({ slug: a.slug }));
}

export default function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = ALL_AREAS.find((a) => a.slug === params.slug);
  if (!area) return notFound();

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="bg-[#1E4D3B] text-white rounded-3xl p-8 sm:p-12 space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#1F8A88] font-semibold">
          {area.region} • {area.boroughOrArea}
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold">
          Property Management in {area.name}
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl">{area.summary}</p>
        <div className="flex flex-wrap gap-4 pt-2 text-xs">
          <span className="bg-[#0D2B20] border border-slate-800 px-3.5 py-2 rounded-lg">
            Typical ADR: <strong className="text-[#1F8A88]">{area.avgNightlyRate}</strong>
          </span>
          <span className="bg-[#0D2B20] border border-slate-800 px-3.5 py-2 rounded-lg">
            Target Occupancy: <strong className="text-[#1F8A88]">{area.occupancyTarget}</strong>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-2">
          <h2 className="font-serif font-bold text-xl text-slate-900">Guest Demand Profile</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{area.guestProfile}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-2">
          <h2 className="font-serif font-bold text-xl text-slate-900">Local Compliance & Strategy</h2>
          <p className="text-sm text-slate-600 leading-relaxed">{area.regulationNote}</p>
        </div>
      </div>

      <ProjectionForm />
    </div>
  );
}
