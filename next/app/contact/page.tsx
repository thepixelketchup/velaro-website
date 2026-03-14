import type { Metadata } from 'next';
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | TerraTile",
    description: "Get in touch with the TerraTile team for product inquiries, project consultations, and more.",
};

const Contact = () => {
    return (
        <>
            <PageHero title="Contact Us" subtitle="Get in touch with our team. We'd love to hear about your project." />

            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Form */}
                        <AnimatedSection>
                            <h2 className="font-display text-2xl font-light mb-8">Send Us a Message</h2>
                            <ContactForm />
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection delay={0.2}>
                            <h2 className="font-display text-2xl font-light mb-8">Get in Touch</h2>
                            <div className="space-y-8 mb-10">
                                <div className="flex items-start gap-4">
                                    <MapPin size={20} className="mt-1 shrink-0 text-muted-foreground" />
                                    <div>
                                        <p className="label-caps text-muted-foreground mb-1">Office Address</p>
                                        <p className="text-sm leading-relaxed">TerraTile Design Studio<br />42 Design District, Lower Parel<br />Mumbai, Maharashtra 400013, India</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone size={20} className="mt-1 shrink-0 text-muted-foreground" />
                                    <div>
                                        <p className="label-caps text-muted-foreground mb-1">Phone</p>
                                        <p className="text-sm">+91 22 4567 8900</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail size={20} className="mt-1 shrink-0 text-muted-foreground" />
                                    <div>
                                        <p className="label-caps text-muted-foreground mb-1">Email</p>
                                        <p className="text-sm">hello@terratile.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock size={20} className="mt-1 shrink-0 text-muted-foreground" />
                                    <div>
                                        <p className="label-caps text-muted-foreground mb-1">Business Hours</p>
                                        <p className="text-sm">Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: By Appointment</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/912245678900"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-6 py-3 label-caps hover:opacity-90 transition-opacity mb-10"
                            >
                                <MessageCircle size={18} /> Chat on WhatsApp
                            </a>

                            {/* Map */}
                            <div className="aspect-[4/3] bg-secondary">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1!2d72.82!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAw&um=1&ie=UTF-8"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="TerraTile Office Location"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
