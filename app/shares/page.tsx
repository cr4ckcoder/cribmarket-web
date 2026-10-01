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
  title: "Shares Trading",
  description:
    "Trade share CFDs on Apple, Tesla, Amazon and 500+ global stocks with Crib Market.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Own the Markets with
        <br />
        <strong>Blue-Chip Shares</strong>
      </>
    ),
    description: (
      <>
        Trade the world&apos;s leading companies like Apple, Tesla,
        <br />
        and Amazon with 0.1s execution and deep liquidity.
      </>
    ),
    imageSrc: asset.commoditiesHero,
    imageAlt: "Own the Markets with Blue-Chip Shares",
    primaryHref: site.registerUrl,
    primaryLabel: "Trade Shares",
  },
  {
    type: "video",
    title: (
      <>
        Profit from Global
        <br />
        <span className="text-primary">Corporate Giants</span>
      </>
    ),
    description: (
      <>
        Go long or short on over 500+ global stocks. Benefit
        <br />
        from dividend adjustments and zero-commission trading.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "Start Stock Trading",
  },
  {
    type: "image",
    title: (
      <>
        Institutional Access to
        <br />
        <strong>Public Markets</strong>
      </>
    ),
    description: (
      <>
        Direct Market Access (DMA) precision for every trader.
        <br />
        Leverage our advanced infrastructure for your equity strategy.
      </>
    ),
    imageSrc: asset.sharesHero,
    imageAlt: "Institutional Access to Public Markets",
    primaryHref: site.registerUrl,
    primaryLabel: "Explore Companies",
  },
];

export default function SharesPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <OrbitalHub />
      <WhyChoose
        title={
          <>
            <span className="as-highlight text-green-400">Commission-free</span>{" "}
            US shares
          </>
        }
        tags={[
          "Technology",
          "Retail",
          "Healthcare",
          "Energy",
          "Financials",
          "and More",
        ]}
        bannerHeadline="Unlock Your Trading Potential"
        bannerText="Sign Up Today and Start Your Forex Journey! Sign Up Today and Start Your Forex Journey!"
        bannerImage={asset.sharesHero}
      />
      <ProductInfoSection
        prefix="shares"
        imageSrc={asset.appleIcons}
        imageAlt="Stock Trading Platform"
        title={
          <>
            <span className="as-highlight text-3xl">DIRECT MARKET</span>
            <br />
            ACCESS WITH
            <br />
            PRECISION
          </>
        }
      >
        <h4 className="text-2xl font-bold text-white mb-6">
          What are <span className="text-primary">shares</span> CFDs?
        </h4>
        <p>
          This chart represents typical pricing that may change due to live
          market conditions.
        </p>
        <p>
          The margins below only apply to . We’ve introduced tiered margins on
          our trading platform. Review product specifications for tiered margin details.
        </p>
        <p>
          Commodity CFDs enable traders to speculate on price movements of
          popular commodities like gold, oil, silver, and natural gas without
          owning the physical asset.
        </p>
        <p>
          Pricing is influenced by global supply and demand, market volatility,
          and geopolitical events.
        </p>
        <p>
          Crib Market publishes tight spreads and live prices on MetaTrader 5.
          Leverage and overnight terms sit on the symbol sheet before you trade.
        </p>
        <p>
          Open a Crib Market account when you are ready to take a view on listed
          share CFDs.
        </p>
      </ProductInfoSection>
      <CtaBanner
        title={
          <>
            Ready to access the <br />
            <span>Shares Market?</span>
          </>
        }
      />
      <FaqAccordion items={getFaqs("shares.html")} />
    </>
  );
}
