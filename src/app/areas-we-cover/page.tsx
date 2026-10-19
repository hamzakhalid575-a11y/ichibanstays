import React from "react";
import Link from "next/link";
import { LONDON_AREAS, UK_CITIES } from "@/data/siteData";
import { MapPin } from "lucide-react";

export default function AreasWeCoverPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
          London & Nationwide Coverage
        </span>
        <h1 className="font-serif text-4xl font-bold text-slate-900">Areas We Cover</h1>
        <p className="text-slate-600 leading-relaxed">
          Ichiban Stays manages short lets, Airbnb and serviced accommodation across the UK. In London we cover all 32 boroughs and the City of London, and we also manage properties in major cities nationwide.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-slate-900">
          London Neighbourhood Guides ({LONDON_AREAS.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LONDON_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#1F8A88] shadow-sm transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-lg text-slate-900">{area.name}</span>
                <span className="text-xs bg-slate-100 px-2.5 py-1 rounded-full text-slate-700">
                  {area.avgNightlyRate}/night
                </span>
              </div>
              <p className="text-xs text-slate-500">{area.boroughOrArea}</p>
              <p className="text-xs text-slate-600 line-clamp-2">{area.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-slate-900">
          UK Cities Across England, Scotland & Wales ({UK_CITIES.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {UK_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/areas/${city.slug}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#1F8A88] shadow-sm transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-lg text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#1F8A88]" /> {city.name}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {city.region}
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2">{city.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
