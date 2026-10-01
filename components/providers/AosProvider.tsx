"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
}
