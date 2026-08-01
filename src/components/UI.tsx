import type { ReactNode } from 'react';
export const Page=({title,subtitle,children}:{title:string;subtitle?:string;children:ReactNode})=><div className="max-w-7xl mx-auto px-4 py-10"><div className="mb-8"><h2 className="text-3xl font-bold text-green-900 dark:text-green-300">{title}</h2>{subtitle&&<p className="text-slate-600 dark:text-slate-300 mt-2">{subtitle}</p>}</div>{children}</div>;
export const Card=({children,className=''}:{children:ReactNode;className?:string})=><div className={`card ${className}`}>{children}</div>;
export const Stat=({label,value}:{label:string;value:string|number})=><div className="card"><p className="text-sm text-slate-500">{label}</p><p className="text-2xl font-bold mt-2">{value}</p></div>;
export const Empty=({text='No records found'}:{text?:string})=><div className="card text-center text-slate-500 py-12">{text}</div>;
