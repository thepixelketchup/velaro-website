import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { PRODUCTS_CONTENT } from "@/constants/products";

const Products = () => {
  return (
    <>
      <PageHero
        title={PRODUCTS_CONTENT.hero.title}
        subtitle={PRODUCTS_CONTENT.hero.subtitle}
        image={PRODUCTS_CONTENT.hero.image.src}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24 md:space-y-32">
            {PRODUCTS_CONTENT.collections.map((collection, i) => (
              <AnimatedSection key={collection.slug}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Link href={`/products/${collection.slug}`} className="image-reveal block aspect-4/5">
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
