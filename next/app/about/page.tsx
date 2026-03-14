import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import aboutCraft from "@/assets/about-craft.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import { Award, Eye, Heart } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <>
            <PageHero
                title="About TerraTile"
                subtitle="Two decades of crafting premium surfaces for architecture that matters."
                image={aboutCraft.src}
            />

            {/* Company Story */}
            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection>
                            <p className="label-caps text-muted-foreground mb-4">Our Story</p>
                            <h2 className="heading-section mb-6">Born from a Love of Material</h2>
                            <p className="body-large text-muted-foreground mb-6">
                                Founded in 1998, TerraTile began as a small workshop with a singular obsession:
                                creating tile surfaces that honor the beauty of natural materials while pushing
                                the boundaries of modern manufacturing.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                What started as a family venture in Morbi, Gujarat has grown into one of India's
                                most respected tile manufacturers, serving architects and designers across 30+
                                countries. Yet our core philosophy remains unchanged — every surface we create
                                must be worthy of the space it inhabits.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, we operate from a 500,000 sq ft state-of-the-art facility with Italian
                                machinery, producing over 20,000 square meters of premium tiles daily. Our team
                                of 800+ craftspeople, engineers, and designers work together to set new standards
                                in surface innovation.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="image-reveal aspect-4/5">
                                <Image src={aboutCraft} alt="TerraTile craftsmanship" className="w-full h-full object-cover" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-secondary">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Eye,
                                title: "Vision",
                                text: "To be the global benchmark for premium architectural surfaces — where craft, technology, and sustainability converge.",
                            },
                            {
                                icon: Heart,
                                title: "Mission",
                                text: "To empower architects and designers with surfaces that inspire — manufactured responsibly, designed beautifully, built to endure.",
                            },
                            {
                                icon: Award,
                                title: "Values",
                                text: "Uncompromising quality. Relentless innovation. Deep respect for materials, people, and the planet we share.",
                            },
                        ].map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <div className="text-center">
                                    <item.icon size={32} className="mx-auto mb-4 text-foreground" />
                                    <h3 className="font-display text-2xl font-light mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Craftsmanship */}
            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection>
                            <div className="image-reveal aspect-4/3">
                                <Image src={manufacturing} alt="Manufacturing facility" className="w-full h-full object-cover" />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <p className="label-caps text-muted-foreground mb-4">Craftsmanship</p>
                            <h2 className="heading-section mb-6">The Hand Behind the Machine</h2>
                            <p className="body-large text-muted-foreground mb-6">
                                While we embrace cutting-edge technology, the human eye and hand remain at the
                                heart of everything we create. Our master craftspeople bring decades of experience
                                to quality control, glaze development, and design refinement.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Every tile that leaves our facility has been touched by human expertise — from
                                the material scientist formulating the body to the artisan perfecting the surface
                                texture. This is not mass production; it's mass craftsmanship.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-wide text-center">
                    <AnimatedSection>
                        <p className="label-caps text-primary-foreground/60 mb-4">Recognition</p>
                        <h2 className="heading-section mb-12">Awards & Accolades</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { award: "Red Dot Design Award", year: "2024" },
                                { award: "IF Design Award", year: "2023" },
                                { award: "India Design Mark", year: "2022" },
                                { award: "Green Building Award", year: "2023" },
                            ].map((item) => (
                                <div key={item.award} className="p-6 border border-primary-foreground/10">
                                    <p className="font-display text-lg font-light mb-1">{item.award}</p>
                                    <p className="label-caps text-primary-foreground/50">{item.year}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};

export default About;
