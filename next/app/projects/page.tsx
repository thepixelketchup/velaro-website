import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import projectHotel from "@/assets/project-hotel.jpg";
import projectResidence from "@/assets/project-residence.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import Image from "next/image";

const projects = [
    {
        name: "The Grand Atelier",
        location: "Mumbai, India",
        type: "Hotel Lobby",
        image: projectHotel,
        description: "A grand hotel lobby featuring our Calacatta marble-look porcelain in 120x260cm format, creating a seamless expanse of luxury.",
        tiles: "Calacatta Grande Collection",
        architect: "Studio Lotus",
    },
    {
        name: "Villa Sereno",
        location: "Goa, India",
        type: "Residential",
        image: projectResidence,
        description: "A contemporary coastal villa with our Stone Edition floor tiles throughout, blending indoor and outdoor living spaces.",
        tiles: "Stone Edition, Floor Tiles",
        architect: "Architecture BRIO",
    },
    {
        name: "Saffron & Stone",
        location: "Bengaluru, India",
        type: "Restaurant",
        image: projectRestaurant,
        description: "A fine-dining restaurant featuring handcrafted decorative tiles as a dramatic feature wall, complemented by neutral floor surfaces.",
        tiles: "Artisan Decorative Series",
        architect: "Collective Project",
    },
    {
        name: "Vertex Corporate HQ",
        location: "Delhi, India",
        type: "Office",
        image: projectOffice,
        description: "A corporate headquarters with our anti-slip porcelain floors in large format, combining durability with refined aesthetics.",
        tiles: "Urban Loft Collection",
    },
    {
        name: "TerraTile Experience Centre",
        location: "Ahmedabad, India",
        type: "Showroom",
        image: projectShowroom,
        description: "Our flagship showroom designed as an immersive gallery experience, showcasing the full breadth of our tile collections.",
        tiles: "Multiple Collections",
        architect: "TerraTile Design Studio",
    },
    {
        name: "The Azure Spa",
        location: "Jaipur, India",
        type: "Hospitality",
        image: galleryBathroom,
        description: "A luxury spa featuring our waterproof porcelain in calming neutral tones, designed for wet areas and relaxation spaces.",
        tiles: "Aqua Series, Wall & Floor",
    },
];

const Projects = () => {
    return (
        <>
            <PageHero
                title="Projects"
                subtitle="Real-world installations showcasing our tiles in homes, hotels, offices, and commercial spaces."
                image={projectShowroom.src}
            />

            <section className="section-padding">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {projects.map((project, i) => (
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
