
import React from 'react';
import DetailedIndustryPageTemplate from '@/components/DetailedIndustryPageTemplate';
import { detailedIndustryData } from '@/data/enhancedIndustryData';

const HealthcareMedical = () => {
  return <DetailedIndustryPageTemplate industry={detailedIndustryData.healthcare} />;
};

export default HealthcareMedical;
