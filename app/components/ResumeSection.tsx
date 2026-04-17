'use client';

import { motion } from 'framer-motion';
import { HiDownload, HiExternalLink } from 'react-icons/hi';

const RESUME_PATH = '/resume.pdf';

export default function ResumeSection() {
    return (
        <section
            id="resume"
            className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
        >
            {/* Ambient background blobs */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-teal-500/8 blur-3xl animate-pulse pointer-events-none" />
            <div
                className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-cyan-500/8 blur-3xl animate-pulse pointer-events-none"
                style={{ animationDelay: '1.2s' }}
            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-10">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300 uppercase bg-cyan-500/15 rounded-full border border-cyan-400/30 font-inter">
                        Resume
                    </p>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-poppins leading-tight">
                        Explore My{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                            Full Story
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 font-inter max-w-xl mx-auto leading-relaxed">
                        A snapshot of my experience, skills, and what drives me — all in one place.
                    </p>
                </motion.div>

                {/* Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-8 sm:p-10"
                >
                    {/* Decorative top bar */}
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mb-8" />

                    <p className="text-gray-300 font-inter text-sm sm:text-base mb-8 leading-relaxed">
                        View it in your browser for a quick look, or download a local copy to keep — whichever works best for you.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* View button — solid gradient */}
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Resume in new tab"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm font-inter text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto justify-center"
                        >
                            <HiExternalLink className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                            View Resume
                        </motion.a>

                        {/* Download button — glass ghost */}
                        <motion.a
                            href={RESUME_PATH}
                            download="Neeraj_Ruwali_Resume.pdf"
                            aria-label="Download Resume as PDF"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm font-inter text-cyan-300 border border-cyan-400/40 bg-cyan-500/[0.08] hover:bg-cyan-500/15 hover:border-cyan-400/60 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            <HiDownload className="text-lg group-hover:translate-y-0.5 transition-transform duration-300" />
                            Download PDF
                        </motion.a>
                    </div>
                </motion.div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xs text-gray-600 font-inter"
                >
                    Last updated · April 2026 · PDF
                </motion.p>
            </div>
        </section>
    );
}
