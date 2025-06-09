
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const Finance = () => {
  return <IndustryPageTemplate industry={industryData.finance} />;
};

export default Finance;
