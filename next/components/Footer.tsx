import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS, BRAND_INFO } from "@/constants/navigation";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-wide section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="font-display text-2xl font-semibold tracking-tight mb-4">
                            {BRAND_INFO.name.slice(0, 5)}<span className="font-light">{BRAND_INFO.name.slice(5)}</span>
                        </h3>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                            {BRAND_INFO.tagline}
                        </p>
                        <div className="flex gap-4">
                            {BRAND_INFO.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="label-caps text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="label-caps text-primary-foreground/50 mb-6">Explore</h4>
                        <div className="flex flex-col gap-3">
                            {FOOTER_LINKS.explore.map((link) => (
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
                            {FOOTER_LINKS.company.map((link) => (
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
                                <span>{BRAND_INFO.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="shrink-0" />
                                <span>{BRAND_INFO.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="shrink-0" />
                                <span>{BRAND_INFO.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
                    <p>{BRAND_INFO.copyright}</p>
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
