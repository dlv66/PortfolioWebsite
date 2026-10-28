import pisoCakeThumbnail from "../images/project_thumbnails/PisoCAKE thumbnail.png";
import portfolioWebsiteThumbnail from "../images/project_thumbnails/Portfolio website thumbnail.png";

// import myWanderDiaryThumbnail from "../images/project_thumbnails/My Wander Diary thumbnail.png";
// import jpdGarageThumbnail from "../images/project_thumbnails/JPD Garage thumbnail.png";
// import mvxThumbnail from "../images/project_thumbnails/MVX thumbnail.png";
// import agriguardThumbnail from "../images/project_thumbnails/AgriGuard thumbnail.png";
// import academicDesignWorksThumbnail from "../images/project_thumbnails/Academic Design Works thumbnail.png";


export const projects = [
    {
        slug: "pisocake",
        category: "academic",
        title: "PisoCAKE - Finance Tracking PWA",
        thumbnail: pisoCakeThumbnail,
        subtitle: "(Bachelor's Thesis)",
        description: "A finance-tracking progressive web application (PWA) that enables users to set financial goals, log transactions, and monitor spending. Developed as part of a 4-person thesis team.",
        dates: "May 2024 - July 2025",
        role: ["UI/UX Designer", "Frontend Engineer"],
        context: "Bachelor's Thesis Project",
        type: "Progressive Web Application (PWA)",
        techstack: ["React", "Supabase", "Vercel"],
        team: "4 members",
        status: "Feature-complete",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/CarlMatthewVerano/THS-ST-PisoCAKE",
            },
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/9HZ3hTSDEB7VKEmQCKR2n1/Thesis-App-Wireframe-Designs?node-id=356-17803&p=f&t=yb7RxfZtJBNE3JrI-1&scaling=min-zoom&content-scaling=fixed&page-id=46%3A228&starting-point-node-id=356%3A17803&show-proto-sidebar=1",
            },
            {
                label: "Video Presentation",
                url: "https://www.youtube.com/watch?v=G_0gqIT8K3M",
            },
        ],
        overview:
            ["PisoCAKE is a finance-tracking progressive web application (PWA) that enabled users to set financial goals, log transactions, and monitor spending.",
            "As part of a thesis team, I led the end-to-end UI/UX design and iterative prototyping, producing high-fidelity prototypes and translating them into a production-ready frontend.",
            "I also implemented responsive component-based architecture and contributed to data model design."],
        technologies: ["React", "Next.js", "Typescript", "Tailwind", "Figma"],
        concepts: ["Wireframing", "Iterative Design", "User Flows", "Responsive Design", "Interactive Prototyping", "Usability Testing"],
        process:
            ["Our team adopted the double-diamond design framework as the methodological foundation for the design and development of our thesis work.", 
            "After performing necessary research on existing finance-tracking apps, a need-finding study was conducted to further understand existing gaps and potential improvements that could be made to finance-tracking apps.",
            "I also implemented responsive component-based architecture and contributed to data model design.",
            "After the PWA reached a feature-complete state, the team conducted a 2-week user field study to evaluate real-world usability and financial tracking effectiveness."],
    },
    {
        slug: "my-wander-diary",
        category: "academic",
        title: "My Wander Diary - Photo-Journal Android Mobile App",
        description:
            "An Android photo-journal mobile app using Kotlin and Android Studio, supporting the creation, organization, and browsing of travel entries with photos. Co-developed with a project partner.",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/frncs-dc/MyWanderDiary",
            },
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/aDq7IaAUUOG7Wq34cODnK6/MOBDEVE---MCO-Draft-1?node-id=16-270&t=nQIQRd1LgJVgxmyQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A270&show-proto-sidebar=1",
            },
        ],
        technologies: ["Kotlin", "Android Studio", "Figma"],
    },
    {
        slug: "jpd-garage",
        category: "academic",
        title: "JPD Garage Online Management System",
        description:
            "A web-based finance and inventory management system for a motorcycle parts business in Laguna. Co-developed as part of a 9-person team.",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/briangabini/CSSWENG-IMS",
            },
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/kaXc82UqQPUg6YVhUMMfkh/Motorcycle-Shop-Inventory-Web-App?node-id=4-38&t=zANz08E0U7j1GUSD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A38"
            },
        ],
        technologies: ["JavaScript", "React", "Bootstrap", "Figma"],
    },
    {
        slug: "mvx",
        category: "academic",
        title: "MVX - Music Rating & Review Website",
        description:
            "A full-stack MVP web application built with a 3-person team, allowing users to browse, rate, and review songs, albums, and artists.",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/dlv66/MVX-Music-Review-CCAPDEV-MCO",
            },
            {
                label: "Canva Prototype",
                url: "",
            },
        ],
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
        slug: "food360",
        category: "academic",
        title: "Food360 - Sustainable Food Management App Prototype",
        description:
            "A mobile app prototype designed to help Filipino families manage their home food stocks and consumption, developed as part of a X-person team.",
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
        thumbnail: portfolioWebsiteThumbnail,
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
