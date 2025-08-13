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
            className={`w-2 h-2 rounded-full ${i < difficulty ? 'bg-royal-gold' : 'bg-gray-400'}`}
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
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="relative group inline-block w-full text-center">
      {/* Original tab label */}
      <span className="block group-hover:opacity-0 transition-opacity duration-200 whitespace-nowrap">
        {children}
      </span>
      {/* Tooltip replacement on hover */}
      <span className="block absolute top-0 left-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {content}
      </span>
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
  return <div className="page-transition animate-fade-in">{children}</div>;
}
