import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
    title: `Terms of Service | ${SITE_CONFIG.name}`,
    description: `Read the Terms of Service for ${SITE_CONFIG.name} — the conditions governing your use of our website and services.`,
};

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: [
            `By accessing or using the ${SITE_CONFIG.name} website at ${SITE_CONFIG.domain}, you agree to be bound by these Terms of Service and all applicable laws and regulations.`,
            "If you do not agree with any of these terms, you are prohibited from using or accessing this site. These terms constitute the entire agreement between you and Velaro Tiles regarding your use of this website.",
        ],
    },
    {
        title: "2. Use of the Website",
        content: [
            "You may use this website for lawful purposes only and in a manner consistent with all applicable local, national, and international laws and regulations.",
            "You agree not to use the site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.",
            "You must not use the site to reproduce, duplicate, copy, sell, resell, or exploit any material on the site without the express written consent of Velaro Tiles.",
            "We reserve the right to restrict or terminate your access to the website at any time, without notice, for conduct that we believe violates these Terms.",
        ],
    },
    {
        title: "3. Intellectual Property",
        content: [
            `All content on this website — including but not limited to text, photography, graphics, logos, and surface imagery — is the exclusive property of ${SITE_CONFIG.name} or its content suppliers and is protected by applicable copyright and intellectual property laws.`,
            "The Velaro Tiles name, logo, and all related marks are trademarks of Velaro Tiles. You may not use them without our prior written permission.",
            "You may download or print content from this website for personal, non-commercial use only, provided that all copyright and proprietary notices are retained.",
        ],
    },
    {
        title: "4. Product Information & Accuracy",
        content: [
            "We make every effort to ensure that product descriptions, finishes, sizes, and colour representations on this website are as accurate as possible. However, we do not warrant that product descriptions or other content are error-free, complete, or current.",
            "Colours displayed on screen may vary from actual tile finishes due to monitor calibration differences. We strongly recommend requesting physical samples before making final decisions.",
            "Prices, availability, and specifications are subject to change without notice and are confirmed at the time of order placement.",
        ],
    },
    {
        title: "5. Enquiries & Orders",
        content: [
            "Submitting an enquiry through our website does not constitute a binding order or contract. All orders are subject to a formal quotation, acceptance, and confirmation by Velaro Tiles.",
            "We reserve the right to refuse or cancel any enquiry or order at our discretion, including in cases of pricing errors, product unavailability, or suspected misuse.",
            "Any pricing discussed during consultation is indicative and subject to formal quotation. Final pricing is confirmed in a written purchase order or invoice.",
        ],
    },
    {
        title: "6. Limitation of Liability",
        content: [
            `To the maximum extent permitted by law, ${SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content.`,
            "We do not warrant that the website will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.",
            "Our total liability for any claim arising out of or relating to these Terms shall not exceed the amount paid, if any, by you to Velaro Tiles in the preceding three months.",
        ],
    },
    {
        title: "7. Third-Party Links",
        content: [
            "This website may contain links to external websites operated by third parties. These links are provided for your convenience only.",
            "We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Inclusion of a link does not constitute an endorsement.",
        ],
    },
    {
        title: "8. Privacy",
        content: [
            "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
            "Please review our Privacy Policy to understand our data collection and use practices. By using this website, you consent to the practices described therein.",
        ],
    },
    {
        title: "9. Governing Law",
        content: [
            "These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
            "Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.",
        ],
    },
    {
        title: "10. Changes to These Terms",
        content: [
            "We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to the website.",
            "We encourage you to review these Terms periodically. Your continued use of the website after any changes constitutes your acceptance of the new Terms.",
            `These Terms were last updated in ${new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}.`,
        ],
    },
    {
        title: "11. Contact Us",
        content: [
            `If you have any questions about these Terms of Service, please contact us at ${SITE_CONFIG.email}.`,
            "We will endeavour to respond to all queries within 5 business days.",
        ],
    },
];

export default function TermsOfService() {
    return (
        <>
            <PageHero
                title="Terms of Service"
                subtitle={`The conditions that govern your use of the ${SITE_CONFIG.name} website and services.`}
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
                            <p className="label-caps text-muted-foreground mb-4">Need clarity?</p>
                            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                                Speak with our team
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                If anything in these terms is unclear or you'd like to understand how they apply to your project, we're here to help.
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
