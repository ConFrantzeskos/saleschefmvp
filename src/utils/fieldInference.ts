export interface FieldMatch {
  sourceField: string;
  confidence: number;
  reason: string;
  detectedUnit?: string;
  unitSystem?: 'imperial' | 'metric' | 'mixed' | 'none';
  sampleValues?: string[];
}

export interface UnitInfo {
  unit: string;
  system: 'imperial' | 'metric' | 'none';
  field: string;
}

const WEIGHT_UNITS = {
  imperial: ['lb', 'lbs', 'pound', 'pounds', 'oz', 'ounce', 'ounces'],
  metric: ['kg', 'kilogram', 'kilograms', 'g', 'gram', 'grams', 'mg', 'milligram']
};

const DIMENSION_UNITS = {
  imperial: ['inch', 'inches', 'in', 'ft', 'feet', 'foot', 'yard', 'yd'],
  metric: ['cm', 'centimeter', 'centimeters', 'mm', 'millimeter', 'millimeters', 'm', 'meter', 'meters']
};

// Fuzzy match calculation using Levenshtein-inspired similarity
export function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const s2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (s1 === s2) return 1.0;
  if (s1.includes(s2) || s2.includes(s1)) return 0.85;
  
  // Check for common substrings
  let matchLength = 0;
  for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
    if (s1[i] === s2[i]) matchLength++;
  }
  
  return matchLength / Math.max(s1.length, s2.length);
}

// Detect unit information from field name
export function detectUnits(fieldName: string): UnitInfo {
  // Exclude Category and Brand fields from unit detection
  const lower = fieldName.toLowerCase();
  if (lower.includes('category') || lower.includes('brand')) {
    return { unit: '', system: 'none', field: fieldName };
  }
  
  // Check weight units
  for (const unit of WEIGHT_UNITS.imperial) {
    if (lower.includes(unit)) {
      return { unit, system: 'imperial', field: fieldName };
    }
  }
  for (const unit of WEIGHT_UNITS.metric) {
    if (lower.includes(unit)) {
      return { unit, system: 'metric', field: fieldName };
    }
  }
  
  // Check dimension units
  for (const unit of DIMENSION_UNITS.imperial) {
    if (lower.includes(unit)) {
      return { unit, system: 'imperial', field: fieldName };
    }
  }
  for (const unit of DIMENSION_UNITS.metric) {
    if (lower.includes(unit)) {
      return { unit, system: 'metric', field: fieldName };
    }
  }
  
  return { unit: '', system: 'none', field: fieldName };
}

// Confidence thresholds for demo
// High: 85%+ (auto-mapped)
// Medium: 70-84% (suggested) 
// Low: <70% (suggested with caution)

/**
 * AI-powered field inference with clear confidence ranking:
 * - High (85-100%): Auto-mapped - strong keyword match or common pairing
 * - Medium (70-84%): Suggested - good match but requires review
 * - Low (<70%): Shown for reference but needs manual mapping
 */
