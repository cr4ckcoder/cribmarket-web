import Link from "next/link";
import { site } from "@/lib/site";

export function TopHeader() {
  return (
    <div className="cm-utility">
      <div className="cm-utility-inner">
        <div className="cm-utility-left">
          <Link href="/about">About us</Link>
          <span className="cm-utility-sep" />
          <Link href="/products">Markets</Link>
          <span className="cm-utility-sep" />
          <Link href="/accounts">Accounts</Link>
        </div>
        <div className="cm-utility-right">
          <Link href="/contact">Contact us</Link>
          <span className="cm-utility-sep" />
          <a href={site.demoUrl}>Try demo</a>
        </div>
      </div>
    </div>
  );
}
