import React from 'react';
import { ExternalLink, BookOpen, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenGlossary: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGlossary, onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Project Info */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-serif-display text-lg font-bold text-white block">
              A Little Guide for the Perplexed
            </span>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Ein modulares Curriculum für das Quantenzeitalter. Konzipiert zur Überwindung linearer Kausalitätsmuster und zur Förderung eines quanten-relationalen Habitus in formaler und informeller Bildung.
            </p>
            <div className="text-[11px] text-slate-500 pt-2">
              Assoziiert mit dem Forschungsprojekt „Neue Menschen? Neues Denken? Quantentechnologie als Herausforderung für Bildung“ am Leibniz-Institut für Bildungsmedien | Georg-Eckert-Institut (GEI).
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="font-mono text-slate-300 uppercase tracking-wider block font-semibold mb-2">
              Navigation
            </span>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('stages')} className="hover:text-white transition-colors cursor-pointer">
                  4 Bildungsstufen (Register)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('figures')} className="hover:text-white transition-colors cursor-pointer">
                  7 Grundfiguren
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('subjects')} className="hover:text-white transition-colors cursor-pointer">
                  Fächer-Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activities')} className="hover:text-white transition-colors cursor-pointer">
                  Aktivitätensammlung
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('teachers')} className="hover:text-white transition-colors cursor-pointer">
                  Für Lehrende
                </button>
              </li>
            </ul>
          </div>

          {/* Theoretical Foundations & Papers */}
          <div className="space-y-2">
            <span className="font-mono text-slate-300 uppercase tracking-wider block font-semibold mb-2">
              Grundlagen & Quellen
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a
                  href="https://doi.org/10.18278/jpcs.9.10.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Epistemic Openings (JPCS 2025)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Ontological Silk Roads (in press)</span>
              </li>
              <li>
                <span className="text-slate-500">Binary Machines, Quantum Playground?</span>
              </li>
              <li>
                <button onClick={onOpenGlossary} className="hover:text-white transition-colors text-amber-500 font-semibold cursor-pointer">
                  Begriffsglossar öffnen $\to$
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Zrinka Štimac · Curriculum for the Quantum Age
          </div>
          <div>
            Open Access Bildungsressource (OER) für Lehrende, Forschende und Neugierige
          </div>
        </div>

      </div>
    </footer>
  );
};
