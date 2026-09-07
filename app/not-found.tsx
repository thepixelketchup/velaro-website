import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="404 - Page Not Found"
        subtitle="The page you are looking for doesn't exist or has been moved."
        compact={true}
      />

      <section className="section-padding min-h-[40vh] flex items-center justify-center">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Lost in the grid?</h2>
            <p className="body-large text-muted-foreground max-w-xl mx-auto mb-10">
              We couldn't find the page you requested. It might have been removed, had its name changed, or is temporarily unavailable. 
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 label-caps hover:bg-primary/90 transition-colors"
              >
                Return Home <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 label-caps hover:bg-foreground hover:text-background transition-colors"
              >
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
