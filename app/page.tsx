"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { HOME_CONTENT } from "@/constants/home";
import { PROJECTS_CONTENT } from "@/constants/projects";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <motion.img
            src={HOME_CONTENT.hero.image.src}
            alt="Premium tile interior"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/60 via-foreground/30 to-transparent" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl"
          >
            <p className="label-caps text-primary-foreground/70 mb-4">{HOME_CONTENT.hero.label}</p>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6">
              {HOME_CONTENT.hero.title}
            </h1>
            <p className="body-large text-primary-foreground/80 mb-10 max-w-lg">
              {HOME_CONTENT.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 label-caps hover:bg-primary-foreground/90 transition-colors"
              >
                Explore Collections <ArrowRight size={14} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-4 label-caps hover:bg-primary-foreground/10 transition-colors"
              >
                {HOME_CONTENT.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <p className="label-caps text-muted-foreground mb-4">{HOME_CONTENT.philosophy.label}</p>
              <h2 className="heading-section mb-6">{HOME_CONTENT.philosophy.title}</h2>
              <p className="body-large text-muted-foreground mb-6">
                {HOME_CONTENT.philosophy.text1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {HOME_CONTENT.philosophy.text2}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="image-reveal aspect-4/5">
                <img
                  src={HOME_CONTENT.philosophy.image.src}
                  alt="TerraTile craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="label-caps text-muted-foreground mb-4">Collections</p>
                <h2 className="heading-section">Our Products</h2>
              </div>
              <Link
                href="/products"
                className="label-caps text-foreground mt-6 md:mt-0 inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View All Collections <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_CONTENT.collections.slice(0, 3).map((collection, i) => (
              <AnimatedSection key={collection.slug} delay={i * 0.1}>
                <Link href={`/products/${collection.slug}`} className="group block">
                  <div className="image-reveal aspect-3/4 mb-4">
                    <img
                      src={collection.image.src}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium group-hover:text-muted-foreground transition-colors">
                    {collection.name}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {HOME_CONTENT.collections.slice(3).map((collection, i) => (
              <AnimatedSection key={collection.slug} delay={i * 0.1}>
                <Link href={`/products/${collection.slug}`} className="group block">
                  <div className="image-reveal aspect-video mb-4">
                    <img
                      src={collection.image.src}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl font-medium group-hover:text-muted-foreground transition-colors">
                    {collection.name}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology / Manufacturing */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="image-reveal aspect-4/3">
                <Image
                  src={HOME_CONTENT.hero.image}
                  alt="Tile manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="label-caps text-muted-foreground mb-4">{HOME_CONTENT.technology.label}</p>
              <h2 className="heading-section mb-6">{HOME_CONTENT.technology.title}</h2>
              <p className="body-large text-muted-foreground mb-8">
                {HOME_CONTENT.technology.text}
              </p>
              <div className="space-y-4">
                {HOME_CONTENT.technology.items.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />
                    <span className="font-body text-sm">{tech}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 label-caps mt-8 text-foreground hover:gap-3 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact / Quality */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="label-caps text-primary-foreground/60 mb-4">{HOME_CONTENT.impact.label}</p>
              <h2 className="heading-section">{HOME_CONTENT.impact.title}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {HOME_CONTENT.impact.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <stat.icon size={28} className="mx-auto mb-4 text-primary-foreground/60" />
                  <p className="font-display text-4xl md:text-5xl font-light mb-2">{stat.value}</p>
                  <p className="label-caps text-primary-foreground/60">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="label-caps text-muted-foreground mb-4">Featured Work</p>
                <h2 className="heading-section">Projects</h2>
              </div>
              <Link
                href="/projects"
                className="label-caps text-foreground mt-6 md:mt-0 inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_CONTENT.list.slice(0, 3).map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <Link href="/projects" className="group block">
                  <div className="image-reveal aspect-4/3 mb-4">
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="label-caps text-muted-foreground mb-1">{project.type}</p>
                  <h3 className="font-display text-xl font-medium group-hover:text-muted-foreground transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Media / Recognition */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label-caps text-muted-foreground text-center mb-10">Featured In</p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {HOME_CONTENT.featuredIn.map((pub) => (
                <span key={pub} className="font-display text-lg md:text-xl text-muted-foreground/60 font-light italic">
                  {pub}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="heading-section mb-6">{HOME_CONTENT.cta.title}</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10">
              {HOME_CONTENT.cta.text}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 label-caps hover:bg-primary/90 transition-colors"
              >
                Explore Products <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 label-caps hover:bg-foreground hover:text-background transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
