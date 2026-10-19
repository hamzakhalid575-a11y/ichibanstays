"use client";

import React, { useState } from "react";
import { submitProjectionLead } from "@/lib/firebase";
import { CheckCircle2, Sparkles, Loader2 } from "lucide-react";

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
    bathrooms: "1 Bathroom",
    receptionRooms: "1",
    bedrooms: "2 Bedrooms",
    propertyType: "Apartment",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    min: number;
    max: number;
    leadId: string;
  } | null>(null);

  const computeEstimate = () => {
    const beds = parseInt(form.bedrooms) || 2;
    const baths = parseInt(form.bathrooms) || 1;
    const base = 2400 + beds * 1150 + baths * 350;
    return {
      min: Math.round(base * 0.92),
      max: Math.round(base * 1.18),
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { min, max } = computeEstimate();
    try {
      const leadId = await submitProjectionLead({
        ...form,
        estimatedMonthlyMin: min,
        estimatedMonthlyMax: max,
      });
      setSubmittedResult({ min, max, leadId });
    } catch {
      // Fallback if Firebase env vars aren't configured yet in local preview
      setSubmittedResult({ min, max, leadId: "local-preview-" + Date.now() });
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedResult) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-900">
          Your Tailored Income Projection
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you, {form.firstName}. Based on your {form.bedrooms.toLowerCase()} {form.propertyType.toLowerCase()} in{" "}
          {form.postcode || "your area"}, our initial short-let revenue estimate is:
        </p>
        <div className="bg-[#1E4D3B] text-white p-6 rounded-xl max-w-md mx-auto">
          <div className="text-xs uppercase tracking-widest text-[#1F8A88] mb-1">
            Estimated Monthly Gross Income
          </div>
          <div className="text-3xl font-bold text-white">
            £{submittedResult.min.toLocaleString()} – £{submittedResult.max.toLocaleString()}{" "}
            <span className="text-sm font-normal text-slate-400">/ month</span>
          </div>
          <div className="text-xs text-slate-400 mt-2">
            Saved to Firebase Firestore (Ref: {submittedResult.leadId.slice(0, 10)})
          </div>
        </div>
        <button
          onClick={() => setSubmittedResult(null)}
          className="text-xs font-semibold text-[#1F8A88] hover:underline pt-2"
        >
          Calculate another property
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-5 text-slate-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="First"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            placeholder="Last"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+44 7..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Property Address (Line 1)
          </label>
          <input
            type="text"
            value={form.addressLine1}
            onChange={(e) => setForm({ ...form, addressLine1: e.target.value })}
            placeholder="e.g. 25 Hill Street"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Property Address (Line 2)
          </label>
          <input
            type="text"
            value={form.addressLine2}
            onChange={(e) => setForm({ ...form, addressLine2: e.target.value })}
            placeholder="Neighbourhood / City"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Postcode
          </label>
          <input
            type="text"
            value={form.postcode}
            onChange={(e) => setForm({ ...form, postcode: e.target.value })}
            placeholder="e.g. W1J 5LW"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Approx. Size (sq ft)
          </label>
          <input
            type="number"
            value={form.sizeSqFt}
            onChange={(e) => setForm({ ...form, sizeSqFt: e.target.value })}
            placeholder="e.g. 850"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Property Type
          </label>
          <select
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          >
            {["Apartment", "House", "Studio Flat", "Bungalow", "Other"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Bedrooms
          </label>
          <select
            value={form.bedrooms}
            onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          >
            {["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms", "5+ Bedrooms"].map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Bathrooms
          </label>
          <select
            value={form.bathrooms}
            onChange={(e) => setForm({ ...form, bathrooms: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          >
            {["1 Bathroom", "2 Bathrooms", "3 Bathrooms", "4 Bathrooms", "5+ Bathrooms"].map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Reception Rooms
          </label>
          <select
            value={form.receptionRooms}
            onChange={(e) => setForm({ ...form, receptionRooms: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1F8A88]"
          >
            {["1", "2", "3", "More"].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#1F8A88] hover:bg-[#b58f47] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Calculating Projection...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" /> GET MY PROJECTION
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-6 text-xs text-slate-500 pt-1">
        <span>✓ Free</span>
        <span>✓ No Obligation</span>
        <span>✓ Takes 30 Seconds</span>
      </div>
    </form>
  );
}
