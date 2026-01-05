import React, { useState, useEffect } from 'react';
import { Language, translations } from '../translations';

interface BadgeProps {
  /* children is made optional to satisfy TypeScript's JSX requirements in some environments where the children prop isn't automatically inferred from nesting */
  children?: React.ReactNode;
  color?: string;
}

const Badge = ({ children, color = "teal" }: BadgeProps) => {
  const colorMap: Record<string, string> = {
    teal: "bg-teal-50 text-teal-600 border-teal-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    slate: "bg-slate-50 text-slate-600 border-slate-100"
  };

  const classes = colorMap[color] || colorMap.teal;

  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter border ${classes}`}>
      {children}
    </span>
  );
};

interface CheatSheetScreenProps {
  onBack: () => void;
  lang: Language;
  initialDomainId?: number;
}

const CheatSheetScreen: React.FC<CheatSheetScreenProps> = ({ onBack, lang, initialDomainId }) => {
  const t = translations[lang];
  const [selectedDomain, setSelectedDomain] = useState<number | null>(initialDomainId || null);
  const isAr = lang === 'ar';

  const domains = [
    { id: 1, title: isAr ? "الواجهة والتكوين" : "UI & Configuration", icon: "📱", color: "teal", desc: "Banner, Navigator, Lists & Forms" },
    { id: 2, title: isAr ? "التعاون والتواصل" : "Collaboration", icon: "👥", color: "indigo", desc: "Branding, Notifications & Chat" },
    { id: 3, title: isAr ? "قواعد البيانات" : "Database Admin", icon: "🗄️", color: "amber", desc: "Tables, ACLs & Import Sets" },
    { id: 4, title: isAr ? "أتمتة الخدمات" : "Service Automation", icon: "⚡", color: "rose", desc: "Catalog, Flows & SLAs" },
    { id: 5, title: isAr ? "تطوير التطبيقات" : "App Development", icon: "🛠️", color: "purple", desc: "Scripts, UI Policies & ATF" }
  ];

  const handleSelect = (id: number) => {
    setSelectedDomain(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-6 md:py-10 animate-fadeIn">
      
      {/* 1. SELECTION VIEW: Displayed when no domain is selected */}
      {!selectedDomain ? (
        <div className="space-y-12 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-800">{isAr ? 'دليل المعرفة الشامل' : 'Knowledge Hub'}</h2>
              <p className="text-slate-500 font-medium">{isAr ? 'اختر مجالاً للبدء في مراجعة المفاهيم الأساسية' : 'Select a domain to begin reviewing core concepts.'}</p>
            </div>
            <button onClick={onBack} className="text-slate-400 hover:text-teal-600 font-black uppercase text-xs tracking-widest transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.back}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d) => (
              <button
                key={d.id}
                onClick={() => handleSelect(d.id)}
                className="group p-8 bg-white border border-slate-200 rounded-[2rem] text-start hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 relative overflow-hidden flex flex-col gap-6"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-transform group-hover:scale-110 group-hover:rotate-6 ${
                  d.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                  d.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                  d.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                  d.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 mb-1">{d.title}</h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{d.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-teal-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {isAr ? 'عرض التفاصيل' : 'View Details'}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        
        /* 2. CONTENT VIEW: Full screen content after selection */
        <div className="animate-slideUp space-y-8">
          <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 sticky top-20 z-50">
            <button onClick={() => setSelectedDomain(null)} className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-black uppercase text-[10px] tracking-widest transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isAr ? 'العودة للمجالات' : 'Back to Domains'}
            </button>
            <div className="flex items-center gap-3">
               <span className="text-xl">{domains.find(d => d.id === selectedDomain)?.icon}</span>
               <h4 className="font-black text-slate-800 text-sm uppercase tracking-tight">{domains.find(d => d.id === selectedDomain)?.title}</h4>
            </div>
          </div>

          <main className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-16 space-y-12" dir="ltr">
              
              {/* Domain 1 Content */}
              {selectedDomain === 1 && (
                <div className="animate-fadeIn space-y-10">
                  <header className="border-b-4 border-teal-500 pb-6">
                    {/* Fixed: TypeScript error by making children optional in BadgeProps */}
                    <Badge color="teal">Domain 01</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-[#293e40] mt-2">UI & Configuration</h1>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                        <h3 className="text-lg font-black text-teal-600 uppercase tracking-widest">Banner Elements</h3>
                        <ul className="space-y-3 text-base font-bold text-slate-600">
                          <li>• Global Search: Platform-wide indexing.</li>
                          <li>• Impersonate: View as any user (logs record).</li>
                          <li>• Elevate Roles: Temporary security access.</li>
                        </ul>
                     </section>
                     <section className="bg-[#293e40] p-8 rounded-3xl text-white space-y-4 shadow-xl">
                        <h3 className="text-lg font-black text-teal-400 uppercase tracking-widest">Application Navigator</h3>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                              <span className="block text-3xl mb-2">⭐</span>
                              <h4 className="font-black mb-1">Favorites</h4>
                              <p className="text-[10px] text-slate-400">Pencil icon edits label/color.</p>
                           </div>
                           <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                              <span className="block text-3xl mb-2">🕒</span>
                              <h4 className="font-black mb-1">History</h4>
                              <p className="text-[10px] text-slate-400">Records, Lists, Forms (No Pages).</p>
                           </div>
                        </div>
                     </section>
                  </div>

                  <div className="bg-indigo-50 p-10 rounded-[2rem] border-2 border-indigo-100">
                     <h3 className="text-2xl font-black text-indigo-900 mb-6 text-center">List Customization Matrix</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-200">
                           <h4 className="text-sm font-black text-slate-900 uppercase mb-2 flex items-center gap-2">⚙️ Personalize (Mechanic)</h4>
                           <p className="text-xs text-slate-500">Individual view only. Available to everyone.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-200">
                           <h4 className="text-sm font-black text-slate-900 uppercase mb-2 flex items-center gap-2">🛠️ Configure Layout</h4>
                           <p className="text-xs text-slate-500">Global default view. Required 'admin' role.</p>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* Domain 2 Content */}
              {selectedDomain === 2 && (
                <div className="animate-fadeIn space-y-10">
                  <header className="border-b-4 border-indigo-500 pb-6">
                    {/* Fixed: TypeScript error by making children optional in BadgeProps */}
                    <Badge color="indigo">Domain 02</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-[#293e40] mt-2">Collaboration</h1>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-lg">
                        <h4 className="font-black text-slate-800 mb-3 text-lg uppercase">Branding</h4>
                        <p className="text-sm text-slate-500 italic"><b>Module:</b> Basic Configuration UI16. Controls Logo, Colors, and Title.</p>
                     </div>
                     <div className="bg-teal-50 border border-teal-100 p-8 rounded-3xl shadow-lg">
                        <h4 className="font-black text-teal-800 mb-3 text-lg uppercase">Connect Chat</h4>
                        <p className="text-sm text-teal-700 italic">Real-time collaboration sidebar for instant user-to-user messaging.</p>
                     </div>
                     <div className="bg-[#293e40] p-8 rounded-3xl shadow-lg text-white">
                        <h4 className="font-black text-teal-400 mb-3 text-lg uppercase">Notifications</h4>
                        <ul className="text-xs space-y-3 text-slate-300">
                          <li><b>Trigger:</b> When record is changed or event occurs.</li>
                          <li><b>Recipients:</b> Users, Groups, or Field references.</li>
                          <li><b>Content:</b> The "What" of the message.</li>
                        </ul>
                     </div>
                  </div>
                </div>
              )}

              {/* Domain 3 Content */}
              {selectedDomain === 3 && (
                <div className="animate-fadeIn space-y-10">
                  <header className="border-b-4 border-amber-500 pb-6">
                    {/* Fixed: TypeScript error by making children optional in BadgeProps */}
                    <Badge color="amber">Domain 03</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-[#293e40] mt-2">Database Admin</h1>
                  </header>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <div className="border border-slate-200 p-8 rounded-3xl bg-slate-50">
                        <h4 className="font-black text-slate-800 mb-4 text-xl">Table Hierarchy</h4>
                        <div className="space-y-4">
                           <div className="p-4 bg-white rounded-xl border-l-8 border-slate-400 font-bold text-sm">
                             Base Table: Extends nothing (Task).
                           </div>
                           <div className="p-4 bg-white rounded-xl border-l-8 border-amber-400 font-bold text-sm">
                             Core Table: Built-in (Incident, User).
                           </div>
                           <div className="p-4 bg-white rounded-xl border-l-8 border-teal-400 font-bold text-sm">
                             Custom Table: Created by User (u_).
                           </div>
                        </div>
                     </div>
                     <div className="bg-indigo-900 text-white p-8 rounded-3xl flex flex-col justify-center gap-6 shadow-2xl">
                        <h4 className="font-black text-teal-400 uppercase tracking-widest">Import Set Workflow</h4>
                        <div className="flex flex-col gap-4 text-sm font-black">
                           <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                              <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">1</span>
                              Load Data to Staging Table
                           </div>
                           <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                              <span className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">2</span>
                              Transform Map (Mapping Assist)
                           </div>
                           <div className="flex items-center gap-4 bg-teal-500 p-4 rounded-xl text-white">
                              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">3</span>
                              Run Transform to Target Table
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* Domain 4 Content */}
              {selectedDomain === 4 && (
                <div className="animate-fadeIn space-y-10">
                  <header className="border-b-4 border-rose-500 pb-6">
                    {/* Fixed: TypeScript error by making children optional in BadgeProps */}
                    <Badge color="rose">Domain 04</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-[#293e40] mt-2">Service Automation</h1>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-6">
                        <h3 className="text-2xl font-black text-rose-600">Catalog Structure</h3>
                        <div className="grid grid-cols-1 gap-4">
                           <div className="bg-white p-6 border-2 border-slate-50 rounded-2xl shadow-xl flex items-center gap-4">
                              <span className="text-4xl">📦</span>
                              <div className="font-bold">Catalog Items: Base building blocks.</div>
                           </div>
                           <div className="bg-white p-6 border-2 border-slate-50 rounded-2xl shadow-xl flex items-center gap-4">
                              <span className="text-4xl">📋</span>
                              <div className="font-bold">Record Producers: Create Task records.</div>
                           </div>
                           <div className="bg-white p-6 border-2 border-slate-50 rounded-2xl shadow-xl flex items-center gap-4">
                              <span className="text-4xl">🔗</span>
                              <div className="font-bold">Order Guides: Multiple items grouped.</div>
                           </div>
                        </div>
                     </div>
                     <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl space-y-6">
                        <h3 className="text-xl font-black text-teal-400 uppercase tracking-widest">Flow Designer</h3>
                        <div className="space-y-4 border-l-2 border-white/20 pl-6 text-base font-medium text-slate-300">
                           <p><b className="text-white">Triggers:</b> When flow starts (Record or Time).</p>
                           <p><b className="text-white">Actions:</b> What flow does (Approvals, Tasks).</p>
                           <p><b className="text-white">Data Pills:</b> Values passed between steps.</p>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* Domain 5 Content */}
              {selectedDomain === 5 && (
                <div className="animate-fadeIn space-y-10">
                  <header className="border-b-4 border-purple-500 pb-6">
                    {/* Fixed: TypeScript error by making children optional in BadgeProps */}
                    <Badge color="purple">Domain 05</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-[#293e40] mt-2">App Development</h1>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-bold">
                     <div className="bg-purple-50 p-10 rounded-[2.5rem] border border-purple-100 shadow-inner">
                        <h4 className="text-purple-800 mb-4 uppercase text-sm">Client-Side</h4>
                        <ul className="space-y-3 list-disc pl-5 text-slate-700">
                           <li>UI Policy: No-code form behavior.</li>
                           <li>Client Scripts: Browser-side JS.</li>
                        </ul>
                     </div>
                     <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 shadow-inner">
                        <h4 className="text-slate-800 mb-4 uppercase text-sm">Server-Side</h4>
                        <ul className="space-y-3 list-disc pl-5 text-slate-700">
                           <li>Business Rules: DB-triggered JS.</li>
                           <li>Data Policy: Constant server rules.</li>
                        </ul>
                     </div>
                  </div>
                  <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-[2rem]">
                     <span className="text-slate-400 font-black uppercase tracking-[0.5em]">Update Sets • ATF • Dictionary Overrides</span>
                  </div>
                </div>
              )}

            </div>
          </main>
          
          <div className="flex justify-center pt-8">
            <button 
              onClick={() => setSelectedDomain(null)}
              className="h-16 px-12 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95"
            >
              {isAr ? 'العودة لاختيار مجال آخر' : 'Back to Domains'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheatSheetScreen;