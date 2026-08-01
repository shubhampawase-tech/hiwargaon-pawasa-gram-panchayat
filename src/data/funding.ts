export type DataStatus = 'sample' | 'admin_verified' | 'officially_imported' | 'live';

export interface FundingYear {
  financial_year: string;
  expected_funds: number;
  funds_received: number;
  previous_balance: number;
  total_available: number;
  actual_expenditure: number;
  remaining_balance: number;
  tied_grants: number;
  untied_grants: number;
  cfc_grants: number;
  sfc_grants: number;
  own_source_revenue: number;
  district_funds: number;
  zp_funds: number;
  ps_funds: number;
  status: DataStatus;
}

// Sample year-wise funding data. Replace with a Meri Panchayat / eGramSwaraj /
// GPDP import once the Panchayat's official LGD code is entered in
// Admin → Settings → Government Integrations.
export const fundingData: FundingYear[] = [
  { financial_year: '2022-23', expected_funds: 4200000, funds_received: 3950000, previous_balance: 180000, total_available: 4130000, actual_expenditure: 3760000, remaining_balance: 370000, tied_grants: 1500000, untied_grants: 1200000, cfc_grants: 900000, sfc_grants: 350000, own_source_revenue: 420000, district_funds: 280000, zp_funds: 260000, ps_funds: 140000, status: 'sample' },
  { financial_year: '2023-24', expected_funds: 4600000, funds_received: 4380000, previous_balance: 370000, total_available: 4750000, actual_expenditure: 4290000, remaining_balance: 460000, tied_grants: 1650000, untied_grants: 1300000, cfc_grants: 980000, sfc_grants: 380000, own_source_revenue: 470000, district_funds: 300000, zp_funds: 270000, ps_funds: 150000, status: 'sample' },
  { financial_year: '2024-25', expected_funds: 5100000, funds_received: 4820000, previous_balance: 460000, total_available: 5280000, actual_expenditure: 4650000, remaining_balance: 630000, tied_grants: 1800000, untied_grants: 1400000, cfc_grants: 1050000, sfc_grants: 420000, own_source_revenue: 540000, district_funds: 330000, zp_funds: 290000, ps_funds: 160000, status: 'sample' },
  { financial_year: '2025-26', expected_funds: 5450000, funds_received: 5020000, previous_balance: 630000, total_available: 5650000, actual_expenditure: 4980000, remaining_balance: 670000, tied_grants: 1900000, untied_grants: 1450000, cfc_grants: 1120000, sfc_grants: 440000, own_source_revenue: 590000, district_funds: 350000, zp_funds: 300000, ps_funds: 170000, status: 'sample' },
  { financial_year: '2026-27', expected_funds: 5800000, funds_received: 1620000, previous_balance: 670000, total_available: 2290000, actual_expenditure: 940000, remaining_balance: 1350000, tied_grants: 2000000, untied_grants: 1500000, cfc_grants: 1180000, sfc_grants: 460000, own_source_revenue: 210000, district_funds: 120000, zp_funds: 100000, ps_funds: 60000, status: 'sample' },
];

export interface WorkRecord {
  id: string;
  work_name: string;
  work_code: string;
  financial_year: string;
  scheme: string;
  funding_source: string;
  sanctioned_amount: number;
  released_amount: number;
  spent_amount: number;
  start_date: string;
  completion_date?: string;
  contractor: string;
  location: string;
  progress: number;
  status: 'Proposed' | 'Sanctioned' | 'In progress' | 'Completed' | 'Delayed';
  status_data: DataStatus;
}

