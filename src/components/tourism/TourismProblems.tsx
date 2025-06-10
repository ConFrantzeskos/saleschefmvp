
import React from 'react';
import { X } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismProblems = () => {
  const supplierProblems = [
    '📄 PDFs and spreadsheets with errors',
    '🏷️ No consistent categories or product structure',
    '📸 Missing or low-quality imagery',
    '🔄 No version control — dates, times, prices constantly out of sync',
    '📊 Zero structured data for modern channels',
    '⚖️ Legal disclaimers and T&Cs missing or inconsistent',
    '📅 Seasonality and availability a moving target',
    '🌍 Translation and localisation painfully manual',
    '🔍 No scalable SEO — too slow, too inconsistent',
    '👥 Human-driven onboarding takes 6–12 weeks per product',
    'Most marketplaces and OTAs leave massive revenue on the table because of this mess'
  ];

  return (
    <PageSection>
      <div className="space-elements-lg">
        <SectionHeader
          title="Why tourism content is broken — and why SalesChef fixes it"
        />
        <div className="space-elements-md">
          <div className="text-center space-elements-sm">
            <p className="text-body-large font-medium">Tourism runs on content.</p>
            <p className="text-body-large text-muted-foreground">Content sells the experience — before a single dollar is booked.</p>
            <p className="text-body-large font-medium text-foreground">But here's the reality:</p>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-subsection-title text-center mb-6">Most supplier content is an operational nightmare:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supplierProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-body text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default TourismProblems;
