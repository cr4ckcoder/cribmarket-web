import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { asset } from "@/lib/site";

export function ForexHours() {
  return (
    <section className="as-hours-section">
      <div className="as-container">
        <div className="as-section-header text-center" data-aos="fade-up">
          <span className="as-badge" style={{ color: "#fff" }}>
            Weekday Global Coverage
          </span>
          <h2 className="as-section-title">
            FX <span className="as-highlight">Market Hours</span>
          </h2>
          <p className="as-section-subtitle" style={{ color: "#ccc" }}>
            Currency markets run around the clock on weekdays, driven by
            overlapping sessions in the world&apos;s primary financial centers.
          </p>
        </div>

        <div className="as-hours-warning" data-aos="fade-up">
          <div className="as-warning-card">
            <div className="as-warning-icon" />
            <div className="as-warning-text">
              <strong>MARKET CONDITIONS:</strong> Depth and spreads can shift
              with trading activity. Spreads may expand when activity is light —
              particularly overnight or in the gaps between sessions.
            </div>
          </div>
        </div>

        <div className="as-hours-grid">
          <div className="as-sessions-info" data-aos="fade-right">
            <div className="as-session-card">
              <div className="as-session-header">
                <Icon name="clock" className="text-primary" size={20} />
                <h3>New York Session</h3>
              </div>
              <div className="as-session-times">
                <div className="as-time-row">
                  <span>Opens</span>
                  <strong>1:00 PM GMT</strong>
                </div>
                <div className="as-time-row">
                  <span>Closes</span>
                  <strong>10:00 PM GMT</strong>
                </div>
              </div>
              <p className="as-session-desc">
                A high-activity window centered on US dollar (USD) liquidity
                peaks.
              </p>
            </div>

            <div className="as-overlap-highlights mt-8">
              <h4 className="as-overlap-title">Key Session Overlaps</h4>
              <div className="as-overlap-card">
                <div className="as-overlap-item">
                  <div className="as-overlap-indicator" />
                  <div className="as-overlap-content">
                    <h5>London & New York Overlap</h5>
                    <p>1:00 PM – 5:00 PM GMT • Highest Depth & Movement</p>
                  </div>
                </div>
                <div className="as-overlap-item">
                  <div className="as-overlap-indicator secondary" />
                  <div className="as-overlap-content">
                    <h5>Tokyo & London Overlap</h5>
                    <p>8:00 AM – 9:00 AM GMT • Steady Activity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="as-weekend-box mt-8">
              <div className="as-weekend-content">
                <div>
                  <h5>Weekend Market Break</h5>
                  <p>
                    Closes Friday 10:00 PM GMT • Reopens Sunday 10:00 PM GMT
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="as-hours-visual" data-aos="fade-left">
            <div className="as-clock-container">
              <div className="as-clock-glow" />
              <Image
                src={asset.geminiAw0syn}
                alt="Global FX Session Clock"
                width={560}
                height={560}
                className="as-clock-img"
              />
              <div className="as-pulse-rings">
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
