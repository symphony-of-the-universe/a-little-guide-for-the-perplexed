import { Stage, CoreFigure, SubjectModule, ActivityCard, GlossaryTerm } from '../types/curriculum';

export const STAGES: Stage[] = [
  {
    id: 'early',
    ageRange: '4–6 Jahre',
    name: 'Frühkindliche Bildung',
    motto: '„Nichts ist allein“',
    color: 'emerald',
    accentColor: '#059669',
    description: 'Im frühkindlichen Erleben sind Dinge noch nicht starr von ihrer Umgebung getrennt. Kinder begreifen die Welt zuerst über Berührung, Resonanz und Miteinander.',
    pedagogicalCore: 'Förderung des Bewusstseins für Verbundenheit und gegenseitige Fürsorge, bevor kognitive Isolierung und starre Subjekt-Objekt-Spaltung einsetzen.',
    everydayExperience: 'Ein Kind tröstet einen umgefallenen Stuhl oder bemerkt, dass Pflanzen die Stimme hören. Die Natur ist kein toter Hintergrund, sondern Mit-Akteurin.',
    classroomExample: {
      title: 'Das Spinnennetz der Berührungen',
      description: 'Ein Wollfaden-Netz verbindet alle Kinder im Kreis.',
      instructions: [
        'Alle Kinder sitzen im Kreis. Ein Kind hält den Wollknäuel fest und rollt ihn zu einem anderen Kind.',
        'Nach wenigen Minuten entsteht ein sichtbares Netz, das alle miteinander verbindet.',
        'Ein Kind zupft nun ganz sanft an seinem Faden. Alle anderen spüren den Impuls an ihren Fingern.'
      ],
      insight: 'Es gibt keine isolierten Bewegungen. Was ein Teilchen/Kind tut, schwingt im ganzen Gewebe mit.'
    },
    interactiveSimulationType: 'collective'
  },
  {
    id: 'primary',
    ageRange: '7–10 Jahre',
    name: 'Primarstufe / Grundschule',
    motto: '„Beziehungen machen uns“',
    color: 'blue',
    accentColor: '#2563eb',
    description: 'In der Grundschule lernen Kinder Kategorien, Grammatik und Zahlen. Hier gilt es zu zeigen: Kategorien sind nützlich, aber sie sind Effekte von Beziehungen, nicht umgekehrt.',
    pedagogicalCore: 'Vom isolierten Individuum zur relationalen Ko-Konstitution: Niemand ist fertig, bevor er anderen begegnet.',
    everydayExperience: '„Mit Tim bin ich mutig, mit Oma bin ich ruhig.“ Wer bin ich wirklich? Beide Versionen sind wahr – meine Identität entsteht im Beziehungsfeld.',
    classroomExample: {
      title: 'Das somatische Spiegel- & Resonanzspiel',
      description: 'Zwei Kinder tanzen ohne Absprache synchron.',
      instructions: [
        'Zwei Kinder stehen sich lautlos gegenüber, die Handflächen berühren sich fast (ca. 2 cm Abstand).',
        'Sie beginnen eine gemeinsame fließende Bewegung im Raum.',
        'Wichtig: Niemand bestimmt, wer führt und wer folgt. Die Bewegung entsteht im Zwischenraum.'
      ],
      insight: 'Handeln ist nicht die Tat eines isolierten Subjekts (A $\\to$ B), sondern ein emergentes Beziehungsereignis (Intra-Aktion).'
    },
    interactiveSimulationType: 'mirror'
  },
  {
    id: 'lower_sec',
    ageRange: '11–15 Jahre',
    name: 'Sekundarstufe I',
    motto: '„Die Grenze entsteht im Blick“',
    color: 'amber',
    accentColor: '#d97706',
    description: 'In der Mittelstufe verhärten sich Urteile über Richtig/Falsch, Gut/Böse, Wissenschaft/Glaube. Das Curriculum öffnet den Raum für das Messproblem und Kontextualität.',
    pedagogicalCore: 'Erkennen, dass die Frage, die wir an ein System stellen, das Ergebnis der Antwort mitkonstituiert (Beobachterabhängigkeit).',
    everydayExperience: 'In sozialen Medien: Verändert die Anwesenheit der Kamera mein Verhalten? Bin ich dieselbe Person, wenn mich niemand beobachtet?',
    classroomExample: {
      title: 'Das Zeugen- und Perspektiv-Dilemma',
      description: 'Derselbe Streitfall wird unter zwei gegensätzlichen Messanordnungen betrachtet.',
      instructions: [
        'Gruppe A analysiert einen Konflikt rein juristisch (Wer hat welche Regel verletzt?).',
        'Gruppe B analysiert denselben Konflikt empathisch-systemisch (Welche Vorgeschichte und Ängste trafen aufeinander?).',
        'Beide Gruppen stellen ihre Urteile nebeneinander.'
      ],
      insight: 'Die Messanordnung bestimmt das Phänomen. Objektivität bedeutet nicht Neutralität, sondern Ausweisen des eigenen Standorts.'
    },
    interactiveSimulationType: 'observer'
  },
  {
    id: 'upper_sec',
    ageRange: '16–19 Jahre',
    name: 'Sekundarstufe II / Gymnasiale Oberstufe',
    motto: '„Der agentielle Schnitt“',
    color: 'rose',
    accentColor: '#e11d48',
    description: 'Junge Erwachsene stehen vor Berufs- und Lebensentscheidungen. Hier wird der agentielle Realismus zur praktischen Ethik und politischen Urteilskraft.',
    pedagogicalCore: 'Ethico-Onto-Epistemologie nach Karen Barad: Jede Definition und Grenzziehung erzeugt Wirklichkeit und schließt anderes aus. Dafür müssen wir Verantwortung tragen.',
    everydayExperience: 'KI-Filter, Grenzregime, Klimakrise: Wo ziehen wir die Grenze zwischen Mensch und Maschine, Natur und Kultur, Einheimisch und Fremd?',
    classroomExample: {
      title: 'Das Agential-Cut-Tribunal (Der Ripple-Effekt)',
      description: 'Entscheidungsfindung in hochkomplexen socio-technischen Dilemmata.',
      instructions: [
        'Ein Fallbeispiel: Autonomes Fahren oder KI-Verteilung knapper Güter in der Medizin.',
        'Die Schüler*innen müssen einen konkreten Entscheidungsschnitt (Schnittkante) festlegen.',
        'Anschließend dokumentieren sie in einer Gegenlesart-Spalte: Was wurde durch diesen Schnitt unsichtbar oder entwertet?'
      ],
      insight: 'Grenzen sind nicht in Stein gemeißelt in der Natur vorgefunden, sondern werden vollzogen. Ethik ist die Verantwortung für den Schnitt.'
    },
    interactiveSimulationType: 'cut'
  }
];

