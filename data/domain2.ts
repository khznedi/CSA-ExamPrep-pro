
import { Question, QuestionType } from '../types';

export const DOMAIN2_QUESTIONS: Question[] = [
  {
    id: "D2-003",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
    explanation: "Metrics are used to measure and evaluate the effectiveness of IT service management processes (e.g., how long an incident stayed in a certain state).",
    is_active: true,
    choices: [
      { id: "A", text: "A metric is a report gauge used on homepages to display real-time data", is_correct: false },
      { id: "B", text: "A metric is a time measurement used to report effectiveness of workflows", is_correct: false },
      { id: "C", text: "A metric is used to measure and evaluate the effectiveness of IT service management processes", is_correct: true },
      { id: "D", text: "A metric is a comparative measurement used for flows and SLAS", is_correct: false }
    ]
  },
  {
    id: "D2-005",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "Reports can be created from which different places in the platform? (Choose two)",
    explanation: "Reports can be initiated directly from a list column heading (right-click) or via the Reports > View/Run module.",
    is_active: true,
    choices: [
      { id: "A", text: "List column heading", is_correct: true },
      { id: "B", text: "Metrics module", is_correct: false },
      { id: "C", text: "Statistics module", is_correct: false },
      { id: "D", text: "View/Run module", is_correct: true }
    ]
  },
  {
    id: "D2-030",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which tool is used to have conversations with logged-in users in real-time?",
    explanation: "Connect Chat provides a real-time messaging interface for users to collaborate directly within the instance.",
    is_active: true,
    choices: [
      { id: "A", text: "Connect Chat", is_correct: true },
      { id: "B", text: "Now Messenger", is_correct: false },
      { id: "C", text: "User Presence", is_correct: false },
      { id: "D", text: "Comments", is_correct: false }
    ]
  },
  {
    id: "D2-059",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?",
    explanation: "A Task [task] is the base record type for items that follow a lifecycle of being opened, worked on, and closed.",
    is_active: true,
    choices: [
      { id: "A", text: "report", is_correct: false },
      { id: "B", text: "flow", is_correct: false },
      { id: "C", text: "event", is_correct: false },
      { id: "D", text: "task", is_correct: true }
    ]
  },
  {
    id: "D2-067",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "How is a group defined in ServiceNow?",
    explanation: "Groups are records stored in the sys_user_group table. They represent sets of users who share roles or work responsibilities.",
    is_active: true,
    choices: [
      { id: "A", text: "A group is one record stored in the Group Type table", is_correct: false },
      { id: "B", text: "A group is one record stored in the Group [sys_user_group] table", is_correct: true },
      { id: "C", text: "A group defines a set of users that share the same location", is_correct: false },
      { id: "D", text: "A group defines a set of users that share the same job title", is_correct: false }
    ]
  },
  {
    id: "D2-068",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is a role in ServiceNow?",
    explanation: "Roles are stored in the sys_user_role table and are used to grant access to applications and modules.",
    is_active: true,
    choices: [
      { id: "A", text: "A role is one record in the Role [user_sys_role] table", is_correct: false },
      { id: "B", text: "A role is a set of modules for a particular application", is_correct: false },
      { id: "C", text: "A role is one record in the Role [sys_user_role] table", is_correct: true },
      { id: "D", text: "A role is a persona used in Live Feed Chat", is_correct: false }
    ]
  },
  {
    id: "D2-069",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is a Notification?",
    explanation: "Notifications alert users when specific events occur that affect them, primarily via email.",
    is_active: true,
    choices: [
      { id: "A", text: "A new Knowledge article created by a Business Rule", is_correct: false },
      { id: "B", text: "A tool for alerting users that events that concern them have occurred", is_correct: true },
      { id: "C", text: "A message through Connect related to a Change Request", is_correct: false },
      { id: "D", text: "An email file attachment", is_correct: false }
    ]
  },
  {
    id: "D2-070",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which one of the following is NOT a type of Visual Task Board?",
    explanation: "ServiceNow VTBs include Freeform, Guided, and Flexible. 'Feature' is not a VTB type.",
    is_active: true,
    choices: [
      { id: "A", text: "Flexible", is_correct: false },
      { id: "B", text: "Freeform", is_correct: false },
      { id: "C", text: "Feature", is_correct: true },
      { id: "D", text: "Guided boards", is_correct: false }
    ]
  },
  {
    id: "D2-071",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What is (are) best practice(s) regarding users/groups/roles? (Choose two)",
    explanation: "Best practice is to assign roles to groups, and then add users to those groups to inherit the roles.",
    is_active: true,
    choices: [
      { id: "A", text: "You should never assign roles to groups.", is_correct: false },
      { id: "B", text: "You should assign roles to users.", is_correct: false },
      { id: "C", text: "You should add users to groups.", is_correct: true },
      { id: "D", text: "You should assign roles to groups", is_correct: true }
    ]
  },
  {
    id: "D2-072",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What are two ways to generate an Event? (Choose two)",
    explanation: "Events are typically triggered by Business Rules or Workflows/Flows using the gs.eventQueue() function.",
    is_active: true,
    choices: [
      { id: "A", text: "Business Rule", is_correct: true },
      { id: "B", text: "Workflow", is_correct: true },
      { id: "C", text: "Log entry", is_correct: false },
      { id: "D", text: "Knowledge article publication", is_correct: false }
    ]
  },
  {
    id: "D2-100",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    explanation: "Service Level Agreements (SLAs) track time against defined targets to ensure service standards are met.",
    is_active: true,
    choices: [
      { id: "A", text: "Task Escalation Clock", is_correct: false },
      { id: "B", text: "Service Level Agreements", is_correct: true },
      { id: "C", text: "Inactivity Monitor", is_correct: false },
      { id: "D", text: "Response Time Clock", is_correct: false }
    ]
  },
  {
    id: "D2-101",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is a quick way to create a report from a list view?",
    explanation: "Right-clicking a column header and selecting 'Bar Chart' or 'Pie Chart' instantly generates a visual report based on that column's data.",
    is_active: true,
    choices: [
      { id: "A", text: "Click on filter breadcrumb, drag and drop", is_correct: false },
      { id: "B", text: "Click Funnel, define filter, click Create Report", is_correct: false },
      { id: "C", text: "Click Context Menu, select Create Report", is_correct: false },
      { id: "D", text: "Apply filter, right click on column header, select Bar Chart", is_correct: true }
    ]
  },
  {
    id: "D2-119",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    explanation: "The Reports > Create New module is the standard starting point for the Report Designer wizard.",
    is_active: true,
    choices: [
      { id: "A", text: "Report Dashboard > Create New", is_correct: false },
      { id: "B", text: "Reports > Getting Started", is_correct: false },
      { id: "C", text: "Performance Analytics > Reports", is_correct: false },
      { id: "D", text: "Self-Service > Reports", is_correct: false },
      { id: "E", text: "Reports > Create New", is_correct: true }
    ]
  },
  {
    id: "D2-123",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which collaboration tool is available from the banner, using the bubble icon?",
    explanation: "The chat bubble icon in the banner opens Connect Chat for real-time collaboration.",
    is_active: true,
    choices: [
      { id: "A", text: "Now Messenger", is_correct: false },
      { id: "B", text: "Agent Chat", is_correct: false },
      { id: "C", text: "Connect Chat", is_correct: true },
      { id: "D", text: "Collaborate Now", is_correct: false }
    ]
  },
  {
    id: "D2-129",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which collaboration tool opens a sidebar and allows you to create new conversations with other ServiceNow users?",
    explanation: "Connect Chat opens as a sidebar on the right, allowing for multi-user or record-based conversations.",
    is_active: true,
    choices: [
      { id: "A", text: "Skype Now", is_correct: false },
      { id: "B", text: "Collaborate Now", is_correct: false },
      { id: "C", text: "Agent Messenger", is_correct: false },
      { id: "D", text: "Agent Chat", is_correct: false },
      { id: "E", text: "Connect Chat", is_correct: true }
    ]
  },
  {
    id: "D2-141",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is a key difference between Reporting and Performance Analytics?",
    explanation: "Reports show real-time 'current state' data, while Performance Analytics (PA) tracks snapshots over time to show trends.",
    is_active: true,
    choices: [
      { id: "A", text: "PA contains snapshots taken over time; Reporting shows only data at the moment it is run", is_correct: true },
      { id: "B", text: "Performance Analytics can show trends; Reports cannot.", is_correct: false },
      { id: "C", text: "Reports can be run on a scheduled basis; PA cannot.", is_correct: false },
      { id: "D", text: "Performance Analytics data can be published to Dashboards; Reports cannot.", is_correct: false }
    ]
  },
  {
    id: "D2-143",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use?",
    explanation: "System Notification > Email > Notifications is where admins define the conditions and content for automated emails.",
    is_active: true,
    choices: [
      { id: "A", text: "System Notification > Email > Notifications", is_correct: true },
      { id: "B", text: "Administration > Notification Overview", is_correct: false },
      { id: "C", text: "System Properties > Email > Settings", is_correct: false },
      { id: "D", text: "User Preferences > Email > Notifications", is_correct: false }
    ]
  },
  {
    id: "D2-151",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Group records are stored in which table?",
    explanation: "The standard system table for group data is sys_user_group.",
    is_active: true,
    choices: [
      { id: "A", text: "Group [sn_user_group]", is_correct: false },
      { id: "B", text: "Group [sys_user_group]", is_correct: true },
      { id: "C", text: "Group [s_sys_group]", is_correct: false },
      { id: "D", text: "Group [u_sys_group]", is_correct: false }
    ]
  },
  {
    id: "D2-161",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "A Role is defined as what?",
    explanation: "A role is a record that groups together a set of permissions (access to tables, modules, etc.).",
    is_active: true,
    choices: [
      { id: "A", text: "A collection of permissions", is_correct: true },
      { id: "B", text: "A set of user access policies", is_correct: false },
      { id: "C", text: "A Persona in a workflow", is_correct: false },
      { id: "D", text: "A set of access control rules", is_correct: false }
    ]
  },
  {
    id: "D2-164",
    domain_id: 2,
    type: QuestionType.SCENARIO,
    scenario_text: "A manager wants to view a snapshot of month-end Sales performance data compared to targets, and see trends forecasted into the future.",
    question_text: "What capability do you suggest for this manager?",
    explanation: "Performance Analytics is designed for tracking KPIs over time, comparing against targets, and forecasting future performance.",
    is_active: true,
    choices: [
      { id: "A", text: "Scheduled Reports and a Trend report", is_correct: false },
      { id: "B", text: "Scheduled Reports and Excel", is_correct: false },
      { id: "C", text: "Scheduled Reports and a Projection report", is_correct: false },
      { id: "D", text: "Performance Analytics", is_correct: true }
    ]
  },
  {
    id: "D2-174",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "User records are stored in which table?",
    explanation: "The sys_user table contains all individual user accounts in the instance.",
    is_active: true,
    choices: [
      { id: "A", text: "User [sys_user]", is_correct: true },
      { id: "B", text: "User [sn_user]", is_correct: false },
      { id: "C", text: "User [u_sys_user]", is_correct: false },
      { id: "D", text: "User [s_user]", is_correct: false }
    ]
  },
  {
    id: "D2-175",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    explanation: "Notifications are triggered by events (or record changes) to send emails or SMS messages to users.",
    is_active: true,
    choices: [
      { id: "A", text: "Notifications", is_correct: true },
      { id: "B", text: "Alerts", is_correct: false },
      { id: "C", text: "Texts", is_correct: false },
      { id: "D", text: "Events", is_correct: false }
    ]
  },
  {
    id: "D2-179",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four)",
    explanation: "Group assignment ensures workload visibility, allows for skill-based routing, and ensures continuity if an individual is unavailable.",
    is_active: true,
    choices: [
      { id: "A", text: "Group members can choose their tasks from My Groups Work", is_correct: true },
      { id: "B", text: "Groups can assign tasks based on on-call schedules", is_correct: true },
      { id: "C", text: "Site support members can pick tasks based on Location", is_correct: true },
      { id: "D", text: "Groups can assign tasks based on skills", is_correct: true },
      { id: "E", text: "Group members can avoid tasks nearing breach", is_correct: false },
      { id: "F", text: "Groups can assign tasks based on availability", is_correct: false }
    ]
  },
  {
    id: "D2-180",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What ServiceNow feature allows you to include data from a secondary related table on a report?",
    explanation: "Dot Walking allows you to navigate through reference fields to access fields on related tables (e.g., Incident > Caller > Location).",
    is_active: true,
    choices: [
      { id: "A", text: "SQL", is_correct: false },
      { id: "B", text: "Dot Walking", is_correct: true },
      { id: "C", text: "Outer Join", is_correct: false },
      { id: "D", text: "Joins", is_correct: false }
    ]
  },
  {
    id: "D2-196",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "When creating a new notification, what must you define? (Choose three)",
    explanation: "The three core parts of a notification are: When to send (conditions), Who receives it, and What it says (content).",
    is_active: true,
    choices: [
      { id: "A", text: "The associated knowledge base", is_correct: false },
      { id: "B", text: "Settings for inactive accounts", is_correct: false },
      { id: "C", text: "Under what conditions is the notification sent", is_correct: true },
      { id: "D", text: "Who receives the notification", is_correct: true },
      { id: "E", text: "What the content of the notification", is_correct: true }
    ]
  },
  {
    id: "D2-198",
    domain_id: 2,
    type: QuestionType.SCENARIO,
    scenario_text: "An IT manager responsible for Network and Hardware groups cannot see any tasks on the 'My Groups Work' list.",
    question_text: "What could explain this?",
    explanation: "The 'My Groups Work' list filters tasks assigned to groups that the current user is a member of.",
    is_active: true,
    choices: [
      { id: "A", text: "The Assignment Group manager field is empty.", is_correct: false },
      { id: "B", text: "The manager does not have the itil role.", is_correct: false },
      { id: "C", text: "The manager is not a member of the Service Desk group.", is_correct: false },
      { id: "D", text: "The manager is not a member of the Network and Hardware groups", is_correct: true }
    ]
  },
  {
    id: "D2-201",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is the definition of a group?",
    explanation: "In ServiceNow, a group is simply a collection of users who share roles or responsibilities.",
    is_active: true,
    choices: [
      { id: "A", text: "A collection of subject matter experts", is_correct: false },
      { id: "B", text: "A team of users", is_correct: false },
      { id: "C", text: "An escalation pod", is_correct: false },
      { id: "D", text: "A collection of users", is_correct: true }
    ]
  },
  {
    id: "D2-202",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four)",
    explanation: "Reports are categorized into My reports (private), Group (shared with your groups), Global (shared with all), and All.",
    is_active: true,
    choices: [
      { id: "A", text: "Group", is_correct: true },
      { id: "C", text: "My reports", is_correct: true },
      { id: "F", text: "Global", is_correct: true },
      { id: "I", text: "All", is_correct: true },
      { id: "B", text: "Department", is_correct: false },
      { id: "E", text: "Dashboards", is_correct: false }
    ]
  },
  {
    id: "D2-205",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Groups are stored in what table?",
    explanation: "sys_user_group is the table name for Group records.",
    is_active: true,
    choices: [
      { id: "A", text: "User Group [user_groups]", is_correct: false },
      { id: "B", text: "Groups [sys_user_groups]", is_correct: false },
      { id: "C", text: "Group [sn_sys_user_group]", is_correct: false },
      { id: "D", text: "Group [sys_user_group]", is_correct: true }
    ]
  },
  {
    id: "D2-212",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections. Which section is used to specify grouping and calculations?",
    explanation: "The Configure tab in Report Designer allows setting the Group By field and aggregation calculations.",
    is_active: true,
    choices: [
      { id: "A", text: "Style", is_correct: false },
      { id: "B", text: "Group by", is_correct: false },
      { id: "C", text: "Configure", is_correct: true },
      { id: "D", text: "Format", is_correct: false }
    ]
  },
  {
    id: "D2-213",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections. Which section is used to adjust colors, titles and legend layout?",
    explanation: "The Style tab is used for visual formatting like colors, axis labels, and legends.",
    is_active: true,
    choices: [
      { id: "A", text: "Layout", is_correct: false },
      { id: "B", text: "Format", is_correct: false },
      { id: "C", text: "Configure", is_correct: false },
      { id: "D", text: "Style", is_correct: true }
    ]
  },
  {
    id: "D2-214",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections. Which section is used to specify the name and data source?",
    explanation: "The Data tab is the first step where you name the report and select the table or data source.",
    is_active: true,
    choices: [
      { id: "A", text: "Type", is_correct: false },
      { id: "B", text: "Properties", is_correct: false },
      { id: "C", text: "Configure", is_correct: false },
      { id: "E", text: "Data", is_correct: true }
    ]
  },
  {
    id: "D2-222",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What section on a task record would you use to see the most recent update made to a record?",
    explanation: "The Activity Stream (or Activity) shows a chronological log of all changes and comments.",
    is_active: true,
    choices: [
      { id: "A", text: "Audit Log", is_correct: false },
      { id: "B", text: "Timeline", is_correct: false },
      { id: "C", text: "Activity", is_correct: true },
      { id: "D", text: "Journal", is_correct: false }
    ]
  },
  {
    id: "D2-229",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "A task worker asks how they can monitor any updates occurring to records assigned to him. What do you suggest?",
    explanation: "The Activity Stream icon on list views allows users to see live updates for multiple records at once.",
    is_active: true,
    choices: [
      { id: "A", text: "On My Work list, select the Activity Stream icon", is_correct: true },
      { id: "B", text: "Click on the eyeglass icon", is_correct: false },
      { id: "C", text: "Open an Agent workspace tab", is_correct: false },
      { id: "D", text: "Select Service Desk > My Work Dashboard", is_correct: false }
    ]
  },
  {
    id: "D2-237",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "How is a user defined in ServiceNow?",
    explanation: "Users are individuals stored as records in the sys_user table.",
    is_active: true,
    choices: [
      { id: "A", text: "A user is a record stored in the Profile table", is_correct: false },
      { id: "B", text: "A user is a record stored in the User [sys_user] table", is_correct: true },
      { id: "C", text: "A user is a record stored in the User Preference table", is_correct: false },
      { id: "D", text: "A user is a field in the LDAP integration", is_correct: false }
    ]
  },
  {
    id: "D2-248",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is the platform name for the Group table?",
    explanation: "The internal system name for the group table is sys_user_group.",
    is_active: true,
    choices: [
      { id: "A", text: "sys_groups", is_correct: false },
      { id: "B", text: "group", is_correct: false },
      { id: "C", text: "sys_user_group", is_correct: true },
      { id: "D", text: "sys_group", is_correct: false }
    ]
  },
  {
    id: "D2-251",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What types of entities can receive task assignments, in ServiceNow? (Choose two)",
    explanation: "Tasks can be assigned to individual Users or to Groups of users.",
    is_active: true,
    choices: [
      { id: "A", text: "Users", is_correct: true },
      { id: "B", text: "Departments", is_correct: false },
      { id: "C", text: "Groups", is_correct: true },
      { id: "D", text: "Teams", is_correct: false }
    ]
  },
  {
    id: "D2-258",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What section on the notes tab, shows the history of the work documented on the record?",
    explanation: "The Activity Stream section within the Notes tab tracks historical comments and work notes.",
    is_active: true,
    choices: [
      { id: "A", text: "Audit Log", is_correct: false },
      { id: "B", text: "Timeline", is_correct: false },
      { id: "C", text: "Journal", is_correct: false },
      { id: "D", text: "Diary", is_correct: false },
      { id: "E", text: "Activity or Activity Stream", is_correct: true }
    ]
  },
  {
    id: "D2-271",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What capability allows users to create dashboards with widgets to visualize data over time?",
    explanation: "Performance Analytics (PA) focuses on historical data visualization to identify trends and improvements.",
    is_active: true,
    choices: [
      { id: "A", text: "Scheduled Reports", is_correct: false },
      { id: "B", text: "Performance Analytics", is_correct: true },
      { id: "C", text: "Analytics Reports", is_correct: false },
      { id: "D", text: "Reporting", is_correct: false }
    ]
  },
  {
    id: "D2-280",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which feature helps to automatically allocate a critical, high-priority service request to the appropriate group?",
    explanation: "Assignment Rules automatically set the Assigned To or Assignment Group based on record conditions.",
    is_active: true,
    choices: [
      { id: "A", text: "Assignment Rule", is_correct: true },
      { id: "B", text: "User Policy", is_correct: false },
      { id: "C", text: "Predictive Intelligence", is_correct: false },
      { id: "D", text: "UI Policy", is_correct: false }
    ]
  },
  {
    id: "D2-300",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What do you click when you have made modifications to your report and want to see results without saving?",
    explanation: "The 'Run' button generates the report visualization based on unsaved changes in the designer.",
    is_active: true,
    choices: [
      { id: "A", text: "Preview", is_correct: false },
      { id: "B", text: "Test", is_correct: false },
      { id: "C", text: "Run", is_correct: true },
      { id: "D", text: "Try It", is_correct: false }
    ]
  },
  {
    id: "D2-303",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What module do you use to access the reports that are available to you?",
    explanation: "Reports > View / Run is the main portal for managing and viewing available reports.",
    is_active: true,
    choices: [
      { id: "A", text: "Self-Service > My Reports", is_correct: false },
      { id: "B", text: "Self-Service > My Dashboards", is_correct: false },
      { id: "C", text: "Reports > View / Run", is_correct: true },
      { id: "D", text: "Reports > Homepage", is_correct: false }
    ]
  },
  {
    id: "D2-305",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "A new employee joins IT and needs to work in Network and Hardware groups. How would you set up their access? (Choose three)",
    explanation: "First create the User Account, then add that user to the respective assignment groups (Network and Hardware).",
    is_active: true,
    choices: [
      { id: "A", text: "Add User Account to Hardware group", is_correct: true },
      { id: "B", text: "Add User Account to IT Knowledgebase", is_correct: false },
      { id: "C", text: "Create User Account", is_correct: true },
      { id: "D", text: "Add User Account to itil group", is_correct: false },
      { id: "E", text: "Add User Account to Network group", is_correct: true }
    ]
  },
  {
    id: "D2-307",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is the definition of a group?",
    explanation: "A group is fundamentally a collection of users in ServiceNow.",
    is_active: true,
    choices: [
      { id: "A", text: "A collection of subject matter experts", is_correct: false },
      { id: "B", text: "A department", is_correct: false },
      { id: "C", text: "An escalation pod", is_correct: false },
      { id: "D", text: "A collection of users", is_correct: true }
    ]
  }
];
