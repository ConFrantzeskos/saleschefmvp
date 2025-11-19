import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2 } from 'lucide-react';
import { enhancementTasks } from '@/constants/enhancementTasks';
import ProgressIndicator from '@/components/ProgressIndicator';

const Enhancement = () => {
  const navigate = useNavigate();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  
  // Get selected ladders from sessionStorage
  const selectedLadders = JSON.parse(sessionStorage.getItem('selectedLadders') || '[]');

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

  useEffect(() => {
    if (currentTaskIndex >= enhancementTasks.length) {
      setTimeout(() => navigate('/enhancement-review'), 500);
      return;
    }

    const currentTask = enhancementTasks[currentTaskIndex];
    const duration = currentTask.duration * 1000;

    const timer = setTimeout(() => {
      setCompletedTasks(prev => [...prev, currentTask.id]);
      setCurrentTaskIndex(prev => prev + 1);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentTaskIndex, navigate]);

  useEffect(() => {
    const progressValue = ((currentTaskIndex + 1) / enhancementTasks.length) * 100;
    setProgress(Math.min(progressValue, 100));
  }, [currentTaskIndex]);

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-section-title font-display font-bold mb-2">
            Strategic Enhancement in Progress
          </h1>
          <p className="text-body-large text-muted-foreground">
            Applying {selectedLadders.length > 0 ? selectedLadders.length : 'strategic'} persuasion framework{selectedLadders.length !== 1 ? 's' : ''}
          </p>
          {selectedLadders.length > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {selectedLadders.join(', ')}
            </p>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Processing strategic frameworks...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-4">
          {enhancementTasks.map((task, index) => {
            const isCompleted = completedTasks.includes(task.id);
            const isCurrent = currentTaskIndex === index;
            const isPending = index > currentTaskIndex;
            const TaskIcon = task.icon;

            return (
              <Card
                key={task.id}
                className={`p-6 transition-all duration-300 ${
                  isCurrent ? 'border-[hsl(var(--chart-2))] bg-[hsl(var(--chart-2))]/5 shadow-md scale-105' : ''
                } ${isCompleted ? 'border-primary/30 bg-primary/5' : ''} ${
                  isPending ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    isCompleted ? 'bg-primary text-primary-foreground' :
                    isCurrent ? 'bg-[hsl(var(--chart-2))] text-white' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <TaskIcon className={`w-6 h-6 ${isCurrent ? 'animate-pulse' : ''}`} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-semibold text-foreground">
                        {task.title}
                      </h3>
                      {isCompleted && (
                        <span className="text-xs font-medium text-primary">Completed</span>
                      )}
                      {isCurrent && (
                        <span className="text-xs font-medium text-[hsl(var(--chart-2))]">Processing...</span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {task.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {task.details.map((detail, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>

                    {isCurrent && (
                      <p className="text-xs text-[hsl(var(--chart-2))] font-medium mt-2">
                        {task.statusMessage}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Enhancement;
