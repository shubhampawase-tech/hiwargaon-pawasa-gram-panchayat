import { useMemo, useState } from "react";
import {
  ArrowRight, BadgeIndianRupee, Building2, CalendarDays, CheckCircle2,
  ChevronLeft, ChevronRight, Droplets, FileCheck2, FileText, HeartHandshake,
  Home, Landmark, Languages, Mail, MapPin, Menu, Moon, Phone, Search,
  ShieldCheck, Sparkles, Sprout, Stethoscope, Sun, TrendingUp, Users, X
} from "lucide-react";
import eventOne from "./assets/panchayat-event-1.jpeg";
import eventTwo from "./assets/panchayat-event-2.jpeg";

const WEB3FORMS_ACCESS_KEY = "92e4d00b-fead-4de8-a6df-fdcee43cf585";

const copy = {
  mr: {
    nav:["मुख्यपृष्ठ","गावाविषयी","पदाधिकारी","सेवा","विकास","सूचना","गॅलरी","संपर्क"],
    heroEyebrow:"आपले गाव • आपली ग्रामपंचायत", heroTitle:"ग्रामपंचायत हिवरगाव पावसा",
    heroSub:"पारदर्शक प्रशासन, डिजिटल नागरिक सेवा आणि सर्वसमावेशक ग्रामविकासासाठी आधुनिक 3D अनुभव.",
    servicesBtn:"नागरिक सेवा", locationBtn:"नकाशावर पाहा", latest:"ताज्या सूचना",
    aboutTitle:"परंपरा जपत स्मार्ट ग्रामविकास", aboutText:"सेवा, शासकीय योजना, ग्रामसभा सूचना, विकासकामांची प्रगती आणि नागरिक संपर्क आता एका डिजिटल प्लॅटफॉर्मवर.",
    teamTitle:"ग्रामपंचायत पदाधिकारी", serviceTitle:"स्मार्ट नागरिक सेवा", developmentTitle:"विकासकामांचा लाईव्ह ट्रॅकर",
    noticeTitle:"सूचना व ग्रामसभा", calendarTitle:"मासिक कार्यक्रम दिनदर्शिका", galleryTitle:"ग्रामपंचायत उपक्रम",
    contactTitle:"संपर्क व तक्रार नोंदणी", mapText:"ग्रामपंचायत हिवरगाव पावसा, ता. संगमनेर",
    officeHours:"कार्यालयीन वेळ: सोम–शनि, सकाळी 10 ते सायं. 5", send:"संदेश पाठवा", sending:"पाठवत आहे...",
    sent:"संदेश यशस्वीरित्या पाठवला.", failed:"संदेश पाठवता आला नाही. पुन्हा प्रयत्न करा.", name:"पूर्ण नाव", email:"ई-मेल", phone:"मोबाईल क्रमांक", message:"तक्रार / सूचना / संदेश", noEvent:"या दिवशी कोणताही कार्यक्रम नाही.", close:"बंद करा", footer:"ग्रामपंचायत हिवरगाव पावसा • डिजिटल ग्रामविकास पोर्टल",
    finderTitle:"सेवा शोधा", finderPlaceholder:"उदा. जन्म दाखला, पाणीपट्टी...", checklist:"आवश्यक कागदपत्रे"
  },
  en: {
    nav:["Home","About","Leadership","Services","Development","Notices","Gallery","Contact"],
    heroEyebrow:"Our Village • Our Gram Panchayat", heroTitle:"Gram Panchayat Hiwargaon Pawasa",
    heroSub:"A modern 3D digital experience for transparent governance, citizen services and inclusive rural development.",
    servicesBtn:"Citizen Services", locationBtn:"View on Map", latest:"Latest Notices",
    aboutTitle:"Preserving tradition, building a smart village", aboutText:"Services, schemes, Gram Sabha notices, development progress and citizen communication in one digital platform.",
    teamTitle:"Panchayat Leadership", serviceTitle:"Smart Citizen Services", developmentTitle:"Live Development Tracker",
    noticeTitle:"Notices & Gram Sabha", calendarTitle:"Monthly Events Calendar", galleryTitle:"Panchayat Activities",
    contactTitle:"Contact & Grievance", mapText:"Gram Panchayat Hiwargaon Pawasa, Sangamner",
    officeHours:"Office hours: Monday–Saturday, 10 AM–5 PM", send:"Send message", sending:"Sending...", sent:"Message sent successfully.", failed:"Could not send the message. Please try again.", name:"Full name", email:"Email", phone:"Mobile number", message:"Complaint / suggestion / message", noEvent:"No event is scheduled on this date.", close:"Close", footer:"Gram Panchayat Hiwargaon Pawasa • Digital Village Development Portal",
    finderTitle:"Find a service", finderPlaceholder:"e.g. birth certificate, water tax...", checklist:"Required documents"
  }
};

