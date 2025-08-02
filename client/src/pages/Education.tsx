import { PageTransition } from "../components/PixelElements";
import { education } from "../data/resume";

export default function Education() {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-emerald to-deep-emerald dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-cinzel text-royal-gold text-center mb-16">
            📚 Path of Learning
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-royal-gold"></div>
              
              {education.map((edu, index) => (
                <div key={edu.id} className="relative flex items-center mb-12">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-dark-purple/80 p-6 rounded-lg pixel-border hover-scale">
                          <h3 className="text-xl font-cinzel text-royal-gold mb-2">
                            {edu.icon} {edu.institution}
                          </h3>
                          <p className="text-gray-300">{edu.degree}</p>
                          <p className="text-emerald font-semibold">{edu.grade}</p>
                          <p className="text-sm text-gray-400">{edu.year}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royal-gold rounded-full border-4 border-emerald"></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-royal-gold rounded-full border-4 border-emerald"></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-dark-purple/80 p-6 rounded-lg pixel-border hover-scale">
                          <h3 className="text-xl font-cinzel text-royal-gold mb-2">
                            {edu.icon} {edu.institution}
                          </h3>
                          <p className="text-gray-300">{edu.degree}</p>
                          <p className="text-emerald font-semibold">{edu.grade}</p>
                          <p className="text-sm text-gray-400">{edu.year}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
