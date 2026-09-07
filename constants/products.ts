import floorTiles from "@/assets/tiles-floor-collection.jpg";
import mattTile from "@/assets/matt.jpg";
import glossyTile from "@/assets/glossy.jpg";
import paperMattTile from "@/assets/paper matt.jpg";
import dgMattTile from "@/assets/DG Matt.jpg";
import satinTile from "@/assets/satin.jpg";
import carvingTile from "@/assets/carving.jpg";
import highGlossTile from "@/assets/high gloss.jpg";
import woodTile from "@/assets/wood.jpg";

export const PRODUCTS_CONTENT = {
    hero: {
        title: "Surfaces",
        subtitle: "Explore our range of tiles crafted to deliver durability, aesthetic appeal, and consistent performance across applications.",
        image: floorTiles,
    },
    collections: [
        {
            name: "Matt Surface",
            slug: "matt-surface",
            image: mattTile,
            description: "The gentle elegance of Matt meets Velaro's rooted nuances to create tiles that are in sync with modern necessities and aesthetic purview. This surface reacts to light differently, bringing your chosen spaces to life in their own right.",
            finishes: ["Smooth Matt", "Natural Matt", "Anti-Skid"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm", "600x600mm"],
            applications: ["Living Spaces", "Bathrooms", "Offices", "Commercial Spaces"],
        },
        {
            name: "Glossy Surface",
            slug: "glossy-surface",
            image: glossyTile,
            description: "The staple surface of every tile creation is the staple for a reason. The way it reflects the light makes your spaces not only seem beautiful, but also vibrant, full of light, and expansive. Glossy surface makes for the most appealing choice, for simpletons and thinkers alike.",
            finishes: ["Reflective Gloss", "Polished", "Glazed"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm", "600x600mm"],
            applications: ["Living Rooms", "Hotel Lobbies", "Feature Walls", "Hallways"],
        },
        {
            name: "Paper Matt Surface",
            slug: "paper-matt-surface",
            image: paperMattTile,
            description: "A contemporary craft in itself, the Paper Matt surface keeps a fine balance between architectural aesthetics and contemporary functionality, leading to a tactile yet beautiful appeal.",
            finishes: ["Architectural Paper Matt", "Fine Tactile", "Natural Matt"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Contemporary Homes", "Architectural Spaces", "Feature Walls", "Modern Studios"],
        },
        {
            name: "DG Matt Surface",
            slug: "dg-matt-surface",
            image: dgMattTile,
            description: "DG Matt Surface is a specialized, non-reflective tile look, designed to offer a sophisticated, modern, and textured feel. Enhance every corner with a look that feels dynamic and modern, effortlessly.",
            finishes: ["Specialized Non-Reflective", "Textured Grain", "Modern Dynamic"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Modern Interiors", "Commercial Lobbies", "Minimalist Spaces", "Urban Living"],
        },
        {
            name: "Satin Surface",
            slug: "satin-surface",
            image: satinTile,
            description: "The subtle elegance of Satin meets a refined sense of touch. Its soft, smooth look brings warmth and sophistication to every space, creating an understated surface that feels as beautiful as it looks.",
            finishes: ["Silky Smooth", "Soft Touch", "Velvet Sheen"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Bedrooms", "Quiet Lounges", "Spa Bathrooms", "Interiors"],
        },
        {
            name: "Carving Surface",
            slug: "carving-surface",
            image: carvingTile,
            description: "Here, surfaces are not just surfaces; they are a sensorial play at its finest. The Carving surface is what makes just looking at a design not feel like enough. The experience comes through as a dance of visual and tactile elements, one that elates.",
            finishes: ["Tactile Carved", "Micro-Relief", "Textured"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Accent Walls", "Dining Areas", "Master Suites", "Showrooms"],
        },
        {
            name: "High Gloss Surface",
            slug: "high-gloss-surface",
            image: highGlossTile,
            description: "Let your spaces shine with the brilliance of High Gloss. Designed to reflect light beautifully, this surface adds depth, drama, and a luxurious touch, transforming everyday spaces into striking statements.",
            finishes: ["Mirror Finish", "Ultra-Reflective", "Lustrous"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Luxury Ballrooms", "Executive Suites", "High-End Retail", "Villas"],
        },
        {
            name: "Wood Surface",
            slug: "wood-surface",
            image: woodTile,
            description: "Bring the warmth of nature indoors with the timeless charm of Wood. Rich textures and organic character create a beautifully balanced surface, blending the comfort of wood with the durability and versatility of tile.",
            finishes: ["Natural Grain", "Embossed Wood", "Rustic Timber"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Living Rooms", "Balconies", "Terraces", "Cozy Lounges"],
        },
    ],
};
