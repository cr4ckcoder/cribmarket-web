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
  title: "Commodities Trading",
  description:
    "Speculate on Gold, Silver, Crude Oil, and other commodity CFDs with Crib Market — narrow spreads and deep market depth.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Engage the Planet&apos;s
        <br />
        <strong>Time-Tested Markets</strong>
      </>
    ),
    description: (
      <>
        Take a view on Gold, Silver, and Crude Oil price action
        <br />
        with professional fills and tightly managed spreads.
      </>
    ),
    imageSrc: asset.commoditiesAi,
    imageAlt: "Engage the Planet's Time-Tested Markets",
    primaryHref: site.registerUrl,
    primaryLabel: "Trade Metals",
  },
  {
    type: "video",
    title: (
      <>
        Power Your Strategy with
        <br />
        <span className="text-primary">Global Energies</span>
      </>
    ),
    description: (
      <>
        Reach US Oil, Brent, and Natural Gas. Manage exposure to
        <br />
        geopolitical swings with gearing of up to 1:500.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "Begin Energy Trading",
  },
  {
    type: "image",
    title: (
      <>
        Flexible Pathways into
        <br />
        <strong>Physical Markets</strong>
      </>
    ),
    description: (
      <>
        From farm products to industrial metals — broaden your
        <br />
        approach across a range of global tangible assets.
      </>
    ),
    imageSrc: asset.commoditiesHero,
    imageAlt: "Flexible Pathways into Physical Markets",
    primaryHref: site.registerUrl,
    primaryLabel: "Browse Markets",
  },
];

export default function CommoditiesPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <OrbitalHub />
      <WhyChoose
        title={
          <>
            Move Past Equities —{" "}
            <span className="as-highlight text-green-400">Trade</span> What
            Drives the Global Economy
          </>
        }
        tags={[
          "Precious Metals",
          "Round-the-Clock Support",
          "Energies",
          "Clear & Dependable",
          "Agriculture",
        ]}
        bannerHeadline="Open Up Your Trading Potential"
        bannerText="Register now and begin your commodities journey!"
        bannerImage={asset.commoditiesHero}
      />
      <ProductInfoSection
        prefix="commodities"
        imageSrc={asset.commoditiesPic}
        imageAlt="Commodities Trading Platform"
        title={
          <>
            <span className="text-green-400">COMMODITY CFD</span> PRICING <br />
            & MARKET <br />
            DETAILS
          </>
        }
      >
        <p>
          Pricing shown is indicative and may shift with live market activity.
        </p>
        <p>
          Margin figures below reflect current account conditions. Tiered margins may apply — review product specifications for full details.
        </p>
        <p>
          Commodity CFDs let you take a view on price swings in widely followed
          markets such as gold, oil, silver, and natural gas without holding the
          underlying physical product.
        </p>
        <p>
          Prices react to worldwide supply and demand, volatility spikes, and
          geopolitical developments.
        </p>
        <p>
          Crib Market publishes tight spreads and live quotes on MetaTrader 5.
          Leverage and overnight terms sit on the symbol sheet before you trade.
        </p>
        <p>
          Open a Standard, Growth, or Edge account and take a view on gold,
          oil, and the rest of the commodity book.
        </p>
      </ProductInfoSection>
      <CtaBanner
        title={
          <>
            Prepared to enter the <br />
            <span>Commodities Market?</span>
          </>
        }
      />
      <FaqAccordion items={getFaqs("commodities.html")} />
    </>
  );
}
