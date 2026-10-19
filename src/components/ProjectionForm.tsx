"use client";

import React, { useState } from "react";
import { submitProjectionLead } from "@/lib/firebase";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ProjectionForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    sizeSqFt: "",
    bathrooms: "",
    receptionRooms: "",
    bedrooms: "",
    propertyType: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitProjectionLead(form);
      setSubmitted(true);
    } catch {
      setError("Sorry, something went wrong sending your details. Please try again or email contact@ichibanstays.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-slate-900">Thank you, {form.firstName}</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          We have your details and will send your free income projection shortly.
        </p>
      </div>
    );
  }

  const field =
    "w-full px-4 py-3 border border-[#dcdcdc] bg-[#fafafa] text-[15px] text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-brand-green";
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-t-4 border-brand-teal rounded-md shadow-xl p-8 sm:p-14 space-y-4 text-slate-900"
    >
      <div className="text-center mb-6">
        <h3 className="font-serif text-3xl sm:text-4xl font-medium text-brand-forest">Get Your Free Income Projection</h3>
        <p className="mt-2 text-[17px] text-slate-700 max-w-md mx-auto">
          Discover how much your property could earn with professionally managed short-term letting
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required className={field} placeholder="First Name" value={form.firstName} onChange={set("firstName")} />
        <input required className={field} placeholder="Last Name" value={form.lastName} onChange={set("lastName")} />
        <input required type="email" className={field} placeholder="Email Address" value={form.email} onChange={set("email")} />
        <input required type="tel" className={field} placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
      </div>
      <input required className={field} placeholder="Property Address (Line 1)" value={form.addressLine1} onChange={set("addressLine1")} />
      <input className={field} placeholder="Property Address (Line 2)" value={form.addressLine2} onChange={set("addressLine2")} />
      <div className="grid sm:grid-cols-2 gap-4">
        <input required className={field} placeholder="Postcode" value={form.postcode} onChange={set("postcode")} />
        <input type="number" className={field} placeholder="Approx. Size (sq ft)" value={form.sizeSqFt} onChange={set("sizeSqFt")} />
        <select className={field} value={form.bathrooms} onChange={set("bathrooms")}>
          <option value="">Bathrooms</option>
          {["1", "2", "3", "4", "5+"].map((o) => <option key={o}>{o}</option>)}
        </select>
        <select className={field} value={form.receptionRooms} onChange={set("receptionRooms")}>
          <option value="">Reception Room</option>
          {["1", "2", "3", "4+"].map((o) => <option key={o}>{o}</option>)}
        </select>
        <select className={field} value={form.bedrooms} onChange={set("bedrooms")}>
          <option value="">Bedrooms</option>
          {["Studio", "1", "2", "3", "4", "5+"].map((o) => <option key={o}>{o}</option>)}
        </select>
        <select className={field} value={form.propertyType} onChange={set("propertyType")}>
          <option value="">Property Type</option>
          {["Flat / Apartment", "House", "Studio", "Other"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-brand-forest hover:bg-black text-white font-semibold py-4 tracking-widest text-sm uppercase flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
      >
        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "GET MY PROJECTION"}
      </button>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[15px] text-slate-700 pt-2">
        {["Free", "No Obligation", "Takes 30 Seconds"].map((t) => (
          <span key={t} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 fill-brand-teal text-white" /> {t}
          </span>
        ))}
      </div>
    </form>
  );
}
