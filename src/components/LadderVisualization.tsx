import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, CheckCircle } from 'lucide-react';
import { 
  FunctionalEmotionalLadder, 
  OgilvyRTBLadder, 
  JTBDOutcomeLadder,
  FAAILadder,
  ExperienceLadder,
  AssetTrustLadder
} from '@/types/ladderTypes';

import { EnhancedAsset } from '@/types/enhancedAsset';

interface LadderVisualizationProps {
  ladderId: string;
  asset: EnhancedAsset;
  isPrimary?: boolean;
}

const LadderVisualization = ({ ladderId, asset, isPrimary = false }: LadderVisualizationProps) => {
  // Get the appropriate ladder data based on ladderId
  const getLadderData = () => {
    switch(ladderId) {
      case 'functional-emotional':
        return { type: 'functional-emotional' as const, data: asset.functionalEmotionalLadder };
      case 'ogilvy-rtb':
        return { type: 'ogilvy-rtb' as const, data: asset.ogilvyRTBLadder };
      case 'jtbd-outcome':
        return { type: 'jtbd-outcome' as const, data: asset.jtbdOutcomeLadder };
      case 'faai':
        return { type: 'faai' as const, data: asset.faaiLadder };
      case 'experience-ladder':
        return { type: 'experience' as const, data: asset.experienceLadder };
      case 'asset-trust-ladder':
        return { type: 'asset-trust' as const, data: asset.assetTrustLadder };
      default:
        return null;
    }
  };

  const ladderInfo = getLadderData();
  if (!ladderInfo || !ladderInfo.data) return null;

  const { type, data } = ladderInfo;
  const renderFunctionalEmotional = (ladder: FunctionalEmotionalLadder) => (
    <div className="space-y-4">
      <LadderStep 
        level="Feature" 
        content={ladder.feature} 
        icon="🔧"
      />
      <LadderArrow />
      <LadderStep 
        level="Functional Benefit" 
        content={ladder.functionalBenefit}
        icon="⚙️"
      />
      <LadderArrow />
      <LadderStep 
        level="Emotional Benefit" 
        content={ladder.emotionalBenefit}
        icon="❤️"
      />
      <LadderArrow />
      <LadderStep 
        level="Life Outcome" 
        content={ladder.lifeOutcome}
        icon="🌟"
        highlight
      />
      <ProofBox proof={ladder.proof} example={ladder.realWorldExample} />
    </div>
  );

  const renderOgilvyRTB = (ladder: OgilvyRTBLadder) => (
    <div className="space-y-4">
      <LadderStep 
        level="Reason to Believe (Proof)" 
        content={ladder.reasonToBelieve}
        icon="✅"
      />
      <LadderArrow />
      <LadderStep 
        level="Promise" 
        content={ladder.promise}
        icon="🤝"
      />
      <LadderArrow />
      <LadderStep 
        level="Payoff" 
        content={ladder.payoff}
        icon="🎁"
        highlight
      />
      <ProofBox proof={ladder.credibilitySource} example={ladder.realWorldExample} />
    </div>
  );

  const renderJTBD = (ladder: JTBDOutcomeLadder) => (
    <div className="space-y-4">
      <LadderStep 
        level="Job to Be Done" 
        content={ladder.jobToBeDone}
        icon="🎯"
      />
      <LadderArrow />
      <LadderStep 
        level="Desired Outcome" 
        content={ladder.desiredOutcome}
        icon="📈"
      />
      <LadderArrow />
      <LadderStep 
        level="Constraint Removed" 
        content={ladder.constraintRemoved}
        icon="🔓"
      />
      <LadderArrow />
      <LadderStep 
        level="Progress Made" 
        content={ladder.progressMade}
        icon="🚀"
        highlight
      />
      <ProofBox proof={ladder.strugglingMoment} example={ladder.realWorldExample} />
    </div>
  );

  const renderFAAI = (ladder: FAAILadder) => (
    <div className="space-y-4">
      <LadderStep 
        level="Feature" 
        content={ladder.feature}
        icon="🔧"
      />
      <LadderArrow />
      <LadderStep 
        level="Advantage" 
        content={ladder.advantage}
        icon="⚡"
      />
      <LadderArrow />
      <LadderStep 
        level="Application" 
        content={ladder.application}
        icon="💼"
      />
      <LadderArrow />
      <LadderStep 
        level="Business Impact" 
        content={ladder.businessImpact}
        icon="📊"
        highlight
      />
      <ProofBox proof={ladder.proof} example={ladder.realWorldExample} />
    </div>
  );

  const renderExperience = (ladder: ExperienceLadder) => (
    <div className="space-y-4">
      <LadderStep 
        level="Product" 
        content={ladder.product}
        icon="📦"
      />
      <LadderArrow />
      <LadderStep 
        level="Function" 
        content={ladder.function}
        icon="⚙️"
      />
      <LadderArrow />
      <LadderStep 
        level="Experience" 
        content={ladder.experience}
        icon="✨"
      />
      <LadderArrow />
      <LadderStep 
        level="Lasting Memory" 
        content={ladder.memory}
        icon="💭"
        highlight
      />
      <ProofBox proof={ladder.emotionalResonance} example={ladder.realWorldExample} />
    </div>
  );

  const renderAssetTrust = (ladder: AssetTrustLadder) => (
    <div className="space-y-4">
      <LadderStep 
        level="Accuracy" 
        content={ladder.accuracy}
        icon="🎯"
      />
      <LadderArrow />
      <LadderStep 
        level="Reliability" 
        content={ladder.reliability}
        icon="🔒"
      />
      <LadderArrow />
      <LadderStep 
        level="Predictability" 
        content={ladder.predictability}
        icon="📊"
      />
      <LadderArrow />
      <LadderStep 
        level="Confidence" 
        content={ladder.confidence}
        icon="💪"
      />
      <LadderArrow />
      <LadderStep 
        level="Action" 
        content={ladder.action}
        icon="🚀"
        highlight
      />
      <ProofBox proof={ladder.trustMetrics} example={ladder.realWorldExample} />
    </div>
  );

  return (
    <Card className={`p-6 ${isPrimary ? 'border-2 border-primary' : 'border-muted'}`}>
      {type === 'functional-emotional' && renderFunctionalEmotional(data as FunctionalEmotionalLadder)}
      {type === 'ogilvy-rtb' && renderOgilvyRTB(data as OgilvyRTBLadder)}
      {type === 'jtbd-outcome' && renderJTBD(data as JTBDOutcomeLadder)}
      {type === 'faai' && renderFAAI(data as FAAILadder)}
      {type === 'experience' && renderExperience(data as ExperienceLadder)}
      {type === 'asset-trust' && renderAssetTrust(data as AssetTrustLadder)}
    </Card>
  );
};

const LadderStep = ({ 
  level, 
  content, 
  icon, 
  highlight = false 
}: { 
  level: string; 
  content: string; 
  icon: string;
  highlight?: boolean;
}) => (
  <div className={`p-4 rounded-lg border-2 ${
    highlight 
      ? 'border-primary bg-primary/5' 
      : 'border-muted bg-card'
  }`}>
    <div className="flex items-start gap-3">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <div className="text-xs font-medium text-muted-foreground mb-1">{level}</div>
        <p className="text-sm text-foreground leading-relaxed">{content}</p>
      </div>
      {highlight && <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />}
    </div>
  </div>
);

const LadderArrow = () => (
  <div className="flex justify-center">
    <ArrowUp className="w-5 h-5 text-primary rotate-180" />
  </div>
);

const ProofBox = ({ proof, example }: { proof: string; example: string }) => (
  <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-muted">
    <div className="text-xs font-medium text-muted-foreground mb-2">💡 PROOF & REAL-WORLD EXAMPLE</div>
    <p className="text-xs text-foreground mb-2"><strong>Proof:</strong> {proof}</p>
    <p className="text-xs text-muted-foreground"><strong>Like:</strong> {example}</p>
  </div>
);

export default LadderVisualization;
