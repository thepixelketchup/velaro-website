"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Projects", path: "/projects" },
    { label: "Technology", path: "/technology" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <div className="container-wide flex items-center justify-between h-20">
                    <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        TERRA<span className="font-light">TILE</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`relative py-1 label-caps transition-colors duration-300 ${pathname === link.path
                                    ? "text-foreground"
                                    : "text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                                {pathname === link.path && (
                                    <motion.span
                                        layoutId="desktop-nav-underline"
                                        className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-foreground"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-foreground p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.path}
                                        className={`relative inline-block py-1 font-display text-3xl font-light transition-colors ${pathname === link.path
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {link.label}
                                        {pathname === link.path && (
                                            <motion.span
                                                layoutId="mobile-nav-underline"
                                                className="absolute left-0 -bottom-1 w-full h-[2px] bg-foreground"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
