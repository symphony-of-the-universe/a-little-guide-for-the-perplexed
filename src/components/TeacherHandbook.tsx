import React from 'react';
import { TEACHER_PRINCIPLES } from '../data/curriculumData';
import { ShieldCheck, HelpCircle, Sparkles, BookOpen, Compass, CheckCircle } from 'lucide-react';

export const TeacherHandbook: React.FC = () => {
  return (
    <section id="teachers" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wide uppercase mb-2">
            <span>Kapitel 7 des Curriculums</span>
            <span aria-hidden="true">·</span>
            <span>Haltung, Didaktik & Einwandbehandlung</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Leitfaden für Lehrende
          </h2>
          <p className="text-slate-600 font-sans-body text-base leading-relaxed">
            Wie unterrichtet man Nicht-Linearität, ohne in Mystik zu verfallen oder Schüler*innen zu überfordern? Diese Grundsätze sichern die pädagogische und wissenschaftliche Integrität im Klassenraum.
          </p>
        </div>

        {/* 5 Grundprinzipien Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TEACHER_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-amber-700 block mb-2">
                  PRINZIP {principle.number}
                </span>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-slate-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {principle.text}
                </p>
              </div>
            </div>
          ))}

          {/* Bonus Summary Card */}
          <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-amber-800 block mb-2">
                KERNBOTSCHAFT
              </span>
              <h3 className="font-serif-display text-base sm:text-lg font-bold text-amber-950 mb-3">
                Die vierte Säule: „Learning to be“
              </h3>
              <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
                Der Delors-Bericht der UNESCO forderte 1996 das Lernen des Seins. Das Quantendenken gibt dieser vierten Säule eine präzise wissenschaftliche und ethische Sprache für das 21. Jahrhundert.
              </p>
            </div>
          </div>
        </div>

        {/* COMPARISON MATRIX: Quantum Literacy vs. Quantum Thinking */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 mb-16">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Kapitel 7.4 · Grundunterscheidung
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
              Quantum Literacy (STEM) vs. Quantum Thinking (für alle)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Warum der MINT-Bereich allein die gesellschaftliche Herausforderung nicht lösen kann:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-slate-200">Quantum Literacy (MINT / STEM)</span>
                <span className="text-[11px] font-mono text-slate-500">Fachunterricht</span>
              </div>
              <ul className="space-y-2 text-slate-400 text-xs">
                <li>• <strong>Zielgruppe:</strong> Künftige Fachkräfte und Spezialisten.</li>
                <li>• <strong>Dimensionen:</strong> Wissen (<span className="italic">knowing</span>) und technologische Anwendung (<span className="italic">doing</span>).</li>
                <li>• <strong>Inhalte:</strong> Wellenfunktionen, Qubits, Quantengatter, Halbleiter.</li>
                <li>• <strong>Gefahr:</strong> Schließt oft substanzialistisch; bleibt stur formalistisch („Rechne einfach!“).</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-3">
              <div className="flex items-center justify-between border-b border-amber-900/60 pb-2">
                <span className="font-bold text-amber-300">Quantum Thinking (Für alle)</span>
                <span className="text-[11px] font-mono text-amber-400">Allgemeinbildung</span>
              </div>
              <ul className="space-y-2 text-amber-200/80 text-xs">
                <li>• <strong>Zielgruppe:</strong> Die gesamte heranwachsende Generation.</li>
                <li>• <strong>Dimensionen:</strong> Das Weltverhältnis und In-der-Welt-Sein (<span className="italic">being</span>).</li>
                <li>• <strong>Inhalte:</strong> Ambiguitätstoleranz, Nicht-Linearität, relationale Verantwortung, ethische Urteilskraft.</li>
                <li>• <strong>Ertrag:</strong> Mündige Orientierung in einer Welt von KI, Klimakrisen und sozialer Komplexität.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Handling Objections: Intellectual Honesty vs Esotericism */}
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Kapitel 7.4b · Umgang mit Einwänden</span>
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Intellektuelle Redlichkeit: Strikte Abgrenzung von Esoterik
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 max-w-4xl">
            Lehrende begegnen im Unterricht oft zwei Extremen: Einerseits Schüler*innen, die Quantenphysik für „Zauberei“ oder Wunscherfüllung halten (TikTok-Manifesting), andererseits Kolleg*innen, die jeden nicht-mathematischen Zugang sofort als „unwissenschaftlich“ abtun. 
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-rose-800 block mb-1">Was Quantendenken NICHT ist:</span>
              <ul className="space-y-1 text-slate-600">
                <li>✕ Esoterische „Quantenheilung“ oder magisches Wünschen.</li>
                <li>✕ Der Glaube, dass der menschliche Geist Atome bewegt.</li>
                <li>✕ Die Entwertung physikalischer Gesetze und mathematischer Strenge.</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="font-bold text-emerald-800 block mb-1">Was Quantendenken TATSÄCHLICH leistet:</span>
              <ul className="space-y-1 text-slate-600">
                <li>✓ Eine exakte philosophische Sprache für nicht-lineare Kausalität.</li>
                <li>✓ Das Bewohnen von Unbestimmtheit ohne kognitiven Zwang zur Binarität.</li>
                <li>✓ Die ethische Anerkennung materiell-diskursiver Verwobenheit (Barad).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
