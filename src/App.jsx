import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Github, Linkedin, Facebook, Code2, GraduationCap, Target, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import { projects } from './data/projects';

const skills = [
  { name: 'Python', group: 'Backend', level: 'Comfortable' },
  { name: 'Django', group: 'Backend', level: 'Building projects' },
  { name: 'C / C++', group: 'Programming', level: 'Good foundation' },
  { name: 'JavaScript', group: 'Frontend', level: 'Learning' },
  { name: 'React', group: 'Frontend', level: 'Learning' },
  { name: 'HTML & CSS', group: 'Frontend', level: 'Comfortable' },
  { name: 'SQL', group: 'Database', level: 'Advanced basics' },
  { name: 'Git & GitHub', group: 'Tools', level: 'Project workflow' }
];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [filter, setFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  const categories = ['All', 'React', 'Django', 'API'];
  const visibleProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter || project.stack.some(tech => tech.toLowerCase().includes(filter.toLowerCase())));
  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark');

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability"><span /> OPEN TO LEARNING & OPPORTUNITIES</div>
              <p className="hero-intro">Hello, I’m</p>
              <h1>Nadirul <span>Nirab.</span></h1>
              <h2>Computer Science Student <span className="hero-divider">/</span> Aspiring Software Developer</h2>
              <p className="hero-description">I’m a CSE student at IUBAT who enjoys turning ideas into useful digital products. I work with Python and Django, and I’m currently growing my skills in modern frontend development.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/cv.pdf" download>Download CV <ArrowDown size={17} /></a>
                <a className="btn btn-secondary" href="#projects">View projects <ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-socials"><a href="https://github.com/nadirulnirob" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div>
            </div>
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="profile-card">
                <div className="profile-card-top"><span>PROFILE / 2026</span><span className="profile-status">● AVAILABLE</span></div>
                <div className="avatar"><span>N</span><i>+</i></div>
                <h3>Nadirul Nirab</h3><p>Computer Science & Engineering</p>
                <div className="profile-card-bottom"><span>BASED IN</span><strong>Bangladesh</strong></div>
              </div>
              <div className="floating-chip chip-code"><Code2 size={16} /> Building with code</div>
              <div className="floating-chip chip-spark"><Sparkles size={16} /> Always learning</div>
              <span className="visual-number">01 — 04</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span /></a>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind. Practical builder." description="A quick introduction to who I am, what I study, and where I want to go." />
            <div className="about-grid">
              <div className="about-copy"><p className="lead">I’m <strong>Nadirul Nirab</strong>, a Computer Science and Engineering student at the International University of Business Agriculture and Technology (IUBAT), Bangladesh.</p><p>I enjoy solving programming problems and building practical applications. My current focus is strengthening my software engineering fundamentals, improving my development workflow, and learning by creating projects.</p><p>My goal is to become a capable software engineer who builds reliable, useful products and keeps adapting as technology evolves.</p><a className="inline-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a></div>
              <div className="info-cards">
                <div className="info-card"><span className="info-icon"><GraduationCap /></span><small>EDUCATION</small><h3>BSc in Computer Science & Engineering</h3><p>IUBAT · Expected graduation: May 2028</p></div>
                <div className="info-card"><span className="info-icon"><Target /></span><small>CURRENT FOCUS</small><h3>Software Development</h3><p>Python, Django, React, problem solving</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="Tools I use today and technologies I’m actively improving." />
            <div className="skills-grid">{skills.map((skill, index) => <div className="skill-card" key={skill.name}><div className="skill-card-head"><span className="skill-number">0{index + 1}</span><span className="skill-group">{skill.group}</span></div><h3>{skill.name}</h3><p>{skill.level}</p><div className="skill-line"><span /></div></div>)}</div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionHeading eyebrow="SELECTED WORK" title="Projects I’ve built." description="A selection of academic and personal projects. More experiments are always in progress." />
            <div className="project-toolbar"><p><strong>{visibleProjects.length.toString().padStart(2, '0')}</strong> projects</p><div className="filter-list" aria-label="Filter projects">{categories.map(category => <button key={category} className={filter === category ? 'filter-btn selected' : 'filter-btn'} onClick={() => setFilter(category)}>{category}</button>)}</div></div>
            <div className="projects-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">N</span> nirab<span className="brand-dot">.</span></a><p>Designed & built with React by Nadirul Nirab.</p><div className="footer-socials"><a href="https://github.com/nadirulnirob" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook /></a></div><small>© {new Date().getFullYear()} Nadirul Nirab. All rights reserved.</small></div></footer>
      {showTop && <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"><ArrowUp size={19} /></button>}
    </div>
  );
}