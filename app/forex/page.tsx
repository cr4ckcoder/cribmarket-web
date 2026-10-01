import type { Metadata } from "next";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { ForexHours } from "@/components/products/ForexHours";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { OrbitalHub } from "@/components/sections/OrbitalHub";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forex Trading",
  description:
    "Trade 60+ FX pairs with Crib Market on MetaTrader 5. Published spreads, weekday coverage from Tokyo through New York.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        FX pairs for
        <br />
        <strong>every session.</strong>
      </>
    ),
    description: (
      <>
        Send tickets into deep FX books from MetaTrader 5,
        <br />
        with published spreads and a desk that stays on.
      </>
    ),
    imageSrc: asset.geminiKgcka0,
    imageAlt: "Designed for Every Trader. Any Place. Any Moment.",
    primaryHref: site.registerUrl,
    primaryLabel: "Create Account",
  },
  {
    type: "video",
    title: (
      <>
        More Than 1,000
        <br />
        <span className="text-primary">Worldwide Markets</span>
      </>
    ),
    description: (
      <>
        Cover FX, precious metals, energy markets, and equity indices.
        <br />
        Reach the deepest pools of liquidity with competitive pricing.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.demoUrl,
    primaryLabel: "Try a Demo Account",
  },
  {
    type: "image",
    title: (
      <>
        Weekday Coverage of
        <br />
        <strong>Peak Market Depth</strong>
      </>
    ),
    description: (
      <>
        Make the most of London and New York session overlaps.
        <br />
        Follow momentum from the Tokyo open through the New York close.
      </>
    ),
    imageSrc: asset.insight3,
    imageAlt: "Weekday Coverage of Peak Market Depth",
    primaryHref: site.registerUrl,
    primaryLabel: "View Markets",
  },
];

export default function ForexPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <WhyChoose
        title={
          <>
            Why FX traders{" "}
            <span className="as-highlight text-green-400">use Crib Market</span>
          </>
        }
        tags={[
          "Competitive Pricing",
          "Round-the-Clock Support",
          "60+ Currency Pairs",
          "Clear & Dependable",
          "Gearing up to 1:500",
        ]}
        bannerHeadline="FX PLUS THE REST OF THE BOOK"
        bannerText="Sixty-plus currency pairs, plus CFDs on indices, metals, energy, and crypto, all on MetaTrader 5."
        bannerImage={asset.geminiX5dvln}
      />
      <OrbitalHub />
      <ForexHours />
      <CtaBanner
        title={
          <>
            Prepared to enter the <br />
            <span>FX Market?</span>
          </>
        }
      />
      <FaqAccordion items={getFaqs("forex.html")} />
    </>
  );
}
