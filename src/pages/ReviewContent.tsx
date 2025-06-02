
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, ArrowRight } from 'lucide-react';

const ReviewContent = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: true, current: false },
    { id: 'review', label: 'Review', completed: false, current: true },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const sampleProducts = [
    {
      id: 1,
      sku: "PRD-001",
      name: "Wireless Bluetooth Headphones",
      status: "Enhanced",
      quality: 95,
      original: "Basic wireless headphones with Bluetooth connectivity",
      enhanced: "Premium Wireless Bluetooth Headphones - Immerse yourself in crystal-clear audio with our state-of-the-art wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium comfort padding for all-day listening."
    },
    {
      id: 2,
      sku: "PRD-002", 
      name: "Smart Fitness Tracker",
      status: "Enhanced",
      quality: 92,
      original: "Fitness tracker with heart rate monitor",
      enhanced: "Advanced Smart Fitness Tracker - Take control of your health journey with comprehensive fitness tracking, heart rate monitoring, sleep analysis, and smartphone integration. Water-resistant design perfect for any workout."
    },
    {
      id: 3,
      sku: "PRD-003",
      name: "Portable Phone Charger",
      status: "Needs Review",
      quality: 78,
      original: "Portable battery pack for phones",
      enhanced: "High-Capacity Portable Phone Charger - Never run out of power with this compact 10,000mAh power bank. Fast-charging technology and dual USB ports ensure your devices stay powered throughout the day."
    }
  ];

  const handleApproveAll = () => {
    navigate('/deploy');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Review & Compare Content</h1>
            <p className="text-lg text-muted-foreground">
              Compare original vs enhanced content across your products
            </p>
          </div>
          <Button onClick={handleApproveAll} className="px-8">
            Approve All & Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="list">Fields List</TabsTrigger>
            <TabsTrigger value="preview">PDP Preview</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Compare</TabsTrigger>
          </TabsList>

          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>Enhanced Product Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>SKU</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Quality Score</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-mono">{product.sku}</TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>
                          <Badge variant={product.status === 'Enhanced' ? 'default' : 'secondary'}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${product.quality}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium">{product.quality}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Original PDP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Product Image</span>
                  </div>
                  <h3 className="font-medium">Wireless Bluetooth Headphones</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic wireless headphones with Bluetooth connectivity
                  </p>
                  <div className="text-2xl font-bold">$79.99</div>
                  <Button variant="outline" className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enhanced PDP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Product Image</span>
                  </div>
                  <h3 className="font-medium">Premium Wireless Bluetooth Headphones</h3>
                  <p className="text-sm">
                    Immerse yourself in crystal-clear audio with our state-of-the-art wireless headphones. 
                    Featuring advanced noise cancellation, 30-hour battery life, and premium comfort padding 
                    for all-day listening.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold">$79.99</div>
                    <Badge>Premium Quality</Badge>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bulk">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Comparison View</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Field</TableHead>
                      <TableHead>Original</TableHead>
                      <TableHead>Enhanced</TableHead>
                      <TableHead>Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell className="max-w-xs truncate">{product.original}</TableCell>
                        <TableCell className="max-w-xs truncate">{product.enhanced}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-green-600">
                            +{product.quality}% Quality
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReviewContent;
