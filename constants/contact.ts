import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export const CONTACT_CONTENT = {
    hero: {
        title: "Contact Us",
        subtitle: "Get in touch with our team. We'd love to hear about your project.",
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
                content: `${SITE_CONFIG.name} Design Studio\n42 Design District, Lower Parel\nMumbai, Maharashtra 400013, India`,
            },
            {
                icon: Phone,
                label: "Phone",
                content: "+91 22 4567 8900",
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
        link: "https://wa.me/912245678900",
    },
    map: {
        title: `${SITE_CONFIG.name} Office Location - Mumbai`,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.751680516628!2d72.8188555871582!3d19.011432400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced0d69b3cb1%3A0x2db4fb98471b42eb!2sLower%20Parel%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    },
};
