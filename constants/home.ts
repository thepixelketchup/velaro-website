import { Shield, Leaf, Award, Gem } from "lucide-react";
import heroImage from "@/assets/hero-tiles-1.jpg";
import wallTiles from "@/assets/tiles-wall-collection.jpg";
import floorTiles from "@/assets/tiles-floor-collection.jpg";
import decorativeTiles from "@/assets/tiles-decorative-collection.jpg";
import designerTiles from "@/assets/tiles-designer-collection.jpg";
import customTiles from "@/assets/tiles-custom-collection.jpg";

export const HOME_CONTENT = {
    hero: {
        image: heroImage,
        label: "Premium Surfaces",
        title: "Crafting Surfaces for Modern Spaces",
        subtitle: "Where artistry meets architecture. Premium tiles designed for spaces that inspire.",
        ctaSecondary: "View Projects",
    },
    philosophy: {
        label: "Our Philosophy",
        title: "Where Material Meets Meaning",
        text1: "At TerraTile, we believe every surface tells a story. For over two decades, we've been crafting tiles that transform spaces into experiences — merging traditional craftsmanship with contemporary design innovation.",
        text2: "Our collections draw inspiration from nature's most enduring textures — stone, marble, wood, and earth — reimagined through advanced manufacturing processes to create surfaces of extraordinary beauty and durability.",
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
        text: "Our state-of-the-art manufacturing combines Italian engineering with artisanal expertise. Each tile undergoes rigorous quality control to ensure exceptional finish, durability, and consistency.",
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
    featuredIn: ["Architectural Digest", "Elle Decor", "Wallpaper*", "Dezeen", "Surface Magazine"],
    cta: {
        title: "Ready to Transform Your Space?",
        text: "Explore our collections or get in touch with our design consultants to bring your vision to life.",
    },
};
