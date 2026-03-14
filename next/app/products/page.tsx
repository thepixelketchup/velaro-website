
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import wallTiles from "@/assets/tiles-wall-collection.jpg";
import floorTiles from "@/assets/tiles-floor-collection.jpg";
import decorativeTiles from "@/assets/tiles-decorative-collection.jpg";
import designerTiles from "@/assets/tiles-designer-collection.jpg";
import customTiles from "@/assets/tiles-custom-collection.jpg";
import Link from "next/link";

const collections = [
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
];

const Products = () => {
  return (
    <>
      <PageHero
        title="Collections"
        subtitle="Discover our curated range of premium tile collections, each designed to elevate your architectural vision."
        image={floorTiles.src}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24 md:space-y-32">
            {collections.map((collection, i) => (
              <AnimatedSection key={collection.slug}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Link href={`/products/${collection.slug}`} className="image-reveal block aspect-[4/5]">
                      <img
                        src={collection.image.src}
                        alt={collection.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="label-caps text-muted-foreground mb-3">Collection</p>
                    <h2 className="font-display text-3xl md:text-4xl font-light mb-4">{collection.name}</h2>
                    <p className="body-large text-muted-foreground mb-8">{collection.description}</p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <p className="label-caps text-muted-foreground mb-2">Finishes</p>
                        <div className="flex flex-wrap gap-2">
                          {collection.finishes.map((f) => (
                            <span key={f} className="text-sm border border-border px-3 py-1">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="label-caps text-muted-foreground mb-2">Sizes</p>
                        <div className="flex flex-wrap gap-2">
                          {collection.sizes.map((s) => (
                            <span key={s} className="text-sm border border-border px-3 py-1">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="label-caps text-muted-foreground mb-2">Applications</p>
                        <div className="flex flex-wrap gap-2">
                          {collection.applications.map((a) => (
                            <span key={a} className="text-sm border border-border px-3 py-1">{a}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/products/${collection.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 label-caps hover:bg-primary/90 transition-colors"
                    >
                      View Collection
                    </Link>
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

export default Products;
