
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import EnrichmentAssetHeader from '@/components/EnrichmentAssetHeader';
import EnrichmentDataSection from '@/components/EnrichmentDataSection';
import { EnrichmentAsset } from '@/types/enrichmentAsset';

const EnrichmentAssetReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  
  // Mock data for the enrichment asset
  const asset: EnrichmentAsset = {
    id: 1,
    sku: "CD1234",
    name: "CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic",
    brand: "TechSound",
    category: "Electronics > Audio > Headphones",
    status: "Enriched",
    quality: 95,
    searchTrends: "High demand for 'wireless headphones long battery' (8.2K searches/month), 'bluetooth headphones 24 hour' (3.1K searches/month), 'foldable headphones travel' (1.8K searches/month)",
    customerSentiment: "Overall Positive (4.2/5 stars from 1,247 reviews)\n• Battery life: Excellent (95% positive mentions)\n• Sound quality: Very good (87% positive)\n• Comfort: Good (78% positive, some long-wear concerns)\n• Build quality: Good (82% positive)",
    socialMentions: "312 mentions across platforms in last 30 days\n• Reddit: 89 mentions (mostly r/headphones, r/gaming)\n• Twitter: 156 mentions (tech reviewers, travel bloggers)\n• YouTube: 67 mentions (unboxing videos, reviews)\n• Sentiment: 73% positive, 19% neutral, 8% negative",
    competitorAnalysis: "Direct competitors analysis:\n• Beats Studio3 (20hr battery, $349) - Our 24hr advantage\n• Sony WH-1000XM4 (30hr battery, $349) - Premium positioning\n• Bose QC45 (24hr battery, $329) - Direct competitor\n• JBL Live 650BTNC (30hr battery, $199) - Budget alternative",
    seoOpportunities: "High-opportunity keywords:\n• 'best long battery headphones' (4.1K volume, medium difficulty)\n• 'wireless headphones for travel' (2.8K volume, low difficulty)\n• 'bluetooth headphones 24 hours' (1.9K volume, low difficulty)\n• 'foldable wireless headphones' (890 volume, very low difficulty)",
    targetAudience: "Primary: Business travelers and remote workers (35-45 years)\n• Pain point: Need reliable audio for long flights/calls\n• Spending power: $150-300 range\n\nSecondary: Gaming enthusiasts (18-30 years)\n• Pain point: Long gaming sessions, comfort important\n• Price sensitive: $100-200 range",
    keyFeatures: "Intelligence-driven feature priority:\n1. 24-hour battery life (mentioned in 89% of competitor reviews)\n2. Bluetooth 5.0 connectivity (standard expectation)\n3. Foldable design (valued by 67% of travel segment)\n4. Quick charge capability (15min = 3hrs, competitive advantage)\n5. Comfort padding (top complaint area for improvement)",
    seoKeywordVolume: "'wireless headphones long battery' (8,200 searches/month)\n'bluetooth headphones 24 hour' (3,100 searches/month)\n'foldable headphones travel' (1,800 searches/month)\n'noise cancelling headphones' (12,000 searches/month)\n'best wireless headphones under 200' (5,400 searches/month)",
    reasonsToBuy: "1. Exceptional 24-hour battery life (95% confidence)\n• Longest battery in price range\n• Reduces charging anxiety for travelers\n\n2. Superior sound quality for price point (87% confidence)\n• Balanced audio profile praised in reviews\n• Good bass response without overwhelming mids\n\n3. Comfortable for extended wear (78% confidence)\n• Soft ear cushions noted in reviews\n• Some concerns about headband pressure after 4+ hours\n\n4. Quick charge feature (92% confidence)\n• 15 minutes = 3 hours playback\n• Emergency charging capability valued by users\n\n5. Portable foldable design (85% confidence)\n• Compact for travel\n• Sturdy hinge mechanism",
    categoryEntryPoints: "Primary Entry Points:\n• Travel accessories sections in electronics stores\n• Online audio equipment marketplaces (Amazon, Best Buy)\n• Gaming accessory aisles\n• Airport electronics kiosks\n\nSecondary Entry Points:\n• Office supply stores (remote work trend)\n• Subscription box services (tech/gaming)\n• Corporate bulk purchase programs\n• Influencer partnerships (tech reviewers, travel bloggers)",
    favouriteFeatures: "24-hour battery life (89% confidence)\n• Most mentioned positive feature\n• Primary differentiator vs competitors\n\nQuick charge capability (76% confidence)\n• Emergency use scenarios highly valued\n• 15min = 3hrs cited as 'lifesaver'\n\nFoldable design (67% confidence)\n• Travel convenience factor\n• Appreciated by commuters\n\nBluetooth 5.0 connectivity (82% confidence)\n• Stable connection praised\n• Quick pairing experience\n\nComfortable ear cushions (71% confidence)\n• Extended wear comfort\n• Memory foam quality noted",
    missingFeatures: "Active noise cancellation (73% confidence)\n• Most requested missing feature\n• Mentioned in 68% of negative reviews\n\nWireless charging case (68% confidence)\n• Modern convenience expectation\n• Competitor advantage point\n\nMultipoint Bluetooth connection (54% confidence)\n• Professional use case demand\n• Connect phone + laptop simultaneously\n\nCustomizable EQ settings (49% confidence)\n• Audiophile community request\n• App-based sound tuning\n\nTouch controls (62% confidence)\n• Modern interface expectation\n• Physical buttons seen as dated\n\nWater resistance rating (58% confidence)\n• Gym/exercise use protection\n• Sweat resistance concerns",
    keyCompetitors: "Primary Competitors:\n\n1. Sony WH-1000XM4 ($349)\n• Premium ANC leader\n• 30-hour battery life\n• Excellent noise cancellation\n• Higher price point\n\n2. Bose QuietComfort 45 ($329)\n• Comfort champion\n• 24-hour battery (direct match)\n• Superior ANC\n• Brand premium\n\n3. Beats Studio3 ($329)\n• Strong brand recognition\n• 20-hour battery\n• Apple ecosystem integration\n• Fashion-forward design\n\nSecondary Competitors:\n\n4. JBL Live 650BTNC ($199)\n• Budget alternative\n• 30-hour battery\n• Basic ANC\n• Value positioning\n\n5. Sennheiser HD 450BT ($199)\n• Audiophile brand\n• 30-hour battery\n• Superior audio quality\n• Limited smart features",
    relativeStrengths: "vs Sony WH-1000XM4:\n✓ Better value proposition ($150 less)\n✓ Comparable battery life\n✗ No active noise cancellation\n✗ Less premium build materials\n\nvs Bose QC45:\n✓ Equal battery performance\n✓ Significantly lower price\n✓ Foldable design advantage\n✗ No noise cancellation\n✗ Less brand prestige\n\nvs Beats Studio3:\n✓ 20% longer battery life\n✓ Better value for money\n✓ More universal compatibility\n✗ Less fashion appeal\n✗ No ecosystem integration\n\nvs JBL Live 650BTNC:\n✓ Premium build quality\n✓ Brand reliability\n✓ Better customer support\n✓ Foldable design\n= Similar battery life\n\nvs Sennheiser HD 450BT:\n✓ Foldable portability\n✓ Quick charge feature\n✓ Better connectivity\n= Comparable audio quality\n✗ Less audiophile credibility"
  };

  const handleApprove = () => {
    toast.success("Enrichment data approved successfully!");
    setTimeout(() => {
      navigate('/enrichment-review');
    }, 1000);
  };

  const handleEdit = (fieldKey: string) => {
    setEditingField(fieldKey);
    const fieldValue = getFieldValue(fieldKey);
    setEditValues({
      ...editValues,
      [fieldKey]: fieldValue
    });
  };

  const getFieldValue = (fieldKey: string): string => {
    switch (fieldKey) {
      case 'searchTrends': return asset.searchTrends;
      case 'customerSentiment': return asset.customerSentiment;
      case 'socialMentions': return asset.socialMentions;
      case 'competitorAnalysis': return asset.competitorAnalysis;
      case 'seoOpportunities': return asset.seoOpportunities;
      case 'targetAudience': return asset.targetAudience;
      case 'keyFeatures': return asset.keyFeatures;
      case 'seoKeywordVolume': return asset.seoKeywordVolume;
      case 'reasonsToBuy': return asset.reasonsToBuy;
      case 'categoryEntryPoints': return asset.categoryEntryPoints;
      case 'favouriteFeatures': return asset.favouriteFeatures;
      case 'missingFeatures': return asset.missingFeatures;
      case 'keyCompetitors': return asset.keyCompetitors;
      case 'relativeStrengths': return asset.relativeStrengths;
      default: return '';
    }
  };

  const handleSave = (fieldKey: string) => {
    // In a real app, this would save to backend
    setEditingField(null);
    toast.success("Field updated successfully!");
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValues({});
  };

  const handleEditValueChange = (fieldKey: string, value: string) => {
    setEditValues({
      ...editValues,
      [fieldKey]: value
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-7xl mx-auto p-6 flex-1 flex flex-col">
        <EnrichmentAssetHeader asset={asset} onApprove={handleApprove} />

        {/* Single column layout for enrichment data */}
        <div className="flex-1 min-h-0">
          <EnrichmentDataSection
            asset={asset}
            editingField={editingField}
            editValues={editValues}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
            onEditValueChange={handleEditValueChange}
          />
        </div>
      </div>

      {/* Fixed bottom navigation bar */}
      <div className="border-t bg-background px-6 py-4 mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="outline" onClick={() => navigate('/enrichment-review')}>
            Back to Enrichment Review
          </Button>
          <div className="space-x-3">
            <Button variant="outline">
              Request Re-enrichment
            </Button>
            <Button onClick={handleApprove}>
              Approve & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichmentAssetReview;
