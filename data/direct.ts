
import { Question, QuestionType } from '../types';

export const DIRECT_QUESTIONS: Question[] = [
  // --- DOMAIN 1: User Interface & Navigation ---
  {
    id: "DA-D1-001",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What displays fields from one record and can be used to edit the record data?",
    explanation: "A Form displays fields from a single record. Correct: A Form",
    is_active: true,
    choices: [
      { id: "A", text: "A List", is_correct: false },
      { id: "B", text: "A Form", is_correct: true },
      { id: "C", text: "A Dashboard", is_correct: false },
      { id: "D", text: "A Timeline", is_correct: false }
    ]
  },
  {
    id: "DA-D1-002",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What does a Green field status indicator mean?",
    explanation: "Green indicates the field has been modified but not yet saved.",
    is_active: true,
    choices: [
      { id: "A", text: "Required and Saved", is_correct: false },
      { id: "B", text: "Required but No Value", is_correct: false },
      { id: "C", text: "Modified but Not Saved", is_correct: true },
      { id: "D", text: "Read-only", is_correct: false }
    ]
  },
  {
    id: "DA-D1-003",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What application is available to all users by default?",
    explanation: "Self-Service is intended for all users to access common services and information.",
    is_active: true,
    choices: [
      { id: "A", text: "System Administration", is_correct: false },
      { id: "B", text: "Self-Service", is_correct: true },
      { id: "C", text: "Service Desk", is_correct: false },
      { id: "D", text: "Business Management", is_correct: false }
    ]
  },
  {
    id: "DA-D1-004",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "How do you change the sort sequence of fields or tasks?",
    explanation: "Modify the 'Order' field. Lower numbers are displayed first.",
    is_active: true,
    choices: [
      { id: "A", text: "Modify the Priority field", is_correct: false },
      { id: "B", text: "Modify the Order field", is_correct: true },
      { id: "C", text: "Change the Name alphabetically", is_correct: false },
      { id: "D", text: "Modify the Index field", is_correct: false }
    ]
  },
  {
    id: "DA-D1-005",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What do you call a saved version of a personalized form?",
    explanation: "A View is a saved layout of a form or list.",
    is_active: true,
    choices: [
      { id: "A", text: "A Layout", is_correct: false },
      { id: "B", text: "A Perspective", is_correct: false },
      { id: "C", text: "A View", is_correct: true },
      { id: "D", text: "A Template", is_correct: false }
    ]
  },
  {
    id: "DA-D1-006",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is the function of the Filter Navigator?",
    explanation: "The Filter Navigator (in the Sidebar) provides links to all applications and modules.",
    is_active: true,
    choices: [
      { id: "A", text: "Search record data", is_correct: false },
      { id: "B", text: "Provide links to all applications and modules", is_correct: true },
      { id: "C", text: "Configure system properties", is_correct: false },
      { id: "D", text: "Filter list columns", is_correct: false }
    ]
  },
  {
    id: "DA-D1-007",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is the syntax to return items that start with a specific phrase?",
    explanation: "The percentage symbol (%) acts as a wildcard. 'Phrase%' matches items starting with that phrase.",
    is_active: true,
    choices: [
      { id: "A", text: "*Phrase", is_correct: false },
      { id: "B", text: "Phrase%", is_correct: true },
      { id: "C", text: "=Phrase", is_correct: false },
      { id: "D", text: "%Phrase%", is_correct: false }
    ]
  },

  // --- DOMAIN 2: Collaboration ---
  {
    id: "DA-D2-001",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is an indication to the ServiceNow processes that something notable has occurred?",
    explanation: "An Event is a signal that something has happened (e.g., record inserted).",
    is_active: true,
    choices: [
      { id: "A", text: "A Log", is_correct: false },
      { id: "B", text: "An Event", is_correct: true },
      { id: "C", text: "A Trigger", is_correct: false },
      { id: "D", text: "A Notification", is_correct: false }
    ]
  },
  {
    id: "DA-D2-002",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What contains a record of every generated event?",
    explanation: "The Event Queue stores all events fired in the system.",
    is_active: true,
    choices: [
      { id: "A", text: "System Log", is_correct: false },
      { id: "B", text: "Event Log", is_correct: false },
      { id: "C", text: "Event Queue", is_correct: true },
      { id: "D", text: "Audit Table", is_correct: false }
    ]
  },
  {
    id: "DA-D2-003",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What do you call a mapped graphic image on a homepage that are packed reports?",
    explanation: "A Gauge is a report snapshot mapped to a homepage or dashboard.",
    is_active: true,
    choices: [
      { id: "A", text: "A Widget", is_correct: false },
      { id: "B", text: "A Gauge", is_correct: true },
      { id: "C", text: "A Chart", is_correct: false },
      { id: "D", text: "A Tile", is_correct: false }
    ]
  },
  {
    id: "DA-D2-004",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What are the three types of SLAs in ServiceNow?",
    explanation: "Service Level Agreement (SLA), Operational Level Agreement (OLA), and Underpinning Contract (UC).",
    is_active: true,
    choices: [
      { id: "A", text: "SLA, OLA, UC", is_correct: true },
      { id: "B", text: "SLA, KPI, OLA", is_correct: false },
      { id: "C", text: "SLA, OLA, Contract", is_correct: false },
      { id: "D", text: "UC, OLA, KPI", is_correct: false }
    ]
  },
  {
    id: "DA-D2-005",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What conditions define an SLA?",
    explanation: "Start, Stop, and Pause conditions determine the lifecycle of an SLA.",
    is_active: true,
    choices: [
      { id: "A", text: "Open, Active, Closed", is_correct: false },
      { id: "B", text: "Start, Stop, Pause", is_correct: true },
      { id: "C", text: "Create, Work, Finish", is_correct: false },
      { id: "D", text: "Start, Wait, Finish", is_correct: false }
    ]
  },
  {
    id: "DA-D2-006",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is 'Retroactive Start' in an SLA?",
    explanation: "Retroactive start sets the start time of an SLA to when the record (e.g., Incident) was originally created.",
    is_active: true,
    choices: [
      { id: "A", text: "Starting the SLA after 24 hours", is_correct: false },
      { id: "B", text: "Setting start time equal to when the record was created", is_correct: true },
      { id: "C", text: "Restarting an SLA from zero", is_correct: false },
      { id: "D", text: "Applying SLA to old records", is_correct: false }
    ]
  },

  // --- DOMAIN 3: Database Administration ---
  {
    id: "DA-D3-001",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the core Configuration Item (CI) table?",
    explanation: "cmdb_ci is the base table for all configuration items.",
    is_active: true,
    choices: [
      { id: "A", text: "cmdb", is_correct: false },
      { id: "B", text: "cmdb_ci", is_correct: true },
      { id: "C", text: "cmdb_rel_ci", is_correct: false },
      { id: "D", text: "configuration_item", is_correct: false }
    ]
  },
  {
    id: "DA-D3-002",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What does Coalescing do during a data transform?",
    explanation: "Coalescing makes a field a unique key to determine if a record should be updated or created (prevents duplicates).",
    is_active: true,
    choices: [
      { id: "A", text: "Deletes duplicate data", is_correct: false },
      { id: "B", text: "Makes a field the unique key to prevent duplicates", is_correct: true },
      { id: "C", text: "Encrypts the imported data", is_correct: false },
      { id: "D", text: "Combines multiple fields into one", is_correct: false }
    ]
  },
  {
    id: "DA-D3-003",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is an Update Set?",
    explanation: "A group of customizations packaged to move from one instance to another.",
    is_active: true,
    choices: [
      { id: "A", text: "A backup of the database", is_correct: false },
      { id: "B", text: "A group of customizations packaged to move between instances", is_correct: true },
      { id: "C", text: "A log of all user changes", is_correct: false },
      { id: "D", text: "A list of new data records", is_correct: false }
    ]
  },
  {
    id: "DA-D3-004",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Where is the User record stored?",
    explanation: "The sys_user table stores all user account information.",
    is_active: true,
    choices: [
      { id: "A", text: "user_table", is_correct: false },
      { id: "B", text: "sys_user", is_correct: true },
      { id: "C", text: "sys_user_group", is_correct: false },
      { id: "D", text: "sys_user_role", is_correct: false }
    ]
  },
  {
    id: "DA-D3-005",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is an Access Control (ACL)?",
    explanation: "A security rule defined at the row (record) and column (field) level.",
    is_active: true,
    choices: [
      { id: "A", text: "A login password", is_correct: false },
      { id: "B", text: "A security rule for row and column level access", is_correct: true },
      { id: "C", text: "A user role assignment", is_correct: false },
      { id: "D", text: "A database encryption key", is_correct: false }
    ]
  },
  {
    id: "DA-D3-006",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What role is needed to access and manage Access Control lists?",
    explanation: "Only the security_admin (elevated privilege) role can manage ACLs.",
    is_active: true,
    choices: [
      { id: "A", text: "admin", is_correct: false },
      { id: "B", text: "security_admin", is_correct: true },
      { id: "C", text: "user_admin", is_correct: false },
      { id: "D", text: "acl_admin", is_correct: false }
    ]
  },

  // --- DOMAIN 4: Self-Service & Process Automation ---
  {
    id: "DA-D4-001",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What items does an order from the Service Catalog generate?",
    explanation: "The order creates a REQ (Request), RITM (Requested Item), and Catalog Task.",
    is_active: true,
    choices: [
      { id: "A", text: "Incident, Change, Task", is_correct: false },
      { id: "B", text: "REQ, RITM, Catalog Task", is_correct: true },
      { id: "C", text: "Order, Item, Delivery", is_correct: false },
      { id: "D", text: "Request, Approval, Task", is_correct: false }
    ]
  },
  {
    id: "DA-D4-002",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is a Variable Set?",
    explanation: "A modular unit of variables that can be shared across multiple catalog items.",
    is_active: true,
    choices: [
      { id: "A", text: "A group of records", is_correct: false },
      { id: "B", text: "A modular unit of shared variables", is_correct: true },
      { id: "C", text: "A set of database fields", is_correct: false },
      { id: "D", text: "A collection of scripts", is_correct: false }
    ]
  },
  {
    id: "DA-D4-003",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is a Record Producer?",
    explanation: "A catalog module that allows users to create records (like Incidents) in the system.",
    is_active: true,
    choices: [
      { id: "A", text: "A database table generator", is_correct: false },
      { id: "B", text: "A module to create records from the catalog view", is_correct: true },
      { id: "C", text: "A tool for bulk importing users", is_correct: false },
      { id: "D", text: "A report building wizard", is_correct: false }
    ]
  },
  {
    id: "DA-D4-004",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What are the three basic components generated by Workflows?",
    explanation: "Workflows generate Approvals, Notifications, and Tasks.",
    is_active: true,
    choices: [
      { id: "A", text: "Records, Logs, Reports", is_correct: false },
      { id: "B", text: "Approvals, Notifications, Tasks", is_correct: true },
      { id: "C", text: "Events, Triggers, Actions", is_correct: false },
      { id: "D", text: "Emails, Alerts, Forms", is_correct: false }
    ]
  },
  {
    id: "DA-D4-005",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is the Knowledge Base hierarchy?",
    explanation: "Topics > Categories > Articles.",
    is_active: true,
    choices: [
      { id: "A", text: "Folder > File > Data", is_correct: false },
      { id: "B", text: "Topics > Categories > Articles", is_correct: true },
      { id: "C", text: "Base > Section > Page", is_correct: false },
      { id: "D", text: "Group > Type > Record", is_correct: false }
    ]
  },

  // --- DOMAIN 5: Introduction to Development ---
  {
    id: "DA-D5-001",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What applies to a form to dynamically change information on the form itself (client-side)?",
    explanation: "A UI Policy runs on the browser to hide/show or make fields mandatory/read-only.",
    is_active: true,
    choices: [
      { id: "A", text: "Business Rule", is_correct: false },
      { id: "B", text: "UI Policy", is_correct: true },
      { id: "C", text: "Data Policy", is_correct: false },
      { id: "D", text: "ACL", is_correct: false }
    ]
  },
  {
    id: "DA-D5-002",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What enables admins to set mandatory and read-only states for a field at the server side?",
    explanation: "A Data Policy enforces rules when data is entered through any source (Imports, UI, etc.).",
    is_active: true,
    choices: [
      { id: "A", text: "UI Policy", is_correct: false },
      { id: "B", text: "Data Policy", is_correct: true },
      { id: "C", text: "Client Script", is_correct: false },
      { id: "D", text: "UI Script", is_correct: false }
    ]
  },
  {
    id: "DA-D5-003",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is a Business Rule?",
    explanation: "A server-side JavaScript piece configured to run on database operations (Insert, Update, Delete).",
    is_active: true,
    choices: [
      { id: "A", text: "A client-side script", is_correct: false },
      { id: "B", text: "A server-side script triggered by database actions", is_correct: true },
      { id: "C", text: "A layout configuration tool", is_correct: false },
      { id: "D", text: "A user access rule", is_correct: false }
    ]
  },
  {
    id: "DA-D5-004",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What are the four ways Client Scripts can be executed?",
    explanation: "onCellEdit, onChange, onLoad, and onSubmit.",
    is_active: true,
    choices: [
      { id: "A", text: "onCreate, onEdit, onDelete, onRead", is_correct: false },
      { id: "B", text: "onCellEdit, onChange, onLoad, onSubmit", is_correct: true },
      { id: "C", text: "onStart, onWait, onStop, onFinish", is_correct: false },
      { id: "D", text: "beforeLoad, afterSave, onCheck, onFinal", is_correct: false }
    ]
  },
  {
    id: "DA-D5-005",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Where are Business Rules stored?",
    explanation: "The sys_script table stores all business rule records.",
    is_active: true,
    choices: [
      { id: "A", text: "sys_business_rule", is_correct: false },
      { id: "B", text: "sys_script", is_correct: true },
      { id: "C", text: "sys_ui_script", is_correct: false },
      { id: "D", text: "sys_logic", is_correct: false }
    ]
  }
];
