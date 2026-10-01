const rollerCards = [
  { symbol: "BTCUSD", price: "68,421.50", change: "+3.25%", direction: "up" as const },
  { symbol: "EURUSD", price: "1.0924", change: "+0.12%", direction: "up" as const },
  { symbol: "XAUUSD", price: "2,354.10", change: "+0.85%", direction: "up" as const },
  { symbol: "ETHUSD", price: "3,512.40", change: "-0.45%", direction: "down" as const },
  { symbol: "GBPUSD", price: "1.2741", change: "+0.08%", direction: "up" as const },
  { symbol: "NAS100", price: "18,210.50", change: "+1.22%", direction: "up" as const },
  { symbol: "USOIL", price: "78.45", change: "-2.10%", direction: "down" as const },
];

function RollerCard({
  symbol,
  price,
  change,
  direction,
}: (typeof rollerCards)[number]) {
  return (
    <div className="roller-card">
      <div className="card-left">
        <span className="card-symbol">{symbol}</span>
        <span className="card-price">{price}</span>
      </div>
      <div className="card-right">
        <span className={`card-change ${direction}`}>{change}</span>
      </div>
    </div>
  );
}

export function OrbitalHub() {
  return (
    <section className="orbital-hub">
      <div className="orbital-container">
        <div className="orbital-deck">
          <span className="orbital-badge">One book, many markets</span>
          <h2 className="orbital-title">
            Listed symbols
            <br />
            <strong>in one terminal</strong>
          </h2>
          <p className="orbital-desc">
            MetaTrader 5, deep books, and accounts sized for how you fund.
            Send the ticket when the level is there.
          </p>

          <div className="roller-chamber">
            <div className="orbital-lens-overlay" />
            <div className="roller-track">
              {rollerCards.map((card) => (
                <RollerCard key={`a-${card.symbol}`} {...card} />
              ))}
              {rollerCards.map((card) => (
                <RollerCard key={`b-${card.symbol}`} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