export const CORE_FIGURES: CoreFigure[] = [
  {
    id: 'superposition',
    title: 'Superposition',
    subtitle: 'Die Ko-Präsenz unvereinbarer Möglichkeiten',
    quantumEquivalent: 'Zustandsüberlagerung: Ein physikalisches System befindet sich vor der Messung in einer simultanen Überlagerung mehrerer möglicher Zustände.',
    classicalContrast: 'Klassisches Entweder-Oder: Ein Ding ist entweder hier oder dort, wahr oder falsch, 0 oder 1.',
    livedMeaning: 'Die Fähigkeit, Widersprüche und Ambivalenzen im eigenen Leben und in Beziehungen auszuhalten, ohne sie voreilig zu vereinfachen.',
    pedagogicalGoal: 'Ambiguitätstoleranz als Haltung: Nicht-Wissen und Zögern als Raum schöpferischer Potenzialität begreifen.',
    classroomPrompt: '„In welchen Situationen deines Lebens bist du gleichzeitig zwei scheinbar widersprüchliche Dinge – und warum ist beides wahr?“'
  },
  {
    id: 'intra_action',
    title: 'Intra-Aktion',
    subtitle: 'Konstitution vor Entität',
    quantumEquivalent: 'Nach Karen Barad: Phänomene entstehen nicht durch Interaktion bereits existierender Teilchen, sondern Entitäten formieren sich erst im Beziehungsgeschehen.',
    classicalContrast: 'Inter-Aktion (Billardball-Modell): Feste Objekte prallen aufeinander und behalten ihre unveränderliche Identität bei.',
    livedMeaning: 'Wir begegnen anderen nicht als fertige Monaden; was wir denken, fühlen und sind, wird im Vollzug des Miteinanders kontinuierlich neu geformt.',
    pedagogicalGoal: 'Überwindung des individualistischen Egos zugunsten geteilter, lebendiger Verantwortung.',
    classroomPrompt: '„Wer wärst du ohne deine Freundschaften, deine Sprache, deinen Ort? Gibt es ein ‚Du‘ ganz ohne Umwelt?“'
  },
  {
    id: 'agential_cut',
    title: 'Agentieller Schnitt',
    subtitle: 'Verantwortungsvolle Grenzziehung',
    quantumEquivalent: 'Die temporäre Trennung von Messapparat und Messobjekt innerhalb eines untrennbaren Phänomens.',
    classicalContrast: 'Vorgegebene, ewige Naturgesetze und starre ontologische Schubladen.',
    livedMeaning: 'Jede Definition, jedes Urteil und jedes Gesetz zieht eine Grenze. Diese Grenze ist nicht absolut, sondern ein verantwortungsvoller Akt des Menschen.',
    pedagogicalGoal: 'Kritische Urteilskraft: Erkennen, was bei jeder Festlegung einbezogen und was ausgeschlossen wird.',
    classroomPrompt: '„Wenn wir ein Kind als ‚begabt‘ oder ‚verhaltensauffällig‘ einstufen – welche Möglichkeiten schneiden wir damit ab?“'
  },
  {
    id: 'complementarity',
    title: 'Komplementarität',
    subtitle: 'Zwei sich ausschließende, notwendige Wahrheiten',
    quantumEquivalent: 'Niels Bohr: Welle und Teilchen schlagen einander scheinbar aus, sind aber beide zur vollständigen Beschreibung der Wirklichkeit nötig.',
    classicalContrast: 'Satz vom ausgeschlossenen Dritten (Tertium non datur): Nur eine Aussage kann wahr sein, die andere muss falsch sein.',
    livedMeaning: 'Newton (spektrale Zerlegung) und Goethe (Polarität von Licht und Finsternis) schließen einander physikalisch nicht aus, sondern ergänzen sich phänomenologisch.',
    pedagogicalGoal: 'Transdisziplinarität: Kunst, Religion und Wissenschaft als komplementäre Weisen der Weltbegegnung verstehen.',
    classroomPrompt: '„Wie kann eine Person gleichzeitig gerecht und barmherzig sein? Wo ergänzen sich Strenge und Liebe?“'
  },
  {
    id: 'entanglement',
    title: 'Verschränkung',
    subtitle: 'Ganzheitliche Nicht-Lokalität',
    quantumEquivalent: 'Zwei verschränkte Teilchen bilden ein unteilbares Gesamtsystem – die Zustandsänderung des einen korreliert unmittelbar mit dem anderen.',
    classicalContrast: 'Lokaler Realismus: Einwirkung erfordert direkten physischen Kontakt oder zeitlich verzögerte Signalübertragung.',
    livedMeaning: 'Ökologische und gesellschaftliche Verwobenheit: Unser Konsum in Europa hat sofortige Auswirkungen auf Ökosysteme im Globalen Süden.',
    pedagogicalGoal: 'Systemische Weitsicht und planetare Achtsamkeit ohne geografische Verdrängung.',
    classroomPrompt: '„Welche unsichtbaren Fäden verbinden dein Smartphone mit Minen im Kongo und Servern in Kalifornien?“'
  },
  {
    id: 'emergence',
    title: 'Emergenz',
    subtitle: 'Das Ganze ist qualitativ neu',
    quantumEquivalent: 'Aus der Verschränkung von Quantenzuständen entstehen makroskopische Eigenschaften (wie Supraleitung), die keinem Einzelteil innewohnen.',
    classicalContrast: 'Reduktionismus: Das Ganze ist nichts weiter als die mechanische Summe seiner kleinsten Bausteine.',
    livedMeaning: 'Aus einzelnen Noten entsteht Musik, aus Buchstaben Poesie, aus einzelnen Schüler*innen eine lebendige Klassengemeinschaft.',
    pedagogicalGoal: 'Vertrauen in kreative Prozesse und Gemeinschaftsleistungen jenseits mechanischer Kontrolle.',
    classroomPrompt: '„Wo hast du erlebt, dass eine Gruppe plötzlich Ideen hervorbrachte, die kein Einzelner allein gehabt hätte?“'
  },
  {
    id: 'oscillation',
    title: 'Oszillation & Landung',
    subtitle: 'Ambiguität bewohnen lernen',
    quantumEquivalent: 'Die Phase der epistemischen Offenheit (Superposition) und der Übergang in ein relationales Phänomen ohne substanzialistischen Rückfall.',
    classicalContrast: 'Vorschnelle Schließung: Flucht vor Ungewissheit in Dogmatismus, Mystik oder szientistische Rechenroutinen.',
    livedMeaning: 'Die Fähigkeit, im Nicht-Wissen präsent zu bleiben, bis eine tragfähige, lebensnahe Ausrichtung (relationale Landung) möglich wird.',
    pedagogicalGoal: 'Die Befähigung zum Dwelling in Indeterminacy – dem angstfreien Verweilen im Werden.',
    classroomPrompt: '„Wie fühlt es sich an, wenn du eine Frage noch nicht beantworten kannst, aber neugierig bleibst?“'
  }
];

