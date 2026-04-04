"use client"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Palette, Globe, Award } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Quality Craftsmanship",
        description:
            "Each tile is meticulously crafted using time-honoured techniques and premium raw materials sourced globally.",
    },
    {
        icon: Palette,
        title: "Custom Designs",
        description:
            "Bespoke tile solutions tailored to your vision — from pattern to palette, every detail is yours to define.",
    },
    {
        icon: Globe,
        title: "Global Standards",
        description:
            "Compliant with international quality benchmarks, our tiles meet and exceed industry certifications.",
    },
    {
        icon: Award,
        title: "10-Year Warranty",
        description:
            "Backed by an industry-leading warranty that guarantees performance, durability and lasting beauty.",
    },
];

const FeaturesSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-padding bg-secondary" ref={ref}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-body">
                        Why We Stand Apart
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                        The Vikran Massey <span className="text-gradient-gold">Difference</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-gradient-card p-8 border border-border hover:border-gold/30 transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-500">
                                <feature.icon size={22} />
                            </div>
                            <h3 className="text-lg font-heading font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