export function generateFieldSuggestions(
  targetField: string,
  detectedFields: string[],
  sampleData: Record<string, string[]>
): FieldMatch | null {
  let bestMatch: FieldMatch | null = null;
  let highestScore = 0;
  
  for (const sourceField of detectedFields) {
    const similarity = calculateSimilarity(targetField, sourceField);
    const unitInfo = detectUnits(sourceField);
    
    let confidence = similarity;
    let reason = `Field name similarity: ${Math.round(similarity * 100)}%`;
    
    // Boost confidence for exact keyword matches
    const targetKeywords = targetField.toLowerCase().split(/[^a-z0-9]/).filter(k => k.length > 2);
    const sourceKeywords = sourceField.toLowerCase().split(/[^a-z0-9]/).filter(k => k.length > 2);
    const matchingKeywords = targetKeywords.filter(k => sourceKeywords.includes(k));
    
    if (matchingKeywords.length > 0) {
      // Give higher boost for more matching keywords
      const boost = Math.min(0.2 * matchingKeywords.length, 0.4);
      confidence = Math.min(confidence + boost, 1.0);
      reason = `Matched keywords: ${matchingKeywords.join(', ')}`;
    }
    
    // Special boost for common field pairs
    const commonPairs: Record<string, string[]> = {
      'product name': ['product title', 'product_name', 'name', 'title', 'product'],
      'description': ['description', 'desc', 'product description', 'product_description'],
      'price': ['price', 'cost', 'amount', 'product price'],
      'sku': ['sku', 'product sku', 'item code', 'product_code'],
      'brand': ['brand', 'brand name', 'manufacturer', 'brand_name'],
      'category': ['category', 'category type', 'product category', 'type'],
      'weight': ['weight', 'product weight', 'item weight'],
      'dimensions': ['dimensions', 'size', 'measurements', 'package dimensions']
    };
    
    const targetLower = targetField.toLowerCase();
    for (const [key, values] of Object.entries(commonPairs)) {
      if (targetLower.includes(key) && values.some(v => sourceField.toLowerCase().includes(v))) {
        confidence = Math.min(confidence + 0.25, 1.0);
        reason = `Common field pairing detected`;
        break;
      }
    }
    
    if (confidence > highestScore) {
      highestScore = confidence;
      bestMatch = {
        sourceField,
        confidence,
        reason,
        detectedUnit: unitInfo.unit || undefined,
        unitSystem: unitInfo.system,
        sampleValues: sampleData[sourceField] || []
      };
    }
  }
  
  return bestMatch;
}

// Detect mixed unit systems across fields
export function detectUnitConflicts(
  mappings: Record<string, string>
): { hasConflict: boolean; conflicts: Array<{ field: string; units: UnitInfo[] }> } {
  const unitsByCategory: Record<string, UnitInfo[]> = {};
  
  Object.entries(mappings).forEach(([targetField, sourceField]) => {
    if (sourceField && sourceField !== 'not-mapped') {
      const unitInfo = detectUnits(sourceField);
      if (unitInfo.system !== 'none') {
        const category = targetField.toLowerCase().includes('weight') ? 'weight' : 'dimension';
        if (!unitsByCategory[category]) {
          unitsByCategory[category] = [];
        }
        unitsByCategory[category].push(unitInfo);
      }
    }
  });
  
  const conflicts: Array<{ field: string; units: UnitInfo[] }> = [];
  
  Object.entries(unitsByCategory).forEach(([category, units]) => {
    const systems = new Set(units.map(u => u.system));
    if (systems.size > 1) {
      conflicts.push({ field: category, units });
    }
  });
  
  return {
    hasConflict: conflicts.length > 0,
    conflicts
  };
}

// Generate sample data for demonstration
export function generateSampleData(): Record<string, string[]> {
  return {
    'Product Title': ['Premium Wireless Headphones', 'Organic Cotton T-Shirt', 'Stainless Steel Water Bottle'],
    'Description': ['High-quality audio with...', 'Soft, breathable fabric...', 'Keeps drinks cold for...'],
    'Price': ['$89.99', '$24.50', '$34.99'],
    'SKU': ['WH-2024-001', 'TS-ORG-M-BLU', 'WB-SS-750ML'],
    'Brand Name': ['AudioPro', 'EcoWear', 'HydroLife'],
    'Category Type': ['Electronics', 'Homewares', 'Kitchen & Dining'],
    'Weight (lbs)': ['0.85 lbs', '0.25 lbs', '1.2 lbs'],
    'Weight_KG': ['0.39 kg', '0.11 kg', '0.54 kg'],
    'Product Weight': ['12 oz', '4 oz', '19 oz'],
    'Dimensions': ['7.5 x 6.8 x 3.2', '28 x 20', '10.5 x 3.1'],
    'Size (inches)': ['7.5 x 6.8 x 3.2 in', '28 x 20 in', '10.5 x 3.1 in'],
    'Height_CM': ['8.1 cm', '71 cm', '26.7 cm'],
    'Package Dimensions (L x W x H)': ['8 x 7 x 4 inches', '30 x 22 x 2 inches', '11 x 4 x 4 inches'],
    'Color': ['Black', 'Blue', 'Silver'],
    'Material': ['Plastic/Metal', '100% Cotton', 'Stainless Steel']
  };
}
