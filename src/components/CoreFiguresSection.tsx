import React, { useState } from 'react';
import { CORE_FIGURES } from '../data/curriculumData';
import { CoreFigure } from '../types/curriculum';
import { HelpCircle, Sparkles, ChevronRight, MessageSquare, ArrowRightLeft } from 'lucide-react';

export const CoreFiguresSection: React.FC = () => {
  const [selectedFigureId, setSelectedFigureId] = useState<string>(CORE_FIGURES[0].id);

  const selectedFigure = CORE_FIGURES.find(f => f.id === selectedFigureId) || CORE_FIGURES[0];

  return (
    <section id="figures" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide uppercase mb-2">
            <span>Kapitel 1.3 des Curriculums</span>
            <span aria-hidden="true">·</span>
            <span>Begriffsmatrix für die Schulpraxis</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Sieben Grundfiguren des Quantendenkens
          </h2>
          <p className="text-slate-600 font-sans-body text-base leading-relaxed">
            Wie übersetzt man Quantenprinzipien so in den Bildungsalltag, dass sie weder in abstrakten Formeln erstarren noch in New-Age-Mystik kippen? Diese sieben Grundfiguren bilden das Vokabular für eine relationale Bildung.
          </p>
        </div>

        {/* Desktop/Tablet Grid: Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Selector List of Figures (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {CORE_FIGURES.map((fig, idx) => {
              const isSelected = fig.id === selectedFigureId;
              return (
                <button
                  key={fig.id}
                  onClick={() => setSelectedFigureId(fig.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-amber-600/40 shadow-sm text-slate-900 ring-1 ring-amber-600/20'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-700'
                  }`}
                >
                  <div className="flex items-baseline gap-3 truncate">
                    <span className="font-mono text-xs text-slate-400 font-semibold">{`0${idx + 1}`}</span>
                    <div className="truncate">
                      <div className="font-serif-display font-semibold text-sm sm:text-base text-slate-900 truncate">
                        {fig.title}
                      </div>
                      <div className="text-xs text-slate-500 truncate mt-0.5">
                        {fig.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? 'translate-x-1 text-amber-600' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-mono font-medium text-amber-700 uppercase tracking-wider block mb-1">
                Grundfigur
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900">
                {selectedFigure.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 italic font-serif mt-1">
                {selectedFigure.subtitle}
              </p>
            </div>

            {/* Contrast Comparison Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Klassischer Reflex (Binarität)
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {selectedFigure.classicalContrast}
                </p>
              </div>

              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs">
                <span className="font-semibold text-amber-800 uppercase tracking-wider block mb-1.5">
                  Quanten-Relationale Verschiebung
                </span>
                <p className="text-amber-950 leading-relaxed">
                  {selectedFigure.quantumEquivalent}
                </p>
              </div>
            </div>

            {/* Lived Meaning & Pedagogical Goal */}
            <div className="space-y-4 mb-6 text-sm text-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1">
                  Lebensweltliche Bedeutung:
                </h4>
                <p className="leading-relaxed text-slate-700">
                  {selectedFigure.livedMeaning}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-1">
                  Pädagogisches Ziel im Unterricht:
                </h4>
                <p className="leading-relaxed text-slate-700">
                  {selectedFigure.pedagogicalGoal}
                </p>
              </div>
            </div>

            {/* Classroom Question Prompt */}
            <div className="p-4 bg-slate-900 rounded-xl text-white">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Impulsfrage für den Unterricht</span>
              </div>
              <p className="font-serif-display text-sm sm:text-base italic text-slate-100 leading-normal">
                {selectedFigure.classroomPrompt}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
