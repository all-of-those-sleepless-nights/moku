import type { navigationLink } from "./types";

export const navigationGroups = {
  General: "navigation",
  Info: "info",
  Social: "social",
};

export const socialNavigationLinks: navigationLink[] = [
  {
    group: navigationGroups.Social,
    label: "Facebook",
    href: "/facebook",
  },
  {
    group: navigationGroups.Social,
    label: "Instagram",
    href: "/instagram",
  },
  {
    group: navigationGroups.Social,
    label: "X/Twitter",
    href: "/twitter",
  },
];

export const infoNavigationLinks: navigationLink[] = [
  {
    group: navigationGroups.Info,
    label: "News",
    href: "/news",
  },
  {
    group: navigationGroups.Info,
    label: "Contact",
    href: "/contact",
  },
  {
    group: navigationGroups.Info,
    label: "Support",
    href: "/support",
  },
];

export const generalNavigationLinks: navigationLink[] = [
  {
    group: navigationGroups.General,
    label: "Collection",
    href: "/collection",
  },
  {
    group: navigationGroups.General,
    label: "Product",
    href: "/product",
  },
  {
    group: navigationGroups.General,
    label: "About",
    href: "/about",
  },
];