export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Rust", "Node.js", "Go", "PostgreSQL", "Redis", "Docker"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "WebAssembly"]
    },
    {
      title: "Infrastructure",
      skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Monitoring"]
    }
  ];

  return (
    <section id="skills" className="bg-surface-container/30 py-section-gap">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-h2 text-4xl text-white mb-4">Technical Arsenal</h2>
          <p className="text-on-surface-variant max-w-xl">
            A curated selection of technologies I use to build scalable and modern applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map(cat => (
            <div key={cat.title} className="glass-panel p-8 rounded-xl hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 font-space-grotesk flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="bg-surface-container-highest/50 text-secondary text-xs font-bold px-3 py-1.5 rounded-lg border border-outline-variant">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
