'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            <img
                src="/hero.jpg"
                alt="hero"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-black/70" />

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Logo / Monogram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <span className="text-4xl sm:text-5xl font-black text-white font-poppins tracking-tighter -rotate-3 hover:rotate-0 transition-transform duration-500">
                            NR
                        </span>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black font-poppins tracking-tight"
                >
                    <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                        NEERAJ RUWALI
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                    className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 tracking-wide font-inter"
                >
                    Build. Break. Improve. Repeat.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
