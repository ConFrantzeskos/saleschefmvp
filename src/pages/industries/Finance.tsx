
import React from 'react';
import DetailedIndustryPageTemplate from '@/components/DetailedIndustryPageTemplate';
import { detailedIndustryData } from '@/data/enhancedIndustryData';

const Finance = () => {
  return <DetailedIndustryPageTemplate industry={detailedIndustryData.finance} />;
};

export default Finance;
