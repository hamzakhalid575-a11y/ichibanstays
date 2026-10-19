import React from "react";
import { jsonLdFor } from "@/lib/site";

/** Structured data (schema.org) carried over from the live site. */
export default function JsonLd({ path }: { path: string }) {
  return (
    <>
      {jsonLdFor(path).map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so content can never close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
