"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bitcoin,
  ChevronDown,
  Coins,
  Crown,
  Gem,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { TopHeader } from "@/components/layout/TopHeader";
import { accountLinks, productLinks } from "@/lib/nav";
import { site } from "@/lib/site";

const marketItems = productLinks
  .filter((link) => link.href !== "/products")
  .map((link, i) => ({
    ...link,
    Icon: [Coins, BarChart3, Gem, Bitcoin][i] ?? Coins,
  }));

const accountItems = accountLinks
  .filter((link) => link.href !== "/accounts")
  .map((link, i) => ({
    ...link,
    Icon: [Star, Crown, Zap][i] ?? Star,
  }));

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      <div className={`cm-chrome${stuck ? " is-stuck" : ""}`}>
        <TopHeader />

        <div className="cm-island-wrap">
          <header className="cm-island">
            <Link href="/" className="cm-logo" onClick={close}>
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={220}
                height={40}
                priority
                unoptimized
                style={{ width: "auto", height: 36 }}
              />
            </Link>

            <nav className="cm-nav" aria-label="Primary">
              <div className="cm-nav-item">
                <button type="button" className="cm-nav-trigger">
                  Markets
                </button>
                <div className="cm-mega">
                  <div className="cm-mega-kicker">What to trade</div>
                  <div className="cm-mega-grid">
                    {marketItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="cm-mega-link"
                      >
                        <span className="cm-mega-icon">
                          <item.Icon size={18} />
                        </span>
                        <span>
                          <strong>{item.label}</strong>
                          {item.description ? <em>{item.description}</em> : null}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cm-nav-item">
                <button type="button" className="cm-nav-trigger">
                  Accounts
                </button>
                <div className="cm-mega">
                  <div className="cm-mega-kicker">Account types</div>
                  <div className="cm-mega-grid">
                    {accountItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="cm-mega-link"
                      >
                        <span className="cm-mega-icon">
                          <item.Icon size={18} />
                        </span>
                        <span>
                          <strong>{item.label}</strong>
                          {item.description ? <em>{item.description}</em> : null}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/platforms" className="cm-nav-link">
                Platforms
              </Link>
              <Link href="/about" className="cm-nav-link">
                About
              </Link>
              <Link href="/contact" className="cm-nav-link">
                Contact
              </Link>
            </nav>

            <div className="cm-actions">
              <a href={site.loginUrl} className="cm-btn cm-btn-ghost">
                Log in
              </a>
              <a href={site.registerUrl} className="cm-btn cm-btn-primary">
                Open account
              </a>
              <button
                className={`cm-burger${open ? " is-open" : ""}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                type="button"
                onClick={() => setOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </header>
        </div>
      </div>

      <div className={`cm-drawer${open ? " is-open" : ""}`}>
        <div className="cm-drawer-backdrop" onClick={close} />
        <div className="cm-drawer-panel">
          <div className="cm-drawer-head">
            <Image
              src={site.logo}
              alt={site.name}
              width={180}
              height={32}
              unoptimized
              style={{ width: "auto", height: 32 }}
            />
          </div>

          <nav className="cm-drawer-nav">
            <Link href="/" onClick={close}>
              Home
            </Link>

            <button
              type="button"
              className="cm-drawer-group"
              onClick={() =>
                setOpenGroup((g) => (g === "markets" ? null : "markets"))
              }
            >
              Markets
              <ChevronDown
                size={16}
                className={openGroup === "markets" ? "is-rotated" : ""}
              />
            </button>
            {openGroup === "markets" ? (
              <div className="cm-drawer-sub">
                {productLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={close}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <button
              type="button"
              className="cm-drawer-group"
              onClick={() =>
                setOpenGroup((g) => (g === "accounts" ? null : "accounts"))
              }
            >
              Accounts
              <ChevronDown
                size={16}
                className={openGroup === "accounts" ? "is-rotated" : ""}
              />
            </button>
            {openGroup === "accounts" ? (
              <div className="cm-drawer-sub">
                {accountLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={close}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <Link href="/platforms" onClick={close}>
              Platforms
            </Link>
            <Link href="/about" onClick={close}>
              About
            </Link>
            <Link href="/contact" onClick={close}>
              Contact
            </Link>
          </nav>

          <div className="cm-drawer-actions">
            <a href={site.loginUrl} className="cm-btn cm-btn-ghost" onClick={close}>
              Log in
            </a>
            <a
              href={site.registerUrl}
              className="cm-btn cm-btn-primary"
              onClick={close}
            >
              Open account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
