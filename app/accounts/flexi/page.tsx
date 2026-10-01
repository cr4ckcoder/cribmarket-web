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
  title: "Flexi Account",
  description:
    "Crib Market Flexi accounts start from a $100 minimum deposit, with $100 minimum withdrawal, 1:200 leverage, and swap-free trading.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Flexi Account.
        <br />
        <strong>Start From $100.</strong>
      </>
    ),
    description: (
      <>
        Open with a $100 minimum deposit and a $100 minimum withdrawal.
        <br />
        Swap-free terms on the Crib Market platform.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Flexi Account",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN FLEXI ACCOUNT",
  },
  {
    type: "video",
    title: (
      <>
        Everyday Trading with
        <br />
        <span className="text-primary">1:200 Leverage</span>
      </>
    ),
    description: (
      <>
        Flexi gives you room to size positions with up to 1:200 leverage.
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
        Swap-Free Conditions for
        <br />
        <strong>Day-to-Day Trading</strong>
      </>
    ),
    description: (
      <>
        Overnight positions stay swap-free on Flexi.
        <br />
        Simple funding, clear leverage, Crib Market execution.
      </>
    ),
    imageSrc: asset.laptop,
    imageAlt: "Swap-free Flexi account trading",
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
  { title: "Leverage", value: "1:200", icon: accountFeatureIcons.leverage },
  { title: "Swap", value: "Free", icon: accountFeatureIcons.swap },
  { title: "Platform", value: "Crib Market", icon: accountFeatureIcons.platform },
  {
    title: "Account Type",
    value: "Flexi",
    icon: accountFeatureIcons.currency,
  },
];

export default function FlexiAccountPage() {
  const faqs = getFaqs("all-accounts.html");

  return (
    <>
      <HeroSlider slides={slides} />
      <AccountFeatures
        badge="Starter Tier"
        title={
          <>
            Flexi Account <span className="highlight">Features</span>
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
