
import { Mail, Upload, Search, Edit, Palette, Rocket, BarChart3, LucideIcon } from 'lucide-react';

export interface StepData {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  hasEmailInput?: boolean;
  hasLogos?: boolean;
  logoType?: string;
}

export const stepsData: StepData[] = [
  { step: '1', title: 'Register', desc: '', icon: Mail, color: 'bg-gradient-brand', hasEmailInput: true },
  { 
    step: '2', 
    title: 'Upload', 
    desc: '', 
    icon: Upload, 
    color: 'bg-gradient-accent',
    hasLogos: true,
    logoType: 'fileTypes'
  },
  { 
    step: '3', 
    title: 'SalesChef Cleans', 
    desc: '', 
    icon: Search, 
    color: 'bg-secondary',
    hasLogos: true,
    logoType: 'cleaningActions'
  },
  { 
    step: '4', 
    title: 'SalesChef Enriches', 
    desc: '', 
    icon: Edit, 
    color: 'bg-gradient-brand',
    hasLogos: true,
    logoType: 'sources'
  },
  { 
    step: '5', 
    title: 'SalesChef Creates', 
    desc: '', 
    icon: Palette, 
    color: 'bg-gradient-accent',
    hasLogos: true,
    logoType: 'contentTypes'
  },
  { 
    step: '6', 
    title: 'SalesChef Publishes', 
    desc: '', 
    icon: Rocket, 
    color: 'bg-secondary',
    hasLogos: true,
    logoType: 'integrations'
  },
  { 
    step: '7', 
    title: 'SalesChef Optimises', 
    desc: '', 
    icon: BarChart3, 
    color: 'bg-gradient-brand',
    hasLogos: true,
    logoType: 'analytics'
  }
];
