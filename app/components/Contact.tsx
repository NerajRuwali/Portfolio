'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen py-20 px-6 sm:px-10 lg:px-16 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <p className="inline-block px-4 py-1 text-xs font-bold tracking-widest text-emerald-200 uppercase bg-emerald-500/20 rounded-full border border-emerald-300/30 font-inter">
                        Get in touch
                    </p>
                    <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white font-poppins">Let’s build something together</h2>
                    <p className="mt-3 text-gray-300 max-w-2xl mx-auto font-inter">
                        I’m open to remote and hybrid opportunities. Fill out the form and I will get back to you ASAP.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <motion.form
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        action="mailto:nanuruwali00@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/40 transition-all duration-300"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/40 transition-all duration-300"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                rows={6}
                                placeholder="Tell me about your project"
                                className="w-full rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/40 transition-all duration-300 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-600/40 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
                        >
                            Send Message
                        </button>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>nanuruwali00@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 9528193905</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-4 font-poppins">Connect with me</h3>
                            <div className="space-y-4">
                                <a
                                    href="https://github.com/NerajRuwali"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-emerald-400/50 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/neeraj-ruwali-34617b2a0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-300 hover:text-emerald-300 transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-emerald-400/50 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}