import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight, BadgeCheck, BarChart3, Bath, BedDouble, Calculator, CalendarDays, CheckCircle2, Headset, Home,
  LineChart, Mail, MapPin, Phone, Banknote, Star, StarHalf, Users, Search, Shield, ShoppingBag, User,
} from "lucide-react";
import ProjectionForm from "@/components/ProjectionForm";
import { BRAND, metadataFor } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const UP = "/wp-content/uploads";

export const metadata: Metadata = metadataFor("/");

const heroStats = [
  { Icon: Users, value: "98%", label: "Average Occupancy" },
  { Icon: Headset, value: "24/7", label: "Guest Support" },
  { Icon: Calculator, value: "350+", label: "Bookings Managed" },
  { Icon: BarChart3, value: "Approx .35%", label: "Higher Rental Returns" },
];

const steps = [
  { Icon: Search, title: "Free Property\nAssessment", text: "We evaluate your property\nand its short stay potential." },
  { Icon: Headset, title: "Income\nProjection", text: "Receive a tailored income projection and strategy." },
  { Icon: Calculator, title: "Prepare & List", text: "We prepare your property and\n list it on top platforms." },
  { Icon: Users, title: "Guest\nManagement", text: "We handle guests, cleaning,\nmaintenance & support." },
  { Icon: Banknote, title: "Monthly\nPayments", text: "Receive your rental income\nwith a clear monthly statement." },
];

const performance = [
  { Icon: Banknote, value: "£2M+", label: "Revenue Generated" },
  { Icon: Star, value: "4.9 ★", label: "Average Guest Rating" },
  { Icon: CalendarDays, value: "120+", label: "Properties Managed" },
  { Icon: StarHalf, value: "5 ★", label: "Guest Experience......" },
];

const properties = [
  { title: "Luxury Apartment", img: `${UP}/2026/10/ichiban-hero-living-room.webp`, alt: "Luxury apartment in London managed by Ichiban Stays", beds: 2, baths: 2 },
  { title: "Country Estates", img: `${UP}/2026/10/ichiban-managed-apartment-1.webp`, alt: "Country estate property managed as a short let by Ichiban Stays", beds: 2, baths: 1 },
  { title: "Terraced House", img: `${UP}/2026/10/ichiban-managed-apartment-3.webp`, alt: "Terraced house managed as a short let by Ichiban Stays", beds: 1, baths: 1 },
  { title: "Central London", img: `${UP}/2026/10/ichiban-managed-apartment-2.webp`, alt: "Central London apartment managed by Ichiban Stays", beds: 3, baths: 3 },
];

const services = [
  { Icon: Home, label: "Serviced Accommodation" },
  { Icon: User, label: "Property Management" },
  { Icon: Shield, label: "Guaranteed Rent" },
  { Icon: ShoppingBag, label: "Corporate Lets" },
  { Icon: CalendarDays, label: "Short-Term Rental Management" },
  { Icon: LineChart, label: "Property Valuation" },
];
const credentials = [
  "UK-Based Property Management", "Professional Serviced Accommodation", "Corporate & Leisure Stays",
  "Revenue Optimisation for Landlords", "Fully Managed Property Services", "24/7 Guest Support",
  "Trusted Property Management Solutions",
];

const sectionH = "font-serif font-medium text-brand-forest text-4xl sm:text-[44px] leading-tight";
const aboutH = "font-serif font-semibold uppercase tracking-[0.12em] text-brand-forest text-base md:text-2xl";
const Rule = () => <div className="w-12 h-0.5 bg-brand-teal mt-3 mb-6" />;
const outline =
  "inline-flex items-center gap-2 px-6 py-3.5 border border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white text-xs font-medium uppercase tracking-wide transition-colors";

