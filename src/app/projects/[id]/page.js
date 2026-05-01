import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[716px] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src={project.heroImage} 
              alt={project.title} 
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 pb-12 w-full">
            <div className="flex items-center gap-2 mb-4">
              <Link className="flex items-center gap-2 text-primary font-label-sm hover:translate-x-[-4px] transition-transform" href="/#projects">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>Back to Projects</span>
              </Link>
            </div>
            <h1 className="font-h1 text-6xl text-white mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="bg-surface-container-highest border border-outline-variant px-4 py-1 rounded-full text-label-sm text-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-8 py-section-gap">
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left Column: Description & Media */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
              <div className="glass-panel p-margin-md rounded-xl">
                <h2 className="font-h2 text-4xl text-white mb-6">Project Overview</h2>
                <p className="font-body-lg text-on-surface-variant mb-8 text-xl">
                  {project.description}
                </p>
                <p className="font-body-lg text-on-surface-variant">
                  {project.fullDescription}
                </p>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="glass-panel rounded-xl overflow-hidden aspect-video">
                      <img className="w-full h-full object-cover" src={img} alt={`Gallery image ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-[2px] bg-primary"></div>
                    <h3 className="font-h3 text-3xl text-white">Challenges Faced</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.challenges.map((challenge, idx) => (
                      <div key={idx} className="glass-panel p-margin-md rounded-xl border-l-4 border-l-primary">
                        <h4 className="text-white font-bold mb-2">{challenge.title}</h4>
                        <p className="text-on-surface-variant text-body-md">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-gutter">
              <div className="glass-panel p-margin-md rounded-xl glow-accent">
                <h4 className="text-label-sm text-primary uppercase tracking-widest mb-6 font-bold">Links</h4>
                <div className="space-y-4">
                  <a className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href={project.links.demo}>
                    <span className="flex items-center gap-3 text-white font-medium">
                      <span className="material-symbols-outlined">rocket_launch</span>
                      Live Demo
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">open_in_new</span>
                  </a>
                  <a className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href={project.links.github}>
                    <span className="flex items-center gap-3 text-white font-medium">
                      <span className="material-symbols-outlined">code</span>
                      GitHub Repo
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              {project.future && project.future.length > 0 && (
                <div className="glass-panel p-margin-md rounded-xl">
                  <h4 className="text-label-sm text-primary uppercase tracking-widest mb-6 font-bold">Future Improvements</h4>
                  <ul className="space-y-4">
                    {project.future.map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                        <span className="text-on-surface-variant text-body-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-surface-container p-margin-md rounded-xl border border-outline-variant relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-5">
                  <span className="material-symbols-outlined text-[120px]">terminal</span>
                </div>
                <h4 className="text-white font-bold mb-4">Project Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Commits</p>
                    <p className="text-h3 text-primary font-bold text-2xl">{project.stats.commits}</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Contributors</p>
                    <p className="text-h3 text-primary font-bold text-2xl">{project.stats.contributors}</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Uptime</p>
                    <p className="text-h3 text-primary font-bold text-2xl">{project.stats.uptime}</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-on-surface-variant">Stars</p>
                    <p className="text-h3 text-primary font-bold text-2xl">{project.stats.stars}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Action CTA */}
        <section className="max-w-7xl mx-auto px-8 pb-section-gap">
          <div className="glass-panel p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border-dashed border-2 border-primary/20">
            <div>
              <h2 className="font-h3 text-3xl text-white mb-2">Interested in this project?</h2>
              <p className="text-on-surface-variant">Let's discuss the architecture or potential collaborations.</p>
            </div>
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
              Get In Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
