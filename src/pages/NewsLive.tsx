import { useEffect, useState } from 'react';
import { ExternalLink, RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { Page, Card } from '../components/UI';
import { fetchLiveNews, sampleNews, type NewsItem } from '../lib/liveNews';

export default function NewsLive() {
  const [items, setItems] = useState<NewsItem[]>(sampleNews);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetchLiveNews()
      .then(({ items, live }) => { setItems(items); setLive(live); })
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  return (
    <Page title="Latest News" subtitle="Government and Panchayat-relevant news, refreshed live where a connection is available">
      <div className="flex items-center gap-3 mb-6">
        <span className={`badge inline-flex items-center gap-1 ${live ? 'bg-green-600 text-white' : ''}`}>
          {live ? <Wifi size={13} /> : <WifiOff size={13} />} {live ? 'Live feed' : 'Sample data \u2014 live feed unavailable'}
        </span>
        <button onClick={load} className="btn-secondary text-sm" disabled={loading}>
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((n) => (
          <Card key={n.id}>
            <div className="flex justify-between items-start gap-2">
              <span className="text-xs text-slate-500">{n.source}</span>
              <span className="text-xs text-slate-500">{n.published_at}</span>
            </div>
            <h3 className="font-bold text-lg mt-2">{n.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{n.summary}</p>
            {n.link && <a href={n.link} target="_blank" rel="noreferrer" className="text-link mt-3">Read more <ExternalLink size={14} /></a>}
          </Card>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-6">News is aggregated from official government sources for citizen awareness. It does not replace an official Panchayat notice \u2014 see the Notices page for that.</p>
    </Page>
  );
}
