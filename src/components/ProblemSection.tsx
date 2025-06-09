
import React from 'react';
import { AlertTriangle, TrendingDown, Clock, Users, Target, DollarSign, FileX } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    { 
      text: 'Bland, generic PDPs copied from suppliers (and identical to your competitors)', 
      icon: FileX,
      color: 'text-red-500'
    },
    { 
      text: 'SEO & SEM spend wasted propping up poor content', 
      icon: DollarSign,
      color: 'text-orange-500'
    },
    { 
      text: 'Slow, manual SKU launches', 
      icon: Clock,
      color: 'text-red-600'
    },
    { 
      text: 'No time for FAQs, training, campaign content, localisation', 
      icon: Target,
      color: 'text-amber-600'
    },
    { 
      text: 'Conversion and margin under pressure', 
      icon: TrendingDown,
      color: 'text-red-700'
    },
    { 
      text: 'Teams stretched thin — constant catch-up', 
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-to-b from-background to-red-50/30 dark:to-red-950/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-950/30 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3 text-balance animate-fade-in">
            Most retail content underperforms. <br />
            <span className="text-red-600 dark:text-red-400">Conversion rates can't increase without a content revolution.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-card border border-red-200/50 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-800 hover:bg-red-50/50 dark:hover:bg-red-950/20 transition-all duration-300 group shadow-sm hover:shadow-md" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-950/50 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <problem.icon className={`w-4 h-4 ${problem.color}`} />
                </div>
              </div>
              <div className="flex-1">
                <span className="text-foreground font-medium leading-snug text-sm group-hover:text-red-800 dark:group-hover:text-red-200 transition-colors">
                  {problem.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
