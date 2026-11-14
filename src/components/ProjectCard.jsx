import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const artClass = { bank: 'art-bank', blood: 'art-blood', shop: 'art-shop', tasks: 'art-tasks' };
const artLabel = { bank: 'BANKING', blood: 'DONATE', shop: 'E-COMMERCE API', tasks: 'TASK MANAGER' };

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${artClass[project.art] || ''}`}>
        <span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" />
        <span className="art-label">{artLabel[project.art]}</span>
        <span className="art-symbol">{project.art === 'blood' ? '✚' : project.art === 'tasks' ? '✓' : project.art === 'shop' ? '{ }' : '৳'}</span>
        <span className="art-index">0{project.id}</span>
      </div>
      <div className="project-content">
        <div className="project-topline"><span>{project.category}</span><span>FEATURED PROJECT</span></div>
        <h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">
          <a href={project.demo || project.github} target="_blank" rel="noreferrer" className="text-link">{project.demo ? 'Live demo' : 'View repository'} <ArrowUpRight size={16} /></a>
          <a href={project.github} target="_blank" rel="noreferrer" className="round-link" aria-label="GitHub repository"><Github size={17} /></a>
        </div>
      </div>
    </article>
  );
}