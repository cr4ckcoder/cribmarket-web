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
  title: "Gold Account",
  description:
    "Unlock elite Crib Market Gold account benefits with lower spreads, VIP support, and institutional-grade conditions.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Elite Trading Benefits for
        <br />
        <strong>Gold Account Holders</strong>
      </>
    ),
    description: (
      <>
        Unlock premium features with lower spreads and dedicated
        <br />
        account management for high-volume traders.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Elite Trading Benefits for Gold Account Holders",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN GOLD ACCOUNT",
  },
  {
    type: "video",
    title: (
      <>
        Enhanced Spreads and
        <br />
        <span className="text-primary">VIP Support</span>
      </>
    ),
    description: (
      <>
        Experience the gold standard of trading with spreads from
        <br />
        0.22 and priority access to our 24/5 support team.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "UPGRADE TO GOLD",
  },
  {
    type: "image",
    title: (
      <>
        Maximize Your Potential
        <br />
        with <strong>Elite Conditions</strong>
      </>
    ),
    description: (
      <>
        Higher leverage, lower costs, and institutional liquidity.
        <br />
        The professional choice for sophisticated index and forex traders.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Maximize Your Potential with Elite Conditions",
    primaryHref: site.registerUrl,
    primaryLabel: "SEE ALL BENEFITS",
  },
];

const features = [
  {
    title: "Minimum Deposit",
    value: "$5,000",
    icon: accountFeatureIcons.deposit,
  },
  { title: "Spread", value: "0.22", icon: accountFeatureIcons.spread },
  { title: "Commission", value: "$5", icon: accountFeatureIcons.commission },
  {
    title: "Leverage Up To",
    value: "1:500",
    icon: accountFeatureIcons.leverage,
  },
  { title: "Stop-Out Level", value: "30%", icon: accountFeatureIcons.stopOut },
  { title: "Platform", value: "Crib Market", icon: accountFeatureIcons.platform },
  {
    title: "Base Currency",
    value: "Forex",
    icon: accountFeatureIcons.currency,
  },
];

export default function GoldAccountPage() {
  const faqs = getFaqs("gold-account.html");

  return (
    <>
      <HeroSlider slides={slides} />
      <AccountFeatures
        badge="Elite Performance"
        title={
          <>
            Gold Account <span className="highlight">Features</span>
          </>
        }
        gridClassName="gold-feature-centered-grid"
        features={features}
      />
      <CtaBanner
        title={
          <>
            Ready to access the <br />
            <span>Forex Market?</span>
          </>
        }
      />
      <FaqAccordion items={faqs} />
    </>
  );
}
