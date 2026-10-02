import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  Bell,
  Cpu,
  Layers,
  ListOrdered,
  MonitorSmartphone,
  Zap,
} from "lucide-react";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { getFaqs } from "@/lib/faqs";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "MetaTrader 5",
  description:
    "Trade on MetaTrader 5 with Crib Market. Charts, Expert Advisors, and multi-asset access on desktop, web, and mobile.",
};

const slides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        Trade on
        <br />
        <strong>MetaTrader 5</strong>
      </>
    ),
    description: (
      <>
        The industry standard for multi-asset trading. Multiple timeframes,
        <br />
        80+ indicators, and algorithmic tools on one platform.
      </>
    ),
    imageSrc: asset.mt5HeroBanner,
    imageAlt: "MetaTrader 5 trading platform",
    primaryHref: site.registerUrl,
    primaryLabel: "START TRADING",
  },
  {
    type: "video",
    title: (
      <>
        Institutional Liquidity &amp;
        <br />
        <strong>Precision Execution</strong>
      </>
    ),
    description: (
      <>
        Connect directly to global financial markets with deep liquidity
        <br />
        and lightning-fast order processing for maximum trading efficiency.
      </>
    ),
    videoSrc: asset.heroVideo,
    primaryHref: site.registerUrl,
    primaryLabel: "GET STARTED",
  },
  {
    type: "image",
    title: (
      <>
        Institutional Depth for
        <br />
        <strong>Modern Retail Traders</strong>
      </>
    ),
    description: (
      <>
        Experience depth of market, real-time liquidity, and millisecond
        <br />
        execution speed. Built for professional-grade market analysis.
      </>
    ),
    imageSrc: asset.mt5Showcase,
    imageAlt: "Institutional Depth for Modern Retail Traders",
    primaryHref: site.registerUrl,
    primaryLabel: "OPEN LIVE ACCOUNT",
  },
];

const features = [
  {
    title: "Multi-Asset Support",
    description:
      "Trade forex, stocks, indices, commodities, and more – all on one platform.",
    icon: Layers,
  },
  {
    title: "Ultra-Fast Execution",
    description: "Trade with minimal latency and high-speed order processing.",
    icon: Zap,
  },
  {
    title: "Advanced Order Types",
    description:
      "Execute limit, stop, trailing, and take-profit/stop-loss trades.",
    icon: ListOrdered,
  },
  {
    title: "Signals",
    description:
      "Follow signals by top market analysts directly within the platform.",
    icon: Bell,
  },
  {
    title: "Algorithmic Trading",
    description:
      "Automate strategies with built-in algorithmic trading tools and scripting.",
    icon: Cpu,
  },
  {
    title: "Depth of Market",
    description:
      "View real-time market liquidity for better decision-making.",
    icon: Activity,
  },
  {
    title: "Cross-Platform",
    description: "Available for Windows, macOS, iOS, and Android.",
    icon: MonitorSmartphone,
  },
];

