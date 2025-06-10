
import { DetailedIndustryData } from './types/industryTypes';
import { investorCommunicationsData } from './industries/investorCommunications';
import { retailData } from './industries/retail';
import { financeData } from './industries/finance';
import { healthcareData } from './industries/healthcare';
import { mediaData } from './industries/media';
import { industrialData } from './industries/industrial';

// Re-export the types for backward compatibility
export type { DetailedIndustryData } from './types/industryTypes';

export const detailedIndustryData: Record<string, DetailedIndustryData> = {
  investorCommunications: investorCommunicationsData,
  retail: retailData,
  finance: financeData,
  healthcare: healthcareData,
  media: mediaData,
  industrial: industrialData
};
