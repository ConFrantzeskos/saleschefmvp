
import { lazy } from 'react';

// Enhanced lazy loading with strategic preloading
const Index = lazy(() => import("../pages/Index"));
const HowItWorks = lazy(() => 
  import("../pages/HowItWorks").then(module => {
    // Preload related pages
    import("../pages/Pricing");
    return module;
  })
);
const Pricing = lazy(() => 
  import("../pages/Pricing").then(module => {
    import("../pages/FAQ");
    return module;
  })
);
const FAQ = lazy(() => import("../pages/FAQ"));

// Application flow pages with optimized loading
const FileUpload = lazy(() => 
  import("../pages/FileUpload").then(module => {
    import("../pages/SchemaMapping");
    return module;
  })
);
const SchemaMapping = lazy(() => 
  import("../pages/SchemaMapping").then(module => {
    import("../pages/CleaningValidation");
    return module;
  })
);
const CleaningValidation = lazy(() => 
  import("../pages/CleaningValidation").then(module => {
    import("../pages/Enrichment");
    return module;
  })
);
const Enrichment = lazy(() => 
  import("../pages/Enrichment").then(module => {
    import("../pages/EnrichmentReview");
    return module;
  })
);
const EnrichmentReview = lazy(() => 
  import("../pages/EnrichmentReview").then(module => {
    import("../pages/EnrichmentAssetReview");
    return module;
  })
);
const EnrichmentAssetReview = lazy(() => import("../pages/EnrichmentAssetReview"));
const StrategicBrief = lazy(() => 
  import("../pages/StrategicBrief").then(module => {
    import("../pages/EnhancementReview");
    return module;
  })
);
const Enhancement = lazy(() => 
  import("../pages/Enhancement").then(module => {
    import("../pages/EnhancementReview");
    return module;
  })
);
const EnhancementReview = lazy(() => import("../pages/EnhancementReview"));
const StrategicBriefDetail = lazy(() => import("../pages/StrategicBriefDetail"));
const ContentGeneration = lazy(() => 
  import("../pages/ContentGeneration").then(module => {
    import("../pages/ReviewContent");
    return module;
  })
);
const ReviewContent = lazy(() => import("../pages/ReviewContent"));
const AssetReview = lazy(() => import("../pages/AssetReview"));
const EnhanceAssets = lazy(() => import("../pages/EnhanceAssets"));
const Deploy = lazy(() => import("../pages/Deploy"));
const TransformationShowcase = lazy(() => import("../pages/TransformationShowcase"));
const Optimization = lazy(() => import("../pages/Optimization"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Industry pages
const Retail = lazy(() => import("../pages/industries/Retail"));
const TravelTourism = lazy(() => import("../pages/industries/TravelTourism"));
const MediaEntertainment = lazy(() => import("../pages/industries/MediaEntertainment"));
const Finance = lazy(() => import("../pages/industries/Finance"));
const IndustrialManufacturing = lazy(() => import("../pages/industries/IndustrialManufacturing"));
const HealthcareMedical = lazy(() => import("../pages/industries/HealthcareMedical"));
const RealEstate = lazy(() => import("../pages/industries/RealEstate"));
const Automotive = lazy(() => import("../pages/industries/Automotive"));
const InvestorCommunications = lazy(() => import("../pages/industries/InvestorCommunications"));

// Sync imports for components that are always loaded
import ZapierConfig from "../components/ZapierConfig";

export const pageComponents = {
  Index,
  HowItWorks,
  Pricing,
  FAQ,
  ZapierConfig,
  FileUpload,
  SchemaMapping,
  CleaningValidation,
  Enrichment,
  EnrichmentReview,
  EnrichmentAssetReview,
  StrategicBrief,
  Enhancement,
  EnhancementReview,
  StrategicBriefDetail,
  ContentGeneration,
  ReviewContent,
  AssetReview,
  EnhanceAssets,
  Deploy,
  TransformationShowcase,
  Optimization,
  Dashboard,
  NotFound,
  Retail,
  TravelTourism,
  MediaEntertainment,
  Finance,
  IndustrialManufacturing,
  HealthcareMedical,
  RealEstate,
  Automotive,
  InvestorCommunications
};
