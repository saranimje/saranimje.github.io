import { Link, useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";
import { PixelKnight, Tooltip } from "./PixelElements";
import { personalInfo } from "../data/resume";

const navigation = [
  { name: "Home", path: "/", tooltip: "🏰 The Awakening" },
  { name: "Education", path: "/education", tooltip: "📚 Path of Learning" },
  { name: "Experience", path: "/experience", tooltip: "🛡️ Trials of the Realms" },
  { name: "Projects", path: "/projects", tooltip: "🐉 Dragons Vanquished" },
  { name: "Certifications", path: "/certifications", tooltip: "📜 Scrolls of Power" },
  { name: "Contact", path: "/contact", tooltip: "🕊️ The Raven's Perch" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black text-gray-100 font-old-standard transition-colors duration-300">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-dark-purple/90 dark:bg-deep-purple/90 backdrop-blur-sm border-b-2 border-royal-gold">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <PixelKnight />
              <h1 className="text-xl font-cinzel text-royal-gold">{personalInfo.name}</h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <Tooltip key={item.path} content={item.tooltip}>
                    <Link
                      href={item.path}
                      className={`nav-link transition-colors font-cinzel ${
                        location === item.path
                          ? 'text-royal-gold'
                          : 'text-gray-200 hover:text-royal-gold'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </Tooltip>
                ))}
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-emerald hover:bg-deep-emerald transition-colors"
              >
                <span>{theme === 'dark' ? '🗡️' : '🛡️'}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-royal-gold py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-royal-gold rounded pixel-art"></div>
            <p className="text-gray-300 font-cinzel">© 2025 {personalInfo.name} - Pixel Knight Resume</p>
            <div className="w-8 h-8 bg-royal-gold rounded pixel-art"></div>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-prussian rounded pixel-art flex items-center justify-center hover:scale-110 transition-transform"
            >
              🔗
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-emerald rounded pixel-art flex items-center justify-center hover:scale-110 transition-transform"
            >
              💻
            </a>
          </div>
          <p className="text-gray-500 text-sm">Crafted with ⚔️ and 🛡️ • Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
