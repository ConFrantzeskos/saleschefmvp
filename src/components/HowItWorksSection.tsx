
import React from 'react';
import { Upload, Settings, Rocket, ArrowRight, Sparkles, Database, Globe, Search, Users } from 'lucide-react';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const enhancementSources = [
    { icon: Database, label: 'Industry DBs', color: 'text-blue-500' },
    { icon: Globe, label: 'Web Research', color: 'text-green-500' },
    { icon: Search, label: 'SEO Intelligence', color: 'text-purple-500' },
    { icon: Users, label: 'Competitor Analysis', color: 'text-orange-500' }
  ];

  const outputChannels = [
    { emoji: '🛒', text: 'Product Detail Pages' },
    { emoji: '⭐', text: 'SEO & Structured Data' },
    { emoji: '🖼️', text: 'Social Media Content' },
    { emoji: '✍️', text: 'Sales Copy & Bullets' },
    { emoji: '📧', text: 'Email Campaigns' },
    { emoji: '🎓', text: 'Training Materials' }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4 text-balance">
            How SalesChef works — One messy SKU in → Sales-ready content out.
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SalesChef is not another system to manage. It's a team of specialised AI agents — like chefs — each trained to transform raw product specs into a content banquet that sells.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="relative animate-slide-up">
          {/* Flow Container */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2 items-center">
            
            {/* Step 1: Messy Input */}
            <div className="lg:col-span-1 text-center">
              <div className="bg-card rounded-2xl p-4 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
                <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-3 font-display font-bold text-lg shadow-soft group-hover:scale-105 transition-transform">
                  1
                </div>
                <Upload className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  Upload your data
                </h3>
                <p className="text-xs text-muted-foreground mb-3">CSV, Excel, PDF, ERP, PIM, CMS, etc.</p>
                
                {/* Example messy data */}
                <div className="bg-destructive/5 rounded-lg p-2 text-left">
                  <div className="text-xs text-destructive font-mono leading-tight">
                    Product: Widget thing<br/>
                    Desc: good product<br/>
                    Price: £50<br/>
                    Color: red/blue
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:flex justify-center items-center">
              <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
            </div>

            {/* Step 2: AI Enhancement */}
            <div className="lg:col-span-1 text-center">
              <div className="bg-card rounded-2xl p-4 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group relative overflow-hidden">
                {/* Magic sparkles background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-accent text-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-display font-bold text-lg shadow-soft group-hover:scale-105 transition-transform">
                    2
                  </div>
                  <Settings className="w-6 h-6 text-primary mx-auto mb-3 animate-spin group-hover:animate-spin" />
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    AI agents enhance
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">Clean, enrich & transform</p>
                  
                  {/* Enhancement sources */}
                  <div className="grid grid-cols-2 gap-1">
                    {enhancementSources.map((source, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs p-1 rounded bg-background/50">
                        <source.icon className={`w-3 h-3 ${source.color}`} />
                        <span className="text-muted-foreground truncate">{source.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating sparkles */}
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-accent animate-pulse" />
                <Sparkles className="absolute bottom-2 left-2 w-3 h-3 text-primary animate-pulse delay-300" />
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:flex justify-center items-center">
              <ArrowRight className="w-6 h-6 text-primary animate-pulse delay-150" />
            </div>

            {/* Step 3: Output Channels */}
            <div className="lg:col-span-2 text-center">
              <div className="bg-card rounded-2xl p-4 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
                <div className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-display font-bold text-lg shadow-soft group-hover:scale-105 transition-transform">
                  3
                </div>
                <Rocket className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  Sales-ready content for every channel
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Ready to publish across all platforms</p>
                
                {/* Output grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {outputChannels.map((output, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-accent/10 text-left group-hover:bg-accent/20 transition-colors">
                      <span className="text-sm">{output.emoji}</span>
                      <span className="text-xs text-foreground font-medium leading-tight">{output.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Example Output */}
          <div className="mt-8 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/20">
            <div className="text-center mb-4">
              <h4 className="text-lg font-display font-bold text-foreground mb-2">
                ✨ The Magic Result
              </h4>
              <p className="text-sm text-muted-foreground">
                That messy "Widget thing" becomes professional, SEO-optimized content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-4 border border-border">
                <h5 className="font-semibold text-sm text-accent mb-2">Professional Product Title</h5>
                <p className="text-sm text-foreground font-medium mb-2">
                  Premium Multi-Color Performance Widget - Professional Grade Red & Blue Variants
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• SEO-optimized with target keywords</p>
                  <p>• Feature-benefit focused copy</p>
                  <p>• Brand voice consistency</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <h5 className="font-semibold text-sm text-accent mb-2">Rich Product Description</h5>
                <p className="text-xs text-foreground leading-relaxed mb-2">
                  "Experience superior performance with our premium widget collection. Available in striking red and blue colorways, each unit delivers exceptional value through innovative design and reliable functionality. Perfect for professionals seeking quality and style."
                </p>
                <div className="text-xs text-muted-foreground">
                  + Structured data, meta tags, social snippets ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
