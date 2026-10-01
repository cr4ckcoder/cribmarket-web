"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="contact-form-card">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <h3 className="gradient-text">Message received</h3>
          <p className="contact-lead">
            Appreciate you contacting us. A team member will reply soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          hidden
          className="contact-honeypot"
        />

        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              className="form-control"
              placeholder="First Name"
              required
              maxLength={80}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              required
              maxLength={80}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            required
            maxLength={255}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            required
            maxLength={160}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows={5}
            placeholder="Share what you need help with…"
            required
            maxLength={2000}
          />
        </div>

        <button
          type="submit"
          id="contact-submit-btn"
          className={`btn btn-primary contact-submit-btn${loading ? " is-loading" : ""}`}
          aria-busy={loading}
          disabled={loading}
        >
          <span className="contact-submit-spinner" aria-hidden="true" />
          <span className="contact-submit-label">
            {loading ? "Submitting…" : "SUBMIT MESSAGE"}
          </span>
        </button>
      </form>
    </div>
  );
}
