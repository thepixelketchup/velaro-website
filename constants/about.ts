import { Award, Eye, Heart } from "lucide-react";
import aboutCraft from "@/assets/about-craft.jpg";
import aboutStory from "@/assets/about-story.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import { SITE_CONFIG } from "@/constants/site";

export const ABOUT_CONTENT = {
    hero: {
        title: `About ${SITE_CONFIG.name}`,
        subtitle: "Dedicated to crafting premium surfaces that unite thoughtful design, enduring quality, and modern architectural vision.",
        image: aboutCraft,
    },
    story: {
        label: "Our Story",
        title: "This is where modern living meets Indian soul",
        text1: `Velaro was born from a simple observation: somewhere along the way, our spaces began to lose their sense of identity. Stripped-back minimalism and uniform aesthetics, spaces started to look increasingly alike. India, however, has always spoken a different design language.`,
        text2: "For centuries, Indian artisans, craftsmen, architects, and storytellers have shaped an aesthetic tradition rich in texture, symbolism, color, and purpose. Velaro is an invitation to rediscover color, celebrate craftsmanship, and embrace a design language that has always been our own.",
        text3: "At Velaro, every surface begins with a simple belief—great spaces deserve exceptional foundations. Inspired by India's evolving architecture and engineered with global manufacturing standards, we create porcelain surfaces that combine aesthetics, durability and precision. Every collection is designed to complement modern lifestyles while meeting the expectations of architects, designers, builders and discerning homeowners.",
        image: aboutStory,
    },
    missionVision: [
        {
            icon: Eye,
            title: "Vision",
            text: "To become a trusted and scalable tile brand known for reliability, product quality, and strong business relationships.",
        },
        {
            icon: Heart,
            title: "Mission",
            text: "To provide high-quality tile products that meet the functional and aesthetic needs of modern construction",
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
        text1: "We prioritize consistency, finish quality, and design precision. Every product is selected and delivered with a focus on performance and long-term usability.",
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
