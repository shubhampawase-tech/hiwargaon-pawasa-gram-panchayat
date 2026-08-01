export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  link: string;
  source: string;
  published_at: string;
  is_live: boolean;
}

// Sample fallback — always shown instantly, replaced by live items if the
// fetch below succeeds. This runs in the *deployed* site (the visitor's
// browser has internet access), not in a build sandbox, so once this project
// is deployed to GitHub Pages the fetch call below will run for real.
export const sampleNews: NewsItem[] = [
  { id: 'n1', title: 'PM Kisan Samman Nidhi \u2014 next instalment schedule announced', summary: 'Eligible farmers can check beneficiary status on the official PM-Kisan portal.', link: 'https://pmkisan.gov.in', source: 'pmkisan.gov.in', published_at: '2026-07-28', is_live: false },
  { id: 'n2', title: 'Maharashtra Gram Panchayat elections \u2014 model code updates', summary: 'State Election Commission circular on Panchayat-level compliance for the current cycle.', link: 'https://sec.maharashtra.gov.in', source: 'sec.maharashtra.gov.in', published_at: '2026-07-20', is_live: false },
  { id: 'n3', title: 'Jal Jeevan Mission \u2014 district progress update', summary: 'Household tap-connection coverage figures released for the current quarter.', link: 'https://jaljeevanmission.gov.in', source: 'jaljeevanmission.gov.in', published_at: '2026-07-15', is_live: false },
];

// Public, keyless RSS \u2192 JSON proxy used only as a best-effort live source.
// If it fails (offline, blocked, rate-limited) we silently keep the sample
// data above \u2014 the UI always shows something, and always labels which.
const FEEDS = [
  { url: 'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3', source: 'PIB \u2014 Maharashtra' },
];

export async function fetchLiveNews(): Promise<{ items: NewsItem[]; live: boolean }> {
  try {
    const feed = FEEDS[0];
    const proxied = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
    const res = await fetch(proxied, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) throw new Error('feed unavailable');
    const data = await res.json();
    if (!data.items?.length) throw new Error('empty feed');
    const items: NewsItem[] = data.items.slice(0, 6).map((it: any, i: number) => ({
      id: `live-${i}`,
      title: it.title,
      summary: (it.description || '').replace(/<[^>]+>/g, '').slice(0, 160),
      link: it.link,
      source: feed.source,
      published_at: it.pubDate?.slice(0, 10) || '',
      is_live: true,
    }));
    return { items, live: true };
  } catch {
    return { items: sampleNews, live: false };
  }
}
