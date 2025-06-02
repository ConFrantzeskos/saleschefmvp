
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, ArrowRight } from 'lucide-react';

const ReviewContent = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: true, current: false },
    { id: 'review', label: 'Review', completed: false, current: true },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const sampleAssets = [
    {
      id: 1,
      sku: "PRD-001",
      name: "Wireless Bluetooth Headphones",
      category: "Electronics > Audio > Headphones",
      brand: "TechSound",
      status: "Enhanced",
      quality: 95,
      price: "$79.99",
      description: "Premium wireless headphones with advanced noise cancellation",
      features: "Bluetooth 5.0, 30hr battery, noise cancellation",
      targetAudience: "Professionals, commuters, students",
      keyBenefits: "All-day comfort, crystal clear audio, seamless connectivity",
      competitiveAdvantage: "Superior battery life vs competitors",
      seoKeywords: "wireless headphones, bluetooth, noise cancelling",
      metaTitle: "TechSound Wireless Bluetooth Headphones - 30Hr Battery Life",
      metaDescription: "Experience premium audio with TechSound wireless headphones. 30-hour battery, noise cancellation, and crystal-clear sound quality."
    },
    {
      id: 2,
      sku: "PRD-002", 
      name: "Smart Fitness Tracker",
      category: "Electronics > Wearables > Fitness Trackers",
      brand: "FitLife",
      status: "Enhanced",
      quality: 92,
      price: "$149.99",
      description: "Advanced fitness tracker with comprehensive health monitoring",
      features: "Heart rate monitor, GPS, sleep tracking, water resistant",
      targetAudience: "Fitness enthusiasts, health-conscious individuals",
      keyBenefits: "Complete health insights, motivation to stay active",
      competitiveAdvantage: "Most accurate heart rate monitoring in class",
      seoKeywords: "fitness tracker, heart rate monitor, GPS watch",
      metaTitle: "FitLife Smart Fitness Tracker - Advanced Health Monitoring",
      metaDescription: "Track your fitness journey with FitLife's advanced fitness tracker. Heart rate monitoring, GPS, and comprehensive health insights."
    },
    {
      id: 3,
      sku: "PRD-003",
      name: "Portable Phone Charger",
      category: "Electronics > Mobile Accessories > Power Banks",
      brand: "PowerMax",
      status: "Needs Review",
      quality: 78,
      price: "$39.99",
      description: "High-capacity portable charger for all devices",
      features: "10,000mAh capacity, dual USB ports, fast charging",
      targetAudience: "Business travelers, students, outdoor enthusiasts",
      keyBenefits: "Never run out of power, charge multiple devices",
      competitiveAdvantage: "Fastest charging speed in compact size",
      seoKeywords: "portable charger, power bank, mobile battery",
      metaTitle: "PowerMax Portable Phone Charger - 10,000mAh Fast Charging",
      metaDescription: "Stay powered up with PowerMax portable charger. 10,000mAh capacity, dual USB ports, and fast charging technology."
    }
  ];

  const handleViewAsset = (assetId: number) => {
    navigate(`/review/${assetId}`);
  };

  const handleApproveAll = () => {
    navigate('/deploy');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Review Generated Content</h1>
            <p className="text-lg text-muted-foreground">
              Review and approve enriched content for all your assets
            </p>
          </div>
          <Button onClick={handleApproveAll} className="px-8">
            Approve All & Deploy
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">All Assets ({sampleAssets.length})</h2>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Target Audience</TableHead>
                <TableHead>Key Benefits</TableHead>
                <TableHead>SEO Keywords</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quality</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleAssets.map((asset) => (
                <TableRow key={asset.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-mono">{asset.sku}</TableCell>
                  <TableCell className="font-medium max-w-[200px] truncate">{asset.name}</TableCell>
                  <TableCell className="max-w-[150px] truncate">{asset.category}</TableCell>
                  <TableCell>{asset.brand}</TableCell>
                  <TableCell className="max-w-[150px] truncate">{asset.targetAudience}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{asset.keyBenefits}</TableCell>
                  <TableCell className="max-w-[150px] truncate">{asset.seoKeywords}</TableCell>
                  <TableCell>
                    <Badge variant={asset.status === 'Enhanced' ? 'default' : 'secondary'}>
                      {asset.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${asset.quality}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{asset.quality}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewAsset(asset.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
