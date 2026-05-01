import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-25">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-h2 text-3xl md:text-4xl text-white">Featured Projects</h2>
        <div className="h-[1px] flex-1 bg-outline-variant"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
