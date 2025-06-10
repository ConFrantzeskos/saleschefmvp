
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
      <TourismChaos />
      <TourismSolution />
      <TourismOutcomes />
      <EmailCTA
        headline="Ready to transform your marketplace content engine?"
        subtitle="Custom-tailored for your OTA, marketplace, DMO or aggregator."
        buttonText="Book Tourism Demo"
        variant="default"
        size="md"
      />
      <Footer />
    </div>
  );
};

export default TravelTourism;
