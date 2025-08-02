import { PageTransition } from "../components/PixelElements";
import { certifications } from "../data/resume";

export default function Certifications() {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-deep-emerald to-emerald dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-medieval text-royal-gold text-center mb-16 drop-shadow-lg">
            📜 Scrolls of Power
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-dark-purple/90 rounded-lg pixel-border p-6 hover-scale"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto bg-royal-gold rounded-lg pixel-art flex items-center justify-center text-2xl">
                      {cert.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-cinzel text-royal-gold mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {cert.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-emerald text-sm font-semibold">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-xs">
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
