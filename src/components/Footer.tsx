import React from "react";
import Link from "next/link";
import { Building2, Mail, Phone, MapPin, CheckCircle2, MessageSquare } from "lucide-react";
import { BRAND_INFO, SERVICES } from "@/data/siteData";

const CREDENTIALS = [
  "UK-Based Property Management",
  "Professional Serviced Accommodation",
  "Corporate & Leisure Stays",
  "Revenue Optimisation for Landlords",
  "Fully Managed Property Services",
  "24/7 Guest Support",
  "Trusted Property Management Solutions",
];

export default function Footer() {
  return (
    <footer className="bg-[#1E4D3B] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1F8A88] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-lg font-bold text-white">ICHIBAN STAYS</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#1F8A88] font-semibold">
              Fully Managed Short Stay Properties
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ichiban Stays is a UK property management company specialising in fully managed short stay and serviced accommodation. From guest communication and housekeeping to pricing optimisation and maintenance, we handle everything – so you don&apos;t have to.
            </p>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-[#1F8A88] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-we-cover" className="hover:text-[#1F8A88] transition-colors">
                  London & UK Coverage
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[#1F8A88] transition-colors">
                  Landlord Guides & 90-Day Rule
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1F8A88] shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1F8A88] shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-500">Phone</div>
                  <a href={`tel:${BRAND_INFO.phoneClean}`} className="hover:text-white">
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1F8A88] shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-slate-500">Address</div>
                  <span>{BRAND_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Credentials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Credentials
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {CREDENTIALS.map((cred) => (
                <li key={cred} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1F8A88] shrink-0" />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="text-[#1F8A88] font-medium mr-2">{BRAND_INFO.subTagline}</span>
            {BRAND_INFO.copyright}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </div>

      {/* Floating Bottom Quick-Action Bar */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href={`tel:${BRAND_INFO.phoneClean}`}
          className="bg-[#0D2B20]/95 hover:bg-slate-800 text-white border border-slate-700 px-3.5 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-medium transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#1F8A88]" />
          Call
        </a>
        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-medium transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
