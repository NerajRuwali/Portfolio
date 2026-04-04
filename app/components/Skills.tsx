'use client';

import {
    SiCplusplus, SiJavascript, SiPython, SiTypescript,
    SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss,
    SiMongodb, SiPostgresql, SiMysql,
    SiGit, SiGithub, SiPostman, SiVercel, SiRender,
    SiNumpy, SiPandas, SiScikitlearn,
} from 'react-icons/si';
import { FaJava, FaChartBar } from 'react-icons/fa';
import { type IconType } from 'react-icons';

const PowerBiIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        <path d="M10.4 2a1.6 1.6 0 0 1 1.6 1.6v16.8a1.6 1.6 0 0 1-1.6 1.6H8.8a1.6 1.6 0 0 1-1.6-1.6V3.6A1.6 1.6 0 0 1 8.8 2h1.6Zm5.6 4a1.6 1.6 0 0 1 1.6 1.6v12.8A1.6 1.6 0 0 1 16 22h-1.6a1.6 1.6 0 0 1-1.6-1.6V7.6A1.6 1.6 0 0 1 14.4 6H16ZM4.8 10a1.6 1.6 0 0 1 1.6 1.6v8.8A1.6 1.6 0 0 1 4.8 22H3.2a1.6 1.6 0 0 1-1.6-1.6v-8.8A1.6 1.6 0 0 1 3.2 10h1.6Zm16 4a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.6a1.6 1.6 0 0 1-1.6-1.6v-4.8a1.6 1.6 0 0 1 1.6-1.6h1.6Z"/>
    </svg>
);

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
            { name: 'Java', icon: FaJava, color: '#ED8B00' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        ],
    },
    {
        category: 'Web Technologies',
        skills: [
            { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: SiCss, color: '#1572B6' },
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        ],
    },
    {
        category: 'Tools & Platforms',
        skills: [
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
            { name: 'Render', icon: SiRender, color: '#46E3B7' },
        ],
    },
    {
        category: 'Data Science & ML',
        skills: [
            { name: 'NumPy', icon: SiNumpy, color: '#013243' },
            { name: 'Pandas', icon: SiPandas, color: '#150458' },
            { name: 'Matplotlib', icon: FaChartBar, color: '#11557C' },
            { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
            { name: 'Power BI', icon: PowerBiIcon as unknown as IconType, color: '#F2C811' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-60" />
            <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <p className="inline-block px-4 py-1 text-xs font-bold tracking-widest text-emerald-200 uppercase bg-emerald-500/20 rounded-full border border-emerald-300/30 font-inter">
                        Skills
                    </p>
                    <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white font-poppins">
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
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
                            <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="group flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-emerald-400/30 hover:-translate-y-1 transition-all duration-300 cursor-default min-w-[110px]"
                                        >
                                            <Icon
                                                className="text-3xl sm:text-4xl transition-colors duration-300 group-hover:drop-shadow-lg"
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 font-inter">
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