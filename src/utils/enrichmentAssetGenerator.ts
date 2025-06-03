
import { EnrichmentAsset } from '@/types/enrichmentAsset';

export const generateSampleEnrichmentAssets = (): EnrichmentAsset[] => {
  return [
    {
      id: 1,
      sku: "CD1234",
      name: "CD1234 24 Hour Charge Wireless Headphones",
      brand: "TechSound",
      category: "Electronics > Audio > Headphones",
      status: "Enriched",
      quality: 95,
      searchTrends: "High demand for 'wireless headphones long battery', 'bluetooth headphones 24 hour'",
      customerSentiment: "Positive (4.2/5) - Users love battery life, comfort concerns noted",
      socialMentions: "312 mentions/month - mostly positive, trending in gaming communities",
      competitorAnalysis: "Beats Studio3 (20hrs), Sony WH-1000XM4 (30hrs) - our 24hr is competitive",
      seoOpportunities: "Target 'best long battery headphones', 'wireless headphones for travel'",
      targetAudience: "Business travelers, remote workers, gamers aged 25-45",
      keyFeatures: "24-hour battery, Bluetooth 5.0, foldable design, quick charge"
    },
    {
      id: 2,
      sku: "SM5678",
      name: "SM5678 Smart Fitness Watch",
      brand: "FitTech",
      category: "Electronics > Wearables > Fitness",
      status: "Enriched",
      quality: 88,
      searchTrends: "Growing interest in 'fitness tracker heart rate', 'smartwatch sleep tracking'",
      customerSentiment: "Very positive (4.5/5) - Accuracy praised, battery life questioned",
      socialMentions: "156 mentions/month - fitness influencers recommending",
      competitorAnalysis: "Apple Watch SE ($249), Fitbit Versa 3 ($199) - positioned well at mid-range",
      seoOpportunities: "Rank for 'best budget fitness watch', 'accurate heart rate monitor'",
      targetAudience: "Health-conscious individuals, fitness enthusiasts, age 20-50",
      keyFeatures: "Heart rate monitoring, sleep tracking, 7-day battery, water resistant"
    },
    {
      id: 3,
      sku: "KB9012",
      name: "KB9012 Mechanical Gaming Keyboard",
      brand: "GamePro",
      category: "Electronics > Gaming > Keyboards",
      status: "Enriched",
      quality: 92,
      searchTrends: "High volume for 'mechanical keyboard RGB', 'gaming keyboard wireless'",
      customerSentiment: "Excellent (4.6/5) - Build quality and responsiveness highlighted",
      socialMentions: "89 mentions/month - esports community endorsements",
      competitorAnalysis: "Razer BlackWidow ($139), Corsair K95 ($199) - competitive features",
      seoOpportunities: "Target 'best mechanical keyboard under $100', 'RGB gaming keyboard'",
      targetAudience: "Gamers, programmers, content creators aged 16-35",
      keyFeatures: "Mechanical switches, RGB backlighting, wireless/wired modes, macro keys"
    }
  ];
};
