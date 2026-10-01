import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  tags?: string[];
  children?: React.ReactNode;
  bannerHeadline: React.ReactNode;
  bannerText: React.ReactNode;
  bannerImage: string;
  bannerImageAlt?: string;
  bannerClassName?: string;
  solidHref?: string;
  solidLabel?: string;
  outlineHref?: string;
  outlineLabel?: string;
};

export function WhyChoose({
  title,
  eyebrow,
  tags,
  children,
  bannerHeadline,
  bannerText,
  bannerImage,
  bannerImageAlt = "Trading Platforms",
  bannerClassName,
  solidHref = site.demoUrl,
  solidLabel = "Start a Demo Account",
  outlineHref = site.registerUrl,
  outlineLabel = "Create an Account",
}: Props) {
  return (
    <section className="as-why-choose">
      <div className="as-container">
        <div className="as-why-header" data-aos="fade-up">
          {eyebrow}
          <h2 className="as-why-title">{title}</h2>
          {tags?.length ? (
            <div className="as-benefit-tags">
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className="as-tag"
                  data-aos="fade-up"
                  data-aos-delay={String(index * 50)}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          {children}
        </div>

        <div
          className={`as-why-banner${bannerClassName ? ` ${bannerClassName}` : ""}`}
          data-aos="zoom-in"
        >
          <div className="as-banner-content">
            <h3 className="as-banner-headline uppercase">{bannerHeadline}</h3>
            <p className="as-banner-text">{bannerText}</p>
            <div className="as-banner-actions">
              <a href={solidHref} className="as-btn-solid">
                {solidLabel}
              </a>
              <a href={outlineHref} className="as-btn-outline">
                {outlineLabel}
              </a>
            </div>
          </div>
          <div className="as-banner-visual">
            <Image
              src={bannerImage}
              alt={bannerImageAlt}
              width={640}
              height={480}
              className="as-banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
