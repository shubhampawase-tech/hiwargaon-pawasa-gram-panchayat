export type Language = 'mr' | 'hi' | 'en';
export type Role = 'citizen'|'super_admin'|'gram_sevak'|'sarpanch'|'deputy_sarpanch'|'tax_officer'|'water_operator'|'complaint_officer'|'content_editor'|'accountant'|'auditor';
export interface UserProfile { id:string; full_name:string; email?:string; mobile?:string; role:Role; ward?:string; preferred_language:Language; }
export interface ApplicationRecord { id:string; application_no:string; service:string; applicant:string; mobile:string; status:string; created_at:string; remarks?:string; documents?:string[]; }
export interface ComplaintRecord { id:string; complaint_no:string; category:string; description:string; location:string; status:string; priority:string; created_at:string; }
export interface BillRecord { id:string; bill_no:string; type:string; owner:string; reference_no:string; amount:number; due_date:string; status:'paid'|'unpaid'|'pending'; }
export interface NoticeRecord { id:string; title:string; category:string; body:string; published_at:string; pinned?:boolean; }
export interface SchemeRecord { id:string; title:string; category:string; department:string; description:string; eligibility:string; official_url?:string; }
export interface ProjectRecord { id:string; name:string; department:string; sanctioned:number; spent:number; progress:number; status:string; }
