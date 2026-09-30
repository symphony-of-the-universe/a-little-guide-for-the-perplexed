import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-slate-50 to-white py-16 md:py-24 border-b border-slate-200">
      
      {/* Subtle organic background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 150 C 300 250, 700 50, 1100 180 C 1300 250, 1500 120, 1600 200" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M-50 350 C 350 450, 800 200, 1200 320 C 1400 380, 1550 280, 1650 320" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Unboxed editorial category lead-in */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 tracking-wide uppercase mb-4">
          <span>Curriculum für das Quantenzeitalter</span>
          <span aria-hidden="true">·</span>
          <span>Lehrende & Lernende aller Stufen</span>
          <span aria-hidden="true">·</span>
          <span>GEI-Forschung</span>
        </div>

        {/* Display Title with Balanced Text Wrap */}
        <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 text-balance leading-tight">
          A Little Guide for the Perplexed
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-10 leading-relaxed font-sans-body">
          Wie lernen wir in einer Welt radikaler Umbrüche mit Nicht-Linearität, Unbestimmtheit und Ko-Konstitution zu leben? 
          Dieses Curriculum schließt die Lücke zwischen formalem Wissen (<span className="italic font-serif">knowing</span>), technologischem Können (<span className="italic font-serif">doing</span>) und der Seins-Dimension (<span className="italic font-serif">being</span>).
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onNavigate('stages')}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Die 4 Bildungsstufen erkunden</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('activities')}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Aktivitäten & Unterrichtspläne</span>
          </button>

          <button
            onClick={() => onNavigate('subjects')}
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span>Fächer-Matrix</span>
          </button>
        </div>

        {/* 3 Core Conceptual Pillars - Clean Unboxed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6 border-t border-slate-200">
          
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-amber-700 mb-1">01. DIE DIAGNOSE</div>
            <h2 className="font-serif-display text-base font-bold text-slate-900 mb-2">
              Jenseits des Rechenformalismus
            </h2>
            <p className="text-xs text-slate-600 leading-normal">
              Schulbücher reduzieren Quantenphänomene auf starre Rechenroutinen; Sprachmodelle flüchten in Mythen und Magie. Was fehlt, ist die Befähigung, Ambiguität angstfrei zu bewohnen.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-sky-700 mb-1">02. DAS CURRICULUM</div>
            <h2 className="font-serif-display text-base font-bold text-slate-900 mb-2">
              Vier Register für vier Schulstufen
            </h2>
            <p className="text-xs text-slate-600 leading-normal">
              Vom Kindergarten („Nichts ist allein“) über die Grundschule („Beziehungen machen uns“) bis zur Oberstufe („Der agentielle Schnitt“): Barads Philosophie als konkrete Schulpraxis.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-emerald-700 mb-1">03. DAS ENACMENT</div>
            <h2 className="font-serif-display text-base font-bold text-slate-900 mb-2">
              Der Körper lernt vor dem Geist
            </h2>
            <p className="text-xs text-slate-600 leading-normal">
              Nicht-lineare Denkformen können nicht rein kognitiv doziert werden. Sie erfordern somatische Spiele, Gedankenexperimente und ästhetische Resonanzräume wie die Sphärenharmonie.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
