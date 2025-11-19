import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProgressIndicator from "@/components/ProgressIndicator";
import { QuickDeployTemplates } from "@/components/deploy/QuickDeployTemplates";
import { JourneyStageCard } from "@/components/deploy/JourneyStageCard";
import { StageDetailView } from "@/components/deploy/StageDetailView";
import { DeploymentSummary } from "@/components/deploy/DeploymentSummary";
import { ViewToggle } from "@/components/deploy/ViewToggle";
import { IntegrationsListView } from "@/components/deploy/IntegrationsListView";
import { 
  JourneyStage, 
  deploymentChannels, 
  getChannelsByStage 
} from "@/constants/deploymentChannels";
import SectionHeader from "@/components/layout/SectionHeader";

const Deploy = () => {
  const navigate = useNavigate();
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['shopify']);
  const [currentStage, setCurrentStage] = useState<JourneyStage | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [viewMode, setViewMode] = useState<'journey' | 'integrations'>('journey');

  const steps = [
    { id: 'upload', label: 'Data Source', completed: true, current: false },
    { id: 'clean', label: 'Clean', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: true, current: false },
    { id: 'review', label: 'Review', completed: true, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: true },
    { id: 'optimize', label: 'Optimize', completed: false, current: false },
  ];

  const journeyStages: Array<{
    stage: JourneyStage;
    title: string;
    subtitle: string;
    icon: string;
  }> = [
    {
      stage: 'discover',
      title: 'Discover',
      subtitle: 'Getting in front of customers',
      icon: '🎯',
    },
    {
      stage: 'research',
      title: 'Research',
      subtitle: 'Helping customers compare',
      icon: '🔍',
    },
    {
      stage: 'shop',
      title: 'Shop',
      subtitle: 'Where transactions happen',
      icon: '🛒',
    },
    {
      stage: 'nurture',
      title: 'Nurture',
      subtitle: 'Keep them coming back',
      icon: '📧',
    },
    {
      stage: 'operations',
      title: 'Operations',
      subtitle: 'Empower your team',
      icon: '🏢',
    },
    {
      stage: 'export',
      title: 'Export',
      subtitle: 'Take data anywhere',
      icon: '📦',
    },
  ];

  const handleToggleChannel = (channelId: string) => {
    setSelectedChannels(prev =>
      prev.includes(channelId)
        ? prev.filter(id => id !== channelId)
        : [...prev, channelId]
    );
  };

  const handleSelectTemplate = (channelIds: string[]) => {
    setSelectedChannels(prev => {
      const newSet = new Set([...prev, ...channelIds]);
      return Array.from(newSet);
    });
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      navigate("/optimization");
    }, 3000);
  };

  if (isDeploying) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <ProgressIndicator steps={steps} />
          
          <div className="mt-8 max-w-2xl mx-auto text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-primary/20 animate-pulse" />
              </div>
              <div className="relative text-6xl animate-bounce">
                🚀
              </div>
            </div>
            
            <div>
              <h2 className="text-section-title font-display font-bold mb-4">
                Deploying Your Content
              </h2>
              <p className="text-body-large text-muted-foreground">
                Publishing to {selectedChannels.length} channels...
              </p>
            </div>

            <div className="space-y-3 text-left max-w-md mx-auto">
              {deploymentChannels
                .filter(ch => selectedChannels.includes(ch.id))
                .slice(0, 5)
                .map((channel, i) => (
                  <div
                    key={channel.id}
                    className="flex items-center gap-3 p-3 bg-card rounded-lg animate-in fade-in-50"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    {channel.logoUrl ? (
                      <img 
                        src={channel.logoUrl} 
                        alt={`${channel.name} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{channel.logo}</span>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{channel.name}</p>
                      <p className="text-xs text-muted-foreground">Publishing...</p>
                    </div>
                    <span className="text-green-500">✓</span>
                  </div>
                ))}
              {selectedChannels.length > 5 && (
                <p className="text-center text-sm text-muted-foreground">
                  + {selectedChannels.length - 5} more channels
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // All Integrations View
  if (viewMode === 'integrations') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <ProgressIndicator steps={steps} />
          
          <div className="mt-8 space-y-8">
            {/* View Toggle */}
            <div>
              <ViewToggle value={viewMode} onChange={setViewMode} />
            </div>

            {/* Integrations List */}
            <IntegrationsListView
              channels={deploymentChannels}
              selectedChannels={selectedChannels}
              onToggle={handleToggleChannel}
              onConfigure={(id) => console.log('Configure:', id)}
            />

            {/* Deployment Summary */}
            <DeploymentSummary
              selectedChannelIds={selectedChannels}
              onRemove={handleToggleChannel}
              onDeploy={handleDeploy}
            />
          </div>
        </div>
      </div>
    );
  }

  // Stage detail view
  if (currentStage) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto">
          <ProgressIndicator steps={steps} />
          
          <div className="mt-8 space-y-8">
            <StageDetailView
              stage={currentStage}
              onBack={() => setCurrentStage(null)}
              selectedChannels={selectedChannels}
              onToggleChannel={handleToggleChannel}
            />
            
            <DeploymentSummary
              selectedChannelIds={selectedChannels}
              onRemove={handleToggleChannel}
              onDeploy={handleDeploy}
            />
          </div>
        </div>
      </div>
    );
  }

  // Main deploy view (Journey View)
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <ProgressIndicator steps={steps} />
        
        <div className="mt-8 space-y-8">
          {/* View Toggle */}
          <div>
            <ViewToggle value={viewMode} onChange={setViewMode} />
          </div>

          <SectionHeader
            title="Deploy Your Content"
            subtitle="Choose where to publish your optimized product content across the customer journey"
            size="lg"
          />

          <QuickDeployTemplates onSelectTemplate={handleSelectTemplate} />

          <div>
            <h3 className="text-subsection-title font-display font-bold mb-6">
              Deploy by Customer Journey Stage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeyStages.map(({ stage, title, subtitle, icon }) => {
                const stageChannels = getChannelsByStage(stage);
                const selectedCount = stageChannels.filter(ch =>
                  selectedChannels.includes(ch.id)
                ).length;
                
                return (
                  <JourneyStageCard
                    key={stage}
                    icon={icon}
                    title={title}
                    subtitle={subtitle}
                    channelCount={stageChannels.length}
                    topChannels={stageChannels.slice(0, 5)}
                    selectedCount={selectedCount}
                    onClick={() => setCurrentStage(stage)}
                  />
                );
              })}
            </div>
          </div>

          <DeploymentSummary
            selectedChannelIds={selectedChannels}
            onRemove={handleToggleChannel}
            onDeploy={handleDeploy}
          />

          <div className="flex gap-4 justify-between">
            <Button
              variant="outline"
              onClick={() => navigate("/review-content")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Review
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => navigate("/transformation-showcase")}
              >
                View Transformation
              </Button>
              <Button
                onClick={handleDeploy}
                disabled={selectedChannels.length === 0}
                className="gap-2"
              >
                Deploy to {selectedChannels.length} Channels
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
