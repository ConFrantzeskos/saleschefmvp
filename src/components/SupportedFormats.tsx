
import React from 'react';
import { Database, FileText, Link } from 'lucide-react';

const SupportedFormats = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
      <div className="flex items-center space-x-2">
        <Database className="w-4 h-4" />
        <span>CSV, Excel files</span>
      </div>
      <div className="flex items-center space-x-2">
        <FileText className="w-4 h-4" />
        <span>PDF catalogs</span>
      </div>
      <div className="flex items-center space-x-2">
        <Link className="w-4 h-4" />
        <span>URL lists</span>
      </div>
    </div>
  );
};

export default SupportedFormats;
