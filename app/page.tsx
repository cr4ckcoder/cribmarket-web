import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Activity,
  Award,
  Bitcoin,
  Briefcase,
  CalendarDays,
  CheckCircle,
  Coins,
  Crown,
  FileCheck,
  Gem,
  Headphones,
  Lock,
  Newspaper,
  Percent,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  UserPlus,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import { HeroSlider, type HeroSlide } from "@/components/hero/HeroSlider";
import { StatsBar } from "@/components/sections/StatsBar";
import { asset, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crib Market | Multi-Asset CFD Trading",
  description:
    "Trade forex, indices, commodities, and crypto CFDs with Crib Market. MetaTrader 5, Standard, Growth, and Edge accounts.",
};

const homeSlides: HeroSlide[] = [
  {
    type: "image",
    title: (
      <>
        A trading desk built
        <br />
        for <strong>active markets</strong>
      </>
    ),
    description: (
      <>
        Place orders into deep books with fast fills
        <br />
        and tools designed for everyday decision-making.
      </>
    ),
    imageSrc: asset.heroMan,
    imageAlt: "Crib Market trading desk for active markets",
    primaryHref: site.registerUrl,
    primaryLabel: "Create Live Account",
  },
  {
    type: "video",
    title: (
      <>
        Three accounts.
        <br />
        <span className="text-primary">One clear path in.</span>
      </>
    ),
    description:
      "Standard, Growth, or Edge. Swap-free terms that follow how much you fund and how you size risk.",
    videoSrc: asset.heroVideo,
    primaryHref: "/accounts",
    primaryLabel: "Browse Accounts",
  },
  {
    type: "image",
    title: (
      <>
        900+ markets
        <br />
        on <strong>MetaTrader 5</strong>
      </>
    ),
    description: (
      <>
        Forex, indices, commodities, and crypto CFDs
        <br />
        with published spreads, around the clock.
      </>
    ),
    imageSrc: asset.heroTradingMobile,
    imageAlt: "900+ markets on MetaTrader 5 with Crib Market",
    primaryHref: site.registerUrl,
    primaryLabel: "View Markets",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={homeSlides} />
      <StatsBar />

      <section className="why-choose-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why traders choose Crib Market</h2>
            <p>Speed, published costs, and a desk that answers when markets move.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>Fast order handling</h3>
              <p>
                Servers sit close to major venues so tickets reach the book
                in milliseconds, not seconds.
              </p>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon">
                <Percent />
              </div>
              <h3>Published pricing</h3>
              <p>
                Swap-free overnight terms on Standard, Growth, and Edge, with
                costs you can read before you click.
              </p>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon">
                <ShieldCheck />
              </div>
              <h3>Licensed and ring-fenced</h3>
              <p>
                Client money sits apart from company funds. Crib Market is
                licensed from the USA.
              </p>
            </div>

            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon">
                <Headphones />
              </div>
              <h3>Help when you need it</h3>
              <p>
                Specialists stay on call around the clock for funding,
                platforms, and account questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-section relative">
        <div className="container">
          <div className="premium-platform-grid premium-platform-grid--solo">
            <div className="innovation-content" data-aos="fade-up">
              <div className="inline-block uppercase font-bold text-[#f40000] text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest border border-[#f40000]/30 bg-[#f40000]/10">
                MetaTrader 5
              </div>
              <h2
                className="gradient-text mb-6"
                style={{ fontSize: "3.5rem", lineHeight: 1.1 }}
              >
                Charts, news, and fills
                <br />
                <span className="text-primary">in one terminal</span>
              </h2>

              <p
                className="innovation-desc"
                style={{ maxWidth: 720, marginBottom: 40 }}
              >
                Crib Market runs on MetaTrader 5 so live prices, order tickets,
                and analysis sit together. You see the tape, you size the
                risk, you send the order.
              </p>

              <div className="premium-feature-grid">
                <div
                  className="premium-feature-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="card-icon">
                    <Newspaper />
                  </div>
                  <h4>Market news in the ticket</h4>
                  <p>Headlines and sentiment flow into the same workspace as your charts.</p>
                </div>
                <div
                  className="premium-feature-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="card-icon">
                    <TrendingUp />
                  </div>
                  <h4>Daily briefings</h4>
                  <p>
                    Concise market notes land where you already work, not in a
                    separate inbox.
                  </p>
                </div>
                <div
                  className="premium-feature-card"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="card-icon">
                    <Activity />
                  </div>
                  <h4>Millisecond quotes</h4>
                  <p>
                    Follow books and last prices with feeds timed for active
                    trading, not delayed screens.
                  </p>
                </div>
                <div
                  className="premium-feature-card"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="card-icon">
                    <Wrench />
                  </div>
                  <h4>Charting tools</h4>
                  <p>
                    Indicators and drawing tools on MetaTrader 5 so you can
                    mark levels and test ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="account-types-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-tag">Trading Accounts</span>
            <h2 className="section-title">
              Accounts that match <br />{" "}
              <span>how you fund</span>
            </h2>
            <p className="section-desc">
              Standard, Growth, or Edge. Swap-free terms set by deposit
              size and leverage, not by hidden add-ons.
            </p>
          </div>

          <div className="account-types-grid">
            <div className="account-card" data-aos="fade-up" data-aos-delay="0">
              <div className="account-icon">
                <Star />
              </div>
              <h3>Standard</h3>
              <div className="account-price">
                $100<span>Min Deposit</span>
              </div>
              <ul className="account-features">
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Min Withdrawal: $100
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Leverage: 1:200
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Swap: Free
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Platform: MetaTrader 5
                </li>
              </ul>
              <a href="/accounts/standard" className="btn btn-outline">
                See Details
              </a>
            </div>

            <div className="account-card featured" data-aos="fade-up" data-aos-delay="100">
              <div className="account-icon">
                <Crown />
              </div>
              <h3>Growth</h3>
              <div className="account-price">
                $500<span>Min Deposit</span>
              </div>
              <ul className="account-features">
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Min Withdrawal: $100
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Leverage: 1:300
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Swap: Free
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Platform: MetaTrader 5
                </li>
              </ul>
              <a href="/accounts/growth" className="btn btn-primary">
                See Details
              </a>
            </div>

            <div className="account-card" data-aos="fade-up" data-aos-delay="200">
              <div className="account-icon">
                <Zap />
              </div>
              <h3>Edge</h3>
              <div className="account-price">
                $10,000<span>Min Deposit</span>
              </div>
              <ul className="account-features">
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Min Withdrawal: $100
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Leverage: 1:100
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Swap: Free
                </li>
                <li>
                  <CheckCircle style={{ color: "#f40000", marginRight: 20 }} />{" "}
                  Platform: MetaTrader 5
                </li>
              </ul>
              <a href="/accounts/edge" className="btn btn-outline">
                See Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="orbital-hub">
        <div className="orbital-container">
          <div className="orbital-deck">
            <span className="orbital-badge">Markets in one book</span>
            <h2 className="orbital-title">
              One login.
              <br />
              <strong>Four asset classes.</strong>
            </h2>
            <p className="orbital-desc">
              Currencies, indices, metals, energy, and crypto CFDs sit in
              MetaTrader 5 so you can move between them without changing desks.
            </p>

            <div className="roller-chamber">
              <div className="orbital-lens-overlay" />
              <div className="roller-track">
                {[
                  { symbol: "BTCUSD", price: "68,421.50", change: "+3.25%", up: true },
                  { symbol: "EURUSD", price: "1.0924", change: "+0.12%", up: true },
                  { symbol: "XAUUSD", price: "2,354.10", change: "+0.85%", up: true },
                  { symbol: "ETHUSD", price: "3,512.40", change: "-0.45%", up: false },
                  { symbol: "GBPUSD", price: "1.2741", change: "+0.08%", up: true },
                  { symbol: "NAS100", price: "18,210.50", change: "+1.22%", up: true },
                  { symbol: "USOIL", price: "78.45", change: "-2.10%", up: false },
                ]
                  .concat([
                    { symbol: "BTCUSD", price: "68,421.50", change: "+3.25%", up: true },
                    { symbol: "EURUSD", price: "1.0924", change: "+0.12%", up: true },
                    { symbol: "XAUUSD", price: "2,354.10", change: "+0.85%", up: true },
                    { symbol: "ETHUSD", price: "3,512.40", change: "-0.45%", up: false },
                    { symbol: "GBPUSD", price: "1.2741", change: "+0.08%", up: true },
                    { symbol: "NAS100", price: "18,210.50", change: "+1.22%", up: true },
                    { symbol: "USOIL", price: "78.45", change: "-2.10%", up: false },
                  ])
                  .map((card, i) => (
                    <div className="roller-card" key={`${card.symbol}-${i}`}>
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

      <section className="live-trading-section">
        <div className="container">
          <div className="live-header" data-aos="fade-up">
            <h2 className="text-center">
              Watch the tape{" "}
              <strong>as it prints</strong>
            </h2>
            <p className="text-center section-sub">
              More than 900 FX, index, commodity, and crypto CFD symbols,
              available when those books are open.
            </p>
          </div>

          <div className="live-trading-grid">
            <div
              className="live-content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="display-title">
                Live <span>markets</span>
              </h2>
              <p className="lead-text">
                Follow last prices and spreads on the symbols you actually
                trade, updated as the book moves.
              </p>
              <p className="detail-text">
                Combine candles, indicators, and news in MetaTrader 5 before
                you send the ticket.
              </p>

              <ul className="live-features">
                <li>
                  <CheckCircle className="text-primary" /> Stay with the last
                  print on the pairs and indices you watch.
                </li>
                <li>
                  <CheckCircle className="text-primary" /> React when a level
                  breaks, not after the move is gone.
                </li>
                <li>
                  <CheckCircle className="text-primary" /> Use MT5 charting
                  inside the same login as your Crib Market account.
                </li>
              </ul>

              <Link href="/products" className="btn btn-dark btn-theme-primary">
                SEE INSTRUMENTS
              </Link>
            </div>

            <div
              className="live-card-container"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="pricing-card">
                <div className="pricing-header">
                  <span>LIVE MARKET QUOTES</span>
                </div>
                <div className="pricing-body">
                  <div className="pricing-row header-row">
                    <span className="col-market">Markets</span>
                    <span className="col-sell">Sell</span>
                    <span className="col-buy">Buy</span>
                  </div>
                  <div className="pricing-row">
                    <span className="col-market">
                      <strong>EURUSD</strong>
                    </span>
                    <span className="col-sell text-down">1.1814</span>
                    <span className="col-buy text-down">1.18151</span>
                  </div>
                  <div className="pricing-row">
                    <span className="col-market">
                      <strong>GBPUSD</strong>
                    </span>
                    <span className="col-sell text-up">1.36084</span>
                    <span className="col-buy text-up">1.36105</span>
                  </div>
                  <div className="pricing-row">
                    <span className="col-market">
                      <strong>NAS100</strong>
                    </span>
                    <span className="col-sell text-down">25028.61</span>
                    <span className="col-buy text-down">25030.36</span>
                  </div>
                  <div className="pricing-row">
                    <span className="col-market">
                      <strong>XAUUSD</strong>
                    </span>
                    <span className="col-sell text-up">4966.25</span>
                    <span className="col-buy text-up">4966.49</span>
                  </div>
                </div>
              </div>
              <p className="pricing-disclaimer">
                Quotes displayed are indicative and must not be treated as
                precise pricing for live market orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cfd-products-v2">
        <div className="container">
          <div className="cfd-header-v2" data-aos="fade-up">
            <span className="cfd-super-badge">CFD Markets</span>
            <h2 className="cfd-main-title">Where you can take a view</h2>
            <p className="cfd-main-subtitle">
              Currencies, indices, metals, energy, and crypto CFDs from a
              single MetaTrader 5 login.
            </p>
          </div>

          <div className="cfd-grid-v2">
            <div className="cfd-card-v2" data-aos="fade-up" data-aos-delay="0">
              <span className="cfd-tag-v2">60+ FX Pairs</span>
              <div className="cfd-icon-float">
                <Coins />
              </div>
              <h3 className="cfd-card-title">Forex</h3>
              <p className="cfd-card-desc">
                Major, minor, and exotic FX pairs with tight published spreads
                and active books.
              </p>
              <div className="cfd-card-img-wrap">
                <Image
                  src={asset.geminiX5dvln}
                  alt="Forex CFD trading"
                  width={480}
                  height={320}
                />
              </div>
            </div>

            <div className="cfd-card-v2" data-aos="fade-up" data-aos-delay="100">
              <span className="cfd-tag-v2">Global</span>
              <div className="cfd-icon-float">
                <TrendingUp />
              </div>
              <h3 className="cfd-card-title">Indices</h3>
              <p className="cfd-card-desc">
                Long or short on benchmarks such as the S&P 500, DAX, and
                FTSE without buying the cash basket.
              </p>
              <div className="cfd-card-img-wrap">
                <Image
                  src={asset.indicesAi}
                  alt="Equity index CFDs"
                  width={480}
                  height={320}
                />
              </div>
            </div>

            <div className="cfd-card-v2" data-aos="fade-up" data-aos-delay="200">
              <span className="cfd-tag-v2">Accounts</span>
              <div className="cfd-icon-float">
                <Briefcase />
              </div>
              <h3 className="cfd-card-title">Account Options</h3>
              <p className="cfd-card-desc">
                Standard, Growth, or Edge. Swap-free overnight terms, three
                deposit starting points.
              </p>
              <div className="cfd-card-img-wrap">
                <Image
                  src={asset.commoditiesHero}
                  alt="Trading account options"
                  width={480}
                  height={320}
                />
              </div>
            </div>

            <div className="cfd-card-v2" data-aos="fade-up" data-aos-delay="300">
              <span className="cfd-tag-v2">High Momentum</span>
              <div className="cfd-icon-float">
                <Bitcoin />
              </div>
              <h3 className="cfd-card-title">Crypto CFDs</h3>
              <p className="cfd-card-desc">
                Take a view on BTC, ETH, and other listed coins as CFDs, with
                no wallet and no coin delivery.
              </p>
              <div className="cfd-card-img-wrap">
                <Image
                  src={asset.indicesHero}
                  alt="Crypto CFD trading"
                  width={480}
                  height={320}
                />
              </div>
            </div>

            <div className="cfd-card-v2" data-aos="fade-up" data-aos-delay="400">
              <span className="cfd-tag-v2">Hard Assets</span>
              <div className="cfd-icon-float">
                <Gem />
              </div>
              <h3 className="cfd-card-title">Commodities</h3>
              <p className="cfd-card-desc">
                Gold, silver, oil, and other listed commodities for hedging or
                a directional idea.
              </p>
              <div className="cfd-card-img-wrap">
                <Image
                  src={asset.commoditiesAi}
                  alt="Commodity CFDs"
                  width={480}
                  height={320}
                />
              </div>
            </div>

            <div className="cfd-card-v2" data-aos="fade-up" data-aos-delay="500">
              <span className="cfd-tag-v2">Forward Looking</span>
              <div className="cfd-icon-float">
                <CalendarDays />
              </div>
              <h3 className="cfd-card-title">Futures</h3>
              <p className="cfd-card-desc">
                Leveraged CFD futures on global benchmarks when you want a
                dated view of the tape.
              </p>
              <div className="cfd-card-img-wrap">
                <Image
                  src={asset.insight4}
                  alt="Futures CFD markets"
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trading-steps-v2">
        <div className="container">
          <div className="steps-v2-header" data-aos="fade-up">
            <span className="cfd-super-badge">Easy Onboarding</span>
            <h2>
              Three steps <span>to a live ticket</span>
            </h2>
          </div>

          <div className="journey-path">
            <div className="step-card-v2" data-aos="fade-up" data-aos-delay="0">
              <div className="step-badge-v2">01</div>
              <div className="step-icon-v2">
                <UserPlus />
              </div>
              <h3>Open the account</h3>
              <p>
                Submit email, ID, proof of address, and bank details. Most
                applications start in a few minutes.
              </p>
            </div>

            <div
              className="step-card-v2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="step-badge-v2">02</div>
              <div className="step-icon-v2">
                <Wallet />
              </div>
              <h3>Fund the wallet</h3>
              <p>
                Cards, e-wallets, and local rails. Credits typically post
                quickly once the payment clears.
              </p>
            </div>

            <div
              className="step-card-v2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="step-badge-v2">03</div>
              <div className="step-icon-v2">
                <TrendingUp />
              </div>
              <h3>Log in to MetaTrader 5</h3>
              <p>
                Use the credentials we send, pull up a chart, and place the
                first live order when you are ready.
              </p>
            </div>
          </div>

          <div className="journey-cta" data-aos="zoom-in">
            <h4>Ready to send a live order?</h4>
            <a
              href={site.registerUrl}
              className="btn btn-dark btn-theme-primary"
            >
              GO LIVE NOW
            </a>
          </div>
        </div>
      </section>

      <section className="trust-foundation-v2">
        <div className="container">
          <div className="foundation-grid">
            <div className="foundation-visual" data-aos="fade-right">
              <div className="shield-orbit">
                <div className="main-shield-container">
                  <div className="phone-mockup-wrapper">
                    <Image
                      src={asset.trustMobile}
                      alt="Secure trading on mobile"
                      width={420}
                      height={840}
                    />
                  </div>
                </div>

                <div className="trust-metric-tag tag-verified">
                  <ShieldCheck />
                  <span>LICENSED & SECURE</span>
                </div>
                <div className="trust-metric-tag tag-secure">
                  <Lock />
                  <span>AES-256 ENCRYPTION</span>
                </div>
              </div>
            </div>

            <div className="foundation-content" data-aos="fade-left">
              <span className="foundation-badge">Worldwide Protection Benchmark</span>
              <h2 className="foundation-title">
                Safeguards<span>built into the account.</span>
              </h2>
              <p className="foundation-desc">
                Crib Market is licensed from the USA. Encryption, segregated
                balances, and plain account terms sit behind every login.
              </p>

              <div className="pillar-grid">
                <div className="pillar-card">
                  <Shield />
                  <h4>Licensed Broker</h4>
                  <p>
                    <a
                      href={site.licensePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Licensed from USA
                    </a>
                  </p>
                </div>
                <div className="pillar-card">
                  <Lock />
                  <h4>Client Fund Safety</h4>
                  <p>Client balances held in segregated accounts</p>
                </div>
                <div className="pillar-card">
                  <FileCheck />
                  <h4>Full Transparency</h4>
                  <p>Plain, readable terms</p>
                </div>
                <div className="pillar-card">
                  <Award />
                  <h4>Recognized Excellence</h4>
                  <p>Acknowledged across the industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
