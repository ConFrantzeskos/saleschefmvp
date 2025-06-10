
import { Routes, Route } from "react-router-dom";
import { pageComponents } from "../config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<pageComponents.Index />} />
      <Route path="/how-it-works" element={<pageComponents.HowItWorks />} />
      <Route path="/pricing" element={<pageComponents.Pricing />} />
      <Route path="/faq" element={<pageComponents.FAQ />} />
      <Route path="/zapier-config" element={<pageComponents.ZapierConfig />} />
      
      {/* Industry Pages */}
      <Route path="/retail" element={<pageComponents.Retail />} />
      <Route path="/travel-tourism" element={<pageComponents.TravelTourism />} />
      <Route path="/media-entertainment" element={<pageComponents.MediaEntertainment />} />
      <Route path="/finance" element={<pageComponents.Finance />} />
      <Route path="/industrial-manufacturing" element={<pageComponents.IndustrialManufacturing />} />
      <Route path="/healthcare-medical" element={<pageComponents.HealthcareMedical />} />
      <Route path="/real-estate" element={<pageComponents.RealEstate />} />
      <Route path="/automotive" element={<pageComponents.Automotive />} />
      <Route path="/investor-communications" element={<pageComponents.InvestorCommunications />} />
      
      {/* Application Flow Pages */}
      <Route path="/upload" element={<pageComponents.FileUpload />} />
      <Route path="/mapping" element={<pageComponents.SchemaMapping />} />
      <Route path="/cleaning" element={<pageComponents.CleaningValidation />} />
      <Route path="/enrichment" element={<pageComponents.Enrichment />} />
      <Route path="/enrichment-review" element={<pageComponents.EnrichmentReview />} />
      <Route path="/enrichment-review/:id" element={<pageComponents.EnrichmentAssetReview />} />
      <Route path="/generation" element={<pageComponents.ContentGeneration />} />
      <Route path="/review" element={<pageComponents.ReviewContent />} />
      <Route path="/review/:id" element={<pageComponents.AssetReview />} />
      <Route path="/enhance" element={<pageComponents.EnhanceAssets />} />
      <Route path="/deploy" element={<pageComponents.Deploy />} />
      <Route path="/optimization" element={<pageComponents.Optimization />} />
      <Route path="*" element={<pageComponents.NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
