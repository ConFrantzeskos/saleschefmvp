
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const Retail = () => {
  return <IndustryPageTemplate industry={industryData.retail} />;
};

export default Retail;
