
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const HealthcareMedical = () => {
  return <IndustryPageTemplate industry={industryData['healthcare-medical']} />;
};

export default HealthcareMedical;
