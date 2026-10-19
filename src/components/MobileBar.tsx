"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/site";

const phone =
  "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z";
const whatsapp =
  "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.9c-.25-.43.25-.4.71-1.32.08-.16.04-.3-.02-.42l-.76-1.83c-.2-.48-.4-.41-.56-.42h-.48a.92.92 0 0 0-.67.31 2.8 2.8 0 0 0-.87 2.08 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.69 2.23.75 3.03.63.49-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.15-1.18-.07-.1-.23-.16-.48-.28z";
const arrow = "M13.2 5.3 19.9 12l-6.7 6.7-1.4-1.4 4.3-4.3H4v-2h12.1l-4.3-4.3z";

const btn =
  "flex items-center justify-center gap-[7px] h-12 rounded-[10px] text-sm font-semibold leading-none no-underline border-[1.5px] bg-white active:scale-[0.97]";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current shrink-0">
      <path d={d} />
    </svg>
  );
}

/** Mobile-only quick contact bar (Call / WhatsApp / Free Assessment), as on the WordPress site. */
export default function MobileBar() {
  const pathname = usePathname();
  const [typing, setTyping] = useState(false);
  const [hasForm, setHasForm] = useState(false);

  useEffect(() => {
    setHasForm(!!document.getElementById("booking-form"));
  }, [pathname]);

  useEffect(() => {
    const on = (e: FocusEvent) => {
      if ((e.target as HTMLElement).matches?.("input,textarea,select") && window.innerWidth < 768) setTyping(true);
    };
    const off = () => setTyping(false);
    document.addEventListener("focusin", on);
    document.addEventListener("focusout", off);
    return () => {
      document.removeEventListener("focusin", on);
      document.removeEventListener("focusout", off);
    };
  }, []);

  const noCta = pathname.startsWith("/book-a-consultation");

  return (
    <div
      id="ib-mbar"
      aria-label="Quick contact"
      className={`md:hidden fixed inset-x-0 bottom-0 z-[9990] grid gap-2 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] bg-white/[0.97] backdrop-blur-[10px] shadow-[0_-8px_28px_rgba(27,58,36,0.16)] border-t border-[#1b3a24]/10 transition-transform duration-[250ms] ${
        noCta ? "grid-cols-2" : "grid-cols-[1fr_1fr_1.7fr]"
      } ${typing ? "translate-y-[120%]" : ""}`}
    >
      <a href={BRAND.phoneHref} aria-label="Call Ichiban Stays" className={`${btn} border-[#1b3a24] text-[#1b3a24]`}>
        <Icon d={phone} /> <span>Call</span>
      </a>
      <a href={BRAND.whatsapp} aria-label="Message us on WhatsApp" className={`${btn} border-[#25d366] text-[#128c4b]`}>
        <Icon d={whatsapp} /> <span>WhatsApp</span>
      </a>
      {!noCta && (
        <a
          href={hasForm ? "#booking-form" : "/book-a-consultation/"}
          className={`${btn} border-[#1b3a24] text-white bg-gradient-to-br from-[#1b3a24] to-[#2f5e3a] shadow-[0_4px_14px_rgba(27,58,36,0.3)]`}
        >
          <span>Free Assessment</span> <Icon d={arrow} />
        </a>
      )}
    </div>
  );
}
