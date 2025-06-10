
import React from 'react';
import DetailedIndustryPageTemplate from '@/components/DetailedIndustryPageTemplate';
import { detailedIndustryData } from '@/data/enhancedIndustryData';

const MediaEntertainment = () => {
  return <DetailedIndustryPageTemplate industry={detailedIndustryData.media} />;
};

export default MediaEntertainment;
