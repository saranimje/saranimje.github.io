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
    <div className="min-h-screen bg-background text-foreground font-old-standard transition-colors duration-300">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full z-50 bg-dark-purple/90 dark:bg-deep-purple/90 backdrop-blur-sm border-b-2 border-royal-gold">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <PixelKnight />
              <h1 className="text-xl font-medieval text-royal-gold">{personalInfo.name}</h1>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <Tooltip key={item.path} content={item.tooltip}>
                    <Link
                      href={item.path}
                      className={`nav-link transition-colors font-cinzel text-sm ${
                        location === item.path
                          ? 'text-royal-gold'
                          : 'text-foreground/80 hover:text-royal-gold'
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
      <footer className="bg-dark-purple/90 dark:bg-deep-purple/90 border-t-2 border-royal-gold py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-royal-gold rounded pixel-art"></div>
            <p className="text-foreground/80 font-medieval">© 2025 {personalInfo.name} - Pixel Knight Resume</p>
            <div className="w-8 h-8 bg-royal-gold rounded pixel-art"></div>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="w-4 h-4 bg-emerald rounded pixel-art flex items-center justify-center text-xs">📱</span>
              <span className="text-foreground/70">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="w-4 h-4 bg-prussian rounded pixel-art flex items-center justify-center text-xs">✉️</span>
              <span className="text-foreground/70">{personalInfo.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="w-4 h-4 bg-royal-gold rounded pixel-art flex items-center justify-center text-xs">📍</span>
              <span className="text-foreground/70">{personalInfo.location}</span>
            </div>
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
          <p className="text-foreground/50 text-sm font-cinzel">Crafted with ⚔️ and 🛡️ • Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
