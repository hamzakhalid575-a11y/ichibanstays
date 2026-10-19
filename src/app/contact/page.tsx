import React from "react";
import ProjectionForm from "@/components/ProjectionForm";
import { BRAND_INFO } from "@/data/siteData";

export default function ContactPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1F8A88]">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl font-bold text-slate-900">
          Book a Consultation or Free Assessment
        </h1>
        <p className="text-sm text-slate-600">
          Call {BRAND_INFO.phone}, email {BRAND_INFO.email}, or visit us at {BRAND_INFO.address}.
        </p>
      </div>
      <ProjectionForm />
    </div>
  );
}
