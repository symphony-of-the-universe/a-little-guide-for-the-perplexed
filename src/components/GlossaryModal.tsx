import React, { useState } from 'react';
import { GLOSSARY } from '../data/curriculumData';
import { X, Search, BookOpen, ExternalLink } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredTerms = GLOSSARY.filter(t =>
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.authorOrOrigin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-display text-xl font-bold text-slate-900">
                Glossar der Schlüsselbegriffe
              </h3>
              <p className="text-xs text-slate-500">
                Kapitel 9 des Curriculums · Theoretische Fundierung
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Begriff oder Denker*in suchen (z. B. Barad, Kosmotechnik, Intra-Aktion)..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Scrollable Terms List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-6 last:border-none last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <h4 className="font-serif-display text-base sm:text-lg font-bold text-slate-900">
                    {term.term}
                  </h4>
                  <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    {term.authorOrOrigin}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  {term.shortDefinition}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {term.detailedContext}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-0.5">Relevanz für Bildung:</span>
                  <span>{term.relevanceForEducation}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400 text-sm">
              Kein Begriff zu „{searchTerm}“ gefunden.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
