import { Link } from "wouter";
import { PageTransition, PixelDragon } from "../components/PixelElements";
import { personalInfo } from "../data/resume";

export default function Home() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-purple to-deep-purple dark:from-deep-purple dark:to-black">
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            {/* Hero pixel knight */}
            <div className="w-32 h-32 mx-auto mb-8 bg-royal-gold rounded-lg pixel-art animate-pixel-float flex items-center justify-center text-4xl shadow-lg border-2 border-deep-gold">
              ⚔️
            </div>
            
            <h1 className="text-6xl font-medieval text-royal-gold mb-4 animate-slide-up drop-shadow-lg">
              {personalInfo.name}
            </h1>
            <h2 
              className="text-2xl font-uncial text-emerald mb-6 animate-slide-up drop-shadow-md" 
              style={{ animationDelay: '0.2s' }}
            >
              {personalInfo.title}
            </h2>
            <p 
              className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up font-old-standard" 
              style={{ animationDelay: '0.4s' }}
            >
              {personalInfo.bio}
            </p>
            
            <Link href="/education">
              <button 
                className="bg-emerald hover:bg-deep-emerald px-8 py-4 rounded-lg font-medieval text-lg transition-all transform hover:scale-105 animate-slide-up shadow-lg border border-deep-emerald"
                style={{ animationDelay: '0.6s' }}
              >
                🚀 Begin My Quest
              </button>
            </Link>
          </div>
          
          {/* Hoverable dragon */}
          <div className="absolute bottom-10 right-10">
            <PixelDragon />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
