import { Link, useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";
import { Tooltip } from "./PixelElements";
import { personalInfo } from "../data/resume";

const navigation = [
  { name: "Home", path: "/", tooltip: "🏰 The Awakening" },
  { name: "Education", path: "/education", tooltip: "📚 Path of Learning" },
  { name: "Experience", path: "/experience", tooltip: "🛡️ Trials of the Realms" },
  { name: "Projects", path: "/projects", tooltip: "🐉 Dragons Vanquished" },
  { name: "Certifications", path: "/certifications", tooltip: "📜 Scrolls of Power" },
  { name: "Contact", path: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
  className={`min-h-screen text-foreground font-old-standard transition-colors duration-300 ${
    theme === "light"
      ? "bg-gradient-to-b from-[#CBC3E3] via-[#f6cfe3] via-40% via-[#cbb7f6] via-20% to-[#9ad6d3]"
      : "bg-gradient-to-b from-[#1a0b2e] via-[#2a1f4d] to-[#0f3b4d]"
  }`}
>

      {/* Header Navigation */}
      <header
  className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b-2 border-royal-gold
    ${theme === "light" ? "bg-white/60" : "bg-black/60"}`}
>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Left: Name */}
            <div className={`text-xl font-medieval whitespace-nowrap ${theme === "dark" ? "text-royal-gold" : "text-[#4c6b4b]"}`}>
              Sara Nimje
            </div>

            {/* Center: Navigation */}
            <div className="flex-1 flex justify-center space-x-30">
              {navigation
                .filter(item => item.name !== "Contact")
                .map((item) => (
                  <Tooltip key={item.path} content={item.tooltip}>
                    <Link
                      href={item.path}
                      className={`transition-colors font-cinzel text-sm ${
                        location === item.path
                          ? "text-royal-gold"
                          : "text-foreground/80 hover:text-royal-gold"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </Tooltip>
                ))}
            </div>

            {/* Right: Contact Icon */}
            <div className="flex items-center space-x-4">
                <Link
                  href="/contact"
                  className={`w-32 h-10 bg-royal-gold dark:bg-text-background rounded pixel-art flex items-center justify-center font-bold ${
                    location === "/contact"
                      ? "ring-2 ring-offset-2 ring-emerald"
                      : ""
                  }`}
                >
                  Contact
                </Link>
                <button onClick={toggleTheme} className="w-10 h-10 bg-transparent border border-royal-gold rounded pixel-art flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform hover:text-royal-gold hover:drop-shadow-glow" aria-label="Toggle Theme">
                  {theme === "dark" ? "☀︎" : "☾"}
                </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer
  className={`border-t-2 border-royal-gold py-8
    ${theme === "light" ? "bg-white/60" : "bg-black/60"}`}
>
        <div className="container mx-auto px-8 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <p className="text-foreground/80 font-medieval">
              © 2025 {personalInfo.name}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto">
            {/* Phone */}
            <div className="flex items-center justify-center space-x-2 text-m">
              <span className="w-4 h-4 bg-transparent rounded pixel-art flex items-center justify-center">
              ✆
              </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-foreground/70 hover:text-royal-gold transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center space-x-2 text-m">
              <span className="w-4 h-4 bg-transparent rounded pixel-art flex items-center justify-center">
              🖂
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-foreground/70 hover:text-royal-gold transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Location (not a link) */}
            <div className="flex items-center justify-center space-x-2 text-m">
              <span className="w-4 h-4 bg-transparent rounded pixel-art flex items-center justify-center">
              ⚲
              </span>
              <span className="text-foreground/70">{personalInfo.location}</span>
            </div>
          </div>


          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
             >
              <img 
    src="/assets/linkedin.png" 
    alt="LinkedIn" 
    className="w-12 h-12 object-contain"
  />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              >
              <img 
    src="/assets/github-light.png" 
    alt="GitHub" 
    className="w-12 h-12 object-contain block dark:hidden"
  />
  
  {/* Dark mode image */}
  <img 
    src="/assets/github-dark.png" 
    alt="GitHub" 
    className="w-12 h-12 object-contain hidden dark:block"
  />
            </a>
          </div>

          <p className="text-foreground/50 text-sm font-cinzel">
          • Crafted with Love and AI • 
          </p>
          <p className="text-foreground/50 text-sm font-cinzel">
          Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