export const SUBJECT_MODULES: SubjectModule[] = [
  {
    id: 'physics',
    name: 'Physik & Naturwissenschaften',
    category: 'STEM / MINT',
    iconName: 'Atom',
    coreQuestion: 'Wie überwinden wir den bloßen Berechnungsformalismus hin zu einem Verständnis relationaler Natur?',
    traditionalTeaching: 'Schüler*innen berechnen De-Broglie-Wellenlängen oder memorieren Orbitale, ohne jemals die ontologische Bedeutung für das Weltbild zu diskutieren.',
    quantumThinkingShift: 'Von der abstrakten Formel zur Messphilosophie: Experimente werden als agentiale Schnitte verstanden, bei denen der Versuchsaufbau das Messergebnis co-kreiert.',
    concreteActivity: {
      title: 'Das Doppelspalt-Theater',
      duration: '45 Minuten',
      description: 'Lernende inszenieren das Doppelspalt-Experiment leiblich mit und ohne Messapparat.',
      stepByStep: [
        'Zwei Türen im Klassenzimmer symbolisieren die Spalte.',
        'Ein Kind geht hindurch, während alle wegschauen (Interferenzmuster auf dem Boden mit bunten Tüchern).',
        'Im zweiten Durchgang stellt sich ein „Messdetektor“ vor die Tür. Sofort kollabiert das Muster in zwei diskrete Häufchen.',
        'Gemeinsame Diskussion: Was hat der Beobachter mit dem Verhalten des Teilchens zu tun?'
      ]
    },
    transversalConnection: 'Resonanz zu Philosophie (Erkenntnistheorie) und Informatik (Messprobleme in Quanten-Algorithmen).'
  },
  {
    id: 'german',
    name: 'Deutsch & Literatur',
    category: 'Sprach- & Kulturwissenschaften',
    iconName: 'BookOpen',
    coreQuestion: 'Wie prägt unsere lineare Grammatik (Subjekt-Verb-Objekt) unser Weltbild – und wie bricht Literatur dies auf?',
    traditionalTeaching: 'Traditionelle Textanalyse sucht nach der „einen richtigen Interpretation“ oder dem festen Charakterprofil einer Figur.',
    quantumThinkingShift: 'Figuren als relationale Superpositionen lesen (z. B. Faust oder zeitgenössische transkulturelle Romane): Ambivalenz als Kunstform anerkennen.',
    concreteActivity: {
      title: 'Die Überlagerungs-Erzählung',
      duration: '90 Minuten',
      description: 'Verfassen von kurzen Texten, in denen zwei Verläufe gleichzeitig wahr bleiben.',
      stepByStep: [
        'Die Schüler*innen schreiben eine Kurzgeschichte, deren Wendepunkt nicht in ein Entweder-Oder aufgelöst wird.',
        'Die Figur trifft gleichzeitig die Wahl A und die Wahl B – die Konsequenzen fließen ineinander.',
        'Reflexion: Wie wehrt sich unsere gewohnte Grammatik gegen diese Vielstimmigkeit?'
      ]
    },
    transversalConnection: 'Resonanz zu Kunst (Kubismus/Collage) und Geschichte (kontrafaktische Geschichtsschreibung).'
  },
  {
    id: 'history',
    name: 'Geschichte & Politik',
    category: 'Gesellschaftswissenschaften',
    iconName: 'Landmark',
    coreQuestion: 'Wie überwinden wir monokausale Meistererzählungen zugunsten multiperspektivischer Verwobenheit?',
    traditionalTeaching: 'Lineare Kausalketten: Ursache X führte zwangsläufig zu Ereignis Y. Große Männer machen Geschichte.',
    quantumThinkingShift: 'Historische Wendepunkte als Möglichkeitsräume mit unzähligen Überlagerungen und emergenten Pfadabhängigkeiten analysieren.',
    concreteActivity: {
      title: 'Das Kristallisations-Kabinett (1989)',
      duration: '60 Minuten',
      description: 'Untersuchung des Mauerfalls als emergentes Phänomen vernetzter Mikrobewegungen.',
      stepByStep: [
        'Analyse von 10 scheinbar unbedeutenden Alltagsszenen im Herbst 1989 (Pfarrer, Grenzsoldat, Telegramm-Fehler, Demonstranten).',
        'Visualisierung als Resonanzfeld: Wann schlug die Oszillation in ein neues gesellschaftliches Phänomen um?',
        'Erkenntnis: Geschichte geschieht nicht linear von oben, sondern intra-aktiv von unten.'
      ]
    },
    transversalConnection: 'Resonanz zu Ethik (Zivilcourage) und Geographie (Grenzräume).'
  },
  {
    id: 'art',
    name: 'Kunst & Ästhetik',
    category: 'Kreativfächer',
    iconName: 'Palette',
    coreQuestion: 'Wie macht bildende Kunst das In-der-Schwebe-Halten von Möglichkeiten phänomenal erlebbar?',
    traditionalTeaching: 'Fokus auf abbildenden Realismus oder kunstgeschichtliche Stilepochen als abgeschlossene Kategorien.',
    quantumThinkingShift: 'Kunst als ästhetisch-epistemische Intervention: Bilder als Räume betrachten, die erst im Blick des Betrachtenden kollabieren.',
    concreteActivity: {
      title: 'Newton vs. Goethe: Komplementäre Farbräume',
      duration: '90 Minuten',
      description: 'Praktisches Malexperiment zur Synthese physikalischer und phänomenologischer Farbenlehre.',
      stepByStep: [
        'Gruppe 1 arbeitet mit Prismen und spektralem Licht (Newton: Licht wird in Teilfarben zerlegt).',
        'Gruppe 2 malt Farbübergänge an der Grenze von Hell und Dunkel mit Wasserfarben (Goethe: Farbe entsteht am Rand des Schattens).',
        'Zusammenführung: Beide Arbeiten nebeneinander hängen. Beide Erklärungen sind wahr und ergänzen einander.'
      ]
    },
    transversalConnection: 'Resonanz zu Physik (Optik) und Psychologie (Wahrnehmungstheorie).'
  },
  {
    id: 'music',
    name: 'Musik',
    category: 'Kreativfächer',
    iconName: 'Music',
    coreQuestion: 'Warum ist der Ton das beste Sinnesorgan für relationale Wirklichkeit?',
    traditionalTeaching: 'Isoliertes Notenlesen und Rhythmus-Zählen als statische Werte auf einem Papierblatt.',
    quantumThinkingShift: 'Klang als reines Beziehungsgeschehen: Ein Ton existiert nur in der Zeit, in Schwingung und im Raum zwischen Instrument und Ohr.',
    concreteActivity: {
      title: 'Die polyphone Interferenz',
      duration: '45 Minuten',
      description: 'Schüler*innen erzeugen Schwebungen und Obertonreihen mit körpereigenen Stimmen.',
      stepByStep: [
        'Zwei Gruppen singen denselben Grundton, eine Gruppe weicht um einen viertel Ton ab.',
        'Die Schüler*innen spüren die akustische Schwebung (Wellen-Interferenz) leiblich im Brustkorb.',
        'Reflexion: Wo existiert die Schwebung? Nicht in Sänger A, nicht in Sänger B, sondern nur in ihrer Beziehung.'
      ]
    },
    transversalConnection: 'Akustik in der Physik und Resonanzlehre in den Kulturwissenschaften.'
  },
  {
    id: 'ethics',
    name: 'Ethik, Philosophie & Religion',
    category: 'Sinnfragen & Werte',
    iconName: 'Compass',
    coreQuestion: 'Was bedeutet Verantwortung in einer Welt ohne unschuldige Beobachter?',
    traditionalTeaching: 'Moral als starres Regelwerk (Kant) versus reine Nützlichkeitsrechnung (Utilitarismus).',
    quantumThinkingShift: 'Ethico-Onto-Epistemologie: Wir sind nicht unbeteiligte Richter über die Welt, sondern immer schon materiell und ethisch in sie verstrickt.',
    concreteActivity: {
      title: 'Das Tribunal des Agentiellen Schnitts',
      duration: '90 Minuten',
      description: 'Diskussion über Algorithmen und ökologische Krisen als Grenzziehungspraxis.',
      stepByStep: [
        'Fallstudie: Ein KI-Algorithmus sortiert Bewerbungen nach vermeintlich objektiven Kriterien vor.',
        'Wer trägt die Verantwortung für die Grenzziehung? Entwickler, Trainingsdaten, HR oder das Modell selbst?',
        'Erprobung von Barads Konzept: Wie können wir Schnitte so setzen, dass sie revidierbar und transparent bleiben?'
      ]
    },
    transversalConnection: 'Resonanz zu Informatik (KI-Ethik) und Politik (Demokratie).'
  },
  {
    id: 'math',
    name: 'Mathematik',
    category: 'STEM / MINT',
    iconName: 'Binary',
    coreQuestion: 'Wie wird Wahrscheinlichkeit von einer statistischen Unwissenheit zu einer ontologischen Potenzialität?',
    traditionalTeaching: 'Laplace-Würfel und statische Formeln: Wahrscheinlichkeit als Mangel an Information.',
    quantumThinkingShift: 'Vektorräume und Hilbert-Räume als Möglichkeitsräume begreifen, in denen Zustandskombinationen lebendig koexistieren.',
    concreteActivity: {
      title: 'Der nicht-kommutative Pfad',
      duration: '45 Minuten',
      description: 'Erfahrung, dass in der Quantenwelt die Reihenfolge von Operationen das Resultat verändert ($A \\times B \\neq B \\times A$).',
      stepByStep: [
        'Zwei Drehungen an einem Buch im Raum: 90° nach vorne kippen, dann 90° nach rechts drehen.',
        'Gegenprobe: Erst nach rechts drehen, dann nach vorne kippen. Das Buch liegt völlig anders!',
        'Diskussion: Warum Reihenfolgen im Leben, in der Kommunikation und in der Natur irreversibel sind.'
      ]
    },
    transversalConnection: 'Resonanz zu Quantencomputing und Psychologie (Reihenfolgeeffekte bei Fragen).'
  },
  {
    id: 'cs',
    name: 'Informatik & Medienbildung',
    category: 'Technik',
    iconName: 'Cpu',
    coreQuestion: 'Wie kommen wir vom binären Determinismus (0/1) zur post-binären Medienkritik?',
    traditionalTeaching: 'Lernen, dass Computer nur Nullen und Einsen kennen und deterministische Wenn-Dann-Schleifen ausführen.',
    quantumThinkingShift: 'Untersuchung von Qubits, generativer KI und probabilistischen Modellen: Erkennen, wie Maschinen Weltbilder vormodellieren.',
    concreteActivity: {
      title: 'Der Prompt-Stresstest für Sprachmodelle',
      duration: '60 Minuten',
      description: 'Schüler*innen testen ChatGPT und DeepSeek auf ihre verborgenen ontologischen Schließungen.',
      stepByStep: [
        'Prompt 1: „Erkläre Quantentunneln für 12-Jährige.“',
        'Prompt 2: „Schreibe eine Geschichte, in der eine Physikerin einer Fee begegnet.“',
        'Schüler*innen markieren mit Textmarkern: Wo flieht die KI in Zauberei? Wo vermenschlicht sie Teilchen?',
        'Reflexion: Warum fällt es binären Maschinen so schwer, echte physikalische Unbestimmtheit zu halten?'
      ]
    },
    transversalConnection: 'Direkte Verbindung zu den Forschungsresultaten des GEI-Projekts.'
  }
];

