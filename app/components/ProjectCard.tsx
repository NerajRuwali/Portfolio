'use client';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
    index: number;
    imageUrl?: string;
    featured?: boolean;
}

export default function ProjectCard({ title, description, techStack, githubUrl, liveUrl, index, imageUrl, featured }: ProjectCardProps) {
    return (
        <div
            className="group relative h-full flex flex-col"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
        >
            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 opacity-10 blur-xl transition-opacity duration-400 group-hover:opacity-40" />
            <div className="relative h-full rounded-2xl border border-white/10 bg-slate-900/60 flex flex-col overflow-hidden backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-8px_rgba(34,211,238,0.3)]">
                
                {/* Project Image */}
                {imageUrl && (
                    <div className="relative h-48 w-full overflow-hidden">
                        <img 
                            src={imageUrl} 
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    </div>
                )}

                <div className="relative z-10 flex flex-col flex-grow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase font-inter">Project {String(index + 1).padStart(2, '0')}</p>
                        {featured && <span className="text-[10px] font-bold text-cyan-200 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-2 py-0.5 font-inter">Featured</span>}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6 font-inter line-clamp-3">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {techStack.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/5 bg-white/5 text-slate-300 font-inter">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-3">
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative overflow-hidden rounded-lg bg-cyan-500 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-cyan-400 font-inter shadow-[0_4px_12px_rgba(6,182,212,0.3)]"
                        >
                            <span className="relative z-10">Live Demo</span>
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-slate-300 transition-all hover:bg-white/10 hover:text-white font-inter"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
