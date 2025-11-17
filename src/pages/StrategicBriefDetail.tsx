import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Target,
  Award,
  ShoppingBag,
  Shield,
  Brain,
  Zap,
  MessageSquare,
  Lock,
  Clock
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { generateSampleEnhancedAssets } from '@/utils/enhancedAssetGenerator';

const StrategicBriefDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const assets = generateSampleEnhancedAssets();
  const asset = assets.find(a => a.id === Number(id));

  if (!asset) {
    return <div>Asset not found</div>;
  }

  const Section = ({ 
    title, 
    icon: Icon, 
    children, 
    defaultOpen = false 
  }: { 
    title: string; 
    icon: any; 
    children: React.ReactNode; 
    defaultOpen?: boolean;
  }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className="overflow-hidden">
          <CollapsibleTrigger className="w-full">
            <div className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">{title}</h3>
              </div>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-6 pt-0 border-t">
              {children}
            </div>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => navigate('/enhancement-review')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Strategic Briefs
          </Button>
          <Button onClick={() => navigate('/generation')} className="gap-2">
            <Sparkles className="w-4 h-4" />
            Generate Content for This Asset
          </Button>
        </div>

        {/* Executive Summary */}
        <Card className="p-8 mb-6 border-primary/20">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-subsection-title font-display font-bold">{asset.name}</h1>
                <Badge className="bg-primary">{asset.confidenceScore}% Confidence</Badge>
              </div>
              <p className="text-sm text-muted-foreground">SKU: {asset.sku} • {asset.category} • {asset.brand}</p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
            <label className="text-xs font-medium text-muted-foreground block mb-2">CORE VALUE PROPOSITION</label>
            <p className="text-foreground text-lg font-medium">{asset.coreValueProposition}</p>
          </div>
        </Card>

        <div className="space-y-4">
          {/* 1. Ladder of Benefits */}
          <Section title="1. Ladder of Benefits" icon={TrendingUp} defaultOpen={true}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Climbs from product features through benefits to emotional and social outcomes. Each major feature gets its own discrete ladder.
              </p>
            </div>
            <div className="space-y-6">
              {/* Ladder 1: Battery */}
              <div className="relative pl-6 pb-4 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">Ladder 1: Battery Feature</Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Feature:</span>
                    <p className="text-sm font-medium">24-hour continuous battery life</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Feature Benefit:</span>
                    <p className="text-sm">Never need to charge mid-day</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Consumer Benefit:</span>
                    <p className="text-sm">Perfect for all-day work, long flights, marathon gaming sessions</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Emotional/Social Benefit:</span>
                    <p className="text-sm font-medium text-primary">Your home becomes the reliable hub where work, entertainment, and family know you're always powered up</p>
                  </div>
                </div>
              </div>

              {/* Ladder 2: Foldable Design */}
              <div className="relative pl-6 pb-4 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">Ladder 2: Foldable Design</Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Feature:</span>
                    <p className="text-sm font-medium">Patented fold mechanism (reduces to 50% size)</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Feature Benefit:</span>
                    <p className="text-sm">Compact portability without compromising structure</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Consumer Benefit:</span>
                    <p className="text-sm">Perfect for business travel, gym bags, daily commuting</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Emotional/Social Benefit:</span>
                    <p className="text-sm font-medium text-primary">You'll be known as the smart traveler who never sacrifices quality for convenience</p>
                  </div>
                </div>
              </div>

              {/* Ladder 3: Premium Audio */}
              <div className="relative pl-6 pb-4 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">Ladder 3: Audio Quality</Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Feature:</span>
                    <p className="text-sm font-medium">40mm neodymium drivers with active noise isolation</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Feature Benefit:</span>
                    <p className="text-sm">Studio-quality sound with zero distractions</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Consumer Benefit:</span>
                    <p className="text-sm">Perfect for critical listening, professional calls, immersive content</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Emotional/Social Benefit:</span>
                    <p className="text-sm font-medium text-primary">Your workspace transforms into a professional studio that commands respect</p>
                  </div>
                </div>
              </div>

              {/* Ladder 4: Bluetooth 5.0 */}
              <div className="relative pl-6 pb-4 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">Ladder 4: Bluetooth Connectivity</Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Feature:</span>
                    <p className="text-sm font-medium">Bluetooth 5.0 with 30m range</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Feature Benefit:</span>
                    <p className="text-sm">Stable, instant connection across rooms</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Consumer Benefit:</span>
                    <p className="text-sm">Perfect for presentations, office mobility, multi-device switching</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">→ Emotional/Social Benefit:</span>
                    <p className="text-sm font-medium text-primary">You'll feel confident and tech-savvy, never fumbling with connections</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Each feature climbs through 4 distinct levels of value. Customers make purchase decisions based on the top rungs — the emotional and social outcomes that matter most. By building discrete ladders, we precisely articulate how each feature transforms into meaningful life improvements.</p>
              </div>
            </div>
          </Section>

          {/* 2. Jobs to Be Done (JTBD) */}
          <Section title="2. Jobs to Be Done (JTBD)" icon={Target}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Identifies the progress customers try to make in specific circumstances, revealing the real "job" they hire your product to do.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-4 border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Job #1: Sleeping on Long Flights</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">SITUATION</label>
                    <p className="text-sm">8-hour red-eye flight, cramped middle seat, crying baby two rows back</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">JOB TO BE DONE</label>
                    <p className="text-sm">Create a peaceful audio cocoon that blocks disruptions and lasts the entire journey without needing to charge</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">DESIRED OUTCOME</label>
                    <p className="text-sm">Arrive refreshed and ready for business, not exhausted from noise and interruptions</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Job #2: Staying Motivated During Workouts</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">SITUATION</label>
                    <p className="text-sm">6am gym session, low energy, need to push through a tough cardio session</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">JOB TO BE DONE</label>
                    <p className="text-sm">Deliver powerful, energizing music that stays secure during movement and never cuts out mid-set</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">DESIRED OUTCOME</label>
                    <p className="text-sm">Complete the workout feeling accomplished, energized, and proud of pushing through</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Job #3: Sounding Professional on Client Calls</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">SITUATION</label>
                    <p className="text-sm">High-stakes client presentation from home office, kids playing in next room, dog might bark</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">JOB TO BE DONE</label>
                    <p className="text-sm">Ensure crystal-clear audio quality that makes me sound credible, prepared, and professional despite home chaos</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">DESIRED OUTCOME</label>
                    <p className="text-sm">Win client confidence and respect, be remembered as polished and competent</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Job #4: Deep Focus in Open Office</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">SITUATION</label>
                    <p className="text-sm">Deadline approaching, open-plan office chaos, colleagues chatting and phones ringing constantly</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">JOB TO BE DONE</label>
                    <p className="text-sm">Create an invisible "do not disturb" bubble that signals focus while blocking all distractions for 4+ hours</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">DESIRED OUTCOME</label>
                    <p className="text-sm">Enter flow state, hit the deadline, feel productive and in control of my environment</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-primary/20">
                <h4 className="font-medium text-foreground mb-3">Job #5: Making Commute Time Productive</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">SITUATION</label>
                    <p className="text-sm">90-minute daily commute on crowded trains, want to learn something instead of scrolling mindlessly</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">JOB TO BE DONE</label>
                    <p className="text-sm">Transform dead time into learning opportunity by delivering clear podcast/audiobook audio that never runs out of battery</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground block mb-1">DESIRED OUTCOME</label>
                    <p className="text-sm">Arrive feeling accomplished, educated, and like I'm investing in personal growth daily</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-muted/30">
                <h4 className="font-medium text-foreground mb-3">Unexpected Competitors</h4>
                <ul className="space-y-2">
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Office silence:</strong> Open-plan offices make noise cancellation the real competitor</span>
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Smartphone speakers:</strong> "Good enough" for casual listening, our endurance wins</span>
                  </li>
                  <li className="text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Taking breaks:</strong> Battery anxiety forces breaks; we enable flow state</span>
                  </li>
                </ul>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Products win by solving multiple discrete jobs better than competitors. Each job represents a different buying occasion and usage context. By identifying 4-5 core jobs, we maximize market penetration and resonate with diverse customer needs.</p>
              </div>
            </div>
          </Section>

          {/* 3. Category Entry Points (CEPs) */}
          <Section title="3. Category Entry Points (CEPs)" icon={Brain}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Memory structures and need-states that prompt category purchase consideration. Owning more CEPs = more buying occasions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-[hsl(var(--chart-1))]">
                  <Badge className="bg-[hsl(var(--chart-1))] mb-3">Owned CEP</Badge>
                  <h4 className="font-medium mb-2">Long workday ahead</h4>
                  <p className="text-sm text-muted-foreground">Morning trigger: "I need audio that lasts all day without charging"</p>
                </Card>

                <Card className="p-4 border-[hsl(var(--chart-1))]">
                  <Badge className="bg-[hsl(var(--chart-1))] mb-3">Owned CEP</Badge>
                  <h4 className="font-medium mb-2">Packing for travel</h4>
                  <p className="text-sm text-muted-foreground">Pre-trip trigger: "I need compact, reliable audio for the journey"</p>
                </Card>

                <Card className="p-4 border-[hsl(var(--chart-2))]">
                  <Badge className="bg-[hsl(var(--chart-2))] mb-3">Growth CEP</Badge>
                  <h4 className="font-medium mb-2">Back-to-back meetings</h4>
                  <p className="text-sm text-muted-foreground">Calendar trigger: "I need professional audio all day without interruption"</p>
                </Card>

                <Card className="p-4 border-[hsl(var(--chart-2))]">
                  <Badge className="bg-[hsl(var(--chart-2))] mb-3">Growth CEP</Badge>
                  <h4 className="font-medium mb-2">Gaming marathon</h4>
                  <p className="text-sm text-muted-foreground">Gaming session trigger: "I need comfortable, long-lasting wireless audio"</p>
                </Card>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Brands present at more CEPs have 3x market share. Owning one CEP can mean millions in revenue. Each CEP = automatic consideration.</p>
              </div>
            </div>
          </Section>

          {/* 4. Reasons to Believe (RTBs) */}
          <Section title="4. Reasons to Believe (RTBs)" icon={Award}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Concrete proof points that make marketing claims credible and overcome natural skepticism.
              </p>
            </div>
            <div className="space-y-3">
              <Card className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <Badge variant="outline">Statistics</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">24+ hour battery independently verified</p>
                    <p className="text-sm text-muted-foreground">Lab-tested by TechReview Magazine: 24.3 hours continuous playback at 70% volume</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <Badge variant="outline">Demonstrations</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">15-minute quick charge = 3 hours playback</p>
                    <p className="text-sm text-muted-foreground">Visual demo video showing real-time charging and playback test</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <Badge variant="outline">Endorsements</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">4.2/5 stars from 1,247 verified purchasers</p>
                    <p className="text-sm text-muted-foreground">"Battery life is phenomenal - exactly as advertised" (most common positive sentiment)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <Badge variant="outline">Heritage</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">TechSound: 15 years in professional audio</p>
                    <p className="text-sm text-muted-foreground">Same battery technology used in studio monitoring headphones trusted by professionals</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <Badge variant="outline">Process</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">Advanced lithium polymer cells with intelligent power management</p>
                    <p className="text-sm text-muted-foreground">Smart chip optimizes power consumption based on volume and connectivity</p>
                  </div>
                </div>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Trust is the conversion killer. Strong RTBs increase conversion 34% on average. Without proof, claims are just noise.</p>
              </div>
            </div>
          </Section>

          {/* 5. Purchase Barriers + Solutions */}
          <Section title="5. Purchase Barriers + Solutions" icon={Shield}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Systematic identification and resolution of all friction points preventing purchase.
              </p>
            </div>
            <div className="space-y-3">
              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-destructive block mb-1">BARRIER: Risk</label>
                    <p className="text-sm">"What if battery doesn't last as claimed?"</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary block mb-1">SOLUTION</label>
                    <p className="text-sm">30-day money-back guarantee + independent lab verification</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-destructive block mb-1">BARRIER: Cost</label>
                    <p className="text-sm">"$189 seems expensive for wireless headphones"</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary block mb-1">SOLUTION</label>
                    <p className="text-sm">Price anchor: Compare to $349 competitors with only 20hrs battery. Cost-per-use breakdown: $0.52/day over 1 year</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-destructive block mb-1">BARRIER: Effort</label>
                    <p className="text-sm">"Setting up Bluetooth is always complicated"</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary block mb-1">SOLUTION</label>
                    <p className="text-sm">One-click pairing video + "Works in 30 seconds" promise. Pre-paired option at checkout</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-destructive block mb-1">BARRIER: Knowledge</label>
                    <p className="text-sm">"I don't know if these work with my devices"</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary block mb-1">SOLUTION</label>
                    <p className="text-sm">Compatibility checker tool + "Works with all Bluetooth devices" badge prominently displayed</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-destructive block mb-1">BARRIER: Social</label>
                    <p className="text-sm">"Will I look outdated without ANC?"</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary block mb-1">SOLUTION</label>
                    <p className="text-sm">Reframe: "Noise isolation without the ANC hiss" + testimonials from professionals who prefer it</p>
                  </div>
                </div>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Each barrier removed increases conversion 10-20%. Reducing friction is often easier than increasing desire. Amazon's 1-click patent was worth billions.</p>
              </div>
            </div>
          </Section>

          {/* 6. Distinctive Memory Structures */}
          <Section title="6. Distinctive Memory Structures" icon={Brain}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Unique mental and physical availability patterns that make brands instantly recallable and findable.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-3">Mental Availability</h4>
                  <ul className="space-y-2">
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>"24 Hours"</strong> - Distinctive number owns the long-battery space</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Folding motion</strong> - Visual memory cue for portability</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Blue accent color</strong> - Distinctive against black competitors</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Physical Availability</h4>
                  <ul className="space-y-2">
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Available on Amazon, Best Buy, direct site (3 major channels)</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Always in stock (98% availability rate)</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>2-day shipping standard (no friction)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="p-4 bg-muted/30">
                <h4 className="font-medium mb-3">Distinctive Assets</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge>Visual</Badge>
                    <span className="text-sm">Signature blue power indicator that pulses during charging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>Verbal</Badge>
                    <span className="text-sm">"All Day. Every Day." tagline consistently used</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge>Packaging</Badge>
                    <span className="text-sm">Transparent case showing folded headphones instantly communicates portability</span>
                  </div>
                </div>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Mental availability drives 50% of brand growth. Distinctive assets make advertising 30% more effective. Physical availability caps growth potential.</p>
              </div>
            </div>
          </Section>

          {/* 7. Behavioural Economics Arsenal */}
          <Section title="7. Behavioural Economics Arsenal" icon={Zap}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Psychological triggers that bypass rational evaluation and drive automatic behavior.
              </p>
            </div>
            <div className="space-y-3">
              <Card className="p-4 border-[hsl(var(--chart-1))]">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">Anchoring</h4>
                  <Badge className="bg-[hsl(var(--chart-1))]">Applied</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Tactic:</strong> Display Sony WH-1000XM4 ($349) side-by-side comparison first
                </p>
                <p className="text-sm">
                  <strong>Result:</strong> $189 feels like a bargain. Conversion increases 23% when competitor price shown first.
                </p>
              </Card>

              <Card className="p-4 border-[hsl(var(--chart-2))]">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">Loss Aversion</h4>
                  <Badge className="bg-[hsl(var(--chart-2))]">Applied</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Tactic:</strong> "Only 8 left at this price" + "Price increases to $199 in 3 days"
                </p>
                <p className="text-sm">
                  <strong>Result:</strong> Fear of missing out drives 31% faster purchase decisions.
                </p>
              </Card>

              <Card className="p-4 border-[hsl(var(--chart-3))]">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">Social Proof</h4>
                  <Badge className="bg-[hsl(var(--chart-3))]">Applied</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Tactic:</strong> "127 people bought this in the last 24 hours" + real-time purchase notifications
                </p>
                <p className="text-sm">
                  <strong>Result:</strong> Trust increases 45%, cart abandonment drops 18%.
                </p>
              </Card>

              <Card className="p-4 border-[hsl(var(--chart-4))]">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">Reciprocity</h4>
                  <Badge className="bg-[hsl(var(--chart-4))]">Applied</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Tactic:</strong> Free extended warranty (value $29) with purchase + free premium carrying case
                </p>
                <p className="text-sm">
                  <strong>Result:</strong> Perceived obligation to buy increases 27%. Free gifts increase conversion 2-3x.
                </p>
              </Card>

              <Card className="p-4 border-primary/20">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">Decoy Effect</h4>
                  <Badge>Applied</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Tactic:</strong> Show three options: Basic ($149, 18hrs), Standard ($189, 24hrs), Premium ($239, 24hrs + ANC)
                </p>
                <p className="text-sm">
                  <strong>Result:</strong> Standard becomes the "sweet spot." 64% choose the middle option (vs 41% without decoy).
                </p>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">BE techniques increase conversion 20-300%. They work regardless of product quality. They're invisible to consumers but devastatingly effective.</p>
              </div>
            </div>
          </Section>

          {/* 8. Competitive Moats */}
          <Section title="8. Competitive Moats" icon={Lock}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Sustainable competitive advantages that protect against competition and commoditization.
              </p>
            </div>
            <div className="space-y-3">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Brand Moat</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">Category ownership: "Long battery wireless headphones"</p>
                    <p className="text-sm text-muted-foreground">First-to-mind advantage. 67% of "24 hour headphone" searches land on our listings. Brand recall 3x higher than competitors.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Switching Cost</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">Ecosystem integration with TechSound app</p>
                    <p className="text-sm text-muted-foreground">Custom EQ profiles, saved device pairings, warranty tracking. Once invested, 73% stay within brand ecosystem for next purchase.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Cost Advantage</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">Direct-to-consumer + high-volume battery contracts</p>
                    <p className="text-sm text-muted-foreground">Cut out middleman markup (30% savings) + bulk battery procurement at $8/unit vs $15 industry average. Can afford 40% margin while undercutting competitors.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Network Effects</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">Growing user community creates content</p>
                    <p className="text-sm text-muted-foreground">User-generated reviews, unboxing videos, troubleshooting forums. Each new customer adds value by contributing content. 12K+ reviews create trust barrier for new entrants.</p>
                  </div>
                </div>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Without moats, you're in a race to the bottom. Strong moats enable 10x valuations and 50%+ margins. Warren Buffett only invests in moat businesses.</p>
              </div>
            </div>
          </Section>

          {/* 9. Conversion Mechanics */}
          <Section title="9. Conversion Mechanics" icon={Target}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Systematic optimization of every element that turns interest into purchase.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Risk Reversal Stack (in order)</h4>
                <div className="space-y-2">
                  <Card className="p-3 bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary">1</Badge>
                      <span className="text-sm"><strong>Money-back guarantee:</strong> 30 days, no questions asked (removes financial risk)</span>
                    </div>
                  </Card>
                  <Card className="p-3 bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary">2</Badge>
                      <span className="text-sm"><strong>Free trial period:</strong> "Try for a week, return if not satisfied" (removes performance risk)</span>
                    </div>
                  </Card>
                  <Card className="p-3 bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary">3</Badge>
                      <span className="text-sm"><strong>Social proof:</strong> 1,247 reviews, 4.2 stars (removes social risk)</span>
                    </div>
                  </Card>
                  <Card className="p-3 bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary">4</Badge>
                      <span className="text-sm"><strong>Authority endorsement:</strong> "Featured in TechReview" (removes credibility risk)</span>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <h4 className="font-medium mb-3">Value Equation Optimization</h4>
                <div className="text-sm space-y-2">
                  <p className="font-mono text-xs text-muted-foreground">Value = (Dream Outcome × Perceived Likelihood) ÷ (Time Delay × Effort Required)</p>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <Badge variant="outline" className="mb-1">↑ Dream Outcome</Badge>
                      <p className="text-sm">24 hours of uninterrupted freedom</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">↑ Likelihood</Badge>
                      <p className="text-sm">Lab-verified, 1,247 reviews confirm</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">↓ Time Delay</Badge>
                      <p className="text-sm">2-day shipping, instant gratification</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1">↓ Effort</Badge>
                      <p className="text-sm">One-click pairing, pre-configured options</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h4 className="font-medium mb-3">Commitment Ladder (Micro-conversions)</h4>
                <div className="relative pl-6 space-y-3">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-sm"><strong>Step 1:</strong> Click product → See hero image with "24 Hours" messaging</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-sm"><strong>Step 2:</strong> Scroll to see benefit ladder and reviews</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-sm"><strong>Step 3:</strong> Watch 45-second demo video</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-sm"><strong>Step 4:</strong> Add to cart (commitment escalates)</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-sm"><strong>Step 5:</strong> Enter email (identity investment)</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary" />
                    <p className="text-sm"><strong>Step 6:</strong> Complete purchase (final micro-yes)</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Small optimizations compound: 10% improvement at 5 steps = 61% total improvement. Every friction point costs 15-25% conversion.</p>
              </div>
            </div>
          </Section>

          {/* 10. Context Triggers */}
          <Section title="10. Context Triggers" icon={Clock}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Environmental, temporal, and social cues that prompt behavior and purchase.
              </p>
            </div>
            <div className="space-y-3">
              <Card className="p-4 border-[hsl(var(--chart-1))]">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[hsl(var(--chart-1))]">Usage Occasion</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">"Monday morning commute"</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trigger:</strong> Calendar shows full day of meetings<br/>
                      <strong>Thought:</strong> "I need audio that lasts all day"<br/>
                      <strong>Action:</strong> Targeted ads on Sunday evening: "Ready for Monday?"
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-[hsl(var(--chart-2))]">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[hsl(var(--chart-2))]">Identity Trigger</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">"Professionals who value productivity"</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trigger:</strong> Seeing colleague with premium headphones<br/>
                      <strong>Thought:</strong> "People like me use quality audio tools"<br/>
                      <strong>Action:</strong> LinkedIn ads targeting job titles, co-working space partnerships
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-[hsl(var(--chart-3))]">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[hsl(var(--chart-3))]">Temporal Landmark</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">"New Year, New Setup"</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trigger:</strong> January 1st fresh start mentality<br/>
                      <strong>Thought:</strong> "Time to upgrade my work-from-home setup"<br/>
                      <strong>Action:</strong> January campaign: "Start the year with unstoppable audio"
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-[hsl(var(--chart-4))]">
                <div className="flex items-start gap-3">
                  <Badge className="bg-[hsl(var(--chart-4))]">Environmental Cue</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">"Airport departure lounge"</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Trigger:</strong> Long flight ahead, forgot headphones<br/>
                      <strong>Thought:</strong> "I need something that'll last the whole flight"<br/>
                      <strong>Action:</strong> Geo-targeted ads near airports, Amazon same-day delivery partnerships
                    </p>
                  </div>
                </div>
              </Card>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mt-4">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Context determines 45% of behavior. Owning a context means automatic selection. Coca-Cola owns "meals," we can own "long workdays."</p>
              </div>
            </div>
          </Section>

          {/* 11. The Persuasion Stack */}
          <Section title="11. The Persuasion Stack" icon={MessageSquare}>
            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Eugene Schwartz's framework for matching message sophistication to market awareness. Wrong message to wrong awareness = zero response.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Customer Awareness Levels</h4>
                <div className="space-y-2">
                  <Card className="p-4 bg-muted/30">
                    <div className="mb-2">
                      <Badge variant="outline">Unaware</Badge>
                      <span className="text-sm font-medium ml-2">Don't know they have battery life problem</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1"><strong>Message:</strong> "Why do your headphones always die mid-day?"</p>
                    <p className="text-sm"><strong>Channel:</strong> Social media content educating on battery anxiety</p>
                  </Card>

                  <Card className="p-4 bg-muted/30">
                    <div className="mb-2">
                      <Badge variant="outline">Problem Aware</Badge>
                      <span className="text-sm font-medium ml-2">Know battery dies, not solution</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1"><strong>Message:</strong> "24-hour battery means never worrying about charging"</p>
                    <p className="text-sm"><strong>Channel:</strong> Search ads on "long battery headphones"</p>
                  </Card>

                  <Card className="p-4 bg-muted/30">
                    <div className="mb-2">
                      <Badge variant="outline">Solution Aware</Badge>
                      <span className="text-sm font-medium ml-2">Know long-battery exists, not our brand</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1"><strong>Message:</strong> "24hrs + quick charge + $189 = best value long-battery option"</p>
                    <p className="text-sm"><strong>Channel:</strong> Comparison content, retargeting ads</p>
                  </Card>

                  <Card className="p-4 bg-muted/30">
                    <div className="mb-2">
                      <Badge variant="outline">Product Aware</Badge>
                      <span className="text-sm font-medium ml-2">Know us, not convinced</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1"><strong>Message:</strong> Show proof - reviews, lab tests, testimonials, guarantee</p>
                    <p className="text-sm"><strong>Channel:</strong> Product page, email nurture sequence</p>
                  </Card>

                  <Card className="p-4 bg-muted/30">
                    <div className="mb-2">
                      <Badge variant="outline">Most Aware</Badge>
                      <span className="text-sm font-medium ml-2">Ready to buy, needs deal</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1"><strong>Message:</strong> "Limited time: $40 off + free case. Don't miss out."</p>
                    <p className="text-sm"><strong>Channel:</strong> Cart abandonment email, retargeting with offer</p>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Market Sophistication Stage</h4>
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="mb-2">
                    <Badge className="bg-primary">Stage 3: Mechanism</Badge>
                  </div>
                  <p className="text-sm mb-3">
                    We're in a mature market. Competitors already claim "long battery." We need to introduce our unique mechanism.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-background rounded">
                      <p className="text-sm"><strong>Their claim:</strong> "20-hour battery"</p>
                      <p className="text-sm text-muted-foreground">Generic, expected</p>
                    </div>
                    <div className="p-3 bg-background rounded">
                      <p className="text-sm"><strong>Our mechanism:</strong> "Intelligent power management adapts to your usage patterns"</p>
                      <p className="text-sm text-muted-foreground">Unique, explainable, believable</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <label className="text-xs font-medium text-muted-foreground block mb-1">WHY IT'S VITAL</label>
                <p className="text-sm">Wrong message to wrong awareness level = zero response. Right message = 10x conversion. This framework has generated $1B+ for Agora Publishing.</p>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer Actions */}
        <div className="border-t bg-background px-0 py-6 mt-8">
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={() => navigate('/enhancement-review')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Briefs
            </Button>
            <Button onClick={() => navigate('/generation')} size="lg" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Generate Content for This Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicBriefDetail;
