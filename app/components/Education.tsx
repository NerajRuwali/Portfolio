'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const educationData = [
    {
        degree: 'B.Tech in Computer Science and Engineering',
        specialisation: 'Specialisation in Data Science',
        institution: 'Quantum University, Roorkee',
        date: 'August 2023 - July 2027',
        location: 'Roorkee, Uttarakhand',
        description: "Currently pursuing Bachelor's in Computer Science with a CGPA of 9.10/10. Focusing on software engineering fundamentals and full-stack development.",
        current: true,
    },
    {
        degree: 'Intermediate',
        specialisation: null,
        institution: 'Vendy Senior Secondary School',
        date: 'March 2022',
        location: 'Haldwani, Uttarakhand',
        description: 'Completed Intermediate with 70.00% marks.',
        current: false,
    },
    {
        degree: 'Matriculation',
        specialisation: null,
        institution: 'Vendy Senior Secondary School',
        date: 'March 2020',
        location: 'Haldwani, Uttarakhand',
        description: 'Completed Matriculation with 83.60% marks.',
        current: false,
    },
];

export default function Education() {
    return (
        <section id="education" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
            <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-16 right-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }} />

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-violet-300 uppercase bg-violet-500/15 rounded-full border border-violet-400/30 font-inter">
                        Education
                    </p>
                    <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-white font-poppins">
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent" />

                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={edu.degree + edu.institution}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative pl-16 sm:pl-20"
                            >
                                {/* Timeline dot */}
                                <div className={`absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full border-2 ${edu.current ? 'border-violet-400 bg-violet-500 shadow-lg shadow-violet-500/50' : 'border-gray-500 bg-gray-700'}`}>
                                    {edu.current && (
                                        <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-30" />
                                    )}
                                </div>

                                {/* Card */}
                                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 hover:bg-white/[0.06] hover:border-violet-400/20 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins flex items-center gap-3">
                                                <FaGraduationCap className="text-violet-400 flex-shrink-0" />
                                                {edu.degree}
                                            </h3>
                                            {edu.specialisation && (
                                                <p className="mt-1 text-sm text-violet-300 font-medium font-inter pl-9">
                                                    {edu.specialisation}
                                                </p>
                                            )}
                                            <p className="mt-1 text-base text-gray-400 font-inter pl-9">
                                                {edu.institution}
                                            </p>
                                        </div>
                                        {edu.current && (
                                            <span className="self-start px-3 py-1 text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 rounded-full whitespace-nowrap">
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-4 pl-9 text-sm text-gray-400 font-inter">
                                        <span className="flex items-center gap-1.5">
                                            <FaCalendarAlt className="text-violet-400/70 text-xs" />
                                            {edu.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <FaMapMarkerAlt className="text-violet-400/70 text-xs" />
                                            {edu.location}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed font-inter pl-9">
                                        {edu.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
