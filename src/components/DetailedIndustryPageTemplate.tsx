
import React from 'react';
import Footer from '@/components/Footer';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import IndustryProblemsSection from '@/components/industry/IndustryProblemsSection';
import IndustryConsequencesSection from '@/components/industry/IndustryConsequencesSection';
import IndustryRealitySection from '@/components/industry/IndustryRealitySection';
import IndustrySolutionSteps from '@/components/industry/IndustrySolutionSteps';
import IndustryOutcomesSection from '@/components/industry/IndustryOutcomesSection';
import IndustryWhyChooseSection from '@/components/industry/IndustryWhyChooseSection';
import IndustryUseCases from '@/components/industry/IndustryUseCases';
import IndustryIntegrationsSection from '@/components/industry/IndustryIntegrationsSection';
import IndustryCTA from '@/components/industry/IndustryCTA';
import { DetailedIndustryData } from '@/data/enhancedIndustryData';

interface DetailedIndustryPageTemplateProps {
  industry: DetailedIndustryData;
}

const DetailedIndustryPageTemplate = ({ industry }: DetailedIndustryPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={industry.title}
          subtitle={industry.subtitle}
          size="lg"
        />
      </PageSection>

      {/* Problems Section */}
      <IndustryProblemsSection
        title={industry.problemsTitle || "The Challenge"}
        description={industry.problemsDescription}
        problems={industry.problems}
        conclusionText="👉 Investor communications is a strategic function — but content chaos is holding it back."
      />

      {/* Consequences Section */}
      <IndustryConsequencesSection
        title={industry.consequencesTitle || "The Cost of Chaos"}
        consequences={industry.consequences}
      />

      {/* Reality/Complexity Section */}
      {industry.realityPoints && (
        <IndustryRealitySection
          title={industry.realityTitle || "Built for Complexity"}
          description={industry.realityDescription}
          realityPoints={industry.realityPoints}
          conclusionText="SalesChef automates this transformation with governance and precision — freeing IR & comms teams to focus on strategy, not data wrangling."
        />
      )}

      {/* How SalesChef Works */}
      <IndustrySolutionSteps
        title={`How SalesChef works for ${industry.name}`}
        ingestSources={industry.ingestSources}
        cleaningFeatures={industry.cleaningFeatures}
        enrichmentFeatures={industry.enrichmentFeatures}
        outputChannels={industry.outputChannels}
      />

      {/* Business Outcomes */}
      <IndustryOutcomesSection
        title={`Business outcomes for ${industry.name.toLowerCase()} teams`}
        outcomes={industry.businessOutcomes}
      />

      {/* Why Choose Section */}
      <IndustryWhyChooseSection
        title={industry.whyChooseTitle || `Why leaders choose SalesChef for ${industry.name}`}
        reasons={industry.whyChooseReasons}
      />

      {/* Use Cases */}
      <IndustryUseCases industry={industry} />

      {/* Integrations */}
      <IndustryIntegrationsSection
        title="Key integrations & stack fit"
        integrations={industry.integrations}
      />

      {/* CTA */}
      <IndustryCTA industryName={industry.name.toLowerCase()} />

      <Footer />
    </div>
  );
};

export default DetailedIndustryPageTemplate;
