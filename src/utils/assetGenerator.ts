
import { Asset } from '@/types/asset';

export const generateSampleAssets = (): Asset[] => {
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
  const statuses: Array<'Enhanced' | 'Needs Review'> = ["Enhanced", "Needs Review", "Enhanced", "Enhanced", "Needs Review"];
  
  const assets = Array.from({ length: 52 }, (_, i) => ({
    id: i + 1,
    sku: `CD${String(i + 1000).padStart(4, '0')}`,
    name: `Product ${i + 1} - ${brands[i % brands.length]} Item`,
    category: categories[i % categories.length],
    brand: brands[i % brands.length],
    status: statuses[i % statuses.length],
    quality: Math.floor(Math.random() * 30) + 70,
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

  // Override the first product with the specific headphones details
  assets[0] = {
    id: 1,
    sku: 'CD1234',
    name: 'CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic',
    category: 'Electronics > Audio > Headphones',
    brand: 'TechSound',
    status: 'Enhanced',
    quality: 95,
    price: '$149.99',
    description: 'Premium wireless headphones with 24-hour battery life, Bluetooth 5.0 connectivity, foldable design and built-in microphone for calls',
    features: 'Bluetooth 5.0, 24-hour battery, Foldable design, Built-in microphone, Active noise cancellation',
    targetAudience: 'Audio enthusiasts, professionals, commuters, gamers',
    keyBenefits: 'Extended battery life, superior sound quality, comfortable fit for long sessions',
    competitiveAdvantage: 'Industry-leading 24-hour battery life with premium audio quality',
    seoKeywords: 'wireless headphones, bluetooth 5.0, 24 hour battery, foldable headphones, microphone',
    metaTitle: 'CD1234 Wireless Headphones - 24Hr Battery | Bluetooth 5.0 | Foldable',
    metaDescription: 'Experience premium audio with CD1234 wireless headphones featuring 24-hour battery, Bluetooth 5.0, and foldable design. Perfect for work and play.',
    productBullets: '• 24-hour extended battery life\n• Bluetooth 5.0 for stable connection\n• Foldable design for portability\n• Built-in microphone for hands-free calls\n• Active noise cancellation technology',
    technicalSpecs: 'Bluetooth Version: 5.0\nBattery Life: 24 hours\nCharging Time: 2 hours\nFrequency Response: 20Hz-20kHz\nWeight: 280g\nFoldable: Yes',
    useCases: 'Music listening, Video calls, Gaming, Commuting, Office work',
    warranty: '2 year warranty',
    certifications: 'CE, FCC, RoHS, Bluetooth SIG'
  };

  return assets;
};
