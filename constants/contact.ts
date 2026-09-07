import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBanner from "@/assets/contact-banner.jpg";
import { SITE_CONFIG } from "@/constants/site";

export const CONTACT_CONTENT = {
    hero: {
        title: "Contact Us",
        subtitle: "Get in touch with our team. We'd love to hear about your project.",
        image: contactBanner,
    },
    form: {
        title: "Send Us a Message",
    },
    info: {
        title: "Get in Touch",
        items: [
            {
                icon: MapPin,
                label: "Office Address",
                content: `Velaro Tiles 501, A Block,\nEastFace, Iscon Ambli Road,\nAhmedabad, Gujarat - 380058 \n\nPlot No. 207/25, D.C, G.I,\nNational Highway, near Boss Ceramics,\nRafaleshwar, Morbi, Jambudiya, Gujarat 363642`,
            },
            {
                icon: Phone,
                label: "Phone",
                content: "+91 98985 56396\n+91 98985 56347",
            },
            {
                icon: Mail,
                label: "Email",
                content: SITE_CONFIG.email,
            },
            {
                icon: Clock,
                label: "Business Hours",
                content: "Mon – Sat: 10:00 AM – 7:00 PM\nSunday: By Appointment",
            },
        ],
    },
    whatsapp: {
        label: "Chat on WhatsApp",
        link: "https://wa.me/919898556347",
    },
    map: {
        title: `${SITE_CONFIG.name} Office Location - Ahmedabad`,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9721196296946!2d72.47626537562087!3d23.024795879172178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8e6ca6090d%3A0x5de3dee5ea279725!2sEastFace!5e0!3m2!1sen!2sin!4v1788715329860!5m2!1sen!2sin",
    },
};
