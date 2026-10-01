const items = [
  {
    title: "Long or Short",
    desc: "Position for rallies or declines alike — opportunity exists in either direction.",
    path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Capital Efficiency",
    desc: "Command larger exposure from a smaller outlay, stretching every unit of capital further.",
    path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "No Physical Delivery",
    desc: "Trade price action without storage fees, logistics, or taking ownership of the underlying.",
    path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
] as const;

export function CfdExplainer() {
  return (
    <section className="as-cfd-section">
      <div className="as-cfd-blob-1" />
      <div className="as-cfd-blob-2" />

      <div className="as-container relative z-10">
        <div className="as-cfd-grid">
          <div className="as-cfd-text-col" data-aos="fade-right">
            <div className="hero-tag-wrapper mb-6">
              <span className="hero-tag">HOW TRADING WORKS</span>
            </div>
            <h2 className="as-cfd-title">
              Understanding <span className="text-gradient">CFDs</span>
            </h2>
            <p className="as-cfd-description">
              A Contract for Difference (CFD) lets you open positions based on an
              asset&apos;s price movement —{" "}
              <span className="text-white font-semibold">
                without taking ownership of the asset itself
              </span>
              .
            </p>
            <p className="as-cfd-description-sub">
              You decide whether a market is likely to climb or retreat, so you
              can pursue setups in rising and falling conditions alike.
            </p>
          </div>

          <div className="as-cfd-visual-col" data-aos="fade-left">
            <div className="as-cfd-card">
              <div className="as-cfd-card-bg" />
              <ul className="as-cfd-list">
                {items.map((item) => (
                  <li key={item.title} className="as-cfd-item group">
                    <div className="as-cfd-icon-box">
                      <svg
                        className="as-cfd-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={item.path}
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="as-cfd-item-title">{item.title}</h4>
                      <p className="as-cfd-item-desc">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
