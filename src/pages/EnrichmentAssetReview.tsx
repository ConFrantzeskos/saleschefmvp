import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ArrowLeft, RefreshCw, Send, Download, Search, MessageSquare, Users, TrendingUp, Hash, Brain, Target, BarChart3, Globe2, MessageCircle, Video, FileText, Leaf, Link2, DollarSign, AlertCircle, HelpCircle, Store, Image, Sparkles } from 'lucide-react';
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
    performance: false,
    forums: false,
    influencer: false,
    technical: false,
    sustainability: false,
    crossCategory: false,
    pricing: false,
    cultural: false
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
    searchOpportunities: "🛌 Lateral Content Opportunities:\n\n'How to sleep on a plane?' (12,000 searches/month)\n→ Content angle: '24-hour battery headphones for red-eye flights'\n→ Hook: No mid-flight charging needed\n\n'Best travel accessories for long flights' (3,400 searches/month)\n→ Position as essential travel tech\n→ Emphasize foldable, space-saving design\n\n'How to focus while working from home' (8,200 searches/month)\n→ Audio quality for video calls\n→ All-day comfort for productivity\n\n'Gaming setup on a budget' (4,600 searches/month)\n→ Value positioning vs premium gaming headsets\n→ Long session comfort + battery life\n\n🎯 Problem-Solution Angles:\n\n'Headphones keep dying during calls' (1,100 searches/month)\n→ 24-hour battery solves charging anxiety\n\n'Best headphones for small luggage' (780 searches/month)\n→ Foldable design advantage\n\n'Wireless headphones connection problems' (2,200 searches/month)\n→ Bluetooth 5.0 stability messaging\n\n💡 Trending Intersections:\n\n'Sustainable tech products 2024' (1,800 searches/month)\n→ Long battery = less frequent charging = energy efficient\n\n'Minimalist travel gear' (2,900 searches/month)\n→ One device, multiple use cases (calls, music, travel)",
    
    // Cultural & Regional Intelligence
    culturalInsights: "🌍 Regional Market Preferences:\n\n• North America: Battery life #1 priority, convenience features highly valued\n• Europe: Sustainability and build quality emphasized, longer product lifecycle expected\n• Asia-Pacific: Design aesthetics critical, color options and premium feel important\n• Middle East: Heat resistance and warranty coverage key concerns",
    regionalPreferences: "Regional Terminology & Preferences:\n\n🇺🇸 United States: 'Wireless headphones', 'over-ear', emphasis on tech specs\n🇬🇧 United Kingdom: 'Wireless headphones', 'Bluetooth headphones', value for money focus\n🇦🇺 Australia: 'Bluetooth headphones', durability for outdoor use important\n🇩🇪 Germany: Technical precision, 'Kabellose Kopfhörer', engineering quality valued\n🇯🇵 Japan: Compact design, 'ワイヤレスヘッドフォン', brand reputation critical",
    complianceData: "Regional Compliance & Certifications:\n\n✅ CE Marking (Europe) - Confirmed\n✅ FCC Certification (USA) - Approved\n✅ RoHS Compliant - Yes\n✅ Bluetooth SIG Certification - Verified\n⚠️ MIC Certification (Japan) - Pending\n⚠️ BSMI Certification (Taiwan) - In progress",
    
    // Forums & Community Intelligence
    forumDiscussions: "Reddit Analysis (from 3,200+ discussions):\n\n📊 r/headphones (156 mentions):\n• Battery life praised as 'exceptional for price point'\n• Comfort debates: 67% positive, 33% concerns about headband pressure\n• Sound signature: 'Warm sound', 'good bass', some want more treble detail\n\n🎮 r/gaming (89 mentions):\n• Popular for long gaming sessions\n• Mic quality adequate but not studio-grade\n• Comfort priority for 4+ hour sessions\n\n✈️ r/TravelHacks (47 mentions):\n• Foldable design highly appreciated\n• Battery life 'perfect for international flights'\n• Request for hard case inclusion",
    communityInsights: "Community Problem-Solving Patterns:\n\n🔧 Common DIY Fixes Discussed:\n• Headband padding mods for extended comfort\n• EQ settings shared for optimal sound\n• Firmware update recommendations\n\n💡 Expert Community Sentiment:\n• Tech forums: 'Best battery-to-price ratio'\n• Audiophile communities: 'Good entry-level, upgrade cable recommended'\n• Travel communities: 'Essential carry-on item'",
    
    // Influencer & Creator Intelligence
    influencerReviews: "YouTube Creator Analysis (67 videos, 2.1M views):\n\n🎥 Top Reviews:\n• TechDaily (450K subs): 8.5/10 - 'Best battery life in this price range'\n• AudioReviewHub (280K subs): 4/5 stars - 'Great value, lacks premium features'\n• GadgetGuru (890K subs): 'Recommended' - Featured in 'Top 10 Travel Tech 2024'",
    creatorContent: "Unboxing & First Impressions (23 videos):\n\n📦 Common Themes:\n• Packaging: 'Premium feel', 'sustainable materials'\n• First touch: 'Solid build quality', 'comfortable immediately'\n• Setup: 'Quick Bluetooth pairing', 'intuitive controls'\n\n😊 Creator Sentiment: 87% positive, 13% neutral (no negative reviews)",
    videoSentiment: "Video Content Sentiment Summary:\n\n👍 Positive (87%):\n• Battery life consistently praised\n• Value proposition emphasized\n• Build quality exceeds price expectations\n\n😐 Neutral (13%):\n• Missing ANC noted as limitation\n• Comparison to premium brands\n• 'Good but not great' positioning",
    
    // Technical Specifications
    technicalSpecs: "Detailed Technical Specifications:\n\n🔊 Audio:\n• Driver Size: 40mm dynamic drivers\n• Frequency Response: 20Hz - 20kHz\n• Impedance: 32 ohms\n• Sensitivity: 105dB ±3dB\n• THD: <1% @ 1kHz\n\n🔌 Connectivity:\n• Bluetooth Version: 5.0\n• Codec Support: SBC, AAC\n• Range: 10 meters (33 feet)\n• Pairing: Auto-pairing memory\n\n🔋 Battery:\n• Capacity: 800mAh Li-polymer\n• Playback Time: 24 hours @ 50% volume\n• Charge Time: 2.5 hours (full charge)\n• Quick Charge: 15min = 3 hours playback\n• Standby Time: 300 hours",
    performanceBenchmarks: "Performance Testing Results:\n\n📊 Independent Lab Tests:\n• Battery Life Test: 23.8 hours actual (98.3% of claimed)\n• Audio Quality Score: 78/100 (RTings.com methodology)\n• Bluetooth Stability: 98.2% connection reliability\n• Comfort Score: 7.5/10 (4-hour wear test)\n\n🏆 Meets Standards:\n• Bluetooth SIG Test Suite: Passed\n• Audio Engineering Society: AES-2id compliant\n• IEC 60268 Sound System Equipment: Certified",
    
    // Sustainability & Ethics
    sustainabilityScore: "Sustainability Assessment: B+ (78/100)\n\n🌱 Positive Factors:\n• Recyclable packaging materials\n• Long battery life = fewer replacements\n• Energy-efficient charging\n• 2-year warranty (extended lifecycle)\n\n⚠️ Areas for Improvement:\n• No repair program currently\n• Plastic components not biodegradable\n• Battery not user-replaceable",
    environmentalImpact: "Environmental Impact Analysis:\n\n♻️ Manufacturing:\n• Factory: ISO 14001 certified\n• Carbon Footprint: 12.5 kg CO2e per unit\n• Renewable Energy: 45% of production energy\n\n📦 Materials:\n• 80% recyclable components\n• RoHS compliant (lead-free)\n• Conflict-free minerals certified\n• Packaging: 90% recycled materials",
    
    // Cross-Category & Ecosystem
    compatibleProducts: "Product Ecosystem & Compatibility:\n\n🔌 Essential Accessories:\n• Hard travel case ($19.99) - 78% attach rate\n• Replacement ear cushions ($14.99) - Popular upgrade\n• 3.5mm backup cable ($9.99) - Wired mode option\n• USB-C fast charger ($12.99) - Quick charge enabler\n\n🎮 Gaming Bundle Opportunities:\n• + Gaming mouse pad = 'Remote Work Bundle'\n• + Blue light glasses = 'Productivity Pack'\n• + Laptop stand = 'Ergonomic Setup'",
    ecosystemFit: "Cross-Category Integration:\n\n💼 Business Travel Bundle:\n• Headphones + Power bank + Travel adapter\n• Market: Business travelers, digital nomads\n• Bundle discount: 15% (strong uptake predicted)\n\n🎮 Gaming Starter Pack:\n• Headphones + Mouse + Keyboard\n• Target: Budget-conscious gamers\n• Bundle positioning: 'Everything you need under $300'",
    
    // Pricing & Value Intelligence
    priceHistory: "Price History & Trends (12-month analysis):\n\n📈 Pricing Timeline:\n• Launch Price: $199.99 (Jan 2024)\n• Current MSRP: $189.99 (5% reduction)\n• Average Sale Price: $159.99 (20% off promotions)\n• Black Friday 2024: $139.99 (30% off - limited time)\n\n📊 Competitor Price Movements:\n• Sony WH-1000XM4: $349 → $279 (20% drop)\n• Bose QC45: $329 → $299 (9% drop)\n• Our positioning: Stable with strategic promotions",
    valuePositioning: "Value Perception Analysis:\n\n💰 Price-to-Feature Ratio:\n• Market: 8.2/10 value score (vs 6.5 category average)\n• Consumer Perception: 'Best bang for buck'\n• Price Elasticity: Moderate (responsive to 15-25% discounts)\n\n🎯 Competitive Positioning:\n• Premium features at mid-range price\n• 'Affordable premium' messaging resonates\n• Sweet spot: $149-179 drives highest conversion",
    
    // Enhanced Customer Voice
    criticalReviews: "Critical Feedback Analysis (890 reviews):\n\n⚠️ Top Complaints:\n1. No Active Noise Cancellation (68% of negative reviews)\n   • Impact: High - mentioned in most critical reviews\n   • Solution potential: Hardware limitation, not addressable\n   \n2. Headband Pressure (23% of negative reviews)\n   • Impact: Medium - comfort over 4+ hours\n   • Solution potential: Revised padding design possible\n   \n3. No App Support (18% of negative reviews)\n   • Impact: Low - power users only\n   • Solution potential: Software development required\n   \n4. Basic Controls (15% of negative reviews)\n   • Impact: Low - preference-based\n   • Solution potential: Touch controls in v2",
    featureRequests: "Customer Feature Requests (from 230+ suggestions):\n\n🔝 Most Requested (by volume):\n1. Active Noise Cancellation (156 requests) - 'Deal-breaker for many'\n2. Mobile App with EQ (89 requests) - 'Want to customize sound'\n3. Multi-device Connection (67 requests) - 'Switch between phone & laptop'\n4. Wireless Charging (54 requests) - 'Modern convenience'\n5. Touch Controls (48 requests) - 'Prefer over buttons'\n\n💡 Innovation Opportunities:\n• Transparency mode (47 requests)\n• Voice assistant integration (43 requests)\n• Fitness tracking integration (21 requests)",
    qaInsights: "Q&A Intelligence Analysis (from 780 questions):\n\n❓ Most Common Questions:\n1. 'Do these have noise cancellation?' (187 asks) - ANC confusion\n2. 'Can I use while charging?' (134 asks) - Yes, confirmed\n3. 'Compatible with iPhone/Android?' (98 asks) - Universal compatibility\n4. 'How long does battery actually last?' (89 asks) - 22-24 hours real-world\n5. 'Are they good for gaming?' (76 asks) - Yes, low latency confirmed\n\n📊 Question Patterns:\n• Feature clarification: 54%\n• Compatibility: 23%\n• Durability concerns: 15%\n• Comparison requests: 8%",
    
    // Enhanced Market Intelligence
    categoryUseCases: "Real-World Use Case Research (47 scenarios identified):\n\n💼 Primary Use Cases:\n1. Remote Work & Video Calls (35% of users)\n   • All-day comfort essential\n   • Clear mic for meetings\n   • Battery lasts full workday\n   \n2. Travel & Commuting (28% of users)\n   • Foldable design crucial\n   • Battery for long flights\n   • Portable solution\n   \n3. Gaming Sessions (22% of users)\n   • Extended wear comfort\n   • Low latency important\n   • Long battery for marathons\n   \n4. Content Creation (10% of users)\n   • Monitoring audio\n   • Reliable connection\n   • Comfortable for editing\n   \n5. Fitness & Exercise (5% of users)\n   • Sweat resistance concern\n   • Secure fit needed\n   • Wireless freedom valued",
    retailerIntelligence: "Retailer Intelligence Summary:\n\n🏪 Amazon (Based on 1,247 reviews):\n• Rating: 4.2/5 stars\n• 'Amazon's Choice' badge earned\n• Lightning Deal history: 8 promotions, 94% sellthrough\n• Question frequency: High (indicates strong interest)\n\n🛒 Best Buy:\n• In-store demo units: Positive feedback\n• Associate recommendation rate: High\n• Open-box return rate: 8% (below category 12% average)\n\n📊 Direct Website:\n• Conversion rate: 3.2% (above 2.1% industry average)\n• Cart abandonment: 58% (pricing concerns cited)\n• Bundle uptake: 24% add accessories",
    visualPerformance: "Visual Content Performance Analysis:\n\n📸 Product Imagery Effectiveness:\n• Hero image CTR: 4.2% (vs 2.8% category average)\n• Lifestyle images: +32% engagement vs product-only\n• Video content: +67% time on page\n• 360° view: +18% conversion rate\n\n🎨 Visual Trends:\n• Minimalist backgrounds perform best\n• In-use lifestyle shots drive emotion\n• Close-up texture shots build trust\n• Travel context resonates with target audience",
    
    // Enhanced Competitive Intelligence
    expertReviewComparisons: "Expert Review Comparisons:\n\n📰 Tech Publications (9 reviews analyzed):\n\n• TechRadar: 4/5 stars\n  'Best battery life in class, lacks premium features'\n  vs Sony WH-1000XM4: 4.5/5 stars\n  vs Bose QC45: 4.5/5 stars\n  \n• CNET: 7.5/10 'Editor's Choice - Value'\n  'Exceptional value, smart compromises'\n  vs Sony: 8.5/10 'Editor's Choice'\n  vs Bose: 8/10\n  \n• What Hi-Fi: 4/5 stars\n  'Strong performance for price'\n  vs Sony: 5/5 stars\n  vs Beats Studio3: 4/5 stars",
    innovationGaps: "Innovation Gap Analysis:\n\n🔬 Feature Opportunities vs Competitors:\n\n1. Active Noise Cancellation\n   • Gap Impact: HIGH - 68% of complaints\n   • Competitor Advantage: Sony, Bose lead here\n   • Development Cost: Significant (new hardware)\n   \n2. Adaptive Sound Technology\n   • Gap Impact: MEDIUM - Emerging trend\n   • Leader: Sony's Adaptive Sound Control\n   • Opportunity: Software-based future update\n   \n3. Spatial Audio Support\n   • Gap Impact: MEDIUM - Apple ecosystem advantage\n   • Leaders: AirPods Max, Sony WH-1000XM5\n   • Opportunity: License Dolby Atmos\n   \n4. Health & Wellness Features\n   • Gap Impact: LOW - Niche interest\n   • Innovation: Hearing protection monitoring\n   • Opportunity: Differentiation play"
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
                <span>Sources: 23 Intelligence Sources (ERP + Reviews + Search + Social + Forums + Influencers + Technical + Sustainability + Pricing + more)</span>
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

          {/* Online Forums & Community Insights */}
          <CollapsibleIntelligenceSection
            title="Online Forums & Community Insights"
            icon={<MessageCircle className="w-5 h-5 text-primary" />}
            agents={['Discover.Forums', 'Distil']}
            isOpen={openSections.forums}
            onToggle={() => toggleSection('forums')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Forum Discussions Analysis</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.forumDiscussions}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Problem-Solving Patterns</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.communityInsights}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Critical Reviews & Common Complaints</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.criticalReviews}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Feature Request Analysis</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.featureRequests}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Q&A Intelligence</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.qaInsights}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Influencer & Creator Intelligence */}
          <CollapsibleIntelligenceSection
            title="Influencer & Creator Intelligence"
            icon={<Video className="w-5 h-5 text-primary" />}
            agents={['Discover.Influencer', 'Detect']}
            isOpen={openSections.influencer}
            onToggle={() => toggleSection('influencer')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">YouTube & Creator Reviews</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.influencerReviews}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Unboxing & First Impressions</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.creatorContent}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Video Content Sentiment</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.videoSentiment}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Technical & Specifications Intelligence */}
          <CollapsibleIntelligenceSection
            title="Technical & Specifications Intelligence"
            icon={<FileText className="w-5 h-5 text-primary" />}
            agents={['Discover.Technical', 'Define']}
            isOpen={openSections.technical}
            onToggle={() => toggleSection('technical')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Detailed Technical Specifications</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.technicalSpecs}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Performance Benchmarks</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.performanceBenchmarks}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Sustainability & Ethics Profile */}
          <CollapsibleIntelligenceSection
            title="Sustainability & Ethics Profile"
            icon={<Leaf className="w-5 h-5 text-primary" />}
            agents={['Discover.Sustainability', 'Define']}
            isOpen={openSections.sustainability}
            onToggle={() => toggleSection('sustainability')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Sustainability Score & Assessment</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.sustainabilityScore}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Environmental Impact Analysis</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.environmentalImpact}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Cross-Category & Ecosystem Intelligence */}
          <CollapsibleIntelligenceSection
            title="Cross-Category & Ecosystem Intelligence"
            icon={<Link2 className="w-5 h-5 text-primary" />}
            agents={['Discover', 'Define']}
            isOpen={openSections.crossCategory}
            onToggle={() => toggleSection('crossCategory')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Compatible Products & Accessories</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.compatibleProducts}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Ecosystem Integration & Bundle Opportunities</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.ecosystemFit}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Pricing & Value Intelligence */}
          <CollapsibleIntelligenceSection
            title="Pricing & Value Intelligence"
            icon={<DollarSign className="w-5 h-5 text-primary" />}
            agents={['Discover.Pricing', 'Detect']}
            isOpen={openSections.pricing}
            onToggle={() => toggleSection('pricing')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Price History & Trends</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.priceHistory}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Value Perception & Positioning</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.valuePositioning}</pre>
              </div>
            </div>
          </CollapsibleIntelligenceSection>

          {/* Cultural & Market Context Intelligence */}
          <CollapsibleIntelligenceSection
            title="Cultural & Market Context Intelligence"
            icon={<Globe2 className="w-5 h-5 text-primary" />}
            agents={['Discover.Cultural', 'Define']}
            isOpen={openSections.cultural}
            onToggle={() => toggleSection('cultural')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Regional Preferences & Localization</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.regionalPreferences}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cultural Buying Patterns</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.culturalInsights}</pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regional Compliance & Certifications</h4>
                <pre className="whitespace-pre-wrap text-sm bg-muted/30 p-4 rounded-lg">{asset.complianceData}</pre>
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
                Export Enrichment Research
              </Button>
              <Button onClick={handleApprove}>
                Approve & Continue to Enhancement
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrichmentAssetReview;
