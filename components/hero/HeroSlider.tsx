"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/lib/site";

type HeroCta = {
  ctaHref?: string;
  ctaLabel?: string;
  /** @deprecated use ctaHref */
  primaryHref?: string;
  /** @deprecated use ctaLabel */
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export type HeroSlide =
  | ({
      type: "image";
      title: React.ReactNode;
      description?: React.ReactNode;
      imageSrc: string;
      imageAlt?: string;
    } & HeroCta)
  | ({
      type: "video";
      title: React.ReactNode;
      description?: React.ReactNode;
      videoSrc: string;
    } & HeroCta);

type Props = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export function HeroSlider({ slides, intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (n: number) => {
      if (!slides.length) return;
      const next = ((n % slides.length) + slides.length) % slides.length;
      setIndex(next);
    },
    [slides.length],
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide hero-slide--${slide.type}${i === index ? " active" : ""}`}
          >
            {slide.type === "video" ? (
              <div className="video-bg-container">
                <video
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={slide.videoSrc} type="video/mp4" />
                </video>
                <div className="video-overlay" />
              </div>
            ) : null}

            <div className="container hero-grid">
              <div className="hero-content">
                <h1>{slide.title}</h1>
                {slide.description ? <p>{slide.description}</p> : null}
                <a
                  href={slide.ctaHref ?? slide.primaryHref ?? site.registerUrl}
                  className="btn btn-primary"
                >
                  {slide.ctaLabel ?? slide.primaryLabel ?? "START LIVE TRADING"}
                </a>
              </div>

              {slide.type === "image" ? (
                <div className="hero-image">
                  <div className="circle-bg" aria-hidden="true" />
                  <div className="img-frame">
                    <div className="img-frame-overlay" />
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt ?? "Crib Market"}
                      width={720}
                      height={720}
                      className="hero-man-img"
                      priority={i === 0}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot${i === index ? " active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
