import type { ApplicationRecord, BillRecord, ComplaintRecord, NoticeRecord, ProjectRecord, SchemeRecord } from '../types';
const seed = {
 applications:[{id:'1',application_no:'GPHP-2026-0001',service:'Residence Certificate',applicant:'Demo Citizen',mobile:'9999999999',status:'Under verification',created_at:new Date().toISOString()}] as ApplicationRecord[],
 complaints:[{id:'1',complaint_no:'CMP-2026-0001',category:'Streetlight',description:'Streetlight not working near school',location:'Ward 1',status:'Assigned',priority:'Medium',created_at:new Date().toISOString()}] as ComplaintRecord[],
 bills:[{id:'1',bill_no:'PT-2026-001',type:'Property Tax',owner:'Demo Citizen',reference_no:'PROP-001',amount:1250,due_date:'2026-09-30',status:'unpaid'}] as BillRecord[],
 notices:[{id:'1',title:'ग्रामसभा सूचना',category:'Gram Sabha',body:'आगामी ग्रामसभा ग्रामपंचायत कार्यालयात आयोजित करण्यात आली आहे.',published_at:new Date().toISOString(),pinned:true}] as NoticeRecord[],
 schemes:[{id:'1',title:'प्रधानमंत्री किसान सन्मान निधी',category:'Farmers',department:'Agriculture',description:'Eligible farmers receive financial support.',eligibility:'As per official government criteria',official_url:'https://pmkisan.gov.in'}] as SchemeRecord[],
 projects:[{id:'1',name:'Village Internal Road Improvement',department:'Rural Development',sanctioned:1200000,spent:720000,progress:60,status:'In progress'}] as ProjectRecord[]
};
export type StoreKey=keyof typeof seed;
export function getItems(key:StoreKey):any[]{ const raw=localStorage.getItem(`gp_${key}`); if(!raw){localStorage.setItem(`gp_${key}`,JSON.stringify(seed[key])); return [...seed[key]];} return JSON.parse(raw); }
export function setItems(key:StoreKey,value:any[]){localStorage.setItem(`gp_${key}`,JSON.stringify(value));}
export const makeNo=(prefix:string)=>`${prefix}-${new Date().getFullYear()}-${Math.floor(100000+Math.random()*900000)}`;
