import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight, BadgeCheck, BarChart3, Calculator, CalendarDays, Headset, Mail, MapPinned,
  Phone, Banknote, Star, StarHalf, Users, Search, Check,
} from "lucide-react";
import ProjectionForm from "@/components/ProjectionForm";
import { BRAND } from "@/lib/site";

const UP = "https://ichibanstays.com/wp-content/uploads";

export const metadata: Metadata = {
  title: "Short Let Management London | Ichiban Stays",
  description:
    "Short let management in London for UK landlords. Ichiban Stays handles bookings, guests, cleaning and compliance, with no upfront fees. Get a free projection.",
  alternates: { canonical: "/" },
};

const heroStats = [
  { Icon: Users, value: "98%", label: "Average Occupancy" },
  { Icon: Headset, value: "24/7", label: "Guest Support" },
  { Icon: Calculator, value: "350+", label: "Bookings Managed" },
  { Icon: BarChart3, value: "Approx .35%", label: "Higher Rental Returns" },
];

const steps = [
  { Icon: Search, title: "Free Property Assessment", text: "We evaluate your property and its short stay potential." },
  { Icon: Headset, title: "Income Projection", text: "Receive a tailored income projection and strategy." },
  { Icon: Calculator, title: "Prepare & List", text: "We prepare your property and list it on top platforms." },
  { Icon: Users, title: "Guest Management", text: "We handle guests, cleaning, maintenance & support." },
  { Icon: Banknote, title: "Monthly Payments", text: "Receive your rental income with a clear monthly statement." },
];

const performance = [
  { Icon: Banknote, value: "£2M+", label: "Revenue Generated" },
  { Icon: Star, value: "4.9 ★", label: "Average Guest Rating" },
  { Icon: CalendarDays, value: "120+", label: "Properties Managed" },
  { Icon: StarHalf, value: "5 ★", label: "Guest Experience" },
];

const properties = [
  { title: "Luxury Apartment", img: `${UP}/2026/10/ichiban-hero-living-room.webp`, alt: "Luxury apartment in London managed by Ichiban Stays", beds: 2, baths: 2 },
  { title: "Country Estates", img: `${UP}/2026/10/ichiban-managed-apartment-1.webp`, alt: "Country estate property managed as a short let by Ichiban Stays", beds: 2, baths: 1 },
  { title: "Terraced House", img: `${UP}/2026/10/ichiban-managed-apartment-3.webp`, alt: "Terraced house managed as a short let by Ichiban Stays", beds: 1, baths: 1 },
  { title: "Central London", img: `${UP}/2026/10/ichiban-managed-apartment-2.webp`, alt: "Central London apartment managed by Ichiban Stays", beds: 3, baths: 3 },
];

const services = [
  "Serviced Accommodation", "Property Management", "Guaranteed Rent", "Corporate Lets",
  "Short-Term Rental Management", "Property Valuation",
];
const credentials = [
  "UK-Based Property Management", "Professional Serviced Accommodation", "Corporate & Leisure Stays",
  "Revenue Optimisation for Landlords", "Fully Managed Property Services", "24/7 Guest Support",
  "Trusted Property Management Solutions",
];

