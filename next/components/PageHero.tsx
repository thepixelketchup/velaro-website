"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image?: string;
    compact?: boolean;
}

const PageHero = ({ title, subtitle, image, compact = false }: PageHeroProps) => {
    return (
        <section className={`relative ${compact ? "h-[50vh]" : "h-[60vh]"} min-h-[400px] flex items-end`}>
            {image && (
                <div className="absolute inset-0">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                </div>
            )}
            {!image && (
                <div className="absolute inset-0 bg-secondary" />
            )}
            <div className="container-wide relative pb-12 md:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className={`heading-display text-4xl md:text-5xl lg:text-6xl ${image ? "text-primary-foreground" : "text-foreground"}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className={`mt-4 body-large max-w-2xl ${image ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHero;
