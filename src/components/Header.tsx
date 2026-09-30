import React from 'react';
import { HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenGlossary: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenGlossary }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif-display text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors">
            A Little Guide for the Perplexed
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('stages')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeSection === 'stages' ? 'text-amber-700 font-semibold' : ''
            }`}
          >
            4 Bildungsstufen
          </button>
          <button
            onClick={() => onNavigate('figures')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeSection === 'figures' ? 'text-amber-700 font-semibold' : ''
            }`}
          >
            7 Grundfiguren
          </button>
          <button
            onClick={() => onNavigate('subjects')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeSection === 'subjects' ? 'text-amber-700 font-semibold' : ''
            }`}
          >
            Fächer-Matrix
          </button>
          <button
            onClick={() => onNavigate('activities')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeSection === 'activities' ? 'text-amber-700 font-semibold' : ''
            }`}
          >
            Aktivitäten
          </button>
          <button
            onClick={() => onNavigate('teachers')}
            className={`transition-colors hover:text-slate-900 cursor-pointer ${
              activeSection === 'teachers' ? 'text-amber-700 font-semibold' : ''
            }`}
          >
            Für Lehrende
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Begriffsglossar öffnen"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Glossar</span>
          </button>
          
          <button
            onClick={() => onNavigate('stages')}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Curriculum starten
          </button>
        </div>

      </div>
    </header>
  );
};
