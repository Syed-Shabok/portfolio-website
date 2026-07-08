export const projects = [
  // Idea Vault - Startup Idea Sharing Platform
  {
    id: "idea-vault",
    title: "Idea Vault — Startup Idea Sharing Platform",
    shortDescription:
      "A full-stack platform where entrepreneurs can share, discover, and discuss startup ideas with secure authentication, community engagement, and trending insights.",

    description:
      "Idea Vault is a modern MERN-based startup idea sharing platform that enables users to publish innovative ideas, explore community submissions, engage through comments and upvotes, and manage their own ideas securely.",

    fullDescription:
      "Idea Vault was built to provide a collaborative space for entrepreneurs, developers, and innovators to share startup concepts and receive community feedback. The application features JWT-based authentication using Better Auth and JOSE, protected API routes, idea management, commenting, engagement tracking with upvotes, search and category filtering, and a trending algorithm based on popularity and recency. The frontend is built with Next.js App Router, HeroUI, and Tailwind CSS, while the backend is powered by Express.js and MongoDB, making the application scalable, responsive, and production-ready.",

    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "JOSE",
      "Tailwind CSS",
      "HeroUI",
      "React Hot Toast",
    ],

    heroImage: "https://i.ibb.co/VYwLYKC5/idea-vault-mockup.png",

    gallery: [
      "https://i.ibb.co/LhZR7dfL/idea-vault-home.png",
      "https://i.ibb.co/r2TwTSfY/idea-vault-ideas-page.png",
      "https://i.ibb.co/Z1f69ZFN/idea-vault-create-idea.png",
    ],

    challenges: [
      {
        title: "Secure Authentication & Protected APIs",
        description:
          "Implemented JWT authentication with Better Auth, JOSE, and JWKS while securing Express API routes using custom middleware for authorization.",
      },
      {
        title: "Deployment & Environment Configuration",
        description:
          "Resolved deployment issues on Vercel by correctly configuring environment variables, authentication endpoints, and client-server communication across production environments.",
      },
      {
        title: "Community Engagement System",
        description:
          "Designed an idea interaction system supporting comments, upvotes, search, filtering, and trending ideas while maintaining a responsive user experience.",
      },
    ],

    stats: {
      commits: "N/A",
      contributors: "1",
      uptime: "N/A",
      stars: "N/A",
    },

    links: {
      demo: "https://idea-vault-client-pink.vercel.app/",
      github: "https://github.com/Syed-Shabok/ideaVault",
    },

    future: [
      "Introduce Admin and Moderator roles for platform management.",
      "Implement a more advanced trending algorithm based on engagement score.",
      "Add notifications for comments and upvotes.",
      "Allow image uploads instead of only image URLs.",
      "Introduce user profiles with achievements and contribution history.",
    ],
  },
  // Tikify - Online Ticket Booking Platform
  {
    id: "tikify",
    title: "Tikify — Online Ticket Booking Platform",
    shortDescription:
      "A comprehensive, full-stack platform for booking and managing transport tickets with secure Stripe transactions, dynamic route filtering, and comprehensive role-based access control.",
    description:
      "Tikify provides a seamless, secure ecosystem where passengers can search, filter, and book travel tickets (Bus, Train, Launch, Flight) across a network of approved transit options. The system defines three distinctive roles—Passenger, Vendor, and Admin—each with dedicated access privileges and interactive management interfaces.",
    fullDescription:
      "Built with the MERN stack and Next.js App Router, Tikify offers an advanced ticket discovery interface with real-time multi-variable parameter search, category filtering, and server-side pagination. It features role-segregated dashboards for Passengers to track bookings and checkout via Stripe, Vendors to manage inventory and view revenue analytics, and Admins to govern platform security and global approvals. The application ensures secure authentication via Better-Auth and enforces strict Zero-Trust data ownership across all API routes.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better-Auth",
      "Stripe API",
      "Tailwind CSS",
      "HeroUI",
      "Framer Motion",
    ],
    heroImage: "https://i.ibb.co/MxXQB3pJ/tikify-mockup.png",
    gallery: [
      "https://i.ibb.co/tMXDRSYD/tikify-all-tickets.png",
      "https://i.ibb.co/Gf69rkL3/tikify-homepage.png",
      "https://i.ibb.co/WNsjHKjk/admin-dashboard.png",
      "https://i.ibb.co/ccRYTt7P/passenger-1.png",
      "https://i.ibb.co/TBQX8wGZ/passenger-2.png",
      "https://i.ibb.co/7JxDvDGm/passenger-3.png",
      "https://i.ibb.co/yBf7bjh3/vendor.png",
    ],
    challenges: [
      {
        title: "Secure Authentication & Data Ownership",
        description:
          "Implemented a Zero-Trust architecture across asymmetric client/server environments, intercepting Better-Auth JWT strings and enforcing strict identity matching on all backend routes.",
      },
      {
        title: "Complex Role-Based Dashboards",
        description:
          "Developed deeply segregated interfaces for Passengers, Vendors, and Admins, handling custom workflows like dynamic Stripe checkouts, inventory formulation with ImgBB uploads, and platform-wide fraud eradication.",
      },
      {
        title: "Dynamic Route Discovery",
        description:
          "Engineered an advanced search interface featuring multi-variable parameter filtering, price sorting, live countdown mechanics, and optimized server-side pagination to minimize network overhead.",
      },
    ],
    stats: {
      commits: "N/A",
      contributors: "1",
      uptime: "N/A",
      stars: "N/A",
    },
    links: {
      demo: "https://tikify-client.vercel.app/",
      github: "https://github.com/Syed-Shabok/tikify-client",
    },
    future: [
      "Implement real-time seat selection with interactive vehicle mapping.",
      "Add automated email and SMS notifications for booking confirmations and departure reminders.",
      "Integrate a review and rating system for verified transit operators.",
      "Expand payment gateways to support localized mobile financial services.",
    ],
  },
  // Event Management Platform
  {
    id: "event-management-platform",
    title: "Eventify — Event Management Platform",
    shortDescription:
      "A full-stack platform to discover, track, and manage local events in Bangladesh with secure authentication and real-time browsing.",
    description:
      "The Event Listing Platform is a full-stack web application built to help users in Bangladesh discover and manage local events such as concerts, workshops, and community gatherings. It offers a seamless browsing experience with filtering, tracking features, and secure authentication.",
    fullDescription:
      "This project was built to simplify how users discover and engage with local events. It features a secure JWT-based authentication system, dynamic event discovery with filters for category, date, and location, and a personalized event tracking system. The backend is powered by Node.js, Express, and MongoDB, while the frontend is built using React 19 with Zustand for state management and TailwindCSS for responsive UI. Cloudinary is integrated for efficient image handling, making the platform scalable and production-ready.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Zustand",
      "TailwindCSS",
      "DaisyUI",
      "JWT",
      "Bcrypt",
      "Cloudinary",
    ],
    heroImage: "https://i.ibb.co/Kjn3SHpL/imac-screen-mockup.png",
    gallery: [
      "https://i.ibb.co/9kT6QCMk/Event-Management-Platform-1.png",
      "https://i.ibb.co/nqmvDw7Y/Event-Management-Platform-2.png",
      "https://i.ibb.co/ks6bYbQC/Event-Management-Platform-3.png",
      "https://i.ibb.co/Xkv6DsGh/Event-Management-Platform-4.png",
    ],
    challenges: [
      {
        title: "Secure Authentication Flow",
        description:
          "Implementing JWT-based authentication with secure cookie storage and password hashing using bcrypt while maintaining a smooth UX.",
      },
      {
        title: "Scalable Event Filtering",
        description:
          "Designing efficient filtering and pagination logic to handle large event datasets without performance issues.",
      },
      {
        title: "Image Upload Integration",
        description:
          "Integrating Cloudinary for optimized event image uploads while ensuring fast load times and reliability.",
      },
    ],
    stats: {
      commits: "N/A",
      contributors: "N/A",
      uptime: "N/A",
      stars: "N/A",
    },
    links: {
      demo: "https://event-listing-frontend.vercel.app/",
      github: "https://github.com/Syed-Shabok/Event-Listing-Site",
    },
    future: [
      "Add real-time event notifications using WebSockets.",
      "Introduce admin dashboard for event moderation and analytics.",
      "Enable map-based event discovery with geolocation support.",
      "Add social sharing and RSVP features for users.",
    ],
  },

  // {
  //   id: "nexus-cloud",
  //   title: "Nexus Cloud Explorer",
  //   shortDescription: "A visualization tool for complex multi-cloud infrastructures.",
  //   description: "Nexus Cloud Explorer provides a unified interface for managing resources across AWS, GCP, and Azure. It uses advanced graphing algorithms to visualize dependencies and costs in real-time.",
  //   fullDescription: "This project was born out of the need for better visibility in hybrid cloud setups. It features a custom DSL for querying infrastructure state and a high-performance rendering engine for large-scale graphs.",
  //   tags: ["Node.js", "Three.js", "Terraform", "Go"],
  //   heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7VGLmFSu4VtOIwhgO5QWr36IB4s5DJuxLDOIRG_EpmqWovqKk0PvFhFDkmlZasmCF4RDuzqnNb_Kg5m90OX3aTu83uzl78RmmKi1MSBFFK4kCpvztvcnBL9k96voAqNcVh5LUCuUWYO9AMWTf7LWgcS8wElU0S6HWf1sdNaHkYilgPJoyAkLMOq55tu27VJbnaztM28-zK0Pt-Zh20qvlqyaAmdNxnY5BJsHurilnJ8KPKd-V7Akbe4H-PLy0pllAXv6WDGZvRnE",
  //   gallery: [],
  //   challenges: [],
  //   stats: {
  //     commits: "320+",
  //     contributors: "5",
  //     uptime: "100%",
  //     stars: "850"
  //   },
  //   links: {
  //     demo: "#",
  //     github: "#"
  //   },
  //   future: []
  // }
];
