import { useState } from "react";
import { PageTransition } from "../components/PixelElements";
import { personalInfo } from "../data/resume";
import cv from '/assets/cv.pdf';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showGameModal, setShowGameModal] = useState(false); // NEW

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-purple to-black dark:from-grey-800 dark:to-black">
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in">
            <img
              src="/assets/riding.png"
              alt="Greetings, Traveler!"
              className="w-1/2 mx-auto mb-2 bg-transparent rounded-lg pixel-art animate-pixel-float object-contain"
            />
            <h1 className="text-6xl font-medieval text-[#c0971a] dark:text-[#e2a42c] mb-4 animate-slide-up drop-shadow-lg">
              {personalInfo.name}
            </h1>
            <h2
              className="text-2xl font-uncial text-emerald mb-6 animate-slide-up drop-shadow-md"
              style={{ animationDelay: "0.2s" }}
            >
              {personalInfo.title}
            </h2>
            <p
              className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up font-old-standard"
              style={{ animationDelay: "0.4s" }}
            >
              {personalInfo.bio}
            </p>

            {/* Stats button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-emerald hover:bg-deep-emerald px-8 py-4 mx-4 mb-10 rounded-lg font-medieval text-lg transition-all transform hover:scale-105 animate-slide-up shadow-lg"
            >
              Monitor Stats
            </button>

            {/* Download CV button */}
            <button
              className="bg-emerald hover:bg-deep-emerald-900 px-8 py-4 mx-4 mb-10 rounded-lg font-medieval text-lg transition-all transform hover:scale-105 animate-slide-up shadow-lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = cv;
                link.download = 'Sara-Nimje-Resume.pdf';
                link.click();
              }}
            >
              Download CV
            </button>

            {/* NEW: Play Game button */}
            <button
              onClick={() => setShowGameModal(true)}
              className="bg-purple-600 hover:bg-purple-800 px-8 py-4 mx-4 mb-10 rounded-lg font-medieval text-lg transition-all transform hover:scale-105 animate-slide-up shadow-lg"
            >
              Play Game
            </button>
          </div>

          {/* Stats Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
              <div className="bg-black/60 border border-emerald rounded-xl p-6 shadow-2xl text-white max-w-3xl w-full flex relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-4 text-3xl text-white hover:text-red-500"
                >
                  ✕
                </button>
                <div className="w-1/3 pr-4 flex items-center justify-center">
                  <img
                    src="/assets/knight.png"
                    alt="Monitor Stats"
                    className="rounded-lg shadow-md object-contain"
                  />
                </div>
                <div className="w-2/3 pl-4 flex flex-col justify-center font-mono space-y-3 text-left">
                  <div className="text-xl">📚 <span className="text-emerald-300">Education</span>: B.Tech in ECE</div>
                  <div className="text-xl">📜 <span className="text-emerald-300">Current GPA</span>: 8.74</div>
                  <div className="text-xl">💡 <span className="text-emerald-300">Languages</span>: C++, Python</div>
                  <div className="text-xl">🚀 <span className="text-emerald-300">Skills</span>: Data Analysis, Computer Vision, FrontEnd Web Development, DSA</div>
                </div>
              </div>
            </div>
          )}

          {/* Game Modal */}
          {showGameModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
              <div className="bg-black border-[3px] border-purple-400 rounded-xl shadow-2xl max-w-5xl w-full h-[80vh] relative flex flex-col">
                <button
                  onClick={() => setShowGameModal(false)}
                  className="absolute top-3 right-4 text-3xl text-white hover:text-red-500"
                >
                  ✕
                </button>
                <iframe
                  src="/game/index.html"
                  title="HTML5 Game"
                  className="w-full h-full border-0 rounded-b-xl"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
