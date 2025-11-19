import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface IntegrationsSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const IntegrationsSearch = ({ value, onChange }: IntegrationsSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search platforms by name, category, or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};
