import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { PROJECTS_CONTENT } from "@/constants/projects";

const Projects = () => {
    return (
        <>
            <PageHero
                title={PROJECTS_CONTENT.hero.title}
                subtitle={PROJECTS_CONTENT.hero.subtitle}
                image={PROJECTS_CONTENT.hero.image.src}
            />

            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {PROJECTS_CONTENT.list.map((project, i) => (
                            <AnimatedSection key={project.name} delay={i % 2 === 1 ? 0.1 : 0}>
                                <div className="group">
                                    <div className="image-reveal aspect-4/3 mb-5">
                                        <Image src={project.image} alt={project.name} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="label-caps text-muted-foreground mb-1">{project.type}</p>
                                    <h3 className="font-display text-2xl font-light mb-2">{project.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                                    <p className="text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="label-caps text-muted-foreground">Tiles:</span>
                                        <span className="text-sm">{project.tiles}</span>
                                    </div>
                                    {project.architect && (
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            <span className="label-caps text-muted-foreground">Architect:</span>
                                            <span className="text-sm">{project.architect}</span>
                                        </div>
                                    )}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
