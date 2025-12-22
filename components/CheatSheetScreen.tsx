
import React, { useState } from 'react';
import { Language, translations } from '../translations';

interface CheatSheetScreenProps {
  onBack: () => void;
  lang: Language;
}

const CheatSheetScreen: React.FC<CheatSheetScreenProps> = ({ onBack, lang }) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      title: "User Interface & Navigation",
      titleAr: "الواجهة والملاحة",
      weight: "20%",
      pages: [
        {
          head: "ServiceNow Overview",
          content: "ServiceNow is a cloud-based platform designed to streamline IT service management (ITSM) and other enterprise workflows. It offers a comprehensive suite of tools to automate tasks, manage incidents, requests, changes, approvals, and knowledge bases.",
          subItems: [
            { label: "Incident Management", text: "Tracks and resolves reported issues experienced by users." },
            { label: "Request Management", text: "Fulfills user requests for access, services, or information." },
            { label: "Change Management", text: "Enables a controlled process for implementing changes to the IT infrastructure." },
            { label: "Problem Management", text: "Identifies the root cause of recurring incidents to prevent future occurrences." },
            { label: "Knowledge Base", text: "Provides a central repository for documented solutions and answers to frequently asked questions." },
            { label: "Workflow Automation", text: "Automates repetitive tasks to improve efficiency." },
            { label: "Reporting and Analytics", text: "Offers insights into IT operations and helps identify areas for improvement." }
          ]
        },
        {
          head: "Lists and Filters",
          content: "Fundamental functionalities that help you navigate and manage data efficiently.",
          subItems: [
            { label: "Lists", text: "Display information in a tabular format with rows and columns. Each record (row) typically contains details about the specific item." },
            { label: "Filters", text: "Allow you to refine the information displayed in a list. Criteria include Field, Operator, and Value." },
            { label: "Use Cases", text: "Search for specific records, view records meeting certain criteria, analyze trends, and identify patterns." }
          ]
        },
        {
          head: "Forms and Templates",
          content: "Forms are the building blocks for user interaction, allowing users to submit requests, view data, and update records.",
          subItems: [
            { label: "Fields", text: "Capture user input (text, date pickers, dropdown menus, etc.)." },
            { label: "Sections", text: "Organize related fields for clarity." },
            { label: "Related Lists", text: "Display associated records for quick reference." },
            { label: "Formatters", text: "Control how field data is displayed (e.g., progress bar)." },
            { label: "Views", text: "Define how specific user groups see the form (different fields, layouts)." },
            { label: "Templates", text: "Pre-built forms that serve as a starting point to ensure consistency and save time." }
          ]
        },
        {
          head: "Branding",
          content: "Customize the look and feel to align with organization identity.",
          subItems: [
            { label: "Components", text: "Company logo, Colors (primary/secondary), Navigation menus, Banners and messages." }
          ]
        }
      ]
    },
    {
      title: "Collaboration",
      titleAr: "التعاون",
      weight: "20%",
      pages: [
        {
          head: "User Administration",
          content: "Admins are responsible for creating, managing, and securing user accounts.",
          subItems: [
            { label: "Creation & Management", text: "Adding individual users, setting up groups for access control, and managing user profiles (contact info, roles, permissions)." },
            { label: "Auth & Authorization", text: "Configuring authentication (Username/Password, Active Directory) and defining authorization rules." },
            { label: "Security Best Practices", text: "Enforcing password policies, enabling 2FA, and managing user lifecycles (activation, deactivation, deletion)." }
          ]
        },
        {
          head: "Task Management",
          content: "Tasks are building blocks used to track activities and progress.",
          subItems: [
            { label: "Create & Manage", text: "Creating tasks manually or through workflows, assigning them to users/groups, setting due dates and priorities." },
            { label: "Routing & Automation", text: "Leveraging automation rules to automatically route tasks based on pre-defined criteria." },
            { label: "Tracking & Reporting", text: "Monitoring progress, identifying bottlenecks, and generating reports to analyze completion rates." }
          ]
        },
        {
          head: "Notifications",
          content: "Alerts sent to users via email or in-platform messages about specific events.",
          subItems: [
            { label: "Configuring Recipients", text: "Who receives the notification (individuals, groups, roles)." },
            { label: "Configuring Conditions", text: "When a notification is triggered (e.g., on incident creation, assignment change)." },
            { label: "Configuring Content", text: "Information included (e.g., incident details, task description)." },
            { label: "Delivery Channels", text: "Email, pop-up message, SMS (may require plugins)." },
            { label: "Management", text: "Users manage preferences in settings; Admins create templates and troubleshoot delivery issues." }
          ]
        },
        {
          head: "Reporting",
          content: "Pre-defined queries that present data in user-friendly formats.",
          subItems: [
            { label: "List Reports", text: "Display data in a tabular format with sorting/filtering." },
            { label: "Pivot Reports", text: "Allow for data aggregation and manipulation to identify trends." },
            { label: "Graphical Reports", text: "Charts and graphs for easier comprehension." },
            { label: "Report Builder", text: "Drag-and-drop interface for creating custom reports; select data sources, define filters, and choose presentation." },
            { label: "Scheduled Reports", text: "Automated reports sent at specific intervals via email." }
          ]
        }
      ]
    },
    {
      title: "Database Administration",
      titleAr: "إدارة قواعد البيانات",
      weight: "30%",
      pages: [
        {
          head: "Data Schema",
          content: "A blueprint that defines how data is organized within the database. Specifies tables, fields, data types, and relationships.",
          subItems: [
            { label: "Importance", text: "Allows configuring applications, managing data integrity, building reports/dashboards, and automating workflows." },
            { label: "Tables", text: "Fundamental structures that store data (e.g., 'incident' or 'user')." },
            { label: "Fields", text: "Individual columns within a table holding specific data points." },
            { label: "Relationships", text: "Connections between tables: One-to-One, One-to-Many, Many-to-Many." },
            { label: "Common Tables", text: "Incident, Change Request, Problem, CMDB_CI, User." }
          ]
        },
        {
          head: "CMDB",
          content: "Configuration Management Database - a central repository for CI information.",
          subItems: [
            { label: "Data Model", text: "Pre-defined model for CIs (attributes like serial number, vendor, etc.). Can be extended with custom fields." },
            { label: "Discovery & Reconciliation", text: "Automatically discover CIs and perform reconciliation to remove duplicates or inconsistencies." },
            { label: "Relationships", text: "Linked CIs representing real-world dependencies (e.g., server linked to applications)." },
            { label: "Impact Analysis", text: "Identifies potentially affected CIs during incidents to prioritize resolution." }
          ]
        },
        {
          head: "Access Control",
          content: "Roles and ACLs define user permissions for applications, forms, fields, and data.",
          subItems: [
            { label: "Roles", text: "Define user permissions." },
            { label: "ACLs", text: "Specify which roles can access specific components." },
            { label: "Best Practices", text: "Follow the Principle of Least Privilege (granting minimum access needed)." }
          ]
        },
        {
          head: "Import Sets",
          content: "Tool for efficient bulk upload of data from CSV/Excel into ServiceNow tables.",
          subItems: [
            { label: "1. Data Preparation", text: "Ensure data in spreadsheet matches target table format." },
            { label: "2. Map File Creation", text: "Translate spreadsheet data into ServiceNow field format." },
            { label: "3. Import Set Creation", text: "Specify source file and target table." },
            { label: "4. Transform & Import", text: "Manipulate data (cleaning, defaults, calculations) before import." },
            { label: "5. Review & Commit", text: "Preview data mapping and identify errors before final commit." },
            { label: "Coalesce", text: "Before transform, makes a field the unique key to prevent duplicates." }
          ]
        }
      ]
    },
    {
      title: "Service Automation",
      titleAr: "أتمتة الخدمات",
      weight: "20%",
      pages: [
        {
          head: "Knowledge Management (KM)",
          content: "Empowers users to find solutions independently through articles and FAQs.",
          subItems: [
            { label: "Article Creation", text: "Creating, editing, and organizing articles." },
            { label: "Categorization", text: "Classifying with categories and tags for efficient searching." },
            { label: "Version Control", text: "Maintaining versions and implementing approval workflows." },
            { label: "Search & Analytics", text: "Enabling keyword filters and tracking user behavior for improvement." },
            { label: "Support", text: "KM deflects repetitive inquiries so IT teams can focus on complex issues." }
          ]
        },
        {
          head: "Service Catalog",
          content: "The foundation for self-service. Acts as a menu of standardized IT services.",
          subItems: [
            { label: "Service", text: "A defined offering like 'Password Reset'." },
            { label: "Catalog Items", text: "Specific variations (e.g., temporary vs permanent)." },
            { label: "Categories", text: "Ways of organizing services for browsing (Hardware, Software)." },
            { label: "Fields", text: "Capture user info during request (department, model #)." },
            { label: "Configuration", text: "Define workflows, approvals, and fulfillment activities." }
          ]
        },
        {
          head: "Workflows / Flow Designer",
          content: "Automated processes that streamline tasks. Flow Designer is the visual tool used to build them.",
          subItems: [
            { label: "Building Flows", text: "Using pre-built actions, conditions, and loops to automate service requests." },
            { label: "Flow Stages", text: "Represent steps like approval, fulfillment, delivery, and completion." },
            { label: "Conditions", text: "Define paths based on data (e.g., if priority is high, escalate)." },
            { label: "Actions", text: "Specific tasks: send email, assign task, update field." },
            { label: "Variables", text: "Store and manipulate data within the workflow." },
            { label: "Benefits", text: "Improved efficiency, increased accuracy (reduced manual errors), faster resolution, and standardized delivery." }
          ]
        }
      ]
    },
    {
      title: "Introduction to Development",
      titleAr: "مقدمة في التطوير",
      weight: "10%",
      pages: [
        {
          head: "Scripting",
          content: "ServiceNow uses JavaScript (specifically ServiceNow JavaScript) to automate tasks and extend functionality.",
          subItems: [
            { label: "Business Rules", text: "Run automatically on server-side when criteria are met (modify values, display messages, trigger flows)." },
            { label: "Client Scripts", text: "Execute on client-side (browser) in response to user interaction (button click, field change)." },
            { label: "UI Actions", text: "Triggered by UI elements like custom buttons or links." },
            { label: "Email Scripts", text: "Used to customize email notifications." },
            { label: "Scope", text: "Admins should identify appropriate script types for scenarios and troubleshoot common errors." }
          ]
        },
        {
          head: "Migration & Integration",
          content: "Moving data/workflows from legacy systems to ServiceNow and connecting with external platforms.",
          subItems: [
            { label: "Migration Types", text: "Full migration, Partial migration, and Staged migration (phased approach)." },
            { label: "Migration Toolkit", text: "Built-in tool helping automate data migration." },
            { label: "Integration Methods", text: "REST APIs (communication between systems), Web Services (protocol for data exchange), Plugins (pre-built extensions)." },
            { label: "Update Sets", text: "Group of customizations packaged to move from one instance to another (tracks sys_update_xml)." }
          ]
        },
        {
          head: "UI Builder",
          content: "Visual tool for customizing user interfaces.",
          subItems: [
            { label: "Functionality", text: "Drag and drop pre-built UI elements to create forms, portals, and dashboards." },
            { label: "Concepts", text: "Creating/editing forms, configuring fields, and applying styles." }
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            {lang === 'ar' ? 'ServiceNow CSA ملخص شامل' : 'ServiceNow CSA Master Cheat Sheet'}
          </h2>
          <p className="text-slate-500 mt-1">
            {lang === 'ar' ? 'كامل المحتوى التقني من ملف المراجعة الرسمي' : 'Full technical content from the official master reference'}
          </p>
        </div>
        <button 
          onClick={onBack}
          className="px-5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.back}
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar scroll-smooth">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`whitespace-nowrap px-6 py-3.5 rounded-2xl font-bold text-sm transition-all border shadow-sm ${activeTab === idx ? 'bg-[#293e40] text-white border-[#293e40] scale-105 z-10' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'}`}
          >
            <span className="opacity-60 mr-2 text-xs">{section.weight}</span>
            {lang === 'ar' ? section.titleAr : section.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Domain Info Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-indigo-900 text-white p-8 rounded-[2rem] shadow-xl sticky top-24 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-2">Certification Domain</div>
              <h3 className="text-2xl font-black mb-6 leading-tight">
                {lang === 'ar' ? sections[activeTab].titleAr : sections[activeTab].title}
              </h3>
              <div className="bg-white/10 rounded-2xl p-4 mb-6">
                 <div className="text-4xl font-black">{sections[activeTab].weight}</div>
                 <div className="text-[10px] uppercase font-bold opacity-60">Exam Distribution</div>
              </div>
              <div className="space-y-4 text-sm text-indigo-100 leading-relaxed font-medium">
                 <p>{lang === 'ar' ? 'هذا القسم يغطي كافة المهارات والمفاهيم المطلوبة لهذا المجال في اختبار CSA الرسمي.' : 'This section contains the comprehensive list of skills and concepts required for this domain in the CSA exam.'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Pages Content */}
        <div className="lg:col-span-3 space-y-8">
          {sections[activeTab].pages.map((page, pIdx) => (
            <div key={pIdx} className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-[#30B6AF] rounded-full"></div>
                <h4 className="text-2xl font-black text-slate-900">{page.head}</h4>
              </div>
              
              {page.content && (
                <p className="text-slate-600 mb-8 leading-relaxed text-lg italic">
                  {page.content}
                </p>
              )}

              <div className="grid grid-cols-1 gap-6">
                {page.subItems.map((item, iIdx) => (
                  <div key={iIdx} className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 group hover:border-indigo-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <span className="text-xs font-black">{iIdx + 1}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="font-black text-slate-800 text-sm uppercase tracking-wide">
                          {item.label}
                        </div>
                        <div className="text-slate-600 leading-relaxed text-base">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Disclaimer */}
      <div className="mt-16 bg-slate-100 rounded-[2rem] p-10 border border-slate-200 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <div className="text-[#30B6AF] font-black text-xs uppercase tracking-widest">Official Reference Data</div>
          <p className="text-slate-500 text-sm leading-relaxed">
            {lang === 'ar' 
              ? 'تنبيه: كافة المعلومات الواردة في هذا الملخص مأخوذة من المراجع الرسمية لشهادة ServiceNow CSA. يُنصح بمراجعتها بانتظام لترسيخ المفاهيم قبل الانتقال للاختبارات التجريبية.' 
              : 'Disclaimer: All information in this cheat sheet is sourced from official ServiceNow CSA certification references. It is recommended to review these regularly to solidify concepts before attempting mock exams.'}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 blur-3xl -ml-12 -mt-12"></div>
      </div>
    </div>
  );
};

export default CheatSheetScreen;
