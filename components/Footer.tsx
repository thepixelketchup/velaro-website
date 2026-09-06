import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, BRAND_INFO } from "@/constants/navigation";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
    Instagram: <FaInstagram size={18} />,
    Pinterest: <FaPinterestP size={18} />,
    LinkedIn: <FaLinkedinIn size={18} />,
};

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-wide section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 -ml-3 md:-ml-3.5">
                            <Image
                                src="/Logo_white.svg"
                                alt="Velaro"
                                width={180}
                                height={48}
                                unoptimized
                                className="h-11 md:h-12 w-auto"
                            />
                        </div>
                        <p className="text-primary-foreground/75 text-sm leading-relaxed mb-6">
                            {BRAND_INFO.tagline}
                        </p>
                        <div className="flex gap-3">
                            {BRAND_INFO.socials.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/75 hover:text-primary-foreground hover:border-primary-foreground/60 transition-colors"
                                >
                                    {SOCIAL_ICONS[social.label]}
                                </Link>
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
                                    className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
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
                                    className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="label-caps text-primary-foreground/50 mb-6">Contact</h4>
                        <div className="flex flex-col gap-4 text-sm text-primary-foreground/75">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-foreground/50" />
                                <span>{BRAND_INFO.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="shrink-0 text-primary-foreground/50" />
                                <span>{BRAND_INFO.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="shrink-0 text-primary-foreground/50" />
                                <span>{BRAND_INFO.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/15 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
                    <p>{BRAND_INFO.copyright}</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
