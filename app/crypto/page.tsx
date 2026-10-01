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
  title: "Cryptocurrency Trading",
  description:
    "Trade BTC, ETH, and other crypto CFDs with Crib Market. No wallet. MetaTrader 5. Leverage up to 1:500.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Access Digital
        <br />
        <strong>Assets Around the Clock</strong>
      </>
    ),
    description: (
      <>
        Keep pace with continuous trading on leading coins
        <br />
        such as BTC and ETH, backed by competitive spreads.
      </>
    ),
    imageSrc: asset.indicesHero,
    imageAlt: "Access Digital Assets Around the Clock",
    primaryHref: site.registerUrl,
    primaryLabel: "Trade Crypto",
  },
  {
    type: "video",
    title: (
      <>
        Amplified Exposure to
        <br />
        <span className="text-primary">Crypto Derivatives</span>
      </>
    ),
    description: (
      <>
        Go long or short with gearing of up to 1:500. Skip the wallet —
        <br />
        trade crypto price moves on our advanced platforms.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "Start Digital Trading",
  },
  {
    type: "image",
    title: (
      <>
        Protected Entry to
        <br />
        <strong>Blockchain Markets</strong>
      </>
    ),
    description: (
      <>
        Enterprise-level safeguards for individual traders. Broaden your
        <br />
        mix with the digital assets traders follow most closely.
      </>
    ),
    imageSrc: asset.sharesHero,
    imageAlt: "Protected Entry to Blockchain Markets",
    primaryHref: site.registerUrl,
    primaryLabel: "Browse Coins",
  },
];

export default function CryptoPage() {
  return (
    <>
      <HeroSlider slides={slides} />
      <OrbitalHub />
      <WhyChoose
        title={
          <>
            Take Advantage of{" "}
            <span className="as-highlight text-green-400">1% spreads</span> on
            digital asset CFDs
          </>
        }
        tags={[
          "Cryptocurrency CFDs",
          "Safer than Hot Wallets",
          "Profit from rising or falling prices",
          "Gearing up to 1:500",
          "Round-the-Clock Support",
          "Clear & Dependable",
          "Narrow Spreads",
          "Complimentary Research Tools",
        ]}
        bannerHeadline="Open Up Your Trading Potential"
        bannerText="Register now and begin trading — access over 1,000 instruments across Forex, equity-index CFDs, commodities, metals, and energies."
        bannerImage={asset.sharesHero}
      />
      <ProductInfoSection
        prefix="crypto"
        imageSrc={asset.bitcoin}
        imageAlt="Crypto Trading Platform"
        title={
          <>
            <span className="as-highlight text-3xl">IMMEDIATE</span>
            <br />
            DIGITAL ASSET
            <br />
            DEPTH
          </>
        }
      >
        <h3 className="text-2xl font-bold text-white mb-6">
          How do <span className="text-primary">crypto</span> CFDs work?
        </h3>
        <p>
          A crypto CFD is an agreement that lets you trade the change in a
          cryptocurrency&apos;s price between opening and closing a position.
          You can take a view on whether a coin&apos;s value will climb or drop.
          Because you are dealing through a contract rather than buying coins,
          you neither hold the digital assets nor need a dedicated hot wallet.
        </p>
        <div className="crypto-hours-box">
          <h4 className="font-bold text-primary mb-4 text-xl uppercase">
            Crypto Market Hours
          </h4>
          <p className="mb-4">
            Depth and spreads can shift with market conditions; spreads are
            variable and may expand overnight. Figures in these tables were
            accurate when published, and we may revise them at any time. For
            live updates, check your trading platform or contact Support.
          </p>
          <p className="mb-4 opacity-70">
            Margin figures below reflect current account conditions. Tiered margins may apply — review product specifications for full details.
          </p>
          <p className="mb-2">
            <strong>Monday to Friday:</strong> Continuous coverage, aside from
            leveraged crypto breaks.
          </p>
          <p className="mb-2">
            <strong>Saturday & Sunday:</strong> 11:30–23:59 ET
          </p>
          <p className="mb-4">
            <strong>Leveraged crypto pause (end-of-day rollover):</strong>{" "}
            23:59 – 00:01 ET
          </p>
          <p className="text-sm opacity-60 mt-4">
            *Average pricing reflects London and New York session activity.
          </p>
          <p className="text-sm opacity-60">
            ** Hours can shift around public holidays or major global events.
            Check our Market Holiday Hours page for the latest schedule.
          </p>
        </div>
      </ProductInfoSection>
      <CtaBanner
        title={
          <>
            Prepared to enter the <br />
            <span>Crypto Market?</span>
          </>
        }
      />
      <FaqAccordion items={getFaqs("crypto.html")} />
    </>
  );
}
