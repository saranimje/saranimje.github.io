import { Link } from "wouter";
import { PageTransition } from "../components/PixelElements";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-prussian to-deep-prussian dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-medieval text-royal-gold text-center mb-16 drop-shadow-lg">
            🛡️ Trials of the Realms
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp) => (
              <Link key={exp.id} href={`/experience/${exp.id}`}>
                <div className="bg-dark-purple/80 rounded-lg pixel-border p-8 hover-scale cursor-pointer">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-emerald rounded-lg pixel-art flex items-center justify-center text-2xl">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-cinzel text-royal-gold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-emerald font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-400 mb-4">{exp.period} | {exp.location}</p>
                      
                      <div className="space-y-2">
                        {exp.description.map((desc, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="text-royal-gold">⚔️</span>
                            <p className="text-gray-300">{desc}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="text-sm bg-royal-gold/20 text-royal-gold px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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
