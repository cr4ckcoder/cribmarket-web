import type { Metadata } from "next";
import Link from "next/link";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trading Accounts",
  description:
    "Compare Crib Market Standard, Growth, and Edge accounts. Three deposit starting points, swap-free terms, MetaTrader 5.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        An Account Matched to
        <br />
        <strong>How You Trade</strong>
      </>
    ),
    description: (
      <>
        Choose Standard from $100, Growth from $500, or Edge from $10,000.
        <br />
        All three are swap-free with a $100 minimum withdrawal.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "An Account Matched to How You Trade",
    primaryHref: "#accounts",
    primaryLabel: "COMPARE OPTIONS",
  },
  {
    type: "video",
    title: (
      <>
        Secure, Straightforward,
        <br />
        <span className="text-primary">and Sharp.</span>
      </>
    ),
    description: (
      <>
        Trade under genuine market conditions backed by institutional-grade safeguards.
        <br />
        Move confidently across our full lineup of account options.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN LIVE ACCOUNT",
  },
  {
    type: "image",
    title: (
      <>
        One Portal for Your
        <br />
        <strong>Trading Decisions</strong>
      </>
    ),
    description: (
      <>
        Run your trading activity from a single client portal.
        <br />
        Adaptability, capability, and accuracy within easy reach.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "One Portal for Your Trading Decisions",
    primaryHref: site.registerUrl,
    primaryLabel: "GET STARTED",
  },
];

const steps = [
  {
    title: "Receive Login Details",
    description:
      "Your credentials and secure Client Portal access arrive by email right away.",
  },
  {
    title: "Confirm Your Identity",
    description:
      "Provide valid email, ID, and address documents so verification can finish quickly.",
  },
  {
    title: "Pick Your Account",
    description:
      "Choose Standard, Growth, or Edge based on your deposit size and leverage needs.",
  },
  {
    title: "Add Funds",
    description:
      "After approval and suitability checks, place a secure deposit to get started.",
  },
  {
    title: "Enter the Client Portal",
    description:
      "Use your personal dashboard to oversee balances and keep account security current.",
  },
  {
    title: "Start Trading",
    description:
      "Open positions across world markets and multiple asset classes with ease.",
  },
];

export default function AccountsPage() {
  const faqs = getFaqs("all-accounts.html");

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="as-acc-section" id="accounts">
        <div className="as-container">
          <div className="as-section-header" data-aos="fade-up">
            <span className="as-badge">Choose Your Path</span>
            <h2 className="as-section-title">
              Browse Our{" "}
              <span style={{ color: "#f40000" }}>Account Lineup</span>
            </h2>
            <p className="as-section-subtitle">
              Three live accounts — Standard, Growth, and Edge — shaped
              around deposit size, leverage, and swap-free terms.
            </p>
            <div className="as-title-divider" />
          </div>

          <div className="as-acc-grid">
            <div
              className="as-acc-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="as-acc-card-inner">
                <div className="as-acc-icon">
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-2.066 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 2.066 3.42 3.42 0 010 4.606 3.42 3.42 0 00-2.066 1.946 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-2.066 3.42 3.42 0 010-4.606z"
                    />
                  </svg>
                </div>
                <h3 className="as-acc-name">Standard Account</h3>
                <p className="as-acc-desc">
                  Entry live account from a $100 minimum deposit, with 1:200
                  leverage and swap-free trading on MetaTrader 5.
                </p>
                <div className="as-acc-meta">
                  <span>
                    Min Deposit: <strong>$100</strong>
                  </span>
                  <span>
                    Min Withdrawal: <strong>$100</strong>
                  </span>
                </div>
                <div className="as-acc-meta">
                  <span>
                    Leverage: <strong>1:200</strong>
                  </span>
                  <span>
                    Swap: <strong>Free</strong>
                  </span>
                </div>
                <Link href="/accounts/standard" className="as-acc-link">
                  VIEW DETAILS
                </Link>
              </div>
            </div>

            <div
              className="as-acc-card featured"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="as-acc-card-inner">
                <div className="as-acc-icon">
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="as-acc-name">Growth Account</h3>
                <p className="as-acc-desc">
                  Mid-tier live account from a $500 minimum deposit, with 1:300
                  leverage and swap-free overnight conditions.
                </p>
                <div className="as-acc-meta">
                  <span>
                    Min Deposit: <strong>$500</strong>
                  </span>
                  <span>
                    Min Withdrawal: <strong>$100</strong>
                  </span>
                </div>
                <div className="as-acc-meta">
                  <span>
                    Leverage: <strong>1:300</strong>
                  </span>
                  <span>
                    Swap: <strong>Free</strong>
                  </span>
                </div>
                <Link href="/accounts/growth" className="as-acc-link">
                  VIEW DETAILS
                </Link>
              </div>
            </div>

            <div
              className="as-acc-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="as-acc-card-inner">
                <div className="as-acc-icon">
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"
                    />
                  </svg>
                </div>
                <h3 className="as-acc-name">Edge Account</h3>
                <p className="as-acc-desc">
                  Professional-tier live account with a $10,000 minimum deposit,
                  1:100 leverage, and swap-free trading.
                </p>
                <div className="as-acc-meta">
                  <span>
                    Min Deposit: <strong>$10,000</strong>
                  </span>
                  <span>
                    Min Withdrawal: <strong>$100</strong>
                  </span>
                </div>
                <div className="as-acc-meta">
                  <span>
                    Leverage: <strong>1:100</strong>
                  </span>
                  <span>
                    Swap: <strong>Free</strong>
                  </span>
                </div>
                <Link href="/accounts/edge" className="as-acc-link">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="as-steps-section">
        <div className="as-container">
          <div className="as-section-header" data-aos="fade-up">
            <span className="as-badge">Getting Set Up</span>
            <h2 className="as-section-title">
              Your Path to <span style={{ color: "#f40000" }}>Live Trading</span>
            </h2>
            <div className="as-title-divider" />
          </div>

          <div className="as-steps-grid">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="as-step-item"
                data-aos="fade-right"
                data-aos-delay={String(index * 100)}
              >
                <div className="as-step-num" style={{ color: "#f40000" }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
