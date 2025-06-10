import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="content-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/cbb0b231-93e4-4484-aebc-1a0fb69348c6.png" 
                alt="SalesChef Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform messy product specs into persuasive, high-converting content for every channel with AI-powered automation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-display font-semibold text-foreground">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How SalesChef Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-sm font-display font-semibold text-foreground">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/retail" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  🛍️ Retail
                </Link>
              </li>
              <li>
                <Link to="/travel-tourism" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ✈️ Travel & Tourism
                </Link>
              </li>
              <li>
                <Link to="/media-entertainment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  🎬 Media & Entertainment
                </Link>
              </li>
              <li>
                <Link to="/finance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  💰 Finance
                </Link>
              </li>
              <li>
                <Link to="/industrial-manufacturing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  🏭 Industrial & Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/healthcare-medical" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  🏥 Healthcare & Medical
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  🏠 Real Estate
                </Link>
              </li>
              <li>
                <Link to="/automotive" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  🚗 Automotive
                </Link>
              </li>
              <li>
                <Link to="/investor-communications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  📊 Investor Communications
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-display font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 SalesChef. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
