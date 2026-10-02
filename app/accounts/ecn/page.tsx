import type { Metadata } from "next";
import {
  AccountFeatures,
  accountFeatureIcons,
} from "@/components/accounts/AccountFeatures";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ECN Account",
  description:
    "Crib Market ECN accounts start from a $10,000 minimum deposit, with $100 minimum withdrawal, 1:200 leverage, and swap on overnight positions.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Access Raw Spreads
        <br />
        with <strong>No Markup</strong>
      </>
    ),
    description: (
      <>
        ECN delivers liquidity at an institutional standard
        <br />
        plus rapid fills suited to professional traders.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Access Raw Spreads with No Markup",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN ECN ACCOUNT",
  },
  {
    type: "video",
    title: (
      <>
        Straight-Through Access
        <br />
        to <span className="text-primary">Worldwide Liquidity</span>
      </>
    ),
    description: (
      <>
        $10,000 minimum deposit, $100 minimum withdrawal, and 1:200 leverage.
        <br />
        Swap applies on overnight positions across more than 900 instruments.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "START ECN TRADING",
  },
  {
    type: "image",
    title: (
      <>
        Speed-Focused Fills for
        <br />
        <strong>Scalp &amp; HFT Strategies</strong>
      </>
    ),
    description: (
      <>
        Avoid re-quotes and keep slippage in check with millisecond fills.
        <br />
        Engineered for high-frequency and automated approaches.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Speed-Focused Fills for Scalp & HFT Strategies",
    primaryHref: site.registerUrl,
    primaryLabel: "EXPLORE TERMINALS",
  },
];

const features = [
  {
    title: "Minimum Deposit",
    value: "$10,000",
    icon: accountFeatureIcons.deposit,
  },
  {
    title: "Minimum Withdrawal",
    value: "$100",
    icon: accountFeatureIcons.withdrawal,
  },
  { title: "Leverage", value: "1:200", icon: accountFeatureIcons.leverage },
  { title: "Swap", value: "Yes", icon: accountFeatureIcons.swap },
  { title: "Platform", value: "Crib Market", icon: accountFeatureIcons.platform },
  {
    title: "Account Type",
    value: "ECN",
    icon: accountFeatureIcons.currency,
  },
];

export default function EcnAccountPage() {
  const faqs = getFaqs("ecn-account.html");

  return (
    <>
      <HeroSlider slides={slides} />
      <AccountFeatures
        badge="Professional Tier"
        title={
          <>
            ECN Account <span className="highlight">Features</span>
          </>
        }
        gridClassName="ecn-feature-centered-grid"
        features={features}
      />
      <CtaBanner
        title={
          <>
            Want to step into the <br />
            <span>Forex Market?</span>
          </>
        }
      />
      <FaqAccordion items={faqs} />
    </>
  );
}
