import type { Metadata } from "next";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { ProductInfoSection } from "@/components/products/ProductInfoSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { OrbitalHub } from "@/components/sections/OrbitalHub";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Indices Trading",
  description:
    "Trade S&P 500, NASDAQ, US30, DAX, and FTSE index CFDs with Crib Market on MetaTrader 5.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Ride Worldwide Moves via
        <br />
        <strong>Equity Indices</strong>
      </>
    ),
    description: (
      <>
        Position on major benchmarks including the S&P 500, NASDAQ, and US30
        <br />
        with high-precision pricing and exceptionally fast order routing.
      </>
    ),
    imageSrc: asset.indicesAi,
    imageAlt: "Ride Worldwide Moves via Equity Indices",
    primaryHref: site.registerUrl,
    primaryLabel: "Trade Indices",
  },
  {
    type: "video",
    title: (
      <>
        Follow the Pulse of
        <br />
        <span className="text-primary">World Economies</span>
      </>
    ),
    description: (
      <>
        Buy or sell the most actively traded index markets.
        <br />
        Reach DAX, FTSE, and ASX with gearing of up to 1:500.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "Begin Index Trading",
  },
  {
    type: "image",
    title: (
      <>
        Professional Monitoring of
        <br />
        <strong>Market Benchmarks</strong>
      </>
    ),
    description: (
      <>
        Stay informed with live data streams and accurate analytical tools.
        <br />
        Your hub for reading global sentiment and market direction.
      </>
    ),
    imageSrc: asset.indicesHero,
    imageAlt: "Professional Monitoring of Market Benchmarks",
    primaryHref: site.registerUrl,
    primaryLabel: "Browse Markets",
  },
];

export default function IndicesPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <OrbitalHub />
      <WhyChoose
        title={
          <>
            Why index traders{" "}
            <span className="as-highlight text-green-400">use Crib Market</span>
          </>
        }
        tags={[
          "Competitive Pricing",
          "Round-the-Clock Support",
          "Worldwide Sectors",
          "Clear & Dependable",
          "Gearing up to 1:500",
        ]}
        bannerHeadline="Open Up Your Trading Potential"
        bannerText="Register now and begin trading equity indices!"
        bannerImage={asset.indicesHero}
      />
      <ProductInfoSection
        prefix="indices"
        imageSrc={asset.laptop}
        imageAlt="Index Trading Platform"
        title={
          <>
            <span className="text-green-400">INDEX CFD</span> ROLLOVER <br />
            RATES & DIVIDEND <br />
            OUTLOOK
          </>
        }
      >
        <p>
          Figures shown reflect indicative pricing that can shift with live
          market activity and are typically set during the London and New York
          sessions. Details in this table were accurate when published; we may
          update them at any time. Liquidity and spreads can fluctuate as
          conditions change.
        </p>
        <p>
          Where “xx” marks expiry month and year, the first character maps to
          the month as follows: Jan (F), Feb (G), Mar (H), Apr (J),
          May (K), Jun (M), Jul (N), Jul/Aug (Q), Sep (U), Oct (V), Nov (X), Dec
          (Z). The second character is the final digit of the year — for
          example, Dec-2024 appears as “Z4”.
        </p>
        <p>
          Live figures appear on our trading platform. For anything else, reach
          out to the support desk.
        </p>
        <p>
          Because contracts can expire, review our Expiry Dates page before you
          place a trade.
        </p>
        <p>
          Margin figures below reflect current account conditions. Tiered margins may apply — review product specifications for full details.
        </p>
      </ProductInfoSection>
      <CtaBanner
        title={
          <>
            Prepared to enter the <br />
            <span>Indices Market?</span>
          </>
        }
      />
      <FaqAccordion items={getFaqs("indices.html")} />
    </>
  );
}
