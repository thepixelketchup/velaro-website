import type { Metadata } from 'next';
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { MessageCircle } from "lucide-react";
import { CONTACT_CONTENT } from "@/constants/contact";

import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
    title: `Contact Us | ${SITE_CONFIG.name}`,
    description: `Get in touch with the ${SITE_CONFIG.name} team for product inquiries, project consultations, and more.`,
};

const Contact = () => {
    return (
        <>
            <PageHero 
                title={CONTACT_CONTENT.hero.title} 
                subtitle={CONTACT_CONTENT.hero.subtitle} 
            />

            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Map taking the place of the old Contact Form */}
                        <AnimatedSection>
                            <h2 className="font-display text-2xl font-semibold mb-8">Our Location</h2>
                            <div className="aspect-4/3 bg-secondary w-full">
                                <iframe
                                    src={CONTACT_CONTENT.map.src}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={CONTACT_CONTENT.map.title}
                                />
                            </div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection delay={0.2}>
                            <h2 className="font-display text-2xl font-semibold mb-8">{CONTACT_CONTENT.info.title}</h2>
                            <div className="space-y-8 mb-10">
                                {CONTACT_CONTENT.info.items.map((item, i) => (
                                    <div key={item.label} className="flex items-start gap-4">
                                        <item.icon size={20} className="mt-1 shrink-0 text-muted-foreground" />
                                        <div>
                                            <p className="label-caps text-muted-foreground mb-1">{item.label}</p>
                                            <p className="text-sm leading-relaxed whitespace-pre-line">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WhatsApp */}
                            <a
                                href={CONTACT_CONTENT.whatsapp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-6 py-3 label-caps hover:opacity-90 transition-opacity mb-10"
                            >
                                <MessageCircle size={18} /> {CONTACT_CONTENT.whatsapp.label}
                            </a>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
