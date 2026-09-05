import floorTiles from "@/assets/tiles-floor-collection.jpg";
import cementTile from "@/assets/collection-cement.jpg";
import marbleTile from "@/assets/collection-marble.jpg";
import porcelainTile from "@/assets/collection-porcelain.jpg";
import stoneTile from "@/assets/collection-stone.jpg";

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
            image: cementTile,
            description: "The gentle elegance of Matt meets Velaro's rooted nuances to create tiles that are in sync with modern necessities and aesthetic purview. This surface reacts to light differently, bringing your chosen spaces to life in their own right.",
            finishes: ["Smooth Matt", "Natural Matt", "Anti-Skid"],
            sizes: ["60x120cm", "80x160cm", "120x180cm"],
            applications: ["Living Spaces", "Bathrooms", "Offices", "Commercial Spaces"],
        },
        {
            name: "Glossy Surface",
            slug: "glossy-surface",
            image: marbleTile,
            description: "The staple surface of every tile creation is the staple for a reason. The way it reflects the light makes your spaces not only seem beautiful, but also vibrant, full of light, and expansive. Glossy surface makes for the most appealing choice, for simpletons and thinkers alike.",
            finishes: ["Reflective Gloss", "Polished", "Glazed"],
            sizes: ["60x120cm", "80x160cm", "120x240cm"],
            applications: ["Living Rooms", "Hotel Lobbies", "Feature Walls", "Hallways"],
        },
        {
            name: "Carving Surface",
            slug: "carving-surface",
            image: stoneTile,
            description: "Here, surfaces are not just surfaces; they are a sensorial play at its finest. The Carving surface is what makes just looking at a design not feel like enough. The experience comes through as a dance of visual and tactile elements, one that elates.",
            finishes: ["Tactile Carved", "Micro-Relief", "Textured"],
            sizes: ["60x120cm", "80x160cm"],
            applications: ["Accent Walls", "Dining Areas", "Master Suites", "Showrooms"],
        },
        {
            name: "Carving Pro Surface",
            slug: "carving-pro-surface",
            image: porcelainTile,
            description: "Here, surfaces are not just surfaces; they are a sensory play at its finest. The Carving Pro surface brings depth and dimension through intricate textures and refined detailing, creating spaces that feel rich, expressive, and effortlessly distinctive.",
            finishes: ["Deep Carving", "High-Definition Relief", "Dimensional"],
            sizes: ["80x160cm", "120x240cm", "120x280cm"],
            applications: ["Luxury Residences", "Grand Entrances", "Galleries", "Boutique Spaces"],
        },
        {
            name: "Satin Surface",
            slug: "satin-surface",
            image: cementTile,
            description: "The subtle elegance of Satin meets a refined sense of touch. Its soft, smooth look brings warmth and sophistication to every space, creating an understated surface that feels as beautiful as it looks.",
            finishes: ["Silky Smooth", "Soft Touch", "Velvet Sheen"],
            sizes: ["60x120cm", "80x160cm"],
            applications: ["Bedrooms", "Quiet Lounges", "Spa Bathrooms", "Interiors"],
        },
        {
            name: "Baby Satin Surface",
            slug: "baby-satin-surface",
            image: marbleTile,
            description: "Soft to the eye and gentle in character, Baby Satin brings a delicate elegance to your spaces. Its subtle sheen creates a balanced look, quietly sophisticated, effortlessly refined, and perfect for timeless interiors.",
            finishes: ["Ultra-Soft", "Delicate Sheen", "Feather Touch"],
            sizes: ["60x120cm", "80x160cm"],
            applications: ["Minimalist Homes", "Powder Rooms", "Bedrooms", "Reading Corners"],
        },
        {
            name: "High Gloss Surface",
            slug: "high-gloss-surface",
            image: stoneTile,
            description: "Let your spaces shine with the brilliance of High Gloss. Designed to reflect light beautifully, this surface adds depth, drama, and a luxurious touch, transforming everyday spaces into striking statements.",
            finishes: ["Mirror Finish", "Ultra-Reflective", "Lustrous"],
            sizes: ["80x160cm", "120x240cm"],
            applications: ["Luxury Ballrooms", "Executive Suites", "High-End Retail", "Villas"],
        },
        {
            name: "Wood Surface",
            slug: "wood-surface",
            image: porcelainTile,
            description: "Bring the warmth of nature indoors with the timeless charm of Wood. Rich textures and organic character create a beautifully balanced surface, blending the comfort of wood with the durability and versatility of tile.",
            finishes: ["Natural Grain", "Embossed Wood", "Rustic Timber"],
            sizes: ["20x120cm", "60x120cm", "20x180cm"],
            applications: ["Living Rooms", "Balconies", "Terraces", "Cozy Lounges"],
        },
    ],
};
