export const projects = [
  {
    id: "quantum-ledger",
    title: "Quantum Ledger v2.0",
    shortDescription: "High-performance distributed ledger system for sub-millisecond transaction processing.",
    description: "The Quantum Ledger is a high-performance distributed ledger system designed for sub-millisecond transaction processing and secure cryptographic auditing. Built as a successor to traditional monolithic financial databases, this project leverages memory-safe RUST architecture to handle concurrent data streams without bottlenecks.",
    fullDescription: "I developed this system to bridge the gap between legacy banking security and modern cloud scalability. The core engine is containerized, allowing for seamless horizontal scaling across multi-region AWS environments, while the frontend provides a real-time visualization of network health and throughput.",
    tags: ["Rust", "WebAssembly", "PostgreSQL", "React", "Docker"],
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7VGLmFSu4VtOIwhgO5QWr36IB4s5DJuxLDOIRG_EpmqWovqKk0PvFhFDkmlZasmCF4RDuzqnNb_Kg5m90OX3aTu83uzl78RmmKi1MSBFFK4kCpvztvcnBL9k96voAqNcVh5LUCuUWYO9AMWTf7LWgcS8wElU0S6HWf1sdNaHkYilgPJoyAkLMOq55tu27VJbnaztM28-zK0Pt-Zh20qvlqyaAmdNxnY5BJsHurilnJ8KPKd-V7Akbe4H-PLy0pllAXv6WDGZvRnE",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv10Sp9RrbdZsG7DqfTx7-qRNQbb5fwpuDUQDmYknvdx_9vva_zYz1Os2y0eUV_g7kk9_Rp1j5KWAE1ZTRjBDr6M6rJ_epRJga48seks5cf09bBBzxlM_qVh9Nr0d_boO10joNXYMdLGZUn-YgLMjD75DHAVXRumcOVN8c3Y7RFviP7mb-dIzxp6wEcZjRG2c9cOmXYfN3ujUYg5YtJbhVtzHsYmuILSP6f3vDjWS0So6CVJkkcePlwuM_fyBBcXsPpzkPjBg0kmI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1mMuBIquf9XBeSC9aoh5LlCX5lAYF4TYFglM_dzKdHbQ6NprCQaCV0dErIe0zFmr1HzHCcabBNAjNYhdAv7k-A-UZoxW3laxv05Si7uIFHcyqk_fefKfwCqVWeWEZRmH7q98dWB10pw0o-jQV1Du_-67B7z3k-HnenZcTmZo1fztOs_gSjuF-OcieKp4VLqzvGVygJEJT_t2RhRP-IZWPPx1UmHhJ58u2kbcnj2lbTTIVY3-0ZZoYhSOULQpj9J_UQ9RgcFrsz80"
    ],
    challenges: [
      {
        title: "Memory Contention",
        description: "Optimizing the RUST borrower-checker for high-frequency trading simulations was the primary technical hurdle during the initial build phase."
      },
      {
        title: "WebSocket Scalability",
        description: "Maintaining thousands of persistent connections for real-time updates required a custom load-balancing logic at the edge layer."
      }
    ],
    stats: {
      commits: "482+",
      contributors: "12",
      uptime: "99.9%",
      stars: "1.2k"
    },
    links: {
      demo: "#",
      github: "#"
    },
    future: [
      "Implementation of zero-knowledge proofs for enhanced privacy.",
      "Mobile-native dashboard for iOS and Android monitoring.",
      "GraphQL API integration for third-party developer access."
    ]
  },
  {
    id: "nexus-cloud",
    title: "Nexus Cloud Explorer",
    shortDescription: "A visualization tool for complex multi-cloud infrastructures.",
    description: "Nexus Cloud Explorer provides a unified interface for managing resources across AWS, GCP, and Azure. It uses advanced graphing algorithms to visualize dependencies and costs in real-time.",
    fullDescription: "This project was born out of the need for better visibility in hybrid cloud setups. It features a custom DSL for querying infrastructure state and a high-performance rendering engine for large-scale graphs.",
    tags: ["Node.js", "Three.js", "Terraform", "Go"],
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7VGLmFSu4VtOIwhgO5QWr36IB4s5DJuxLDOIRG_EpmqWovqKk0PvFhFDkmlZasmCF4RDuzqnNb_Kg5m90OX3aTu83uzl78RmmKi1MSBFFK4kCpvztvcnBL9k96voAqNcVh5LUCuUWYO9AMWTf7LWgcS8wElU0S6HWf1sdNaHkYilgPJoyAkLMOq55tu27VJbnaztM28-zK0Pt-Zh20qvlqyaAmdNxnY5BJsHurilnJ8KPKd-V7Akbe4H-PLy0pllAXv6WDGZvRnE",
    gallery: [],
    challenges: [],
    stats: {
      commits: "320+",
      contributors: "5",
      uptime: "100%",
      stars: "850"
    },
    links: {
      demo: "#",
      github: "#"
    },
    future: []
  }
];
