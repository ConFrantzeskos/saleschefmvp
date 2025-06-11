
import React from 'react';
import Footer from '@/components/Footer';
import TourismHero from '@/components/tourism/TourismHero';
import TourismProblems from '@/components/tourism/TourismProblems';
import TourismChaos from '@/components/tourism/TourismChaos';
import TourismSolution from '@/components/tourism/TourismSolution';
import TourismOutcomes from '@/components/tourism/TourismOutcomes';
import EmailCTA from '@/components/EmailCTA';

const TravelTourism = () => {
  return (
    <div className="min-h-screen bg-background">
      <TourismHero />
      <TourismProblems />
      
      {/* First CTA after problems */}
      <EmailCTA
        headline="Stop losing content quality"
        subtitle="See how travel leaders are transforming their content operations"
        placeholder="Enter your work email"
        buttonText="Show Me How"
        variant="card"
        size="sm"
      />
      
      <TourismChaos />
      <TourismSolution />
      
      {/* Second CTA after solution */}
      <EmailCTA
        headline="See this solution in action"
        subtitle="Custom demo tailored to your travel marketplace challenges"
        placeholder="Enter your work email"
        buttonText="Book Demo"
        variant="gradient"
        size="sm"
      />
      
      <TourismOutcomes />
      
      {/* Final CTA - replacing the text-only section */}
      <EmailCTA
        headline="Ready to transform your marketplace content engine?"
        subtitle="Custom-tailored for your OTA, marketplace, DMO or aggregator."
        placeholder="Enter your work email"
        buttonText="Book a Demo"
        variant="default"
        size="md"
      />
      
      <Footer />
    </div>
  );
};

export default TravelTourism;
