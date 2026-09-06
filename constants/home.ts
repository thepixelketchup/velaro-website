import { Palette, LayoutGrid, Layers, Leaf, Compass, Award, HeartHandshake, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-tiles-1.jpg";
import mattTile from "@/assets/matt.jpg";
import glossyTile from "@/assets/glossy.jpg";
import paperMattTile from "@/assets/paper matt.jpg";
import dgMattTile from "@/assets/DG Matt.jpg";
import satinTile from "@/assets/satin.jpg";
import carvingTile from "@/assets/carving.jpg";
import highGlossTile from "@/assets/high gloss.jpg";
import woodTile from "@/assets/wood.jpg";
import directorsNote from "@/assets/directors-note.jpeg";
import manufacturing from "@/assets/tile-factory.png";

export const HOME_CONTENT = {
    hero: {
        image: heroImage,
        label: "Premium Surfaces",
        title: "Rooted in India. Crafted for India. Designed for the World.",
        subtitle: "Premium tiles designed for modern living and commercial excellence.",
        ctaprimary: "View Products",
    },
    philosophy: {
        label: "Founder's Note",
        title: "Rooted in Bharat's Craftful Essence, Built For A Versatile Palette",
        text1: "Velaro takes immense pride in celebrating India's tangible and intangible artistic heritage while keeping the core philosophy of heritage at the centre. In doing so, we reinterpret the legacy that we, as Indians, carry and take it further through a contemporary lens. So when you shape your space with Velaro, you are not just adding a piece of art; you are carrying the dignity that every Indian has in their heart.",
        text2: "With Velaro, I had a clear intent to share my pride of being an Indian with the world. The country's rich, vibrant and flourishing diversity needed to be echoed in a way that resonates with every Bharatiya. We aspire to become a symbol of Indianness that's inspired by India's high-spirited celebrations, warm and welcoming culture, and the deep sense of unity that binds us together. By becoming a part of the spaces where life unfolds, we hope to be present in every Indian moment, today and for generations to come, continuing the story of our pride in every space we touch.",
        image: directorsNote,
    },
    promises: {
        label: "Our Promises",
        title: "The Velaro Promise",
        description: "Built on principles of craft, quality, and commitment to your spaces.",
        items: [
            {
                number: "01",
                icon: Compass,
                title: "Proudly Indian",
                text: "Built in India with global standards of design and manufacturing.",
            },
            {
                number: "02",
                icon: Leaf,
                title: "Sustainable Innovation",
                text: "Creating modern products that respect people and the planet.",
            },
            {
                number: "03",
                icon: Award,
                title: "Class Apart Quality",
                text: "Engineered for lasting performance, precision, and timeless aesthetics.",
            },
            {
                number: "04",
                icon: HeartHandshake,
                title: "Customer-Centric Excellence",
                text: "Delivering seamless experiences through trusted partnerships and responsive service.",
            },
            {
                number: "05",
                icon: CheckCircle2,
                title: "Installation Confidence",
                text: "Empowering every project with expert pre-installation guidance and technical support.",
            },
        ],
    },
    collections: [
        {
            name: "Matt Surface",
            image: mattTile,
            slug: "matt-surface",
            description: "The gentle elegance of Matt meets Velaro's rooted nuances to create tiles that are in sync with modern necessities and aesthetic purview. This surface reacts to light differently, bringing your chosen spaces to life in their own right.",
        },
        {
            name: "Glossy Surface",
            image: glossyTile,
            slug: "glossy-surface",
            description: "The staple surface of every tile creation is the staple for a reason. The way it reflects the light makes your spaces not only seem beautiful, but also vibrant, full of light, and expansive. Glossy surface makes for the most appealing choice, for simpletons and thinkers alike.",
        },
        {
            name: "Paper Matt Surface",
            image: paperMattTile,
            slug: "paper-matt-surface",
            description: "A contemporary craft in itself, the Paper Matt surface keeps a fine balance between architectural aesthetics and contemporary functionality, leading to a tactile yet beautiful appeal.",
        },
        {
            name: "DG Matt Surface",
            image: dgMattTile,
            slug: "dg-matt-surface",
            description: "DG Matt Surface is a specialized, non-reflective tile look, designed to offer a sophisticated, modern, and textured feel. Enhance every corner with a look that feels dynamic and modern, effortlessly.",
        },
        {
            name: "Satin Surface",
            image: satinTile,
            slug: "satin-surface",
            description: "The subtle elegance of Satin meets a refined sense of touch. Its soft, smooth look brings warmth and sophistication to every space, creating an understated surface that feels as beautiful as it looks.",
        },
        {
            name: "Carving Surface",
            image: carvingTile,
            slug: "carving-surface",
            description: "Here, surfaces are not just surfaces; they are a sensorial play at its finest. The Carving surface is what makes just looking at a design not feel like enough. The experience comes through as a dance of visual and tactile elements, one that elates.",
        },
        {
            name: "High Gloss Surface",
            image: highGlossTile,
            slug: "high-gloss-surface",
            description: "Let your spaces shine with the brilliance of High Gloss. Designed to reflect light beautifully, this surface adds depth, drama, and a luxurious touch, transforming everyday spaces into striking statements.",
        },
        {
            name: "Wood Surface",
            image: woodTile,
            slug: "wood-surface",
            description: "Bring the warmth of nature indoors with the timeless charm of Wood. Rich textures and organic character create a beautifully balanced surface, blending the comfort of wood with the durability and versatility of tile.",
        },
    ],
    technology: {
        label: "Technology",
        title: "Innovation in Every Tile",
        text: "Our tiles are produced using advanced manufacturing techniques and high-grade raw materials. With strict quality control and precision processes, we ensure consistency in finish, strength, and performance across every batch.",
        image: manufacturing,
        items: ["Advanced Digital Printing", "High-Pressure Compaction", "Precision Kiln Firing", "Nano Surface Treatment"],
    },
    impact: {
        label: "Our Impact",
        title: "Built to Last, Designed to Inspire",
        stats: [
            { icon: Palette, label: "Designs", value: "91+" },
            { icon: LayoutGrid, label: "Formats", value: "04" },
            { icon: Layers, label: "Surfaces", value: "08" },
            { icon: Leaf, label: "Sustainable Materials", value: "100%" },
        ],
    },
    cta: {
        title: "Ready to Transform Your Space?",
        text: "Explore our collections or get in touch with our design consultants to bring your vision to life.",
    },
};
