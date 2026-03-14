'use client'

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import galleryOutdoor from "@/assets/gallery-outdoor.jpg";
import galleryCommercial from "@/assets/gallery-commercial.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectResidence from "@/assets/project-residence.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";
import heroImage from "@/assets/hero-tiles-1.jpg";
import floorTiles from "@/assets/tiles-floor-collection.jpg";
import Image from "next/image";

const categories = ["All", "Living Rooms", "Bathrooms", "Kitchens", "Outdoor", "Commercial"];

const images = [
  { src: galleryLiving, category: "Living Rooms", alt: "Modern living room with tiles" },
  { src: galleryBathroom, category: "Bathrooms", alt: "Luxury bathroom tiles" },
  { src: galleryKitchen, category: "Kitchens", alt: "Kitchen with premium tiles" },
  { src: galleryOutdoor, category: "Outdoor", alt: "Outdoor terrace tiles" },
  { src: galleryCommercial, category: "Commercial", alt: "Commercial lobby tiles" },
  { src: projectHotel, category: "Commercial", alt: "Hotel lobby installation" },
  { src: projectResidence, category: "Living Rooms", alt: "Residential living space" },
  { src: projectRestaurant, category: "Commercial", alt: "Restaurant interior" },
  { src: projectOffice, category: "Commercial", alt: "Office reception" },
  { src: projectShowroom, category: "Commercial", alt: "Tile showroom" },
  { src: heroImage, category: "Living Rooms", alt: "Premium interior" },
  { src: floorTiles, category: "Bathrooms", alt: "Bathroom with floor tiles" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our tiles in beautifully designed spaces — from intimate bathrooms to grand commercial interiors."
        image={galleryLiving.src}
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
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
