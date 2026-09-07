import { SITE_CONFIG } from "@/constants/site";

export const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

export const BRAND_INFO = {
    name: SITE_CONFIG.name.toUpperCase(),
    tagline: "Reinventing Indian essence in form.",
    socials: [
        { label: "Instagram", href: "#" },
        { label: "Pinterest", href: "#" },
        { label: "LinkedIn", href: "#" },
    ],
    addresses: [
        {
            city: "Ahmedabad",
            address: "501, A Block, EastFace, Iscon Ambli Road, Ahmedabad, Gujarat - 380058",
        },
        {
            city: "Morbi",
            address: "Plot No. 207/25, D.C, G.I, National Highway, near Boss Ceramics, Rafaleshwar, Morbi, Jambudiya, Gujarat - 363642",
        },
    ],
    address: "501, A Block, EastFace, Iscon Ambli Road, Ahmedabad, Gujarat - 380058",
    phones: [
        "+91 98985 56396",
        "+91 98985 56347",
    ],
    phone: "+91 98985 56396",
    email: SITE_CONFIG.email,
    copyright: `© ${new Date().getFullYear()} ${SITE_CONFIG.name}. All rights reserved.`,
};

export const FOOTER_LINKS = {
    explore: [
        { label: "Products", path: "/products" },
    ],
    company: [
        { label: "About Us", path: "/about" },
        { label: "Contact", path: "/contact" },
    ],
};
