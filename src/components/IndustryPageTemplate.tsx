import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

interface IndustryData {
  name: string;
  emoji: string;
  dataSources: string[];
  cleaningExamples: string[];
  enrichmentExamples: string[];
  outputExamples: string[];
  useCases: Array<{
    useCase: string;
    agents: string;
    value: string;
  }>;
  seoKeywords: string[];
}

interface IndustryPageTemplateProps {
  industry: IndustryData;
}

const IndustryPageTemplate = ({ industry }: IndustryPageTemplateProps) => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              {industry.emoji} {industry.name} + SalesChef
            </span>
          }
          subtitle={
            <span>
              Transform your <span className="font-semibold text-primary">{industry.name.toLowerCase()}</span> content — faster, smarter, at scale.
              <br />
              <span className="text-gradient-brand font-medium">
                One messy dataset in. A feast of sales-ready content out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Value Proposition */}
      <PageSection>
        <SectionHeader
          title="The Challenge"
          subtitle={`${industry.name} organisations are overwhelmed by content complexity`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { icon: '📊', title: 'Fragmented data sources', desc: 'Multiple systems, formats, and vendors' },
            { icon: '🔄', title: 'Inconsistent formats', desc: 'Manual effort to standardize content' },
            { icon: '⚖️', title: 'Regulatory pressure', desc: 'Compliance requirements slow everything down' },
            { icon: '🎯', title: 'Demand for rich content', desc: 'Customers expect detailed, differentiated information' },
            { icon: '⚡', title: 'Shorter time-to-market', desc: 'Competition moves faster than ever' },
            { icon: '📱', title: 'Multi-channel expectations', desc: 'Web, mobile, marketplaces, partners, AI agents' }
          ].map((item, index) => (
            <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-medium text-foreground">
            SalesChef transforms this chaos into structured, persuasive, high-performance content — <span className="text-primary">automatically</span>.
          </p>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title={`How SalesChef works for ${industry.name}`}
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & Understand Your Data</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's Drop Agent can ingest:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['CSVs, PDFs, JSON, XML', 'ERP, CRM, legacy PIMs', 'Unstructured documents', 'API feeds', 'Public web data (scraped)', 'Supplier & partner systems'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="font-medium mb-2">For {industry.name}, this means:</p>
              <div className="space-y-1">
                {industry.dataSources.map((source, index) => (
                  <p key={index} className="text-sm">👉 {source}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & Structure Content</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef auto-cleans, deduplicates, normalises, validates and enriches:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Units, currencies, dates', 'Legal compliance fields', 'SEO metadata', 'Accessibility', 'Multi-language', 'Brand voice alignment'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-accent/10 rounded-lg p-4">
              <p className="font-medium mb-2">For {industry.name}:</p>
              <div className="space-y-1">
                {industry.cleaningExamples.map((example, index) => (
                  <p key={index} className="text-sm">👉 {example}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Enrich */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold">Enrich & Optimise</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's agents enrich with:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {['Market insights', 'Competitor benchmarks', 'Social sentiment', 'Reviews', 'Dynamic FAQs', 'Training content', 'SEO metadata', 'Compliance disclaimers', 'Cross-channel formatting'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 rounded-lg p-4">
              <p className="font-medium mb-2">For {industry.name}:</p>
              <div className="space-y-1">
                {industry.enrichmentExamples.map((example, index) => (
                  <p key={index} className="text-sm">👉 {example}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Step 4: Generate */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-semibold">Generate & Publish</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">SalesChef auto-generates:</p>
                <div className="space-y-2">
                  {['Web pages & landing pages', 'Marketplace feeds', 'Video & social content', 'Training modules', 'Sales support decks', 'Email content', 'Print-ready outputs'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">And deploys to:</p>
                <div className="space-y-2">
                  {['Web CMS & marketplaces', 'CRM & sales platforms', 'Partner portals', 'Internal systems', 'AI assistants', 'Mobile apps'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 mt-6">
              <p className="font-medium mb-2">For {industry.name}:</p>
              <div className="space-y-1">
                {industry.outputExamples.map((example, index) => (
                  <p key={index} className="text-sm">👉 {example}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Key Features */}
      <PageSection>
        <SectionHeader
          title={`Key SalesChef Features for ${industry.name}`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🤖', title: 'AI-native automation', desc: 'Reduces manual effort significantly' },
            { icon: '📈', title: 'Continuous learning', desc: 'Improves content performance over time' },
            { icon: '📋', title: 'Full audit trail', desc: 'Supports compliance requirements' },
            { icon: '🎯', title: 'Industry-specific tuning', desc: 'Brand tone, legal requirements, market nuance' },
            { icon: '📱', title: 'Multi-channel output', desc: 'Web, mobile, social, print, in-app' },
            { icon: '🌍', title: 'Multi-market support', desc: 'Language, region, format variants' },
            { icon: '🔗', title: 'Full API support', desc: 'Connects to your existing stack' },
            { icon: '☁️', title: 'No storage lock-in', desc: 'Stateless, not another system of record' },
            { icon: '🔄', title: 'Continuous optimisation', desc: 'Enriches based on market feedback' }
          ].map((feature, index) => (
            <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50 hover:shadow-medium transition-shadow">
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Use Cases */}
      <PageSection background="muted">
        <SectionHeader
          title={`Common Use Cases in ${industry.name}`}
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-background rounded-xl shadow-soft border border-border/50">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-6 font-semibold">Use Case</th>
                <th className="text-left p-6 font-semibold">SalesChef Agents Involved</th>
                <th className="text-left p-6 font-semibold">Value Delivered</th>
              </tr>
            </thead>
            <tbody>
              {industry.useCases.map((useCase, index) => (
                <tr key={index} className="border-b border-border/30 last:border-0">
                  <td className="p-6 font-medium">{useCase.useCase}</td>
                  <td className="p-6 text-sm text-muted-foreground">{useCase.agents}</td>
                  <td className="p-6 text-sm">{useCase.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      {/* Compliance */}
      <PageSection>
        <SectionHeader
          title="Industry-Specific Compliance & Governance"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '📊', title: 'Audit trails', desc: 'Complete content lineage tracking' },
            { icon: '✅', title: 'Approval workflows', desc: 'Custom review and sign-off processes' },
            { icon: '🏷️', title: 'Regulatory tagging', desc: 'Automatic compliance validation' },
            { icon: '⚙️', title: 'Custom rule engines', desc: 'Industry-specific business rules' },
            { icon: '🌍', title: 'Multi-regional compliance', desc: 'Configurable regulatory requirements' },
            { icon: '🔍', title: 'Full traceability', desc: 'From input to published content' }
          ].map((item, index) => (
            <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Why Choose SalesChef */}
      <PageSection background="muted">
        <SectionHeader
          title={`Why ${industry.name} leaders choose SalesChef`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'AI-first architecture', desc: 'Built for modern, multi-channel content demands' },
            { title: 'Modular, agentic approach', desc: 'Adapts to your specific business needs' },
            { title: 'No rip-and-replace', desc: 'SalesChef works alongside your existing stack' },
            { title: 'Measurable ROI', desc: 'Proven uplift in conversion, efficiency, and content quality' },
            { title: 'Trusted by leaders', desc: 'Forward-thinking teams across industries rely on SalesChef' }
          ].map((item, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-soft border border-border/50">
              <h3 className="font-semibold mb-2 text-primary">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            See how SalesChef can transform your <span className="text-primary">{industry.name}</span> content
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Custom-tailored for your business needs.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 text-lg px-8 py-6"
                disabled={!email}
              >
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;