export default function PlatformsPage() {
  const faqs = getFaqs("platforms.html");

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="as-intro-section">
        <div className="as-container">
          <div className="as-intro-grid">
            <div className="as-intro-content" data-aos="fade-right">
              <span className="as-badge" style={{ color: "#fff" }}>
                BUILT FOR TRADERS
              </span>
              <h2 className="as-section-title">
                The <span className="as-highlight">MetaTrader 5</span> Platform
              </h2>
              <p className="as-text-large">
                MetaTrader 5 is designed for precision, speed, and control —
                on desktop, web, and mobile.
              </p>
              <p className="as-text-muted">
                Built for forex, stocks, commodities, indices, and crypto CFDs,
                MT5 delivers enhanced charting tools, fast execution, and deep
                analytical insight. Trade with multiple timeframes, advanced
                order types, real-time price quotes, and over 80 built-in
                indicators — a powerful toolkit for both short-term traders
                and long-term investors.
              </p>
              <p className="as-text-muted mt-4">
                Suitable for all trading styles and experience levels. New
                traders benefit from an intuitive interface and mobile
                accessibility, while seasoned professionals can leverage
                Expert Advisors and algorithmic trading tools. Whether
                you&apos;re scalping on lower timeframes or running complex
                portfolio strategies, Crib Market delivers MetaTrader 5 as a
                seamless, reliable trading experience across web, mobile, and
                desktop.
              </p>
            </div>
            <div className="as-intro-visual" data-aos="fade-left">
              <div className="as-visual-frame">
                <Image
                  src={asset.metatrader5}
                  alt="MetaTrader 5 on web, mobile, and desktop"
                  className="as-platform-img"
                  width={720}
                  height={560}
                />
                <div className="as-visual-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="as-features-section">
        <div className="as-container">
          <div className="as-section-header text-center" data-aos="fade-up">
            <span className="as-badge" style={{ color: "#fff" }}>
              POWERFUL TOOLS
            </span>
            <h2 className="as-section-title">
              Key Features of <span className="as-highlight">Our Platform</span>
            </h2>
            <div className="as-title-divider" />
          </div>

          <div className="as-feature-cards-grid">
            {features.map((feature, index) => {
              const IconCmp = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="as-feature-glass-card"
                  data-aos="fade-up"
                  data-aos-delay={String(index * 50)}
                >
                  <div className="as-icon-box">
                    <IconCmp size={22} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="as-journey-section">
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
                  <div className="as-dash-title">METATRADER 5</div>
                </div>
                <div className="as-dash-body">
                  <div className="as-chart-mock">
                    <div className="as-bar" style={{ height: "40%" }} />
                    <div className="as-bar" style={{ height: "60%" }} />
                    <div className="as-bar" style={{ height: "45%" }} />
                    <div className="as-bar" style={{ height: "80%" }} />
                    <div className="as-bar" style={{ height: "55%" }} />
                    <div className="as-bar" style={{ height: "90%" }} />
                  </div>
                  <div className="as-glow-node" />
                  <div className="as-trade-info">
                    <div className="as-line-item">
                      <span>EURUSD</span>
                      <span className="text-primary">+1.24%</span>
                    </div>
                    <div className="as-line-item">
                      <span>GOLD</span>
                      <span className="text-primary">+0.85%</span>
                    </div>
                  </div>
                </div>
                <div className="as-dash-overlay" />
              </div>
            </div>

            <div className="as-journey-content" data-aos="fade-left">
              <div className="as-section-header">
                <span className="as-badge">SUCCESS PATH</span>
                <h2 className="as-section-title">
                  Start Trading <span className="as-highlight">in 4 Steps</span>
                </h2>
                <p className="as-section-subtitle text-left">
                  Your journey to the global markets starts here. Minimal
                  effort, maximum performance.
                </p>
              </div>

              <div className="as-vertical-steps">
                <div className="as-v-step">
                  <div className="as-v-marker">
                    <div className="as-v-dot" />
                    <div className="as-v-line" />
                  </div>
                  <div className="as-v-content">
                    <h3>Step 1</h3>
                    <p>Create your Crib Market account</p>
                  </div>
                </div>
                <div className="as-v-step">
                  <div className="as-v-marker">
                    <div className="as-v-dot" />
                    <div className="as-v-line" />
                  </div>
                  <div className="as-v-content">
                    <h3>Step 2</h3>
                    <p>Fund your account and access your trading credentials</p>
                  </div>
                </div>
                <div className="as-v-step">
                  <div className="as-v-marker">
                    <div className="as-v-dot" />
                    <div className="as-v-line" />
                  </div>
                  <div className="as-v-content">
                    <h3>Step 3</h3>
                    <p>Open MetaTrader 5 on web, mobile, or desktop</p>
                  </div>
                </div>
                <div className="as-v-step">
                  <div className="as-v-marker">
                    <div className="as-v-dot" />
                  </div>
                  <div className="as-v-content">
                    <h3>Start trading</h3>
                    <p>No compromises. Just powerful trading on MetaTrader 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="as-platform-cta">
        <div className="as-container">
          <div className="as-cta-box" data-aos="fade-up">
            <div className="as-cta-content">
              <h4>Trade with MetaTrader 5</h4>
              <p>
                No compromises. Just powerful MT5 tools at your fingertips.
              </p>
            </div>
            <div className="as-cta-actions">
              <a href={site.registerUrl} className="as-btn-primary">
                GET STARTED NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqs} />
    </>
  );
}
