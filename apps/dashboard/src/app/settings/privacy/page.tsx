'use client';
import { useState } from 'react';

export default function PrivacySettings() {
  const [redactEmail, setRedactEmail] = useState(true);
  const [redactText, setRedactText] = useState(true);
  const [sampleRate, setSampleRate] = useState(0.2);
  const [retainDays, setRetainDays] = useState(14);

  const handleSave = async () => {
    // In a real implementation, this would save to the API
    alert('Settings saved!');
  };

  return (
    <main className="p-8 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-6 text-brand-primary">Privacy & Redaction</h1>
      
      <div className="space-y-6">
        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Data Redaction</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Redact Email Addresses</label>
                <p className="text-sm text-muted-foreground">Automatically hash email addresses in crash data</p>
              </div>
              <input
                type="checkbox"
                checked={redactEmail}
                onChange={(e) => setRedactEmail(e.target.checked)}
                className="w-4 h-4"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Redact Free Text</label>
                <p className="text-sm text-muted-foreground">Hash user input and free text fields</p>
              </div>
              <input
                type="checkbox"
                checked={redactText}
                onChange={(e) => setRedactText(e.target.checked)}
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Sampling & Retention</h2>
          <div className="space-y-4">
            <div>
              <label className="font-medium">Sample Rate</label>
              <p className="text-sm text-muted-foreground mb-2">Percentage of crashes to capture (0.0 - 1.0)</p>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={sampleRate}
                onChange={(e) => setSampleRate(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-muted-foreground">{Math.round(sampleRate * 100)}%</div>
            </div>
            
            <div>
              <label className="font-medium">Retention Days</label>
              <p className="text-sm text-muted-foreground mb-2">How long to keep crash data</p>
              <input
                type="number"
                min="1"
                max="365"
                value={retainDays}
                onChange={(e) => setRetainDays(parseInt(e.target.value))}
                className="w-20 px-2 py-1 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Compliance</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Data encrypted in transit and at rest</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Customer-managed encryption keys supported</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Automatic data scrubbing on ticket closure</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="rounded-xl px-6 py-2 bg-brand-accent text-brand-primary hover:bg-brand-accent/90 font-semibold"
        >
          Save Settings
        </button>
      </div>
    </main>
  );
}
