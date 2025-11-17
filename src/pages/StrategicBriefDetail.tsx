import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Triangle, 
  ShoppingBag, 
  Award, 
  Target,
  BookOpen,
  Shield,
  Zap,
  Brain,
  FileText
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
        <Card className="p-8 mb-6 border-[hsl(var(--chart-2))]">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-subsection-title font-display font-bold">{asset.name}</h1>
                <Badge className="bg-primary">{asset.confidenceScore}% Confidence</Badge>
              </div>
              <p className="text-sm text-muted-foreground">SKU: {asset.sku} • {asset.category} • {asset.brand}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Core Value Proposition</label>
              <p className="text-foreground">{asset.coreValueProposition}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Primary Target Persona</label>
              <p className="text-foreground">{asset.primaryPersona}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Key Differentiator</label>
              <p className="text-foreground">{asset.keyDifferentiator}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-1">Content Approach</label>
              <p className="text-foreground">{asset.contentApproach}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {/* Benefit Ladder */}
          <Section title="Benefit Ladder" icon={TrendingUp} defaultOpen={true}>
            <div className="space-y-4">
              {asset.benefitLadder.levels.map((level, index) => (
                <div key={index} className="relative pl-6 pb-4 border-l-2 border-primary/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Feature:</span>
                      <p className="text-sm font-medium">{level.feature}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">→ Functional Benefit:</span>
                      <p className="text-sm">{level.functionalBenefit}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">→ Emotional Benefit:</span>
                      <p className="text-sm">{level.emotionalBenefit}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">→ Value:</span>
                      <p className="text-sm font-medium text-primary">{level.value}</p>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-xs font-medium text-muted-foreground">Proof:</span>
                      <p className="text-sm italic">{level.proof}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Target Personas */}
          <Section title="Target Persona Profiles" icon={Users}>
            <div className="grid gap-4">
              {asset.personas.map((persona, index) => (
                <Card key={index} className="p-6 border-[hsl(var(--chart-3))]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-display font-semibold text-lg mb-1">{persona.name}</h4>
                      <p className="text-sm text-muted-foreground">{persona.description}</p>
                    </div>
                    <Badge variant="secondary">{persona.matchScore}% Match</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Demographics</label>
                      <p className="text-sm">{persona.demographics}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Psychographics</label>
                      <p className="text-sm">{persona.psychographics}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-2">Buying Motivations</label>
                      <ul className="space-y-1">
                        {persona.buyingMotivations.map((motivation, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{motivation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-2">Pain Points</label>
                      <ul className="space-y-1">
                        {persona.painPoints.map((pain, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-2">Decision Criteria</label>
                      <div className="flex flex-wrap gap-2">
                        {persona.decisionCriteria.map((criterion, i) => (
                          <Badge key={i} variant="outline">{criterion}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Messaging Preferences</label>
                      <p className="text-sm italic">{persona.messagingPreferences}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Message Hierarchy */}
          <Section title="Message Hierarchy" icon={Triangle}>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary">
                <label className="text-xs font-medium text-muted-foreground block mb-2">PRIMARY MESSAGE</label>
                <p className="text-lg font-display font-semibold text-foreground">{asset.messageHierarchy.primaryMessage}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-3">Supporting Messages</label>
                <div className="space-y-2">
                  {asset.messageHierarchy.supportingMessages.map((message, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Badge variant="outline">Priority {message.priority}</Badge>
                      <span className="flex-1 text-sm">{message.content}</span>
                      <span className="text-xs text-muted-foreground">Score: {message.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-3">Proof Points</label>
                <ul className="space-y-2">
                  {asset.messageHierarchy.proofPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Reasons to Buy */}
          <Section title="Reasons to Buy (RTB) Framework" icon={ShoppingBag}>
            <div className="grid gap-3">
              {asset.reasonsToBuy.map((rtb, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <Badge className={
                      rtb.category === 'rational' ? 'bg-[hsl(var(--chart-1))]' :
                      rtb.category === 'emotional' ? 'bg-[hsl(var(--chart-2))]' :
                      rtb.category === 'social' ? 'bg-[hsl(var(--chart-3))]' :
                      'bg-[hsl(var(--chart-4))]'
                    }>
                      {rtb.category}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-2">{rtb.reason}</p>
                      <p className="text-sm text-muted-foreground mb-2">{rtb.supportingEvidence}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-1.5 max-w-[200px]">
                          <div
                            className="bg-primary h-1.5 rounded-full"
                            style={{ width: `${rtb.confidenceScore}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{rtb.confidenceScore}% confidence</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Social Proof */}
          <Section title="Social Proof & Credibility Arsenal" icon={Award}>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Awards & Recognition</h4>
                <div className="flex flex-wrap gap-2">
                  {asset.socialProof.awards.map((award, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{award}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Expert Endorsements</h4>
                <div className="space-y-2">
                  {asset.socialProof.expertEndorsements.map((endorsement, i) => (
                    <p key={i} className="text-sm italic border-l-2 border-primary pl-3">{endorsement}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Customer Testimonials</h4>
                <div className="grid gap-3">
                  {asset.socialProof.customerTestimonials.map((testimonial, i) => (
                    <Card key={i} className="p-4 bg-muted/30">
                      <p className="text-sm">{testimonial}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Statistical Proof</h4>
                <ul className="space-y-2">
                  {asset.socialProof.statisticalProof.map((stat, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Competitive Positioning */}
          <Section title="Competitive Positioning Strategy" icon={Target}>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <label className="text-xs font-medium text-muted-foreground block mb-2">POSITIONING STATEMENT</label>
                <p className="text-foreground">{asset.positioning.positioningStatement}</p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Competitive Advantages</h4>
                <div className="space-y-2">
                  {asset.positioning.competitiveAdvantages.map((adv, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <Badge variant="outline" className="shrink-0">{adv.competitor}</Badge>
                      <span className="text-sm">{adv.advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">Differentiation Strategy</label>
                  <p className="text-sm">{asset.positioning.differentiationStrategy}</p>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground block mb-1">Market Position</label>
                  <p className="text-sm">{asset.positioning.marketPosition}</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Storytelling Framework */}
          <Section title="Storytelling Architecture" icon={BookOpen}>
            <div className="space-y-4">
              {[
                { label: 'Hero (Customer)', value: asset.storytelling.hero },
                { label: 'Problem', value: asset.storytelling.problem },
                { label: 'Solution (Product)', value: asset.storytelling.solution },
                { label: 'Transformation', value: asset.storytelling.transformation },
                { label: 'Call to Action', value: asset.storytelling.callToAction },
                { label: 'Emotional Arc', value: asset.storytelling.emotionalArc }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg">
                  <label className="text-xs font-medium text-muted-foreground block mb-1">{item.label.toUpperCase()}</label>
                  <p className="text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Objection Handling */}
          <Section title="Objection Handling Playbook" icon={Shield}>
            <div className="space-y-3">
              {asset.objections.map((obj, i) => (
                <Card key={i} className="p-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-destructive block mb-1">OBJECTION</label>
                      <p className="text-sm font-medium">{obj.objection}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-primary block mb-1">COUNTER-ARGUMENT</label>
                      <p className="text-sm">{obj.counterArgument}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">SUPPORTING EVIDENCE</label>
                      <p className="text-sm">{obj.supportingEvidence}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">TONE RECOMMENDATION</label>
                      <p className="text-sm italic">{obj.toneRecommendation}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Conversion Heuristics */}
          <Section title="Conversion Heuristics & Optimization" icon={Zap}>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-3">High-Impact Elements</h4>
                <ul className="space-y-2">
                  {asset.conversionHeuristics.highImpactElements.map((element, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Zap className="w-4 h-4 text-[hsl(var(--chart-2))] mt-0.5 shrink-0" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Message Variants (A/B Testing)</h4>
                <div className="space-y-2">
                  {asset.conversionHeuristics.messageVariants.map((variant, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">{variant.variant}</span>
                      <Badge className="bg-[hsl(var(--chart-2))]">{variant.predictedLift}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg">
                <label className="text-xs font-medium text-muted-foreground block mb-1">ESTIMATED CONVERSION LIFT</label>
                <p className="text-2xl font-display font-bold text-primary">{asset.conversionHeuristics.estimatedLift}</p>
              </div>
            </div>
          </Section>

          {/* Behavioral Psychology */}
          <Section title="Behavioral Psychology Triggers" icon={Brain}>
            <div className="space-y-3">
              {asset.psychologyTriggers.map((trigger, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className="bg-[hsl(var(--chart-4))]">{trigger.principle}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Application</label>
                      <p className="text-sm">{trigger.application}</p>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1">Implementation</label>
                      <p className="text-sm font-medium">{trigger.implementation}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Content Generation Brief */}
          <Section title="Content Generation Brief" icon={FileText} defaultOpen={true}>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <label className="text-xs font-medium text-muted-foreground block mb-1">TONE OF VOICE</label>
                <p className="text-sm font-medium">{asset.contentBrief.toneOfVoice}</p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Key Messages</h4>
                <ul className="space-y-2">
                  {asset.contentBrief.keyMessages.map((message, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{message}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">PERSONA TARGETING</label>
                <p className="text-sm">{asset.contentBrief.personaTargeting}</p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Required Elements</h4>
                <div className="flex flex-wrap gap-2">
                  {asset.contentBrief.requiredElements.map((element, i) => (
                    <Badge key={i} variant="secondary">{element}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1">CONTENT STRUCTURE</label>
                <p className="text-sm">{asset.contentBrief.contentStructure}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-primary mb-3">Do's</h4>
                  <ul className="space-y-2">
                    {asset.contentBrief.dos.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-destructive mb-3">Don'ts</h4>
                  <ul className="space-y-2">
                    {asset.contentBrief.donts.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-destructive font-bold mt-0.5">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="lg" onClick={() => navigate('/generation')} className="gap-2">
            <Sparkles className="w-5 h-5" />
            Generate Content Using This Brief
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrategicBriefDetail;
