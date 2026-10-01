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
  title: "ETFs Trading",
  description:
    "Trade ETF CFDs with Crib Market and diversify across sectors with one trade and leverage up to 1:500.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Diversify Instantly with
        <br />
        <strong>Global ETF CFDs</strong>
      </>
    ),
    description: (
      <>
        Trade baskets of assets selected by world-class managers.
        <br />
        diversify your risk across sectors with one single trade.
      </>
    ),
    imageSrc: asset.sharesHero,
    imageAlt: "Diversify Instantly with Global ETF CFDs",
    primaryHref: site.registerUrl,
    primaryLabel: "Trade ETFs",
  },
  {
    type: "video",
    title: (
      <>
        Access Leading
        <br />
        <span className="text-primary">Global Sectors</span>
      </>
    ),
    description: (
      <>
        From Artificial Intelligence to Green Energy. Control your
        <br />
        exposure to emerging industries with leverage up to 1:500.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "Start ETF Trading",
  },
  {
    type: "image",
    title: (
      <>
        Efficient Risk
        <br />
        <strong>Management Tools</strong>
      </>
    ),
    description: (
      <>
        Trade ETFs like shares but with built-in diversification.
        <br />
        The professional choice for a balanced global portfolio.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Efficient Risk Management Tools",
    primaryHref: site.registerUrl,
    primaryLabel: "Explore ETFs",
  },
];

export default function EtfsPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <OrbitalHub />
      <WhyChoose
        eyebrow={
          <p className="text-primary font-medium text-2xl mb-2">
            Leverage up to 1:500
          </p>
        }
        title={
          <>
            Trade a group of related{" "}
            <span className="as-highlight text-green-400">stocks</span> at once
          </>
        }
        bannerClassName="mt-20"
        bannerHeadline="TRADING FOR ANYONE. ANYWHERE. ANYTIME."
        bannerText="Trade over 1000 Instruments. Forex, CFDs on Stock Indices, Commodities, Stocks, Metals and Energies."
        bannerImage={asset.sharesHero}
        solidHref={site.registerUrl}
        solidLabel="Register"
        outlineHref={site.demoUrl}
        outlineLabel="Demo Account"
      >
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          ETFs are hand-selected by experts for easier built-in stock
          diversification
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Exciting Sectors
            </h3>
            <p className="text-gray-400 text-sm">
              Trade on robotics, AI, ESG and more
            </p>
          </div>
          <div
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Trades like Shares
            </h3>
            <p className="text-gray-400 text-sm">
              Buy or sell ETFs as if they’re one stock
            </p>
          </div>
          <div
            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Flexible Leverage
            </h3>
            <p className="text-gray-400 text-sm">
              Trade with margins as low upto 0.33
            </p>
          </div>
        </div>
      </WhyChoose>
      <ProductInfoSection
        prefix="etf"
        imageSrc={asset.stockMarketGraph}
        imageAlt="ETF Trading Platform"
        title={
          <>
            <span className="as-highlight text-3xl">DIVERSIFIED</span>
            <br />
            ASSET
            <br />
            BASKETS
          </>
        }
      >
        <h4 className="text-2xl font-bold text-white mb-6">
          What are ETF <span className="text-primary">CFDs?</span>
        </h4>
        <div className="border border-primary/30 p-8 rounded-2xl bg-primary/5">
          <p className="text-white leading-relaxed">
            ETF (Exchange-Traded Fund) CFDs are a contract that allows traders
            to speculate at a lower cost on the increase (or decrease) in value
            of a group of stocks that have been selected by industry - such as
            biotech or robotics. Unlike index funds, which are priced at the end
            of each day, traders can buy and sell ETFs during the day. This
            means that investors can move in and out of these funds in a similar
            way to how they trade stocks. Learn more about ETFs below.
          </p>
        </div>
      </ProductInfoSection>
      <CtaBanner
        title={
          <>
            Ready to access the <br />
            <span>ETF Market?</span>
          </>
        }
      />
      <FaqAccordion items={getFaqs("etfs.html")} />
    </>
  );
}
