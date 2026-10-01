"use client";

import {
  BarChart3,
  Calculator,
  ChevronDown,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownKey = "partner" | "clients" | "deposit" | "lots";

const partnerOptions: DropdownOption[] = [
  { value: "ib", label: "Introducing Broker" },
  { value: "affiliate", label: "Affiliate Manager" },
];

const clientOptions: DropdownOption[] = [
  { value: "5", label: "1 - 5" },
  { value: "15", label: "6 - 20" },
  { value: "50", label: "21 - 100" },
  { value: "200", label: "100+" },
];

const depositOptions: DropdownOption[] = [
  { value: "1000", label: "$1,000 - $5,000" },
  { value: "5000", label: "$5,000 - $20,000" },
  { value: "20000", label: "$20,000+" },
];

const lotsOptions: DropdownOption[] = [
  { value: "20", label: "0 - 20" },
  { value: "40", label: "21 - 60" },
  { value: "100", label: "61 - 200" },
  { value: "500", label: "200+" },
];

const COMMISSION_RATE = 20;

type CalcDropdownProps = {
  id: string;
  label: React.ReactNode;
  options: DropdownOption[];
  value: string;
  displayLabel: string;
  open: boolean;
  onToggle: () => void;
  onSelect: (value: string, label: string) => void;
};

function CalcDropdown({
  id,
  label,
  options,
  value,
  displayLabel,
  open,
  onToggle,
  onSelect,
}: CalcDropdownProps) {
  return (
    <div className="as-calc-group">
      <label>{label}</label>
      <div className={`as-custom-dropdown${open ? " active" : ""}`} id={id}>
        <button
          type="button"
          className="as-dropdown-selected"
          onClick={onToggle}
          aria-expanded={open}
        >
          <span>{displayLabel}</span>
          <ChevronDown size={16} />
        </button>
        <div className="as-dropdown-list">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`as-dropdown-item${
                value === option.value ? " active" : ""
              }`}
              onClick={() => onSelect(option.value, option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IbCalculator() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [openKey, setOpenKey] = useState<DropdownKey | null>(null);
  const [partner, setPartner] = useState({ value: "0", label: "Select" });
  const [clients, setClients] = useState({ value: "0", label: "Select" });
  const [deposit, setDeposit] = useState({ value: "0", label: "Select" });
  const [lots, setLots] = useState({ value: "0", label: "Select" });
  const [result, setResult] = useState("$0.0");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenKey(null);
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  function runIBMatch() {
    const clientCount = parseInt(clients.value, 10) || 0;
    const lotsTraded = parseInt(lots.value, 10) || 0;
    const total = clientCount * lotsTraded * COMMISSION_RATE;
    const formatted =
      total === 0
        ? "$0.0"
        : new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(total);

    setResult(formatted);
    setPulse(true);
    window.setTimeout(() => setPulse(false), 300);
  }

  return (
    <div className="as-calc-grid" ref={rootRef}>
      <div className="as-calc-content" data-aos="fade-right">
        <span className="as-badge as-highlight">EARNINGS POTENTIAL</span>
        <h2 className="as-section-title">
          Calculate Your <span className="as-highlight">IB Rewards</span>
        </h2>
        <p className="as-section-subtitle" style={{ color: "#fff" }}>
          Use our interactive tool to estimate your potential monthly income as
          a Crib Market Partner. Higher trading volume by your clients unlocks
          higher commission tiers.
        </p>

        <div className="as-calc-features">
          <div className="as-calc-f-item">
            <div className="f-icon-box">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4>Scalable Income</h4>
              <p>Your earnings potential is unlimited as your network grows.</p>
            </div>
          </div>
          <div className="as-calc-f-item">
            <div className="f-icon-box">
              <Zap size={24} />
            </div>
            <div>
              <h4>Instant Credits</h4>
              <p>Commissions are credited automatically as clients trade.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="as-calc-card-wrapper" data-aos="fade-left">
        <div className="as-calc-card">
          <div className="as-calc-header">
            <h3>Earnings Calculator</h3>
          </div>
          <div className="as-calc-body">
            <CalcDropdown
              id="dropdown_partner"
              label={
                <>
                  <UserPlus size={16} /> I am an:
                </>
              }
              options={partnerOptions}
              value={partner.value}
              displayLabel={partner.label}
              open={openKey === "partner"}
              onToggle={() =>
                setOpenKey((current) =>
                  current === "partner" ? null : "partner",
                )
              }
              onSelect={(value, label) => {
                setPartner({ value, label });
                setOpenKey(null);
              }}
            />

            <CalcDropdown
              id="dropdown_clients"
              label={
                <>
                  <Users size={16} /> Monthly number of clients:
                </>
              }
              options={clientOptions}
              value={clients.value}
              displayLabel={clients.label}
              open={openKey === "clients"}
              onToggle={() =>
                setOpenKey((current) =>
                  current === "clients" ? null : "clients",
                )
              }
              onSelect={(value, label) => {
                setClients({ value, label });
                setOpenKey(null);
              }}
            />

            <CalcDropdown
              id="dropdown_deposit"
              label={
                <>
                  <Wallet size={16} /> Average deposit amount:
                </>
              }
              options={depositOptions}
              value={deposit.value}
              displayLabel={deposit.label}
              open={openKey === "deposit"}
              onToggle={() =>
                setOpenKey((current) =>
                  current === "deposit" ? null : "deposit",
                )
              }
              onSelect={(value, label) => {
                setDeposit({ value, label });
                setOpenKey(null);
              }}
            />

            <CalcDropdown
              id="dropdown_lots"
              label={
                <>
                  <BarChart3 size={16} /> Average lots traded (per month):
                </>
              }
              options={lotsOptions}
              value={lots.value}
              displayLabel={lots.label}
              open={openKey === "lots"}
              onToggle={() =>
                setOpenKey((current) => (current === "lots" ? null : "lots"))
              }
              onSelect={(value, label) => {
                setLots({ value, label });
                setOpenKey(null);
              }}
            />

            <button type="button" className="as-calc-btn" onClick={runIBMatch}>
              <span>CALCULATE POTENTIAL EARNINGS</span>
              <Calculator size={18} />
            </button>

            <div id="ib-result-view" className="as-calc-result">
              <div className="as-result-label">TOTAL ESTIMATED EARNINGS</div>
              <div
                className="as-result-value"
                id="final_ib_val"
                style={{
                  transform: pulse ? "scale(1.1)" : "scale(1)",
                  color: pulse ? "var(--primary)" : "#fff",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
              >
                {result}
              </div>
              <div className="as-result-hint">
                *Calculated at $20 commission per lot
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
