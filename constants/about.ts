import { Award, Eye, Heart } from "lucide-react";
import aboutCraft from "@/assets/about-craft.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

export const ABOUT_CONTENT = {
    hero: {
        title: "About TerraTile",
        subtitle: "Two decades of crafting premium surfaces for architecture that matters.",
        image: aboutCraft,
    },
    story: {
        label: "Our Story",
        title: "Born from a Love of Material",
        text1: "Founded in 1998, TerraTile began as a small workshop with a singular obsession: creating tile surfaces that honor the beauty of natural materials while pushing the boundaries of modern manufacturing.",
        text2: "What started as a family venture in Morbi, Gujarat has grown into one of India's most respected tile manufacturers, serving architects and designers across 30+ countries. Yet our core philosophy remains unchanged — every surface we create must be worthy of the space it inhabits.",
        text3: "Today, we operate from a 500,000 sq ft state-of-the-art facility with Italian machinery, producing over 20,000 square meters of premium tiles daily. Our team of 800+ craftspeople, engineers, and designers work together to set new standards in surface innovation.",
        image: aboutCraft,
    },
    missionVision: [
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
    ],
    craftsmanship: {
        label: "Craftsmanship",
        title: "The Hand Behind the Machine",
        text1: "While we embrace cutting-edge technology, the human eye and hand remain at the heart of everything we create. Our master craftspeople bring decades of experience to quality control, glaze development, and design refinement.",
        text2: "Every tile that leaves our facility has been touched by human expertise — from the material scientist formulating the body to the artisan perfecting the surface texture. This is not mass production; it's mass craftsmanship.",
        image: manufacturing,
    },
    awards: {
        label: "Recognition",
        title: "Awards & Accolades",
        list: [
            { award: "Red Dot Design Award", year: "2024" },
            { award: "IF Design Award", year: "2023" },
            { award: "India Design Mark", year: "2022" },
            { award: "Green Building Award", year: "2023" },
        ],
    },
};
