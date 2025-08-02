import { useParams, Link } from "wouter";
import { PageTransition, ProjectDragon } from "../components/PixelElements";
import { projects } from "../data/resume";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center">
            <h1 className="text-4xl font-cinzel text-royal-gold mb-4">Dragon Not Found</h1>
            <p className="text-gray-300 mb-8">This quest seems to have vanished into the void.</p>
            <Link href="/projects">
              <button className="bg-emerald hover:bg-deep-emerald px-6 py-3 rounded-lg font-cinzel transition-all">
                Return to Dragons
              </button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-deep-gold to-royal-gold dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/projects">
              <button className="flex items-center space-x-2 text-white hover:text-royal-gold transition-colors mb-8 font-cinzel">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dragons</span>
              </button>
            </Link>

            <div className="bg-dark-purple/90 rounded-lg pixel-border p-8">
              {/* Project Header */}
              <div className="text-center mb-8">
                <ProjectDragon 
                  difficulty={project.difficulty}
                  icon={project.icon}
                  className="w-32 h-32"
                />
                <h1 className="text-4xl font-cinzel text-royal-gold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-emerald font-semibold text-lg">
                  Completed: {project.period}
                </p>
              </div>

              {/* Quest Details */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Achievements */}
                <div>
                  <h3 className="text-2xl font-cinzel text-royal-gold mb-4">
                    🏆 Quest Achievements
                  </h3>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-emerald text-lg">⚔️</span>
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weapons (Technologies) */}
                <div>
                  <h3 className="text-2xl font-cinzel text-royal-gold mb-4">
                    ⚔️ Weapons & Tools Used
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.technologies.map((tech) => (
                      <div 
                        key={tech}
                        className="bg-emerald/20 border border-emerald rounded-lg p-3 text-center"
                      >
                        <div className="w-8 h-8 mx-auto mb-2 bg-emerald rounded pixel-art flex items-center justify-center text-sm">
                          🛡️
                        </div>
                        <p className="text-emerald font-semibold text-sm">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Battle Statistics */}
              <div className="mt-8 p-6 bg-black/30 rounded-lg">
                <h3 className="text-xl font-cinzel text-royal-gold mb-4 text-center">
                  📊 Battle Statistics
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald">{project.difficulty}/5</p>
                    <p className="text-gray-300 text-sm">Difficulty</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-royal-gold">{project.technologies.length}</p>
                    <p className="text-gray-300 text-sm">Tools Used</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-prussian">{project.achievements.length}</p>
                    <p className="text-gray-300 text-sm">Achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
