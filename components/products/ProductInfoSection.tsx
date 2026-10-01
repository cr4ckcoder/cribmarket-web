import Image from "next/image";

type Props = {
  prefix: "indices" | "commodities" | "shares" | "etf" | "crypto";
  title: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
};

export function ProductInfoSection({
  prefix,
  title,
  imageSrc,
  imageAlt,
  children,
}: Props) {
  return (
    <section className={`${prefix}-info-section`}>
      <div className="as-container">
        <div className={`${prefix}-grid`}>
          <div className={`${prefix}-info-col`} data-aos="fade-right">
            <div className={`${prefix}-rates-box`}>{children}</div>
          </div>

          <div className={`${prefix}-visual-col`} data-aos="fade-left">
            <div className={`${prefix}-heading-wrap`}>
              <h2 className={`${prefix}-sec-title`}>{title}</h2>
            </div>
            <div className={`${prefix}-mockup-wrap`}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={720}
                height={520}
                className={`${prefix}-mockup-img`}
              />
              <div className={`${prefix}-glow`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
