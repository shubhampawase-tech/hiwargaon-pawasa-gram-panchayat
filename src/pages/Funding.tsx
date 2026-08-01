import { useMemo, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, ExternalLink } from 'lucide-react';
import { Page, Card, Stat } from '../components/UI';
import { fundingData, developmentWorks, budgetData, fundingSourceNote } from '../data/funding';

const INR = (n: number) => `\u20b9${n.toLocaleString('en-IN')}`;
const COLORS = ['#166534', '#f97316', '#2563eb', '#dc2626', '#7c3aed'];

const statusBadge: Record<string, string> = {
  sample: 'bg-slate-200 text-slate-700',
  admin_verified: 'bg-blue-100 text-blue-800',
  officially_imported: 'bg-green-100 text-green-800',
  live: 'bg-green-600 text-white',
};

export default function Funding() {
  const [year, setYear] = useState(fundingData[fundingData.length - 1].financial_year);
  const current = useMemo(() => fundingData.find((f) => f.financial_year === year)!, [year]);
  const works = useMemo(() => developmentWorks.filter((w) => w.financial_year === year), [year]);

  const trend = fundingData.map((f) => ({ year: f.financial_year, Received: f.funds_received, Spent: f.actual_expenditure }));
  const sourcePie = [
    { name: 'Tied grants', value: current.tied_grants },
    { name: 'Untied grants', value: current.untied_grants },
    { name: 'CFC grants', value: current.cfc_grants },
    { name: 'SFC grants', value: current.sfc_grants },
    { name: 'Own-source', value: current.own_source_revenue },
  ];
  const utilisationPct = Math.round((current.actual_expenditure / current.total_available) * 100);

  return (
    <Page title="Hiwargaon Pawasa Gram Panchayat Funding and Development" subtitle="Meri Panchayat / eGramSwaraj / GPDP-ready funding and works tracker">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <label className="flex-row items-center gap-2">
          <span className="text-sm font-semibold">Financial year</span>
          <select className="input" value={year} onChange={(e) => setYear(e.target.value)}>
            {fundingData.map((f) => <option key={f.financial_year} value={f.financial_year}>{f.financial_year}</option>)}
          </select>
        </label>
        <span className={`badge ${statusBadge[current.status]}`}>{current.status.replace('_', ' ')}</span>
        <span className="text-xs text-slate-500">Last updated: {new Date().toISOString().slice(0, 10)} \u2022 Requires official LGD / Panchayat code to enable live import</span>
        <button className="btn-secondary ml-auto"><Download size={16} /> Export report</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat label="Total available funds" value={INR(current.total_available)} />
        <Stat label="Actual expenditure" value={INR(current.actual_expenditure)} />
        <Stat label="Remaining balance" value={INR(current.remaining_balance)} />
        <Stat label="Fund utilisation" value={`${utilisationPct}%`} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        <Card className="lg:col-span-2">
          <h3 className="section-title">Funds received vs. spent (year-wise)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend}>
                <XAxis dataKey="year" fontSize={12} />
                <YAxis fontSize={12} tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`} />
                <Tooltip formatter={(v: number) => INR(v)} />
                <Legend />
                <Line type="monotone" dataKey="Received" stroke="#166534" strokeWidth={2} />
                <Line type="monotone" dataKey="Spent" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <h3 className="section-title">Funding sources \u2014 {year}</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sourcePie} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80}>
                  {sourcePie.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => INR(v)} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="mb-10">
        <h3 className="section-title">Grants & revenue breakdown \u2014 {year}</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[current]}>
              <XAxis dataKey="financial_year" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(v) => `${(v / 100000).toFixed(0)}L`} />
              <Tooltip formatter={(v: number) => INR(v)} />
              <Legend />
              <Bar dataKey="district_funds" name="District funds" fill="#166534" />
              <Bar dataKey="zp_funds" name="Zilla Parishad" fill="#2563eb" />
              <Bar dataKey="ps_funds" name="Panchayat Samiti" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <h3 className="section-title">Development works \u2014 {year}</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {works.length === 0 && <Card className="text-center text-slate-500 py-10 md:col-span-2">No works recorded for this financial year yet.</Card>}
        {works.map((w) => (
          <Card key={w.id}>
            <div className="flex justify-between items-start gap-2">
              <span className="badge">{w.status}</span>
              <span className="text-xs text-slate-500">{w.work_code}</span>
            </div>
            <h4 className="font-bold text-lg mt-3">{w.work_name}</h4>
            <p className="text-sm text-slate-500">{w.scheme} \u2022 {w.funding_source}</p>
            <p className="text-sm text-slate-500">{w.location}</p>
            <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
              <div><small>Sanctioned</small><p className="font-bold">{INR(w.sanctioned_amount)}</p></div>
              <div><small>Released</small><p className="font-bold">{INR(w.released_amount)}</p></div>
              <div><small>Spent</small><p className="font-bold">{INR(w.spent_amount)}</p></div>
            </div>
            <div className="h-2 bg-slate-200 rounded mt-4"><div className="h-full bg-green-600 rounded" style={{ width: `${w.progress}%` }} /></div>
            <p className="text-right text-sm mt-1">{w.progress}% complete</p>
          </Card>
        ))}
      </div>

      <h3 className="section-title">Annual budget summary</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="text-left border-b border-slate-300 dark:border-slate-700">
            <th className="py-2 pr-4">Financial year</th><th className="py-2 pr-4">Opening balance</th><th className="py-2 pr-4">Actual income</th><th className="py-2 pr-4">Actual expenditure</th><th className="py-2 pr-4">Closing balance</th><th className="py-2 pr-4">Audit status</th>
          </tr></thead>
          <tbody>
            {budgetData.map((b) => (
              <tr key={b.financial_year} className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-2 pr-4 font-semibold">{b.financial_year}</td>
                <td className="py-2 pr-4">{INR(b.opening_balance)}</td>
                <td className="py-2 pr-4">{INR(b.actual_income)}</td>
                <td className="py-2 pr-4">{INR(b.actual_expenditure)}</td>
                <td className="py-2 pr-4">{INR(b.closing_balance)}</td>
                <td className="py-2 pr-4"><span className="badge">{b.audit_status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="bg-orange-50 dark:bg-slate-900 border-orange-200 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <p className="text-sm text-slate-700 dark:text-slate-300">{fundingSourceNote}</p>
        <a className="btn-secondary flex-shrink-0" href="https://egramswaraj.gov.in" target="_blank" rel="noreferrer">eGramSwaraj <ExternalLink size={14} /></a>
      </Card>
    </Page>
  );
}
