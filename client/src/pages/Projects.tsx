import { useState } from "react";
import { Link } from "wouter";
import { PageTransition } from "../components/PixelElements"; // No ProjectDragon now
import { projects } from "../data/resume";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <PageTransition>
      <section className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Main heading */}
          <h2 className="text-7xl font-medieval text-[#a37f00] dark:text-[#e2a42c] text-center mb-8 drop-shadow-lg">
            Projects
          </h2>

          {/* Subheading */}
          <h2 className="text-4xl font-medieval text-[#a37f00] dark:text-[#e2a42c] text-center mb-8 drop-shadow-lg">
            Dragons Vanquished
          </h2>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div
                  className="bg-white/60 dark:bg-black/60 pixel-border hover-scale cursor-pointer group overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Full-width banner image */}
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Card content */}
                  <div className="p-6">
                    <h3 className="text-xl font-cinzel text-[#a37f00] dark:text-[#e2a42c] mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-800 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-[#a37f00]/20 dark:bg-[#e2a42c]/20 text-[#a37f00] dark:text-[#e2a42c] px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-400/30 dark:bg-gray-600/20 text-gray-700 dark:text-gray-400 px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-700 dark:text-gray-400">
                      {project.period}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
