
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const RealEstate = () => {
  return <IndustryPageTemplate industry={industryData['real-estate']} />;
};

export default RealEstate;
