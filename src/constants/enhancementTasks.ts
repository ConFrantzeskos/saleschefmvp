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
    id: 'ladder-of-benefits',
    title: 'Ladder of Benefits',
    description: 'Climbing from features through benefits to emotional and social outcomes',
    icon: TrendingUp,
    details: ['Feature → Feature Benefit → Consumer Benefit → Emotional/Social', 'Discrete ladders per feature', 'Value progression', 'Outcome-based positioning'],
    statusMessage: 'Climbing benefit ladder for 3 products...',
    duration: 0.9
  },
  {
    id: 'jobs-to-be-done',
    title: 'Jobs to Be Done (JTBD)',
    description: 'Identifying progress customers try to make',
    icon: Target,
    details: ['Functional jobs', 'Emotional dimensions', 'Social dimensions', 'Unexpected competitors'],
    statusMessage: 'Mapping customer jobs and circumstances...',
    duration: 0.9
  },
  {
    id: 'category-entry-points',
    title: 'Category Entry Points (CEPs)',
    description: 'Mapping memory structures and buying situations',
    icon: GitMerge,
    details: ['Need-state triggers', 'Buying situations', 'Mental availability', 'Distinctive assets'],
    statusMessage: 'Identifying category entry points...',
    duration: 0.8
  },
  {
    id: 'reasons-to-believe',
    title: 'Reasons to Believe (RTBs)',
    description: 'Building credibility with concrete proof points',
    icon: Award,
    details: ['Endorsements', 'Demonstrations', 'Statistics', 'Heritage & process'],
    statusMessage: 'Extracting proof points and credibility signals...',
    duration: 0.8
  },
  {
    id: 'purchase-barriers',
    title: 'Purchase Barriers + Solutions',
    description: 'Identifying and resolving conversion friction',
    icon: Shield,
    details: ['Risk barriers', 'Effort barriers', 'Cost barriers', 'Intervention strategies'],
    statusMessage: 'Mapping friction points across journey...',
    duration: 0.9
  },
  {
    id: 'distinctive-memory',
    title: 'Distinctive Memory Structures',
    description: 'Building mental and physical availability',
    icon: Brain,
    details: ['Mental availability', 'Physical availability', 'Distinctive assets', 'Memory encoding'],
    statusMessage: 'Creating distinctive brand codes...',
    duration: 0.8
  },
  {
    id: 'behavioral-economics',
    title: 'Behavioural Economics Arsenal',
    description: 'Applying psychological triggers and nudges',
    icon: Zap,
    details: ['Anchoring', 'Loss aversion', 'Social proof', 'Reciprocity'],
    statusMessage: 'Embedding 14 persuasion principles...',
    duration: 0.9
  },
  {
    id: 'competitive-moats',
    title: 'Competitive Moats',
    description: 'Defining sustainable competitive advantages',
    icon: Gem,
    details: ['Network effects', 'Switching costs', 'Brand premium', 'Cost advantages'],
    statusMessage: 'Identifying defensible advantages...',
    duration: 0.8
  },
  {
    id: 'conversion-mechanics',
    title: 'Conversion Mechanics',
    description: 'Optimising elements that drive purchase',
    icon: ShoppingBag,
    details: ['Risk reversal stack', 'Value equation', 'Commitment ladder', 'Progressive disclosure'],
    statusMessage: 'Engineering conversion pathways...',
    duration: 0.9
  },
  {
    id: 'context-triggers',
    title: 'Context Triggers',
    description: 'Mapping environmental and temporal cues',
    icon: BookOpen,
    details: ['Usage occasions', 'Identity triggers', 'Temporal landmarks', 'Environmental cues'],
    statusMessage: 'Identifying contextual prompts...',
    duration: 0.7
  },
  {
    id: 'persuasion-stack',
    title: 'The Persuasion Stack',
    description: 'Matching message sophistication to market awareness',
    icon: Users,
    details: ['Awareness levels', 'Sophistication stages', 'Message matching', 'Market positioning'],
    statusMessage: 'Calibrating message sophistication...',
    duration: 0.8
  }
];
