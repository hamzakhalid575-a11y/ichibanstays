import React from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/siteData";
import ProjectionForm from "@/components/ProjectionForm";
import { CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="bg-[#1E4D3B] text-white rounded-3xl p-8 sm:p-12 space-y-4">
        <div className="text-xs uppercase tracking-widest text-[#1F8A88] font-semibold">
          Ichiban Stays — UK Landlord Service
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold">{service.title}</h1>
        <p className="text-slate-300 text-lg max-w-2xl">{service.heroSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            What Ichiban Stays Handles For You
          </h2>
          <ul className="space-y-3">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1F8A88] shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900">How We Work</h2>
          {service.details.map((p, idx) => (
            <p key={idx} className="text-sm text-slate-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 text-center">
          Request Your Free Income Projection
        </h2>
        <ProjectionForm />
      </div>
    </div>
  );
}
