
import React from 'react';
import DetailedIndustryPageTemplate from '@/components/DetailedIndustryPageTemplate';
import { detailedIndustryData } from '@/data/enhancedIndustryData';

const Retail = () => {
  return <DetailedIndustryPageTemplate industry={detailedIndustryData.retail} />;
};

export default Retail;
