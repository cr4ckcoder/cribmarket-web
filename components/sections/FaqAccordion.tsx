"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
  title?: React.ReactNode;
};

export function FaqAccordion({
  items,
  title = (
    <>
      Are you confused?
      <br />
      <span className="as-highlight">let&apos;s ask</span>
    </>
  ),
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="as-faq-section-common">
      <div className="as-container">
        <div className="faq-layout">
          <div className="faq-header" data-aos="fade-right">
            <h2 className="faq-main-title">{title}</h2>
          </div>

          <div className="faq-content" data-aos="fade-left">
            <div className="as-accordion">
              {items.map((item, index) => {
                const active = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className={`as-accordion-item${active ? " active" : ""}`}
                  >
                    <button
                      type="button"
                      className="as-accordion-header"
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                    >
                      <span>{item.question}</span>
                      <ChevronDown size={18} />
                    </button>
                    <div className="as-accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
