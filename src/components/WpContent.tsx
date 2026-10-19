import React from "react";
import ProjectionForm from "@/components/ProjectionForm";
import BookingForm from "@/components/BookingForm";

const PROJECTION = '<div data-projection-form></div>';
const BOOKING = '<div data-booking-form></div>';

/** Renders WordPress HTML; the WPForms shortcode becomes the lead form. */
export default function WpContent({ html, post = false, plain = false }: { html: string; post?: boolean; plain?: boolean }) {
  const parts = html.split(/(<div data-(?:projection|booking)-form><\/div>)/);
  return (
    <div className={`wp-content${post ? " is-post" : ""}${plain ? " is-plain" : ""}`}>
      {parts.map((part, i) =>
        part === PROJECTION ? (
          <div key={i} id="booking-form" className="my-8"><ProjectionForm /></div>
        ) : part === BOOKING ? (
          <div key={i} className="my-8 bg-white border border-[#dfe3d8] rounded-xl p-6 sm:p-8 shadow-sm"><BookingForm /></div>
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: part }} />
        )
      )}
    </div>
  );
}
