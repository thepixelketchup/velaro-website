"use client"

import { motion } from "framer-motion";
import heroImage from "@/assets/hero-tiles.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt="Premium marble tile surfaces with dramatic lighting"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/70 to-background/40" />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-gold mb-6 font-body">
                            Premium Tile Surfaces
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6"
                    >
                        Velaro Tiles —{" "}
                        <span className="text-gradient-gold">Premium Surfaces</span> for
                        Inspired Spaces
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg font-body leading-relaxed"
                    >
                        Where timeless elegance meets modern craftsmanship. Transform every
                        surface into a statement of luxury.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/collections"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground uppercase tracking-[0.15em] text-sm font-body font-medium shadow-gold-lg hover:bg-gold-light transition-all duration-300"
                        >
                            Explore Collections
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/30 text-foreground uppercase tracking-[0.15em] text-sm font-body font-medium hover:border-gold hover:text-gold transition-all duration-300"
                        >
                            Get a Quote
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-5 h-8 border border-foreground/30 rounded-full flex items-start justify-center p-1.5"
                >
                    <div className="w-1 h-2 bg-gold rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
