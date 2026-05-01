export const projects = [
  // Event Management Platform
  {
    id: "event-management-platform",
    title: "Event Management Platform",
    shortDescription: "A full-stack platform to discover, track, and manage local events in Bangladesh with secure authentication and real-time browsing.",
    description: "The Event Listing Platform is a full-stack web application built to help users in Bangladesh discover and manage local events such as concerts, workshops, and community gatherings. It offers a seamless browsing experience with filtering, tracking features, and secure authentication.",
    fullDescription: "This project was built to simplify how users discover and engage with local events. It features a secure JWT-based authentication system, dynamic event discovery with filters for category, date, and location, and a personalized event tracking system. The backend is powered by Node.js, Express, and MongoDB, while the frontend is built using React 19 with Zustand for state management and TailwindCSS for responsive UI. Cloudinary is integrated for efficient image handling, making the platform scalable and production-ready.",
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
      "Cloudinary"
    ],
    heroImage: "https://i.ibb.co/Kjn3SHpL/imac-screen-mockup.png",
    gallery: ["https://i.ibb.co/9kT6QCMk/Event-Management-Platform-1.png", "https://i.ibb.co/nqmvDw7Y/Event-Management-Platform-2.png", "https://i.ibb.co/ks6bYbQC/Event-Management-Platform-3.png", "https://i.ibb.co/Xkv6DsGh/Event-Management-Platform-4.png"],
    challenges: [
      {
        title: "Secure Authentication Flow",
        description: "Implementing JWT-based authentication with secure cookie storage and password hashing using bcrypt while maintaining a smooth UX."
      },
      {
        title: "Scalable Event Filtering",
        description: "Designing efficient filtering and pagination logic to handle large event datasets without performance issues."
      },
      {
        title: "Image Upload Integration",
        description: "Integrating Cloudinary for optimized event image uploads while ensuring fast load times and reliability."
      }
    ],
    stats: {
      commits: "N/A",
      contributors: "N/A",
      uptime: "N/A",
      stars: "N/A"
    },
    links: {
      demo: "https://event-listing-frontend.vercel.app/",
      github: "https://github.com/Syed-Shabok/Event-Listing-Site"
    },
    future: [
      "Add real-time event notifications using WebSockets.",
      "Introduce admin dashboard for event moderation and analytics.",
      "Enable map-based event discovery with geolocation support.",
      "Add social sharing and RSVP features for users."
    ]
  },
  // Books Vibe
  {
    id: "books-vibe",
    title: "Books Vibe - Book Management App",
    shortDescription: "A modern book management app to track reading progress, organize collections, and visualize reading stats.",
    description: "Books Vibe is a React-based book management web application designed for book lovers to explore, organize, and track their reading journey through Read Lists and Wishlists with a clean and responsive UI.",
    fullDescription: "Books Vibe acts as a personal digital library assistant that allows users to browse a curated collection of books, view detailed metadata like ratings, publisher, pages, and tags, and organize them into Read and Wishlist categories. It uses Context API for global state management and ensures smooth UI updates without duplication. The app also includes sorting features and data visualization to help users better understand their reading habits.",
    tags: [
      "React",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "daisyUI",
      "Vite",
      "Recharts",
      "React Toastify",
      "React Tabs",
      "react-icons"
    ],
    heroImage: "https://i.ibb.co/zV6KHnFC/Book-Vibe-Mockup.png",
    gallery: ["https://i.ibb.co/9kS02ggp/Book-Vibe-1.png", "https://i.ibb.co/9mY5dNyr/Book-Vibe-2.png", "https://i.ibb.co/chvgPJKP/Book-Vibe-3.png", "https://i.ibb.co/YFqcrG54/Book-Vibe-4.png"],
    challenges: [
      {
        title: "Global State Synchronization",
        description: "Managing Read List and Wishlist consistently across multiple components using Context API without data duplication or sync issues."
      },
      {
        title: "Dynamic Sorting System",
        description: "Implementing multi-criteria sorting (rating, year, pages) with instant UI updates while maintaining performance."
      },
      {
        title: "Data Visualization Integration",
        description: "Integrating Recharts to visually represent reading data in a meaningful and responsive way."
      }
    ],
    stats: {
      commits: "N/A",
      contributors: "N/A",
      uptime: "N/A",
      stars: "N/A"
    },
    links: {
      demo: "https://book-vibes-project.netlify.app/",
      github: "https://github.com/Syed-Shabok/Book-Vibe-Project"
    },
    future: [
      "Add user authentication for personalized libraries.",
      "Introduce cloud sync for reading lists across devices.",
      "Add recommendation engine based on reading history.",
      "Enable book reviews and community ratings."
    ]
  },
  // KeenKeeper
  {
    id: "keenkeeper",
    title: "KeenKeeper — Friendship Tracker",
    shortDescription: "A friendship management app that tracks interactions, reminds follow-ups, and visualizes relationship activity.",
    description: "KeenKeeper is a modern friendship management web application designed to help users maintain meaningful relationships by tracking interactions like calls, texts, and video chats, along with reminders and analytics.",
    fullDescription: "KeenKeeper helps users stay connected with friends by logging interactions such as calls, texts, and video conversations. It provides a timeline of all interactions, personalized friendship tracking, and analytics dashboards to visualize engagement patterns over time. The app includes a responsive UI with friend cards, detailed friend profiles, and quick interaction actions that automatically update timelines and stats in real time.",
    tags: [
      "React.js",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "React Icons",
      "Vercel"
    ],
    heroImage: "https://i.ibb.co/S7NT165T/Keen-Keeper-Mockup.png",
    gallery: ["https://i.ibb.co/zVbpCj7m/Keen-Keeper-1.png", "https://i.ibb.co/jZMYh3w9/Keen-Keeper-2.png", "https://i.ibb.co/Tq0wM5F4/Keen-Keeper-3.png"],
    challenges: [
      {
        title: "Real-time Interaction Tracking",
        description: "Designing a system to log interactions (call, text, video) and instantly update timelines and statistics across the app."
      },
      {
        title: "State Management Across Views",
        description: "Managing global friendship and interaction data efficiently using Context API without performance issues."
      },
      {
        title: "Analytics Visualization",
        description: "Implementing meaningful friendship insights using Recharts while keeping the UI simple and responsive."
      }
    ],
    stats: {
      commits: "N/A",
      contributors: "N/A",
      uptime: "N/A",
      stars: "N/A"
    },
    links: {
      demo: "https://thekeenkeeper.vercel.app",
      github: "https://github.com/Syed-Shabok/PH-B13-A07"
    },
    future: [
      "Add push notification reminders for overdue friends.",
      "Introduce AI-based relationship health insights.",
      "Enable cloud sync and multi-device support.",
      "Add calendar integration for scheduling check-ins."
    ]
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
