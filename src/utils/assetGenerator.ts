
import { Asset } from '@/types/asset';

export const generateSampleAssets = (): Asset[] => {
  const assets: Asset[] = [
    // Product 1: CD1234 - TechSound Headphones
    {
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
      price: '$189.99',
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
    },

    // Product 2: SPK789 - SmartHome Smart Speaker
    {
      id: 2,
      sku: 'SPK789',
      name: 'Smart Speaker with Voice Assistant',
      category: 'Electronics > Audio > Smart Speakers',
      brand: 'SmartHome',
      status: 'Enhanced',
      quality: 94,
      price: '$129.99',
      description: 'Premium smart speaker with 360° sound, multi-room audio, universal voice assistant support (Alexa/Google/Siri) and smart home hub integration',
      features: 'Voice assistant support, Multi-room audio, Smart home hub, 360° premium sound, Touch controls',
      targetAudience: 'Smart home enthusiasts, music lovers, homeowners, tech-savvy households',
      keyBenefits: 'Best-in-class sound quality, universal voice assistant compatibility, integrated smart home hub',
      competitiveAdvantage: 'Only speaker with all voice assistants + hub functionality at this price',
      seoKeywords: 'smart speaker, alexa compatible, google home, voice assistant, multi room audio',
      metaTitle: 'SPK789 Smart Speaker - Voice Control | Multi-Room Audio | Smart Hub',
      metaDescription: 'Transform your home with SPK789 smart speaker. Works with Alexa, Google, & Siri. Premium sound, multi-room audio, built-in smart home hub.',
      productBullets: '• Universal voice assistant support (Alexa/Google/Siri)\n• 360° premium audio quality\n• Multi-room audio synchronization\n• Built-in smart home hub (Zigbee + Z-Wave)\n• Touch controls & aux input',
      technicalSpecs: 'Power: 30W RMS\nFrequency: 50Hz-20kHz\nConnectivity: WiFi 802.11ac, Bluetooth 5.0, 3.5mm aux\nVoice: 4-mic far-field array\nDimensions: 6.5"H x 4"W',
      useCases: 'Music streaming, Smart home control, Voice queries, Podcast listening, Multi-room audio',
      warranty: '1 year warranty',
      certifications: 'CE, FCC, RoHS, WiFi Certified'
    },

    // Product 3: MON999 - ViewTech 4K Monitor
    {
      id: 3,
      sku: 'MON999',
      name: '4K Ultra HD Monitor',
      category: 'Electronics > Displays > Monitors',
      brand: 'ViewTech',
      status: 'Enhanced',
      quality: 93,
      price: '$449.99',
      description: 'Professional 32" 4K IPS monitor with 99% sRGB color accuracy, HDR10 support, USB-C power delivery, perfect for content creators and professionals',
      features: '32" 4K IPS display, 99% sRGB color accuracy, HDR10, USB-C with 65W PD, Height adjustable',
      targetAudience: 'Content creators, photographers, video editors, designers, remote workers',
      keyBenefits: 'True-to-life color accuracy, massive 4K workspace, USB-C single-cable solution',
      competitiveAdvantage: 'Professional color accuracy at consumer price with USB-C power delivery',
      seoKeywords: '4K monitor, color accurate monitor, USB-C monitor, monitor for photo editing, 32 inch monitor',
      metaTitle: 'MON999 4K Monitor - 32" | 99% sRGB | USB-C 65W | For Creators',
      metaDescription: 'Professional 32" 4K monitor with exceptional color accuracy. USB-C power delivery, HDR10, perfect for photo/video editing. ViewTech MON999.',
      productBullets: '• 32" 4K IPS panel (3840x2160)\n• 99% sRGB color accuracy out of box\n• HDR10 support for dynamic range\n• USB-C with 65W power delivery\n• VESA mount compatible, height adjustable',
      technicalSpecs: 'Panel: 32" IPS 4K (3840x2160), 60Hz\nColor: 99% sRGB, 90% DCI-P3, HDR10\nInputs: HDMI 2.0 x2, DisplayPort 1.4, USB-C (65W PD)\nStand: Tilt, height adjust, VESA 100x100',
      useCases: 'Photo editing, Video editing, Graphic design, Programming, General productivity',
      warranty: '3 year warranty',
      certifications: 'CE, FCC, RoHS, ENERGY STAR, TÜV Low Blue Light'
    }
  ];

  return assets;
};
