'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Resume', href: '#resume' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'
            }`}>
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer font-poppins">
                        Neeraj Ruwali
                    </div>
                    <div className="hidden sm:flex items-center gap-8 text-sm font-medium font-inter">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-200 hover:text-cyan-300 transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>
                    <button className="sm:hidden rounded-lg border border-white/20 px-3 py-2 text-white text-sm hover:bg-white/10 transition-all duration-300 font-inter">Menu</button>
                </div>
            </div>
        </nav>
    );
}
