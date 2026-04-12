'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Next Round AI',
        description: 'AI-powered mock interview platform (MERN + GenAI) with real-time interview simulation, AI feedback, and performance analytics.',
        techStack: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express', 'OpenAI'],
        githubUrl: 'https://github.com/NerajRuwali/NextRound-AI',
        liveUrl: 'https://next-round-ai-ebon.vercel.app',
        imageUrl: '/projects/nextround.png',
        featured: true,
    },
    {
        title: 'GitLit',
        description: 'GitLit is a AI Powered full-stack web application that provides detailed insights into GitHub repositories and developer activity.',
        techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'OpenAI', 'GitHub Rest API'],
        githubUrl: 'https://github.com/NerajRuwali/gitlit',
        liveUrl: 'https://git-lit.vercel.app',
        imageUrl: '/projects/gitlit.png',
        featured: true,
    },
    {
        title: 'LiveCodeX',
        description: 'Real-time collaborative coding platform with live editing, instant code execution, and multi-user support.',
        techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
        githubUrl: 'https://github.com/NerajRuwali/livecodex',
        liveUrl: 'https://livecodex-theta.vercel.app',
        imageUrl: '/projects/livecodex.png',
        featured: true,
    },
    {
        title: 'HireLens',
        description: 'AI-powered resume analysis platform that evaluates resumes based on ATS standards with match scoring and skill gap detection.',
        techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Google Gemini'],
        githubUrl: 'https://github.com/NerajRuwali/HireLens',
        liveUrl: 'https://hire-lens-livid.vercel.app',
        imageUrl: '/projects/hirelens.png',
        featured: true,
    },
    {
        title: 'Customer Segmentation',
        description: 'ML-powered customer segmentation using K-Means clustering to group customers based on purchasing behavior for targeted metrics.',
        techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
        githubUrl: 'https://github.com/NerajRuwali/Customer-segmentation',
        liveUrl: '#',
        imageUrl: '/projects/segmentation.png',
        featured: true,
    },
    {
        title: 'Personal Portfolio',
        description: 'Aspiring Software Engineer skilled in MERN stack, DSA, and AI-driven development. I build scalable full-stack applications.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com/NerajRuwali/portfolio',
        liveUrl: '#',
        imageUrl: '/projects/portfolio.png',
        featured: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative min-h-screen py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />
            <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-16 right-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }} />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <p className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase bg-cyan-500/15 rounded-full border border-cyan-400/30 font-inter">
                        Projects
                    </p>
                    <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white font-poppins">
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-base sm:text-lg font-inter">
                        Showcasing innovative solutions built with modern technologies and AI integration.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.12 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.slice(0, 6).map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group"
                        >
                            <ProjectCard {...project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
