import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Write to Crib Market at ${site.supportEmail} or send a message. The desk handles accounts, deposits, and MetaTrader 5 logins.`,
};

export default function ContactPage() {
  return (
    <section className="contact-section contact-section--solo">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="gradient-text">Contact Us</h2>
          <p className="contact-lead">
            Questions on Standard, Growth, or Edge, or on funding and MetaTrader 5?
            Send a note and the desk will reply.
          </p>
          <p className="contact-lead" style={{ marginTop: 8 }}>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </p>
          <p className="contact-lead" style={{ marginTop: 8 }}>
            <strong>Chat:</strong>{" "}
            <a
              href={site.chat.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              {site.chat.label}
            </a>
          </p>
          <p className="contact-lead" style={{ marginTop: 8 }}>
            <strong>Office Address:</strong>
            <br />
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
            <br />
            {site.address.city}, {site.address.country}
          </p>
        </div>

        <div className="contact-form-wrap" data-aos="fade-up">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
