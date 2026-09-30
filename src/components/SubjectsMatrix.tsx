import React, { useState } from 'react';
import { SUBJECT_MODULES } from '../data/curriculumData';
import { SubjectId, SubjectModule } from '../types/curriculum';
import { BookOpen, Atom, Landmark, Palette, Music, Compass, Binary, Cpu, Clock, Layers, Sparkles } from 'lucide-react';

const SUBJECT_ICONS: Record<SubjectId, React.ReactNode> = {
  physics: <Atom className="w-4 h-4" />,
  german: <BookOpen className="w-4 h-4" />,
  history: <Landmark className="w-4 h-4" />,
  art: <Palette className="w-4 h-4" />,
  music: <Music className="w-4 h-4" />,
  ethics: <Compass className="w-4 h-4" />,
  math: <Binary className="w-4 h-4" />,
  cs: <Cpu className="w-4 h-4" />,
  geography: <Compass className="w-4 h-4" />
};

export const SubjectsMatrix: React.FC = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('physics');

  const activeModule = SUBJECT_MODULES.find(m => m.id === selectedSubjectId) || SUBJECT_MODULES[0];

  return (
    <section id="subjects" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide uppercase mb-2">
            <span>Kapitel 4 & 5 des Curriculums</span>
            <span aria-hidden="true">·</span>
            <span>Transversale Schulfächer-Matrix</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Das Curriculum in der Logik der Fächer
          </h2>
          <p className="text-slate-600 font-sans-body text-base leading-relaxed">
            Quantendenken benötigt kein neues isoliertes Schulfach. Es wirkt als transversaler Katalysator: Es zeigt, wie Physik, Literatur, Geschichte, Kunst und Informatik in Resonanz treten.
          </p>
        </div>

        {/* Subject Filter Pills / Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-slate-100 rounded-2xl">
          {SUBJECT_MODULES.map((subject) => {
            const isSelected = subject.id === selectedSubjectId;
            return (
              <button
                key={subject.id}
                onClick={() => setSelectedSubjectId(subject.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span className={isSelected ? 'text-amber-700' : 'text-slate-400'}>
                  {SUBJECT_ICONS[subject.id]}
                </span>
                <span>{subject.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Subject Module Display Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 sm:p-8 mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                {SUBJECT_ICONS[activeModule.id]}
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase">{activeModule.category}</span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900">
                  {activeModule.name}
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              Leitfrage des Fachs
            </div>
          </div>

          {/* Core Question Callout */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs mb-8">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide block mb-1">
              Die ontologische Leitfrage im Unterricht:
            </span>
            <p className="font-serif-display text-base sm:text-lg text-slate-900 italic">
              „{activeModule.coreQuestion}“
            </p>
          </div>

          {/* Traditional vs Quantum Shift */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs sm:text-sm">
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <span className="font-semibold text-slate-500 uppercase tracking-wider block mb-2 text-xs">
                Traditioneller Unterricht (Linear/Substanz)
              </span>
              <p className="text-slate-700 leading-relaxed">
                {activeModule.traditionalTeaching}
              </p>
            </div>

            <div className="p-5 bg-amber-50/50 rounded-xl border border-amber-200/80">
              <span className="font-semibold text-amber-800 uppercase tracking-wider block mb-2 text-xs">
                Quanten-Relationaler Shift (Werden & Beziehung)
              </span>
              <p className="text-slate-800 leading-relaxed">
                {activeModule.quantumThinkingShift}
              </p>
            </div>
          </div>

          {/* Concrete Activity in this Subject */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <h4 className="font-serif-display text-base font-bold text-slate-900">
                  Konkrete Unterrichtseinheit: {activeModule.concreteActivity.title}
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeModule.concreteActivity.duration}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              {activeModule.concreteActivity.description}
            </p>

            <div className="space-y-2 text-xs text-slate-700 mb-4 bg-slate-50 p-4 rounded-lg">
              <span className="font-semibold text-slate-900 block mb-1">Schritt-für-Schritt Ablauf:</span>
              <ol className="list-decimal list-inside space-y-1.5">
                {activeModule.concreteActivity.stepByStep.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-2 border-t border-slate-100">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span><strong>Transversale Resonanz:</strong> {activeModule.transversalConnection}</span>
            </div>
          </div>

        </div>

        {/* Highlight Banner: Das ausgearbeitete Knotenprojekt "Der Ripple-Effekt" (Kapitel 5.1) */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-lg border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1.5">
                Kapitel 5.1 · Transversales Knotenprojekt
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold mb-2 text-white">
                Der Ripple-Effekt: Wenn Schulfächer in Resonanz treten
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ein fächerübergreifendes Projekt für Projekttage oder Wochenpläne. Schüler*innen untersuchen eine reale Krise (z. B. Mikroplastik, Algorithmen in der Schule, Stadtklima) simultan aus physikalischer, literarischer, geschichtlicher und ethischer Perspektive. Sie lernen: Kein Fach besitzt das Monopol auf die Wirklichkeit.
              </p>
            </div>
            
            <div className="shrink-0 flex items-center gap-3">
              <div className="p-3 bg-slate-800 rounded-xl text-center">
                <span className="block text-xl font-bold text-amber-400 font-mono">4–6</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Fächer beteiligt</span>
              </div>
              <div className="p-3 bg-slate-800 rounded-xl text-center">
                <span className="block text-xl font-bold text-emerald-400 font-mono">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Transversal</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
