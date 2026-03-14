import { FileText, Ruler, BookOpen, Image, LucideIcon } from "lucide-react";

export interface ResourceCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const RESOURCES_PAGE_CONTENT = {
  hero: {
    title: "Resources",
    subtitle: "Technical specifications, catalogs, lookbooks, and guides to support your project.",
  },
  categories: [
    {
      icon: FileText,
      title: "Product Catalogs",
      description: "Complete catalogs of all our tile collections with specifications, colors, and applications.",
      items: ["Wall Tiles Catalog 2026", "Floor Tiles Catalog 2026", "Designer Collection Lookbook", "Custom Series Brochure"],
    },
    {
      icon: Ruler,
      title: "Technical Specifications",
      description: "Detailed technical data sheets for architects, engineers, and contractors.",
      items: ["Porcelain Stoneware Specs", "Ceramic Tiles Data Sheet", "Anti-Slip Ratings Guide", "Chemical Resistance Chart"],
    },
    {
      icon: BookOpen,
      title: "Installation Guides",
      description: "Step-by-step installation guides for different tile types and applications.",
      items: ["Large Format Installation", "Outdoor Tile Guide", "Wet Area Installation", "Adhesive & Grout Guide"],
    },
    {
      icon: Image,
      title: "Lookbooks",
      description: "Curated visual inspiration featuring real installations and design concepts.",
      items: ["Residential Spaces 2026", "Hospitality Edition", "Commercial Interiors", "Outdoor Living"],
    },
  ] as ResourceCategory[],
};
