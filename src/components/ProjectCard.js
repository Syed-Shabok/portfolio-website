import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`} className="group glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-primary font-bold flex items-center gap-2">
            View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest text-secondary bg-surface-container px-2 py-1 rounded-full border border-outline-variant">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 font-space-grotesk">{project.title}</h3>
        <p className="text-on-surface-variant text-sm line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}
