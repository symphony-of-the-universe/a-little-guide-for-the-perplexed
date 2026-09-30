import React, { useState } from 'react';
import { ACTIVITIES } from '../data/curriculumData';
import { ActivityCard, StageId } from '../types/curriculum';
import { Clock, BookOpen, Sparkles, Filter, X, Printer, Check, Copy } from 'lucide-react';

export const ActivityDeck: React.FC = () => {
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('all');
  const [selectedFormatFilter, setSelectedFormatFilter] = useState<string>('all');
  const [activeModalActivity, setActiveModalActivity] = useState<ActivityCard | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const filteredActivities = ACTIVITIES.filter((act) => {
    const matchesStage = selectedStageFilter === 'all' || act.stageId === selectedStageFilter;
    const matchesFormat = selectedFormatFilter === 'all' || act.format === selectedFormatFilter;
    return matchesStage && matchesFormat;
  });

  const handleCopyLessonPlan = (act: ActivityCard) => {
    const text = `UNTERRICHTSPLAN: ${act.title}
Stufe: ${act.stageName} | Format: ${act.format} | Dauer: ${act.duration}
Fachbezug: ${act.subject}

LERNZIEL:
${act.learningGoal}

MATERIALIEN:
${act.materials.map(m => `- ${m}`).join('\n')}

ABLAUF:
${act.procedure.map((p, idx) => `${idx + 1}. ${p}`).join('\n')}

REFLEXIONSFRAGEN:
${act.reflectionQuestions.map((q, idx) => `${idx + 1}. ${q}`).join('\n')}

Aus dem Curriculum: „A Little Guide for the Perplexed“ (Štimac 2026)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="activities" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide uppercase mb-2">
            <span>Kapitel 8 des Curriculums</span>
            <span aria-hidden="true">·</span>
            <span>Spielen, Bauen, Experimentieren</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Aktivitätensammlung für den Unterricht
          </h2>
          <p className="text-slate-600 font-sans-body text-base leading-relaxed">
            Erprobte Übungen, somatische Spiele und ethische Gedankenexperimente, die das Nicht-Lineare leiblich und diskursiv in den Klassenraum bringen.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white rounded-2xl border border-slate-200 mb-8 shadow-xs">
          
          {/* Stage Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-2">Stufe:</span>
            {[
              { id: 'all', label: 'Alle Stufen' },
              { id: 'primary', label: 'Primarstufe (7–10 J.)' },
              { id: 'lower_sec', label: 'Sek I (11–15 J.)' },
              { id: 'upper_sec', label: 'Sek II (16–19 J.)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedStageFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedStageFilter === f.id
                    ? 'bg-amber-100 text-amber-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Format Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Format:</span>
            {[
              { id: 'all', label: 'Alle' },
              { id: 'Körperspiel', label: 'Körperspiel' },
              { id: 'Dilemma-Debatte', label: 'Dilemma' },
              { id: 'Gedankenexperiment', label: 'Gedankenexperiment' },
              { id: 'Klang-Erkundung', label: 'Klang' }
            ].map(fmt => (
              <button
                key={fmt.id}
                onClick={() => setSelectedFormatFilter(fmt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedFormatFilter === fmt.id
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {fmt.label}
              </button>
            ))}
          </div>

        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{act.stageName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-amber-700">{act.format}</span>
                </div>

                <h3 className="font-serif-display text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {act.title}
                </h3>

                <p className="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {act.shortSummary}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-xs text-slate-700">
                  <span className="font-semibold block mb-0.5 text-slate-900">Lernziel:</span>
                  <span>{act.learningGoal}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{act.duration}</span>
                </div>

                <button
                  onClick={() => setActiveModalActivity(act)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                >
                  Unterrichtsplan ansehen $\to$
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Full Activity Lesson Plan Sheet */}
        {activeModalActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200">
              
              <div className="flex items-start justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <div className="text-xs text-amber-800 font-semibold uppercase tracking-wider mb-1">
                    {activeModalActivity.stageName} · {activeModalActivity.format} · {activeModalActivity.duration}
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-slate-900">
                    {activeModalActivity.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    Fachbereich: {activeModalActivity.subject}
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalActivity(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-sm text-slate-700">
                
                <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-950">
                  <span className="font-bold block mb-1">Pädagogisches Ziel:</span>
                  <span>{activeModalActivity.learningGoal}</span>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-2">
                    Benötigte Materialien:
                  </h4>
                  <ul className="list-disc list-inside text-xs space-y-1 text-slate-600">
                    {activeModalActivity.materials.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-2">
                    Ablauf im Unterricht:
                  </h4>
                  <ol className="list-decimal list-inside space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl">
                    {activeModalActivity.procedure.map((step, i) => (
                      <li key={i} className="leading-relaxed">
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider mb-2">
                    Reflexionsfragen für die Auswertung:
                  </h4>
                  <div className="space-y-1.5">
                    {activeModalActivity.reflectionQuestions.map((q, i) => (
                      <div key={i} className="p-2.5 bg-slate-100 rounded-lg text-xs text-slate-800 font-serif italic">
                        „{q}“
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => handleCopyLessonPlan(activeModalActivity)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'In die Zwischenablage kopiert!' : 'Unterrichtsplan kopieren'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Drucken</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
