import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { ABOUT_CONTENT } from "@/constants/about";
import { Metadata } from 'next';

import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
    title: `About Us | ${SITE_CONFIG.name}`,
    description: `Learn more about ${SITE_CONFIG.name}'s history, craftsmanship, and commitment to quality.`,
};

const About = () => {
    return (
        <>
            <PageHero
                title={ABOUT_CONTENT.hero.title}
                subtitle={ABOUT_CONTENT.hero.subtitle}
                image={ABOUT_CONTENT.hero.image.src}
            />

            {/* Company Story */}
            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection>
                            <p className="label-caps text-muted-foreground mb-4">{ABOUT_CONTENT.story.label}</p>
                            <h2 className="heading-section mb-6">{ABOUT_CONTENT.story.title}</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {ABOUT_CONTENT.story.text1}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {ABOUT_CONTENT.story.text2}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                {ABOUT_CONTENT.story.text3}
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <div className="image-reveal aspect-4/5">
                                <Image
                                    src={ABOUT_CONTENT.story.image}
                                    alt="Velaro craftsmanship and design story"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-secondary">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {ABOUT_CONTENT.missionVision.map((item, i) => (
                            <AnimatedSection key={item.title} delay={i * 0.1}>
                                <div className="text-center">
                                    <item.icon size={32} className="mx-auto mb-4 text-foreground" />
                                    <h3 className="font-display text-2xl font-semibold mb-4">{item.title}</h3>
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
                                <Image
                                    src={ABOUT_CONTENT.craftsmanship.image}
                                    alt="Manufacturing facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <p className="label-caps text-muted-foreground mb-4">{ABOUT_CONTENT.craftsmanship.label}</p>
                            <h2 className="heading-section mb-6">{ABOUT_CONTENT.craftsmanship.title}</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {ABOUT_CONTENT.craftsmanship.text1}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                {ABOUT_CONTENT.craftsmanship.text2}
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
