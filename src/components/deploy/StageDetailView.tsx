import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search } from "lucide-react";
import { ChannelCard } from "./ChannelCard";
import { 
  JourneyStage, 
  deploymentChannels, 
  ChannelCategory,
  getCategoryDisplayName 
} from "@/constants/deploymentChannels";
import SectionHeader from "@/components/layout/SectionHeader";

interface StageDetailViewProps {
  stage: JourneyStage;
  onBack: () => void;
  selectedChannels: string[];
  onToggleChannel: (channelId: string) => void;
}

const stageConfig: Record<JourneyStage, {
  title: string;
  subtitle: string;
  icon: string;
  categories: ChannelCategory[];
}> = {
  discover: {
    title: "Discover (Awareness)",
    subtitle: "Getting in front of customers before they're ready to buy",
    icon: "🎯",
    categories: ['display', 'search', 'retail-media', 'social-ads'],
  },
  research: {
    title: "Research (Consideration)",
    subtitle: "Helping customers make informed decisions",
    icon: "🔍",
    categories: ['product-info', 'retail-media', 'reviews', 'affiliate'],
  },
  shop: {
    title: "Shop (Purchase)",
    subtitle: "Where transactions happen",
    icon: "🛒",
    categories: ['ecommerce', 'marketplace', 'social-commerce', 'b2b'],
  },
  nurture: {
    title: "Nurture (Engagement)",
    subtitle: "Keep customers coming back",
    icon: "📧",
    categories: ['email-sms', 'loyalty', 'support', 'chatbot'],
  },
  operations: {
    title: "Operations (Internal)",
    subtitle: "Empower your team with the right tools",
    icon: "🏢",
    categories: ['pim-dam', 'erp', 'analytics', 'training'],
  },
  export: {
    title: "Export (Flexibility)",
    subtitle: "Take your data anywhere",
    icon: "📦",
    categories: ['data-export', 'content-package', 'print', 'api'],
  },
};

export const StageDetailView = ({
  stage,
  onBack,
  selectedChannels,
  onToggleChannel,
}: StageDetailViewProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const config = stageConfig[stage];
  
  const stageChannels = deploymentChannels.filter(
    ch => ch.journeyStage === stage
  );

  const filteredChannels = searchQuery
    ? stageChannels.filter(ch =>
        ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : stageChannels;

  const channelsByCategory = config.categories.map(category => ({
    category,
    channels: filteredChannels.filter(ch => ch.category === category),
  })).filter(group => group.channels.length > 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journey Stages
        </Button>
      </div>

      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{config.icon}</span>
            <h1 className="text-section-title font-display font-bold">
              {config.title}
            </h1>
          </div>
          <p className="text-body-large text-muted-foreground">
            {config.subtitle}
          </p>
        </div>
        
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {channelsByCategory.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No channels found matching your search.
        </div>
      ) : channelsByCategory.length === 1 ? (
        <div>
          <SectionHeader
            title={getCategoryDisplayName(channelsByCategory[0].category)}
            subtitle={`${channelsByCategory[0].channels.length} channels available`}
            size="sm"
            centered={false}
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channelsByCategory[0].channels.map(channel => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                selected={selectedChannels.includes(channel.id)}
                onToggle={onToggleChannel}
              />
            ))}
          </div>
        </div>
      ) : (
        <Tabs defaultValue={channelsByCategory[0].category}>
          <TabsList className="mb-6">
            {channelsByCategory.map(group => (
              <TabsTrigger key={group.category} value={group.category}>
                {getCategoryDisplayName(group.category)}
                {' '}
                ({group.channels.length})
              </TabsTrigger>
            ))}
          </TabsList>
          
          {channelsByCategory.map(group => (
            <TabsContent key={group.category} value={group.category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.channels.map(channel => (
                  <ChannelCard
                    key={channel.id}
                    channel={channel}
                    selected={selectedChannels.includes(channel.id)}
                    onToggle={onToggleChannel}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
};
