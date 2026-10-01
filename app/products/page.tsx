import type { Metadata } from "next";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { CfdExplainer } from "@/components/products/CfdExplainer";
import { MarketGrid } from "@/components/products/MarketGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { OrbitalHub } from "@/components/sections/OrbitalHub";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Crib Market markets: forex, indices, commodities, and crypto CFDs on MetaTrader 5.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        One login. <br />
        <strong>Four asset classes.</strong>
      </>
    ),
    description: (
      <>
        Forex, indices, commodities, and crypto CFDs
        <br />
        from a single Crib Market MetaTrader 5 account.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "A Single Workspace. Countless Market Paths.",
    primaryHref: site.registerUrl,
    primaryLabel: "View All Products",
  },
  {
    type: "video",
    title: (
      <>
        Command Every
        <br />
        <span className="text-primary">Major Asset Class</span>
      </>
    ),
    description: (
      <>
        From gold and Bitcoin to the S&P 500 and beyond. Trade the
        <br />
        benchmarks that matter with ultra-responsive execution.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "Start Trading Now",
  },
  {
    type: "image",
    title: (
      <>
        Everything Modern Traders
        <br />
        <strong>Need in One Place</strong>
      </>
    ),
    description: (
      <>
        Professional tooling, millisecond precision, and substantial
        <br />
        liquidity across 900+ instruments inside one connected system.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Everything Modern Traders Need in One Place",
    primaryHref: site.registerUrl,
    primaryLabel: "Discover Instruments",
  },
];

export default function ProductsPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <OrbitalHub />
      <MarketGrid />
      <CfdExplainer />
      <CtaBanner
        title={
          <>
            Prepared to enter the <br />
            <span>Global Markets?</span>
          </>
        }
      />
    </>
  );
}
