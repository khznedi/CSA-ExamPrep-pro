import { Question, QuestionType } from '../types';

export const DOMAIN4_QUESTIONS: Question[] = [
  {
    id: "d4-q1",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A Service Catalog may include which of the following components?",
    explanation: "A Service Catalog consists of Record Producers (to create tasks), Order Guides (to bundle items), and Catalog Items (the goods and services themselves).",
    is_active: true,
    choices: [
      { id: "a", text: "Order Guides, Exchange Rates, Calendars", is_correct: false },
      { id: "b", text: "Order Guides, Catalog Items, and Interceptors", is_correct: false },
      { id: "c", text: "Catalog Items, Asset Contracts, Task Surveys", is_correct: false },
      { id: "d", text: "Record Producers, Order Guides, and Catalog Items", is_correct: true }
    ]
  },
  {
    id: "d4-q4",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "The display sequence is controlled in a Service Catalog Item using which of the following?",
    explanation: "The 'Order' field in the Variable form determines the sequence in which variables are displayed on the catalog item form (lowest numbers first).",
    is_active: true,
    choices: [
      { id: "a", text: "The Default Value field in the Catalog Item form", is_correct: false },
      { id: "b", text: "The Sequence field in the Catalog Item form", is_correct: false },
      { id: "c", text: "The Order field in the Variable form", is_correct: true },
      { id: "d", text: "The Choice field in the Variable form", is_correct: false }
    ]
  },
  {
    id: "d4-q7",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    explanation: "In the Service Catalog fulfillment hierarchy, a Request (REQ) is the overall order, which contains one or more Requested Items (RITM), each of which can have one or more Catalog Tasks (TASK).",
    is_active: true,
    choices: [
      { id: "a", text: "RITM (Number)>REQ (Number)>PROCUREMENT (Number)", is_correct: false },
      { id: "b", text: "REQ (Number)>RITM (Number)>PROCUREMENT (Number)", is_correct: false },
      { id: "c", text: "REQ (Number)>RITM (Number)>TASK (Number)", is_correct: true },
      { id: "d", text: "FULFILLMENT (Number)>RITM (Number)>TASK (Number)", is_correct: false }
    ]
  },
  {
    id: "d4-q9",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is generated from the Service Catalog once a user places an order for an item or service?",
    explanation: "When an order is submitted via the Service Catalog, the system generates a Request [sc_request] record.",
    is_active: true,
    choices: [
      { id: "a", text: "A change request", is_correct: false },
      { id: "b", text: "An Order Guide", is_correct: false },
      { id: "c", text: "A request", is_correct: true },
      { id: "d", text: "An SLA", is_correct: false }
    ]
  },
  {
    id: "d4-q12",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    explanation: "Catalog Items are the discrete 'building blocks' of the Service Catalog, representing the actual products or services a user can order.",
    is_active: true,
    choices: [
      { id: "a", text: "They run behind the scenes.", is_correct: false },
      { id: "b", text: "They are the building blocks.", is_correct: true },
      { id: "c", text: "They are optional.", is_correct: false },
      { id: "d", text: "They provide options.", is_correct: false }
    ]
  },
  {
    id: "d4-q16",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A REQ number in the Service Catalog represents",
    explanation: "The REQ number stands for the 'Request' and serves as the overall order number for the entire transaction.",
    is_active: true,
    choices: [
      { id: "a", text: "the order number.", is_correct: true },
      { id: "b", text: "the stage.", is_correct: false },
      { id: "c", text: "the task to complete.", is_correct: false },
      { id: "d", text: "the individual item in the order", is_correct: false }
    ]
  },
  {
    id: "d4-q19",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following is used to initiate a flow?",
    explanation: "In Flow Designer, a 'Trigger' is the condition that initiates the execution of the flow (e.g., a record created or a scheduled time).",
    is_active: true,
    choices: [
      { id: "a", text: "A Trigger", is_correct: true },
      { id: "b", text: "Core Action", is_correct: false },
      { id: "c", text: "A spoke", is_correct: false },
      { id: "d", text: "An Event", is_correct: false }
    ]
  },
  {
    id: "d4-q20",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    explanation: "Service Catalog variables are global by default, meaning they can be reused across different catalog items if needed.",
    is_active: true,
    choices: [
      { id: "a", text: "Service Catalog variables can only be used in Record Producers", is_correct: false },
      { id: "b", text: "Service Catalog variables can only be used in Order Guides", is_correct: false },
      { id: "c", text: "Service Catalog variables cannot affect the order price", is_correct: false },
      { id: "d", text: "Service Catalog variables are global by default", is_correct: true }
    ]
  },
  {
    id: "d4-q29",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following statement describes the purpose of an Order Guide?",
    explanation: "Order Guides provide a unified user experience for ordering multiple related items as a single request, often using rule bases to determine which items are needed.",
    is_active: true,
    choices: [
      { id: "a", text: "Order Guides restrict the number of items in an order to only one item per request", is_correct: false },
      { id: "b", text: "Order Guide provide a list of guidelines for Administrators on how to set up item variables", is_correct: false },
      { id: "c", text: "Order Guide provide the ability to order multiple, related items as one request", is_correct: true },
      { id: "d", text: "Order Guides take the user directly to the checkout without prompting for information", is_correct: false }
    ]
  },
  {
    id: "d4-q44",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is a Record Producer?",
    explanation: "A Record Producer is a specific type of catalog item that allows users to create task-based records (like Incidents or Change Requests) directly from the Service Catalog.",
    is_active: true,
    choices: [
      { id: "a", text: "A Record Producer is a type of Catalog Item that is used for Requests, not Services", is_correct: false },
      { id: "b", text: "A Record Producer creates user records", is_correct: false },
      { id: "c", text: "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests", is_correct: false },
      { id: "d", text: "A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog", is_correct: true }
    ]
  },
  {
    id: "d4-q45",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
    explanation: "These specific items are usually implemented as Record Producers because they result in the creation of a task record (Incident, etc.) rather than a standard request item.",
    is_active: true,
    choices: [
      { id: "a", text: "They direct the user to a record producer", is_correct: true },
      { id: "b", text: "They direct the user to a catalog property", is_correct: false },
      { id: "c", text: "They direct the user to a catalog UI policy", is_correct: false },
      { id: "d", text: "They direct the user to a catalog client script", is_correct: false }
    ]
  },
  {
    id: "d4-q48",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
    explanation: "The 'Items' module (or 'Maintain Items' in some versions) under Service Catalog is where administrators create and manage catalog items.",
    is_active: true,
    choices: [
      { id: "a", text: "Maintain Categories", is_correct: false },
      { id: "b", text: "Maintain Items", is_correct: false },
      { id: "c", text: "Content Items", is_correct: false },
      { id: "d", text: "Items", is_correct: true }
    ]
  },
  {
    id: "d4-q50",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which three Variable Types can be added to a Service Catalog Item?",
    explanation: "Multiple Choice, Select Box, and Checkbox are common variable types used to collect user input on catalog items.",
    is_active: true,
    choices: [
      { id: "a", text: "True/False, Multiple Choice, and Ordered", is_correct: false },
      { id: "b", text: "True/False, Checkbox, and Number List", is_correct: false },
      { id: "c", text: "Number List, Single Line Text, and Reference", is_correct: false },
      { id: "d", text: "Multiple Choice, Select Box, and Checkbox", is_correct: true }
    ]
  },
  {
    id: "d4-q52",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "The baseline Service Catalog homepage contains links to which of the following components?",
    explanation: "The standard Service Catalog homepage organizes access to Record Producers, Order Guides, and standard Catalog Items.",
    is_active: true,
    choices: [
      { id: "a", text: "Record Producers, Order Guides, and Catalog Items", is_correct: true },
      { id: "b", text: "Order Guides, Item Variables, and flows", is_correct: false },
      { id: "c", text: "Order Guides, Catalog Items, and flows", is_correct: false },
      { id: "d", text: "Record Producers, Order Guides, and Item Variables", is_correct: false }
    ]
  },
  {
    id: "d4-q58",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which one of the following statements describes the purpose of a Service Catalog flow?",
    explanation: "A flow attached to a catalog item automates the complex fulfillment process, including approvals, task generation, and notifications.",
    is_active: true,
    choices: [
      { id: "a", text: "A Service Catalog flow generates three basic components: item variable types, tasks, and approvals", is_correct: false },
      { id: "b", text: "Although a Service Catalog flow cannot send notifications, the flow drives complex fulfillment processes", is_correct: false },
      { id: "c", text: "A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups", is_correct: true },
      { id: "d", text: "A Service Catalog flow generates three basic components: item variable types, tasks, and notifications", is_correct: false }
    ]
  },
  {
    id: "d4-q59",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which term best describes something that is created, has work performed upon it, and is eventually moved to a state of closed?",
    explanation: "A 'Task' is a basic organizational unit in ServiceNow that represents work that must be completed and eventually closed.",
    is_active: true,
    choices: [
      { id: "a", text: "report", is_correct: false },
      { id: "b", text: "flow", is_correct: false },
      { id: "c", text: "event", is_correct: false },
      { id: "d", text: "task", is_correct: true }
    ]
  },
  {
    id: "d4-q71",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "What is (are) best practice(s) regarding users/groups/roles? (Choose two.)",
    explanation: "The recommended practice is to add users to groups and assign roles to those groups. This simplifies access management.",
    is_active: true,
    choices: [
      { id: "a", text: "You should never assign roles to groups.", is_correct: false },
      { id: "b", text: "You should assign roles to users.", is_correct: false },
      { id: "c", text: "You should add users to groups.", is_correct: true },
      { id: "d", text: "You should assign roles to groups", is_correct: true }
    ]
  },
  {
    id: "d4-q79",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
    explanation: "The standard data import workflow is: Load Data (into a staging table), Create a Transform Map (to define field relationships), and Run Transform (to move data to the target table).",
    is_active: true,
    choices: [
      { id: "a", text: "Select Data Source, Schedule Transform", is_correct: false },
      { id: "b", text: "Load Data, Create Transform Map, Run Transform", is_correct: true },
      { id: "c", text: "Define Data Source, Select Transform Map, Run Transform", is_correct: false },
      { id: "d", text: "Select Import Set, Select Transform Map, Run Transform", is_correct: false }
    ]
  },
  {
    id: "d4-q81",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is the difference between a UI Policy and Data Policy?",
    explanation: "Data Policies run at the server level and enforce constraints regardless of how data enters the system (UI, API, etc.), while UI Policies only run in the browser during form interaction.",
    is_active: true,
    choices: [
      { id: "a", text: "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies are set only by web services", is_correct: false },
      { id: "b", text: "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies", is_correct: false },
      { id: "c", text: "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form interactions", is_correct: true },
      { id: "d", text: "Data Policies run only after UI Policies run successfully", is_correct: false }
    ]
  },
  {
    id: "d4-q83",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What are the steps to retrieve an Update Set?",
    explanation: "To move customizations, you first verify the Update Set is 'Complete' on the source, then 'Retrieve' it on the target, 'Preview' for conflicts, and finally 'Commit' to apply changes.",
    is_active: true,
    choices: [
      { id: "a", text: "Verify Update Set is Complete, Retrieve, Preview, Apply", is_correct: false },
      { id: "b", text: "Verify Update Set is Complete, Test Connection, Apply", is_correct: false },
      { id: "c", text: "Verify Update Set is Complete, Test Connection, Commit", is_correct: false },
      { id: "d", text: "Verify Update Set is Complete, Retrieve, Preview, Commit", is_correct: true }
    ]
  },
  {
    id: "d4-q84",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
    explanation: "A 'Spoke' is a scoped application containing Flow Designer content (actions, triggers) for integrating with specific third-party systems.",
    is_active: true,
    choices: [
      { id: "a", text: "an action", is_correct: false },
      { id: "b", text: "a spoke", is_correct: true },
      { id: "c", text: "a connection", is_correct: false },
      { id: "d", text: "an integration step", is_correct: false }
    ]
  },
  {
    id: "d4-q94",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What do you activate when you want to add applications or functionality within your development instance?",
    explanation: "Plugins are the primary mechanism for activating new features, applications, and languages on a ServiceNow instance.",
    is_active: true,
    choices: [
      { id: "a", text: "App Package", is_correct: false },
      { id: "b", text: "Updated Pack", is_correct: false },
      { id: "c", text: "Patch", is_correct: false },
      { id: "d", text: "Plugin", is_correct: true },
      { id: "e", text: "App Updated Set", is_correct: false }
    ]
  },
  {
    id: "d4-q96",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Your company is giving all first line workers a special T-shirt… How would you ensure that only first line workers can submit the order?",
    explanation: "User Criteria is used throughout the Service Catalog (and Order Guides) to define who can see and request specific catalog items.",
    is_active: true,
    choices: [
      { id: "a", text: "Create Record Producer and use the Available For list to specify First Line role", is_correct: false },
      { id: "b", text: "Create Catalog Item and use the Not Available list to specify the Manager Group", is_correct: false },
      { id: "c", text: "Create Catalog Item and use the Available For list to specify ITIL role", is_correct: false },
      { id: "d", text: "Create Order Guide and use the User Criteria list to specify First Line role", is_correct: true }
    ]
  },
  {
    id: "d4-q100",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    explanation: "Service Level Agreements (SLAs) are used to track and manage time expectations for task fulfillment and response.",
    is_active: true,
    choices: [
      { id: "a", text: "Task Escalation Clock", is_correct: false },
      { id: "b", text: "Service Level Agreements", is_correct: true },
      { id: "c", text: "Inactivity Monitor", is_correct: false },
      { id: "d", text: "Response Time Clock", is_correct: false },
      { id: "e", text: "Business Time Remaining", is_correct: false }
    ]
  },
  {
    id: "d4-q107",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is a no-code approach to control the mandatory or read-only state of a form field?",
    explanation: "UI Policies allow administrators to dynamically change field properties (hidden, mandatory, read-only) on a form without writing code.",
    is_active: true,
    choices: [
      { id: "a", text: "UI Action", is_correct: false },
      { id: "b", text: "Client Script", is_correct: false },
      { id: "c", text: "UI Script", is_correct: false },
      { id: "d", text: "UI Rule", is_correct: false },
      { id: "e", text: "UI Policy", is_correct: true }
    ]
  },
  {
    id: "d4-q108",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When moving multiple update sets at one time, what might you do to facilitate the move?",
    explanation: "Batching Update Sets allows you to group related update sets into a single unit for simplified preview and commit operations.",
    is_active: true,
    choices: [
      { id: "a", text: "Batch", is_correct: true },
      { id: "b", text: "Verify", is_correct: false },
      { id: "c", text: "Test", is_correct: false },
      { id: "d", text: "Preview", is_correct: false }
    ]
  },
  {
    id: "d4-q118",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    explanation: "Flow Designer is the modern ServiceNow interface for creating multi-step process automations using natural language.",
    is_active: true,
    choices: [
      { id: "a", text: "Process Automation > Flow Designer", is_correct: true },
      { id: "b", text: "Process Automation > Flow Administration", is_correct: false },
      { id: "c", text: "Process Automation > Workflow Editor", is_correct: false },
      { id: "d", text: "Process Automation > Process Flow", is_correct: false },
      { id: "e", text: "Process Automation > Active Flows", is_correct: false }
    ]
  },
  {
    id: "d4-q120",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What are the steps for applying an update set to an instance?",
    explanation: "The lifecycle of an update set on the target instance is Retrieve, then Preview (to check for errors), and finally Commit.",
    is_active: true,
    choices: [
      { id: "a", text: "Retrieve, Preview, Commit", is_correct: true },
      { id: "b", text: "Specify, Transform, Apply", is_correct: false },
      { id: "c", text: "Retrieve, Assess, Apply", is_correct: false },
      { id: "d", text: "Get, Test, Push", is_correct: false }
    ]
  },
  // --- BATCH 2 ---
  {
    id: "d4-q121",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
    explanation: "The Transform step is where data is copied from the import set (staging) table to the target (receiving) table.",
    is_active: true,
    choices: [
      { id: "a", text: "Run Transform", is_correct: true },
      { id: "b", text: "Run Import", is_correct: false },
      { id: "c", text: "Import Dataset", is_correct: false },
      { id: "d", text: "Execute Transform", is_correct: false },
      { id: "e", text: "Schedule Transform", is_correct: false }
    ]
  },
  {
    id: "d4-q123",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which collaboration tool is available from the banner, using the bubble icon?",
    explanation: "The speech bubble icon in the banner frame opens the Connect Chat sidebar for real-time collaboration.",
    is_active: true,
    choices: [
      { id: "a", text: "Now Messenger", is_correct: false },
      { id: "b", text: "Agent Chat", is_correct: false },
      { id: "c", text: "Connect Chat", is_correct: true },
      { id: "d", text: "Collaborate Now", is_correct: false },
      { id: "e", text: "Live Feed", is_correct: false }
    ]
  },
  {
    id: "d4-q127",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "Which features allow you to update multiple records at one time? (Choose two.)",
    explanation: "The List Editor allows for multi-row editing in a list, and the 'Update Selected' context menu action allows for batch updates to selected records.",
    is_active: true,
    choices: [
      { id: "a", text: "List Editor", is_correct: true },
      { id: "b", text: "Field Update Action", is_correct: false },
      { id: "c", text: "Bulk Record Update", is_correct: false },
      { id: "d", text: "Data Remediation Dashboard", is_correct: false },
      { id: "e", text: "Update Selected Action", is_correct: true }
    ]
  },
  {
    id: "d4-q129",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which collaboration tool opens a sidebar and allows you to create new conversations with other ServiceNow users?",
    explanation: "Connect Chat is the integrated messaging tool that provides a sidebar for individual and group conversations.",
    is_active: true,
    choices: [
      { id: "a", text: "Skype Now", is_correct: false },
      { id: "b", text: "Collaborate Now", is_correct: false },
      { id: "c", text: "Agent Messenger", is_correct: false },
      { id: "d", text: "Agent Chat", is_correct: false },
      { id: "e", text: "Connect Chat", is_correct: true }
    ]
  },
  {
    id: "d4-q131",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What component causes a flow to run after a record has been created or updated?",
    explanation: "A Record-based trigger in Flow Designer monitors a specific table for record creation, updates, or both to initiate a flow.",
    is_active: true,
    choices: [
      { id: "a", text: "Date-based trigger", is_correct: false },
      { id: "b", text: "On-change trigger", is_correct: false },
      { id: "c", text: "Record-based trigger", is_correct: true },
      { id: "d", text: "Application-based trigger", is_correct: false },
      { id: "e", text: "Updated-date trigger", is_correct: false }
    ]
  },
  {
    id: "d4-q134",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A customer requests that specific data quality measures (like mandatory fields) be applied across all data entry points. Which type of policy would you use?",
    explanation: "A Data Policy enforces data requirements consistently regardless of how the record is accessed (UI, Import Set, Web Service).",
    is_active: true,
    choices: [
      { id: "a", text: "Data Quality Policy", is_correct: false },
      { id: "b", text: "Dictionary Design Policy", is_correct: false },
      { id: "c", text: "Data Policy", is_correct: true },
      { id: "d", text: "Field Criteria Policy", is_correct: false }
    ]
  },
  {
    id: "d4-q139",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
    explanation: "Flow Designer provides a natural language, low-code interface for automating processes and orchestrating tasks across different services.",
    is_active: true,
    choices: [
      { id: "a", text: "Flow Manager", is_correct: false },
      { id: "b", text: "Flow Designer", is_correct: true },
      { id: "c", text: "Flow Editor", is_correct: false },
      { id: "d", text: "Workflow Editor", is_correct: false },
      { id: "e", text: "Workflow Designer", is_correct: false }
    ]
  },
  {
    id: "d4-q143",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Your customer would like to create a new template to notify users who are affected by network outages. Which module would you use?",
    explanation: "The 'System Notification > Email > Notifications' module is where administrators create and manage email notification templates and logic.",
    is_active: true,
    choices: [
      { id: "a", text: "System Notification > Email > Notifications", is_correct: true },
      { id: "b", text: "Administration > Notification Overview", is_correct: false },
      { id: "c", text: "System Properties > Email > Settings", is_correct: false },
      { id: "d", text: "User Preferences > Email > Notifications", is_correct: false },
      { id: "e", text: "Click Gear > Notifications > New", is_correct: false }
    ]
  },
  {
    id: "d4-q144",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When designing a flow, how do you reference data from a record, in that flow?",
    explanation: "Flow Designer uses 'Data Pills' to represent data from previous steps or triggers, allowing you to drag and drop them into subsequent actions.",
    is_active: true,
    choices: [
      { id: "a", text: "Drag the table icon onto the flow definition", is_correct: false },
      { id: "b", text: "Use the condition builder to specify the desired values", is_correct: false },
      { id: "c", text: "Specify the source table on the data pill related list", is_correct: false },
      { id: "d", text: "Drag the data pill onto the flow definition", is_correct: true },
      { id: "e", text: "Add the table reference using the slush bucket", is_correct: false }
    ]
  },
  {
    id: "d4-q146",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
    explanation: "Virtual Agent is the conversational messaging platform that provides automated help and executes tasks for users.",
    is_active: true,
    choices: [
      { id: "a", text: "Agent Workspace", is_correct: false },
      { id: "b", text: "Chat bot", is_correct: false },
      { id: "c", text: "Virtual Agent", is_correct: true },
      { id: "d", text: "Knowledge Chat", is_correct: false },
      { id: "e", text: "Now Support", is_correct: false }
    ]
  },
  {
    id: "d4-q147",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
    explanation: "Flows in Flow Designer are used to automate complex business logic sequences involving multiple steps and record types.",
    is_active: true,
    choices: [
      { id: "a", text: "Flows", is_correct: true },
      { id: "b", text: "Action Sequences", is_correct: false },
      { id: "c", text: "Action Sets", is_correct: false },
      { id: "d", text: "Task Flows", is_correct: false },
      { id: "e", text: "Flow Diagrams", is_correct: false }
    ]
  },
  {
    id: "d4-q156",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
    explanation: "Selecting 'End Impersonation' from the user menu safely returns the administrator to their original session.",
    is_active: true,
    choices: [
      { id: "a", text: "Turn your computer off and on again", is_correct: false },
      { id: "b", text: "Clear browser cache", is_correct: false },
      { id: "c", text: "End Impersonation", is_correct: true },
      { id: "d", text: "Log out and back in", is_correct: false }
    ]
  },
  {
    id: "d4-q158",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What type of query allows you to filter list data using normal words, instead of the condition builder?",
    explanation: "Natural Language Query (NLQ) enables users to use plain language to filter and search for data in lists.",
    is_active: true,
    choices: [
      { id: "a", text: "Natural Language Query", is_correct: true },
      { id: "b", text: "Alexa Query", is_correct: false },
      { id: "c", text: "Machine Learning Query", is_correct: false },
      { id: "d", text: "Predictive Intelligence Query", is_correct: false },
      { id: "e", text: "Auto-suggest Query", is_correct: false }
    ]
  },
  {
    id: "d4-q165",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "What are advantages of using Flow Designer? (Choose three.)",
    explanation: "Flow Designer reduces technical debt by avoiding complex scripts, allows for less manual coding, and integrates easily with third-party systems via spokes.",
    is_active: true,
    choices: [
      { id: "a", text: "Supports advanced developers", is_correct: false },
      { id: "b", text: "Enables complicated scripting", is_correct: false },
      { id: "c", text: "Reduces technical debt", is_correct: true },
      { id: "d", text: "Less manual scripting", is_correct: true },
      { id: "e", text: "Smooth integration with 3rd party systems", is_correct: true }
    ]
  },
  {
    id: "d4-q167",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
    explanation: "In Flow Designer, a 'Data Pill' represents the runtime value generated by a trigger or action that remains available throughout the flow execution.",
    is_active: true,
    choices: [
      { id: "a", text: "Trigger runtime value", is_correct: false },
      { id: "b", text: "Sequence runtime value", is_correct: false },
      { id: "c", text: "Starting runtime value", is_correct: false },
      { id: "d", text: "Data pill runtime value", is_correct: true },
      { id: "e", text: "Input runtime value", is_correct: false }
    ]
  },
  {
    id: "d4-q171",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What feature do you use to specify which users are able to access a Service Catalog Item?",
    explanation: "User Criteria is the mechanism used across the Service Catalog to define access based on roles, groups, locations, etc.",
    is_active: true,
    choices: [
      { id: "a", text: "Can Read Role", is_correct: false },
      { id: "b", text: "Catalog User Role", is_correct: false },
      { id: "c", text: "Can Order Tab", is_correct: false },
      { id: "d", text: "User Criteria", is_correct: true }
    ]
  },
  {
    id: "d4-q175",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    explanation: "Notifications are triggered by platform events to send emails or other messages to relevant users.",
    is_active: true,
    choices: [
      { id: "a", text: "Notifications", is_correct: true },
      { id: "b", text: "Alerts", is_correct: false },
      { id: "c", text: "Texts", is_correct: false },
      { id: "d", text: "Events", is_correct: false },
      { id: "e", text: "Emails", is_correct: false }
    ]
  },
  {
    id: "d4-q176",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    explanation: "Virtual Agent integrates with Knowledge Management to surface relevant articles during chat conversations.",
    is_active: true,
    choices: [
      { id: "a", text: "Agent Assist", is_correct: false },
      { id: "b", text: "Virtual Agent", is_correct: true },
      { id: "c", text: "Now Messenger", is_correct: false },
      { id: "d", text: "Connect Agent", is_correct: false },
      { id: "e", text: "Instance Chat", is_correct: false }
    ]
  },
  {
    id: "d4-q183",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. Which method would you use?",
    explanation: "A Record Producer is the standard tool for creating task records (like help requests or incidents) from the Service Catalog interface.",
    is_active: true,
    choices: [
      { id: "a", text: "Create Record Producer", is_correct: true },
      { id: "b", text: "Create Catalog Item", is_correct: false },
      { id: "c", text: "Create Order Guide", is_correct: false },
      { id: "d", text: "Create Content Item", is_correct: false }
    ]
  },
  {
    id: "d4-q189",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is used to determine user access to knowledge bases or a knowledge article?",
    explanation: "User Criteria governs who can read and contribute to Knowledge Bases and individual articles.",
    is_active: true,
    choices: [
      { id: "a", text: "sn_kb_read, sn_article_read", is_correct: false },
      { id: "b", text: "Privacy Settings", is_correct: false },
      { id: "c", text: "Read Access Flag", is_correct: false },
      { id: "d", text: "User Criteria", is_correct: true }
    ]
  },
  {
    id: "d4-q196",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "When creating a new notification, what must you define? (Choose three.)",
    explanation: "A notification definition requires: When to send (Conditions), Who will receive it, and What it will say (Content).",
    is_active: true,
    choices: [
      { id: "a", text: "The associated knowledge base", is_correct: false },
      { id: "b", text: "Settings for handling inactive user accounts", is_correct: false },
      { id: "c", text: "Under what conditions is the notification sent", is_correct: true },
      { id: "d", text: "Who receives the notification", is_correct: true },
      { id: "e", text: "What the content of the notification", is_correct: true }
    ]
  },
  {
    id: "d4-q199",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "You have been asked to configure a form so an employee could order a tablet and select standard accessory options. What approach would you take? (Choose three.)",
    explanation: "Best practices include using Variable Sets for reusable fields, enabling standard accessories via catalog configuration, and adding specific variables for options on the item.",
    is_active: true,
    choices: [
      { id: "a", text: "Create Catalog Item for the Tablet, and add a variable set to the form", is_correct: true },
      { id: "b", text: "Create a Record producer, and add check box variables", is_correct: false },
      { id: "c", text: "On Shopping Cart configuration, select Add Accessories button", is_correct: true },
      { id: "d", text: "Create one Catalog item for each accessory", is_correct: false },
      { id: "e", text: "Create Catalog Item for the tablet, and add a check box variable for each accessory", is_correct: true }
    ]
  },
  {
    id: "d4-q204",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A user wants two levels of approval with notifications at each level for a catalog request. What feature would you use?",
    explanation: "Flows (via Flow Designer) are the standard way to automate multi-stage approval processes and their associated notifications.",
    is_active: true,
    choices: [
      { id: "a", text: "Approval Chains", is_correct: false },
      { id: "b", text: "Flows", is_correct: true },
      { id: "c", text: "Approver Delegates", is_correct: false },
      { id: "d", text: "Parent-Child Approvers", is_correct: false },
      { id: "e", text: "Approval Criteria", is_correct: false }
    ]
  },
  {
    id: "d4-q211",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
    explanation: "The Help Panel (identified by the question mark icon) provides contextual documentation and tours within the Flow Designer interface.",
    is_active: true,
    choices: [
      { id: "a", text: "Docs", is_correct: false },
      { id: "b", text: "Community", is_correct: false },
      { id: "c", text: "Help Panel (question mark icon)", is_correct: true },
      { id: "d", text: "Wiki", is_correct: false }
    ]
  },
  {
    id: "d4-q229",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A task worker asks how they can monitor any updates occurring to records assigned to him in real-time. What do you suggest?",
    explanation: "The Activity Stream frame (on list views) provides a live, rolling view of updates happening to records.",
    is_active: true,
    choices: [
      { id: "a", text: "Activity Stream frame", is_correct: true },
      { id: "b", text: "Monitor frame (eyeglass icon)", is_correct: false },
      { id: "c", text: "Agent workspace tabs", is_correct: false },
      { id: "d", text: "My Work Dashboard", is_correct: false }
    ]
  },
  {
    id: "d4-q233",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What are the steps for importing data using an import set?",
    explanation: "The complete lifecycle is: Load Data (into staging), Create Transform Map (mapping logic), Transform Data (write to target), and eventually Clean up staging tables.",
    is_active: true,
    choices: [
      { id: "a", text: "Select source file; Run automap; Transform data; Clean up target table", is_correct: false },
      { id: "b", text: "Identify source; Import transform map; Run transformer; Verify import", is_correct: false },
      { id: "c", text: "Setup LDAP; Test map; Create update set; Run import; Apply update set", is_correct: false },
      { id: "d", text: "Load the data; Create transform map; Transform data; Clean up import table", is_correct: true }
    ]
  },
  {
    id: "d4-q239",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which feature enables business process owners to organize Flow Designer content into unified, digitized cross-enterprise processes via a task board?",
    explanation: "Process Automation Designer (PAD) allows owners to build high-level automated processes using a board interface that incorporates Flow Designer content.",
    is_active: true,
    choices: [
      { id: "a", text: "Flow Designer", is_correct: false },
      { id: "b", text: "Workflow Editor", is_correct: false },
      { id: "c", text: "Process Workflow Designer", is_correct: false },
      { id: "d", text: "Process Automation Designer", is_correct: true }
    ]
  },
  {
    id: "d4-q247",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
    explanation: "User Criteria is the primary security layer for Knowledge Management, defining 'Can Read' and 'Can Contribute' permissions.",
    is_active: true,
    choices: [
      { id: "a", text: "Roles", is_correct: false },
      { id: "b", text: "Groups", is_correct: false },
      { id: "c", text: "User Criteria", is_correct: true },
      { id: "d", text: "Categories", is_correct: false }
    ]
  },
  {
    id: "d4-q258",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What section on the notes tab shows the history of the work documented on the record?",
    explanation: "The Activity Stream (or simply Activity) field displays the chronological history of journal entries (Work Notes and Comments).",
    is_active: true,
    choices: [
      { id: "a", text: "Audit Log", is_correct: false },
      { id: "b", text: "Timeline", is_correct: false },
      { id: "c", text: "Journal", is_correct: false },
      { id: "d", text: "Diary", is_correct: false },
      { id: "e", text: "Activity or Activity Stream", is_correct: true }
    ]
  },
  {
    id: "d4-q266",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What setting allows users to view a Knowledge Base article even if they are not logged in?",
    explanation: "Setting a Knowledge Base article to 'Public' allows it to be viewed by unauthenticated users.",
    is_active: true,
    choices: [
      { id: "a", text: "The Public setting", is_correct: true },
      { id: "b", text: "The View All setting", is_correct: false },
      { id: "c", text: "The ESS role", is_correct: false },
      { id: "d", text: "The Allow All role", is_correct: false }
    ]
  },
  {
    id: "d4-q271",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What capability allows users to create dashboards with widgets to visualize data over time?",
    explanation: "Performance Analytics allows for tracking trends and visualizing data over time using specialized dashboard widgets.",
    is_active: true,
    choices: [
      { id: "a", text: "Scheduled Reports", is_correct: false },
      { id: "b", text: "Performance Analytics", is_correct: true },
      { id: "c", text: "Analytics Reports", is_correct: false },
      { id: "d", text: "Reporting", is_correct: false }
    ]
  },
  // --- BATCH 3 ---
  {
    id: "d4-q293",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? (Choose two.)",
    explanation: "In the Service Catalog fulfillment process, ordering a single item results in a Requested Item (RITM) record and at least one Catalog Task (TASK) record to fulfill the work.",
    is_active: true,
    choices: [
      { id: "a", text: "A record of sc_req_item table", is_correct: true },
      { id: "b", text: "A record of sc_task", is_correct: true },
      { id: "c", text: "An incident record", is_correct: false },
      { id: "d", text: "A change record", is_correct: false },
      { id: "e", text: "A problem record", is_correct: false }
    ]
  },
  {
    id: "d4-q310",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which allows the creation of a task-based record from Service Catalog?",
    explanation: "A Record Producer is a special type of catalog item that creates a task record (like an Incident, Change, or Case) instead of a standard Request record.",
    is_active: true,
    choices: [
      { id: "a", text: "Record Producers", is_correct: true },
      { id: "b", text: "UI Builder", is_correct: false },
      { id: "c", text: "Assignment Rule", is_correct: false },
      { id: "d", text: "UI Actions", is_correct: false },
      { id: "e", text: "Flow Designer", is_correct: false }
    ]
  },
  {
    id: "d4-q315",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "UI Policy can make fields read-only, mandatory, or hidden.",
    explanation: "UI Policies are client-side logic used to dynamically manage the visibility, requirement, and access of form fields without writing code.",
    is_active: true,
    choices: [
      { id: "a", text: "True", is_correct: true },
      { id: "b", text: "False", is_correct: false }
    ]
  }
];
