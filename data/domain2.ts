import { Question, QuestionType } from '../types';

export const DOMAIN2_QUESTIONS: Question[] = [
  {
    id: "d2-q10",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "From the User menu, which actions can a user select? (Choose three.)",
    explanation: "The User menu allows for logging out, elevating security roles, and impersonating users.",
    is_active: true,
    choices: [
      { id: "a", text: "Send Notifications", is_correct: false },
      { id: "b", text: "Log Out ServiceNow", is_correct: true },
      { id: "c", text: "Elevate Roles", is_correct: true },
      { id: "d", text: "Impersonate Users", is_correct: true },
      { id: "e", text: "Order from Service Catalog", is_correct: false },
      { id: "f", text: "Approve Records", is_correct: false }
    ]
  },
  {
    id: "d2-q30",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which tool is used to have conversations with logged-in users in real-time?",
    explanation: "Connect Chat is the real-time messaging tool within the ServiceNow platform.",
    is_active: true,
    choices: [
      { id: "a", text: "Connect Chat", is_correct: true },
      { id: "b", text: "Now Messenger", is_correct: false },
      { id: "c", text: "User Presence", is_correct: false },
      { id: "d", text: "Comments", is_correct: false }
    ]
  },
  {
    id: "d2-q41",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "How is the Event Log different from the Event Registry?",
    explanation: "Event Log contains generated Events, whereas the Event Registry is a table of Event definitions.",
    is_active: true,
    choices: [
      { id: "a", text: "Event Log contains generated Events, the Event Registry is a table of Event definitions", is_correct: true },
      { id: "b", text: "Event Log is formatted in the Log style, the Event Registry displays different fields", is_correct: false },
      { id: "c", text: "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day (24-hour period)", is_correct: false },
      { id: "d", text: "Event Log is the same as the Event Registry", is_correct: false }
    ]
  },
  {
    id: "d2-q69",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is a Notification?",
    explanation: "A notification is a tool for alerting users that events that concern them have occurred.",
    is_active: true,
    choices: [
      { id: "a", text: "A new Knowledge article created by a Business Rule", is_correct: false },
      { id: "b", text: "A tool for alerting users that events that concern them have occurred", is_correct: true },
      { id: "c", text: "A message through Connect related to a Change Request", is_correct: false },
      { id: "d", text: "An email file attachment", is_correct: false }
    ]
  },
  {
    id: "d2-q71",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What are (are) best practice(s) regarding users/groups/roles? (Choose two.)",
    explanation: "Best practice is to add users to groups and assign roles to groups, not directly to users.",
    is_active: true,
    choices: [
      { id: "a", text: "You should never assign roles to groups.", is_correct: false },
      { id: "b", text: "You should assign roles to users.", is_correct: false },
      { id: "c", text: "You should add users to groups.", is_correct: true },
      { id: "d", text: "You should assign roles to groups", is_correct: true }
    ]
  },
  {
    id: "d2-q72",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What are two ways to generate an Event? (Choose two.)",
    explanation: "Events are typically generated via Business Rules or Workflows.",
    is_active: true,
    choices: [
      { id: "a", text: "Business Rule", is_correct: true },
      { id: "b", text: "Workflow", is_correct: true },
      { id: "c", text: "Log entry", is_correct: false },
      { id: "d", text: "Knowledge article publication", is_correct: false }
    ]
  },
  {
    id: "d2-q88",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "An IT manager is responsible for the Network and Hardware assignment groups. The manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    explanation: "The manager must be a member of the groups to see them in the 'My Groups Work' list.",
    is_active: true,
    choices: [
      { id: "a", text: "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.", is_correct: false },
      { id: "b", text: "The manager does not have the itil role.", is_correct: false },
      { id: "c", text: "The manager is not a member of the Service Desk group.", is_correct: false },
      { id: "d", text: "The manager is not a member of the Network and Hardware groups.", is_correct: true },
      { id: "e", text: "The Assignment Group manager field is empty", is_correct: false }
    ]
  },
  {
    id: "d2-q99",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What needs to be specified, when creating a Business Rule? (Choose four.)",
    explanation: "A Business Rule requires a Table, Timing, Condition, and the Script/Action to run.",
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
    id: "d2-q105",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "What are three security modules often used by the System Administrator? (Choose three.)",
    explanation: "System Security > Security, Access Control (ACL), and High Security Settings are commonly used.",
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
    id: "d2-q107",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is a no-code approach to control the mandatory or read-only state of a form field?",
    explanation: "UI Policies provide a no-code way to manage field visibility and requirements.",
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
    id: "d2-q112",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which tool is used to change the order of fields on a form for all users?",
    explanation: "Form Layout is used to modify the global field arrangement on a form.",
    is_active: true,
    choices: [
      { id: "a", text: "Personalize List", is_correct: false },
      { id: "b", text: "Form Layout", is_correct: true },
      { id: "c", text: "UI Policy", is_correct: false },
      { id: "d", text: "Form Filter", is_correct: false }
    ]
  },
  {
    id: "d2-q123",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which collaboration tool is available from the banner, using the bubble icon?",
    explanation: "The bubble icon in the banner frame opens Connect Chat.",
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
    id: "d2-q129",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which collaboration tool opens a sidebar and allows you to create new conversations with other ServiceNow users?",
    explanation: "Connect Chat provides the sidebar for real-time internal communication.",
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
    id: "d2-q175",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    explanation: "Notifications are triggered by events to keep users informed.",
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
    id: "d2-q176",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    explanation: "Virtual Agent provides knowledge and assistance through a chat interface.",
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
    id: "d2-q187",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?",
    explanation: "The 'Can Read' tab defines access permissions for users.",
    is_active: true,
    choices: [
      { id: "a", text: "Access List", is_correct: false },
      { id: "b", text: "Can Access", is_correct: false },
      { id: "c", text: "Accessible to", is_correct: false },
      { id: "d", text: "Can Read", is_correct: true }
    ]
  },
  {
    id: "d2-q189",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What is used to determine user access to knowledge bases or a knowledge article?",
    explanation: "User Criteria is the mechanism used to control access to knowledge and catalog items.",
    is_active: true,
    choices: [
      { id: "a", text: "sn_kb_read, sn_article_read", is_correct: false },
      { id: "b", text: "Privacy Settings", is_correct: false },
      { id: "c", text: "Read Access Flag", is_correct: false },
      { id: "d", text: "User Criteria", is_correct: true }
    ]
  },
  {
    id: "d2-q206",
    domain_id: 2,
    type: QuestionType.MULTI_SELECT,
    text: "When managing tags, you can adjust who is able to see it. What are the visibility options? (Choose three.)",
    explanation: "Tags can be set to Me, Everyone, or specific Groups and Users.",
    is_active: true,
    choices: [
      { id: "a", text: "Groups and Users", is_correct: true },
      { id: "b", text: "Me", is_correct: true },
      { id: "c", text: "Roles and Permissions", is_correct: false },
      { id: "d", text: "Everyone", is_correct: true },
      { id: "e", text: "Admins", is_correct: false }
    ]
  },
  {
    id: "d2-q229",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "A task worker asks how they can monitor any updates occurring to records assigned to him. What do you suggest?",
    explanation: "The Activity Stream icon on a list shows a live frame of record updates.",
    is_active: true,
    choices: [
      { id: "a", text: "On My Work list, select the Activity Stream icon to show a frame with live updates", is_correct: true },
      { id: "b", text: "Click on the eyeglass icon to expand the Monitor frame", is_correct: false },
      { id: "c", text: "Open an Agent workspace tab for each record he wants to monitor", is_correct: false },
      { id: "d", text: "Select Service Desk > My Work Dashboard", is_correct: false }
    ]
  },
  {
    id: "d2-q246",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "While on an Incident record, how would you add a Tag for 'Special Handling' to the record?",
    explanation: "The 'More options (...)' menu contains the functionality to add tags to a record.",
    is_active: true,
    choices: [
      { id: "a", text: "Click on the Context menu, select Add Tag, type Special Handling, press enter", is_correct: false },
      { id: "b", text: "Click on the More options (...) icon, click Add Tag, type Special Handling, press enter", is_correct: true },
      { id: "c", text: "On the Tag field, select Special Handling from the choice list", is_correct: false },
      { id: "d", text: "On the Special Handling field, check the box", is_correct: false }
    ]
  },
  {
    id: "d2-q258",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What section on the notes tab, shows the history of the work documented on the record?",
    explanation: "The Activity Stream (or simply Activity) shows the history of updates on the record.",
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
    id: "d2-q266",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What setting allows users to view a Knowledge Base article even if they are not logged in?",
    explanation: "Setting an article to 'Public' allows unauthenticated access.",
    is_active: true,
    choices: [
      { id: "a", text: "The Public setting", is_correct: true },
      { id: "b", text: "The View All setting", is_correct: false },
      { id: "c", text: "The ESS role", is_correct: false },
      { id: "d", text: "The Allow All role", is_correct: false }
    ]
  },
  {
    id: "d2-q281",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "You are editing a new incident record and would like the 'Save' button to be located on the Form header. Which action would need to be taken?",
    explanation: "Enabling 'glide.ui.advanced' in UI properties allows for enhanced header actions.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > Form Design > add the “Save” button.", is_correct: false },
      { id: "b", text: "All > System Properties > UI Properties > Turn on the “glide.ui.advanced” property.", is_correct: true },
      { id: "c", text: "All > System Properties > UI Properties > Turn on the “Save” button.", is_correct: false },
      { id: "d", text: "Context Menu > Form Layout > add the “Save” button", is_correct: false }
    ]
  },
  {
    id: "d2-q286",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What process allows users to create, categorize, review, approve and browse important information in a centralized location?",
    explanation: "Knowledge Management is the process for organizational information sharing.",
    is_active: true,
    choices: [
      { id: "a", text: "Self Service Management", is_correct: false },
      { id: "b", text: "Knowledge Management", is_correct: true },
      { id: "c", text: "Business Information Management", is_correct: false },
      { id: "d", text: "Information Portal Management", is_correct: false },
      { id: "e", text: "Knowledge-Centered Management", is_correct: false }
    ]
  },
  {
    id: "d2-q309",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "When moving a homepage or dashboard between instances, what must you remember?",
    explanation: "Dashboards and Homepages must be manually added to update sets as they are not captured automatically.",
    is_active: true,
    choices: [
      { id: "a", text: "Download both as PDF and XML files", is_correct: false },
      { id: "b", text: "They cannot be moved via update set", is_correct: false },
      { id: "c", text: "The Platform will automatically add them to the update set", is_correct: false },
      { id: "d", text: "Manually add them to the update set", is_correct: true },
      { id: "e", text: "They are automatically added to the update set", is_correct: false },
      { id: "f", text: "Create a separate update set for them", is_correct: false }
    ]
  },
  {
    id: "d2-q313",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "What section on a task record is used to see the most recent updates made to a record?",
    explanation: "The Activity Stream section provides a chronological view of recent record updates.",
    is_active: true,
    choices: [
      { id: "a", text: "Timeline", is_correct: false },
      { id: "b", text: "Related List", is_correct: false },
      { id: "c", text: "Activity Stream", is_correct: true },
      { id: "d", text: "Audit Log", is_correct: false }
    ]
  },
  {
    id: "d2-q315",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "UI Policy can make fields read-only, mandatory, or hidden.",
    explanation: "UI Policies control visibility, requirement, and access of form fields.",
    is_active: true,
    choices: [
      { id: "a", text: "True", is_correct: true },
      { id: "b", text: "False", is_correct: false }
    ]
  },
  {
    id: "d2-q319",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "On a form header, what icon would you click to access Template features?",
    explanation: "The Stamp icon is used to access the Template bar on forms.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu", is_correct: false },
      { id: "b", text: "Paper clip", is_correct: false },
      { id: "c", text: "More options (...)", is_correct: false },
      { id: "d", text: "Stamp", is_correct: true }
    ]
  },
  {
    id: "d2-q323",
    domain_id: 2,
    type: QuestionType.MCQ,
    text: "Which ServiceNow capability provides assistance to help users obtain information via a messaging interface?",
    explanation: "Virtual Agent is the conversational interface for providing automated support.",
    is_active: true,
    choices: [
      { id: "a", text: "Agent Workspace", is_correct: false },
      { id: "b", text: "Chat bot", is_correct: false },
      { id: "c", text: "Virtual Agent", is_correct: true },
      { id: "d", text: "Knowledge Chat", is_correct: false },
      { id: "e", text: "Now Support", is_correct: false }
    ]
  }
];
