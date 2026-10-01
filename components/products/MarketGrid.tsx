import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/site";

const markets = [
  {
    title: "Forex",
    desc: "60+ majors, minors, and exotics — spreads starting from 0.0 pips.",
    href: "/forex",
    label: "EXPLORE FOREX",
    icon: asset.clock,
    delay: "0",
  },
  {
    title: "Indices",
    desc: "Take a view on US500, NASDAQ, FTSE, and other leading benchmarks.",
    href: "/indices",
    label: "EXPLORE INDICES",
    icon: asset.laptop,
    delay: "100",
  },
  {
    title: "Commodities",
    desc: "Position on Gold, Oil, Silver, and softs with high-speed fills.",
    href: "/commodities",
    label: "EXPLORE COMMODITIES",
    icon: asset.commoditiesPic,
    delay: "200",
  },
  {
    title: "Crypto",
    desc: "Round-the-clock access to BTC, ETH, and other leading digital assets.",
    href: "/crypto",
    label: "EXPLORE CRYPTO",
    icon: asset.bitcoin,
    delay: "300",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      className="as-arrow-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export function MarketGrid() {
  return (
    <section className="as-market-section">
      <div className="as-container">
        <div className="as-section-header" data-aos="fade-up">
          <h2 className="as-section-title">
            Discover Our{" "}
            <span style={{ color: "#f40000" }}>Markets</span>
          </h2>
          <div className="as-title-divider" />
        </div>

        <div className="as-market-grid">
          {markets.map((market) => (
            <div
              key={market.href}
              className="as-market-card"
              data-aos="fade-up"
              data-aos-delay={market.delay}
            >
              <div className="as-card-bg" />
              <div className="as-card-content">
                <div className="as-market-icon-wrapper">
                  <Image
                    src={market.icon}
                    className="as-market-icon"
                    alt={market.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="as-market-title">{market.title}</h3>
                <p className="as-market-desc">{market.desc}</p>
                <Link href={market.href} className="as-market-link">
                  {market.label} <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
