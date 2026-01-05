
import React, { useState } from 'react';
import { Language, translations } from '../translations';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  color?: string;
}

const InfoSection: React.FC<SectionProps> = ({ title, children, icon, color = "teal" }) => (
  <div className="space-y-4">
    <div className={`flex items-center gap-3 border-b-2 pb-2 ${
      color === 'indigo' ? 'border-indigo-100' : 
      color === 'amber' ? 'border-amber-100' : 
      color === 'rose' ? 'border-rose-100' : 
      color === 'purple' ? 'border-purple-100' : 
      'border-teal-100'
    }`}>
      {icon && <span className="text-xl">{icon}</span>}
      <h3 className={`text-lg font-black uppercase tracking-tight ${
        color === 'indigo' ? 'text-indigo-700' : 
        color === 'amber' ? 'text-amber-700' : 
        color === 'rose' ? 'text-rose-700' : 
        color === 'purple' ? 'text-purple-700' : 
        'text-teal-700'
      }`}>{title}</h3>
    </div>
    <div className="space-y-3 text-slate-600 font-medium leading-relaxed">
      {children}
    </div>
  </div>
);

const StudyGuideScreen: React.FC<{ onBack: () => void, lang: Language }> = ({ onBack, lang }) => {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);
  
  const isAr = lang === 'ar';
  const t = translations[lang];
  
  const domains = [
    { id: 1, title: isAr ? "الواجهة والتكوين" : "UI & Navigation", weight: "20%", icon: "📱", color: "teal" },
    { id: 2, title: isAr ? "التعاون" : "Collaboration", weight: "20%", icon: "👥", color: "indigo" },
    { id: 3, title: isAr ? "إدارة قواعد البيانات" : "Database Admin", weight: "30%", icon: "🗄️", color: "amber" },
    { id: 4, title: isAr ? "أتمتة الخدمات" : "Service Automation", weight: "20%", icon: "⚡", color: "rose" },
    { id: 5, title: isAr ? "مقدمة في التطوير" : "Intro to Dev", weight: "10%", icon: "🛠️", color: "purple" }
  ];

  const renderContent = () => {
    switch (selectedDomain) {
      case 1:
        return (
          <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn" dir="ltr">
            <header className="border-b-4 border-teal-500 pb-4">
              <h1 className="text-4xl font-black text-[#293e40]">USER INTERFACE AND NAVIGATION (20%)</h1>
            </header>
            <div className="grid grid-cols-1 gap-12">
              <InfoSection title="SERVICENOW OVERVIEW" icon="🚀" color="teal">
                <ul className="list-disc pl-5 space-y-2 font-bold text-slate-600">
                  <li>Now platform is an Application Platform as a Service (aPaaS)</li>
                  <li>Supports IT Workflows, Employee Workflows, Customer Workflows, and Creator Workflows</li>
                  <li>Single data model built on table schema (flexible)</li>
                  <li>Multi-Instance cloud-based: Each instance is a single software stack</li>
                  <li>Advanced High Availability Architecture (AHA): Transfer in &lt; 7 mins without downtime</li>
                  <li>Check realtime instance availability on HI (Hosted Instance)</li>
                  <li>Backups: 4 weekly full backups and 6 days of daily differential backups</li>
                </ul>
              </InfoSection>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn" dir="ltr">
            <header className="border-b-4 border-indigo-500 pb-4">
              <h1 className="text-4xl font-black text-[#293e40]">COLLABORATION (20%)</h1>
            </header>
            <div className="grid grid-cols-1 gap-12">
              <InfoSection title="TASK MANAGEMENT" icon="✅" color="indigo">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>A task is any record that can be assigned or completed by a user in ServiceNow.</li>
                  <li>The Task table is one of ServiceNow’s core tables. Standard fields like Created by and Due date are available to extended tables.</li>
                  <li>Assignment rules are used to automatically set a value in the Assigned to and/or Assignment group fields.</li>
                  <li>Predictive Intelligence uses machine-learning to populate Category, Service, Priority, Assignment group, and Assigned to.</li>
                  <li>Visual Task Boards (VTB) types: Guided (lane updates data), Flexible (no data update), Freeform (personal organizer).</li>
                </ul>
              </InfoSection>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn" dir="ltr">
            <header className="border-b-4 border-amber-500 pb-4">
              <h1 className="text-4xl font-black text-[#293e40]">DATABASE ADMINISTRATION (30%)</h1>
            </header>
            <div className="grid grid-cols-1 gap-12">
              <InfoSection title="DATA SCHEMA" icon="🧱" color="amber">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Everything in ServiceNow is built on a relational database containing data which can be accessed through the Now Platform Next Experience.</li>
                  <li>The ServiceNow Infrastructure includes tables, records, and fields.</li>
                  <li>Tables contain records. Records correspond to rows in a table.</li>
                  <li>A field is an individual piece of data in a record that corresponds to a column in the table.</li>
                  <li>Applications use tables and records to manage data and processes, such as Incident, Problem, and CMDB.</li>
                  <li>Tables can extend other tables, creating Parent and Child tables.</li>
                  <li>Schema Map: Provides a graphical representation of the relationships between tables.</li>
                  <li>Records are identified by a 32-character, globally unique ID, called a sys_id</li>
                  <li>Field Attributes:
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>Field Name: System-friendly unique term that the system uses to identify the field.</li>
                      <li>Field Label: User-friendly name which allows people to identify the field in the UI.</li>
                      <li>Field Values: Actual data contained in the field.</li>
                    </ul>
                  </li>
                  <li>A reference field takes information from another table (target table) to display on another table (Source Table)</li>
                  <li>Table Relationships:
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 font-medium opacity-80">
                      <li>One-to-many: (3)</li>
                      <ul className="list-[square] pl-8 mt-1 space-y-1">
                        <li>Reference Fields: Allows a user to select a record on a table defined by the reference field.</li>
                        <li>Glide List: Allows a user to select multiple records on a table defined by the glide list.</li>
                        <li>Document ID Fields: Allows a user to select a record on any table in the instance.</li>
                      </ul>
                      <li>Many-to-Many (M2M): Two or more tables can be related in a bi-directional relationship so that the related records are visible from both tables in a related list.</li>
                    </ul>
                  </li>
                  <li>Database Views: A database view defines table joins for reporting purposes.</li>
                  <li>Extensions: The extended table includes unique fields plus all of the fields and their properties from the parent table.</li>
                  <li>Core Table: A table that exists in the ServiceNow Base system. Examples, Task, Incident, User.</li>
                  <li>Base Table: A table that serves as a “base” from which other tables may extend. Example, Task Table</li>
                  <li>Parent Table: A table that has children (extended by another table). Example, Task table is extended by Incident and Problem tables.</li>
                </ul>
              </InfoSection>
              <InfoSection title="APPLICATION/ACCESS CONTROL" icon="🛡️" color="amber">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>ServiceNow provides several levels of security before an end user has the capability to perform CRUD functions.</li>
                  <li>User Authentication/Login: Refers to Users, Groups, and Roles.</li>
                  <li>Application and Modules Access: Controlled by roles configured at the Application and Module levels.</li>
                  <li>Database Access: Access to tables, records, and fields are controlled via globally defined system properties and level access controls.</li>
                  <li>THREE security modules:
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>All > System Properties > Security</li>
                      <li>All > System Security > Access Control (ACL)</li>
                      <li>All > System Security > High Security Settings</li>
                    </ul>
                  </li>
                  <li>Access Control List (ACL): Contains all of an instances Access Control rules. Managed by users with security_admin role.</li>
                  <li>Users with the admin role cannot impersonate a security_admin</li>
                  <li>Non-admin users can not impersonate users with admin role</li>
                  <li>Role > Condition > Script is the order for ACLs</li>
                  <li>Table level access evaluation syntax: Table.None ; Table.* ; Table.field</li>
                </ul>
              </InfoSection>
              <InfoSection title="CMDB" icon="🔍" color="amber">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>CMDB is managed by the configuration management process and serves as the foundation for Service Management, Asset Management, etc.</li>
                  <li>Configuration Item (CI): Any component that needs to be managed in order to deliver services.</li>
                  <li>Key System Tables: cmdb, cmdb_ci, cmdb_rel_ci.</li>
                  <li>Origin stems from the Information Technology Infrastructure Library (ITIL).</li>
                  <li>Discovery: Scans network to inventory devices and updates the CMDB.</li>
                  <li>Service Mapping: Top-down discovery to model IT components comprising a Service.</li>
                  <li>CSDM (Common Service Data Model): Framework across products and platform supporting multiple configuration strategies.</li>
                </ul>
              </InfoSection>
              <InfoSection title="IMPORT SETS" icon="📥" color="amber">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Import Set: A tool to import data from sources and map that data into ServiceNow tables.</li>
                  <li>ROLES: admin or import_admin can manage all aspects.</li>
                  <li>Import Set Table: acts as a staging area for records imported from a data source.</li>
                  <li>Transform Maps: provide a guide for moving data from staging to “Target” tables.</li>
                  <li>Coalesce: Unique key during imports.
                    <ul className="list-[circle] pl-6 mt-2 space-y-2 font-medium opacity-80">
                      <li>If a match is found, the existing record is updated.</li>
                      <li>If a match is not found, a new record is inserted.</li>
                    </ul>
                  </li>
                  <li>No-Coalesce: All rows are treated as new records.</li>
                </ul>
              </InfoSection>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn" dir="ltr">
            <header className="border-b-4 border-rose-500 pb-4">
              <h1 className="text-4xl font-black text-[#293e40]">SELF-SERVICE AND PROCESS AUTOMATION (20%)</h1>
            </header>
            <div className="grid grid-cols-1 gap-12">
              <InfoSection title="KNOWLEDGE MANAGEMENT" icon="📚" color="rose">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Knowledge management provides a centralized location for the creation, categorization, viewing, and governance of information.</li>
                  <li>Access via platform UI or Knowledge Management Service Portal (knowledge portal).</li>
                  <li>Import articles: Import Microsoft Word files into a knowledge base. Preserves styles like Titles, Links, Tables.</li>
                  <li>User Criteria: canRead, cantRead, canContribute, cantContribute.</li>
                  <li>Virtual Agent: Conversational messaging interface answering FAQs and resolved multi-step problems.</li>
                </ul>
              </InfoSection>
              <InfoSection title="SERVICE CATALOG" icon="🛒" color="rose">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Products (Hardware, Software) and Services (Password reset, Support).</li>
                  <li>Major Components: Catalog Items, Record Producers (create task records), Order Guides (group related items).</li>
                  <li>Request Hierarchy: REQ (Order Number) > RITM (Individual Item) > SCTASK (Catalog Task).</li>
                </ul>
              </InfoSection>
              <InfoSection title="FLOW DESIGNER" icon="⚡" color="rose">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Non-technical interface for building flows to automate business logic.</li>
                  <li>Benefits: Build and visualize processes in a single environment, natural-language descriptions.</li>
                  <li>Consists of a trigger (Record, Schedule, or Application based) and one or more actions.</li>
                  <li>Data pills represent output results and can be used in subsequent actions via drag and drop.</li>
                </ul>
              </InfoSection>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn" dir="ltr">
            <header className="border-b-4 border-purple-500 pb-4">
              <h1 className="text-4xl font-black text-[#293e40]">INTRO TO DEVELOPMENT (10%)</h1>
            </header>

            <div className="grid grid-cols-1 gap-12">
              {/* SCRIPTING */}
              <InfoSection title="SCRIPTING" icon="📜" color="purple">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Scripting in ServiceNow or Platform Scripting is the customization of an instance and/or applications using JavaScript.</li>
                  <li>JavaScript may execute on the client side (web browser) or the server side (ServiceNow Database).</li>
                  <li>User Interface (UI) Policy: A rule that is applied to a form to dynamically change information or the form itself.
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>UI Policies execute on the client side.</li>
                      <li>Use to set fields to: Mandatory or Optional, Hidden or Visible, Read-only or Editable.</li>
                    </ul>
                  </li>
                  <li>Data Policy: A rule that enforces data consistency by setting fields as mandatory and/or read-only. Standardizes data across ServiceNow Applications.</li>
                  <li>UI Actions: Add buttons, links, and context menu items on forms and lists.
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>Define custom functionality.</li>
                      <li>Include: Form buttons, Context Menus, Form Links, List Buttons, List Choices, etc.</li>
                    </ul>
                  </li>
                  <li>Client Scripts: make “real-time” changes to the appearance of the user interface, especially forms.
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>Supported: onCellEdit(), onChange(), onLoad(), onSubmit().</li>
                    </ul>
                  </li>
                  <li>Business Rules: Configured to run when a record is displayed, inserted, updated, deleted, or queried.
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>Can be set to run before or after the database action has occurred.</li>
                      <li>Timing: Before, After, Async (queued), Display.</li>
                      <li>MOST CUSTOMIZATION HAPPENS VIA BUSINESS RULES.</li>
                      <li>Business Rules are not real-time. They monitor records as they are inserted or updated.</li>
                    </ul>
                  </li>
                  <li>Plugins: Offer additional system functionality within an instance.</li>
                </ul>
              </InfoSection>

              {/* MIGRATION AND INTEGRATION */}
              <InfoSection title="MIGRATION AND INTEGRATION" icon="🚚" color="purple">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Update Set: A group of customizations that can be moved from one instance to another.</li>
                  <li>Captured in Update Set: Business Rules, Client Scripts, Fields (structure), Forms, Reports, Tables, Views, Roles, Published Workflows.</li>
                  <li>NOT Captured by Update Sets: New Data Records, Modified Data Records, Tasks, Modified CIs, New Users and Groups, Schedules, Scheduled Jobs, Dashboards.</li>
                  <li>Processing an Update Set: Retrieve, Preview, Commit.</li>
                  <li>Recommended limit: 100 records or fewer to reduce potential conflicts.</li>
                </ul>
              </InfoSection>

              {/* DEVELOPMENT */}
              <InfoSection title="DEVELOPMENT" icon="🏗️" color="purple">
                <ul className="list-disc pl-5 space-y-4 font-bold text-slate-600">
                  <li>Why Develop Custom Apps? Replace outdated apps, extend service delivery, extend value of ServiceNow, increase automation.</li>
                  <li>App Engine Studio (AES): Low-code development for building apps quickly using templates or from scratch. Add data, experience, logic, and security.</li>
                  <li>Delegated Developers: non-administrator users/groups assigned specific permissions:
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>Permissions: All File Types, Integrations, Reporting, Workflow, Service Catalog, Service Portal, Flow Designer, Tables & Forms, Manage ACLs & Roles, Allow Scripting.</li>
                    </ul>
                  </li>
                  <li>Application Scopes: Protects applications by restricting access to artifacts and data.
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 font-medium opacity-80">
                      <li>Prefix for scoped apps: x_</li>
                      <li>Prefix for global custom apps: u_</li>
                    </ul>
                  </li>
                  <li>Automated Test Framework (ATF): Create and run automated tests. Mimics user actions with no scripting. Creates a Test Result Record.</li>
                  <li>PDI: Personal Development Instance.</li>
                  <li>Recommended deployment cycle: Develop (Dev Instance) > Test (Test Instance) > deploy to Production Instance.</li>
                  <li>Guided Application Creator (GAC): Intuitive interface providing a step-by-step process for initial app development. (Does not support Edge or IE11).</li>
                </ul>
              </InfoSection>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4 md:py-6 animate-fadeIn flex flex-col h-full min-h-[85vh]">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="space-y-1 text-center md:text-start">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            {isAr ? 'دليل مراجعة CSA المعتمد' : 'CSA Certified Study Guide'}
          </h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            {isAr ? 'مخطط مراجعة 2024 - المحتوى الكامل مكتمل' : '2024 Revision Blueprint - Full Content Complete'}
          </p>
        </div>

        <button onClick={onBack} className="text-slate-400 hover:text-rose-500 font-black uppercase text-xs tracking-widest flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.back}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative min-h-[600px]">
        
        <div className="flex flex-col h-full">
          {!selectedDomain ? (
            /* DOMAIN SELECTION GRID */
            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn pb-10">
                {domains.map(d => (
                  <button 
                    key={d.id} 
                    onClick={() => setSelectedDomain(d.id)} 
                    className={`group p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] text-start hover:border-${d.color}-500 hover:bg-white transition-all hover:shadow-xl`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-4xl group-hover:scale-110 transition-transform">{d.icon}</div>
                      <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-black text-slate-500">{d.weight}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-800 mb-1">{d.title}</h3>
                    <p className={`text-xs text-${d.color}-600 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity`}>
                      {isAr ? 'عرض محتوى المجال' : 'View Content'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* CONTENT VIEW */
            <div className="flex flex-col h-full animate-slideUp">
              <div className="bg-white border-b border-slate-100 p-4 px-8 flex items-center justify-between sticky top-0 z-10">
                <button 
                  onClick={() => setSelectedDomain(null)} 
                  className="flex items-center gap-2 text-teal-600 font-black uppercase text-[10px] tracking-widest hover:translate-x-[-4px] transition-transform"
                >
                  {isAr ? '← العودة للقائمة' : '← Back to List'}
                </button>
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-[0.3em]">
                  {domains.find(d => d.id === selectedDomain)?.title}
                </h4>
              </div>

              <div className="p-8 md:p-16 overflow-y-auto">
                {renderContent()}
              </div>
            </div>
          )}
        </div>

      </div>
      
      <div className="mt-8 flex justify-center opacity-30">
        <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-slate-300"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Review Hub v3.6</span>
            <div className="h-px w-12 bg-slate-300"></div>
          </div>
      </div>
    </div>
  );
};

export default StudyGuideScreen;
