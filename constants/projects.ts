import projectHotel from "@/assets/project-hotel.jpg";
import projectResidence from "@/assets/project-residence.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectShowroom from "@/assets/project-showroom.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";

export const PROJECTS_CONTENT = {
    hero: {
        title: "Projects",
        subtitle: "Real-world installations showcasing our tiles in homes, hotels, offices, and commercial spaces.",
        image: projectShowroom,
    },
    list: [
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
    ],
};
