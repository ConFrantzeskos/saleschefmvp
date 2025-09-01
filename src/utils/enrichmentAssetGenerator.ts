import { EnrichmentAsset } from '@/types/enrichmentAsset';

export const generateSampleEnrichmentAssets = (): EnrichmentAsset[] => {
  const baseAssets: EnrichmentAsset[] = [
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
      keyFeatures: "24-hour battery, Bluetooth 5.0, foldable design, quick charge",
      seoKeywordVolume: "'wireless headphones long battery' (8,200 searches/month)",
      reasonsToBuy: "1. Exceptional 24-hour battery life (95% confidence)\n2. Superior sound quality for price point (87% confidence)",
      categoryEntryPoints: "Travel & Lifestyle Changes: Flying next week, need better travel headphones",
      favouriteFeatures: "24-hour battery life (89% confidence)\nQuick charge capability (76% confidence)",
      missingFeatures: "Active noise cancellation (73% confidence)\nWireless charging case (68% confidence)",
      keyCompetitors: "Sony WH-1000XM4 ($349) - Premium ANC leader\nBeats Studio3 ($329) - Brand recognition",
      relativeStrengths: "vs Sony WH-1000XM4: Better battery life, more affordable",
      verbatimQuotes: "The battery life on these is absolutely insane - @TechReviewer23",
      relatedSearchTerms: "wireless earbuds long battery (4,200 searches/month)",
      searchOpportunities: "Travel accessories market - position as essential travel tech"
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
      keyFeatures: "Heart rate monitoring, sleep tracking, 7-day battery, water resistant",
      seoKeywordVolume: "'fitness tracker heart rate' (6,500 searches/month)",
      reasonsToBuy: "1. Accurate heart rate monitoring (91% confidence)\n2. Comprehensive sleep tracking (88% confidence)",
      categoryEntryPoints: "Health Goals & Resolutions: New Year fitness resolution, doctor recommended tracking",
      favouriteFeatures: "Heart rate accuracy (91% confidence)\n7-day battery life (88% confidence)",
      missingFeatures: "GPS tracking (81% confidence)\nMusic storage (65% confidence)",
      keyCompetitors: "Apple Watch SE ($249) - Ecosystem integration\nFitbit Versa 3 ($199) - Health focus leader",
      relativeStrengths: "vs Apple Watch SE: Better battery life, more affordable",
      verbatimQuotes: "Heart rate readings are spot-on compared to my chest strap - FitnessJunkie47",
      relatedSearchTerms: "fitness tracker with heart rate (5,200 searches/month)",
      searchOpportunities: "Fitness motivation content - data-driven progress tracking"
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
      keyFeatures: "Mechanical switches, RGB backlighting, wireless/wired modes, macro keys",
      seoKeywordVolume: "'mechanical keyboard RGB' (9,800 searches/month)",
      reasonsToBuy: "1. Satisfying mechanical key feel (94% confidence)\n2. Customizable RGB lighting (89% confidence)",
      categoryEntryPoints: "Gaming Performance Needs: Current keyboard too slow for competitive gaming",
      favouriteFeatures: "Mechanical switch feel (94% confidence)\nRGB customization (87% confidence)",
      missingFeatures: "Hot-swappable switches (69% confidence)\nDedicated media controls (64% confidence)",
      keyCompetitors: "Razer BlackWidow V3 ($139) - Brand recognition\nCorsair K95 RGB ($199) - Premium features",
      relativeStrengths: "vs Razer BlackWidow: Better value, dual connectivity",
      verbatimQuotes: "The tactile feedback is perfect for both gaming and coding - CodeWarrior_Dev",
      relatedSearchTerms: "mechanical keyboard for programming (4,800 searches/month)",
      searchOpportunities: "Gaming setup guides - position as essential gaming upgrade"
    }
  ];

  // Generate 47 additional assets to reach 50 total
  const additionalAssets: EnrichmentAsset[] = Array.from({ length: 47 }, (_, index) => {
    const id = index + 4;
    const categories = [
      "Electronics > Audio > Speakers",
      "Electronics > Gaming > Mice", 
      "Electronics > Tablets > Android",
      "Electronics > Cameras > Webcams",
      "Electronics > Accessories > Power Banks",
      "Home & Garden > Kitchen > Coffee Makers",
      "Home & Garden > Lighting > Desk Lamps",
      "Fashion > Clothing > Jackets",
      "Fashion > Shoes > Athletic",
      "Sports & Outdoors > Fitness > Yoga",
      "Sports & Outdoors > Camping > Sleeping Bags",
      "Health & Wellness > Vitamins > Vitamin D",
      "Books & Media > Planners > Daily",
      "Home & Garden > Kitchen > Cutting Boards",
      "Health & Wellness > Support > Posture",
      "Health & Wellness > Aromatherapy > Diffusers",
      "Fashion > Bags > Crossbody",
      "Home & Garden > Plants > Succulents",
      "Sports & Outdoors > Fitness > Resistance Training",
      "Home & Garden > Furniture > Cushions",
      "Sports & Outdoors > Cycling > Helmets",
      "Sports & Outdoors > Tools > Flashlights",
      "Home & Garden > Storage > Bathroom",
      "Home & Garden > Outdoor > Lighting",
      "Fashion > Accessories > Scarves",
      "Beauty > Makeup > Lipstick",
      "Health & Wellness > Recovery > Massage Tools",
      "Health & Wellness > Sleep > Sleep Masks",
      "Books & Media > Cookbooks > Healthy",
      "Books & Media > Puzzles > Jigsaw",
      "Books & Media > Journals > Blank",
      "Books & Media > Music > Classical"
    ];
    
    const brands = ["TechPro", "SoundWave", "TabletMax", "StreamCam", "PowerPlus", "BrewMaster", "LightPro", "UrbanStyle", "FitStride", "ZenFit", "OutdoorGear", "HealthPlus", "FocusWorks", "EcoKitchen", "AlignWell", "AromaZen", "ChicCarry", "GreenThumb", "FitStrong", "ComfortPlus", "RideSafe", "BrightBeam", "OrganizePro", "SolarGlow", "LuxeWrap", "ColorPerfect", "RecoverPro", "DreamComfort", "NutriChef", "PuzzleMaster", "WriteWell", "SymphonySelect"];
    
    const qualities = [91, 84, 87, 86, 82, 83, 80, 88, 78, 79, 81, 78, 76, 73, 77, 75, 72, 70, 68, 66, 64, 62, 60, 58, 56, 54, 52, 50, 48, 46, 45, 74, 89, 67, 85, 71, 63, 59, 57, 55, 53, 51, 49, 47, 69, 65, 61];
    
    // Determine status based on quality - higher quality items are "Enriched"
    const status: "Enriched" | "Needs Review" = qualities[index % qualities.length] >= 70 ? "Enriched" : "Needs Review";
    
    return {
      id,
      sku: `PR${1000 + id}`,
      name: `Product ${id} - ${brands[index % brands.length]} Item`,
      brand: brands[index % brands.length],
      category: categories[index % categories.length],
      status,
      quality: qualities[index % qualities.length],
      searchTrends: `Growing demand for product category ${id}, trending searches`,
      customerSentiment: `Good (4.${Math.floor(Math.random() * 5)}/5) - Users appreciate quality and value`,
      socialMentions: `${50 + (index * 7)} mentions/month - positive community engagement`,
      competitorAnalysis: `Competitor A ($${50 + index * 3}), Competitor B ($${70 + index * 4}) - competitive market positioning`,
      seoOpportunities: `Target keywords for product ${id}, optimize for category searches`,
      targetAudience: `Target demographic for product ${id}, age range 20-55`,
      keyFeatures: `Premium feature 1, Advanced feature 2, Convenient feature 3`,
      seoKeywordVolume: `${2000 + index * 100} searches/month for primary keywords`,
      reasonsToBuy: `1. Excellent value proposition (${85 + Math.floor(Math.random() * 10)}% confidence)\n2. Superior quality vs competitors (${80 + Math.floor(Math.random() * 15)}% confidence)`,
      categoryEntryPoints: `Consumer trigger: Need for product ${id} in daily routine`,
      favouriteFeatures: `Top-rated feature (${85 + Math.floor(Math.random() * 10)}% confidence)\nSecond favorite feature (${75 + Math.floor(Math.random() * 15)}% confidence)`,
      missingFeatures: `Desired enhancement (${70 + Math.floor(Math.random() * 20)}% confidence)\nAdditional feature request (${60 + Math.floor(Math.random() * 25)}% confidence)`,
      keyCompetitors: `Main Competitor ($${80 + index * 5}) - Market leader\nSecondary Competitor ($${60 + index * 3}) - Budget alternative`,
      relativeStrengths: `vs Main Competitor: Better value and features\nvs Secondary: Superior quality and support`,
      verbatimQuotes: `"Great product for the price - exactly what I needed" - Customer${index + 100}`,
      relatedSearchTerms: `Related term ${id} (${1500 + index * 50} searches/month)`,
      searchOpportunities: `SEO opportunity for product ${id} - untapped market segment`
    };
  });

  return [...baseAssets, ...additionalAssets];
};