export default function HomePage() {
  return (
    <>
      <JsonLd path="/" />
      {/* Hero */}
      <section
        className="hero-bg relative bg-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1e3a26_0%,rgba(30,58,38,0.93)_32%,rgba(30,58,38,0.4)_62%,rgba(30,58,38,0)_100%)] max-md:bg-[#1e3a26]/80" />
        <div className="relative max-w-[1440px] mx-auto px-5 lg:px-6 pt-12 pb-0">
          <div className="max-w-[620px] border-l-2 border-brand-teal pl-4 sm:pl-8 -ml-1">
            <p className="font-serif text-xl font-semibold text-white/80">Short Let Management Across the UK</p>
            <h1 className="font-serif text-[32px] sm:text-[52px] font-medium leading-[1.1] mt-2">
              Unlock Higher Income <br />with Short – Term Lettings <br />Without the Hassle
            </h1>
            <div className="font-body text-base sm:text-lg leading-[1.7] mt-6 text-white/90 max-w-[560px]">
              <p>We help UK landlords earn more through fully managed short-stay accommodation.</p>
              <p>We handle 100% of the work, so you enjoy higher returns without the day-to-day hassle.</p>
            </div>
            <p className="flex items-center gap-2 mt-4">
              <BadgeCheck className="w-5 h-5" /> No Upfront Fees
            </p>
            <div className="flex flex-wrap gap-4 mt-7 pb-9">
              <a href="#booking-form" className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 rounded-md sm:rounded-none bg-white text-black font-medium shadow-md hover:bg-slate-100 transition-colors">
                Get Your Free Assessment <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/25 mt-2 lg:w-[75%]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 py-6">
              {heroStats.map(({ Icon, value, label }) => (
                <div key={label} className="flex max-sm:flex-col max-sm:text-center items-center gap-3 px-3 sm:px-5 lg:border-l border-white/25">
                  <Icon className="w-7 h-7 shrink-0" />
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl leading-none">{value}</p>
                    <p className="text-sm mt-1 text-white/85">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 steps */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-5 pt-16 md:pt-24 pb-16">
        <p className="font-serif italic text-xl text-brand-teal">How It Works</p>
        <h2 className={`${sectionH} mt-2`}>Our Simple 5 Step Process</h2>
        <div className="relative grid gap-4 md:flex md:flex-wrap md:justify-center md:gap-y-10 lg:grid lg:grid-cols-5 mt-10 md:mt-14">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-brand-teal/40" />
          {steps.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="relative md:w-1/3 lg:w-auto max-md:grid max-md:grid-cols-[72px_1fr] max-md:gap-x-4 max-md:items-center max-md:bg-white max-md:border max-md:border-slate-200 max-md:rounded-xl max-md:shadow-sm max-md:p-4 md:text-center md:px-3"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-slate-300 text-brand-forest flex items-center justify-center md:mx-auto">
                <Icon className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-brand-teal md:mt-5">{i + 1}</p>
                <h3 className="font-medium whitespace-pre-line md:mt-2 md:mx-auto leading-relaxed">{title}</h3>
              </div>
              <p className="font-body whitespace-pre-line text-base md:text-[17px] text-slate-700 mt-3 md:mt-5 leading-7 md:leading-8 max-md:col-span-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Performance */}
      <section className="max-w-[1440px] mx-auto px-5">
        <div className="border-b border-slate-200 pb-16 pt-10 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {performance.map(({ Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center md:text-left md:items-start border-slate-400 md:px-10 md:[&:nth-child(even)]:border-l lg:[&:nth-child(n+2)]:border-l">
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                <Icon className="w-7 h-7 text-brand-teal shrink-0" />
                <p className="font-serif text-4xl font-medium text-brand-forest">{value}</p>
              </div>
              <p className="font-body text-sm md:text-base text-slate-700 mt-1 md:ml-11">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section
        id="booking-form"
        className="relative bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${UP}/2026/08/WhatsApp-Image-2026-08-03-at-7.50.19-PM-1-1.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c4834] via-[#2c4834]/85 to-[#2c4834]/10" />
        <div className="relative max-w-[640px] mx-auto px-3 sm:px-5 py-12 sm:py-28">
          <ProjectionForm />
        </div>
      </section>

      {/* Properties */}
      <section className="bg-[#f3f5f2]">
        <div className="max-w-[1440px] mx-auto px-5 py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className={sectionH}>Handpicked Properties We Manage</h2>
            <Link href="/book-a-consultation/" className={outline}>BOOK A CONSULTATION <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <p className="lg:hidden mt-8 text-xs font-semibold tracking-[0.15em] uppercase text-brand-teal">Swipe to see more →</p>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:grid lg:grid-cols-4 lg:gap-6 mt-6 lg:mt-12 pb-2 -mx-5 px-5 lg:mx-0 lg:px-0">
            {properties.map((p) => (
              <Link key={p.title} href="/book-a-consultation/" className="group block bg-white rounded-md shadow-sm overflow-hidden shrink-0 w-[290px] snap-start lg:w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} className="w-full aspect-[4/3] object-cover" />
                <div className="px-8 pt-8 pb-6">
                  <h3 className="font-serif text-[26px] font-medium group-hover:text-brand-green">{p.title}</h3>
                  <p className="text-sm text-brand-teal mt-2">London</p>
                  <div className="border-t border-slate-200 mt-6 pt-5 flex justify-center gap-8 text-sm text-slate-700">
                    <span className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-brand-green" />{p.beds} Bed</span>
                    <span className="flex items-center gap-2"><Bath className="w-4 h-4 text-brand-green" />{p.baths} Bath</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / services / contact / credentials */}
      <section className="max-w-[1440px] mx-auto px-5 py-20 grid lg:grid-cols-[1.1fr_1fr_1.1fr_1.1fr] gap-x-10 gap-y-12">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BRAND.logo} alt="Ichiban Stays" className="h-12 md:h-14 w-auto shadow-sm" />
          <p className="font-serif italic text-xl text-brand-green mt-4">Fully Managed Short Stay Properties</p>
          <h3 className={`${aboutH} mt-16 normal-case tracking-normal`}>About US</h3>
          <Rule />
          <p className="font-body text-slate-700 leading-8">
            Ichiban Stays is a UK property management company specialising in fully managed short stay and serviced
            accommodation. We help landlords maximise rental income while providing exceptional stays for corporate
            travellers, professionals, families and leisure guests. From guest communication and housekeeping to pricing
            optimisation and maintenance, we handle everything – so you don&apos;t have to.
          </p>
        </div>
        <div>
          <h3 className={aboutH}>OUR SERVICES</h3>
          <Rule />
          <ul>
            {services.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-5 py-3.5 border-b border-slate-200 last:border-0 md:w-[210px]">
                <Icon className="w-8 h-8 text-brand-green shrink-0" />
                <span className="text-slate-700 leading-snug">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div id="contact">
          <h3 className={aboutH}>CONTACT</h3>
          <Rule />
          <ul>
            {[
              { Icon: Mail, t: "Email", v: <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> },
              { Icon: Phone, t: "Phone", v: <a href={BRAND.phoneHref} className="text-blue-700">{BRAND.phone}</a> },
              { Icon: MapPin, t: "Address", v: <>{BRAND.address.join(" ")}</> },
            ].map(({ Icon, t, v }) => (
              <li key={t} className="flex gap-5 py-6 border-b border-slate-200 last:border-0 max-md:flex-col max-md:items-center max-md:text-center">
                <span className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-brand-forest" /></span>
                <div><h4 className="font-serif text-2xl font-semibold leading-none mb-2">{t}</h4><div className="text-slate-800 leading-6">{v}</div></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={aboutH}>OUR CREDENTIALS</h3>
          <Rule />
          <ul>
            {credentials.map((s) => (
              <li key={s} className="flex items-center gap-4 py-3.5 border-b border-slate-200 last:border-0">
                <CheckCircle2 className="w-6 h-6 text-brand-forest shrink-0" />
                <span className="text-slate-700 leading-snug">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
