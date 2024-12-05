import Image from "next/image";
import Link from "next/link";
import { HtmlHTMLAttributes } from "react";

import polkadotLogoSvg from "/public/polkadot-logo.svg";
import { cn } from "src/utils/cn";

export function PolkadotLogo({
  className,
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <nav className={cn("flex justify-center", className)}>
      <Link
        href="/"
        className={cn("select-none outline-none", className)}
        as="image"
      >
        <Image src={polkadotLogoSvg} alt="Polkadot Logo" height={35} priority />
      </Link>
    </nav>
  );
}
