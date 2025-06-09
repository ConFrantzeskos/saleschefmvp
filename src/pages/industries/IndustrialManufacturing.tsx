
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const IndustrialManufacturing = () => {
  return <IndustryPageTemplate industry={industryData['industrial-manufacturing']} />;
};

export default IndustrialManufacturing;
