import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { Download, FileText, BookOpen, Ruler, Image } from "lucide-react";

const resources = [
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
];

const Resources = () => {
  return (
    <>
      <PageHero title="Resources" subtitle="Technical specifications, catalogs, lookbooks, and guides to support your project." />

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {resources.map((category, i) => (
              <AnimatedSection key={category.title} delay={i * 0.05}>
                <div className="border-t border-border pt-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <category.icon size={28} className="mb-4 text-foreground" />
                      <h2 className="font-display text-2xl font-light mb-3">{category.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.items.map((item) => (
                          <button
                            key={item}
                            className="flex items-center justify-between bg-secondary p-4 hover:bg-accent transition-colors group text-left"
                          >
                            <span className="text-sm">{item}</span>
                            <Download size={16} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-3" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