const h = "font-serif font-medium text-brand-green";
const outline =
  "inline-flex items-center gap-2 px-6 py-3 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white text-xs uppercase tracking-wide transition-colors";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${UP}/2026/07/ChatGPT-Image-Jul-20-2026-07_10_17-PM-1.webp)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-8 pt-14 pb-8">
          <div className="max-w-2xl">
            <p className="font-serif text-xl font-semibold text-brand-green">Short Let Management Across the UK</p>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium text-brand-ink leading-[1.1] mt-3">
              Unlock Higher Income <br />
              with Short – Term Lettings <br />
              <span className="text-[#2e5b3f]">Without the Hassle</span>
            </h1>
            <div className="font-body text-brand-muted mt-6 space-y-1">
              <p>We help UK landlords earn more through fully managed short-stay accommodation.</p>
              <p>We handle 100% of the work, so you enjoy higher returns without the day-to-day hassle.</p>
            </div>
            <p className="flex items-center gap-2 mt-4 text-brand-green">
              <BadgeCheck className="w-[18px] h-[18px]" /> <span className="text-brand-ink">No Upfront Fees</span>
            </p>
            <div className="flex flex-wrap gap-4 mt-8 pb-10">
              <a href="#booking-form" className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-green hover:bg-brand-greenDark text-white font-body transition-colors">
                Get Your Free Assessment <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/book-a-consultation/" className={outline}>BOOK A CONSULTATION</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white/80 backdrop-blur rounded-lg p-4 lg:w-[70%]">
            {heroStats.map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-brand-green shrink-0" />
                <div>
                  <p className="font-serif text-2xl font-semibold text-brand-ink leading-none">{value}</p>
                  <p className="text-xs text-brand-muted mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 steps */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-14">
        <p className="text-brand-muted">How It Works</p>
        <h2 className={`${h} text-4xl sm:text-5xl mt-1`}>Our Simple 5 Step Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          {steps.map(({ Icon, title, text }, i) => (
            <div key={title} className="text-center">
              <div className="w-20 h-20 rounded-full bg-brand-sage text-brand-green flex items-center justify-center mx-auto">
                <Icon className="w-9 h-9" />
              </div>
              <p className="font-semibold text-brand-green mt-3">{i + 1}</p>
              <h3 className="font-semibold mt-1">{title}</h3>
              <p className="font-body text-sm text-brand-muted mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Performance */}
      <section className="bg-brand-sage">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {performance.map(({ Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-brand-green shrink-0" />
              <div>
                <p className="font-serif text-3xl font-semibold text-brand-ink leading-none">{value}</p>
                <p className="text-sm text-brand-muted mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section id="booking-form" className="max-w-[1400px] mx-auto px-5 lg:px-8 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-black">
            Get Your Free <span className="text-[#2e5b3f]">Income Projection</span>
          </h2>
          <p className="font-body text-brand-muted mt-3 mb-8">
            Discover how much your property could earn with professionally managed short-term letting
          </p>
          <div className="text-left"><ProjectionForm /></div>
        </div>
      </section>

      {/* Properties */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className={`${h} text-4xl sm:text-5xl`}>Handpicked Properties We Manage</h2>
          <Link href="/book-a-consultation/" className={outline}>BOOK A CONSULTATION <ArrowRight className="w-3.5 h-3.5" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {properties.map((p) => (
            <Link key={p.title} href="/book-a-consultation/" className="group block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.alt} className="w-full aspect-[4/3] object-cover" />
              <h3 className="font-serif text-2xl font-semibold mt-3 group-hover:text-brand-green">{p.title}</h3>
              <p className="text-sm text-brand-muted">London</p>
              <p className="flex gap-4 text-sm mt-2 text-brand-ink">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-green" />{p.beds} Bed</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-brand-green" />{p.baths} Bath</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About / services / contact / credentials */}
      <section className="bg-brand-cream">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 py-12 grid lg:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BRAND.logo} alt="Ichiban Stays" className="h-16 w-auto" />
            <p className="font-serif text-xl font-semibold text-brand-green mt-2">Fully Managed Short Stay Properties</p>
            <h3 className="font-serif text-2xl font-black text-brand-green mt-8">About US</h3>
            <hr className="w-[15%] border-brand-green my-3" />
            <p className="font-body text-brand-muted leading-relaxed">
              Ichiban Stays is a UK property management company specialising in fully managed short stay and serviced
              accommodation. We help landlords maximise rental income while providing exceptional stays for corporate
              travellers, professionals, families and leisure guests. From guest communication and housekeeping to pricing
              optimisation and maintenance, we handle everything – so you don&apos;t have to.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-black text-brand-green">OUR SERVICES</h3>
            <hr className="w-[15%] border-brand-green my-3" />
            <ul className="divide-y divide-slate-200">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 py-2.5"><BadgeCheck className="w-5 h-5 text-brand-green" />{s}</li>
              ))}
            </ul>
          </div>
          <div id="contact">
            <h3 className="font-serif text-2xl font-black text-brand-green">CONTACT</h3>
            <hr className="w-[15%] border-brand-green my-3" />
            <ul className="divide-y divide-slate-200">
              <li className="flex items-center gap-4 py-4"><Mail className="w-6 h-6 text-brand-green" /><div><h4 className="font-semibold">Email</h4><a href={`mailto:${BRAND.email}`} className="text-brand-muted">{BRAND.email}</a></div></li>
              <li className="flex items-center gap-4 py-4"><Phone className="w-6 h-6 text-brand-green" /><div><h4 className="font-semibold">Phone</h4><a href={BRAND.phoneHref} className="text-brand-muted">{BRAND.phone}</a></div></li>
              <li className="flex items-center gap-4 py-4"><MapPinned className="w-6 h-6 text-brand-green" /><div><h4 className="font-semibold">Address</h4><p className="text-brand-muted">{BRAND.address.map((l) => <React.Fragment key={l}>{l}<br /></React.Fragment>)}</p></div></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-black text-brand-green">OUR CREDENTIALS</h3>
            <hr className="w-[15%] border-brand-green my-3" />
            <ul className="divide-y divide-slate-200">
              {credentials.map((s) => (
                <li key={s} className="flex items-center gap-3 py-2.5"><BadgeCheck className="w-5 h-5 text-brand-green" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
