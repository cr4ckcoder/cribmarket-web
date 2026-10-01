import type { Metadata } from "next";
import { Eye, Headphones, Network, Target, Users } from "lucide-react";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Crib Market is a multi-asset broker licensed from the USA. Published pricing, MetaTrader 5, and Standard, Growth, and Edge accounts.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Built for traders who
        <br />
        <strong>want the book, not the noise</strong>
      </>
    ),
    description: (
      <>
        Forex, indices, commodities, and crypto CFDs on MetaTrader 5,
        <br />
        with Standard, Growth, and Edge accounts and a desk that answers.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Helping Traders Navigate Global Markets",
    primaryHref: "/about",
    primaryLabel: "DISCOVER MORE",
  },
  {
    type: "video",
    title: (
      <>
        Clear, Honest Trading
        <br />
        <span className="text-primary">Licensed from USA</span>
      </>
    ),
    description: (
      <>
        Published costs, MetaTrader 5, and support that stays with you
        <br />
        after the account is live, not only during signup.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN ACCOUNT",
  },
  {
    type: "image",
    title: (
      <>
        Support Along Every
        <br />
        <strong>Trading Path</strong>
      </>
    ),
    description: (
      <>
        Whether you begin on Standard, move to Growth, or trade Edge,
        <br />
        our specialists stand ready for your next move in the markets.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "Support Along Every Trading Path",
    primaryHref: site.registerUrl,
    primaryLabel: "GET STARTED",
  },
];

const teamCards = [
  {
    title: "Deep books, not empty screens",
    description:
      "Liquidity comes from established providers so the symbols you trade have a book behind them.",
    icon: Network,
  },
  {
    title: "A desk that stays after onboarding",
    description:
      "Product and support specialists help you pick Standard, Growth, or Edge and remain available once you are live.",
    icon: Users,
  },
  {
    title: "Reach us when markets move",
    description:
      `Write to ${site.supportEmail} for funding, MetaTrader 5 logins, or account questions.`,
    icon: Headphones,
  },
];

const marketCards = [
  { symbol: "BTCUSD", price: "68,421.50", change: "+3.25%", up: true },
  { symbol: "EURUSD", price: "1.0924", change: "+0.12%", up: true },
  { symbol: "XAUUSD", price: "2,354.10", change: "+0.85%", up: true },
  { symbol: "ETHUSD", price: "3,512.40", change: "-0.45%", up: false },
  { symbol: "GBPUSD", price: "1.2741", change: "+0.08%", up: true },
  { symbol: "NAS100", price: "18,210.50", change: "+1.22%", up: true },
  { symbol: "USOIL", price: "78.45", change: "-2.10%", up: false },
];

export default function AboutPage() {
  const faqs = getFaqs("about.html");

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="as-team-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#f40000 1px, transparent 1px), linear-gradient(90deg, #f40000 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="as-container relative z-10">
          <div className="as-cinematic-header text-center mb-20" data-aos="fade-up">
            <div className="header-ghost-text">NETWORK</div>
            <span className="as-badge">WORLDWIDE REACH</span>
            <h2 className="as-ultra-title">
              Clear books. <span className="text-glow">Clear terms.</span>{" "}
              <br />
              Access you can <span className="text-underline">rely on</span>
            </h2>
            <div className="header-accent-line" />
          </div>

          <div className="as-team-grid mt-12">
            {teamCards.map((card, index) => {
              const IconCmp = card.icon;
              return (
                <div
                  key={card.title}
                  className="as-team-card"
                  data-aos="fade-up"
                  data-aos-delay={String(index * 100)}
                >
                  <div className="as-team-icon">
                    <IconCmp size={28} />
                  </div>
                  <div className="as-team-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="orbital-hub">
        <div className="orbital-container">
          <div className="orbital-deck">
            <span className="orbital-badge">Simple &amp; Protected</span>
            <h2 className="orbital-title">
              Access Instruments Across
              <br />
              <strong>World Markets</strong>
            </h2>
            <p className="orbital-desc">
              Built around your results. Use institutional-strength tools on a
              platform engineered for serious trading performance.
            </p>

            <div className="roller-chamber">
              <div className="orbital-lens-overlay" />
              <div className="roller-track">
                {[...marketCards, ...marketCards].map((card, index) => (
                  <div className="roller-card" key={`${card.symbol}-${index}`}>
                    <div className="card-left">
                      <span className="card-symbol">{card.symbol}</span>
                      <span className="card-price">{card.price}</span>
                    </div>
                    <div className="card-right">
                      <span
                        className={`card-change ${card.up ? "up" : "down"}`}
                      >
                        {card.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="as-vision-section">
        <div className="as-container">
          <div className="as-cinematic-header text-center" data-aos="fade-up">
            <div
              className="header-ghost-text"
              style={{ letterSpacing: "40px", opacity: 0.02 }}
            >
              DNA
            </div>
            <div className="hud-line-top" />
            <span className="as-badge">DIRECTION &amp; AMBITION</span>
            <h2 className="as-ultra-title">
              What <span className="text-glow">Drives Us</span> &amp;{" "}
              <br />
              What We <span className="text-underline">Deliver</span>
            </h2>
            <div className="hud-line-bottom" />
            <div className="header-accent-line" />
          </div>

          <div className="as-vision-grid mt-24">
            <div className="as-neon-card" data-aos="fade-right">
              <div className="card-glow-bg" />
              <div className="as-vision-inner relative z-10">
                <div className="as-vision-icon">
                  <Eye size={28} />
                </div>
                <h3>
                  Our <span className="as-highlight">Vision</span>
                </h3>
                <p>
                  Give every trader a straight path into listed markets: MetaTrader 5,
                  published costs, and accounts that match how they fund.
                </p>
                <div className="card-accent-border" />
              </div>
            </div>

            <div className="as-neon-card" data-aos="fade-left">
              <div className="card-glow-bg" />
              <div className="as-vision-inner relative z-10">
                <div className="as-vision-icon">
                  <Target size={28} />
                </div>
                <h3>
                  Our <span className="as-highlight">Mission</span>
                </h3>
                <p>
                  Keep the venue safe and the tickets fast. Standard, Growth,
                  and Edge exist so the account matches the way you actually
                  trade, not a one-size brochure.
                </p>
                <div className="card-accent-border" />
              </div>
            </div>
          </div>

          <div className="as-vision-footer text-center mt-12" data-aos="zoom-in">
            <p>
              Crib Market encrypts client data and operates as a broker licensed
              from the USA. Office: 117 S Lexington St, Ste 100, HARRISONVILLE, USA.
            </p>
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
