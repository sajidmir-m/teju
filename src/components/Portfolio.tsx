
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product browsing, cart functionality, and payment processing.",
    image: "https://placehold.co/600x400/112240/64FFDA?text=E-commerce+Project",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com",
    demoLink: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application allowing users to create, organize, and track their tasks. Includes features like drag-and-drop, task prioritization, and deadline reminders.",
    image: "https://placehold.co/600x400/112240/64FFDA?text=Task+Manager",
    tags: ["React", "TypeScript", "Firebase"],
    githubLink: "https://github.com",
    demoLink: "https://example.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that provides real-time weather information and forecasts for any location. Utilizes external APIs to fetch accurate weather data.",
    image: "https://placehold.co/600x400/112240/64FFDA?text=Weather+App",
    tags: ["JavaScript", "API", "CSS"],
    githubLink: "https://github.com",
    demoLink: "https://example.com"
  },
];

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="portfolio" className="py-20 bg-portfolio-light/30">
      <div className="section-container">
        <h3 className="section-subtitle">My Portfolio</h3>
        <h2 className="section-title">Recent Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.slice(0, visibleProjects).map((project) => (
            <Card key={project.id} className="glass-panel hover:border-portfolio-accent/50 transition-all overflow-hidden group h-full flex flex-col">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-portfolio-accent/10 text-portfolio-accent px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-portfolio-accent transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-portfolio-accent transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <Button 
              onClick={loadMoreProjects} 
              className="bg-transparent hover:bg-portfolio-accent/10 text-portfolio-accent border border-portfolio-accent hover:text-portfolio-accent transition-all"
            >
              Load More Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
