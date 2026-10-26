export const projects = [
    {
        slug: "pisocake",
        category: "academic",
        title: "PisoCAKE - Finance Tracking PWA",
        subtitle: "(Bachelor's Thesis)",
        description:
            "A finance tracking progressive web application that enabled users to set financial goals, log transactions, and monitor spending. Co-developed as a thesis project in a 4-person team..",
        technologies: ["TypeScript", "React", "Next.js", "Tailwind", "Figma"],
    },
    {
        slug: "my-wander-diary",
        category: "academic",
        title: "My Wander Diary - Photo-Journal Android Mobile App",
        description:
            "An Android photo-journal mobile app using Kotlin and Android Studio, supporting the creation, organization, and browsing of travel entries with photos. Co-developed with a project partner.",
        technologies: ["Kotlin", "Android Studio", "Figma"],
    },
    {
        slug: "jpd-garage",
        category: "academic",
        title: "JPD Garage Online Management System",
        description:
            "A web-based finance and inventory management system for a motorcycle parts business in Laguna. Co-developed as part of a 9-person team.",
        technologies: ["JavaScript", "React", "Bootstrap", "Figma"],
    },
    {
        slug: "mvx",
        category: "academic",
        title: "MVX - Music Rating & Review Website",
        description:
            "A full-stack MVP web application built with a 3-person team, allowing users to browse, rate, and review songs, albums, and artists.",
        technologies: ["HTML", "CSS", "EJS", "Express.js", "Node.js", "MongoDB", "Canva"],
    },
    {
        slug: "agriguard",
        category: "academic",
        title: "AgriGuard - Farmer & Fisherfolk Support Mobile App Prototype",
        description:
            "A mobile app prototype focused on economic resilience and disaster preparedness for Filipino farmers and fisherfolk, created as part of a 4-person team.",
        technologies: ["Figma"],
    },
    {
        slug: "academic-design-works",
        category: "academic",
        title: "Design Works for Various Course Requirements",
        description:
            "A compilation of design works created for the fulfillment of different academic course requirements in college.",
        technologies: ["Canva"],
    },
    {
        slug: "portfolio-website",
        category: "personal",
        title: "Portfolio Website",
        description:
            "My responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
        technologies: ["React", "Next.js", "Tailwind", "Vercel", "Figma"],
    },
    {
        slug: "cassette-mixtape-inlay-designs",
        category: "personal",
        title: "Cassette Mixtape Inlay Designs",
        description:
            "A compilation of cassette mixtape inlay designs made to be printed out for my personal cassette mixtape collection.",
        technologies: ["Canva"],
    },
    {
        slug: "commissioned-design-works",
        category: "personal",
        title: "Commissioned Design Works",
        description: "A collection of commissioned design work.",
        technologies: ["Canva"],
    },
    {
        slug: "spotify-playlist-covers",
        category: "personal",
        title: "Spotify-inspired Playlist Covers",
        description:
            "A compilation of playlist covers inspired by the design language of Spotify's official playlist covers.",
        technologies: ["Canva"],
    },
    {
        slug: "other-design-works",
        category: "personal",
        title: "Other Design Works",
        description: "A compilation of other design works.",
        technologies: ["Figma"],
    },
];

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}
