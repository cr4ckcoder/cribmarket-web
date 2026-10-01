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
  title: "Cent Account",
  description:
    "Start trading with Crib Market Cent accounts. Low deposits, micro-lot precision, and real market conditions for beginners.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        The Perfect Start for
        <br />
        <strong>Beginner Traders</strong>
      </>
    ),
    description: (
      <>
        Experience real market conditions with minimal risk.
        <br />
        Trade in cents and build your strategy with low deposits.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "The Perfect Start for Beginner Traders",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN CENT ACCOUNT",
  },
  {
    type: "video",
    title: (
      <>
        Master Trading with
        <br />
        <span className="text-primary">Micro-Lot Precision</span>
      </>
    ),
    description: (
      <>
        Ideal for testing new Expert Advisors and strategies.
        <br />
        Low barrier to entry with all the features of professional accounts.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "START LEARNING",
  },
  {
    type: "image",
    title: (
      <>
        Trade Everywhere with
        <br />
        <strong>CRIB MARKET Mobile</strong>
      </>
    ),
    description: (
      <>
        Manage your Cent account on the move. Access
        <br />
        real-time charts and execute trades from your phone.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Trade Everywhere with CRIB MARKET Mobile",
    primaryHref: site.registerUrl,
    primaryLabel: "GET THE APP",
  },
];

const features = [
  { title: "Minimum Deposit", value: "$10", icon: accountFeatureIcons.deposit },
  { title: "Spread", value: "0.33", icon: accountFeatureIcons.spread },
  { title: "Commission", value: "$0", icon: accountFeatureIcons.commission },
  { title: "Leverage Up To", value: "1:500", icon: accountFeatureIcons.leverage },
  { title: "Stop-Out Level", value: "30%", icon: accountFeatureIcons.stopOut },
  { title: "Platform", value: "Crib Market", icon: accountFeatureIcons.platform },
  { title: "Base Currency", value: "Forex", icon: accountFeatureIcons.currency },
];

export default function CentAccountPage() {
  const faqs = getFaqs("cent-account.html");

  return (
    <>
      <HeroSlider slides={slides} />
      <AccountFeatures
        title={
          <>
            Cent Account <span className="highlight">Features</span>
          </>
        }
        gridClassName="cent-feature-grid"
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
