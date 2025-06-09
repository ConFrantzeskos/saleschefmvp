
import React from 'react';
import Footer from '@/components/Footer';
import TourismHero from '@/components/tourism/TourismHero';
import TourismProblems from '@/components/tourism/TourismProblems';
import TourismChaos from '@/components/tourism/TourismChaos';
import TourismSolution from '@/components/tourism/TourismSolution';
import TourismOutcomes from '@/components/tourism/TourismOutcomes';

const TravelTourism = () => {
  return (
    <div className="min-h-screen bg-background">
      <TourismHero />
      <TourismProblems />
      <TourismChaos />
      <TourismSolution />
      <TourismOutcomes />
      <Footer />
    </div>
  );
};

export default TravelTourism;
