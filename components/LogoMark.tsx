"use client";

import { useRef, useLayoutEffect } from "react";

export default function LogoMark({
  logoColor,
  tagColor,
  logoClassName,
  logoLetterSpacing,
  className = "",
}: {
  logoColor: string;
  tagColor: string;
  logoClassName: string;
  logoLetterSpacing: string;
  className?: string;
}) {
  const logoRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const adjust = () => {
      const logo = logoRef.current;
      const tag = tagRef.current;
      if (!logo || !tag) return;

      tag.style.letterSpacing = "0px";
      const extra = logo.getBoundingClientRect().width - tag.getBoundingClientRect().width;
      const chars = (tag.textContent ?? "").length;
      tag.style.letterSpacing = `${Math.max(0, extra / chars)}px`;
    };

    adjust();
    window.addEventListener("resize", adjust);
    return () => window.removeEventListener("resize", adjust);
  }, []);

  return (
    <div className={`flex flex-col leading-tight ${className}`}>
      <span
        ref={logoRef}
        className={`${logoClassName} font-bold uppercase whitespace-nowrap`}
        style={{ fontFamily: "Georgia, serif", letterSpacing: logoLetterSpacing, color: logoColor }}
      >
        Pottery Post
      </span>
      <span
        ref={tagRef}
        className="uppercase tracking-[0.4em]"
        style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8rem", color: tagColor }}
      >
        For Makers &amp; Admirers
      </span>
    </div>
  );
}
