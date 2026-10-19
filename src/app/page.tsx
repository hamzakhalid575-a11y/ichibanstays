import React from "react";
import Link from "next/link";
import {
  HERO_STATS,
  PERFORMANCE_STATS,
  FIVE_STEPS,
  HANDPICKED_PROPERTIES,
  SERVICES,
  LONDON_AREAS,
  BRAND_INFO,
} from "@/data/siteData";
import ProjectionForm from "@/components/ProjectionForm";
import { CheckCircle2, ArrowRight, BedDouble, Bath, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1E4D3B] text-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F8A88]/15 border border-[#1F8A88]/40 text-[#1F8A88] text-xs font-semibold uppercase tracking-widest">
              Short Let Management Across the UK
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Unlock Higher Income with Short-Term Lettings{" "}
              <span className="text-[#1F8A88]">Without the Hassle</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We help UK landlords earn more through fully managed short-stay accommodation.
              We handle 100% of the work, so you enjoy higher returns without the day-to-day hassle.
            </p>
            <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>No Upfront Fees — Dedicated UK Property Manager</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projection-form"
                className="bg-[#1F8A88] hover:bg-[#d4b06a] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm"
              >
                Get Your Free Assessment
              </a>
              <Link
                href="/contact"
                className="bg-[#0D2B20] hover:bg-slate-800 text-white border border-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm"
              >
                BOOK A CONSULTATION
              </Link>
            </div>
          </div>

          {/* Stats Bar 1 */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#0D2B20]/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1F8A88]">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — 5 Step Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
            How It Works
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Our Simple 5 Step Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {FIVE_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1E4D3B] text-[#1F8A88] font-serif font-bold flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats Row 2 */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#1E4D3B] text-white rounded-2xl p-8">
          {PERFORMANCE_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-[#1F8A88]">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Income Projection Form */}
      <section id="projection-form" className="py-20 bg-[#0D2B20] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
              Free Assessment Tool
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Get Your Free Income Projection
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Discover how much your property could earn with professionally managed short-term letting.
            </p>
          </div>
          <ProjectionForm />
        </div>
      </section>

      {/* Handpicked Properties We Manage */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
              Managed Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Handpicked Properties We Manage
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1E4D3B] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors"
          >
            BOOK A CONSULTATION <ArrowRight className="w-4 h-4 text-[#1F8A88]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HANDPICKED_PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#1F8A88] font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {prop.location}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                    {prop.occupancy} Occ.
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">{prop.title}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4 text-slate-400" /> {prop.beds} Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-slate-400" /> {prop.baths} Bath
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us & Services Overview */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
              Fully Managed Short Stay Properties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              About Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ichiban Stays is a UK property management company specialising in fully managed short stay and serviced accommodation. We help landlords maximise rental income while providing exceptional stays for corporate travellers, professionals, families and leisure guests.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From guest communication and housekeeping to pricing optimisation and maintenance, we handle everything – so you don&apos;t have to.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              {LONDON_AREAS.slice(0, 6).map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="text-xs bg-slate-100 hover:bg-[#1F8A88] hover:text-white px-3 py-1.5 rounded-full font-medium transition-colors"
                >
                  {area.name}
                </Link>
              ))}
              <Link
                href="/areas-we-cover"
                className="text-xs text-[#1F8A88] font-semibold px-2 py-1.5 hover:underline"
              >
                View all 28 UK areas →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1F8A88] transition-all"
              >
                <h3 className="font-serif font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
