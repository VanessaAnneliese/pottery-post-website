"use client";

import { useEffect, useState } from "react";

export default function ScrollJump() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    function check() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setAtBottom(scrolled >= total - 40);
    }
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  function handleClick() {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label={atBottom ? "Back to top" : "Jump to bottom"}
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all"
      style={{ background: "var(--c-tan)", color: "var(--c-primary)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transform: atBottom ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}
