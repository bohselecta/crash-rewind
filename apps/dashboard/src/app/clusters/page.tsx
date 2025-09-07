'use client';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Clusters() {
  const { data, error } = useSWR('/api/clusters', fetcher);

  if (error) return <div className="p-8">Error loading clusters</div>;
  if (!data) return <div className="p-8">Loading…</div>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4 text-brand-primary">Clusters</h1>
      <div className="bg-card border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-brand-deep">
            <tr>
              <th className="text-left p-4">Signature</th>
              <th className="text-left p-4">Last Seen</th>
              <th className="text-left p-4">Count</th>
              <th className="text-left p-4">Severity</th>
              <th className="text-left p-4">Repro</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c: any) => (
              <tr key={c.id} className="border-b hover:bg-muted/50">
                <td className="p-4">
                  <Link href={`/clusters/${c.id}`} className="underline hover:text-brand-accent text-brand-primary">
                    {c.signature}
                  </Link>
                </td>
                <td className="p-4">{new Date(c.lastSeen).toLocaleString()}</td>
                <td className="p-4">{c.count}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    c.severity <= 2 ? 'bg-red-100 text-red-800' : 
                    c.severity <= 3 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    P{c.severity}
                  </span>
                </td>
                <td className="p-4">{c.reproStatus}</td>
                <td className="p-4">
                  <button className="text-brand-accent hover:underline text-sm">
                    Replay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