const services=[
  {icon:FileText,mr:"जन्म दाखला",en:"Birth Certificate",docsMr:["रुग्णालय / दाई प्रमाणपत्र","पालकांचे आधारकार्ड","पत्त्याचा पुरावा"],docsEn:["Hospital certificate","Parents' Aadhaar","Address proof"]},
  {icon:FileText,mr:"मृत्यू दाखला",en:"Death Certificate",docsMr:["मृत्यू प्रमाणपत्र","अर्जदाराचे ओळखपत्र","पत्त्याचा पुरावा"],docsEn:["Medical death certificate","Applicant ID","Address proof"]},
  {icon:Home,mr:"घरपट्टी माहिती",en:"Property Tax",docsMr:["मालमत्ता क्रमांक","मालकाचे ओळखपत्र"],docsEn:["Property number","Owner ID"]},
  {icon:Droplets,mr:"पाणीपट्टी सेवा",en:"Water Tax",docsMr:["नळजोडणी क्रमांक","मागील पावती"],docsEn:["Connection number","Previous receipt"]},
  {icon:ShieldCheck,mr:"तक्रार नोंदणी",en:"Grievance",docsMr:["समस्येचा तपशील","फोटो (असल्यास)","संपर्क क्रमांक"],docsEn:["Issue details","Photo if available","Contact number"]},
  {icon:Landmark,mr:"आरटीआय अर्ज",en:"RTI Application",docsMr:["लेखी अर्ज","ओळखपत्र","निर्धारित शुल्क"],docsEn:["Written application","Identity proof","Applicable fee"]}
];

const development=[
  {mr:"मुख्य रस्ता दुरुस्ती",en:"Main road repair",progress:82,statusMr:"अंतिम टप्पा",statusEn:"Final stage"},
  {mr:"पाणी टाकी नूतनीकरण",en:"Water tank renovation",progress:64,statusMr:"काम सुरू",statusEn:"In progress"},
  {mr:"सौर दिवे बसविणे",en:"Solar street lights",progress:45,statusMr:"दुसरा टप्पा",statusEn:"Phase two"},
  {mr:"घनकचरा व्यवस्थापन",en:"Solid waste management",progress:91,statusMr:"जवळपास पूर्ण",statusEn:"Nearly complete"}
];

const events=[
  {date:"2026-07-20",mr:"पाणीपुरवठा देखभाल सूचना",en:"Water supply maintenance notice",type:"water",detailsMr:"देखभाल कामामुळे काही भागात पाणीपुरवठा मर्यादित राहू शकतो.",detailsEn:"Water supply may be limited in some areas due to maintenance work."},
  {date:"2026-08-15",mr:"स्वातंत्र्यदिन ध्वजारोहण व ग्रामसभा",en:"Independence Day ceremony and Gram Sabha",type:"meeting",detailsMr:"सकाळी ध्वजारोहणानंतर ग्रामसभा आयोजित करण्यात येईल.",detailsEn:"The Gram Sabha will be held after the morning flag-hoisting ceremony."},
  {date:"2026-08-28",mr:"महिला बचत गट मार्गदर्शन शिबिर",en:"Women SHG guidance camp",type:"scheme",detailsMr:"महिला बचत गटांसाठी शासकीय योजना व कर्ज मार्गदर्शन.",detailsEn:"Guidance on government schemes and finance for women self-help groups."},
  {date:"2026-09-05",mr:"शिक्षक दिन कार्यक्रम",en:"Teachers' Day programme",type:"event",detailsMr:"गावातील शिक्षकांच्या सन्मानासाठी विशेष कार्यक्रम.",detailsEn:"A special programme to honour teachers from the village."}
];

