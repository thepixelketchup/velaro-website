"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
                <Link href="/" className="font-heading text-xl md:text-2xl font-bold tracking-wide text-foreground">
                    Vellaro <span className="text-gradient-gold">Tiles</span>
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm uppercase tracking-[0.2em] transition-colors duration-300 font-body ${pathname === link.href
                                ? "text-gold"
                                : "text-muted-foreground hover:text-gold"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2 border border-gold/40 text-sm uppercase tracking-[0.15em] text-foreground hover:bg-gold/10 hover:border-gold transition-all duration-300 font-body"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-foreground"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm uppercase tracking-[0.2em] transition-colors font-body ${pathname === link.href
                                        ? "text-gold"
                                        : "text-muted-foreground hover:text-gold"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-2 px-6 py-3 border border-gold/40 text-sm uppercase tracking-[0.15em] text-foreground hover:bg-gold/10 transition-all font-body"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
