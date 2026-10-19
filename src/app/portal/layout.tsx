import type { Metadata } from "next";

export const metadata: Metadata = { title: "Portal | Ichiban Stays", robots: { index: false, follow: false } };

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
