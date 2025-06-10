
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SecurityWarning = () => {
  return (
    <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <p className="font-medium text-yellow-800 mb-1">Security Notice</p>
        <p className="text-yellow-700 mb-2">
          Webhook URLs contain sensitive information and should never be hardcoded in source code.
          This configuration uses encrypted local storage for security.
        </p>
      </div>
    </div>
  );
};

export default SecurityWarning;
