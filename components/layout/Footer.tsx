import Image from "next/image";
import Link from "next/link";
import { Download, Send, ShieldCheck } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand" data-aos="fade-up">
            <Image
              src={site.logo}
              alt={site.name}
              width={220}
              height={40}
              className="footer-logo"
              unoptimized
              style={{ width: "auto", height: 40 }}
            />
            <p className="footer-tagline">
              {site.name} gives you MetaTrader 5, deep books, and Standard,
              Growth, and Edge accounts in one place. Trade with terms you
              can read before you send the order.
            </p>
            <div className="footer-social-row mt-4">
              <a href={site.social.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon size={18} />
              </a>
              <a href={site.social.telegram} target="_blank" rel="noreferrer">
                <Send size={18} />
              </a>
              <a href={site.social.youtube} target="_blank" rel="noreferrer">
                <YoutubeIcon size={18} />
              </a>
              <a href={site.social.x} target="_blank" rel="noreferrer">
                <TwitterIcon size={18} />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                className="footer-android-download"
                aria-label="Download Crib Market Android app"
              >
                <Download size={16} aria-hidden="true" />
                <span>Download for Android</span>
              </a>
            </div>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <a
                  href={site.amlPolicyPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AML Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
            <h4>Products</h4>
            <ul>
              <li>
                <Link href="/forex">Forex</Link>
              </li>
              <li>
                <Link href="/indices">Indices</Link>
              </li>
              <li>
                <Link href="/commodities">Commodities</Link>
              </li>
              <li>
                <Link href="/crypto">Crypto CFDs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
            <h4>Accounts</h4>
            <ul>
              <li>
                <Link href="/accounts/standard">Standard</Link>
              </li>
              <li>
                <Link href="/accounts/growth">Growth</Link>
              </li>
              <li>
                <Link href="/accounts/edge">Edge</Link>
              </li>
              <li>
                <Link href="/platforms">MetaTrader 5</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col" data-aos="fade-up" data-aos-delay="400">
            <h4>Support</h4>
            <ul>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-disclaimer" data-aos="fade-up">
          <div
            className="risk-title"
            style={{
              color: "var(--primary)",
              fontWeight: 800,
              marginBottom: 15,
              fontSize: "0.9rem",
              letterSpacing: 1,
            }}
          >
            RISK DISCLOSURE
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.8,
              marginBottom: 15,
            }}
          >
            Derivatives investing can result in losses that exceed the capital you
            originally put in. Anyone considering the products described on this
            site should obtain independent financial or professional guidance
            first. Trading securities, forex, equities, commodities, options,
            and futures is not appropriate for every investor and can mean
            losing some or all of your funds. Financial markets offer
            substantial upside and equally substantial downside. You should
            understand those risks and be prepared to accept them before
            participating. Never trade with money you cannot afford to lose.
            Forex trading is restricted or prohibited in certain countries;
            confirm that your jurisdiction permits it before committing funds.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.8,
              marginBottom: 15,
            }}
          >
            Before placing any currency or spot metals trade, you are urged to
            seek separate financial, legal, and tax counsel. Nothing on this
            website constitutes that kind of advice from {site.legalName} or
            from its affiliates, directors, officers, or employees. Services
            from {site.legalName} are not meant for distribution to, or use by,
            anyone in a country or jurisdiction where doing so would breach
            local law or regulation.
          </p>
          <p style={{ fontSize: "0.8rem", lineHeight: 1.8 }}>
            Content on this site is not aimed at residents of any country or
            jurisdiction where offering or using it would violate local law or
            regulation.
          </p>

          <div
            className="footer-registration mt-4"
            style={{
              fontSize: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <p>
              <ShieldCheck
                size={12}
                style={{
                  display: "inline-block",
                  marginRight: 5,
                  verticalAlign: "middle",
                }}
              />{" "}
              <a
                href={site.licensePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-license-link"
              >
                <strong>{site.license}</strong>
              </a>
            </p>
            <p>
              <strong>Address:</strong> {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.country}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "var(--primary)",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              Copyright © {new Date().getFullYear()}. All Rights Reserved By{" "}
              {site.legalName}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
