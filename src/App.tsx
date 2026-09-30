/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StagesExplorer } from './components/StagesExplorer';
import { CoreFiguresSection } from './components/CoreFiguresSection';
import { SubjectsMatrix } from './components/SubjectsMatrix';
import { ActivityDeck } from './components/ActivityDeck';
import { TeacherHandbook } from './components/TeacherHandbook';
import { GlossaryModal } from './components/GlossaryModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans-body flex flex-col selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Bar Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onNavigate={handleNavigate} />
        
        {/* Stages Explorer: 4 Registers / School Stages */}
        <StagesExplorer />

        {/* 7 Core Figures */}
        <CoreFiguresSection />

        {/* Subjects Matrix */}
        <SubjectsMatrix />

        {/* Lesson Activities Catalog */}
        <ActivityDeck />

        {/* Teacher Handbook: Principles & Didactics */}
        <TeacherHandbook />
      </main>

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
