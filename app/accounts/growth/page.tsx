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
  title: "Growth Account",
  description:
    "Crib Market Growth accounts start from $500, with $100 minimum withdrawal, 1:300 leverage, and swap-free overnight terms.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Growth Account.
        <br />
        <strong>1:300 Leverage.</strong>
      </>
    ),
    description: (
      <>
        Open from a $500 minimum deposit with a $100 minimum withdrawal.
        <br />
        Swap-free trading with leverage up to 1:300.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Growth Account",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN GROWTH ACCOUNT",
  },
  {
    type: "video",
    title: (
      <>
        More Room to Trade on
        <br />
        <span className="text-primary">Growth Terms</span>
      </>
    ),
    description: (
      <>
        Step up from Standard with a $500 entry point and 1:300 leverage.
        <br />
        Swap-free conditions on MetaTrader 5.
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
        Swap-Free Trading for
        <br />
        <strong>Growing Accounts</strong>
      </>
    ),
    description: (
      <>
        Keep overnight positions without swap charges.
        <br />
        $500 minimum deposit and $100 minimum withdrawal.
      </>
    ),
    imageSrc: asset.laptop,
    imageAlt: "Swap-free Growth account trading",
    primaryHref: site.registerUrl,
    primaryLabel: "GET STARTED",
  },
];

const features = [
  {
    title: "Minimum Deposit",
    value: "$500",
    icon: accountFeatureIcons.deposit,
  },
  {
    title: "Minimum Withdrawal",
    value: "$100",
    icon: accountFeatureIcons.withdrawal,
  },
  { title: "Leverage", value: "1:300", icon: accountFeatureIcons.leverage },
  { title: "Swap", value: "Free", icon: accountFeatureIcons.swap },
  { title: "Platform", value: "MetaTrader 5", icon: accountFeatureIcons.platform },
  {
    title: "Account Type",
    value: "Growth",
    icon: accountFeatureIcons.currency,
  },
];

export default function GrowthAccountPage() {
  const faqs = getFaqs("all-accounts.html");

  return (
    <>
      <HeroSlider slides={slides} />
      <AccountFeatures
        badge="Growth Tier"
        title={
          <>
            Growth Account <span className="highlight">Features</span>
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
