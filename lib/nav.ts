export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  children: NavLink[];
};

export const productLinks: NavLink[] = [
  {
    label: "Forex",
    href: "/forex",
    description: "Trade major, minor and exotic currency pairs",
  },
  {
    label: "Indices",
    href: "/indices",
    description: "Trade global stock market indexes",
  },
  {
    label: "Commodities",
    href: "/commodities",
    description: "Trade energy, metals and other commodities",
  },
  {
    label: "Crypto CFDs",
    href: "/crypto",
    description: "Trade BTC, ETH and more",
  },
  { label: "All Products", href: "/products" },
];

export const accountLinks: NavLink[] = [
  {
    label: "Standard",
    href: "/accounts/standard",
    description: "From $100 with 1:1000 leverage",
  },
  {
    label: "Growth",
    href: "/accounts/growth",
    description: "From $500 with 1:500 leverage",
  },
  {
    label: "Edge",
    href: "/accounts/edge",
    description: "From $10,000 with 1:200 leverage",
  },
  { label: "All Accounts", href: "/accounts" },
];

export const primaryLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: productLinks,
  },
  {
    title: "Accounts",
    links: accountLinks,
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Platforms", href: "/platforms" },
      { label: "Contact Us", href: "/contact" },
      {
        label: "AML Policy",
        href: "/Roventar_Trade_AML_CFT_Policy.pdf",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];
