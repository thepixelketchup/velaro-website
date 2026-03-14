import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-wide section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="font-display text-2xl font-semibold tracking-tight mb-4">
                            TERRA<span className="font-light">TILE</span>
                        </h3>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                            Crafting premium surfaces for modern architecture since 1998.
                        </p>
                        <div className="flex gap-4">
                            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="label-caps text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="label-caps text-primary-foreground/50 mb-6">Explore</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { label: "Products", path: "/products" },
                                { label: "Projects", path: "/projects" },
                                { label: "Technology", path: "/technology" },
                                { label: "Gallery", path: "/gallery" },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="label-caps text-primary-foreground/50 mb-6">Company</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { label: "About Us", path: "/about" },
                                { label: "Resources", path: "/resources" },
                                { label: "Contact", path: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="label-caps text-primary-foreground/50 mb-6">Contact</h4>
                        <div className="flex flex-col gap-4 text-sm text-primary-foreground/70">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 shrink-0" />
                                <span>42 Design District, Mumbai, Maharashtra 400001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="shrink-0" />
                                <span>+91 22 4567 8900</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="shrink-0" />
                                <span>hello@terratile.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
                    <p>© 2026 TerraTile. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
