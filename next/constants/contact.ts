import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
                content: "TerraTile Design Studio\n42 Design District, Lower Parel\nMumbai, Maharashtra 400013, India",
            },
            {
                icon: Phone,
                label: "Phone",
                content: "+91 22 4567 8900",
            },
            {
                icon: Mail,
                label: "Email",
                content: "hello@terratile.com",
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
        title: "TerraTile Office Location",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1!2d72.82!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAw&um=1&ie=UTF-8",
    },
};
