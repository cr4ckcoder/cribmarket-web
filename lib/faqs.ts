import type { FaqItem } from "@/components/sections/FaqAccordion";
import faqs from "@/conversion/faqs.json";

type FaqPage = keyof typeof faqs;

export function getFaqs(page: FaqPage): FaqItem[] {
  return faqs[page].map((item) => ({
    question: item.q,
    answer: item.a,
  }));
}

export const faqsFor = getFaqs;
