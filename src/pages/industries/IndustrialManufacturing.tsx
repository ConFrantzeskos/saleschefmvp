
import React from 'react';
import DetailedIndustryPageTemplate from '@/components/DetailedIndustryPageTemplate';
import { detailedIndustryData } from '@/data/enhancedIndustryData';

const IndustrialManufacturing = () => {
  return <DetailedIndustryPageTemplate industry={detailedIndustryData.industrial} />;
};

export default IndustrialManufacturing;
