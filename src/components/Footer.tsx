import React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/site";

const col = "text-[11px] tracking-[1.5px] uppercase text-[#B08D57] font-semibold mb-4";
const link = "text-[13.5px] text-white/60 hover:text-[#B08D57] transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f1b] text-white/60 pt-16 pb-8 px-6 lg:px-10 border-t border-[#B08D57]/25">
      <div className="max-w-[1180px] mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] pb-11 border-b border-white/10">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-white mb-3">{BRAND.name}</h3>
          <p className="text-[13.5px] leading-7 text-white/50 max-w-[260px]">
            Considered, hands-off short stay management for landlords across the UK.
          </p>
        </div>
        <div>
          <h4 className={col}>Company</h4>
          <ul className="flex flex-col gap-3">
            <li><Link className={link} href="/">Home</Link></li>
            <li><Link className={link} href="/about-us/">About Us</Link></li>
            <li><Link className={link} href="/areas-we-cover/">Areas We Cover</Link></li>
            <li><Link className={link} href="/landlord-guides/">Landlord Guides</Link></li>
            <li><Link className={link} href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={col}>Legal</h4>
          <ul className="flex flex-col gap-3">
            <li><Link className={link} href="/privacy-policy/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className={col}>Get In Touch</h4>
          <address className="not-italic text-[13.5px] leading-8">
            {BRAND.address.map((l) => (
              <React.Fragment key={l}>{l}<br /></React.Fragment>
            ))}
            <br />
            <a className={link} href={BRAND.phoneHref}>{BRAND.phone}</a><br />
            <a className={link} href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </address>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto flex flex-wrap justify-between gap-3 pt-7 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Ichiban Stays. All rights reserved.</span>
        <span>Part of the Ichiban Group</span>
      </div>
    </footer>
  );
}
