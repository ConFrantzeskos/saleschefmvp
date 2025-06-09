
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const Automotive = () => {
  return <IndustryPageTemplate industry={industryData.automotive} />;
};

export default Automotive;
