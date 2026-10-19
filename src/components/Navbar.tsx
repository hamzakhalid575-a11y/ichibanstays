"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { SERVICES, LONDON_AREAS, UK_CITIES, GUIDES, BRAND_INFO } from "@/data/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#1E4D3B]/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1F8A88] to-[#9A7432] flex items-center justify-center shadow-md">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-white block leading-none">
              ICHIBAN STAYS
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#1F8A88] block mt-1">
              Short Let Management UK
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <Link href="/" className="hover:text-[#1F8A88] transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#1F8A88] py-2 transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full w-72 bg-[#0D2B20] border border-slate-800 rounded-xl shadow-2xl p-2 grid gap-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-3 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <div className="font-medium text-white text-sm">{s.title}</div>
                    <div className="text-xs text-slate-400 line-clamp-1">{s.shortDesc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Areas We Cover Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("areas")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/areas-we-cover"
              className="flex items-center gap-1 hover:text-[#1F8A88] py-2 transition-colors"
            >
              Areas We Cover <ChevronDown className="w-4 h-4" />
            </Link>
            {openDropdown === "areas" && (
              <div className="absolute -left-24 top-full w-[580px] bg-[#0D2B20] border border-slate-800 rounded-xl shadow-2xl p-5 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1F8A88] mb-2">
                    London Neighbourhoods
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {LONDON_AREAS.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/areas/${a.slug}`}
                        className="text-xs text-slate-300 hover:text-white hover:bg-slate-800 px-2 py-1.5 rounded transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1F8A88] mb-2">
                    UK Cities ({UK_CITIES.length})
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                    {UK_CITIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/areas/${c.slug}`}
                        className="text-xs text-slate-300 hover:text-white hover:bg-slate-800 px-2 py-1.5 rounded transition-colors"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Guides Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("guides")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/guides"
              className="flex items-center gap-1 hover:text-[#1F8A88] py-2 transition-colors"
            >
              Guides <ChevronDown className="w-4 h-4" />
            </Link>
            {openDropdown === "guides" && (
              <div className="absolute left-0 top-full w-80 bg-[#0D2B20] border border-slate-800 rounded-xl shadow-2xl p-2 grid gap-1">
                {GUIDES.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-800 text-xs text-slate-200 hover:text-white transition-colors"
                  >
                    {g.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about-us" className="hover:text-[#1F8A88] transition-colors">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-[#1F8A88] transition-colors">
            FAQs
          </Link>
          <Link href="/contact" className="hover:text-[#1F8A88] transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/portal"
            className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#1F8A88]" />
            Portal
          </Link>
          <a
            href="#projection-form"
            className="bg-[#1F8A88] hover:bg-[#d4b06a] text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md transition-all"
          >
            Get Free Projection
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D2B20] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2 text-white font-medium">
            Home
          </Link>
          <Link href="/services/short-term-property-management" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-300">
            Services
          </Link>
          <Link href="/areas-we-cover" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-300">
            Areas We Cover (London & UK)
          </Link>
          <Link href="/guides" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-300">
            Landlord Guides
          </Link>
          <Link href="/about-us" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-300">
            About Us
          </Link>
          <Link href="/faq" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-300">
            FAQs
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-300">
            Contact Us
          </Link>
          <Link href="/portal" onClick={() => setMobileOpen(false)} className="block py-2 text-[#1F8A88] font-medium">
            Landlord & Admin Portal (Firebase Auth)
          </Link>
          <a
            href="#projection-form"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-[#1F8A88] text-white font-semibold py-3 rounded-lg"
          >
            Get Free Projection
          </a>
        </div>
      )}
    </header>
  );
}
