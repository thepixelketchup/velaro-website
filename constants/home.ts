import { Shield, Leaf, Award, Gem } from "lucide-react";
import heroImage from "@/assets/hero-tiles-1.jpg";
import cementTile from "@/assets/collection-cement.jpg";
import marbleTile from "@/assets/collection-marble.jpg";
import porcelainTile from "@/assets/collection-porcelain.jpg";
import stoneTile from "@/assets/collection-stone.jpg";
import { SITE_CONFIG } from "@/constants/site";

export const HOME_CONTENT = {
    hero: {
        image: heroImage,
        label: "Premium Surfaces",
        title: "Elevate Spaces with Timeless Surfaces",
        subtitle: "Premium tiles designed for modern living and commercial excellence.",
        ctaprimary: "View Products",
    },
    philosophy: {
        label: "Our Philosophy",
        title: "Where Material Meets Meaning",
        text1: `${SITE_CONFIG.name} is a growing tile brand focused on delivering high-quality, design-driven surfaces for modern spaces. We cater primarily to B2B clients including dealers, builders, and architects, ensuring reliability in both product and supply`,
        text2: "We believe tiles are the foundation of a space’s identity. Our approach blends aesthetics with durability, ensuring every surface is both visually refined and built to last.",
        image: marbleTile,
    },
    collections: [
        {
            name: "Matt Surface",
            image: cementTile,
            slug: "matt-surface",
            description: "The gentle elegance of Matt meets Velaro's rooted nuances to create tiles that are in sync with modern necessities and aesthetic purview. This surface reacts to light differently, bringing your chosen spaces to life in their own right.",
        },
        {
            name: "Glossy Surface",
            image: marbleTile,
            slug: "glossy-surface",
            description: "The staple surface of every tile creation is the staple for a reason. The way it reflects the light makes your spaces not only seem beautiful, but also vibrant, full of light, and expansive. Glossy surface makes for the most appealing choice, for simpletons and thinkers alike.",
        },
        {
            name: "Carving Surface",
            image: stoneTile,
            slug: "carving-surface",
            description: "Here, surfaces are not just surfaces; they are a sensorial play at its finest. The Carving surface is what makes just looking at a design not feel like enough. The experience comes through as a dance of visual and tactile elements, one that elates.",
        },
        {
            name: "Carving Pro Surface",
            image: porcelainTile,
            slug: "carving-pro-surface",
            description: "Here, surfaces are not just surfaces; they are a sensory play at its finest. The Carving Pro surface brings depth and dimension through intricate textures and refined detailing, creating spaces that feel rich, expressive, and effortlessly distinctive.",
        },
        {
            name: "Satin Surface",
            image: cementTile,
            slug: "satin-surface",
            description: "The subtle elegance of Satin meets a refined sense of touch. Its soft, smooth look brings warmth and sophistication to every space, creating an understated surface that feels as beautiful as it looks.",
        },
        {
            name: "Baby Satin Surface",
            image: marbleTile,
            slug: "baby-satin-surface",
            description: "Soft to the eye and gentle in character, Baby Satin brings a delicate elegance to your spaces. Its subtle sheen creates a balanced look, quietly sophisticated, effortlessly refined, and perfect for timeless interiors.",
        },
        {
            name: "High Gloss Surface",
            image: stoneTile,
            slug: "high-gloss-surface",
            description: "Let your spaces shine with the brilliance of High Gloss. Designed to reflect light beautifully, this surface adds depth, drama, and a luxurious touch, transforming everyday spaces into striking statements.",
        },
        {
            name: "Wood Surface",
            image: porcelainTile,
            slug: "wood-surface",
            description: "Bring the warmth of nature indoors with the timeless charm of Wood. Rich textures and organic character create a beautifully balanced surface, blending the comfort of wood with the durability and versatility of tile.",
        },
    ],
    technology: {
        label: "Technology",
        title: "Innovation in Every Tile",
        text: "Our tiles are produced using advanced manufacturing techniques and high-grade raw materials. With strict quality control and precision processes, we ensure consistency in finish, strength, and performance across every batch.",
        items: ["Advanced Digital Printing", "High-Pressure Compaction", "Precision Kiln Firing", "Nano Surface Treatment"],
    },
    impact: {
        label: "Our Impact",
        title: "Built to Last, Designed to Inspire",
        stats: [
            { icon: Shield, label: "Years of Excellence", value: "25+" },
            { icon: Leaf, label: "Sustainable Materials", value: "100%" },
            { icon: Award, label: "Design Awards", value: "40+" },
            { icon: Gem, label: "Collections", value: "120+" },
        ],
    },
    cta: {
        title: "Ready to Transform Your Space?",
        text: "Explore our collections or get in touch with our design consultants to bring your vision to life.",
    },
};
