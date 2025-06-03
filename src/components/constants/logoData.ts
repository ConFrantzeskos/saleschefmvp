
export const integrationLogos = [
  { name: 'Shopify', logo: '🛍️' },
  { name: 'Amazon', logo: '📦' },
  { name: 'CSV', logo: '📊' },
  { name: 'Retail Media', logo: '📺' },
  { name: 'Magento', logo: '🏪' },
  { name: 'BigCommerce', logo: '🛒' }
];

export const sourceLogos = [
  { name: 'Google', logo: '🔍' },
  { name: 'Reviews', logo: '⭐' },
  { name: 'Social', logo: '📱' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Images', logo: '🖼️' },
  { name: 'SEO Data', logo: '📈' }
];

export const fileTypeLogos = [
  { name: 'CSV', logo: '📊' },
  { name: 'Excel', logo: '📗' },
  { name: 'PDF', logo: '📄' },
  { name: 'Images', logo: '🖼️' },
  { name: 'XML', logo: '📋' },
  { name: 'JSON', logo: '📄' }
];

export const cleaningActionLogos = [
  { name: 'Dedupe', logo: '🔄' },
  { name: 'Format', logo: '✨' },
  { name: 'Validate', logo: '✅' },
  { name: 'Fill Gaps', logo: '🔧' },
  { name: 'Standardize', logo: '📏' },
  { name: 'Categorize', logo: '🏷️' }
];

export const contentTypeLogos = [
  { name: 'PDPs', logo: '🛒' },
  { name: 'Emails', logo: '📧' },
  { name: 'FAQs', logo: '❓' },
  { name: 'Social', logo: '📱' },
  { name: 'Training', logo: '🎓' },
  { name: 'Banners', logo: '🖼️' }
];

export const analyticsLogos = [
  { name: 'A/B Test', logo: '🧪' },
  { name: 'Analytics', logo: '📊' },
  { name: 'Insights', logo: '💡' },
  { name: 'Reports', logo: '📈' },
  { name: 'Monitor', logo: '👁️' },
  { name: 'Optimize', logo: '🎯' }
];

export const getLogosForType = (logoType: string) => {
  switch (logoType) {
    case 'integrations': return integrationLogos;
    case 'sources': return sourceLogos;
    case 'fileTypes': return fileTypeLogos;
    case 'cleaningActions': return cleaningActionLogos;
    case 'contentTypes': return contentTypeLogos;
    case 'analytics': return analyticsLogos;
    default: return [];
  }
};
