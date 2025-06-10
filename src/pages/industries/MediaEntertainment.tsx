import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import EmailCTA from '@/components/EmailCTA';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const MediaEntertainment = () => {
  const mediaProblems = [
    '🗄️ Archives scattered across DAMs, NAS drives, legacy MAMs',
    '🏷️ Poorly tagged video & image content',
    '📋 Inconsistent rights & clearance records',
    '🔗 Disconnected text, image, audio and video assets',
    '📂 No unified taxonomy — every department tags differently',
    '📺 No ready-to-syndicate FAST/CTV/OTT feeds',
    '✋ Manual enrichment for new platforms → slow, costly, error-prone',
    '🤖 Inability to scale content packaging for AI agents & smart surfaces'
  ];

  const chaosConsequences = [
    '📉 Lost syndication and licensing revenue (archive not fully monetised)',
    '🔧 Manual, expensive packaging for advertisers & sponsors',
    '⏱️ Delayed content onboarding → lost market opportunities',
    '🎯 Inconsistent audience targeting → lower CPMs',
    '📺 Missed FAST/CTV monetisation windows',
    '🔍 Poor SEO → under-leveraged owned channels',
    '⚖️ Legal & rights risk → incorrect or missing usage metadata',
    '🤖 Inability to feed AI agents / LLM search experiences'
  ];

  const ingestSources = [
    'Legacy MAMs (Dalet, Avid, Viz One, CatDV, IPV, Cantemo)',
    'DAM platforms (Bynder, Cloudinary, Adobe Experience Manager, FotoWare, Brandfolder)',
    'NAS & cold storage (S3, GCP, Azure, Glacier, on-prem drives)',
    'CMS & archives (Drupal, WordPress, headless CMSs)',
    'Raw video & image archives',
    'Rights & clearance databases (custom & vendor-provided)',
    'OTT packaging systems',
    'Third-party syndication partners',
    'Social platforms (YouTube, TikTok, Instagram)'
  ];

  const cleaningFeatures = [
    'Taxonomy alignment across departments (news, sport, lifestyle, entertainment)',
    'Entity recognition (people, places, events, brands)',
    'Genre & mood classification',
    'Language & region tagging',
    'Rights & clearance metadata enrichment',
    'Image & video quality validation (resolution, duration, compliance)',
    'Contextual signals for brand safety & targeting',
    'SEO optimisation for text-based archives (headlines, captions, descriptions)',
    'Transcript generation for audio & video',
    'Multimodal linkage (text ↔ image ↔ video ↔ audio)',
    'Accessibility tagging (subtitles, alt-text, captions)'
  ];

  const enrichmentFeatures = [
    'Social sentiment & trending topic correlation',
    'Competitive content benchmarking',
    'Audience engagement signals (CTR, completion, shareability)',
    'Advertiser & sponsor alignment signals (suitability for campaigns)',
    'Event-driven content packaging (Olympics, elections, festivals, seasonal)',
    'Multilingual auto-translation & localisation',
    'Emerging channel compliance (FAST metadata, AI/LLM surfacing)'
  ];

  const outputChannels = [
    'FAST channels (Pluto TV, Samsung TV+, LG Channels, Roku)',
    'CTV apps',
    'OTT platforms (SVOD, AVOD, TVOD)',
    'Owned & operated web & mobile',
    'Social platforms (TikTok, YouTube, Meta, Snap)',
    'Affiliate & syndication partners',
    'Licensing & archive marketplaces',
    'Podcast & audio platforms',
    'Smart speaker & AI assistant surfaces (Google, Amazon, Meta AI)',
    'Programmatic ad platforms (contextual targeting feeds)'
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '🔓 Unlock', description: 'new revenue from archives → faster packaging & syndication' },
    { icon: TrendingUp, metric: '💰 Higher', description: 'CPMs → better contextual & audience signals' },
    { icon: TrendingUp, metric: '🚀 Faster', description: 'advertiser onboarding → automated brand-suitable packaging' },
    { icon: TrendingUp, metric: '⚡ Faster', description: 'time-to-market for new channels' },
    { icon: TrendingUp, metric: '📉 Reduced', description: 'manual metadata ops cost' },
    { icon: TrendingUp, metric: '⚖️ Improved', description: 'legal & rights governance' },
    { icon: TrendingUp, metric: '🤖 More', description: 'content surfaced in AI & smart search' },
    { icon: TrendingUp, metric: '🔍 Better', description: 'SEO → higher organic audience reach' }
  ];

  const useCases = [
    {
      useCase: 'Archive monetisation & syndication',
      agents: 'Drop, Clean, Define, Deploy',
      value: 'Drives new licensing & FAST revenue'
    },
    {
      useCase: 'Advertiser-ready contextual packaging',
      agents: 'Distil, Draft, Deploy',
      value: 'Higher CPMs and faster campaign activation'
    },
    {
      useCase: 'SEO-optimised publishing for owned channels',
      agents: 'Discover.Search, Draft',
      value: 'Organic traffic growth & audience acquisition'
    },
    {
      useCase: 'AI/LLM surfacing prep',
      agents: 'Document, Discover, Draft',
      value: 'Content ready for next-gen search surfaces'
    },
    {
      useCase: 'Rights & compliance validation',
      agents: 'Diligence, QA Validator',
      value: 'Lower legal exposure'
    },
    {
      useCase: 'Dynamic packaging for social & video',
      agents: 'Director, Draw, Draft',
      value: 'Increased engagement & monetisation'
    }
  ];

  const integrations = [
    'MAM/DAM platforms: Dalet, Avid, VizRT, Bynder, Cloudinary, AEM, CatDV, etc.',
    'CMS: WordPress, Drupal, Contentful, Sanity, Prismic',
    'FAST/CTV packaging systems: Amagi, Wurl, Frequency, Gracenote',
    'OTT apps: Brightcove, JWPlayer, Vimeo OTT',
    'Ad platforms: Google Ad Manager, Xandr, Freewheel',
    'Programmatic platforms: Magnite, PubMatic, The Trade Desk',
    'SEO platforms: Conductor, Botify, BrightEdge',
    'Social APIs: TikTok, Meta, YouTube',
    'Rights management systems',
    'Data warehouses & CDPs'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              🎬 SalesChef for Media & Entertainment
            </span>
          }
          subtitle={
            <span>
              Transform your fragmented media assets into <span className="font-semibold text-primary">revenue-driving, advertiser-ready intelligence</span>.
              <br />
              <span className="text-gradient-brand font-medium">
                Unstructured archive in. Insight-rich, monetisable media out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why media content & metadata are broken */}
      <PageSection>
        <SectionHeader
          title="Why media content & metadata are broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">In today's media ecosystem, content alone is no longer enough.</p>
            <p className="text-lg text-muted-foreground mb-8">To drive advertising, subscriptions, syndication and licensing revenue, you need structured, searchable, monetisable metadata.</p>
            <p className="text-lg font-medium text-foreground">But what do most media businesses have today?</p>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/30 hover:shadow-soft transition-shadow">
                  <span className="text-sm text-foreground font-medium leading-relaxed">{problem}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">👉 This is the #1 bottleneck holding back media businesses from fully monetising their assets.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* The cost of the chaos */}
      <PageSection background="muted">
        <SectionHeader
          title={
            <span>
              💸 The Cost of Chaos
            </span>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaosConsequences.map((consequence, index) => (
            <div key={index} className="bg-background rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-medium transition-shadow">
              <p className="text-foreground font-medium leading-relaxed">{consequence}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* SalesChef: Built for the complexity of modern media */}
      <PageSection>
        <SectionHeader
          title="SalesChef: Built for the complexity of modern media"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef was designed for industries where content complexity meets revenue pressure — and media is ground zero.
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Your reality:</h3>
            <div className="space-y-3">
              {[
                '20 years of mixed-format archives',
                'No consistent metadata schema',
                'Rights data in a spreadsheet last updated 6 years ago',
                'New channels launching monthly — FAST, TikTok, Instagram Video, AI voice, CTV marketplaces',
                'Advertisers demanding rich context & brand-safety alignment',
                'AI search engines driving new audience discovery paths'
              ].map((reality, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">👉</span>
                  <span className="text-foreground">{reality}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">SalesChef automates and governs this transformation layer — fast.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Media & Entertainment"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & unify your media assets</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's Drop Agent ingests from:</p>
            <div className="space-y-2">
              {ingestSources.map((source, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{source}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="font-medium text-foreground mb-2">Key value:</p>
              <p className="text-sm">👉 No manual reconciliation → automatic unification and de-duplication<br />
              👉 Ingests from multiple systems → builds a master media graph</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with media-specific intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef automates:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {cleaningFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Enrich */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold">Enrich with dynamic market intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's Discover Agents add:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {enrichmentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Generate */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-semibold">Generate & deploy across revenue channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs optimised media packages for:</p>
            <div className="space-y-2">
              {outputChannels.map((channel, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Business Outcomes */}
      <PageSection>
        <SectionHeader
          title="Business outcomes for media companies"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessOutcomes.map((outcome, index) => (
            <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50 text-center hover:shadow-medium transition-shadow">
              <outcome.icon className="w-10 h-10 mx-auto text-primary mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">{outcome.metric}</div>
              <p className="text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Why leaders choose SalesChef */}
      <PageSection background="muted">
        <SectionHeader
          title="Why leading media companies are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Designed for the real-world mess of media archives',
            'Knows the modern stack: FAST, OTT, CTV, AI surfacing, programmatic',
            'Automates painful, high-cost manual enrichment',
            'Makes archives monetisable at scale',
            'Improves audience targeting and brand safety',
            'Unlocks SEO and AI discoverability',
            'Adapts to your taxonomy — doesn\'t force you into a new one',
            'Stateless architecture → works with your existing DAM/MAM ecosystem',
            'Continuous learning → gets smarter as your content evolves'
          ].map((reason, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">{reason}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Use Cases */}
      <PageSection>
        <SectionHeader
          title="Typical use cases"
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-background rounded-xl shadow-soft border border-border/50">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-6 font-semibold">Use Case</th>
                <th className="text-left p-6 font-semibold">Agents Involved</th>
                <th className="text-left p-6 font-semibold">Value Delivered</th>
              </tr>
            </thead>
            <tbody>
              {useCases.map((useCase, index) => (
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

      {/* Integrations */}
      <PageSection background="muted">
        <SectionHeader
          title="Key integrations & stack fit"
        />
        <div className="space-y-6">
          <p className="text-center text-muted-foreground">SalesChef works seamlessly with:</p>
          <div className="space-y-3">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-start gap-2 bg-background rounded-lg p-4 border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <EmailCTA
        headline="Ready to unlock your full media monetisation potential?"
        subtitle="Custom-tailored for your media business: broadcaster, publisher, streamer, or studio."
        variant="default"
        size="lg"
      />

      <Footer />
    </div>
  );
};

export default MediaEntertainment;
