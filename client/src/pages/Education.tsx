import { PageTransition } from "../components/PixelElements";
import { education } from "../data/resume";

export default function Education() {
  return (
    <PageTransition>
      <section className="min-h-screen py-10 bg-gradient-to-br from-light-purple to-black dark:from-grey-800 dark:to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl font-medieval text-royal-gold dark:text-royal-gold text-center mb-8 drop-shadow-lg">
            Education
          </h1>
          <h2 className="text-4xl font-medieval text-emerald dark:text-emerald text-center mb-8 drop-shadow-lg">
            Path of Learning
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald dark:bg-emerald"></div>

              {education.map((edu, index) => (
                <div key={edu.id} className="relative flex items-center mb-12">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="bg-white/80 dark:bg-black/50 p-6 rounded-lg pixel-border hover-scale">
                          <h3 className="text-xl font-cinzel text-royal-gold dark:text-royal-gold mb-2">
                            {edu.institution}
                          </h3>
                          <p className="text-emerald-900 dark:text-gray-300">{edu.degree}</p>
                          <p className="text-emerald-800 dark:text-[#c0971a] font-semibold">{edu.grade}</p>
                          <p className="text-sm text-gray-900 dark:text-gray-400">{edu.year}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald dark:bg-emerald rounded-full border-4 border-royal-gold"></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald dark:bg-emerald rounded-full border-4 border-royal-gold"></div>
                      <div className="w-1/2 pl-8">
                        <div className="bg-white/80 dark:bg-black/50 p-6 rounded-lg pixel-border hover-scale">
                          <h3 className="text-xl font-cinzel text-royal-gold dark:text-royal-gold mb-2">
                            {edu.institution}
                          </h3>
                          <p className="text-emerald-900 dark:text-gray-300">{edu.degree}</p>
                          <p className="text-emerald-800 dark:text-[#e7971a] font-semibold">{edu.grade}</p>
                          <p className="text-sm text-gray-900 dark:text-gray-400">{edu.year}</p>
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
