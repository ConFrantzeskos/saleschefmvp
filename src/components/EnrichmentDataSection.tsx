
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, Save, X, Search, MessageSquare, Users, TrendingUp, Globe, Hash, Brain } from 'lucide-react';
import { EnrichmentAsset } from '@/types/enrichmentAsset';

interface EnrichmentDataSectionProps {
  asset: EnrichmentAsset;
  editingField: string | null;
  editValues: Record<string, string>;
  onEdit: (fieldKey: string) => void;
  onSave: (fieldKey: string) => void;
  onCancel: () => void;
  onEditValueChange: (fieldKey: string, value: string) => void;
}

const EnrichmentDataSection = ({
  asset,
  editingField,
  editValues,
  onEdit,
  onSave,
  onCancel,
  onEditValueChange
}: EnrichmentDataSectionProps) => {
  const enrichmentFields = [
    {
      key: 'searchTrends',
      title: 'Search Intelligence',
      icon: Search,
      description: 'Popular search terms and volume data',
      value: asset.searchTrends
    },
    {
      key: 'customerSentiment',
      title: 'Customer Sentiment Analysis',
      icon: MessageSquare,
      description: 'Insights from customer reviews and feedback',
      value: asset.customerSentiment
    },
    {
      key: 'socialMentions',
      title: 'Social Media Intelligence',
      icon: Users,
      description: 'Social platform mentions and sentiment',
      value: asset.socialMentions
    },
    {
      key: 'competitorAnalysis',
      title: 'Competitive Landscape',
      icon: TrendingUp,
      description: 'Direct competitor analysis and positioning',
      value: asset.competitorAnalysis
    },
    {
      key: 'seoOpportunities',
      title: 'SEO Opportunities',
      icon: Globe,
      description: 'High-value keyword opportunities',
      value: asset.seoOpportunities
    },
    {
      key: 'targetAudience',
      title: 'Target Audience Intelligence',
      icon: Hash,
      description: 'Data-driven audience segmentation',
      value: asset.targetAudience
    },
    {
      key: 'keyFeatures',
      title: 'Feature Priority Intelligence',
      icon: Brain,
      description: 'Intelligence-driven feature importance ranking',
      value: asset.keyFeatures
    }
  ];

  return (
    <div className="bg-white rounded-xl border shadow-soft">
      <div className="p-6 border-b">
        <h2 className="text-xl font-display font-semibold text-foreground">Enriched Product Intelligence</h2>
        <p className="text-sm text-muted-foreground mt-1">Review the intelligence gathered from external data sources</p>
      </div>
      
      <div className="p-6 space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto">
        {enrichmentFields.map((field) => {
          const Icon = field.icon;
          const isEditing = editingField === field.key;
          
          return (
            <Card key={field.key} className="border-l-4 border-l-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{field.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{field.description}</p>
                    </div>
                  </div>
                  {!isEditing && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(field.key)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                {isEditing ? (
                  <div className="space-y-3">
                    <Textarea
                      value={editValues[field.key] || ''}
                      onChange={(e) => onEditValueChange(field.key, e.target.value)}
                      className="min-h-[120px] resize-none"
                      placeholder={`Edit ${field.title.toLowerCase()}...`}
                    />
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => onSave(field.key)}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={onCancel}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap text-sm text-foreground bg-muted/30 p-4 rounded-lg border">
                      {field.value}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EnrichmentDataSection;
