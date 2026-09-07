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

export const GALLERY_CONTENT = {
    hero: {
        title: "Gallery",
        subtitle: "Explore our tiles in beautifully designed spaces — from intimate bathrooms to grand commercial interiors.",
        image: galleryLiving,
    },
    categories: ["All", "Living Rooms", "Bathrooms", "Kitchens", "Outdoor", "Commercial"],
    images: [
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
    ],
};
