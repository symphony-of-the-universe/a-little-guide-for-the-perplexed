export type StageId = 'early' | 'primary' | 'lower_sec' | 'upper_sec';

export interface Stage {
  id: StageId;
  ageRange: string;
  name: string;
  motto: string;
  color: string;
  accentColor: string;
  description: string;
  pedagogicalCore: string;
  everydayExperience: string;
  classroomExample: {
    title: string;
    description: string;
    instructions: string[];
    insight: string;
  };
  interactiveSimulationType: 'mirror' | 'observer' | 'cut' | 'collective';
}

export interface CoreFigure {
  id: string;
  title: string;
  subtitle: string;
  quantumEquivalent: string;
  classicalContrast: string;
  livedMeaning: string;
  pedagogicalGoal: string;
  classroomPrompt: string;
}

export type SubjectId =
  | 'physics'
  | 'german'
  | 'math'
  | 'history'
  | 'geography'
  | 'art'
  | 'music'
  | 'ethics'
  | 'cs';

export interface SubjectModule {
  id: SubjectId;
  name: string;
  category: string;
  iconName: string;
  coreQuestion: string;
  traditionalTeaching: string;
  quantumThinkingShift: string;
  concreteActivity: {
    title: string;
    duration: string;
    description: string;
    stepByStep: string[];
  };
  transversalConnection: string;
}

export interface ActivityCard {
  id: string;
  title: string;
  stageId: StageId;
  stageName: string;
  subject: string;
  format: 'Körperspiel' | 'Gedankenexperiment' | 'Kreatives Bauen' | 'Dilemma-Debatte' | 'Klang-Erkundung';
  duration: string;
  shortSummary: string;
  learningGoal: string;
  materials: string[];
  procedure: string[];
  reflectionQuestions: string[];
}

export interface GlossaryTerm {
  term: string;
  authorOrOrigin: string;
  shortDefinition: string;
  detailedContext: string;
  relevanceForEducation: string;
}
