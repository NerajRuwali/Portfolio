'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRocket } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
            <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-emerald-300 uppercase bg-emerald-500/15 rounded-full border border-emerald-400/30 font-inter">
                        About Me
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="space-y-8"
                >
                    {/* Greeting */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-poppins text-center">
                        Hey there, I&apos;m{' '}
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                            Neeraj!
                        </span>
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-200 bg-emerald-500/10 border border-emerald-400/25 rounded-full font-inter">
                            <FaCode className="text-emerald-400" />
                            Problem Solver
                        </span>
                        <span className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-cyan-200 bg-cyan-500/10 border border-cyan-400/25 rounded-full font-inter">
                            <FaRocket className="text-cyan-400" />
                            Tech Explorer
                        </span>
                    </div>

                    {/* Bio */}
                    <div className="space-y-6 text-center">
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-inter max-w-3xl mx-auto">
                            I&apos;m a third-year B.Tech student who loves coding and working with new tech stacks. From building sleek web applications to solving complex algorithms, I enjoy exploring different technologies and constantly challenging myself. I have solved more than{' '}
                            <span className="text-emerald-400 font-bold">500 questions</span>{' '}
                            across various coding platforms, sharpening my problem-solving skills along the way.
                        </p>

                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-inter max-w-3xl mx-auto">
                            Apart from coding, I love learning about emerging technologies and experimenting with new frameworks. And when I&apos;m not glued to my screen, I&apos;m probably lost in a gripping drama or brainstorming my next project!
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex justify-center pt-4">
                        <a
                            href="mailto:nanuruwali00@gmail.com"
                            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300"
                        >
                            <HiMail className="text-xl text-emerald-400 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-300 group-hover:text-white font-medium font-inter transition-colors">
                                nanuruwali00@gmail.com
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
