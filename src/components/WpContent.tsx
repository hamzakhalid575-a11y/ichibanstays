import React from "react";
import ProjectionForm from "@/components/ProjectionForm";

const MARKER = '<div data-projection-form></div>';

/** Renders WordPress HTML; the WPForms shortcode becomes the lead form. */
export default function WpContent({ html }: { html: string }) {
  const parts = html.split(MARKER);
  return (
    <div className="wp-content">
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          <div dangerouslySetInnerHTML={{ __html: part }} />
          {i < parts.length - 1 && (
            <div id="booking-form" className="not-prose my-8">
              <ProjectionForm />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