export const ACTIVITIES: ActivityCard[] = [
  {
    id: 'act-mirror',
    title: 'Das Somatische Spiegelspiel (Intra-Aktion im Körper)',
    stageId: 'primary',
    stageName: 'Primarstufe (7–10 J.)',
    subject: 'Sport / Darstellendes Spiel / Ethik',
    format: 'Körperspiel',
    duration: '25 Minuten',
    shortSummary: 'Zwei Lernende bewegen sich synchron, ohne dass eine Person führt oder folgt. Handlung entsteht im Beziehungsraum.',
    learningGoal: 'Die leibliche Erfahrung von Intra-Aktion: Relationen gehen Entitäten voraus.',
    materials: ['Freier Raum', 'Ruhige instrumentale Musik (optional)'],
    procedure: [
      'Paarbildung. Die Partner stehen sich im Abstand von einer Armlänge gegenüber.',
      'Die Hände werden auf Herzhöhe gehoben, berühren sich aber nicht (2–3 cm Luftpolster spüren).',
      'Phase 1: Kind A führt, Kind B spiegelt (klassisches Kausalitätsmodell: Ursache $\\to$ Wirkung).',
      'Phase 2: Kind B führt, Kind A spiegelt.',
      'Phase 3 (Der Quantensprung): Niemand führt! Beide achten auf minimale Mikrobewegungen und lassen den Tanz im Dazwischen entstehen.'
    ],
    reflectionQuestions: [
      'Wann wusstest du nicht mehr, wer die Bewegung begonnen hat?',
      'Wie hat es sich angefühlt, die Kontrolle abzugeben und dennoch handlungsfähig zu sein?',
      'Gibt es Situationen auf dem Schulhof, in denen ein Streit genauso entsteht?'
    ]
  },
  {
    id: 'act-observer',
    title: 'Das Zeugen-Experiment (Die Grenze entsteht im Blick)',
    stageId: 'lower_sec',
    stageName: 'Sek I (11–15 J.)',
    subject: 'Deutsch / Geschichte / Religion',
    format: 'Dilemma-Debatte',
    duration: '45 Minuten',
    shortSummary: 'Derselbe Vorfall wird durch zwei konträre Fragebrillen betrachtet, um das Messproblem lebensweltlich erfahrbar zu machen.',
    learningGoal: 'Erkennen, dass Beobachtung niemals neutral ist, sondern das Phänomen miterzeugt.',
    materials: ['Arbeitsblatt mit einem kurzen, vieldeutigen Konfliktbericht aus dem Schulalltag'],
    procedure: [
      'Ein kurzer Text schildert einen Vorfall (z. B. ein Smartphone fällt herunter, zwei Schüler streiten).',
      'Klasse wird in zwei Hälften geteilt:',
      'Gruppe A erhält den Auftrag: „Findet den Schuldigen nach strengen Rechtsregeln.“',
      'Gruppe B erhält den Auftrag: „Findet heraus, wer in dieser Situation Angst hatte oder Schutz suchte.“',
      'Vergleich der Ergebnisse an der Tafel: Der Text ist derselbe, aber die Wirklichkeiten sind inkommensurabel.'
    ],
    reflectionQuestions: [
      'Hat die Fragebrille verändert, was im Text wichtig wurde?',
      'Können wir den Vorfall jemals völlig ohne Brille sehen?',
      'Was bedeutet das für Richter, Journalisten oder Wissenschaftler?'
    ]
  },
  {
    id: 'act-ripple',
    title: 'Der Ripple-Effekt & Das Tribunal des Agentiellen Schnitts',
    stageId: 'upper_sec',
    stageName: 'Sek II (16–19 J.)',
    subject: 'Philosophie / Informatik / Biologie',
    format: 'Gedankenexperiment',
    duration: '90 Minuten',
    shortSummary: 'Verhandlung eines bioethischen oder KI-gestützten Grenzdilemmas mit systematischer Gegenlesart-Dokumentation.',
    learningGoal: 'Ethico-Onto-Epistemologie: Die ethische Verantwortung für gezogene Grenzen begreifen.',
    materials: ['Fallakte (z. B. Autonome Waffensysteme oder Gen-Editing bei Embryonen)', 'Große Plakate mit Zweispaltentabelle (Schnitt vs. Ausgeschlossenes)'],
    procedure: [
      'Präsentation des Falles mit seinen unauflösbaren Spannungen.',
      'Kleingruppen müssen eine gesetzliche oder ethische Schnittkante definieren (z. B. „Bis zu diesem Punkt ist es Therapie, ab da unzulässige Optimierung“).',
      'Die Gegenlesart-Spalte: Jede Gruppe muss minutiös aufschreiben, welche Existenzen, Schutzbedürfnisse oder Perspektiven durch ihren Schnitt für illegitim oder unsichtbar erklärt werden.',
      'Plenumsdebatte: Kann man den Schnitt unschuldig setzen? Warum erfordert Nicht-Linearität eine Ethik der Demut?'
    ],
    reflectionQuestions: [
      'Warum gibt es keinen „neutralen Standpunkt von außen“?',
      'Wie unterscheidet sich Barads Schnitt von einem einfachen Gesetz?',
      'Wie können wir in einer Demokratie Schnitte revidierbar halten?'
    ]
  }
];

