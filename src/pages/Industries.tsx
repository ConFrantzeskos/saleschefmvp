
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';

const Industries = () => {
  const industries = [
    {
      title: 'Retail / eCommerce',
      description: 'Transform product catalogs into high-converting content across all channels',
      icon: '🛍️'
    },
    {
      title: 'Travel & Tourism',
      description: 'Create compelling destination and experience content at scale',
      icon: '✈️'
    },
    {
      title: 'Media & Entertainment',
      description: 'Optimize content assets for maximum engagement and distribution',
      icon: '🎬'
    },
    {
      title: 'Financial Services',
      description: 'Generate compliant product disclosures and marketing materials',
      icon: '💰'
    },
    {
      title: 'Manufacturing',
      description: 'Streamline technical documentation and product specifications',
      icon: '🏭'
    },
    {
      title: 'Healthcare',
      description: 'Create accurate, compliant medical device and product content',
      icon: '🏥'
    },
    {
      title: 'Real Estate',
      description: 'Generate compelling property listings and marketing materials',
      icon: '🏠'
    },
    {
      title: 'Automotive',
      description: 'Transform vehicle specifications into persuasive sales content',
      icon: '🚗'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title="Industries We Serve"
          subtitle="SalesChef adapts to your industry's unique content challenges and requirements"
          size="lg"
        />
      </PageSection>

      <PageSection padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                {industry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Industries;
