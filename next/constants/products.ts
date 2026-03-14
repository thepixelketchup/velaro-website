import wallTiles from "@/assets/tiles-wall-collection.jpg";
import floorTiles from "@/assets/tiles-floor-collection.jpg";
import decorativeTiles from "@/assets/tiles-decorative-collection.jpg";
import designerTiles from "@/assets/tiles-designer-collection.jpg";
import customTiles from "@/assets/tiles-custom-collection.jpg";

export const PRODUCTS_CONTENT = {
    hero: {
        title: "Collections",
        subtitle: "Discover our curated range of premium tile collections, each designed to elevate your architectural vision.",
        image: floorTiles,
    },
    collections: [
        {
            name: "Wall Tiles",
            slug: "wall-tiles",
            image: wallTiles,
            description: "Elegant wall surfaces that define your space with texture, pattern, and character.",
            finishes: ["Matte", "Glossy", "Textured", "Satin"],
            sizes: ["30x60cm", "60x120cm", "80x160cm"],
            applications: ["Living Rooms", "Bathrooms", "Feature Walls", "Commercial Spaces"],
        },
        {
            name: "Floor Tiles",
            slug: "floor-tiles",
            image: floorTiles,
            description: "Durable, premium floor surfaces engineered for high-traffic areas with timeless appeal.",
            finishes: ["Matte", "Polished", "Lapato", "Anti-Slip"],
            sizes: ["60x60cm", "80x80cm", "60x120cm", "120x120cm"],
            applications: ["Residential", "Commercial", "Hospitality", "Outdoor"],
        },
        {
            name: "Decorative Tiles",
            slug: "decorative-tiles",
            image: decorativeTiles,
            description: "Artisan-inspired decorative tiles that bring personality and craft to every surface.",
            finishes: ["Hand-Glazed", "Embossed", "Patterned", "Metallic"],
            sizes: ["15x15cm", "20x20cm", "30x30cm"],
            applications: ["Kitchen Backsplash", "Accent Walls", "Borders", "Artistic Installations"],
        },
        {
            name: "Designer Tiles",
            slug: "designer-tiles",
            image: designerTiles,
            description: "Exclusive collaborations with leading architects and designers for statement surfaces.",
            finishes: ["Bespoke", "3D Textured", "Mixed Media", "Carved"],
            sizes: ["Custom", "60x120cm", "120x260cm"],
            applications: ["Luxury Residences", "Boutique Hotels", "High-End Retail", "Art Galleries"],
        },
        {
            name: "Custom Tile Series",
            slug: "custom-series",
            image: customTiles,
            description: "Tailored tile solutions crafted to your exact specifications and design vision.",
            finishes: ["Any Finish", "Custom Color", "Bespoke Texture"],
            sizes: ["Made to Order"],
            applications: ["Any Project", "Unique Installations", "Brand Spaces"],
        },
    ],
};