const monthsMr=["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"];
const monthsEn=["January","February","March","April","May","June","July","August","September","October","November","December"];
const daysMr=["रवि","सोम","मंगळ","बुध","गुरु","शुक्र","शनि"];
const daysEn=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function Calendar({lang,onSelect}){
  const [view,setView]=useState(new Date(2026,7,1));
  const year=view.getFullYear(), month=view.getMonth();
  const cells=[...Array(new Date(year,month,1).getDay()).fill(null),...Array.from({length:new Date(year,month+1,0).getDate()},(_,i)=>i+1)];
  while(cells.length%7) cells.push(null);
  const eventFor=day=>events.find(e=>e.date===`${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`);
  return <div className="calendar-wrap glass-panel"><div className="calendar-toolbar"><button onClick={()=>setView(new Date(year,month-1,1))}><ChevronLeft/></button><h3>{(lang==="mr"?monthsMr:monthsEn)[month]} {year}</h3><button onClick={()=>setView(new Date(year,month+1,1))}><ChevronRight/></button></div><div className="calendar-grid day-heads">{(lang==="mr"?daysMr:daysEn).map(d=><span key={d}>{d}</span>)}</div><div className="calendar-grid">{cells.map((day,i)=>{const ev=day?eventFor(day):null;return <button key={i} disabled={!day} className={`calendar-day ${ev?`has-event ${ev.type}`:""}`} onClick={()=>day&&onSelect({event:ev,date:new Date(year,month,day)})}>{day&&<><strong>{day}</strong>{ev&&<span>{lang==="mr"?ev.mr:ev.en}</span>}</>}</button>})}</div></div>
}

