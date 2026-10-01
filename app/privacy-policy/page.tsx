import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Protecting your information comes first. See how Crib Market collects, uses, and safeguards personal data.",
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p
            style={{
              color: "#888",
              fontSize: "1.1rem",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Safeguarding your information is central to how we operate. Read how
            Crib Market protects and handles your data.
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
                Data Collection
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                Crib Market gathers personal details required for account checks and
                regulatory compliance (KYC/AML), including name, email, address, and
                government-issued ID. We also record technical information such as IP
                address and how the platform is used.
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
                Use of Information
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                We use your information only to deliver and improve our services,
                process trades, administer your account, and maintain security. We do
                not sell or exchange personal data with third parties for marketing.
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
                  03.
                </span>{" "}
                Security Measures
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                We apply strong safeguards — including SSL encryption and hardened
                firewalls — to reduce the risk of unauthorized access or theft.
                Sensitive financial details are not stored on our public website
                servers.
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
                  04.
                </span>{" "}
                Cookies and Tracking
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                Cookies help us tailor your experience, retain preferences, and
                measure site performance. You may disable cookies in your browser,
                though some platform features may then work less fully.
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
                Your Rights
              </h3>
              <p style={{ color: "#aaa", lineHeight: 1.8, fontSize: "1rem" }}>
                You may ask to review your personal data, request corrections, or
                seek account closure and deletion where the law allows.
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
                  <h4 className="text-white font-bold mb-1">Privacy Enquiries</h4>
                  <p style={{ color: "#666", fontSize: "0.85rem" }}>
                    info@cribmarket.com
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
                  <h4 className="text-white font-bold mb-1">Company Details</h4>
                  <p style={{ color: "#666", fontSize: "0.85rem" }}>
                    Crib Market
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
