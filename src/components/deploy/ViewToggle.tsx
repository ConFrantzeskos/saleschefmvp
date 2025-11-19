import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, MapPin } from "lucide-react";

interface ViewToggleProps {
  value: 'journey' | 'integrations';
  onChange: (value: 'journey' | 'integrations') => void;
}

export const ViewToggle = ({ value, onChange }: ViewToggleProps) => {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as 'journey' | 'integrations')}>
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="journey" className="gap-2">
          <MapPin className="h-4 w-4" />
          Journey View
        </TabsTrigger>
        <TabsTrigger value="integrations" className="gap-2">
          <LayoutGrid className="h-4 w-4" />
          All Integrations
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
