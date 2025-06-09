
import React from 'react';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import { industryData } from '@/data/industryData';

const MediaEntertainment = () => {
  return <IndustryPageTemplate industry={industryData['media-entertainment']} />;
};

export default MediaEntertainment;
