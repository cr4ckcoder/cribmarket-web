import { site } from "@/lib/site";

type Props = {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  badge = "Take the Next Step",
  title,
  description = "Traders come to Crib Market for published costs, quick fills, and a desk that answers.",
  primaryHref = site.registerUrl,
  primaryLabel = "Open a Live Account",
  secondaryHref = site.demoUrl,
  secondaryLabel = "Try a Demo",
}: Props) {
  return (
    <div className="cta-wrapper">
      <div className="cta-mesh" />
      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div className="container">
        <div className="cta-card">
          <div className="cta-badge">{badge}</div>
          <h2 className="cta-title">{title}</h2>
          {description ? <p className="cta-desc">{description}</p> : null}
          <div className="cta-buttons">
            <a href={primaryHref} className="cta-btn cta-btn-primary">
              {primaryLabel}
            </a>
            <a href={secondaryHref} className="cta-btn cta-btn-outline">
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
