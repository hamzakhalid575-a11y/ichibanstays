"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitConsultationBooking } from "@/lib/firebase";

const input =
  "w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm font-body placeholder:text-slate-500 focus:outline-none focus:border-brand-green";
const label = "block text-sm font-medium text-slate-800 mb-1";

export default function BookingForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", preferredDate: "", preferredTime: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const { firstName, lastName, ...rest } = form;
      await submitConsultationBooking({ name: `${firstName} ${lastName}`.trim(), ...rest });
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="text-center space-y-3 py-6">
        <CheckCircle2 className="w-10 h-10 text-brand-green mx-auto" />
        <h3 className="font-serif text-2xl font-semibold text-brand-green">Thank you, {form.firstName}</h3>
        <p className="text-sm text-brand-muted">We have your request and will confirm your consultation shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 text-left">
      <div>
        <label className={label}>Name <span className="text-red-600">*</span></label>
        <div className="grid grid-cols-2 gap-3">
          <input required className={input} placeholder="First Name" value={form.firstName} onChange={set("firstName")} />
          <input required className={input} placeholder="Last Name" value={form.lastName} onChange={set("lastName")} />
        </div>
      </div>
      <div>
        <label className={label}>Email Address *</label>
        <input required type="email" className={input} placeholder="Enter Your Email" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <label className={label}>Contact Number</label>
        <input type="tel" className={input} placeholder="Enter Your Phone Number" value={form.phone} onChange={set("phone")} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Preferred Date *</label>
          <input required type="date" className={input} value={form.preferredDate} onChange={set("preferredDate")} />
        </div>
        <div>
          <label className={label}>Preferred Time *</label>
          <input required type="time" min="09:00" max="18:00" className={input} value={form.preferredTime} onChange={set("preferredTime")} />
        </div>
      </div>
      {state === "error" && (
        <p className="text-sm text-red-600">Sorry, something went wrong. Please email contact@ichibanstays.com instead.</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full bg-brand-green hover:bg-brand-greenDark text-white rounded-md py-3.5 text-xs uppercase tracking-wide shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {state === "sending" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "BOOK MY FREE CONSULTATION"}
      </button>
    </form>
  );
}
