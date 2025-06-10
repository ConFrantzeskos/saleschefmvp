
import React from 'react';
import Footer from '@/components/Footer';
import IndustryHero from '@/components/industry/IndustryHero';
import IndustryChallenge from '@/components/industry/IndustryChallenge';
import IndustryProcess from '@/components/industry/IndustryProcess';
import IndustryFeatures from '@/components/industry/IndustryFeatures';
import IndustryUseCases from '@/components/industry/IndustryUseCases';
import IndustryCompliance from '@/components/industry/IndustryCompliance';
import IndustryBenefits from '@/components/industry/IndustryBenefits';
import IndustryCTA from '@/components/industry/IndustryCTA';

interface IndustryData {
  name: string;
  emoji: string;
  dataSources: string[];
  cleaningExamples: string[];
  enrichmentExamples: string[];
  outputExamples: string[];
  useCases: Array<{
    useCase: string;
    agents: string;
    value: string;
  }>;
  seoKeywords: string[];
}

interface IndustryPageTemplateProps {
  industry: IndustryData;
}

const IndustryPageTemplate = ({ industry }: IndustryPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <IndustryHero industry={industry} />
      <IndustryChallenge industryName={industry.name} />
      <IndustryProcess industry={industry} />
      <IndustryFeatures industryName={industry.name} />
      <IndustryUseCases industry={industry} />
      <IndustryCompliance />
      <IndustryBenefits industryName={industry.name} />
      <IndustryCTA industryName={industry.name} />
      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;
