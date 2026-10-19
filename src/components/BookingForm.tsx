"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitConsultationBooking } from "@/lib/firebase";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// Half-hour slots, 09:00 to 17:30 UK time (Monday to Friday), as on the WordPress booking form
const SLOTS = Array.from({ length: 18 }, (_, i) => {
  const mins = 9 * 60 + i * 30;
  return `${String(Math.floor(mins / 60)).padStart(2, "0")}:${mins % 60 === 0 ? "00" : "30"}`;
});

const input =
  "w-full px-3 py-2.5 rounded-[4px] border border-[#d4d4d4] bg-white text-sm font-body placeholder:text-slate-500 focus:outline-none focus:border-brand-green";
const label = "block text-sm font-semibold text-slate-900 mb-1.5";

function Calendar({
  selected,
  time,
  onDate,
  onTime,
}: {
  selected: Date | null;
  time: string;
  onDate: (d: Date) => void;
  onTime: (t: string) => void;
}) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const maxDate = useMemo(() => new Date(today.getFullYear(), today.getMonth() + 3, today.getDate()), [today]);
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const isOff = (d: Date) => d < today || d > maxDate || d.getDay() === 0 || d.getDay() === 6;
  const lead = (new Date(view.getFullYear(), view.getMonth(), 1).getDay() + 6) % 7;
  const dim = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const prevDisabled = view.getFullYear() === today.getFullYear() && view.getMonth() === today.getMonth();
  const nextDisabled = new Date(view.getFullYear(), view.getMonth() + 1, 1) > maxDate;

  const now = new Date();
  const isToday = selected?.getTime() === today.getTime();
  const slots = selected
    ? SLOTS.filter((s) => {
        if (!isToday) return true;
        const [h, m] = s.split(":").map(Number);
        return new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), h, m).getTime() >= now.getTime() + 3600000;
      })
    : [];

  const nav = "w-[34px] h-[34px] rounded-full border border-[#cfd6c9] bg-white text-brand-green text-base leading-none disabled:opacity-35 disabled:cursor-not-allowed";
  return (
    <div className="mt-1 mb-3">
      <div className="border border-[#cfd6c9] rounded-lg bg-[#fcfcfa] p-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <button type="button" aria-label="Previous month" className={nav} disabled={prevDisabled} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}>‹</button>
          <div className="font-semibold text-[15px] text-brand-ink">{MONTHS[view.getMonth()]} {view.getFullYear()}</div>
          <button type="button" aria-label="Next month" className={nav} disabled={nextDisabled} onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}>›</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {DOW.map((d) => (
            <div key={d} className="text-[11px] tracking-[0.08em] uppercase text-[#808285] py-1">{d}</div>
          ))}
          {Array.from({ length: lead }, (_, i) => <div key={`l${i}`} />)}
          {Array.from({ length: dim }, (_, i) => {
            const date = new Date(view.getFullYear(), view.getMonth(), i + 1);
            const sel = selected?.getTime() === date.getTime();
            const cls = [
              "h-9 rounded-md text-sm p-0",
              sel ? "bg-brand-green text-white" : "text-brand-ink hover:enabled:bg-brand-sage",
              date.getTime() === today.getTime() ? "shadow-[inset_0_0_0_1px_#2f5e3a]" : "",
              "disabled:text-[#c3c4c7] disabled:cursor-not-allowed",
            ].join(" ");
            return (
              <button key={i} type="button" className={cls} disabled={isOff(date)} onClick={() => onDate(date)}>
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-3.5 mb-2 text-[13px] font-semibold text-brand-ink">
        Suggested times <small className="font-normal text-[#808285]">(UK time, Monday to Friday)</small>
      </div>
      {!selected ? (
        <div className="text-[13px] text-[#808285] py-1.5">Choose a date to see available times.</div>
      ) : slots.length === 0 ? (
        <div className="text-[13px] text-[#808285] py-1.5">No more times today. Please choose another date.</div>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {slots.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onTime(s)}
              className={`h-[38px] rounded-md border border-brand-green text-[13px] p-0 ${time === s ? "bg-brand-green text-white" : "bg-white text-brand-green hover:bg-brand-sage"}`}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BookingForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  // The calendar depends on today's date, so render it only in the browser (pages are statically generated).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });
  const dateText = date ? `${DAYS[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()].slice(0, 3)} ${date.getFullYear()}` : "";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      await submitConsultationBooking({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        preferredDate: dateText,
        preferredTime: time,
      });
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
    <form onSubmit={submit} className="space-y-5 text-left">
      <div>
        <label className={label}>Name <span className="text-red-600">*</span></label>
        <div className="grid grid-cols-2 gap-3">
          <input required className={input} placeholder="First Name" value={form.firstName} onChange={set("firstName")} />
          <input required className={input} placeholder="Last Name" value={form.lastName} onChange={set("lastName")} />
        </div>
      </div>
      <div>
        <label className={label}>Email Address <span className="text-red-600">*</span></label>
        <input required type="email" className={input} placeholder="Enter Your Email" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <label className={label}>Contact Number</label>
        <input type="tel" className={input} placeholder="Enter Your Phone Number" value={form.phone} onChange={set("phone")} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Preferred Date <span className="text-red-600">*</span></label>
          <input required readOnly className={input} placeholder="Select a date" value={dateText} />
        </div>
        <div>
          <label className={label}>Preferred Time <span className="text-red-600">*</span></label>
          <input required readOnly className={input} placeholder="Select a time" value={time} />
        </div>
      </div>
      {mounted ? <Calendar
        selected={date}
        time={time}
        onDate={(d) => {
          setDate(d);
          setTime("");
        }}
        onTime={setTime}
      /> : <div className="h-[330px]" />}
      {state === "error" && (
        <p className="text-sm text-red-600">Sorry, something went wrong. Please email contact@ichibanstays.com instead.</p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full bg-[#2f5e3a] hover:bg-[#244a2e] text-white rounded-md py-3 text-xs font-medium uppercase tracking-[0.04em] shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {state === "sending" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "BOOK MY FREE CONSULTATION"}
      </button>
    </form>
  );
}
