import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ArrowLeft, RefreshCw, Send, Download, Search, MessageSquare, Users, TrendingUp, Hash, Brain, Target, BarChart3 } from 'lucide-react';
import { EnrichmentAsset } from '@/types/enrichmentAsset';
import ExecutiveBriefing from '@/components/ExecutiveBriefing';
import CollapsibleIntelligenceSection from '@/components/CollapsibleIntelligenceSection';

const EnrichmentAssetReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // State for collapsible sections
  const [openSections, setOpenSections] = useState({
    market: true,
    customerVoice: false,
    reasonsToBuy: false,
    competitive: false,
    targetAudience: false,
    performance: false
  });

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
    seoOpportunities: "High-opportunity keywords (10+ recommendations):\n\n🎯 Primary Targets (High Volume, Medium Competition):\n• 'best long battery headphones' (4,100 vol, Med diff) - Direct match\n• 'wireless headphones for travel' (2,800 vol, Low diff) - Travel angle\n• 'bluetooth headphones 24 hours' (1,900 vol, Low diff) - Battery focus\n• 'foldable wireless headphones' (890 vol, Very Low diff) - Design advantage\n\n🔥 Secondary Targets (Medium Volume, Low Competition):\n• 'headphones that last all day' (1,200 vol, Low diff)\n• 'long lasting bluetooth headphones' (980 vol, Low diff)\n• 'travel headphones foldable' (750 vol, Very Low diff)\n• 'wireless headphones quick charge' (650 vol, Low diff)\n• 'bluetooth 5.0 headphones review' (580 vol, Med diff)\n\n💎 Long-tail Opportunities (Lower Volume, Very Low Competition):\n• '24 hour battery wireless headphones' (320 vol, Very Low diff)\n• 'foldable headphones for business travel' (210 vol, Very Low diff)\n• 'best headphones for long flights' (450 vol, Low diff)\n• 'wireless headphones under 200 long battery' (380 vol, Low diff)",
    targetAudience: "Primary: Business travelers and remote workers (35-45 years)\n• Pain point: Need reliable audio for long flights/calls\n• Spending power: $150-300 range\n\nSecondary: Gaming enthusiasts (18-30 years)\n• Pain point: Long gaming sessions, comfort important\n• Price sensitive: $100-200 range",
    keyFeatures: "Intelligence-driven feature priority:\n1. 24-hour battery life (mentioned in 89% of competitor reviews)\n2. Bluetooth 5.0 connectivity (standard expectation)\n3. Foldable design (valued by 67% of travel segment)\n4. Quick charge capability (15min = 3hrs, competitive advantage)\n5. Comfort padding (top complaint area for improvement)",
    seoKeywordVolume: "'wireless headphones long battery' (8,200 searches/month)\n'bluetooth headphones 24 hour' (3,100 searches/month)\n'foldable headphones travel' (1,800 searches/month)\n'noise cancelling headphones' (12,000 searches/month)\n'best wireless headphones under 200' (5,400 searches/month)",
    reasonsToBuy: "1. Exceptional 24-hour battery life (95% confidence)\n• Longest battery in price range\n• Reduces charging anxiety for travelers\n\n2. Superior sound quality for price point (87% confidence)\n• Balanced audio profile praised in reviews\n• Good bass response without overwhelming mids\n\n3. Comfortable for extended wear (78% confidence)\n• Soft ear cushions noted in reviews\n• Some concerns about headband pressure after 4+ hours\n\n4. Quick charge feature (92% confidence)\n• 15 minutes = 3 hours playback\n• Emergency charging capability valued by users\n\n5. Portable foldable design (85% confidence)\n• Compact for travel\n• Sturdy hinge mechanism",
    categoryEntryPoints: "🎧 Consumer Buying Triggers & Situations:\n\n💔 Product Failure/Replacement:\n• 'My old headphones battery keeps dying'\n• 'Headphones broke, need new ones urgently'\n• 'Wire finally gave out on my wired headphones'\n\n✈️ Travel & Lifestyle Changes:\n• 'Flying next week, need better travel headphones'\n• 'Starting new job with long commute'\n• 'Moving to open office, need to block noise'\n• 'Going back to university, need study headphones'\n\n🎮 Activity-Driven Needs:\n• 'Gaming sessions too long — need more comfortable headphones'\n• 'Started working from home, need better call quality'\n• 'Want to concentrate better when studying'\n• 'New fitness routine, need wireless headphones'\n\n🎁 Gifting Moments:\n• 'Need a gift for teenager who loves music'\n• 'Christmas/birthday gift for tech enthusiast'\n• 'Graduation gift for college student'\n\n🔧 Feature-Specific Triggers:\n• 'Tired of charging headphones every day'\n• 'Want wireless freedom for workout'\n• 'Need foldable headphones for travel'\n• 'Looking for headphones that last all day at work'",
    favouriteFeatures: "24-hour battery life (89% confidence)\n• Most mentioned positive feature\n• Primary differentiator vs competitors\n\nQuick charge capability (76% confidence)\n• Emergency use scenarios highly valued\n• 15min = 3hrs cited as 'lifesaver'\n\nFoldable design (67% confidence)\n• Travel convenience factor\n• Appreciated by commuters\n\nBluetooth 5.0 connectivity (82% confidence)\n• Stable connection praised\n• Quick pairing experience\n\nComfortable ear cushions (71% confidence)\n• Extended wear comfort\n• Memory foam quality noted",
    missingFeatures: "Active noise cancellation (73% confidence)\n• Most requested missing feature\n• Mentioned in 68% of negative reviews\n\nWireless charging case (68% confidence)\n• Modern convenience expectation\n• Competitor advantage point\n\nMultipoint Bluetooth connection (54% confidence)\n• Professional use case demand\n• Connect phone + laptop simultaneously\n\nCustomizable EQ settings (49% confidence)\n• Audiophile community request\n• App-based sound tuning\n\nTouch controls (62% confidence)\n• Modern interface expectation\n• Physical buttons seen as dated\n\nWater resistance rating (58% confidence)\n• Gym/exercise use protection\n• Sweat resistance concerns",
    keyCompetitors: "Primary Competitors:\n\n1. Sony WH-1000XM4 ($349)\n• Premium ANC leader\n• 30-hour battery life\n• Excellent noise cancellation\n• Higher price point\n\n2. Bose QuietComfort 45 ($329)\n• Comfort champion\n• 24-hour battery (direct match)\n• Superior ANC\n• Brand premium\n\n3. Beats Studio3 ($329)\n• Strong brand recognition\n• 20-hour battery\n• Apple ecosystem integration\n• Fashion-forward design\n\nSecondary Competitors:\n\n4. JBL Live 650BTNC ($199)\n• Budget alternative\n• 30-hour battery\n• Basic ANC\n• Value positioning\n\n5. Sennheiser HD 450BT ($199)\n• Audiophile brand\n• 30-hour battery\n• Superior audio quality\n• Limited smart features",
    relativeStrengths: "vs Sony WH-1000XM4:\n✓ Better value proposition ($150 less)\n✓ Comparable battery life\n✗ No active noise cancellation\n✗ Less premium build materials\n\nvs Bose QC45:\n✓ Equal battery performance\n✓ Significantly lower price\n✓ Foldable design advantage\n✗ No noise cancellation\n✗ Less brand prestige\n\nvs Beats Studio3:\n✓ 20% longer battery life\n✓ Better value for money\n✓ More universal compatibility\n✗ Less fashion appeal\n✗ No ecosystem integration\n\nvs JBL Live 650BTNC:\n✓ Premium build quality\n✓ Brand reliability\n✓ Better customer support\n✓ Foldable design\n= Similar battery life\n\nvs Sennheiser HD 450BT:\n✓ Foldable portability\n✓ Quick charge feature\n✓ Better connectivity\n= Comparable audio quality\n✗ Less audiophile credibility",
    verbatimQuotes: '"The battery life on these is absolutely insane - I used them for an entire cross-country flight and still had juice left!" - @TechReviewer23 (Twitter, Dec 2024)\n\n"Finally found headphones that last through my 12-hour workdays. Game changer for remote work." - Sarah M. (Amazon Review, 5★)\n\n"Sound quality is surprisingly good for the price point. Bass is punchy without being overwhelming." - AudioPhile_Dan (Reddit r/headphones)\n\n"Comfort is decent but the headband gets tight after 4+ hours of gaming" - GamerGirl_2024 (Best Buy Review, 4★)\n\n"Quick charge feature saved me so many times when I forgot to charge overnight. 15 mins gives you hours!" - Mike_Travels (YouTube comment on TechDaily review)\n\n"Foldable design is perfect for my carry-on. Much more compact than my old Beats." - @FrequentFlyer (Instagram story)\n\n"No noise cancellation is a dealbreaker for me. Great otherwise but need ANC for my commute." - CommuteCritic (Amazon Review, 3★)',
    relatedSearchTerms: "🔍 Direct Related Terms:\n• 'wireless earbuds long battery' (4,200 searches/month)\n• 'over ear bluetooth headphones' (3,800 searches/month)\n• 'gaming headset wireless' (6,100 searches/month)\n• 'noise cancelling vs regular headphones' (1,900 searches/month)\n• 'best headphones for work from home' (2,400 searches/month)\n\n🎯 Category Adjacent:\n• 'bluetooth speaker portable' (8,900 searches/month)\n• 'laptop accessories for travel' (1,600 searches/month)\n• 'wireless charging pad' (5,200 searches/month)\n• 'portable phone charger' (7,300 searches/month)\n\n✈️ Context-Driven:\n• 'travel tech essentials' (2,100 searches/month)\n• 'airplane mode bluetooth headphones' (890 searches/month)\n• 'remote work setup 2024' (3,400 searches/month)\n• 'digital nomad gear' (1,200 searches/month)",
    searchOpportunities: "🛌 Lateral Content Opportunities:\n\n'How to sleep on a plane?' (12,000 searches/month)\n→ Content angle: '24-hour battery headphones for red-eye flights'\n→ Hook: No mid-flight charging needed\n\n'Best travel accessories for long flights' (3,400 searches/month)\n→ Position as essential travel tech\n→ Emphasize foldable, space-saving design\n\n'How to focus while working from home' (8,200 searches/month)\n→ Audio quality for video calls\n→ All-day comfort for productivity\n\n'Gaming setup on a budget' (4,600 searches/month)\n→ Value positioning vs premium gaming headsets\n→ Long session comfort + battery life\n\n🎯 Problem-Solution Angles:\n\n'Headphones keep dying during calls' (1,100 searches/month)\n→ 24-hour battery solves charging anxiety\n\n'Best headphones for small luggage' (780 searches/month)\n→ Foldable design advantage\n\n'Wireless headphones connection problems' (2,200 searches/month)\n→ Bluetooth 5.0 stability messaging\n\n💡 Trending Intersections:\n\n'Sustainable tech products 2024' (1,800 searches/month)\n→ Long battery = less frequent charging = energy efficient\n\n'Minimalist travel gear' (2,900 searches/month)\n→ One device, multiple use cases (calls, music, travel)"
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleApprove = () => {
    toast.success("Enrichment data approved successfully!");
    setTimeout(() => {
      navigate('/enrichment-review');
    }, 1000);
  };

  const handleReRunEnrichment = () => {
    toast.info("Re-running intelligence gathering...");
  };

  const handleSendToContentAgents = () => {
    toast.success("Sending to content agents...");
    navigate('/generation');
  };

  const handleExportBrief = () => {
    toast.success("Exporting intelligence brief...");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/enrichment-review')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Review
            </Button>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-semibold">{asset.name}</h1>
                <Badge variant={asset.status === 'Enriched' ? 'default' : 'secondary'}>
                  {asset.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                <span>SKU: {asset.sku}</span>
                <span>•</span>
                <span>Enrichment Quality: {asset.quality}%</span>
                <span>•</span>
                <span>Last updated: 2 hours ago</span>
                <span>•</span>
                <span>Sources: ERP + Reviews + Search + Social</span>
              </div>
            </div>
          </div>
          <Button onClick={handleReRunEnrichment} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Re-run Intelligence
          </Button>
        </div>

        <div className="space-y-6">
          {/* Executive Briefing - Always visible */}
          <ExecutiveBriefing productName={asset.name} />

          {/* Market & Search Intelligence */}
          <CollapsibleIntelligenceSection
            title="Market & Search Intelligence"
            icon={<Search className="w-5 h-5 text-primary" />}
            agents={['Discover.Search', 'Distil']}
            isOpen={openSections.market}
            onToggle={() => toggleSection('market')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Popular Search Terms & Volume</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.searchTrends}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SEO Keyword Opportunities</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.seoOpportunities}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Related Search Terms</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.relatedSearchTerms}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lateral Search Opportunities</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.searchOpportunities}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Category Entry Points</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.categoryEntryPoints}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Customer Voice */}
          <CollapsibleIntelligenceSection
            title="Customer Voice"
            icon={<MessageSquare className="w-5 h-5 text-primary" />}
            agents={['Discover.Reviews', 'Discover.Social', 'Distil']}
            isOpen={openSections.customerVoice}
            onToggle={() => toggleSection('customerVoice')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Customer Sentiment Analysis</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.customerSentiment}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Verbatim Quotes & Reviews</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.verbatimQuotes}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Missing Features</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.missingFeatures}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Reasons to Buy & Feature Prioritisation */}
          <CollapsibleIntelligenceSection
            title="Reasons to Buy & Feature Prioritisation"
            icon={<Brain className="w-5 h-5 text-primary" />}
            agents={['Distil']}
            isOpen={openSections.reasonsToBuy}
            onToggle={() => toggleSection('reasonsToBuy')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Top Reasons to Buy</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.reasonsToBuy}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Feature Priority Intelligence</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.keyFeatures}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Favourite Features</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.favouriteFeatures}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Competitive Intelligence */}
          <CollapsibleIntelligenceSection
            title="Competitive Intelligence"
            icon={<TrendingUp className="w-5 h-5 text-primary" />}
            agents={['Discover', 'Detect', 'Distil']}
            isOpen={openSections.competitive}
            onToggle={() => toggleSection('competitive')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Competitive Landscape</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.competitorAnalysis}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Competitors</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.keyCompetitors}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Relative Strengths & Weaknesses</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.relativeStrengths}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Target Audience Intelligence */}
          <CollapsibleIntelligenceSection
            title="Target Audience Intelligence"
            icon={<Target className="w-5 h-5 text-primary" />}
            agents={['Define', 'Detect']}
            isOpen={openSections.targetAudience}
            onToggle={() => toggleSection('targetAudience')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Primary & Secondary Segments</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.targetAudience}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Social Media Intelligence</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.socialMentions}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Performance Signals */}
          <CollapsibleIntelligenceSection
            title="Performance Signals"
            icon={<BarChart3 className="w-5 h-5 text-primary" />}
            agents={['Diagnose', 'Detect']}
            isOpen={openSections.performance}
            onToggle={() => toggleSection('performance')}
          >
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                Performance signals will be available once the product is live and collecting engagement data.
                This section will show clickthrough trends, conversion rates, top-performing competitor PDPs, and emerging search shifts.
              </p>
            </div>
          </CollapsibleIntelligenceSection>
        </div>

        {/* Footer Actions */}
        <div className="border-t bg-background px-0 py-6 mt-8">
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleReRunEnrichment}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Re-run Enrichment
            </Button>
            <div className="space-x-3">
              <Button variant="outline" onClick={handleExportBrief}>
                <Download className="w-4 h-4 mr-2" />
                Export Brief
              </Button>
              <Button onClick={handleSendToContentAgents}>
                <Send className="w-4 h-4 mr-2" />
                Send to Content Agents
              </Button>
              <Button onClick={handleApprove}>
                Approve & Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichmentAssetReview;
