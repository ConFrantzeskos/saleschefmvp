import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import AssetHeader from '@/components/AssetHeader';
import FactoryDataSection from '@/components/FactoryDataSection';
import EnhancedContentSection from '@/components/EnhancedContentSection';
import { contentSections } from '@/data/contentSections';
import { Asset } from '@/types/asset';

const AssetReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  
  // Mock data for the asset with proper typing
  const asset: Asset = {
    id: 1,
    sku: "CD1234",
    name: "CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic",
    brand: "TechSound",
    category: "Electronics > Audio > Headphones",
    status: "Enhanced",
    quality: 95,
    price: "$149.99",
    description: "Premium wireless headphones with 24-hour battery life",
    features: "Bluetooth 5.0, 24-hour battery, Foldable design",
    targetAudience: "Audio enthusiasts, professionals",
    keyBenefits: "Extended battery life, superior sound quality",
    competitiveAdvantage: "Industry-leading 24-hour battery life",
    seoKeywords: "wireless headphones, bluetooth 5.0",
    metaTitle: "CD1234 Wireless Headphones",
    metaDescription: "Experience premium audio with CD1234 wireless headphones",
    productBullets: "• 24-hour battery\n• Bluetooth 5.0\n• Foldable design",
    technicalSpecs: "Bluetooth: 5.0\nBattery: 24 hours\nWeight: 280g",
    useCases: "Music listening, Video calls, Gaming",
    warranty: "2 year warranty",
    certifications: "CE, FCC, RoHS, Bluetooth SIG"
  };

  // Consolidated raw factory data with realistic CSV-style specs and some Chinglish
  const consolidatedRawData = `SKU,CD1234
PRODUCT_NAME,24HR Wireless Headphone
BRAND,TechSound
MODEL_NO,TS-WH-24H-001
UPC,123456789012
ASIN,B08XXXXX12
CATEGORY,Consumer Electronics/Audio/Headphones/Wireless
DRIVER_SIZE,40mm
DRIVER_TYPE,Dynamic Neodymium
FREQ_RESPONSE,20Hz-20000Hz
IMPEDANCE,32Ω
SENSITIVITY,102dB±3dB
THD,<0.1%
BLUETOOTH_VERSION,5.0
BLUETOOTH_RANGE,10m
BLUETOOTH_CODECS,SBC,AAC,aptX
BLUETOOTH_PROFILES,A2DP,AVRCP,HFP,HSP
BATTERY_CAPACITY,600mAh
BATTERY_LIFE,24hr
STANDBY_TIME,200hr
CHARGE_TIME,2hr
CHARGE_PORT,USB-C
QUICK_CHARGE,15min=3hr
WEIGHT,250g
DIMENSIONS_UNFOLDED,180x160x80mm
DIMENSIONS_FOLDED,90x160x80mm
FOLDABLE,YES
MIC_TYPE,Omnidirectional
MIC_SENSITIVITY,-42dB±3dB
NOISE_CANCELLING,Passive
OPERATING_TEMP,-10°C to 45°C
HUMIDITY,10%-90%
COLOR_OPTIONS,Black,Navy Blue
MATERIALS,ABS Plastic,Metal,Protein Leather
CABLE_LENGTH,1.2m
ACCESSORIES,USB-C Cable,3.5mm Cable,Carry Pouch,Manual
WARRANTY,24 months
CERTIFICATIONS,CE,FCC,RoHS,WEEE
COUNTRY_ORIGIN,China
FACTORY_CODE,SZ-2024-001
SELL_POINT_1,Super long battery make your music never stop!
SELL_POINT_2,Fold design very convenient for travel carry
SELL_POINT_3,Professional sound quality with deep bass experience
SELL_POINT_4,Comfortable wear all day no pressure feeling
PACKAGING_TYPE,Color Box
PACKAGE_DIMS,200x180x100mm
PACKAGE_WEIGHT,450g
MASTER_CARTON,20pcs
CARTON_DIMS,420x380x520mm
CARTON_WEIGHT,10.5kg
MOQ,500pcs
LEAD_TIME,15-20days
FOB_PRICE,USD_28.50
RETAIL_PRICE,USD_79.99`;

  const handleApprove = () => {
    toast.success("Content approved successfully!");
    setTimeout(() => {
      navigate('/review');
    }, 1000);
  };

  const handleEdit = (sectionIndex: number, itemIndex: number) => {
    const fieldKey = `${sectionIndex}-${itemIndex}`;
    setEditingField(fieldKey);
    setEditValues({
      ...editValues,
      [fieldKey]: contentSections[sectionIndex].items[itemIndex].content
    });
  };

  const handleSave = (sectionIndex: number, itemIndex: number) => {
    const fieldKey = `${sectionIndex}-${itemIndex}`;
    // In a real app, this would save to backend
    contentSections[sectionIndex].items[itemIndex].content = editValues[fieldKey];
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValues({});
  };

  const handleEditValueChange = (fieldKey: string, value: string) => {
    setEditValues({
      ...editValues,
      [fieldKey]: value
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-7xl mx-auto p-6 flex-1 flex flex-col">
        <AssetHeader asset={asset} onApprove={handleApprove} />

        {/* Two-column layout with independent scrolling - takes remaining space */}
        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Left Column - Original Factory Data */}
          <FactoryDataSection consolidatedRawData={consolidatedRawData} />

          {/* Right Column - Enhanced Content */}
          <EnhancedContentSection
            contentSections={contentSections}
            editingField={editingField}
            editValues={editValues}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
            onEditValueChange={handleEditValueChange}
          />
        </div>
      </div>

      {/* Fixed bottom navigation bar */}
      <div className="border-t bg-background px-6 py-4 mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="outline" onClick={() => navigate('/review')}>
            Back to Assets
          </Button>
          <div className="space-x-3">
            <Button variant="outline">
              Request Changes
            </Button>
            <Button onClick={handleApprove}>
              Approve & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetReview;
