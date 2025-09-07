'use client';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ClusterDetail() {
  const { id } = useParams() as { id: string };
  const { data, error } = useSWR(id ? `/api/clusters/${id}` : null, fetcher);
  const [isReplayQueued, setIsReplayQueued] = useState(false);

  if (error) return <div className="p-8">Error loading cluster</div>;
  if (!data) return <div className="p-8">Loading…</div>;

  const handleReplay = async () => {
    try {
      const response = await fetch(`/api/clusters/${id}/replay`, { method: 'POST' });
      const result = await response.json();
      if (response.ok) {
        setIsReplayQueued(true);
        alert(`Replay queued! Job ID: ${result.jobId}`);
      } else {
        alert('Error queuing replay');
      }
    } catch (error) {
      alert('Error queuing replay');
    }
  };

  return (
    <main className="p-8 grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-brand-primary">Cluster {data.signature}</h1>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded text-xs ${
            data.severity <= 2 ? 'bg-red-100 text-red-800' : 
            data.severity <= 3 ? 'bg-yellow-100 text-yellow-800' : 
            'bg-gray-100 text-gray-800'
          }`}>
            P{data.severity}
          </span>
          <span className={`px-2 py-1 rounded text-xs ${
            data.status === 'OPEN' ? 'bg-red-100 text-red-800' :
            data.status === 'RESOLVED' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {data.status}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-lg p-4">
          <h2 className="text-sm opacity-70 mb-2">Minimal Repro</h2>
          <ol className="list-decimal pl-6 space-y-1">
            {data.minimalRepro?.map((s: string, i: number) => (
              <li key={i} className="text-sm">{s}</li>
            ))}
          </ol>
        </div>

        <div className="bg-card border rounded-lg p-4">
          <h2 className="text-sm opacity-70 mb-2">Recent Replays</h2>
          {data.replays?.length > 0 ? (
            <div className="space-y-2">
              {data.replays.map((replay: any) => (
                <div key={replay.id} className="flex items-center justify-between text-sm">
                  <span>{replay.status}</span>
                  <span className="text-muted-foreground">
                    {replay.finishedAt ? new Date(replay.finishedAt).toLocaleString() : 'Running...'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No replays yet</p>
          )}
        </div>
      </div>

      <div className="bg-card border rounded-lg p-4">
        <h2 className="text-sm opacity-70 mb-2">Device Context</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">OS:</span>
            <div className="font-medium">Android 14</div>
          </div>
          <div>
            <span className="text-muted-foreground">Device:</span>
            <div className="font-medium">Pixel 6</div>
          </div>
          <div>
            <span className="text-muted-foreground">Locale:</span>
            <div className="font-medium">en-US</div>
          </div>
          <div>
            <span className="text-muted-foreground">Version:</span>
            <div className="font-medium">1.2.3</div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={handleReplay}
          disabled={isReplayQueued}
          className="rounded-xl px-4 py-2 bg-brand-accent text-brand-primary hover:bg-brand-accent/90 disabled:opacity-50 font-semibold"
        >
          {isReplayQueued ? 'Replay Queued' : 'Queue Replay'}
        </button>
        <button className="rounded-xl px-4 py-2 border hover:bg-muted">
          Create Ticket
        </button>
      </div>
    </main>
  );
}
