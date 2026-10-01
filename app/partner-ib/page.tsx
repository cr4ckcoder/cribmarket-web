import type { Metadata } from "next";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { IbCalculator } from "@/components/ib/IbCalculator";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Introducing Broker (IB) Program",
  description:
    "Introduce clients to Crib Market. Tiered commissions, referral tracking, and published reporting.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Grow Your Business with
        <br />
        <strong>CRIB MARKET PARTNERS</strong>
      </>
    ),
    description: (
      <>
        Experience exceptional returns through our tailored remuneration plans
        <br />
        and dedicated account management for a truly premium experience.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Grow Your Business with CRIB MARKET PARTNERS",
    primaryHref: site.registerUrl,
    primaryLabel: "BECOME A PARTNER",
  },
  {
    type: "video",
    title: (
      <>
        Maximum Commissions &amp;
        <br />
        <span className="text-primary">Transparent Reporting</span>
      </>
    ),
    description: (
      <>
        Earn industry-leading rebates on every lot traded by your referrals.
        <br />
        Track your growth with our advanced real-time partner dashboard.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "START EARNING",
  },
  {
    type: "image",
    title: (
      <>
        Global Support for
        <br />
        <strong>Local Growth</strong>
      </>
    ),
    description: (
      <>
        Scaling your referral network is easier with our marketing tools
        <br />
        and local support. One partnership for infinite global possibilities.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Global Support for Local Growth",
    primaryHref: site.registerUrl,
    primaryLabel: "SEE REBATE TIERS",
  },
];

const onboardingSteps = [
  {
    title: "Step 1. Verify Your Identity",
    description:
      "Submit valid proof of your email, ID, and residential address for verification.",
  },
  {
    title: "Step 2. Access Credentials",
    description:
      "Receive your login details and secure access to the Client Portal via email.",
  },
  {
    title: "Step 3. Choose Your Account",
    description:
      "Select your preferred account type and base currency: AED, USD, EUR, or GBP.",
  },
  {
    title: "Step 4. Fund Your Account",
    description:
      "Once approved, make a secure deposit after completing our suitability checks.",
  },
  {
    title: "Step 5. Log Into the Client Portal",
    description: "Access your personal trading dashboard to manage your account.",
  },
  {
    title: "Step 6. Begin Trading",
    description:
      "Explore global markets and start trading across multiple asset classes.",
  },
];

export default function PartnerIbPage() {
  const faqs = getFaqs("partner-ib.html");

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="as-ib-intro">
        <div className="as-container">
          <div className="as-section-header text-center" data-aos="fade-up">
            <span className="as-badge as-highlight">EXCLUSIVE PARTNERSHIP</span>
            <h2 className="as-section-title">
              Join Our <span className="as-highlight">IB Program</span>
            </h2>
            <p
              className="as-section-subtitle"
              style={{ color: "#a8a5a5" }}
            >
              Unlock the potential of consistent earnings by referring traders
              to one of the fastest-growing platforms in the industry.
            </p>
            <div className="as-title-divider" />
          </div>

          <div className="as-ib-details" data-aos="fade-up">
            <p className="as-text-large text-center">
              As an Introducing Broker, you&apos;ll benefit from a competitive,
              transparent, and rewarding commission structure designed to grow
              alongside your referrals.
            </p>
            <p className="as-highlight-text text-center mt-6">
              We&apos;re Excited To Offer You A Rewarding Opportunity To{" "}
              <span className="as-highlight">Grow Your Income</span> With Us.
              Benefit From Our Competitive Tiered Commission Structure.
            </p>
          </div>

          <div className="as-commission-wrapper" data-aos="fade-up">
            <div className="as-table-container">
              <table className="as-premium-table">
                <thead>
                  <tr>
                    <th>Lots</th>
                    <th>Standard</th>
                    <th>ECN</th>
                    <th>VIP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UPTO 200</td>
                    <td>10</td>
                    <td>8</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>1000 - 200</td>
                    <td>12</td>
                    <td>10</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>ABOVE 1000</td>
                    <td>16</td>
                    <td>12</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="as-calc-section">
        <div className="as-container">
          <IbCalculator />
        </div>
      </section>

      <section className="as-journey-section as-alternate">
        <div className="as-container">
          <div className="as-journey-grid">
            <div className="as-journey-visual" data-aos="fade-right">
              <div className="as-glass-dashboard">
                <div className="as-dash-header">
                  <div className="as-dash-circles">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="as-dash-title">PARTNER PORTAL</div>
                </div>
                <div className="as-dash-body">
                  <div className="as-stats-mock">
                    <div className="as-stat-item">
                      <span className="as-stat-label">TOTAL REFERRALS</span>
                      <span className="as-stat-value">1,284</span>
                    </div>
                    <div className="as-stat-item">
                      <span className="as-stat-label">COMMISSION EARNED</span>
                      <span className="as-stat-value text-primary">
                        $12,450.00
                      </span>
                    </div>
                  </div>
                  <div className="as-chart-mock">
                    <div className="as-bar" style={{ height: "30%" }} />
                    <div className="as-bar" style={{ height: "50%" }} />
                    <div className="as-bar" style={{ height: "40%" }} />
                    <div className="as-bar" style={{ height: "70%" }} />
                    <div className="as-bar" style={{ height: "65%" }} />
                    <div className="as-bar" style={{ height: "95%" }} />
                  </div>
                </div>
                <div className="as-dash-overlay" />
              </div>
            </div>

            <div className="as-journey-content" data-aos="fade-left">
              <div className="as-section-header">
                <span className="as-badge as-highlight">REGISTRATION</span>
                <h2 className="as-section-title">
                  How to open <span className="as-highlight">Crib Market</span>{" "}
                  account?
                </h2>
              </div>

              <div className="as-vertical-steps">
                {onboardingSteps.map((step, index) => {
                  const isLast = index === onboardingSteps.length - 1;
                  return (
                    <div className="as-v-step" key={step.title}>
                      <div className="as-v-marker">
                        <div className="as-v-dot" />
                        {!isLast ? <div className="as-v-line" /> : null}
                      </div>
                      <div className="as-v-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

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
