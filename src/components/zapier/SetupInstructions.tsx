
import React from 'react';

const SetupInstructions = () => {
  return (
    <>
      <div className="text-sm text-muted-foreground">
        <p><strong>Setup Instructions:</strong></p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Create a new Zap in Zapier</li>
          <li>Choose "Webhooks by Zapier" as the trigger</li>
          <li>Select "Catch Hook" as the trigger event</li>
          <li>Copy the webhook URL and paste it above</li>
          <li>Save the configuration</li>
          <li>Connect your desired action (Google Sheets, Email, etc.)</li>
          <li>Turn your Zap ON</li>
          <li>Submit an email through any form to test the integration</li>
        </ol>
      </div>

      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 How it works:</strong> Once configured, every email submitted through any form on SalesChef will automatically trigger your Zap with the email data. Check your Zap history to see incoming emails.
        </p>
      </div>
    </>
  );
};

export default SetupInstructions;
