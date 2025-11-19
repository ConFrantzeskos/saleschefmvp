import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProgressIndicator from '@/components/ProgressIndicator';
import LadderSelectionCard from '@/components/LadderSelectionCard';
import SelectionSummaryPanel from '@/components/SelectionSummaryPanel';
import { ladderFrameworks } from '@/constants/ladderFrameworks';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const EnhancementSelection = () => {
  const navigate = useNavigate();
  const [selectedLadders, setSelectedLadders] = useState<string[]>([
    'functional-emotional', 
    'ogilvy-rtb', 
    'jtbd-outcome'
  ]);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: false, current: true },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const handleToggleLadder = (ladderId: string) => {
    setSelectedLadders(prev => 
      prev.includes(ladderId) 
        ? prev.filter(id => id !== ladderId)
        : [...prev, ladderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedLadders.length === ladderFrameworks.length) {
      setSelectedLadders([]);
    } else {
      setSelectedLadders(ladderFrameworks.map(l => l.id));
    }
  };

  const handleRemoveSelection = (id: string) => {
    setSelectedLadders(prev => prev.filter(ladderId => ladderId !== id));
  };

  const handleApplyLadders = () => {
    // Store selected ladders in sessionStorage for the Enhancement page
    sessionStorage.setItem('selectedLadders', JSON.stringify(selectedLadders));
    navigate('/enhancement');
  };

  const getSelectedItemsForSummary = () => {
    return selectedLadders.map(ladderId => {
      const ladder = ladderFrameworks.find(l => l.id === ladderId);
      if (!ladder) return null;
      return {
        id: ladder.id,
        name: ladder.name,
        icon: <ladder.icon className="w-4 h-4" />
      };
    }).filter(Boolean) as Array<{ id: string; name: string; icon: React.ReactNode }>;
  };

  const categoryGroups = {
    functional: ladderFrameworks.filter(l => l.category === 'functional'),
    emotional: ladderFrameworks.filter(l => l.category === 'emotional'),
    trust: ladderFrameworks.filter(l => l.category === 'trust'),
    value: ladderFrameworks.filter(l => l.category === 'value'),
    experience: ladderFrameworks.filter(l => l.category === 'experience'),
  };

  return (
    <div className="min-h-screen bg-background p-6 pb-32">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-section-title font-display font-bold mb-2">
            Select Persuasion Ladders
          </h1>
          <p className="text-body-large text-muted-foreground mb-4">
            Choose which frameworks to apply for strategic enhancement
          </p>
          <div className="flex justify-center gap-3">
            <Badge variant={selectedLadders.length > 0 ? "default" : "outline"} className="text-lg px-4 py-2">
              {selectedLadders.length} {selectedLadders.length === 1 ? 'ladder' : 'ladders'} selected
            </Badge>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleSelectAll}
              className="gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {selectedLadders.length === ladderFrameworks.length ? 'Deselect All' : 'Select All'}
            </Button>
          </div>
        </div>

        {/* Functional Ladders */}
        <section className="mb-8">
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            🔧 Functional Ladders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryGroups.functional.map(ladder => (
              <LadderSelectionCard
                key={ladder.id}
                ladder={ladder}
                isSelected={selectedLadders.includes(ladder.id)}
                onToggle={() => handleToggleLadder(ladder.id)}
              />
            ))}
          </div>
        </section>

        {/* Emotional Ladders */}
        <section className="mb-8">
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            ❤️ Emotional Ladders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryGroups.emotional.map(ladder => (
              <LadderSelectionCard
                key={ladder.id}
                ladder={ladder}
                isSelected={selectedLadders.includes(ladder.id)}
                onToggle={() => handleToggleLadder(ladder.id)}
              />
            ))}
          </div>
        </section>

        {/* Trust Ladders */}
        <section className="mb-8">
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            🔒 Trust Ladders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryGroups.trust.map(ladder => (
              <LadderSelectionCard
                key={ladder.id}
                ladder={ladder}
                isSelected={selectedLadders.includes(ladder.id)}
                onToggle={() => handleToggleLadder(ladder.id)}
              />
            ))}
          </div>
        </section>

        {/* Value Ladders */}
        <section className="mb-8">
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            💎 Value Ladders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryGroups.value.map(ladder => (
              <LadderSelectionCard
                key={ladder.id}
                ladder={ladder}
                isSelected={selectedLadders.includes(ladder.id)}
                onToggle={() => handleToggleLadder(ladder.id)}
              />
            ))}
          </div>
        </section>

        {/* Experience Ladders */}
        <section className="mb-8">
          <h2 className="text-xl font-display font-semibold mb-4 text-foreground">
            ✨ Experience Ladders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryGroups.experience.map(ladder => (
              <LadderSelectionCard
                key={ladder.id}
                ladder={ladder}
                isSelected={selectedLadders.includes(ladder.id)}
                onToggle={() => handleToggleLadder(ladder.id)}
              />
            ))}
          </div>
        </section>

        {selectedLadders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">
              👆 Select persuasion ladders above to begin strategic enhancement
            </p>
          </div>
        )}
      </div>

      {selectedLadders.length > 0 && (
        <SelectionSummaryPanel
          icon={<Sparkles className="h-5 w-5" />}
          title="Ready to Enhance"
          selectedItems={getSelectedItemsForSummary()}
          onRemove={handleRemoveSelection}
          onProceed={handleApplyLadders}
          proceedButtonText="Apply Selected Ladders"
          additionalInfo={`${selectedLadders.length} persuasion ${selectedLadders.length === 1 ? 'ladder' : 'ladders'} selected`}
        />
      )}
    </div>
  );
};

export default EnhancementSelection;
