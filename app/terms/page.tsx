import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Core trading terms and legal agreements that apply when you use Crib Market services.",
};

export default function TermsPage() {
  return (
    <div
      className="legal-page-wrapper"
      style={{
        background: "#000",
        paddingTop: 150,
        paddingBottom: 100,
      }}
    >
      <div className="container">
        <div className="legal-header text-center mb-16" data-aos="fade-up">
          <h1
            className="text-white font-bold"
            style={{ fontSize: "3.5rem", marginBottom: 20 }}
          >
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p
            style={{
              color: "#888",
              fontSize: "1.1rem",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            The core trading terms and legal agreements that apply when you use
            Crib Market services.
          </p>
        </div>

        <div
          className="legal-content-grid"
          style={{ maxWidth: 900, margin: "0 auto" }}
        >
          <div
            className="legal-card"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 30,
              padding: 60,
              backdropFilter: "blur(20px)",
            }}
            data-aos="fade-up"
          >
            <div className="legal-section mb-12">
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontSize: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--primary)",
                    marginRight: 15,
                    fontFamily: "monospace",
                  }}
                >
                  01.
                </span>{" "}
                Introduction
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                These Terms and Conditions set out the rules for using the Crib Market
                website and trading platform. Accessing or using our services means you
                accept these terms. Review them thoroughly before you open an account or
                place any trades.
              </p>
            </div>

            <div className="legal-section mb-12">
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontSize: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--primary)",
                    marginRight: 15,
                    fontFamily: "monospace",
                  }}
                >
                  02.
                </span>{" "}
                Eligibility
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                To use our services you must be 18 or older and legally able to form
                binding contracts. You must also confirm that your activity on the
                platform follows the laws and regulations that apply where you live.
              </p>
            </div>

            <div className="legal-section mb-12">
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontSize: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                  color: "#ff5f56",
                }}
              >
                <span
                  style={{
                    color: "#ff5f56",
                    marginRight: 15,
                    fontFamily: "monospace",
                  }}
                >
                  03.
                </span>{" "}
                Risk Warning
              </h3>
              <div
                style={{
                  background: "rgba(255, 95, 86, 0.05)",
                  border: "1px solid rgba(255, 95, 86, 0.2)",
                  padding: 25,
                  borderRadius: 15,
                  color: "#cc7a7a",
                }}
              >
                <p style={{ lineHeight: 1.8, fontSize: "0.95rem" }}>
                  Dealing in financial instruments such as Forex and CFDs carries
                  substantial risk and may lead to the loss of your entire
                  capital. Only risk funds you can afford to lose. Crib Market
                  does not offer financial or legal advice.
                </p>
              </div>
            </div>

            <div className="legal-section mb-12">
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontSize: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--primary)",
                    marginRight: 15,
                    fontFamily: "monospace",
                  }}
                >
                  04.
                </span>{" "}
                Account Security
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                You must keep your login credentials confidential. All activity under
                your account remains your responsibility. Contact Crib Market at once
                if you believe someone has accessed your account without permission.
              </p>
            </div>

            <div className="legal-section mb-12">
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontSize: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--primary)",
                    marginRight: 15,
                    fontFamily: "monospace",
                  }}
                >
                  05.
                </span>{" "}
                Prohibited Trading
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                Crib Market forbids market manipulation, latency-based arbitrage,
                and any unauthorized automated tools that interfere with fair and
                orderly trading on the platform.
              </p>
            </div>

            <div className="legal-section mb-12">
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontSize: "1.8rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--primary)",
                    marginRight: 15,
                    fontFamily: "monospace",
                  }}
                >
                  06.
                </span>{" "}
                Governing Law
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                These Terms and Conditions are interpreted under the laws of Saint
                Lucia. Disputes fall under the exclusive jurisdiction of the courts
                of Saint Lucia.
              </p>
            </div>

            <div
              className="legal-footer mt-16 p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: 20,
                border: "1px dashed rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 30,
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 className="text-white font-bold mb-1">Company Details</h4>
                  <p style={{ color: "#666", fontSize: "0.85rem" }}>
                    Crib Market | Licensed from USA
                  </p>
                </div>
                <div
                  style={{
                    width: 1,
                    height: 40,
                    background: "rgba(255,255,255,0.1)",
                  }}
                />
                <div>
                  <h4 className="text-white font-bold mb-1">Support</h4>
                  <p style={{ color: "#666", fontSize: "0.85rem" }}>
                    {site.supportEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
