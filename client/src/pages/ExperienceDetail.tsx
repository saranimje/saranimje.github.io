import { useParams, Link } from "wouter";
import { PageTransition } from "../components/PixelElements";
import { experience } from "../data/resume";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

export default function ExperienceDetail() {
  const { id } = useParams<{ id: string }>();
  const exp = experience.find(e => e.id === id);

  if (!exp) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center">
            <h1 className="text-4xl font-cinzel text-royal-gold mb-4">Trial Not Found</h1>
            <p className="text-gray-300 mb-8">This realm seems to have vanished into the mists.</p>
            <Link href="/experience">
              <button className="bg-emerald hover:bg-deep-emerald px-6 py-3 rounded-lg font-cinzel transition-all">
                Return to Trials
              </button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-prussian to-deep-prussian dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/experience">
              <button className="flex items-center space-x-2 text-gray-200 hover:text-royal-gold transition-colors mb-8 font-cinzel">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Trials</span>
              </button>
            </Link>

            <div className="bg-dark-purple/90 rounded-lg pixel-border p-8">
              {/* Experience Header */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto bg-emerald rounded-lg pixel-art flex items-center justify-center text-4xl mb-6">
                  {exp.icon}
                </div>
                <h1 className="text-4xl font-cinzel text-royal-gold mb-4">
                  {exp.title}
                </h1>
                <h2 className="text-2xl text-emerald font-semibold mb-4">
                  {exp.company}
                </h2>
                
                <div className="flex justify-center space-x-8 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Quest Accomplishments */}
              <div className="mb-8">
                <h3 className="text-2xl font-cinzel text-royal-gold mb-6 text-center">
                  ⚔️ Quest Accomplishments
                </h3>
                <div className="space-y-4">
                  {exp.description.map((desc, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-black/30 rounded-lg">
                      <div className="w-8 h-8 bg-royal-gold rounded pixel-art flex items-center justify-center flex-shrink-0 mt-1">
                        ⚡
                      </div>
                      <p className="text-gray-300 text-lg">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Abilities */}
              <div className="mb-8">
                <h3 className="text-2xl font-cinzel text-royal-gold mb-6 text-center">
                  🛡️ Skills & Abilities Gained
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {exp.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-emerald/20 border border-emerald rounded-lg p-4 text-center hover-scale"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 bg-emerald rounded-lg pixel-art flex items-center justify-center text-xl">
                        🗡️
                      </div>
                      <p className="text-emerald font-semibold">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Impact */}
              <div className="bg-black/30 rounded-lg p-6">
                <h3 className="text-xl font-cinzel text-royal-gold mb-4 text-center">
                  🏆 Trial Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald">{exp.skills.length}</p>
                    <p className="text-gray-300 text-sm">Skills Mastered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-royal-gold">{exp.description.length}</p>
                    <p className="text-gray-300 text-sm">Major Achievements</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-prussian">
                      {exp.period.includes('Present') ? 'Ongoing' : 'Completed'}
                    </p>
                    <p className="text-gray-300 text-sm">Quest Status</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-deep-gold">High</p>
                    <p className="text-gray-300 text-sm">Impact Level</p>
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
