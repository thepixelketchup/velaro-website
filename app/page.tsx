"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import { HOME_CONTENT } from "@/constants/home";

const MotionImage = motion(Image);

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <MotionImage
            src={HOME_CONTENT.hero.image}
            alt="Premium tile interior"
            fill
            priority
            className="object-cover"
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
            className="max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          >
            <p className="label-caps text-primary-foreground/70 mb-4">{HOME_CONTENT.hero.label}</p>
            <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-[1.12]">
              <span className="block">Rooted in India.</span>
              <span className="block">Crafted for India.</span>
              <span className="block">Designed for the World.</span>
            </h1>
            <p className="body-large text-primary-foreground/80 mb-10 max-w-2xl">
              {HOME_CONTENT.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 label-caps hover:bg-foreground/90 transition-colors"
              >
                Explore Surfaces <ArrowRight size={14} />
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
              <p className="text-muted-foreground leading-relaxed mb-6">
                {HOME_CONTENT.philosophy.text1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {HOME_CONTENT.philosophy.text2}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="image-reveal aspect-4/5 relative">
                <Image
                  src={HOME_CONTENT.philosophy.image}
                  alt="Founder's Note - Velaro"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-20 md:py-32 border-t border-border/60">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <AnimatedSection>
                <p className="label-caps text-muted-foreground mb-4">{HOME_CONTENT.promises.label}</p>
                <h2 className="heading-section mb-6">{HOME_CONTENT.promises.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {HOME_CONTENT.promises.description}
                </p>

                {/* Brand Statement Callout */}
                <div className="p-6 md:p-8 bg-secondary border-l-2 border-primary">
                  <p className="font-display text-lg font-medium text-foreground leading-snug mb-2">
                    Crafted with purpose, delivered with promise.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From raw earth to architectural excellence, our commitments guide every surface that leaves our facility.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: 5 Promises Rows */}
            <div className="lg:col-span-7 divide-y divide-border/60 border-y border-border/60">
              {HOME_CONTENT.promises.items.map((promise, i) => (
                <AnimatedSection key={promise.title} delay={i * 0.08}>
                  <div className="group py-7 md:py-8 px-4 sm:px-6 hover:bg-secondary/40 transition-colors duration-200">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-display text-base sm:text-lg font-semibold text-primary mt-0.5 shrink-0">
                        {promise.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-card border border-border/70 flex items-center justify-center shrink-0 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                        <promise.icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {promise.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base pl-3.5">
                          {promise.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Surfaces Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <h2 className="heading-section">Our Surfaces</h2>
              </div>
              <Link
                href="/products"
                className="label-caps text-foreground mt-6 md:mt-0 inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View All Surfaces <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_CONTENT.collections.map((collection, i) => (
              <AnimatedSection key={collection.slug} delay={i * 0.05}>
                <div className="group">
                  <div className="image-reveal aspect-3/4 mb-4 relative">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {collection.name}
                  </h3>
                </div>
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
              <div className="image-reveal aspect-4/3 relative">
                <Image
                  src={HOME_CONTENT.technology.image}
                  alt="Tile manufacturing factory"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="label-caps text-muted-foreground mb-4">{HOME_CONTENT.technology.label}</p>
              <h2 className="heading-section mb-6">{HOME_CONTENT.technology.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact / Quality — Terracotta section (70% brand color) */}
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
                  <p className="font-display text-4xl md:text-5xl font-semibold mb-2">{stat.value}</p>
                  <p className="label-caps text-primary-foreground/60">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="heading-section mb-6">{HOME_CONTENT.cta.title}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              {HOME_CONTENT.cta.text}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 label-caps hover:bg-foreground/90 transition-colors"
              >
                Explore Surfaces <ArrowRight size={14} />
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