export default function App(){
  const [lang,setLang]=useState("mr"), [menuOpen,setMenuOpen]=useState(false), [dark,setDark]=useState(false);
  const [selected,setSelected]=useState(null), [query,setQuery]=useState(""), [selectedService,setSelectedService]=useState(null);
  const [formState,setFormState]=useState({status:"idle",message:""});
  const t=copy[lang], ids=["home","about","leadership","services","development","notices","gallery","contact"];
  const leaders=useMemo(()=>[["सरपंच","Sarpanch","Mr. Subhash Gadakh","SG"],["उपसरपंच","Deputy Sarpanch","Ms. Sujata Dawange","SD"],["ग्रामसेवक","Gram Sevak","Mr. Harish Gadakh","HG"]],[]);
  const filtered=services.filter(s=>(lang==="mr"?s.mr:s.en).toLowerCase().includes(query.toLowerCase()));

  async function submitForm(e){e.preventDefault();setFormState({status:"sending",message:t.sending});const form=e.currentTarget,data=new FormData(form);data.append("access_key",WEB3FORMS_ACCESS_KEY);data.append("subject","New Gram Panchayat Website Enquiry");try{const r=await fetch("https://api.web3forms.com/submit",{method:"POST",body:data});const j=await r.json();if(!j.success)throw new Error();setFormState({status:"success",message:t.sent});form.reset();}catch{setFormState({status:"error",message:t.failed});}}

  return <div className={dark?"app dark":"app"}>
    <header className="topbar"><a className="brand" href="#home"><span className="emblem">ग्रा</span><span><strong>हिवरगाव पावसा</strong><small>ग्रामपंचायत</small></span></a><nav className={menuOpen?"nav open":"nav"}>{t.nav.map((n,i)=><a key={n} href={`#${ids[i]}`} onClick={()=>setMenuOpen(false)}>{n}</a>)}</nav><div className="header-actions"><button className="icon-btn" onClick={()=>setDark(!dark)} aria-label="theme">{dark?<Sun/>:<Moon/>}</button><button className="lang-btn" onClick={()=>setLang(lang==="mr"?"en":"mr")}><Languages size={18}/>{lang==="mr"?"EN":"मराठी"}</button><button className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div></header>
    <main>
      <section className="hero" id="home"><img src={eventOne} alt="Gram Panchayat event"/><div className="hero-overlay"/><div className="orb orb-one"/><div className="orb orb-two"/><div className="hero-content"><div className="hero-badge"><Sparkles/> Smart Village 2026</div><p className="eyebrow">{t.heroEyebrow}</p><h1>{t.heroTitle}</h1><p>{t.heroSub}</p><div className="hero-buttons"><a className="btn primary" href="#services">{t.servicesBtn}<ArrowRight/></a><a className="btn glass" href="https://maps.app.goo.gl/DrBkd8Vum9N8igk97" target="_blank" rel="noreferrer"><MapPin/>{t.locationBtn}</a></div></div><div className="hero-3d-card"><div className="mini-village"><span className="sun3d"/><span className="hill3d one"/><span className="hill3d two"/><span className="house3d">⌂</span></div><strong>Digital Gram Panchayat</strong><span>Fast • Transparent • Mobile Friendly</span></div><div className="notice-strip"><span>{t.latest}</span><div className="ticker">ग्रामसभा सूचना • नागरिक सेवा अर्ज • विकासकामांची माहिती • शासकीय योजना</div></div></section>

      <section className="quick-grid"><article><ShieldCheck/><strong>24×7</strong><span>Digital Info</span></article><article><FileCheck2/><strong>6+</strong><span>Citizen Services</span></article><article><TrendingUp/><strong>4</strong><span>Live Projects</span></article><article><Users/><strong>100%</strong><span>Mobile Ready</span></article></section>

      <section className="section intro" id="about"><div><p className="kicker">SMART VILLAGE EXPERIENCE</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="feature-list"><span><ShieldCheck/> पारदर्शक प्रशासन</span><span><Users/> नागरिक सहभाग</span><span><Sprout/> शाश्वत विकास</span></div></div><div className="tilt-scene"><div className="scene-card back"/><div className="scene-card mid"/><div className="scene-card front"><Building2/><h3>एक गाव, एक डिजिटल प्रवेशद्वार</h3><p>सेवा, सूचना आणि विकासाची माहिती एका क्लिकवर.</p></div></div></section>

      <section className="section soft" id="leadership"><div className="section-head"><p className="kicker">LEADERSHIP</p><h2>{t.teamTitle}</h2></div><div className="leader-grid">{leaders.map(l=><article className="leader-card three-d" key={l[2]}><div className="leader-avatar">{l[3]}</div><p>{lang==="mr"?l[0]:l[1]}</p><h3>{l[2]}</h3><span>Gram Panchayat Hiwargaon Pawasa</span></article>)}</div></section>

      <section className="section" id="services"><div className="section-head"><p className="kicker">CITIZEN FIRST</p><h2>{t.serviceTitle}</h2></div><div className="service-finder"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.finderPlaceholder}/></div><div className="card-grid">{filtered.map(s=>{const Icon=s.icon;return <button className="service-card three-d" key={s.en} onClick={()=>setSelectedService(s)}><Icon/><div><h3>{lang==="mr"?s.mr:s.en}</h3><span>{t.checklist}</span></div><ArrowRight/></button>})}</div></section>

      <section className="section development" id="development"><div className="section-head light"><p className="kicker">LIVE TRANSPARENCY</p><h2>{t.developmentTitle}</h2></div><div className="project-grid">{development.map(p=><article key={p.en}><div className="project-top"><h3>{lang==="mr"?p.mr:p.en}</h3><span>{p.progress}%</span></div><div className="progress"><i style={{width:`${p.progress}%`}}/></div><p><CheckCircle2/>{lang==="mr"?p.statusMr:p.statusEn}</p></article>)}</div></section>

      <section className="section" id="notices"><div className="section-head"><p className="kicker">UPDATES</p><h2>{t.noticeTitle}</h2></div><div className="notices-calendar-layout"><div className="notice-list">{events.map(ev=><button className="notice-row three-d" key={ev.date} onClick={()=>setSelected({event:ev,date:new Date(`${ev.date}T00:00:00`)})}><div className="datebox"><CalendarDays/><strong>{new Date(`${ev.date}T00:00:00`).toLocaleDateString(lang==="mr"?"mr-IN":"en-IN",{day:"2-digit",month:"short"})}</strong></div><h3>{lang==="mr"?ev.mr:ev.en}</h3><ChevronRight/></button>)}</div><div><h3 className="calendar-title">{t.calendarTitle}</h3><Calendar lang={lang} onSelect={setSelected}/></div></div></section>

      <section className="section" id="gallery"><div className="section-head"><p className="kicker">PHOTO STORY</p><h2>{t.galleryTitle}</h2></div><div className="gallery-grid"><figure className="wide"><img src={eventOne} alt="Gram Panchayat programme"/><figcaption>ग्रामपंचायत कार्यक्रम</figcaption></figure><figure><img src={eventTwo} alt="Village event"/><figcaption>ग्रामस्थ व विद्यार्थी सहभाग</figcaption></figure><div className="gallery-placeholder"><Building2/><span>विकासकामांचे फोटो येथे जोडा</span></div></div></section>

      <section className="section contact" id="contact"><div className="contact-info"><p className="kicker">CONTACT</p><h2>{t.contactTitle}</h2><p><MapPin/> {t.mapText}</p><p><Phone/> ग्रामपंचायत संपर्क: अद्ययावत करणे बाकी</p><p><Mail/> अधिकृत ई-मेल: अद्ययावत करणे बाकी</p><p><CalendarDays/> {t.officeHours}</p><a className="btn primary" href="https://maps.app.goo.gl/DrBkd8Vum9N8igk97" target="_blank" rel="noreferrer"><MapPin/>{t.locationBtn}</a></div><form className="contact-form three-d" onSubmit={submitForm}><input name="name" placeholder={t.name} required/><input type="email" name="email" placeholder={t.email} required/><input type="tel" name="phone" placeholder={t.phone} required/><textarea name="message" rows="5" placeholder={t.message} required/><button className="btn primary" type="submit" disabled={formState.status==="sending"}>{formState.status==="sending"?t.sending:t.send}<ArrowRight/></button>{formState.message&&<p className={`form-message ${formState.status}`}>{formState.message}</p>}</form></section>
    </main>
    <footer><div className="brand footer-brand"><span className="emblem">ग्रा</span><span><strong>हिवरगाव पावसा</strong><small>ग्रामपंचायत</small></span></div><p>{t.footer}</p><p>© {new Date().getFullYear()} All rights reserved.</p></footer>
    {selectedService&&<div className="event-modal" onClick={()=>setSelectedService(null)}><div className="event-modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedService(null)}><X/></button><FileCheck2 className="modal-icon"/><h3>{lang==="mr"?selectedService.mr:selectedService.en}</h3><p className="modal-date">{t.checklist}</p><ul>{(lang==="mr"?selectedService.docsMr:selectedService.docsEn).map(d=><li key={d}><CheckCircle2/>{d}</li>)}</ul><a className="btn primary" href="#contact" onClick={()=>setSelectedService(null)}>{lang==="mr"?"अर्जासाठी संपर्क करा":"Contact to apply"}</a></div></div>}
    {selected&&<div className="event-modal" onClick={()=>setSelected(null)}><div className="event-modal-card" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}><X/></button><CalendarDays className="modal-icon"/><p className="modal-date">{selected.date.toLocaleDateString(lang==="mr"?"mr-IN":"en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</p>{selected.event?<><h3>{lang==="mr"?selected.event.mr:selected.event.en}</h3><p>{lang==="mr"?selected.event.detailsMr:selected.event.detailsEn}</p></>:<h3>{t.noEvent}</h3>}<button className="btn primary" onClick={()=>setSelected(null)}>{t.close}</button></div></div>}
  </div>
}
