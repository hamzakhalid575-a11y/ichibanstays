"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";

/** Google Site Kit measurement ID used on the WordPress site. */
const GA_ID = "GT-NFB29244";
const STORAGE_KEY = "cmplz_consent";

type Consent = { preferences: boolean; statistics: boolean; marketing: boolean };

const CATEGORIES: { key: "functional" | keyof Consent; title: string; text: string }[] = [
  {
    key: "functional",
    title: "Functional",
    text: "The technical storage or access is strictly necessary for the legitimate purpose of enabling the use of a specific service explicitly requested by the subscriber or user, or for the sole purpose of carrying out the transmission of a communication over an electronic communications network.",
  },
  {
    key: "preferences",
    title: "Preferences",
    text: "The technical storage or access is necessary for the legitimate purpose of storing preferences that are not requested by the subscriber or user.",
  },
  {
    key: "statistics",
    title: "Statistics",
    text: "The technical storage or access that is used exclusively for statistical purposes. The technical storage or access that is used exclusively for anonymous statistical purposes. Without a subpoena, voluntary compliance on the part of your Internet Service Provider, or additional records from a third party, information stored or retrieved for this purpose alone cannot usually be used to identify you.",
  },
  {
    key: "marketing",
    title: "Marketing",
    text: "The technical storage or access is required to create user profiles to send advertising, or to track the user on a website or across several websites for similar marketing purposes.",
  },
];

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

function sendEvent(name: string, params: Record<string, unknown>) {
  const w = window as GtagWindow;
  if (typeof w.gtag === "function") w.gtag("event", name, params);
  else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["event", name, params]);
  }
}

export default function ConsentBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [closed, setClosed] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [draft, setDraft] = useState<Consent>({ preferences: false, statistics: false, marketing: false });
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setConsent(JSON.parse(saved));
    } catch {
      /* storage unavailable: show the banner every visit */
    }
    setReady(true);
  }, []);

  // Load Google Analytics only after the visitor consents to statistics.
  useEffect(() => {
    if (!consent?.statistics) return;
    const w = window as GtagWindow;
    if (document.getElementById("google_gtagjs")) return;
    w.dataLayer = w.dataLayer || [];
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", GA_ID);
    const s = document.createElement("script");
    s.id = "google_gtagjs";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }, [consent]);

  // Click and form events, as tracked on the WordPress site.
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let name: string | null = null;
      if (href.startsWith("tel:")) name = "phone_click";
      else if (href.includes("wa.me") || href.includes("whatsapp")) name = "whatsapp_click";
      else if (href.startsWith("mailto:")) name = "email_click";
      else if (href.includes("/book-a-consultation")) name = "cta_click";
      if (name) sendEvent(name, { link_url: href, page_path: location.pathname });
    };
    const submit = (e: Event) => sendEvent("assessment_request", { form_id: (e.target as HTMLElement)?.id || "", page_path: location.pathname });
    document.addEventListener("click", click, true);
    document.addEventListener("submit", submit, true);
    return () => {
      document.removeEventListener("click", click, true);
      document.removeEventListener("submit", submit, true);
    };
  }, []);

  const decide = (c: Consent) => {
    setConsent(c);
    setPrefs(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {
      /* ignore */
    }
  };
  const reopen = () => {
    setDraft(consent ?? { preferences: false, statistics: false, marketing: false });
    setConsent(null);
    setClosed(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  if (!ready) return null;

  if (consent) {
    return (
      <button
        type="button"
        onClick={reopen}
        className="fixed right-10 -bottom-[35px] hover:bottom-0 transition-[bottom] duration-500 z-[9998] h-[50px] min-w-[100px] px-4 pb-4 pt-3 bg-white text-[#222] text-[13px] rounded-t-xl shadow-[0_0_8px_rgba(0,0,0,0.15)] max-md:hidden"
      >
        Manage consent
      </button>
    );
  }
  if (closed) return null;

  const btn = "h-11 px-3 rounded-md border text-[14px] md:text-[14px] max-md:text-base font-medium whitespace-nowrap";
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmplz-header"
      className="fixed z-[99999] bg-white text-[#222] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] max-md:inset-x-[10px] max-md:bottom-[85px] md:right-[10px] md:bottom-[10px] md:w-[526px] max-h-[calc(100vh-20px)] overflow-y-auto"
    >
      <div className="relative px-5 pt-4 pb-3 text-center border-b border-[#f2f2f2] max-md:h-10 max-md:border-0">
        <div id="cmplz-header" className="text-[15px] font-medium max-md:sr-only">Manage Consent</div>
        <button type="button" aria-label="Close dialog" onClick={() => setClosed(true)} className="absolute right-4 top-4">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="px-5 py-4 text-xs leading-[1.5] max-h-[55vh] overflow-y-auto">
        <p>
          To provide the best experiences, we use technologies like cookies to store and/or access device information.
          Consenting to these technologies will allow us to process data such as browsing behavior or unique IDs on this
          site. Not consenting or withdrawing consent, may adversely affect certain features and functions.
        </p>
        {prefs && (
          <div className="mt-4 space-y-2">
            {CATEGORIES.map((c) => (
              <div key={c.key} className="border border-[#f2f2f2] rounded-md">
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="text-sm font-medium">{c.title}</span>
                  <span className="flex items-center gap-3">
                    {c.key === "functional" ? (
                      <span className="text-xs text-green-700">Always active</span>
                    ) : (
                      <input
                        type="checkbox"
                        aria-label={c.title}
                        checked={draft[c.key]}
                        onChange={(e) => setDraft({ ...draft, [c.key]: e.target.checked })}
                        className="accent-[#1e3a26] w-4 h-4"
                      />
                    )}
                    <button type="button" aria-expanded={open === c.key} onClick={() => setOpen(open === c.key ? null : c.key)}>
                      <ChevronDown className={`w-4 h-4 transition ${open === c.key ? "rotate-180" : ""}`} />
                    </button>
                  </span>
                </div>
                {open === c.key && <p className="px-3 pb-3">{c.text}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-2 px-5 pb-5">
        <button type="button" onClick={() => decide({ preferences: true, statistics: true, marketing: true })} className={`${btn} bg-[#1e3a26] border-[#1e3a26] text-white`}>
          Accept
        </button>
        <button type="button" onClick={() => decide({ preferences: false, statistics: false, marketing: false })} className={`${btn} bg-white border-[#1e3a26] text-[#1e3a26]`}>
          Deny
        </button>
        {prefs ? (
          <button type="button" onClick={() => decide(draft)} className={`${btn} bg-[#f9f9f9] border-[#f2f2f2] text-[#333]`}>
            Save preferences
          </button>
        ) : (
          <button type="button" onClick={() => setPrefs(true)} className={`${btn} bg-[#f9f9f9] border-[#f2f2f2] text-[#333]`}>
            View preferences
          </button>
        )}
      </div>
    </div>
  );
}
