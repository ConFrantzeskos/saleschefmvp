
import React from 'react';
import Footer from '@/components/Footer';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import EmailCTA from '@/components/EmailCTA';
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
      {/* Hero Section - Reduced padding */}
      <PageSection background="gradient" padding="md">
        <SectionHeader
          title={industry.title}
          subtitle={industry.subtitle}
          size="lg"
        />
      </PageSection>

      {/* Problems Section - Reduced padding */}
      <IndustryProblemsSection
        title={industry.problemsTitle || "The Challenge"}
        description={industry.problemsDescription}
        problems={industry.problems}
        conclusionText="👉 Investor communications is a strategic function — but content chaos is holding it back."
      />

      {/* Consequences Section - Reduced padding */}
      <IndustryConsequencesSection
        title={industry.consequencesTitle || "The Cost of Chaos"}
        consequences={industry.consequences}
      />

      {/* High-engagement CTA after Cost of Chaos */}
      <EmailCTA
        headline="Stop the content chaos"
        subtitle={`See how ${industry.name.toLowerCase()} leaders are transforming their operations`}
        placeholder="Enter your work email"
        buttonText="Show Me How"
        variant="card"
        size="sm"
      />

      {/* Reality/Complexity Section - Reduced padding */}
      {industry.realityPoints && (
        <IndustryRealitySection
          title={industry.realityTitle || "Built for Complexity"}
          description={industry.realityDescription}
          realityPoints={industry.realityPoints}
          conclusionText="SalesChef automates this transformation with governance and precision — freeing IR & comms teams to focus on strategy, not data wrangling."
        />
      )}

      {/* How SalesChef Works - Reduced padding */}
      <IndustrySolutionSteps
        title={`How SalesChef works for ${industry.name}`}
        ingestSources={industry.ingestSources}
        cleaningFeatures={industry.cleaningFeatures}
        enrichmentFeatures={industry.enrichmentFeatures}
        outputChannels={industry.outputChannels}
      />

      {/* Solution-focused CTA after steps explanation */}
      <EmailCTA
        headline="See this solution in action"
        subtitle="Custom demo tailored to your content challenges"
        placeholder="Enter your work email"
        buttonText="Book Demo"
        variant="gradient"
        size="md"
      />

      {/* Business Outcomes - Reduced padding */}
      <IndustryOutcomesSection
        title={`Business outcomes for ${industry.name.toLowerCase()} teams`}
        outcomes={industry.businessOutcomes}
      />

      {/* Outcome-focused CTA after benefits */}
      <EmailCTA
        headline="Get these outcomes for your team"
        subtitle="Join industry leaders already transforming their content operations"
        placeholder="Enter your work email"
        buttonText="Book Demo"
        variant="default"
        size="sm"
      />

      {/* Why Choose Section - Reduced padding */}
      <IndustryWhyChooseSection
        title={industry.whyChooseTitle || `Why leaders choose SalesChef for ${industry.name}`}
        reasons={industry.whyChooseReasons}
      />

      {/* Use Cases - Reduced padding */}
      <IndustryUseCases industry={industry} />

      {/* Integrations - Reduced padding */}
      <IndustryIntegrationsSection
        title="Key integrations & stack fit"
        integrations={industry.integrations}
      />

      {/* Final CTA - Reduced padding */}
      <IndustryCTA industryName={industry.name.toLowerCase()} />

      <Footer />
    </div>
  );
};

export default DetailedIndustryPageTemplate;
