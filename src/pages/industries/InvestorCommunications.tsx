
import React from 'react';
import DetailedIndustryPageTemplate from '@/components/DetailedIndustryPageTemplate';
import { detailedIndustryData } from '@/data/enhancedIndustryData';

const InvestorCommunications = () => {
  return <DetailedIndustryPageTemplate industry={detailedIndustryData.investorCommunications} />;
};

export default InvestorCommunications;