export const TEACHER_PRINCIPLES = [
  {
    number: '01',
    title: 'Verwirrung als produktiver Lernzustand (Perplexity)',
    text: 'Wenn Lernende stocken und sagen „Das verstehe ich nicht, das widerspricht der Logik!“, ist das kein Versagen, sondern das Eintreten in eine echte epistemische Öffnung. Schließen Sie diese Lücke nicht vorschnell mit Formeln oder Zauberei-Analogien, sondern lassen Sie die Frage im Raum atmen.'
  },
  {
    number: '02',
    title: 'Intellektuelle Redlichkeit statt Quantenmystik',
    text: 'Grenzen Sie Quantendenken strikt von Esoterik ab. Quantenmechanik bedeutet nicht: „Dein Geist erschafft die Welt durch Wünschen“. Sie bedeutet: Die Wirklichkeit ist relational, kontextabhängig und emergent. Bleiben Sie methodisch nüchtern und wissenschaftlich exakt.'
  },
  {
    number: '03',
    title: 'Der Körper lernt vor dem Geist (Somatisches Enactment)',
    text: 'Nicht-lineare Zusammenhänge lassen sich mit der linearen Syntax unserer Sprache nur schwer fassen. Nutzen Sie den Raum, Bewegung, Töne, Farben und Berührung, damit Lernende die Erfahrung im Körper verankern, bevor sie mit Begriffen operieren.'
  },
  {
    number: '04',
    title: 'Transversale Knoten statt Fächer-Silos',
    text: 'Quantendenken ist keine Nische der Physik. Es verbindet Physik mit Literatur, Geschichte, Kunst und Ethik. Suchen Sie gezielt die Knotenpunkte im Schulcurriculum, an denen das Verhältnis von Teil und Ganzem verhandelt wird.'
  },
  {
    number: '05',
    title: 'Vom Wissensbesitz (Knowing) zum Weltverhältnis (Being)',
    text: 'Bildung erschöpft sich nicht im Anhäufen von Fakten und Kompetenzen (Knowing & Doing). Der Bildungsauftrag des 21. Jahrhunderts verlangt die Kultivierung von Orientierungswissen und Seins-Kompetenz (Being) in einer komplexen Welt.'
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Agentieller Realismus (Agential Realism)',
    authorOrOrigin: 'Karen Barad (2007)',
    shortDefinition: 'Ein philosophischer Ansatz, der Ontologie, Epistemologie und Ethik untrennbar verknüpft (Ethico-Onto-Epistemology).',
    detailedContext: 'Barad postuliert im Rückgriff auf Niels Bohrs Quantenphilosophie, dass die Welt nicht aus vorexistierenden Dingen mit festen Eigenschaften besteht, sondern aus dynamischen Phänomenen. Grenzen und Eigenschaften entstehen erst durch materielle Praktiken des Unterscheidens (agential cuts).',
    relevanceForEducation: 'Befreit Schule vom Irrglauben, es gäbe einen unbeteiligten, unschuldigen Beobachter. Lehrt Verantwortlichkeit für die Kategorien, mit denen wir Menschen und Natur vermessen.'
  },
  {
    term: 'Intra-Aktion (Intra-Action)',
    authorOrOrigin: 'Karen Barad (2007)',
    shortDefinition: 'Gegenbegriff zur klassischen Inter-Aktion: Relationen gehen Entitäten voraus.',
    detailedContext: 'Während Inter-Aktion voraussetzt, dass zwei bereits fertige Entitäten (A und B) miteinander in Kontakt treten (wie Billardkugeln), besagt Intra-Aktion, dass A und B erst innerhalb des Beziehungsgeschehens ihre jeweiligen Konturen gewinnen.',
    relevanceForEducation: 'Grundlage für relationale Pädagogik: Lernen ist keine Übertragung von Information von Lehrer auf Schüler, sondern eine gemeinsame Rekonfiguration der Lernenden und ihrer Umgebung.'
  },
  {
    term: 'Kosmotechnik (Cosmotechnics)',
    authorOrOrigin: 'Yuk Hui (2016, 2021)',
    shortDefinition: 'Die geschichtlich und kulturell situierte Einheit von kosmischer Ordnung und moralischem Handeln durch Technik.',
    detailedContext: 'Hui bricht mit dem westlichen Universalismus, der Technik als neutrale Naturbeherrschung fasst. Jede Zivilisation bringt spezifische Kosmotechniken hervor (z. B. chinesische Kosmotechnik auf Basis von Qi und Dao, westliche auf Basis linearer Kausalität).',
    relevanceForEducation: 'Ermöglicht den vorurteilsfreien Dialog zwischen modernen Technologien (KI, Quanten) und nicht-westlichen Wissenssystemen (chinesische Philosophie, indigene Kosmologien).'
  },
  {
    term: 'Epistemische Oszillation & Schließung',
    authorOrOrigin: 'Zrinka Štimac (2025, 2026)',
    shortDefinition: 'Das analytische Raster für das Schwanken zwischen klassischer und nicht-linearer Wirklichkeitsdeutung in Bildungsmedien.',
    detailedContext: 'Epistemische Oszillation bezeichnet den Zustand, in dem mehrere Deutungen zugleich greifbar werden (epistemische Öffnung). In Schulbüchern und KI-Texten wird diese Öffnung meist vorschnell durch eine substanzialistische Schließung (Rechenformalismus oder Magie) beendet, statt in eine offene relationale Landung überführt zu werden.',
    relevanceForEducation: 'Das Kerninstrument zur Analyse und Optimierung von Unterrichtsmaterialien und generativen Lernbegleitern.'
  },
  {
    term: 'Vierte Säule des Delors-Berichts („Learning to be“)',
    authorOrOrigin: 'UNESCO / Jacques Delors (1996)',
    shortDefinition: 'Die Dimension des Seins und der Persönlichkeitsentfaltung als gleichrangiges Bildungsziel neben Wissen und Handeln.',
    detailedContext: 'Der Bericht definierte vier Säulen: Learning to know, Learning to do, Learning to live together, und Learning to be. Während Knowing und Doing die Curricula dominieren, blieb die Seins-Dimension weitgehend unartikuliert.',
    relevanceForEducation: 'Quantum Thinking zielt genau auf die Wiederentdeckung dieser vierten Säule: Wie lernen Menschen, in einer nicht-linearen Welt sinnvoll und geerdet zu existieren?'
  },
  {
    term: 'Das eingeschlossene Dritte (Tiers Inclus)',
    authorOrOrigin: 'Basarab Nicolescu (2002)',
    shortDefinition: 'Logischer Denkansatz, der scheinbare Widersprüche (A und Nicht-A) auf einer anderen Realitätsebene synthetisiert.',
    detailedContext: 'Im Unterschied zur klassischen zweiwertigen Logik (die nur wahr oder falsch kennt) ermöglicht das Tiers Inclus das Denken von Ko-Präsenz, Komplementarität und Vielstimmigkeit ohne logischen Bruch.',
    relevanceForEducation: 'Schult das Denken jenseits von Schwarz-Weiß-Mustern, polarisierenden Debatten und einfachen Feindbildern.'
  }
];
