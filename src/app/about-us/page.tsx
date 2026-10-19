import React from "react";
import { BRAND_INFO } from "@/data/siteData";

export default function AboutUsPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
          About Ichiban Stays
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
          Your Property, Managed as If It Were Our Own
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Ichiban Stays is a London-based short-let and serviced accommodation management company. We fully manage short-term rentals for UK landlords, so your property earns more without becoming a second job.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Our team brings more than 20 years of experience in London short-term rentals and hospitality. We work with landlords across London and UK cities, using PriceLabs dynamic pricing alongside our in-house property management software.
        </p>
        <div className="p-6 rounded-2xl bg-[#1E4D3B] text-white space-y-2">
          <div className="text-xs uppercase tracking-widest text-[#1F8A88]">Mayfair Headquarters</div>
          <div className="font-semibold">{BRAND_INFO.address}</div>
          <div className="text-sm text-slate-300">
            {BRAND_INFO.phone} • {BRAND_INFO.email} ({BRAND_INFO.hours})
          </div>
        </div>
      </div>
    </div>
  );
}
