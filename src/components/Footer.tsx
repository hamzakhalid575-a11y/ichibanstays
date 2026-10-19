import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ichiban-stays", d: "M19.7 3H4.3C3.6 3 3 3.6 3 4.3v15.4c0 .7.6 1.3 1.3 1.3h15.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.7h-2.7v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.7V9.7h2.6v1.2c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z" },
  { label: "Instagram", href: "https://www.instagram.com/ichibanstays", d: "M12 4.6c2.4 0 2.7 0 3.7.1 2.4.1 3.6 1.3 3.7 3.7.1.9.1 1.2.1 3.6s0 2.7-.1 3.7c-.1 2.4-1.3 3.6-3.7 3.7-.9.1-1.2.1-3.7.1s-2.7 0-3.6-.1c-2.4-.1-3.6-1.3-3.7-3.7-.1-.9-.1-1.2-.1-3.7s0-2.7.1-3.6c.1-2.4 1.3-3.6 3.7-3.7.9-.1 1.2-.1 3.6-.1zM12 3c-2.4 0-2.8 0-3.7.1-3.2.1-4.9 1.8-5.1 5.1C3 9.2 3 9.6 3 12s0 2.8.1 3.7c.1 3.2 1.8 4.9 5.1 5.1.9.1 1.3.1 3.7.1s2.8 0 3.7-.1c3.2-.1 4.9-1.8 5.1-5.1.1-.9.1-1.3.1-3.7s0-2.8-.1-3.7c-.1-3.2-1.8-4.9-5.1-5.1C14.8 3 14.4 3 12 3zm0 4.4a4.6 4.6 0 100 9.2 4.6 4.6 0 000-9.2zm0 7.6a3 3 0 110-6 3 3 0 010 6zm4.8-8.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592818562096", d: "M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-brand-footer text-white border-t-[3px] border-slate-300/60">
        <div className="max-w-[1440px] mx-auto px-8 py-8 grid gap-6 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-14 h-14 fill-white" aria-hidden="true">
              <path d="M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z" />
            </svg>
            <p>Your Property. Our Property</p>
          </div>
          <p className="text-center">
            © 2026 Ichiban Stays. All Rights Reserved.
            <br /> Registered in England &amp; Wales.
          </p>
          <ul className="flex md:justify-end gap-3">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full border-2 border-white inline-flex items-center justify-center hover:bg-white/20 hover:scale-105 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true"><path d={s.d} /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <a
        href={BRAND.whatsapp}
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-[77px] z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </>
  );
}
