"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { NAV_LINKS } from "@/constants/navigation";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const isDarkHeader = !scrolled && ["/", "/about", "/gallery"].includes(pathname);
    const textClass = isDarkHeader ? "text-primary-foreground" : "text-foreground";
    const textMutedClass = isDarkHeader ? "text-primary-foreground/70" : "text-foreground/70";

    return (
        <>
            {/* ── Nav bar ── z-50 always, but when drawer is open we hide the hamburger */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
                        : "bg-transparent"
                }`}
            >
                <div className="container-wide flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={isDarkHeader ? "/Logo_white.svg" : "/Logo_orange.svg"}
                            alt="Velaro"
                            width={160}
                            height={44}
                            unoptimized
                            className="h-10 md:h-11 w-auto transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`relative py-1 label-caps transition-colors duration-300 ${
                                    pathname === link.path
                                        ? textClass
                                        : `${textMutedClass} hover:${textClass}`
                                }`}
                            >
                                {link.label}
                                {pathname === link.path && (
                                    <motion.span
                                        layoutId="desktop-nav-underline"
                                        className={`absolute left-0 -bottom-1 w-full h-[1.5px] ${
                                            isDarkHeader ? "bg-primary-foreground" : "bg-foreground"
                                        }`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger — hidden when drawer is open so it doesn't overlap the X */}
                    {!isOpen && (
                        <button
                            onClick={() => setIsOpen(true)}
                            className={`lg:hidden p-2 transition-colors duration-300 ${textClass}`}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    )}
                </div>
            </nav>

            {/* ── Mobile Drawer — z-[60] so it sits above the nav bar ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-background lg:hidden"
                    >
                        {/* Drawer header — z-10 so it stays above the absolute-positioned links layer */}
                        <div className="relative z-10 container-wide flex items-center justify-between h-20">
                            {/* Mirror the logo so layout feels consistent */}
                            <Image
                                src="/Logo_orange.svg"
                                alt="Velaro"
                                width={160}
                                height={44}
                                unoptimized
                                className="h-10 md:h-11 w-auto"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-foreground hover:text-foreground/60 transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={26} />
                            </button>
                        </div>

                        {/* Nav links — absolutely centered in the full drawer */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <Link
                                        href={link.path}
                                        className={`relative inline-block py-1 font-display text-3xl font-semibold transition-colors ${
                                            pathname === link.path
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
