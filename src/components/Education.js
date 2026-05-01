export default function Education() {
  const education = [
    {
      degree: "M.S. in Computer Science",
      school: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Distributed Systems and Cryptography."
    },
    {
      degree: "B.S. in Software Engineering",
      school: "MIT",
      period: "2014 - 2018",
      description: "Dean's List for 4 consecutive years. Focus on Algorithmic Efficiency."
    }
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-8 py-section-gap">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-h2 text-4xl text-white">Education</h2>
        <div className="h-[1px] flex-1 bg-outline-variant"></div>
      </div>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-xl flex flex-col md:flex-row justify-between gap-6 hover:bg-white/5 transition-colors">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-space-grotesk">{edu.degree}</h3>
              <p className="text-primary font-medium">{edu.school}</p>
              <p className="text-on-surface-variant max-w-2xl">{edu.description}</p>
            </div>
            <div className="text-on-surface-variant font-mono text-sm whitespace-nowrap">
              {edu.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
