import { Question, QuestionType } from '../types';

export const DOMAIN5_QUESTIONS: Question[] = [
  {
    id: "d5-q11",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Buttons, form links, and context menu items are all examples of what type of functionality?",
    explanation: "UI Actions are used to add interactive elements like buttons, links, and menu items to forms and lists to perform specific tasks.",
    is_active: true,
    choices: [
      { id: "a", text: "Business Rule", is_correct: false },
      { id: "b", text: "UI Action", is_correct: true },
      { id: "c", text: "Client Script", is_correct: false },
      { id: "d", text: "UI Policy", is_correct: false }
    ]
  },
  {
    id: "d5-q21",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which one of the following statements is true about Column Context Menus?",
    explanation: "The Column Context Menu (right-clicking a column header) allows users to create quick reports, configure the list, and export data.",
    is_active: true,
    choices: [
      { id: "a", text: "It displays actions such as creating quick reports, configuring the list, and exporting data", is_correct: true },
      { id: "b", text: "It displays actions related to filtering options, assigning tags, and search", is_correct: false },
      { id: "c", text: "It displays actions related to viewing and filtering the entire list", is_correct: false },
      { id: "d", text: "It displays actions such as view form, view related task, and add relationship", is_correct: false }
    ]
  },
  {
    id: "d5-q27",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    explanation: "ServiceNow supports four main types of Client Scripts: onLoad, onChange, onSubmit, and onCellEdit.",
    is_active: true,
    choices: [
      { id: "a", text: "onSubmit", is_correct: true },
      { id: "b", text: "onUpdate", is_correct: false },
      { id: "c", text: "onCellEdit", is_correct: true },
      { id: "d", text: "onLoad", is_correct: true },
      { id: "e", text: "onEdit", is_correct: false },
      { id: "f", text: "onChange", is_correct: true },
      { id: "g", text: "onSave", is_correct: false }
    ]
  },
  {
    id: "d5-q32",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is a formatter? Select one of the following.",
    explanation: "A formatter is a form element used to display information that is not a standard field in the record, such as the Activity Stream or CI Relations.",
    is_active: true,
    choices: [
      { id: "a", text: "A formatter allows you to configure applications on your instance", is_correct: false },
      { id: "b", text: "A formatter is a form element used to display information that is not a field in the record", is_correct: true },
      { id: "c", text: "A formatter allows you to populate fields automatically", is_correct: false },
      { id: "d", text: "A formatter is a set of conditions applied to a table to help find and work with data", is_correct: false }
    ]
  },
  {
    id: "d5-q37",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following can be customized through the Basic Configuration UI16 module? (Choose three.)",
    explanation: "Basic Configuration UI16 handles high-level instance branding: Banner Image, Browser Tab Title, and Form Header Size.",
    is_active: true,
    choices: [
      { id: "a", text: "Banner Image", is_correct: true },
      { id: "b", text: "Record Number Format", is_correct: false },
      { id: "c", text: "Browser Tab Title", is_correct: true },
      { id: "d", text: "System Date Format", is_correct: false },
      { id: "e", text: "Form Header Size", is_correct: true }
    ]
  },
  {
    id: "d5-q41",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "How is the Event Log different from the Event Registry?",
    explanation: "The Event Registry defines the events the system can handle, while the Event Log records the actual instances of events being triggered.",
    is_active: true,
    choices: [
      { id: "a", text: "Event Log contains generated Events, the Event Registry is a table of Event definitions", is_correct: true },
      { id: "b", text: "Event Log is formatted in the Log style, the Event Registry displays different fields", is_correct: false },
      { id: "c", text: "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day", is_correct: false },
      { id: "d", text: "Event Log is the same as the Event Registry", is_correct: false }
    ]
  },
  {
    id: "d5-q43",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which group of permissions is used to control Application and Module access?",
    explanation: "Roles are the primary mechanism used to grant or restrict access to specific Applications and Modules in the Navigator.",
    is_active: true,
    choices: [
      { id: "a", text: "Access Control Rules", is_correct: false },
      { id: "b", text: "UI Policies", is_correct: false },
      { id: "c", text: "Roles", is_correct: true },
      { id: "d", text: "Assignment Rules", is_correct: false }
    ]
  },
  {
    id: "d5-q49",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which of the following allows a user to edit field values in a list without opening the form?",
    explanation: "The List Editor provides the ability to perform inline updates to records directly within the list view.",
    is_active: true,
    choices: [
      { id: "a", text: "Data Editor", is_correct: false },
      { id: "b", text: "Edit Menu", is_correct: false },
      { id: "c", text: "List Editor", is_correct: true },
      { id: "d", text: "Form Designer", is_correct: false }
    ]
  },
  {
    id: "d5-q56",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
    explanation: "Virtual Agent is the ServiceNow conversational interface (chatbot) designed for automated user assistance.",
    is_active: true,
    choices: [
      { id: "a", text: "Answer Agent", is_correct: false },
      { id: "b", text: "live Feed", is_correct: false },
      { id: "c", text: "Virtual Agent", is_correct: true },
      { id: "d", text: "Connect Chat", is_correct: false }
    ]
  },
  {
    id: "d5-q63",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "How do you make a list filter available to everyone?",
    explanation: "To share a filter, you must define a Name, set the visibility to 'Everyone' or specific groups/roles, and then save the filter.",
    is_active: true,
    choices: [
      { id: "a", text: "Make active, assign a name, and save", is_correct: false },
      { id: "b", text: "Assign a group, set visibility, and save", is_correct: false },
      { id: "c", text: "Assign a name, set visibility, and save", is_correct: true },
      { id: "d", text: "Make active, set visibility, and save", is_correct: false }
    ]
  },
  {
    id: "d5-q66",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which tool should be used to populate commonly used fields in a form?",
    explanation: "Templates allow users to pre-define field values to speed up the process of creating or updating records.",
    is_active: true,
    choices: [
      { id: "a", text: "Template", is_correct: true },
      { id: "b", text: "Reference Qualifier", is_correct: false },
      { id: "c", text: "Formatter", is_correct: false },
      { id: "d", text: "Assignment Rule", is_correct: false }
    ]
  },
  {
    id: "d5-q69",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is a Notification?",
    explanation: "A notification is a mechanism for alerting users that specific platform events (like a record being assigned to them) have occurred.",
    is_active: true,
    choices: [
      { id: "a", text: "A new Knowledge article created by a Business Rule", is_correct: false },
      { id: "b", text: "A tool for alerting users that events that concern them have occurred", is_correct: true },
      { id: "c", text: "A message through Connect related to a Change Request", is_correct: false },
      { id: "d", text: "An email file attachment", is_correct: false }
    ]
  },
  {
    id: "d5-q70",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which one of the following is NOT a type of Visual Task Board?",
    explanation: "The standard VTB types are Freeform, Flexible, and Guided. 'Feature' is not a VTB type.",
    is_active: true,
    choices: [
      { id: "a", text: "Flexible", is_correct: false },
      { id: "b", text: "Freeform", is_correct: false },
      { id: "c", text: "Feature", is_correct: true },
      { id: "d", text: "Guided boards", is_correct: false }
    ]
  },
  {
    id: "d5-q72",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What are two ways to generate an Event? (Choose two.)",
    explanation: "Events are typically triggered by Business Rules (scripts) or as part of a Workflow/Flow logic.",
    is_active: true,
    choices: [
      { id: "a", text: "Business Rule", is_correct: true },
      { id: "b", text: "Workflow", is_correct: true },
      { id: "c", text: "Log entry", is_correct: false },
      { id: "d", text: "Knowledge article publication", is_correct: false }
    ]
  },
  {
    id: "d5-q78",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which of the following is used to categorize, flag, and locate records?",
    explanation: "Tags allow users to categorize records for quick retrieval and organization across different tables.",
    is_active: true,
    choices: [
      { id: "a", text: "Search", is_correct: false },
      { id: "b", text: "Favorites", is_correct: false },
      { id: "c", text: "Tags", is_correct: true },
      { id: "d", text: "Bookmarks", is_correct: false }
    ]
  },
  {
    id: "d5-q88",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "An IT manager is responsible for the Network and Hardware assignment groups, but cannot see tasks in My Groups Work. What could explain this?",
    explanation: "To see records in 'My Groups Work', a user must be an active member of those specific assignment groups.",
    is_active: true,
    choices: [
      { id: "a", text: "The Assignment Group manager field is empty", is_correct: false },
      { id: "b", text: "The manager does not have the itil role", is_correct: false },
      { id: "c", text: "The manager is not a member of the Service Desk group", is_correct: false },
      { id: "d", text: "The manager is not a member of the Network and Hardware groups", is_correct: true }
    ]
  },
  {
    id: "d5-q92",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "You are showing your customer a new form. They want to add a field. Where could you do that? (Choose two.)",
    explanation: "Administrators use Form Layout (for existing fields) or Form Designer (for new/existing fields) to modify form structure.",
    is_active: true,
    choices: [
      { id: "a", text: "Select Fields and Columns module", is_correct: false },
      { id: "b", text: "Right click on form header, select Configure > Form Layout", is_correct: true },
      { id: "c", text: "Click on context menu, select Configure > Form Designer", is_correct: true },
      { id: "d", text: "Select Field Class Manager module", is_correct: false }
    ]
  },
  {
    id: "d5-q97",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is used frequently to move customizations from one instance to another?",
    explanation: "Update Sets are the primary mechanism for packaging and moving configuration changes between ServiceNow instances.",
    is_active: true,
    choices: [
      { id: "a", text: "Update Sets", is_correct: true },
      { id: "b", text: "Code Sets", is_correct: false },
      { id: "c", text: "Update Packs", is_correct: false },
      { id: "d", text: "Configuration Logs", is_correct: false }
    ]
  },
  {
    id: "d5-q98",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "In the Navigator, the Pencil icon on the Favorites tab allows users to modify the label, color, and icon of their favorites.",
    is_active: true,
    choices: [
      { id: "a", text: "Clock", is_correct: false },
      { id: "b", text: "Hamburger", is_correct: false },
      { id: "c", text: "Pencil", is_correct: true },
      { id: "d", text: "Three dots", is_correct: false }
    ]
  },
  {
    id: "d5-q99",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What needs to be specified, when creating a Business Rule? (Choose four.)",
    explanation: "A Business Rule requires a Table, the Timing (when it runs), the Condition to evaluate, and the Script/Action to execute.",
    is_active: true,
    choices: [
      { id: "a", text: "UI action", is_correct: false },
      { id: "b", text: "Table", is_correct: true },
      { id: "c", text: "Fields to update", is_correct: false },
      { id: "d", text: "Who can run", is_correct: false },
      { id: "e", text: "Script to run", is_correct: true },
      { id: "f", text: "Application scope", is_correct: false },
      { id: "g", text: "Update set", is_correct: false },
      { id: "h", text: "Timing", is_correct: true },
      { id: "i", text: "Condition to evaluate", is_correct: true }
    ]
  },
  {
    id: "d5-q103",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "As an IT employee what interface would you use to browse internal IT documentation?",
    explanation: "Knowledge Management is the central repository for articles, procedures, and internal documentation.",
    is_active: true,
    choices: [
      { id: "a", text: "Knowledge", is_correct: true },
      { id: "b", text: "ServiceNow Wiki", is_correct: false },
      { id: "c", text: "Knowledge Now", is_correct: false },
      { id: "d", text: "SharePoint", is_correct: false }
    ]
  },
  {
    id: "d5-q104",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "A Service Desk employee complains that dates/times are incorrect on their list. What would you suggest?",
    explanation: "Users can personalize their time zone via System Settings (the Gear icon) in the banner frame.",
    is_active: true,
    choices: [
      { id: "a", text: "Clear cache", is_correct: false },
      { id: "b", text: "Set employee time zone using gear icon", is_correct: true },
      { id: "c", text: "Use Chrome instead of Explorer", is_correct: false },
      { id: "d", text: "Correct instance time zone", is_correct: false }
    ]
  },
  {
    id: "d5-q105",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What are three security modules often used by the System Administrator? (Choose three.)",
    explanation: "Common security modules include the Security Overview, Access Control (ACL) definitions, and High Security Settings.",
    is_active: true,
    choices: [
      { id: "a", text: "System Properties > Security", is_correct: false },
      { id: "b", text: "Utilities > Migrate Security", is_correct: false },
      { id: "c", text: "System Security > Security", is_correct: true },
      { id: "d", text: "Self-Service > My Access", is_correct: false },
      { id: "e", text: "System Security > Access Control (ACL)", is_correct: true },
      { id: "f", text: "Password Management > Security Questions", is_correct: false },
      { id: "g", text: "System Security > High Security Settings", is_correct: true }
    ]
  },
  {
    id: "d5-q106",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "When testing a catalog item with manager approval flows, which best practices would you follow? (Choose three.)",
    explanation: "Testing requires active flows, impersonating the requester for accurate experience, and ensuring the requester has the data (manager) required for the flow.",
    is_active: true,
    choices: [
      { id: "a", text: "Make sure latest flows are activated", is_correct: true },
      { id: "b", text: "Use Incognito to toggle between requester and approver", is_correct: false },
      { id: "c", text: "Impersonate the requester", is_correct: true },
      { id: "d", text: "Ensure requester has a manager specified", is_correct: true },
      { id: "e", text: "Create and select Testing Update Set", is_correct: false },
      { id: "f", text: "Use Admin account to approve quickly", is_correct: false }
    ]
  },
  {
    id: "d5-q109",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is specified in an Access Control rule?",
    explanation: "An ACL rule combines an Object (table/field), an Operation (read/write/etc.), and the Permissions required to perform it.",
    is_active: true,
    choices: [
      { id: "a", text: "Groups, Conditional Expressions and Workflows", is_correct: false },
      { id: "b", text: "Table Schema, CRUD, and User Authentication", is_correct: false },
      { id: "c", text: "Object and Operation being secured; Permissions required to access the object", is_correct: true },
      { id: "d", text: "security_admin", is_correct: false }
    ]
  },
  {
    id: "d5-q117",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What type of field allows you to look up values from one other table?",
    explanation: "A Reference field creates a dynamic link between the current table and a specific record on another table.",
    is_active: true,
    choices: [
      { id: "a", text: "Reference", is_correct: true },
      { id: "b", text: "Verity", is_correct: false },
      { id: "c", text: "Options", is_correct: false },
      { id: "d", text: "Selections", is_correct: false }
    ]
  },
  {
    id: "d5-q124",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which tab on the knowledge base record identifies users who can read articles?",
    explanation: "The 'Can Read' related list on a KB record defines the User Criteria for visibility.",
    is_active: true,
    choices: [
      { id: "a", text: "Can Contribute", is_correct: false },
      { id: "b", text: "Cannot Author", is_correct: false },
      { id: "c", text: "Can Read", is_correct: true },
      { id: "d", text: "Cannot Write", is_correct: false }
    ]
  },
  {
    id: "d5-q125",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which tab defines users who are NOT able to write articles?",
    explanation: "The 'Cannot Author' or 'Cannot Contribute' tabs are used to explicitly exclude sets of users from creating/editing content.",
    is_active: true,
    choices: [
      { id: "a", text: "Can Contribute", is_correct: false },
      { id: "b", text: "Cannot Author", is_correct: true },
      { id: "c", text: "Cannot Contribute", is_correct: false },
      { id: "d", text: "Cannot Write", is_correct: false }
    ]
  },
  {
    id: "d5-q126",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which tab defines users who ARE able to write articles?",
    explanation: "The 'Can Author' or 'Can Contribute' list specifies users who have permission to create and edit KB content.",
    is_active: true,
    choices: [
      { id: "a", text: "Can Contribute", is_correct: false },
      { id: "b", text: "Cannot Author", is_correct: false },
      { id: "c", text: "Can Read", is_correct: false },
      { id: "d", text: "Can Write", is_correct: false },
      { id: "e", text: "Can Author", is_correct: true }
    ]
  },
  {
    id: "d5-q128",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Categories in the knowledge base can be created and edited by which knowledge workers? (Choose two.)",
    explanation: "Knowledge Managers and specific Knowledge Category Managers have the authority to manage the KB category structure.",
    is_active: true,
    choices: [
      { id: "a", text: "Knowledge Authors", is_correct: false },
      { id: "b", text: "Knowledge Contributors", is_correct: false },
      { id: "c", text: "Knowledge Controller", is_correct: false },
      { id: "d", text: "Knowledge Managers", is_correct: true },
      { id: "e", text: "Knowledge Category Managers", is_correct: true }
    ]
  },
  {
    id: "d5-q135",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What type of user has clearly defined workflows and one or more roles (itil, approver_user)?",
    explanation: "Fulfillers (often referred to as Request Fulfillers) are users with technical roles who perform work on tasks using defined processes.",
    is_active: true,
    choices: [
      { id: "a", text: "Workflow User", is_correct: false },
      { id: "b", text: "Request Fulfiller", is_correct: true },
      { id: "c", text: "ITSM User", is_correct: false },
      { id: "d", text: "Approving Manager", is_correct: false },
      { id: "e", text: "Service Desk User", is_correct: false }
    ]
  },
  // --- BATCH 2 ---
  {
    id: "d5-q141",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is a key difference between Reporting and Performance Analytics?",
    explanation: "Performance Analytics tracks trends over time using periodic snapshots, whereas standard Reporting shows real-time data at the exact moment the report is run.",
    is_active: true,
    choices: [
      { id: "a", text: "Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is when the report is run", is_correct: true },
      { id: "b", text: "Performance Analytics can show trends; Reports cannot", is_correct: false },
      { id: "c", text: "Reports can be run on a scheduled basis; Performance Analytics cannot", is_correct: false },
      { id: "d", text: "Performance Analytics data can be published to Dashboards; Reports cannot", is_correct: false },
      { id: "e", text: "Performance Analytics shows KPIs; Reporting does not", is_correct: false }
    ]
  },
  {
    id: "d5-q148",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "From a form, what would you click to add additional fields to the form? (Choose two.)",
    explanation: "Form Layout (using the slushbucket) and Form Designer (drag and drop) are the two primary tools for modifying form fields.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > Form > Layout", is_correct: false },
      { id: "b", text: "Context Menu > Configure > Form Layout", is_correct: true },
      { id: "c", text: "Context Menu > Configure > Form Design", is_correct: true },
      { id: "d", text: "Right click on header > Add > Field", is_correct: false },
      { id: "e", text: "Context Menu > Form > Designer", is_correct: false },
      { id: "f", text: "Right click on header > Configure > UX Dashboard", is_correct: false }
    ]
  },
  {
    id: "d5-q152",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What function do you use to add buttons, links, and context menu items on forms and lists?",
    explanation: "UI Actions are the mechanism for providing interactive elements like buttons and links across the platform.",
    is_active: true,
    choices: [
      { id: "a", text: "UI Policies", is_correct: false },
      { id: "b", text: "UI Settings", is_correct: false },
      { id: "c", text: "UI Actions", is_correct: true },
      { id: "d", text: "UI Config", is_correct: false }
    ]
  },
  {
    id: "d5-q153",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "On a Business Rule, the When setting determines at what point the rule executes. What are the options?",
    explanation: "Business Rules can be set to run Before (database action), After (database action), Async (queued), or Display (before form load).",
    is_active: true,
    choices: [
      { id: "a", text: "Before, After, Async, Display", is_correct: true },
      { id: "b", text: "Prior to, Synchronous, on Update", is_correct: false },
      { id: "c", text: "Insert, Update, Delete, Query", is_correct: false },
      { id: "d", text: "Before, Synchronous, Scheduled Job, View", is_correct: false }
    ]
  },
  {
    id: "d5-q158",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What type of query allows you to filter list data using normal words, instead of the condition builder?",
    explanation: "Natural Language Query (NLQ) allows users to express filter requirements in plain language.",
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
    id: "d5-q161",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "A Role is defined as what?",
    explanation: "In ServiceNow, a role is a collection of permissions that can be assigned to users or groups.",
    is_active: true,
    choices: [
      { id: "a", text: "A collection of permissions", is_correct: true },
      { id: "b", text: "A set of user access policies", is_correct: false },
      { id: "c", text: "A Persona in a workflow", is_correct: false },
      { id: "d", text: "A set of access control rules", is_correct: false }
    ]
  },
  {
    id: "d5-q165",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What are advantages of using Flow Designer? (Choose three.)",
    explanation: "Flow Designer reduces technical debt by providing a natural language interface, minimizing manual scripting, and enabling easy third-party integrations.",
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
    id: "d5-q170",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is the most common role that has access to almost all platform features, functions, and data?",
    explanation: "The admin (System Administrator) role provides nearly full access to the entire platform.",
    is_active: true,
    choices: [
      { id: "a", text: "Security Admin [security_admin]", is_correct: false },
      { id: "b", text: "Sys Admin [sys_admin]", is_correct: false },
      { id: "c", text: "Admin [sn_admin]", is_correct: false },
      { id: "d", text: "System Administrator [admin]", is_correct: true },
      { id: "e", text: "Base Admin [base_admin]", is_correct: false }
    ]
  },
  {
    id: "d5-q178",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which statement correctly describes the differences between a Client Script and a Business Rule?",
    explanation: "Client Scripts run in the user's browser, while Business Rules run on the server after a record is sent to the database.",
    is_active: true,
    choices: [
      { id: "a", text: "Client Script executes before record load; Business Rule after load", is_correct: false },
      { id: "b", text: "Client Script executes on the server; Business Rule on the client", is_correct: false },
      { id: "c", text: "Client Script executes on the client; Business Rule executes on the server", is_correct: true },
      { id: "d", text: "Client Script executes before load; Business Rule after update", is_correct: false }
    ]
  },
  {
    id: "d5-q181",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What attributes can you manage using System Properties > Basic Configuration UI16? (Choose five.)",
    explanation: "Basic Configuration UI16 handles branding: Banner, Tab Title, Theme, Fonts, and Header colors.",
    is_active: true,
    choices: [
      { id: "a", text: "Browser tab title", is_correct: true },
      { id: "b", text: "Module text color", is_correct: false },
      { id: "c", text: "Preferred browser", is_correct: false },
      { id: "d", text: "Base theme", is_correct: true },
      { id: "e", text: "Font style", is_correct: true },
      { id: "f", text: "Animation style", is_correct: false },
      { id: "g", text: "Header background color", is_correct: true },
      { id: "h", text: "Banner Image", is_correct: true }
    ]
  },
  {
    id: "d5-q188",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What are the main components of the Form Design interface? (Choose three.)",
    explanation: "The Form Designer interface includes the Field Navigator (to find fields), the Field Picker, and the actual Form Layout.",
    is_active: true,
    choices: [
      { id: "a", text: "Field Layout", is_correct: false },
      { id: "b", text: "Page Header", is_correct: false },
      { id: "c", text: "Field Navigator", is_correct: true },
      { id: "d", text: "Field Picker", is_correct: true },
      { id: "e", text: "Form Layout", is_correct: true }
    ]
  },
  {
    id: "d5-q203",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "On a filter condition, which element is based on the table, user access rights, and columns on the table?",
    explanation: "The 'Field' selection in a filter is restricted by the table definition and user permissions.",
    is_active: true,
    choices: [
      { id: "a", text: "Label", is_correct: false },
      { id: "b", text: "Column", is_correct: false },
      { id: "c", text: "Data Element", is_correct: false },
      { id: "d", text: "Field", is_correct: true },
      { id: "e", text: "Attribute", is_correct: false }
    ]
  },
  {
    id: "d5-q208",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "On the Form header, which icon do you use to access form templates?",
    explanation: "The Stamp icon in the form header bar toggles the template selection bar.",
    is_active: true,
    choices: [
      { id: "a", text: "Stamp", is_correct: true },
      { id: "b", text: "Pages", is_correct: false },
      { id: "c", text: "More Options (...)", is_correct: false },
      { id: "d", text: "Paperclip", is_correct: false }
    ]
  },
  {
    id: "d5-q212",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "The Report Designer section used to specify grouping and calculations is:",
    explanation: "The 'Group by' or 'Configure' tab in Report Designer manages how data is aggregated.",
    is_active: true,
    choices: [
      { id: "a", text: "Style", is_correct: false },
      { id: "b", text: "Group by", is_correct: true },
      { id: "c", text: "Configure", is_correct: false },
      { id: "d", text: "Format", is_correct: false },
      { id: "e", text: "Data", is_correct: false }
    ]
  },
  {
    id: "d5-q213",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "The Report Designer section used to adjust look (colors, titles, legend) is:",
    explanation: "The 'Style' tab is dedicated to visual presentation properties.",
    is_active: true,
    choices: [
      { id: "a", text: "Layout", is_correct: false },
      { id: "b", text: "Format", is_correct: false },
      { id: "c", text: "Configure", is_correct: false },
      { id: "d", text: "Style", is_correct: true }
    ]
  },
  {
    id: "d5-q214",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "The Report Designer section used to specify the report name and data source is:",
    explanation: "The core report attributes like Name and Source table are defined in the 'Properties' (within the Data phase).",
    is_active: true,
    choices: [
      { id: "a", text: "Type", is_correct: false },
      { id: "b", text: "Properties", is_correct: true },
      { id: "c", text: "Configure", is_correct: false },
      { id: "d", text: "Sources", is_correct: false },
      { id: "e", text: "Data", is_correct: false }
    ]
  },
  {
    id: "d5-q226",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is the language used for scripting in ServiceNow?",
    explanation: "JavaScript is the standard language for both Client-side and Server-side scripting in ServiceNow.",
    is_active: true,
    choices: [
      { id: "a", text: "C++", is_correct: false },
      { id: "b", text: "JavaScript", is_correct: true },
      { id: "c", text: "PHP", is_correct: false },
      { id: "d", text: "Python", is_correct: false }
    ]
  },
  {
    id: "d5-q227",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What are examples of UI Actions relating to Lists? (Choose four.)",
    explanation: "List UI Actions include buttons, context menus, bottom-of-list choices, and specific list controls.",
    is_active: true,
    choices: [
      { id: "a", text: "List Links", is_correct: true },
      { id: "b", text: "List Choices", is_correct: false },
      { id: "c", text: "List Buttons", is_correct: true },
      { id: "d", text: "List Override", is_correct: false },
      { id: "e", text: "List Context Menu", is_correct: true },
      { id: "f", text: "List Control", is_correct: true }
    ]
  },
  {
    id: "d5-q234",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which type of ServiceNow scripts runs in the browser?",
    explanation: "UI Policies and Client Scripts execute on the client side (browser) for immediate interaction.",
    is_active: true,
    choices: [
      { id: "a", text: "Script Include Scripts", is_correct: false },
      { id: "b", text: "Access Control Scripts", is_correct: false },
      { id: "c", text: "Business Rule Scripts", is_correct: false },
      { id: "d", text: "UI Policies and Client Scripts", is_correct: true }
    ]
  },
  {
    id: "d5-q245",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "On a form, which type of field has an icon that can be clicked to preview the associated record?",
    explanation: "Reference fields provide a 'preview' icon (the 'i') to see details of the linked record without navigating away.",
    is_active: true,
    choices: [
      { id: "a", text: "Lookup", is_correct: false },
      { id: "b", text: "Preview", is_correct: false },
      { id: "c", text: "Reference", is_correct: true },
      { id: "d", text: "Snapshot", is_correct: false },
      { id: "e", text: "Quickview", is_correct: false }
    ]
  },
  {
    id: "d5-q256",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "While showing a customer their Incident form, they ask to change the Priority field title to display their internal terminology. How would you do that? (Choose two.)",
    explanation: "Admins can modify labels by right-clicking the field and selecting 'Configure Label' or directly editing the 'Dictionary' record.",
    is_active: true,
    choices: [
      { id: "a", text: "Right click on Priority and select Configure Label", is_correct: true },
      { id: "b", text: "Right click on Priority and select Configure Dictionary", is_correct: true },
      { id: "c", text: "Right click on Priority and select Configure Display Settings", is_correct: false },
      { id: "d", text: "Right click on Priority and select Configure Column", is_correct: false }
    ]
  },
  {
    id: "d5-q262",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What are examples of UI Actions relating to forms? (Choose three.)",
    explanation: "Form UI Actions include header buttons, form links (at bottom), and the form context menu.",
    is_active: true,
    choices: [
      { id: "a", text: "Form Columns", is_correct: false },
      { id: "b", text: "Form View", is_correct: false },
      { id: "c", text: "Form Buttons", is_correct: true },
      { id: "d", text: "Form Context Menu", is_correct: true },
      { id: "e", text: "Form Links", is_correct: true }
    ]
  },
  {
    id: "d5-q272",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which type of ServiceNow script runs on the web browser?",
    explanation: "Client scripts are designated to run within the user's web browser environment.",
    is_active: true,
    choices: [
      { id: "a", text: "Server script", is_correct: false },
      { id: "b", text: "Database script", is_correct: false },
      { id: "c", text: "Client script", is_correct: true },
      { id: "d", text: "Local script", is_correct: false }
    ]
  },
  {
    id: "d5-q287",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange columns on a list. Where should they go?",
    explanation: "The 'Personalize List' option (available via the Gear icon or List context menu) allows individual users to customize their list columns.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > Configure > List Layout", is_correct: false },
      { id: "b", text: "List Context Menu > Configure > List Layout", is_correct: false },
      { id: "c", text: "List Context Menu > Personalize List", is_correct: true },
      { id: "d", text: "Personalize List", is_correct: false }
    ]
  },
  {
    id: "d5-q294",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What action allows you to personalize layouts of columns in a list?",
    explanation: "Clicking the Gear Icon opens the Personalize window where a user can select and arrange columns for their own view.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > View > Personalize", is_correct: false },
      { id: "b", text: "Click Gear Icon > Personalize window options", is_correct: true },
      { id: "c", text: "Select column header > options", is_correct: false },
      { id: "d", text: "Click Edit (Pencil)", is_correct: false }
    ]
  },
  {
    id: "d5-q300",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What do you click to see report results without saving?",
    explanation: "The 'Preview' button (or 'Run' in some versions) allows viewing the report generation without committing a save to the record.",
    is_active: true,
    choices: [
      { id: "a", text: "Preview", is_correct: true },
      { id: "b", text: "Test", is_correct: false },
      { id: "c", text: "Run", is_correct: false },
      { id: "d", text: "Try It", is_correct: false },
      { id: "e", text: "Execute", is_correct: false }
    ]
  }
];
