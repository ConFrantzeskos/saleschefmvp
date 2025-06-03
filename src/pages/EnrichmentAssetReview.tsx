
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
    keyFeatures: "Intelligence-driven feature priority:\n1. 24-hour battery life (mentioned in 89% of competitor reviews)\n2. Bluetooth 5.0 connectivity (standard expectation)\n3. Foldable design (valued by 67% of travel segment)\n4. Quick charge capability (15min = 3hrs, competitive advantage)\n5. Comfort padding (top complaint area for improvement)"
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
