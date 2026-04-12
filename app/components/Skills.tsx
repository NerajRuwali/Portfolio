'use client';

import {
    SiCplusplus, SiJavascript, SiPython, SiMysql,
    SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss,
    SiFastapi,
    SiMongodb, SiPostgresql, SiRedis,
    SiDocker, SiGit, SiGithub, SiPostman, SiVercel, SiRender,
    SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiJupyter
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { 
    FiServer, FiActivity, FiLock, FiShield, 
    FiGitBranch, FiLink, FiShuffle, FiCpu,
    FiBarChart, FiTrendingUp, FiDatabase
} from 'react-icons/fi';
import { type IconType } from 'react-icons';

interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

interface SkillCategory {
    category: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        category: 'Languages',
        skills: [
            { name: 'C++', icon: SiCplusplus, color: '#00599C' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'Java (Basic)', icon: FaJava, color: '#ED8B00' },
            { name: 'SQL', icon: FiDatabase, color: '#4479A1' },
        ],
    },
    {
        category: 'Web Technologies',
        skills: [
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: SiCss, color: '#1572B6' },
            { name: 'React.js', icon: SiReact, color: '#61DAFB' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'REST APIs', icon: FiServer, color: '#00FA9A' },
        ],
    },
    {
        category: 'Backend & Systems',
        skills: [
            { name: 'FastAPI', icon: SiFastapi, color: '#05998B' },
            { name: 'WebSocket', icon: FiActivity, color: '#FF4500' },
            { name: 'Authentication', icon: FiLock, color: '#FFD700' },
            { name: 'Authorization', icon: FiShield, color: '#1E90FF' },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { name: 'AWS (EC2, S3)', icon: FaAws, color: '#FF9900' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'CI/CD Pipeline', icon: FiGitBranch, color: '#F05032' },
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
            { name: 'Render', icon: SiRender, color: '#46E3B7' },
        ],
    },
    {
        category: 'AI & Automation',
        skills: [
            { name: 'LangChain', icon: FiLink, color: '#FFFFFF' },
            { name: 'n8n', icon: FiShuffle, color: '#FF6D5B' },
            { name: 'RAG', icon: FiCpu, color: '#00BFFF' },
        ],
    },
    {
        category: 'Data Science & ML',
        skills: [
            { name: 'NumPy', icon: SiNumpy, color: '#013243' },
            { name: 'Pandas', icon: SiPandas, color: '#150458' },
            { name: 'Matplotlib', icon: FiBarChart, color: '#11557C' },
            { name: 'Seaborn', icon: FiTrendingUp, color: '#3776AB' },
            { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
            { name: 'Keras', icon: SiKeras, color: '#D00000' },
            { name: 'Jupyter Notebook', icon: SiJupyter, color: '#F37626' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative min-h-screen py-24 px-6 sm:px-10 lg:px-16 text-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-black/40 backdrop-blur-sm" />
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="inline-block px-4 py-1 text-xs font-bold tracking-widest text-cyan-200 uppercase bg-cyan-500/20 rounded-full border border-cyan-300/30 font-inter">
                        Skills
                    </p>
                    <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white font-poppins">
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                            Skills & Technologies
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg font-inter">
                        Technologies and tools I work with.
                    </p>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category) => (
                        <div key={category.category}>
                            <h3 className="text-2xl font-bold text-white mb-8 text-center font-poppins">{category.category}</h3>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="group flex flex-col items-center gap-3 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(16.666%-1.25rem)] max-w-[150px] px-4 py-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-cyan-400/50 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 cursor-default"
                                        >
                                            <Icon
                                                className="text-3xl sm:text-4xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 font-inter text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}