
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const TravelTourism = () => {
  return <IndustryPageTemplate industry={industryData['travel-tourism']} />;
};

export default TravelTourism;
