import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
    title: `Privacy Policy | ${SITE_CONFIG.name}`,
    description: `Read the Privacy Policy for ${SITE_CONFIG.name} — how we collect, use, and protect your information.`,
};

const sections = [
    {
        title: "1. Information We Collect",
        content: [
            `When you interact with ${SITE_CONFIG.name} — whether through our website, contact form, or email — we may collect certain information to serve you better.`,
            "Personal Information: Your name, email address, phone number, and business details when you reach out to us, request a catalogue, or enquire about our surfaces.",
            "Usage Information: Information about how you navigate our website, including pages visited, time spent, and referring URLs, collected via standard analytics tools.",
            "Device Information: Your browser type, device type, operating system, and IP address for security and performance purposes.",
        ],
    },
    {
        title: "2. How We Use Your Information",
        content: [
            "We use the information we collect solely to provide, improve, and personalise your experience with Velaro Tiles.",
            "To respond to enquiries, quotation requests, or project consultations submitted through our contact channels.",
            "To send product updates, catalogues, or promotional communications — only where you have given us consent or where we have a legitimate interest to do so.",
            "To analyse website performance and improve the quality and relevance of our content.",
            "We do not sell, rent, or trade your personal information to third parties under any circumstances.",
        ],
    },
    {
        title: "3. Cookies & Analytics",
        content: [
            `${SITE_CONFIG.domain} uses cookies and similar technologies to enhance your browsing experience and gather aggregate analytics data.`,
            "Essential cookies are required for the website to function correctly and cannot be disabled.",
            "Analytics cookies help us understand how visitors use our site — all data is anonymised and aggregated. You may disable these through your browser settings without affecting core functionality.",
            "We do not use third-party advertising cookies or tracking pixels.",
        ],
    },
    {
        title: "4. Data Storage & Security",
        content: [
            "Your data is stored securely on servers located within India and is accessible only to authorised members of the Velaro Tiles team.",
            "We implement industry-standard security measures including encryption, access controls, and regular audits to protect your information from unauthorised access, disclosure, or loss.",
            "Despite our best efforts, no data transmission over the internet can be guaranteed to be completely secure. We encourage you to use secure connections when sharing sensitive information.",
        ],
    },
    {
        title: "5. Third-Party Services",
        content: [
            "We may use trusted third-party services to operate our website and communicate with you — including email delivery services and analytics platforms.",
            "These partners are bound by confidentiality agreements and are permitted to process your data only as required to provide services on our behalf.",
            "Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.",
        ],
    },
    {
        title: "6. Your Rights",
        content: [
            "You have the right to access, correct, or request deletion of any personal information we hold about you.",
            `To exercise these rights, please contact us at ${SITE_CONFIG.email}. We will respond to all verified requests within 30 days.`,
            "You may also withdraw consent for marketing communications at any time by following the unsubscribe link in any email, or by writing to us directly.",
        ],
    },
    {
        title: "7. Children's Privacy",
        content: [
            "Our services are not directed at children under the age of 13. We do not knowingly collect personal information from minors.",
            "If you believe we have inadvertently collected data from a child, please contact us immediately and we will take appropriate steps to delete it.",
        ],
    },
    {
        title: "8. Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The most current version will always be available on this page.",
            "We encourage you to review this policy periodically. Continued use of our website after any changes constitutes acceptance of the updated terms.",
            `This policy was last updated in ${new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}.`,
        ],
    },
    {
        title: "9. Contact Us",
        content: [
            `If you have any questions, concerns, or requests relating to this Privacy Policy, please reach out to us at ${SITE_CONFIG.email} or write to us at our registered office.`,
            "We are committed to addressing your concerns promptly and transparently.",
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <>
            <PageHero
                title="Privacy Policy"
                subtitle={`How ${SITE_CONFIG.name} collects, uses, and protects your information.`}
                compact
            />

            <section className="section-padding">
                <div className="container-wide">
                    <div className="max-w-3xl mx-auto">
                        <AnimatedSection>
                            <p className="label-caps text-muted-foreground mb-3">Last updated</p>
                            <p className="text-muted-foreground text-sm mb-16">
                                {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                            </p>
                        </AnimatedSection>

                        <div className="space-y-14">
                            {sections.map((section, i) => (
                                <AnimatedSection key={section.title} delay={i * 0.04}>
                                    <h2 className="font-display text-xl md:text-2xl font-semibold mb-5 text-foreground">
                                        {section.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.content.map((para, j) => (
                                            <p key={j} className="text-muted-foreground leading-relaxed text-base">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="section-padding bg-secondary">
                <div className="container-wide">
                    <AnimatedSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="label-caps text-muted-foreground mb-4">Questions?</p>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                                We're happy to help
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                If you have any questions about how we handle your data, don't hesitate to get in touch.
                            </p>
                            <a
                                href={`mailto:${SITE_CONFIG.email}`}
                                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 label-caps hover:bg-foreground/90 transition-colors"
                            >
                                {SITE_CONFIG.email}
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
