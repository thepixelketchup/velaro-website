'use client'

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { GALLERY_CONTENT } from "@/constants/gallery";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? GALLERY_CONTENT.images 
    : GALLERY_CONTENT.images.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        title={GALLERY_CONTENT.hero.title}
        subtitle={GALLERY_CONTENT.hero.subtitle}
        image={GALLERY_CONTENT.hero.image.src}
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-12">
              {GALLERY_CONTENT.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`label-caps px-4 py-2 transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${img.src}-${i}`} delay={i * 0.03}>
                <div className="image-reveal break-inside-avoid">
                  <Image
                    src={img.src}
                    alt={img.alt}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
