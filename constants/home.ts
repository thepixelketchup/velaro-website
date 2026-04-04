import { Shield, Leaf, Award, Gem } from "lucide-react";
import heroImage from "@/assets/hero-tiles-1.jpg";
import wallTiles from "@/assets/tiles-wall-collection.jpg";
import floorTiles from "@/assets/tiles-floor-collection.jpg";
import decorativeTiles from "@/assets/tiles-decorative-collection.jpg";
import designerTiles from "@/assets/tiles-designer-collection.jpg";
import customTiles from "@/assets/tiles-custom-collection.jpg";
import { SITE_CONFIG } from "@/constants/site";

export const HOME_CONTENT = {
    hero: {
        image: heroImage,
        label: "Premium Surfaces",
        title: "Elevate Spaces with Timeless Surfaces",
        subtitle: "Premium tiles designed for modern living and commercial excellence.",
        ctaSecondary: "View Projects",
    },
    philosophy: {
        label: "Our Philosophy",
        title: "Where Material Meets Meaning",
        text1: `${SITE_CONFIG.name} is a growing tile brand focused on delivering high-quality, design-driven surfaces for modern spaces. We cater primarily to B2B clients including dealers, builders, and architects, ensuring reliability in both product and supply`,
        text2: "We believe tiles are the foundation of a space’s identity. Our approach blends aesthetics with durability, ensuring every surface is both visually refined and built to last.",
        image: wallTiles,
    },
    collections: [
        { name: "Wall Tiles", image: wallTiles, slug: "wall-tiles" },
        { name: "Floor Tiles", image: floorTiles, slug: "floor-tiles" },
        { name: "Decorative Tiles", image: decorativeTiles, slug: "decorative-tiles" },
        { name: "Designer Tiles", image: designerTiles, slug: "designer-tiles" },
        { name: "Custom Series", image: customTiles, slug: "custom-series" },
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
