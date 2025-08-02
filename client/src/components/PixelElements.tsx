import { useState } from "react";

interface PixelKnightProps {
  className?: string;
}

export function PixelKnight({ className = "w-8 h-8" }: PixelKnightProps) {
  return (
    <div className={`${className} bg-royal-gold rounded pixel-art animate-pixel-float flex items-center justify-center text-2xl`}>
      ⚔️
    </div>
  );
}

interface PixelDragonProps {
  className?: string;
  onClick?: () => void;
}

export function PixelDragon({ className = "w-16 h-16", onClick }: PixelDragonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
      onClick?.();
    }
  };

  return (
    <div 
      className={`${className} bg-emerald rounded pixel-art cursor-pointer flex items-center justify-center text-2xl hover-scale ${isAnimating ? 'animate-dragon-cartwheel' : ''}`}
      onClick={handleClick}
    >
      🐉
    </div>
  );
}

interface ProjectDragonProps {
  difficulty: number;
  icon: string;
  className?: string;
  isHovered?: boolean;
}

export function ProjectDragon({ difficulty, icon, className = "w-20 h-20", isHovered }: ProjectDragonProps) {
  const getDragonColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
      case 2:
        return "bg-prussian";
      case 3:
        return "bg-emerald";
      case 4:
        return "bg-deep-emerald";
      case 5:
        return "bg-deep-gold";
      default:
        return "bg-emerald";
    }
  };

  return (
    <div className="text-center mb-4">
      <div className={`${className} mx-auto ${getDragonColor(difficulty)} rounded-lg pixel-art flex items-center justify-center text-3xl ${isHovered ? 'animate-dragon-cartwheel' : ''}`}>
        {icon}
      </div>
      <div className="flex justify-center mt-2 space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < difficulty ? 'bg-royal-gold' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-1">
        Difficulty: {Array.from({ length: difficulty }, () => '⭐').join('')}
      </p>
    </div>
  );
}

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom';
}

export function Tooltip({ children, content, position = 'bottom' }: TooltipProps) {
  const positionClass = position === 'top' ? '-top-8' : '-bottom-8';
  
  return (
    <div className="tooltip-trigger relative">
      {children}
      <div className={`tooltip absolute ${positionClass} left-1/2 transform -translate-x-1/2 bg-black/90 text-royal-gold px-2 py-1 rounded text-sm whitespace-nowrap`}>
        {content}
      </div>
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="medieval-spinner"></div>
    </div>
  );
}

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="page-transition animate-fade-in">
      {children}
    </div>
  );
}
