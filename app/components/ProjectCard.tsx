'use client';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
    index: number;
    featured?: boolean;
}

export default function ProjectCard({ title, description, techStack, githubUrl, liveUrl, index, featured }: ProjectCardProps) {
    return (
        <div
            className="group relative h-full"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
        >
            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 blur-xl transition-opacity duration-400 group-hover:opacity-90" />
            <div className="relative h-full rounded-2xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 overflow-hidden backdrop-blur-xl shadow-[0_12px_25px_-8px_rgba(236,72,153,0.3)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-8px_rgba(99,102,241,0.5)]">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-500 opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-teal-500 opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase font-inter">No. {String(index + 1).padStart(2, '0')}</p>
                        {featured && <span className="text-xs font-semibold text-violet-200 bg-violet-500/20 border border-violet-400/30 rounded-full px-2 py-1 font-inter">⭐ Featured</span>}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:via-teal-400 group-hover:to-cyan-500 font-poppins">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-grow font-inter">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {techStack.map((tech) => (
                            <span key={tech} className="text-xs font-medium px-2 py-1 rounded-lg border border-emerald-300/30 bg-emerald-300/10 text-emerald-100 font-inter">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2">
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg border border-teal-300/40 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-teal-100 transition-all duration-300 hover:bg-teal-500/25 font-inter"
                        >
                            Live Demo →
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg border border-cyan-300/40 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-cyan-100 transition-all duration-300 hover:bg-cyan-500/25 font-inter"
                        >
                            View Code →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
