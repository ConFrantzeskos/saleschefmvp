
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ResultsSection from '@/components/ResultsSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LiveTracker from '@/components/LiveTracker';

const Index = () => {
  const [email, setEmail] = useState('');
  const [tryItEmail, setTryItEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("Welcome to SalesChef! Let's transform your product data.");
    
    // Redirect directly to upload page
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  const handleTryItSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    
    // Redirect directly to upload page
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <LiveTracker />
      <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <ProblemSection />
      
      {/* How SalesChef Works CTA */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
        <div className="content-width text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 sm:mb-8">Meet SalesChef: AI Agents That Transform Content at Scale</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">
            SalesChef is powered by a team of specialised AI agents - like chefs - each trained to transform 
            raw product specs into a feast of sales-ready content.
          </p>
          <Link to="/how-it-works">
            <Button size="lg" className="btn-primary h-12 sm:h-14 px-8 sm:px-10 text-sm sm:text-base font-semibold">
              See How SalesChef Works <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <HowItWorksSection 
        tryItEmail={tryItEmail} 
        setTryItEmail={setTryItEmail} 
        handleTryItSubmit={handleTryItSubmit} 
      />
      <ResultsSection />
      <TrustSection />
      <CTASection 
        tryItEmail={tryItEmail} 
        setTryItEmail={setTryItEmail} 
        handleSubmitWithRedirect={handleTryItSubmit} 
      />
      <Footer />
    </div>
  );
};

export default Index;
