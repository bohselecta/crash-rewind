export default function Home() {
  return (
    <main className="p-8 grid gap-6">
      <h1 className="text-2xl font-semibold text-brand-primary">Release Health</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Crash-free Sessions" value="98.7%" />
        <Card title="New Clusters (7d)" value="12" />
        <Card title="Repro Coverage" value="58%" />
      </div>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Release Guardrails</h2>
        <div className="bg-brand-deep border border-brand-primary/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-brand-primary">Latest Release</h3>
              <p className="text-sm text-muted-foreground">v1.2.3 - 2 hours ago</p>
            </div>
            <div className="text-right">
              <div className="text-brand-accent font-semibold">✓ Stable</div>
              <div className="text-sm text-muted-foreground">No new P0 clusters</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl shadow p-6 bg-card border border-brand-primary/10">
      <div className="text-sm opacity-70 text-brand-primary">{title}</div>
      <div className="text-3xl font-bold mt-1 text-brand-accent">{value}</div>
    </div>
  );
}
