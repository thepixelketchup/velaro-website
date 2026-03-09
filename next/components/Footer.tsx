import Link from "next/link";

const footerLinks = {
    Collections: [
        { label: "Noir Marble", href: "/collections" },
        { label: "Terra Porcelain", href: "/collections" },
        { label: "Artisan Cement", href: "/collections" },
        { label: "Natural Stone", href: "/collections" },
    ],
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Our Projects", href: "/projects" },
        { label: "Testimonials", href: "/about" },
        { label: "Careers", href: "/contact" },
    ],
    Support: [
        { label: "Contact Us", href: "/contact" },
        { label: "Request Samples", href: "/contact" },
        { label: "FAQs", href: "/contact" },
        { label: "Warranty", href: "/about" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-heading text-xl font-bold mb-4 block">
                            Velaro <span className="text-gradient-gold">Tiles</span>
                        </Link>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                            Premium surfaces for inspired spaces. Crafting elegance since 1998.
                        </p>
                        <div className="flex gap-4">
                            {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-gold transition-colors font-body"
                                    aria-label={social}
                                >
                                    {social.slice(0, 2)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-5 font-body font-medium">
                                {title}
                            </p>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border mt-12 pt-8 text-center">
                    <p className="text-xs text-muted-foreground font-body">
                        © {new Date().getFullYear()} Velaro Tiles. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
