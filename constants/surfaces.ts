import floorTiles from "@/assets/tiles-floor-collection.jpg";
import mattTile from "@/assets/matt.jpg";
import glossyTile from "@/assets/glossy.jpg";
import paperMattTile from "@/assets/paper matt.jpg";
import dgMattTile from "@/assets/DG Matt.jpg";
import satinTile from "@/assets/satin.jpg";
import carvingTile from "@/assets/carving.jpg";
import highGlossTile from "@/assets/high gloss.jpg";
import woodTile from "@/assets/wood.jpg";

export const SURFACES_CONTENT = {
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
            finishes: ["Paper Matt", "Subtle Texture", "Ultra-Low Sheen"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Minimalist Interiors", "Modern Homes", "Bedrooms", "Quiet Workspaces"],
        },
        {
            name: "DG Matt Surface",
            slug: "dg-matt-surface",
            image: dgMattTile,
            description: "DG Matt brings you the best of both worlds with its non-reflective nature and depth that's impossible to emulate with normal creations. It doesn't only elevate your space, but also gives it a touch of true luxury.",
            finishes: ["Deep Grain Matt", "High Definition Matt", "Textured Satin"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Luxury Residences", "Lounges", "Dining Areas", "Executive Suites"],
        },
        {
            name: "Satin Surface",
            slug: "satin-surface",
            image: satinTile,
            description: "Between the light-loving Glossy and quiet Matt lies the Satin surface. It plays with light gently, letting it bounce just enough to make you notice the sheer beauty of the creation.",
            finishes: ["Silk Satin", "Soft Sheen", "Honed Velvet"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Master Suites", "Spa Bathrooms", "Boutique Retail", "Living Rooms"],
        },
        {
            name: "Carving Surface",
            slug: "carving-surface",
            image: carvingTile,
            description: "The micro-veins along the surface are a nod to the marvel that nature is. The surface is carved carefully to make each vein catch light, giving it a life of its own.",
            finishes: ["Vein-Carved", "Gloss-in-Matt", "Tactile Relief"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Feature Accent Walls", "Grand Entrances", "Fireplace Surrounds", "Penthouses"],
        },
        {
            name: "High Gloss Surface",
            slug: "high-gloss-surface",
            image: highGlossTile,
            description: "Mirroring the world around it with utmost perfection, the High Gloss surfaces are created to make things grand. It lets light play at its full potential, turning spaces into an ode to royalty.",
            finishes: ["Mirror Finish", "Crystal High Gloss", "Liquid Sheen"],
            sizes: ["1200x1800mm", "800x1600mm", "600x1200mm"],
            applications: ["Grand Foyers", "Luxury Showrooms", "Ballrooms", "Statement Living Rooms"],
        },
        {
            name: "Wood Surface",
            slug: "wood-surface",
            image: woodTile,
            description: "Inspired by the organic grain and warmth of natural timber, our Wood surface collection delivers authentic texture and earthy warmth combined with the enduring resilience of porcelain.",
            finishes: ["Embossed Grain", "Natural Timber", "Rustic Wood"],
            sizes: ["200x1200mm", "600x1200mm"],
            applications: ["Bedrooms", "Terraces & Balconies", "Dining Areas", "Cozy Lounges"],
        },
    ],
};

export const PRODUCTS_CONTENT = SURFACES_CONTENT;
