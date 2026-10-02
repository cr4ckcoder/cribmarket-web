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
  title: "Standard Account",
  description:
    "Crib Market Standard accounts start from $100, with $100 minimum withdrawal, 1:1000 leverage, and swap on overnight positions.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Standard Account.
        <br />
        <strong>Start From $100.</strong>
      </>
    ),
    description: (
      <>
        Open with a $100 minimum deposit and a $100 minimum withdrawal.
        <br />
        Swap applies on overnight positions on MetaTrader 5.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Standard Account",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN STANDARD ACCOUNT",
  },
  {
    type: "video",
    title: (
      <>
        Everyday Trading with
        <br />
        <span className="text-primary">1:1000 Leverage</span>
      </>
    ),
    description: (
      <>
        Standard gives you room to size positions with up to 1:1000 leverage.
        <br />
        A clear on-ramp for traders who want straightforward account terms.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "START TRADING",
  },
  {
    type: "image",
    title: (
      <>
        Clear Terms for
        <br />
        <strong>Day-to-Day Trading</strong>
      </>
    ),
    description: (
      <>
        Overnight positions can carry swap on Standard.
        <br />
        Simple funding, clear leverage, MetaTrader 5 execution.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Standard account trading",
    primaryHref: site.registerUrl,
    primaryLabel: "GET STARTED",
  },
];

const features = [
  {
    title: "Minimum Deposit",
    value: "$100",
    icon: accountFeatureIcons.deposit,
  },
  {
    title: "Minimum Withdrawal",
    value: "$100",
    icon: accountFeatureIcons.withdrawal,
  },
  { title: "Leverage", value: "1:1000", icon: accountFeatureIcons.leverage },
  { title: "Swap", value: "Yes", icon: accountFeatureIcons.swap },
  { title: "Platform", value: "MetaTrader 5", icon: accountFeatureIcons.platform },
  {
    title: "Account Type",
    value: "Standard",
    icon: accountFeatureIcons.currency,
  },
];

export default function StandardAccountPage() {
  const faqs = getFaqs("all-accounts.html");

  return (
    <>
      <HeroSlider slides={slides} />
      <AccountFeatures
        badge="Starter Tier"
        title={
          <>
            Standard Account <span className="highlight">Features</span>
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
