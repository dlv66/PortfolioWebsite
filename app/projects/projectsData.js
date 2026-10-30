import pisoCakeThumbnail from "../images/project_thumbnails/PisoCAKE thumbnail.png";
import portfolioWebsiteThumbnail from "../images/project_thumbnails/Portfolio website thumbnail.png";
import myWanderDiaryThumbnail from "../images/project_thumbnails/My Wander Diary thumbnail.png";
import jpdGarageThumbnail from "../images/project_thumbnails/JPDGarage thumbnail.png";
import mvxThumbnail from "../images/project_thumbnails/MVX thumbnail.png";
import agriguardThumbnail from "../images/project_thumbnails/AgriGuard thumbnail.png";
import food360thumbnail from "../images/project_thumbnails/Food360 thumbnail.png";
import academicDesignWorksThumbnail from "../images/project_thumbnails/Academic Design Works thumbnail.png";
import cassetteInlayDesignsThumbnail from "../images/project_thumbnails/Cassette Inlay Designs thumbnail.png";
import commissionedDesignWorksThumbnail from "../images/project_thumbnails/Commissioned Design Works thumbnail.png";
import spotifyPlaylistCoverThumbnail from "../images/project_thumbnails/Spotify Playlist Cover thumbnail.png";

export const projects = [
    {
        slug: "pisocake",
        category: "academic",
        title: "PisoCAKE - Finance Tracking PWA",
        thumbnail: pisoCakeThumbnail,
        subtitle: "(Bachelor's Thesis)",
        description: "A finance-tracking progressive web application (PWA) that enables users to set financial goals, log transactions, and monitor spending. Developed as part of a 4-person thesis team.",
        dates: "May 2024 - July 2025",
        role: ["Lead UI/UX Designer", "Frontend Engineer"],
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
            {
                label: "User Manual",
                url: "/downloadables/HXIL - User Manual - Dela Cruz et al. - PisoCAKE.pdf",
                download: true,
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
        slug: "portfolio-website",
        category: "featured",
        title: "Portfolio Website",
        thumbnail: portfolioWebsiteThumbnail,
        description:
            "My responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
        dates: "",
        // Should add Roles back, after migrating data from single .js file to a MongoDB database.
        context: "Personal Portfolio",
        type: "Website", // Should make this "Responsive Website" after implementing responsive design for mobile viewing.
        techstack: ["React", "Next.js", "Tailwind", "Vercel"],
        team: "Sole developer",
        status: "Work-in-progress",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/dlv66/PortfolioWebsite",
            },
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/9HZ3hTSDEB7VKEmQCKR2n1/Thesis-App-Wireframe-Designs?node-id=356-17803&p=f&t=yb7RxfZtJBNE3JrI-1&scaling=min-zoom&content-scaling=fixed&page-id=46%3A228&starting-point-node-id=356%3A17803&show-proto-sidebar=1",
            },  
            {
                label: "Live Website",
                url: "https://leeroiv.dev",
            }
        ],
        technologies: ["React", "Next.js", "Tailwind", "Vercel", "Figma"],
    },
    {
        slug: "my-wander-diary",
        category: "academic",
        title: "My Wander Diary - Photo-Journal Android Mobile App",
        thumbnail: myWanderDiaryThumbnail,
        description:
            "An Android photo-journal mobile app using Kotlin and Android Studio, supporting the creation, organization, and browsing of travel entries with photos. Co-developed with a project partner.",
        dates: "September 2024 - December 2024",
        role: ["Lead UI/UX Designer", "Software Engineer"],
        context: "MOBDEVE (Mobile Development) Final Project",
        type: "Android Mobile App",
        techstack: ["Kotlin", "Android Studio"],
        team: "2 members",
        status: "Feature-complete",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/frncs-dc/MyWanderDiary",
            },
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/aDq7IaAUUOG7Wq34cODnK6/MOBDEVE---MCO-Draft-1?node-id=16-270&t=nQIQRd1LgJVgxmyQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A270&show-proto-sidebar=1",
            },
            {
                label: "Proposal Document",
                url: "/downloadables/MOBDEVE MCO Proposal (Revised) - My Wander Diary - Dela Cruz and Villamiel.pdf",
                download: true,
            },
        ],
        overview:
            ["My Wander Diary is an Android photo-journal mobile app that allows users to create, organize, and browse travel entries with photos.",
            "As part of a 2-member team, I spearheaded the UI/UX design and frontend development of the mobile app."],
        technologies: ["Kotlin", "Android Studio", "Figma"],
        concepts: ["Android Studio Development", "Wireframing", "User Flows", "Interactive Prototyping"],
        process:
            ["We submitted a project proposal to our professor, outlining the app's purpose, features, and technical requirements.",
            "After receiving approval, we worked on the low-fidelity prototypes of the app using Figma, discussing how the user should be onboarded into the app, as well as how each function should be implemented within the app.",
            "After finalizing the low-fidelity prototypes, we proceeded to create the high-fidelity prototype, which we then implemented in Android Studio using Kotlin, following the designs and user flows we had created."
            ],
    },
    {
        slug: "jpd-garage",
        category: "academic",
        title: "JPDGarage Online Management System",
        thumbnail: jpdGarageThumbnail,
        description:
            "A web-based finance and inventory management system for a motorcycle parts business in Laguna. Co-developed as part of a 9-person team.",
        dates: "September 2023 - April 2024",
        role: ["Lead UI/UX Designer", "Frontend Engineer"],
        context: "CSSWENG (Software Engineering) Course Project",
        type: "Website",
        techstack: ["MongoDB", "Express.js", "React", "Node.js"],
        team: "9 members",
        status: "Feature-complete",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/briangabini/CSSWENG-IMS",
            },
            {
                label: "Figma Canvas",
                url: "https://www.figma.com/design/stJhHOiADNOs09DfryiZyt/Motorcycle-Shop-Inventory-Web-App--Redacted-Copy-?node-id=0-1&t=JZXtFhobYkGkvonA-1"
            },
            {
                label: "Handover Document",
                url: "/downloadables/JPDGarage - Online Management System.pdf",
                download: true,
            },
            
        ],
        overview:
            ["JPDGarage is a web-based finance and inventory management system for JPDGarage, a motorcycle parts business in Siniloan, Laguna, Philippines.",
            "As part of a 9-member team, I led the UI/UX design, and worked on frontend development of the web application."],
        technologies: ["JavaScript", "React", "Bootstrap", "Figma"],
    },
    {
        slug: "mvx",
        category: "academic",
        title: "MVX - Music Rating & Review Website",
        thumbnail: mvxThumbnail,
        description:
            "A full-stack MVP web application built with a 3-person team, allowing users to browse, rate, and review songs, albums, and artists.",
        dates: "January 2023 - April 2023",
        role: ["UI/UX Designer", "Frontend Engineer"],
        context: "CCAPDEV (Web Application Development) Course Project",
        type: "Website",
        techstack: ["Bootstrap", "Node.js", "Express.js", "MongoDB"],
        team: "3 members",
        status: "Feature-complete",
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/dlv66/MVX-Music-Review-CCAPDEV-MCO",
            },
            {
                label: "Prototype Designs",
                url: "https://drive.google.com/file/d/1PUSgo5o4MlMbpxYVfXV-JWv_5vCrqFGF/view?usp=sharing",
            },
        ],
        overview:
            ["MVX is a web-based music review and discovery platform that allows users to browse, rate, and review different songs, albums, and artists.",
            "As part of a 3-member team, I led the UI/UX design, and worked on frontend development of the web application. I also occasionally helped with database implementation.",
            "MVX was the first full-stack project I worked on in university, where my co-developers and I designed and built a complete web application from the ground up."],
        technologies: ["HTML", "CSS3", "EJS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Mongoose", "Canva"],
    },
    {
        slug: "agriguard",
        category: "academic",
        title: "AgriGuard - Farmer & Fisherfolk Support Mobile App Prototype",
        thumbnail: agriguardThumbnail,
        description:
            "A mobile app prototype focused on economic resilience and disaster preparedness for Filipino farmers and fisherfolk, created as part of a 4-person team.",
        dates: "May 2025 - August 2025",
        role: ["Lead UI/UX Designer", "Researcher"],
        context: "CCINOV8 (Innovation and Technology Management) Course Project",
        type: "Prototype Mobile App",
        techstack: ["Figma"],
        team: "5 members",
        status: "Feature-complete prototype",
        links: [
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/3LZA5I1E50jQ0g6SNtacxO/AgriGuard---Minimum-Viable-Prototype?node-id=243-675&t=jGTxTYbXGcge9K7V-1&scaling=scale-down&content-scaling=fixed&page-id=243%3A674&starting-point-node-id=243%3A675&show-proto-sidebar=1",
            },
            {
                label: "Business Pitch Slides",
                url: "/downloadables/CCINOV8 AgriGuard Business Pitch Slides.pdf",
                download: true,
            },
        ],
        overview:
            ["AgriGuard is a mobile app prototype specially focused on providing a direct-to-consumer marketplace to Filipino agricultural workers, while also promoting economic resilience & disaster preparedness.",
            "As part of a 5-member team, I led the application's UI/UX design, basing design decisions from user research and data collected collaboratively with my teammates."],
        technologies: ["Figma"],
    },
    {
        slug: "food360",
        category: "academic",
        title: "Food360 - Sustainable Food Management App Prototype",
        thumbnail: food360thumbnail,
        description:
            "A mobile app prototype designed to help Filipino families manage their home food stocks and consumption, developed as part of a 7-person team.",
        dates: "May 2025 - August 2025",
        role: ["Lead UI/UX Designer", "Researcher"],
        context: "STHCIUX (Human-Computer Interactions and User Experience) Course Project",
        type: "Prototype Mobile App",
        techstack: ["Figma"],
        team: "7 members",
        status: "Feature-complete prototype",    
        links: [
            {
                label: "Figma Prototype",
                url: "https://www.figma.com/proto/KvVyGA37hGxredGt268Lvt/STHCIUX---MCO2---Protoyping--Copy-?node-id=1-2&t=WvZ4aeuHghuUBjXW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
            },
            {
                label: "Needfinding Report",
                url: "/downloadables/STHCIUX Needfinding Report.pdf",
                download: true,
            },
            {
                label: "Design Portfolio Document",
                url: "/downloadables/STHCIUX - MCO2 - Design Portfolio - Final.pdf",
                download: true,
            },
        ],
        overview:
            ["Food360 is a mobile app prototype designed to help Filipino families manage their home food stocks and consumption.",
            "As part of a 7-member team, I led the application's UI/UX design, basing design decisions from user research and data collected collaboratively with my teammates."],
        technologies: ["Figma"],
    },
    {
        slug: "academic-design-works",
        category: "academic",
        title: "Design Works for Various Course Requirements",
        thumbnail: academicDesignWorksThumbnail,
        context: "Various Design Works for College Outputs",
        type: "Graphic Design Outputs",
        description:
            "A compilation of design works created for the fulfillment of different academic course requirements in college.",
        technologies: ["Canva"],
    },
    {
        slug: "commissioned-design-works",
        category: "personal",
        title: "Commissioned Design Works",
        thumbnail: commissionedDesignWorksThumbnail,
        description: "A collection of commissioned design work.",
        technologies: ["Canva"],
    },
    {
        slug: "cassette-mixtape-inlay-designs",
        category: "personal",
        title: "Cassette Mixtape Inlay Designs",
        thumbnail: cassetteInlayDesignsThumbnail,
        description:
            "A compilation of cassette mixtape inlay designs made to be printed out for my personal cassette mixtape collection.",
        technologies: ["Canva"],
    },
    {
        slug: "spotify-playlist-covers",
        category: "personal",
        title: "Spotify-inspired Playlist Covers",
        thumbnail: spotifyPlaylistCoverThumbnail,
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
