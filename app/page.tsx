import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResumeSection from './components/ResumeSection';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <ResumeSection />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}