export interface DeploymentTemplate {
  id: string;
  name: string;
  description: string;
  channels: string[];
  icon: string;
  recommended?: boolean;
  color: string;
}

export const deploymentTemplates: DeploymentTemplate[] = [
  {
    id: 'go-live',
    name: 'Go Live Everywhere',
    description: 'Deploy to all e-commerce, marketplaces & social',
    channels: [
      'shopify', 'magento', 'bigcommerce', 'woocommerce',
      'amazon-seller', 'walmart-marketplace', 'target-plus', 'ebay', 'etsy', 'wayfair',
      'instagram-shopping', 'facebook-shops', 'tiktok-shop', 'pinterest-shopping',
    ],
    icon: '🚀',
    recommended: true,
    color: '#667EEA',
  },
  {
    id: 'retail-media',
    name: 'Retail Media Blitz',
    description: 'Activate all major retail ad networks',
    channels: [
      'amazon-dsp', 'amazon-sponsored',
      'walmart-connect-offsite', 'walmart-connect-search',
      'target-roundel-offsite', 'target-roundel-search',
      'kroger-precision', 'instacart-ads',
    ],
    icon: '🎯',
    color: '#F56565',
  },
  {
    id: 'marketplace-launch',
    name: 'Marketplace Launch',
    description: 'Go live on top 10 marketplaces',
    channels: [
      'amazon-seller', 'walmart-marketplace', 'target-plus', 'ebay',
      'etsy', 'wayfair', 'bestbuy-marketplace', 'newegg',
    ],
    icon: '🛍️',
    color: '#48BB78',
  },
  {
    id: 'social-everywhere',
    name: 'Social Everywhere',
    description: 'Activate all social commerce channels',
    channels: [
      'instagram-shopping', 'facebook-shops', 'tiktok-shop', 'pinterest-shopping',
      'tiktok-ads', 'meta-ads', 'pinterest-ads', 'snapchat-ads',
    ],
    icon: '📱',
    color: '#ED8936',
  },
  {
    id: 'operations-suite',
    name: 'Operations Suite',
    description: 'PIM, DAM, ERP & training systems',
    channels: [
      'salsify', 'akeneo', 'inriver', 'bynder',
      'netsuite', 'sap-erp', 'staff-training', 'sales-playbook',
    ],
    icon: '🔧',
    color: '#805AD5',
  },
  {
    id: 'customer-service',
    name: 'Customer Service Stack',
    description: 'Support, email & chatbot systems',
    channels: [
      'zendesk', 'intercom', 'gorgias', 'freshdesk',
      'klaviyo', 'mailchimp', 'chatbot-training', 'voice-assistant',
    ],
    icon: '💬',
    color: '#38B2AC',
  },
];
