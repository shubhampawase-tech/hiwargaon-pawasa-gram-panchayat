import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Page, Card } from '../components/UI';
import { governmentOfficials, officialsNote, type OfficialRecord } from '../data/government';

const levelLabel: Record<OfficialRecord['level'], string> = {
  national: 'National',
  state: 'State \u2014 Maharashtra',
  district: 'District & Constituency',
  local: 'Gram Panchayat Hiwargaon Pawasa',
};

const avatarUrl = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name === 'Admin configurable' ? '?' : name)}&background=166534&color=fff&size=128&bold=true`;

function OfficialCard({ o }: { o: OfficialRecord }) {
  const pending = o.name === 'Admin configurable';
  return (
    <Card className="flex gap-4">
      <img src={avatarUrl(o.name)} alt="" className="h-16 w-16 rounded-full border-2 border-green-700 flex-shrink-0" loading="lazy" />
      <div className="min-w-0">
        <p className="font-bold truncate">{pending ? 'To be updated by admin' : o.name}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{o.designation}</p>
        <p className="text-xs text-slate-500">{o.designation_mr}</p>
        {o.department && <p className="text-xs text-slate-500 mt-1">{o.department}</p>}
        <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1"><ShieldCheck size={13} className="text-green-600" />Verified {o.last_verified}</span>
          {o.official_url && (
            <a href={o.official_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-green-700 dark:text-green-300 font-semibold">
              Source <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Leadership() {
  const levels: OfficialRecord['level'][] = ['national', 'state', 'district', 'local'];
  return (
    <Page title="Government Leadership" subtitle="Politically neutral directory \u2014 sourced from official government records and updated by admins as office-holders change">
      {levels.map((lvl) => (
        <div key={lvl} className="mb-10">
          <h3 className="section-title">{levelLabel[lvl]}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {governmentOfficials.filter((o) => o.level === lvl).map((o) => (
              <OfficialCard key={o.id} o={o} />
            ))}
          </div>
        </div>
      ))}
      <Card className="bg-orange-50 dark:bg-slate-900 border-orange-200">
        <p className="text-sm text-slate-700 dark:text-slate-300">{officialsNote}</p>
      </Card>
    </Page>
  );
}
