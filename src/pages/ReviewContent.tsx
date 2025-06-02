
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, ArrowRight, Star } from 'lucide-react';

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

        <Tabs defaultValue="preview" className="space-y-6">
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
              {/* Original PDP */}
              <Card>
                <CardHeader>
                  <CardTitle>Original PDP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">Basic Product Image</span>
                  </div>
                  <h3 className="font-medium text-lg">CD1234 Wireless Headphone</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Bluetooth 5.0 connectivity</li>
                      <li>Up to 20 hours of battery life</li>
                      <li>Built-in microphone for calls</li>
                      <li>Foldable design for easy storage</li>
                    </ul>
                  </div>
                  <div className="text-2xl font-bold mt-4">$79.99</div>
                  <Button variant="outline" className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>

              {/* Enhanced PDP */}
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced PDP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 max-h-[800px] overflow-y-auto">
                  {/* H1 Meta Title */}
                  <h1 className="text-2xl font-bold">CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic</h1>
                  
                  {/* Hero Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">High-quality lifestyle shot (person in motion, urban/travel context)</span>
                  </div>

                  {/* Intro Paragraph */}
                  <p className="text-base leading-relaxed">
                    Stay connected, wire-free. The CD1234 Wireless Headphones combine 24-hour battery life, advanced Bluetooth 5.0 connectivity, and a foldable design for life on the go — whether commuting, working from home, or travelling the world.
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2">
                    <h3 className="font-semibold">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>24 hours of wireless battery life — all-day listening</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Seamless Bluetooth 5.0 connection — no dropouts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Built-in microphone for crystal-clear calls</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Foldable design — easy to pack and carry</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Lightweight and comfortable for all-day wear</span>
                      </li>
                    </ul>
                  </div>

                  {/* Lifestyle Section */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Designed for your life on the move</h2>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-muted rounded flex items-center justify-center text-xs text-center p-2">
                        Backpack shot
                      </div>
                      <div className="aspect-square bg-muted rounded flex items-center justify-center text-xs text-center p-2">
                        Coffee shop
                      </div>
                      <div className="aspect-square bg-muted rounded flex items-center justify-center text-xs text-center p-2">
                        Office
                      </div>
                      <div className="aspect-square bg-muted rounded flex items-center justify-center text-xs text-center p-2">
                        Airport
                      </div>
                    </div>
                  </div>

                  {/* Performance Section */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Uninterrupted sound, anywhere</h2>
                    <ul className="space-y-2 text-sm">
                      <li>• Bluetooth range and stability explanation</li>
                      <li>• Battery life graph / iconography</li>
                      <li>• Quick charge details (if supported)</li>
                    </ul>
                  </div>

                  {/* Calls & Work Section */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Perfect for Zoom calls, meetings & more</h2>
                    <ul className="space-y-2 text-sm">
                      <li>• Mic placement + call quality highlights</li>
                      <li>• Compatible devices (PC/Mac/phones)</li>
                    </ul>
                  </div>

                  {/* Portability Section */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Fold-and-go convenience</h2>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-muted rounded flex items-center justify-center text-xs text-center p-2">
                        Folded demo
                      </div>
                      <div className="aspect-video bg-muted rounded flex items-center justify-center text-xs text-center p-2">
                        Unfolded demo
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Dimensions folded / unfolded</p>
                  </div>

                  {/* Customer Reviews */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Customer Reviews</h2>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm">"Perfect for remote work!"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm">"Best value for battery life"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm">"Folds small for my carry-on"</span>
                      </div>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">FAQs</h2>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Q: How long does the battery last on the CD1234 Wireless Headphones?</p>
                        <p className="text-muted-foreground">A: Up to 24 hours on a full charge — perfect for all-day listening.</p>
                      </div>
                      <div>
                        <p className="font-medium">Q: Are the CD1234 headphones good for Zoom calls?</p>
                        <p className="text-muted-foreground">A: Yes — they feature a built-in microphone optimised for clear voice on video calls.</p>
                      </div>
                      <div>
                        <p className="font-medium">Q: Can I use these headphones while commuting?</p>
                        <p className="text-muted-foreground">A: Absolutely. The foldable design and long battery make them ideal for travel and commuting.</p>
                      </div>
                      <div>
                        <p className="font-medium">Q: Do the CD1234 headphones have noise cancelling?</p>
                        <p className="text-muted-foreground">A: While they offer passive noise isolation, they do not include active noise cancelling.</p>
                      </div>
                    </div>
                  </div>

                  {/* SEO Footer */}
                  <div className="border-t pt-4 space-y-2">
                    <h3 className="font-medium text-sm">Related Categories</h3>
                    <p className="text-xs text-muted-foreground">
                      Bluetooth headphones, wireless headphones, headphones with mic, Best headphones for travel AU, Best headphones for Zoom, Best long battery headphones
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
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
