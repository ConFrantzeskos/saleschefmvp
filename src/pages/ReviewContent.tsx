
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

  // Generate 50+ sample products with comprehensive data
  const generateSampleAssets = () => {
    const categories = [
      "Electronics > Audio > Headphones",
      "Electronics > Wearables > Fitness Trackers", 
      "Electronics > Mobile Accessories > Power Banks",
      "Electronics > Computing > Laptops",
      "Electronics > Gaming > Consoles",
      "Home & Garden > Kitchen > Appliances",
      "Clothing > Men's > T-Shirts",
      "Sports > Fitness > Equipment",
      "Beauty > Skincare > Moisturizers",
      "Books > Fiction > Mystery"
    ];
    
    const brands = ["TechSound", "FitLife", "PowerMax", "UltraGear", "HomeEssentials", "StyleCore", "FitnessPro", "BeautyLux", "BookWorld", "InnovateTech"];
    const statuses = ["Enhanced", "Needs Review", "Enhanced", "Enhanced", "Needs Review"];
    
    return Array.from({ length: 52 }, (_, i) => ({
      id: i + 1,
      sku: `PRD-${String(i + 1).padStart(3, '0')}`,
      name: `Product ${i + 1} - ${brands[i % brands.length]} Item`,
      category: categories[i % categories.length],
      brand: brands[i % brands.length],
      status: statuses[i % statuses.length],
      quality: Math.floor(Math.random() * 30) + 70, // 70-99
      price: `$${(Math.random() * 200 + 20).toFixed(2)}`,
      description: `High-quality ${brands[i % brands.length]} product with advanced features and premium build quality`,
      features: `Feature A, Feature B, Feature C, Advanced Technology ${i + 1}`,
      targetAudience: `Target group ${(i % 5) + 1}, professionals, enthusiasts`,
      keyBenefits: `Key benefit ${(i % 3) + 1}, improved performance, enhanced user experience`,
      competitiveAdvantage: `Unique selling point ${(i % 4) + 1}, superior quality vs competitors`,
      seoKeywords: `keyword${i + 1}, ${brands[i % brands.length].toLowerCase()}, product category`,
      metaTitle: `${brands[i % brands.length]} Product ${i + 1} - Premium Quality`,
      metaDescription: `Discover the ${brands[i % brands.length]} Product ${i + 1} with advanced features and premium quality. Perfect for your needs.`,
      productBullets: `• Premium quality construction\n• Advanced features\n• User-friendly design\n• Reliable performance`,
      technicalSpecs: `Spec 1: Value A\nSpec 2: Value B\nSpec 3: Value C\nDimensions: ${Math.floor(Math.random() * 50) + 10}cm`,
      useCases: `Use case 1, Use case 2, Professional applications, Home use`,
      warranty: `${Math.floor(Math.random() * 3) + 1} year warranty`,
      certifications: "CE, FCC, RoHS"
    }));
  };

  const sampleAssets = generateSampleAssets();

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
            <h1 className="text-3xl font-semibold mb-2">Review Enhanced Content</h1>
            <p className="text-lg text-muted-foreground">
              Review and approve enhanced content for all your assets
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
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px]">SKU</TableHead>
                  <TableHead className="min-w-[200px]">Product Name</TableHead>
                  <TableHead className="min-w-[150px]">Category</TableHead>
                  <TableHead className="min-w-[100px]">Brand</TableHead>
                  <TableHead className="min-w-[80px]">Price</TableHead>
                  <TableHead className="min-w-[200px]">Description</TableHead>
                  <TableHead className="min-w-[150px]">Features</TableHead>
                  <TableHead className="min-w-[150px]">Target Audience</TableHead>
                  <TableHead className="min-w-[150px]">Key Benefits</TableHead>
                  <TableHead className="min-w-[150px]">Competitive Advantage</TableHead>
                  <TableHead className="min-w-[150px]">SEO Keywords</TableHead>
                  <TableHead className="min-w-[200px]">Meta Title</TableHead>
                  <TableHead className="min-w-[200px]">Meta Description</TableHead>
                  <TableHead className="min-w-[150px]">Product Bullets</TableHead>
                  <TableHead className="min-w-[150px]">Technical Specs</TableHead>
                  <TableHead className="min-w-[150px]">Use Cases</TableHead>
                  <TableHead className="min-w-[100px]">Warranty</TableHead>
                  <TableHead className="min-w-[100px]">Certifications</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[100px]">Quality</TableHead>
                  <TableHead className="min-w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleAssets.map((asset) => (
                  <TableRow key={asset.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-mono">{asset.sku}</TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">{asset.name}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.category}</TableCell>
                    <TableCell>{asset.brand}</TableCell>
                    <TableCell className="font-medium">{asset.price}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{asset.description}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.features}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.targetAudience}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.keyBenefits}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.competitiveAdvantage}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.seoKeywords}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{asset.metaTitle}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{asset.metaDescription}</TableCell>
                    <TableCell className="max-w-[150px] truncate whitespace-pre-line">{asset.productBullets}</TableCell>
                    <TableCell className="max-w-[150px] truncate whitespace-pre-line">{asset.technicalSpecs}</TableCell>
                    <TableCell className="max-w-[150px] truncate">{asset.useCases}</TableCell>
                    <TableCell>{asset.warranty}</TableCell>
                    <TableCell>{asset.certifications}</TableCell>
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
    </div>
  );
};

export default ReviewContent;
