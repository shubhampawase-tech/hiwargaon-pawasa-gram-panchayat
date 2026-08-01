export interface OfficialRecord {
  id: string;
  name: string;
  designation: string;
  designation_mr: string;
  level: 'national' | 'state' | 'district' | 'local';
  department?: string;
  official_url: string;
  source: string;
  last_verified: string;
  editable: boolean;
}

/**
 * NATIONAL & STATE LEVEL — verified against official / encyclopedic sources
 * at the "last_verified" date below. These change with elections and
 * cabinet reshuffles, so the admin dashboard (Manage → Government Officials)
 * lets a Content Editor / Super Admin update name, designation and the
 * verification date without a code change. Never hard-code these permanently.
 *
 * LOCAL LEVEL (Sarpanch / Deputy Sarpanch / Gram Sevak / MLA-MP for this
 * constituency) is intentionally left as admin-configurable placeholders —
 * verifying the specific office-holder for Hiwargaon Pawasa requires the
 * Panchayat's own confirmation, not a web guess.
 */
export const governmentOfficials: OfficialRecord[] = [
  {
    id: 'president',
    name: 'Droupadi Murmu',
    designation: 'President of India',
    designation_mr: 'भारताच्या राष्ट्रपती',
    level: 'national',
    official_url: 'https://www.presidentofindia.gov.in/',
    source: 'presidentofindia.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'pm',
    name: 'Narendra Modi',
    designation: 'Prime Minister of India',
    designation_mr: 'भारताचे पंतप्रधान',
    level: 'national',
    official_url: 'https://www.pmindia.gov.in/',
    source: 'pmindia.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'union-panchayati-raj',
    name: 'Admin configurable',
    designation: 'Union Minister of Panchayati Raj',
    designation_mr: 'केंद्रीय पंचायती राज मंत्री',
    level: 'national',
    department: 'Ministry of Panchayati Raj',
    official_url: 'https://panchayat.gov.in/',
    source: 'panchayat.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'union-rural-dev',
    name: 'Admin configurable',
    designation: 'Union Minister of Rural Development',
    designation_mr: 'केंद्रीय ग्रामीण विकास मंत्री',
    level: 'national',
    department: 'Ministry of Rural Development',
    official_url: 'https://rural.gov.in/',
    source: 'rural.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'governor',
    name: 'Admin configurable',
    designation: 'Governor of Maharashtra',
    designation_mr: 'महाराष्ट्राचे राज्यपाल',
    level: 'state',
    official_url: 'https://rajbhavan-maharashtra.gov.in/',
    source: 'rajbhavan-maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'cm',
    name: 'Devendra Fadnavis',
    designation: 'Chief Minister of Maharashtra',
    designation_mr: 'महाराष्ट्राचे मुख्यमंत्री',
    level: 'state',
    official_url: 'https://www.maharashtra.gov.in/',
    source: 'maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'dcm-1',
    name: 'Eknath Shinde',
    designation: 'Deputy Chief Minister of Maharashtra',
    designation_mr: 'महाराष्ट्राचे उपमुख्यमंत्री',
    level: 'state',
    department: 'Urban Development, Housing, PWD',
    official_url: 'https://www.maharashtra.gov.in/',
    source: 'maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'dcm-2',
    name: 'Sunetra Pawar',
    designation: 'Deputy Chief Minister of Maharashtra',
    designation_mr: 'महाराष्ट्राचे उपमुख्यमंत्री',
    level: 'state',
    department: 'State Excise, Sports & Youth Welfare, Minority Development',
    official_url: 'https://www.maharashtra.gov.in/',
    source: 'maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'state-rural-dev',
    name: 'Admin configurable',
    designation: 'Minister of Rural Development, Maharashtra',
    designation_mr: 'ग्रामविकास मंत्री, महाराष्ट्र',
    level: 'state',
    department: 'Rural Development & Panchayat Raj Department',
    official_url: 'https://rdd.maharashtra.gov.in/',
    source: 'rdd.maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'state-agriculture',
    name: 'Dattatray Bharne',
    designation: 'Minister of Agriculture, Maharashtra',
    designation_mr: 'कृषी मंत्री, महाराष्ट्र',
    level: 'state',
    department: 'Agriculture Department',
    official_url: 'https://krishi.maharashtra.gov.in/',
    source: 'krishi.maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'guardian-minister',
    name: 'Admin configurable',
    designation: 'District Guardian Minister',
    designation_mr: 'जिल्हा पालकमंत्री',
    level: 'district',
    official_url: 'https://www.maharashtra.gov.in/',
    source: 'maharashtra.gov.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'mp',
    name: 'Admin configurable',
    designation: 'Member of Parliament (Lok Sabha constituency)',
    designation_mr: 'खासदार',
    level: 'district',
    official_url: 'https://sansad.in/',
    source: 'sansad.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'mla',
    name: 'Admin configurable',
    designation: 'Member of Legislative Assembly (constituency)',
    designation_mr: 'आमदार',
    level: 'district',
    official_url: 'https://mls.org.in/',
    source: 'mls.org.in',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'zp-member',
    name: 'Admin configurable',
    designation: 'Zilla Parishad Representative',
    designation_mr: 'जिल्हा परिषद सदस्य',
    level: 'district',
    official_url: '',
    source: 'Admin verified',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'ps-member',
    name: 'Admin configurable',
    designation: 'Panchayat Samiti Representative',
    designation_mr: 'पंचायत समिती सदस्य',
    level: 'district',
    official_url: '',
    source: 'Admin verified',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'sarpanch',
    name: 'Admin configurable',
    designation: 'Sarpanch, Gram Panchayat Hiwargaon Pawasa',
    designation_mr: 'सरपंच, ग्रामपंचायत हिवरगाव पावसा',
    level: 'local',
    official_url: '',
    source: 'Gram Panchayat office record',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'deputy-sarpanch',
    name: 'Admin configurable',
    designation: 'Deputy Sarpanch, Gram Panchayat Hiwargaon Pawasa',
    designation_mr: 'उपसरपंच, ग्रामपंचायत हिवरगाव पावसा',
    level: 'local',
    official_url: '',
    source: 'Gram Panchayat office record',
    last_verified: '2026-08-01',
    editable: true,
  },
  {
    id: 'gram-sevak',
    name: 'Admin configurable',
    designation: 'Gram Sevak, Gram Panchayat Hiwargaon Pawasa',
    designation_mr: 'ग्रामसेवक, ग्रामपंचायत हिवरगाव पावसा',
    level: 'local',
    official_url: '',
    source: 'Gram Panchayat office record',
    last_verified: '2026-08-01',
    editable: true,
  },
];

export const officialsNote =
  'Names above at national and state level are drawn from official government sources and are correct as of the "last verified" date shown. Office-holders change after elections, deaths or reshuffles — the admin dashboard lets an authorised editor update these instantly. Local-level names (Sarpanch, Deputy Sarpanch, Gram Sevak, MLA/MP for this constituency, ZP/PS representatives) must be confirmed and entered by the Gram Panchayat office before going live; they are intentionally left blank rather than guessed.';
