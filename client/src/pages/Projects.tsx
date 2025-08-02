import { useState } from "react";
import { Link } from "wouter";
import { PageTransition, ProjectDragon } from "../components/PixelElements";
import { projects } from "../data/resume";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-deep-gold to-royal-gold dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-cinzel text-white text-center mb-16">
            🐉 Dragons Vanquished
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div 
                  className="bg-dark-purple/90 rounded-lg pixel-border p-6 hover-scale cursor-pointer group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <ProjectDragon 
                    difficulty={project.difficulty}
                    icon={project.icon}
                    isHovered={hoveredProject === project.id}
                  />
                  
                  <h3 className="text-xl font-cinzel text-royal-gold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-600/20 text-gray-400 px-2 py-1 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-400">{project.period}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