export const developmentWorks: WorkRecord[] = [
  { id: 'W-2026-01', work_name: 'Village Internal Road Concreting — Ward 2', work_code: 'GPHP/RD/2026/01', financial_year: '2025-26', scheme: '15th Finance Commission Grant', funding_source: 'Tied grant (CFC)', sanctioned_amount: 1200000, released_amount: 960000, spent_amount: 720000, start_date: '2025-11-10', contractor: 'Admin configurable', location: 'Ward 2, near school', progress: 60, status: 'In progress', status_data: 'sample' },
  { id: 'W-2026-02', work_name: 'Overhead Water Tank Repair', work_code: 'GPHP/WS/2026/02', financial_year: '2025-26', scheme: 'Jal Jeevan Mission', funding_source: 'State grant', sanctioned_amount: 480000, released_amount: 480000, spent_amount: 455000, start_date: '2025-08-01', completion_date: '2026-01-15', contractor: 'Admin configurable', location: 'Village centre', progress: 100, status: 'Completed', status_data: 'sample' },
  { id: 'W-2026-03', work_name: 'Streetlight LED Retrofit — Wards 1–4', work_code: 'GPHP/EL/2026/03', financial_year: '2026-27', scheme: 'Own-source + Untied grant', funding_source: 'Own-source revenue', sanctioned_amount: 350000, released_amount: 120000, spent_amount: 60000, start_date: '2026-06-01', contractor: 'Admin configurable', location: 'All wards', progress: 20, status: 'In progress', status_data: 'sample' },
  { id: 'W-2026-04', work_name: 'Gram Panchayat Office Renovation', work_code: 'GPHP/BLD/2026/04', financial_year: '2026-27', scheme: '15th Finance Commission Grant', funding_source: 'Tied grant (CFC)', sanctioned_amount: 900000, released_amount: 0, spent_amount: 0, start_date: '2026-09-01', contractor: 'Admin configurable', location: 'Gram Panchayat premises', progress: 0, status: 'Sanctioned', status_data: 'sample' },
  { id: 'W-2025-05', work_name: 'Storm-water Drainage — Main Road', work_code: 'GPHP/DR/2025/05', financial_year: '2024-25', scheme: 'MGNREGA convergence', funding_source: 'District funds', sanctioned_amount: 780000, released_amount: 780000, spent_amount: 780000, start_date: '2024-10-01', completion_date: '2025-03-20', contractor: 'Admin configurable', location: 'Main road, Ward 1–3', progress: 100, status: 'Completed', status_data: 'sample' },
];

export interface BudgetYear {
  financial_year: string;
  opening_balance: number;
  expected_income: number;
  actual_income: number;
  tax_income: number;
  water_bill_income: number;
  grant_income: number;
  other_income: number;
  planned_expenditure: number;
  actual_expenditure: number;
  closing_balance: number;
  audit_status: 'Pending' | 'In progress' | 'Completed';
}

export const budgetData: BudgetYear[] = [
  { financial_year: '2023-24', opening_balance: 180000, expected_income: 4600000, actual_income: 4380000, tax_income: 890000, water_bill_income: 340000, grant_income: 3150000, other_income: 0, planned_expenditure: 4400000, actual_expenditure: 4290000, closing_balance: 460000, audit_status: 'Completed' },
  { financial_year: '2024-25', opening_balance: 460000, expected_income: 5100000, actual_income: 4820000, tax_income: 960000, water_bill_income: 380000, grant_income: 3480000, other_income: 0, planned_expenditure: 4900000, actual_expenditure: 4650000, closing_balance: 630000, audit_status: 'Completed' },
  { financial_year: '2025-26', opening_balance: 630000, expected_income: 5450000, actual_income: 5020000, tax_income: 1040000, water_bill_income: 410000, grant_income: 3570000, other_income: 0, planned_expenditure: 5200000, actual_expenditure: 4980000, closing_balance: 670000, audit_status: 'In progress' },
  { financial_year: '2026-27', opening_balance: 670000, expected_income: 5800000, actual_income: 1620000, tax_income: 310000, water_bill_income: 120000, grant_income: 1190000, other_income: 0, planned_expenditure: 5600000, actual_expenditure: 940000, closing_balance: 1350000, audit_status: 'Pending' },
];

export const fundingSourceNote =
  'All figures are clearly-labeled sample data for demonstration. Connect the Panchayat\u2019s official LGD / Panchayat code under Admin \u2192 Settings \u2192 Government Integrations to replace this with a Meri Panchayat, eGramSwaraj or GPDP import, or an admin-verified upload.';
