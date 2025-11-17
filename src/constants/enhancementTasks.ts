import { 
  TrendingUp, 
  Users, 
  Triangle, 
  Award, 
  ShoppingBag, 
  Gem, 
  Zap, 
  Shield, 
  BookOpen, 
  Target, 
  Brain, 
  GitMerge 
} from 'lucide-react';

export interface EnhancementTask {
  id: string;
  title: string;
  description: string;
  icon: any;
  details: string[];
  statusMessage: string;
  duration: number;
}

export const enhancementTasks: EnhancementTask[] = [
  {
    id: 'benefit-laddering',
    title: 'Benefit Laddering Analysis',
    description: 'Translating features into emotional value',
    icon: TrendingUp,
    details: ['Feature mapping', 'Benefit extraction', 'Emotional resonance', 'Value hierarchy'],
    statusMessage: 'Building ladder logic for 145 features...',
    duration: 0.8
  },
  {
    id: 'persona-profiling',
    title: 'Persona Profiling',
    description: 'Creating behavioral audience profiles',
    icon: Users,
    details: ['Psychographic modeling', 'Buying motivations', 'Pain point mapping', 'Decision triggers'],
    statusMessage: 'Modeling 7 target personas...',
    duration: 0.9
  },
  {
    id: 'message-hierarchy',
    title: 'Message Hierarchy Construction',
    description: 'Building narrative pyramid structure',
    icon: Triangle,
    details: ['Core message definition', 'Priority scoring', 'Message sequencing', 'Narrative flow'],
    statusMessage: 'Constructing message scaffolding...',
    duration: 0.7
  },
  {
    id: 'social-proof',
    title: 'Social Proof Extraction',
    description: 'Identifying credibility evidence',
    icon: Award,
    details: ['Award compilation', 'Review mining', 'Expert endorsements', 'Statistical proof'],
    statusMessage: 'Extracting proof points from 2,340 sources...',
    duration: 1.0
  },
  {
    id: 'rtb-engineering',
    title: 'Reasons to Buy (RTB) Engineering',
    description: 'Generating compelling purchase justifications',
    icon: ShoppingBag,
    details: ['Rational drivers', 'Emotional triggers', 'Competitive advantages', 'Value propositions'],
    statusMessage: 'Engineering 12 RTB frameworks...',
    duration: 0.9
  },
  {
    id: 'value-proposition',
    title: 'Value Proposition Distillation',
    description: 'Extracting core differentiators',
    icon: Gem,
    details: ['Unique selling points', 'Competitive positioning', 'Value statements', 'Brand essence'],
    statusMessage: 'Distilling value propositions...',
    duration: 0.8
  },
  {
    id: 'conversion-heuristics',
    title: 'Conversion Heuristics Modeling',
    description: 'Predicting persuasive strength',
    icon: Zap,
    details: ['Message scoring', 'Conversion probability', 'A/B variant generation', 'Lift forecasting'],
    statusMessage: 'Modeling conversion potential...',
    duration: 0.9
  },
  {
    id: 'objection-handling',
    title: 'Objection Handling Framework',
    description: 'Anticipating and addressing concerns',
    icon: Shield,
    details: ['Common objections', 'Counter-arguments', 'Risk mitigation', 'Reassurance strategies'],
    statusMessage: 'Analyzing 89 potential objections...',
    duration: 0.8
  },
  {
    id: 'storytelling',
    title: 'Storytelling Architecture',
    description: 'Building narrative structures',
    icon: BookOpen,
    details: ['Story arcs', "Hero's journey", 'Problem-solution flow', 'Emotional beats'],
    statusMessage: 'Architecting story frameworks...',
    duration: 0.7
  },
  {
    id: 'competitive-positioning',
    title: 'Competitive Positioning Strategy',
    description: 'Defining competitive stance',
    icon: Target,
    details: ['Positioning map', 'Differentiation strategy', 'Competitive narrative', 'Market gaps'],
    statusMessage: 'Mapping competitive landscape...',
    duration: 0.9
  },
  {
    id: 'behavioral-psychology',
    title: 'Behavioral Psychology Application',
    description: 'Applying persuasion principles',
    icon: Brain,
    details: ['Scarcity triggers', 'Social proof', 'Authority signals', 'Reciprocity hooks'],
    statusMessage: 'Embedding 14 persuasion principles...',
    duration: 0.8
  },
  {
    id: 'synthesis',
    title: 'Strategic Framework Synthesis',
    description: 'Integrating all strategic elements',
    icon: GitMerge,
    details: ['Framework alignment', 'Consistency check', 'Brief generation', 'Strategy packaging'],
    statusMessage: 'Synthesizing strategic brief...',
    duration: 1.0
  }
];
