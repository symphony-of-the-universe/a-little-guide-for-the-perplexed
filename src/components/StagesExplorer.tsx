import React, { useState } from 'react';
import { STAGES } from '../data/curriculumData';
import { Stage, StageId } from '../types/curriculum';
import { CheckCircle2, Play, Users, Eye, Scissors, HeartHandshake, Sparkles, HelpCircle } from 'lucide-react';

export const StagesExplorer: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<StageId>('primary');
  
  // Interactive mini-simulation states
  const [webNodes, setWebNodes] = useState<number[]>([1, 2, 3, 4, 5]);
  const [activeRippleNode, setActiveRippleNode] = useState<number | null>(null);

  // Mirror game state for Primary Stage
  const [mirrorBalance, setMirrorBalance] = useState<number>(50); // 0 = A leads, 100 = B leads, 50 = pure intra-action

  // Observer dilemma state for Sek I
  const [observerLens, setObserverLens] = useState<'legal' | 'empathic' | 'systemic'>('legal');

  // Agential Cut state for Sek II
  const [cutThreshold, setCutThreshold] = useState<number>(65);

  const currentStage = STAGES.find(s => s.id === selectedStageId) || STAGES[1];

  const handlePulseNode = (nodeId: number) => {
    setActiveRippleNode(nodeId);
    setTimeout(() => setActiveRippleNode(null), 1200);
  };

  return (
    <section id="stages" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide uppercase mb-2">
            <span>Kapitel 3 des Curriculums</span>
            <span aria-hidden="true">·</span>
            <span>Entwicklungslogik von 4 bis 19 Jahren</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Vier Register für vier Schulstufen
          </h2>
          <p className="text-slate-600 font-sans-body text-base leading-relaxed">
            Quantendenken ist keine abstrakte Physik-Theorie, sondern eine fortschreitende Einübung in relationale Seinsweisen. Jede Bildungsstufe erschließt einen altersgemäßen Zugang zur Überwindung von starrem Entweder-Oder.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-2xl mb-10">
          {STAGES.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`flex flex-col text-left p-3.5 sm:p-4 rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-xs font-mono font-medium text-slate-500">{stage.ageRange}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-amber-600" />}
                </div>
                <div className="font-semibold text-sm sm:text-base text-slate-900 truncate">
                  {stage.name}
                </div>
                <div className="text-xs text-amber-800/80 italic mt-0.5 truncate">
                  {stage.motto}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Content: Split Layout (Left: Pedagogical Core, Right: Interactive Simulation Sandbox) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Conceptual & Practical Deep-Dive (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Motto der Stufe</span>
                <span className="text-sm font-serif italic text-amber-800 font-semibold">{currentStage.motto}</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                {currentStage.description}
              </p>
              
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Pädagogischer Kern:</span>
                  <span className="text-slate-600 leading-normal">{currentStage.pedagogicalCore}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Lebensweltlicher Anker:</span>
                  <span className="text-slate-600 leading-normal">{currentStage.everydayExperience}</span>
                </div>
              </div>
            </div>

            {/* Praxisbeispiel Karte */}
            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-200/60">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide mb-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Ausgearbeitetes Klassenbeispiel</span>
              </div>
              <h3 className="font-serif-display text-lg font-bold text-slate-900 mb-2">
                {currentStage.classroomExample.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-3 font-medium">
                {currentStage.classroomExample.description}
              </p>
              
              <ol className="space-y-1.5 mb-4 text-xs text-slate-600 list-decimal list-inside">
                {currentStage.classroomExample.instructions.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-amber-900">
                <span className="font-semibold block mb-0.5">Der relationale Erkenntnissprung:</span>
                <span>{currentStage.classroomExample.insight}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Sandbox Simulator for this Stage (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl shadow-md border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 block uppercase tracking-wider">Interaktive Simulation</span>
                <span className="font-medium text-sm text-slate-200">
                  {selectedStageId === 'early' && 'Netzwerk der Berührungen'}
                  {selectedStageId === 'primary' && 'Intra-Aktions-Spiegelung'}
                  {selectedStageId === 'lower_sec' && 'Messapparat & Urteil'}
                  {selectedStageId === 'upper_sec' && 'Der Agential Cut'}
                </span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">Live</span>
            </div>

            {/* SIMULATION 1: Early (4-6 Jahre) */}
            {selectedStageId === 'early' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-normal">
                  Klicke auf einen Punkt im Wollfadennetz. Beobachte, wie der Berührungsimpuls durch das Gesamtsystem wandert. Kein Punkt schwingt isoliert.
                </p>

                <div className="relative h-56 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-4 overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 300 200">
                    {/* Connecting lines */}
                    <line x1="60" y1="50" x2="240" y2="50" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="60" y1="50" x2="150" y2="150" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="240" y1="50" x2="150" y2="150" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="60" y1="50" x2="200" y2="130" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="100" y1="130" x2="240" y2="50" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Nodes */}
                    {[
                      { id: 1, cx: 60, cy: 50, label: 'Emma' },
                      { id: 2, cx: 240, cy: 50, label: 'Noah' },
                      { id: 3, cx: 150, cy: 150, label: 'Mia' },
                      { id: 4, cx: 100, cy: 130, label: 'Leo' },
                      { id: 5, cx: 200, cy: 130, label: 'Lina' }
                    ].map((n) => {
                      const isPulsing = activeRippleNode === n.id;
                      return (
                        <g key={n.id} onClick={() => handlePulseNode(n.id)} className="cursor-pointer">
                          {isPulsing && (
                            <circle cx={n.cx} cy={n.cy} r="24" fill="#059669" opacity="0.3" className="animate-ping" />
                          )}
                          <circle
                            cx={n.cx}
                            cy={n.cy}
                            r="12"
                            fill={isPulsing ? '#34d399' : '#047857'}
                            stroke="#10b981"
                            strokeWidth="2"
                            className="transition-colors hover:fill-emerald-400"
                          />
                          <text x={n.cx} y={n.cy + 22} textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif">
                            {n.label}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg text-xs text-emerald-300">
                  {activeRippleNode ? (
                    <span>Impuls übertragen! Die Vibration erreicht alle verbundenen Knoten zugleich.</span>
                  ) : (
                    <span>Tippe auf einen Namen oben, um eine Schwingung auszulösen.</span>
                  )}
                </div>
              </div>
            )}

            {/* SIMULATION 2: Primary (7-10 Jahre) */}
            {selectedStageId === 'primary' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-normal">
                  Verändere den Schieberegler: Von der klassischen Kausalität (Kind A führt) bis zur Baradschen Intra-Aktion (Mitte: Bewegung entsteht im Beziehungsfeld).
                </p>

                <div className="h-44 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={mirrorBalance < 40 ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                      Kind A führt
                    </span>
                    <span className={mirrorBalance >= 40 && mirrorBalance <= 60 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                      ★ Intra-Aktion (Synchron)
                    </span>
                    <span className={mirrorBalance > 60 ? 'text-blue-400 font-bold' : 'text-slate-500'}>
                      Kind B führt
                    </span>
                  </div>

                  {/* Visual Dancing Avatars */}
                  <div className="flex items-center justify-center gap-12 py-2">
                    <div
                      className="w-10 h-10 rounded-full bg-amber-500/80 flex items-center justify-center font-bold text-xs transition-transform duration-300"
                      style={{
                        transform: `translateX(${(mirrorBalance - 50) * 0.4}px) scale(${mirrorBalance < 45 ? 1.15 : 1})`
                      }}
                    >
                      A
                    </div>

                    <div className="h-1 flex-1 bg-gradient-to-r from-amber-500 via-emerald-400 to-blue-500 rounded relative">
                      <div
                        className="w-4 h-4 rounded-full bg-white shadow-md absolute -top-1.5 transition-all duration-150"
                        style={{ left: `calc(${mirrorBalance}% - 8px)` }}
                      />
                    </div>

                    <div
                      className="w-10 h-10 rounded-full bg-blue-500/80 flex items-center justify-center font-bold text-xs transition-transform duration-300"
                      style={{
                        transform: `translateX(${(mirrorBalance - 50) * 0.4}px) scale(${mirrorBalance > 55 ? 1.15 : 1})`
                      }}
                    >
                      B
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={mirrorBalance}
                    onChange={(e) => setMirrorBalance(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg text-xs leading-relaxed">
                  {mirrorBalance >= 40 && mirrorBalance <= 60 ? (
                    <span className="text-emerald-300">
                      <strong>Zustand: Gelungene Resonanz.</strong> Die Bewegung gehört weder A noch B. Beide passen sich im Mikrosekundenbereich aneinander an. Handlung ist relational.
                    </span>
                  ) : (
                    <span className="text-slate-300">
                      Klassisches lineares Kausalitätsmodell: Ein Subjekt bestimmt, das andere gehorcht (Ursache $\to$ Wirkung). Schiebe den Regler in die Mitte für Intra-Aktion!
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* SIMULATION 3: Lower Sec (11-15 Jahre) */}
            {selectedStageId === 'lower_sec' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-normal">
                  Derselbe Vorfall (Smartphone fällt im Unterricht herunter). Wähle die Messanordnung (Brille), um zu sehen, wie die Wirklichkeit je nach Fragekategorie kollabiert:
                </p>

                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setObserverLens('legal')}
                    className={`py-1.5 px-2 text-xs rounded-lg transition-all cursor-pointer ${
                      observerLens === 'legal' ? 'bg-amber-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Juristisch
                  </button>
                  <button
                    onClick={() => setObserverLens('empathic')}
                    className={`py-1.5 px-2 text-xs rounded-lg transition-all cursor-pointer ${
                      observerLens === 'empathic' ? 'bg-sky-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Empathisch
                  </button>
                  <button
                    onClick={() => setObserverLens('systemic')}
                    className={`py-1.5 px-2 text-xs rounded-lg transition-all cursor-pointer ${
                      observerLens === 'systemic' ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Systemisch
                  </button>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
                  <div className="text-slate-400 font-mono">Messausgang (Kollabierte Realität):</div>
                  {observerLens === 'legal' && (
                    <div className="text-amber-300">
                      <strong>Befund:</strong> „Schüler Paul hat Schulordnung §4 verletzt (Handyverbot). Sachbeschädigung durch Fahrlässigkeit. Schuldfrage eindeutig geklärt.“
                    </div>
                  )}
                  {observerLens === 'empathic' && (
                    <div className="text-sky-300">
                      <strong>Befund:</strong> „Paul erhielt eine Notfallnachricht seiner Mutter. Zitterte vor Sorge. Das Fallenlassen war Folge existenzieller Anspannung.“
                    </div>
                  )}
                  {observerLens === 'systemic' && (
                    <div className="text-emerald-300">
                      <strong>Befund:</strong> „Die Schulbank wackelte, die Raumtemperatur war drückend, drei Mitschüler rempelten. Das Ereignis ist die Überlagerung vieler Faktoren.“
                    </div>
                  )}
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg text-xs text-slate-300 leading-normal">
                  <strong>Erkenntnis für Schüler*innen:</strong> Es gibt kein neutrales „Was wirklich geschah“ ohne die Messfrage, die wir an den Fall richten.
                </div>
              </div>
            )}

            {/* SIMULATION 4: Upper Sec (16-19 Jahre) */}
            {selectedStageId === 'upper_sec' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-normal">
                  Fallbeispiel: <strong>KI-Triage in der Notaufnahme</strong>. Verschiebe die Schnittkante, um zu sehen, welche Leben als „behandelbar“ definiert werden und was der Schnitt ausschließt.
                </p>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Automatische Triage-Schwelle:</span>
                    <span className="text-rose-400 font-bold">{cutThreshold}% Überlebenschance</span>
                  </div>

                  <input
                    type="range"
                    min="30"
                    max="90"
                    value={cutThreshold}
                    onChange={(e) => setCutThreshold(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                    <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                      <span className="font-bold block mb-1">Eingeschlossen (Behandelt):</span>
                      <span>Patienten &gt; {cutThreshold}% (Statistisch hohe Erfolgsquote)</span>
                    </div>

                    <div className="p-2.5 rounded bg-rose-950/60 border border-rose-800/60 text-rose-300">
                      <span className="font-bold block mb-1">Gegenlesart (Ausgeschlossen):</span>
                      <span>Ältere, Multimorbide oder untypische Fälle fallen durchs Raster.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-lg text-xs text-rose-200 leading-normal">
                  <strong>Barads Agential Cut:</strong> Die Grenze ist kein Naturgesetz, sondern eine menschlich-algorithmische Tat. Mündigkeit heißt: Die Verantwortung für das Ausgeschlossene tragen.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
