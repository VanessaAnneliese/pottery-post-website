/*
  ── Site identity ──
  The single place that defines this site's name, tagline, and navigation.
  To spin up a new "Post" site from this template, change the values here
  (and the colour tokens in app/globals.css). Nothing else needs editing.
*/

export type NavItem = { href: string; label: string };

export const siteConfig = {
  /** Brand name shown in the logo mark (header + footer). */
  brandName: "Pottery Post",

  /** Tagline shown beneath the brand name. */
  tagline: "For Makers & Admirers",

  /** Credit line in the footer. */
  designCredit: "Anneliese Designs",

  /** Primary navigation links, shared by the header and footer. */
  nav: [
    { href: "/directory", label: "Pottery Directory" },
    { href: "/gallery", label: "Pottery Gallery" },
    { href: "/postmarks", label: "Pottery Postmarks" },
  ] as NavItem[],
};
