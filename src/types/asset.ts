
export interface Asset {
  id: number;
  sku: string;
  name: string;
  category: string;
  brand: string;
  status: 'Enhanced' | 'Needs Review';
  quality: number;
  price: string;
  description: string;
  features: string;
  targetAudience: string;
  keyBenefits: string;
  competitiveAdvantage: string;
  seoKeywords: string;
  metaTitle: string;
  metaDescription: string;
  productBullets: string;
  technicalSpecs: string;
  useCases: string;
  warranty: string;
  certifications: string;
}
