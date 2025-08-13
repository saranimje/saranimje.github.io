import { PageTransition } from "../components/PixelElements";
import { certifications } from "../data/resume";

export default function Certifications() {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-light-purple to-black dark:from-grey-800 dark:to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-medieval text-[#c0971a] dark:text-[#e9a421] text-center mb-8 drop-shadow-lg">
            Certifications
          </h2>
          <h2 className="text-4xl font-medieval text-[#c0971a] dark:text-[#e9a421] text-center mb-12 drop-shadow-lg">
            Scrolls of Power
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white/80 dark:bg-black/50 rounded-lg pixel-border p-6 hover-scale transition-all"
                >
                  <div className="text-center mb-4">
                    <div className="mx-auto flex items-center justify-center">
                    <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-1/2 object-cover"
                  />
                    </div>
                  </div>

                  <h3 className="text-lg font-cinzel text-[#c0971a] dark:text-royal-gold mb-2 text-center">
                    {cert.name}
                  </h3>

                  <p className="text-emerald-900 dark:text-gray-300 text-sm mb-4 text-center">
                    {cert.description}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <p className="text-emerald dark:text-emerald font-semibold">
                      {cert.issuer}
                    </p>
                    <p className="text-emerald-900 dark:text-gray-300 text-xs">
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
