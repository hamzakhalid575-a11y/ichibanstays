import React from "react";
import { LANDLORD_FAQS, GUEST_FAQS } from "@/data/siteData";

export default function FAQPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
          Help Centre
        </span>
        <h1 className="font-serif text-4xl font-bold text-slate-900">
          Frequently Asked Questions
        </h1>
      </div>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Landlord FAQs</h2>
        {LANDLORD_FAQS.map((item) => (
          <div key={item.q} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-2">
            <h3 className="font-semibold text-slate-900">{item.q}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Guest FAQs</h2>
        {GUEST_FAQS.map((item) => (
          <div key={item.q} className="bg-white rounded-2xl p-6 border border-slate-200 space-y-2">
            <h3 className="font-semibold text-slate-900">{item.q}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
