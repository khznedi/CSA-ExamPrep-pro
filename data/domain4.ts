
import { Question, QuestionType } from '../types';

export const DOMAIN4_QUESTIONS: Question[] = [
  {
    id: "D4-001",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A Service Catalog may include which of the following components?",
    explanation: "A Service Catalog is a structured list of services and products. It typically includes Record Producers (for tasks), Order Guides (for bundling), and Catalog Items (for individual services).",
    is_active: true,
    choices: [
      { id: "A", text: "Order Guides, Exchange Rates, Calendars", is_correct: false },
      { id: "B", text: "Order Guides, Catalog Items, and Interceptors", is_correct: false },
      { id: "C", text: "Catalog Items, Asset Contracts, Task Surveys", is_correct: false },
      { id: "D", text: "Record Producers, Order Guides, and Catalog Items", is_correct: true }
    ]
  },
  {
    id: "D4-004",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "The display sequence is controlled in a Service Catalog Item using which of the following?",
    explanation: "The 'Order' field determines the relative position of items, categories, and variables. Lower numbers appear first.",
    is_active: true,
    choices: [
      { id: "A", text: "The Default Value field in the Catalog Item form", is_correct: false },
      { id: "B", text: "The Sequence field in the Catalog Item form", is_correct: false },
      { id: "C", text: "The Order field in the Variable form", is_correct: true },
      { id: "D", text: "The Choice field in the Variable form", is_correct: false }
    ]
  },
  {
    id: "D4-006",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
    explanation: "Standard sorting options for Knowledge results include relevancy to search terms, the number of views, and the date of the last update.",
    is_active: true,
    choices: [
      { id: "A", text: "Most recent update", is_correct: true },
      { id: "B", text: "Popularity", is_correct: false },
      { id: "C", text: "Relevancy", is_correct: true },
      { id: "D", text: "Manager assignment", is_correct: false },
      { id: "E", text: "Number of views", is_correct: true }
    ]
  },
  {
    id: "D4-007",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    explanation: "The order hierarchy is: Request (REQ) -> Requested Item (RITM) -> Catalog Task (TASK).",
    is_active: true,
    choices: [
      { id: "A", text: "RITM (Number)>REQ (Number)>PROCUREMENT (Number)", is_correct: false },
      { id: "B", text: "REQ (Number)>RITM (Number)>PROCUREMENT (Number)", is_correct: false },
      { id: "C", text: "REQ (Number)>RITM (Number)>TASK (Number)", is_correct: true },
      { id: "D", text: "FULFILLMENT (Number)>RITM (Number)>TASK (Number)", is_correct: false }
    ]
  },
  {
    id: "D4-009",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is generated from the Service Catalog once a user places an order for an item or service?",
    explanation: "Ordering from the catalog generates a Request [sc_request] record.",
    is_active: true,
    choices: [
      { id: "A", text: "A change request", is_correct: false },
      { id: "B", text: "An Order Guide", is_correct: false },
      { id: "C", text: "A request", is_correct: true },
      { id: "D", text: "An SLA", is_correct: false }
    ]
  },
  {
    id: "D4-012",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    explanation: "Catalog Items are the fundamental 'building blocks' that users request (e.g., a laptop, a software access).",
    is_active: true,
    choices: [
      { id: "A", text: "They run behind the scenes.", is_correct: false },
      { id: "B", text: "They are the building blocks.", is_correct: true },
      { id: "C", text: "They are optional.", is_correct: false },
      { id: "D", text: "They provide options.", is_correct: false }
    ]
  },
  {
    id: "D4-016",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A REQ number in the Service Catalog represents:",
    explanation: "The REQ number represents the entire order (which can contain multiple requested items).",
    is_active: true,
    choices: [
      { id: "A", text: "the order number.", is_correct: true },
      { id: "B", text: "the stage.", is_correct: false },
      { id: "C", text: "the task to complete.", is_correct: false },
      { id: "D", text: "the individual item in the order", is_correct: false }
    ]
  },
  {
    id: "D4-019",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following is used to initiate a flow?",
    explanation: "A Trigger is the starting condition for a flow (e.g., Created, Updated, Scheduled).",
    is_active: true,
    choices: [
      { id: "A", text: "A Trigger", is_correct: true },
      { id: "B", text: "Core Action", is_correct: false },
      { id: "C", text: "A spoke", is_correct: false },
      { id: "D", text: "An Event", is_correct: false }
    ]
  },
  {
    id: "D4-020",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    explanation: "By default, variables are global and can be seen across the platform if not restricted.",
    is_active: true,
    choices: [
      { id: "A", text: "Service Catalog variables can only be used in Record Producers", is_correct: false },
      { id: "B", text: "Service Catalog variables can only be used in Order Guides", is_correct: false },
      { id: "C", text: "Service Catalog variables cannot affect the order price", is_correct: false },
      { id: "D", text: "Service Catalog variables are global by default", is_correct: true }
    ]
  },
  {
    id: "D4-029",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which of the following statement describes the purpose of an Order Guide?",
    explanation: "Order Guides bundle multiple related items (e.g., New Hire pack) into one request based on user responses.",
    is_active: true,
    choices: [
      { id: "A", text: "Order Guides restrict the number of items in an order to only one", is_correct: false },
      { id: "B", text: "Order Guide provide a list of guidelines for Administrators", is_correct: false },
      { id: "C", text: "Order Guide provide the ability to order multiple, related items as one request", is_correct: true },
      { id: "D", text: "Order Guides take the user directly to the checkout", is_correct: false }
    ]
  },
  {
    id: "D4-044",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is a Record Producer?",
    explanation: "Record Producers allow users to create records in task-based tables (like Incident or Change) using a catalog-like interface.",
    is_active: true,
    choices: [
      { id: "A", text: "A type of Catalog Item used for Requests, not Services", is_correct: false },
      { id: "B", text: "A Record Producer creates user records", is_correct: false },
      { id: "C", text: "A type of Catalog Item that provides easy ordering by bundling", is_correct: false },
      { id: "D", text: "A type of a Catalog Item that allows users to create task-based records", is_correct: true }
    ]
  },
  {
    id: "D4-045",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
    explanation: "These are typical examples of Record Producers which create task records instead of requested items.",
    is_active: true,
    choices: [
      { id: "A", text: "They direct the user to a record producer", is_correct: true },
      { id: "B", text: "They direct the user to a catalog property", is_correct: false },
      { id: "C", text: "They direct the user to a catalog Ul policy", is_correct: false },
      { id: "D", text: "They direct the user to a catalog client script", is_correct: false }
    ]
  },
  {
    id: "D4-048",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
    explanation: "The 'Maintain Items' module is used to create and manage catalog items.",
    is_active: true,
    choices: [
      { id: "A", text: "Maintain Categories", is_correct: false },
      { id: "B", text: "Maintain Items", is_correct: true },
      { id: "C", text: "Content Items", is_correct: false },
      { id: "D", text: "Items", is_correct: false }
    ]
  },
  {
    id: "D4-050",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "Which three Variable Types can be added to a Service Catalog Item?",
    explanation: "Multiple Choice, Select Box, and Checkbox are all standard catalog variable types.",
    is_active: true,
    choices: [
      { id: "A", text: "True/False", is_correct: true },
      { id: "B", text: "Multiple Choice", is_correct: true },
      { id: "C", text: "Select Box", is_correct: true },
      { id: "D", text: "Checkbox", is_correct: true }
    ]
  },
  {
    id: "D4-051",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "How are Workflows moved between instances?",
    explanation: "Workflows (and Flows) are captured in Update Sets for migration between environments.",
    is_active: true,
    choices: [
      { id: "A", text: "Workflows are moved using Update Sets", is_correct: true },
      { id: "B", text: "Workflows are moved using Transform Maps", is_correct: false },
      { id: "C", text: "Workflows are moved using Application Sets", is_correct: false },
      { id: "D", text: "Workflows cannot be moved between instances", is_correct: false }
    ]
  },
  {
    id: "D4-052",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "The baseline Service Catalog homepage contains links to which of the following components?",
    explanation: "Catalog homepages typically feature Catalog Items, Record Producers, and Order Guides.",
    is_active: true,
    choices: [
      { id: "A", text: "Record Producers, Order Guides, and Catalog Items", is_correct: true },
      { id: "B", text: "Order Guides, Item Variables, and flows", is_correct: false },
      { id: "C", text: "Order Guides, Catalog Items, and flows", is_correct: false },
      { id: "D", text: "Record Producers, Order Guides, and Item Variables", is_correct: false }
    ]
  },
  {
    id: "D4-055",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A knowledge article must be which of the following states to display to a user?",
    explanation: "Only articles in the 'Published' state are visible to end users without specific management permissions.",
    is_active: true,
    choices: [
      { id: "A", text: "Published", is_correct: true },
      { id: "B", text: "Drafted", is_correct: false },
      { id: "C", text: "Retired", is_correct: false },
      { id: "D", text: "Reviewed", is_correct: false }
    ]
  },
  {
    id: "D4-056",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is the name of the conversational bot platform that provides assistance to help users obtain information?",
    explanation: "Virtual Agent is the ServiceNow conversational bot platform.",
    is_active: true,
    choices: [
      { id: "A", text: "Answer Agent", is_correct: false },
      { id: "B", text: "Live Feed", is_correct: false },
      { id: "C", text: "Virtual Agent", is_correct: true },
      { id: "D", text: "Connect Chat", is_correct: false }
    ]
  },
  {
    id: "D4-058",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which one of the following statements describes the purpose of a Service Catalog flow?",
    explanation: "A flow in the Service Catalog manages the end-to-end fulfillment including tasks, approvals, and notifications.",
    is_active: true,
    choices: [
      { id: "A", text: "Generates item variable types, tasks, and approvals", is_correct: false },
      { id: "B", text: "Cannot send notifications, but drives complex fulfillment", is_correct: false },
      { id: "C", text: "Drives complex fulfillment processes and sends notifications", is_correct: true },
      { id: "D", text: "Generates item variable types, tasks, and notifications", is_correct: false }
    ]
  },
  {
    id: "D4-084",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as:",
    explanation: "A Spoke is a package of flow actions related to a specific application or integration.",
    is_active: true,
    choices: [
      { id: "A", text: "an action", is_correct: false },
      { id: "B", text: "a spoke", is_correct: true },
      { id: "C", text: "a connection", is_correct: false },
      { id: "D", text: "an integration step", is_correct: false }
    ]
  },
  {
    id: "D4-089",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What do you need to do before you can use an Application-based trigger in your flow?",
    explanation: "Application-based triggers require the specific Spoke and its associated plugins to be active.",
    is_active: true,
    choices: [
      { id: "A", text: "Activate application trigger spoke", is_correct: false },
      { id: "B", text: "Activate trigger security rules", is_correct: false },
      { id: "C", text: "Activate application spoke, and plug-ins as needed", is_correct: true },
      { id: "D", text: "Assign Application trigger role to SME", is_correct: false }
    ]
  },
  {
    id: "D4-096",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "How would you ensure that only first line workers (non-managers) can submit a special T-shirt order?",
    explanation: "Using the 'Not Available' list (User Criteria) is the most direct way to exclude a specific group from ordering an item.",
    is_active: true,
    choices: [
      { id: "A", text: "Create Record Producer and use Available For list", is_correct: false },
      { id: "B", text: "Create Catalog Item and use the Not Available list to specify the Manager Group", is_correct: true },
      { id: "C", text: "Create Catalog Item and use the Available For list to specify ITIL role", is_correct: false },
      { id: "D", text: "Create Order Guide and use the User Criteria list", is_correct: false }
    ]
  },
  {
    id: "D4-103",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "As an IT employee what interface would you use to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    explanation: "Knowledge Management is the centralized area for FAQs and internal documentation.",
    is_active: true,
    choices: [
      { id: "A", text: "Knowledge", is_correct: true },
      { id: "B", text: "ServiceNow Wiki", is_correct: false },
      { id: "C", text: "Knowledge Now", is_correct: false },
      { id: "D", text: "SharePoint", is_correct: false }
    ]
  },
  {
    id: "D4-106",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "When testing a catalog item with manager approval flows, which of these best practices would you follow? (Choose three.)",
    explanation: "Activation of latest flows, impersonating the requester, and ensuring valid user/manager data are critical for testing.",
    is_active: true,
    choices: [
      { id: "A", text: "Make sure the latest flows are activated.", is_correct: true },
      { id: "C", text: "Impersonate the requester to ensure the form works.", is_correct: true },
      { id: "D", text: "Make sure the requester's user record has a manager specified.", is_correct: true },
      { id: "F", text: "Use your Admin account to approve quickly.", is_correct: false }
    ]
  },
  {
    id: "D4-112",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "A new service catalog item should only be visible to managers inside the HR Department. What method would you use?",
    explanation: "User Criteria allows you to define availability for Catalog Items based on groups, departments, and roles.",
    is_active: true,
    choices: [
      { id: "A", text: "Specify the Dept_Mgr role on the content block", is_correct: false },
      { id: "B", text: "Add the Department Manager group to the catalog item's user criteria", is_correct: true },
      { id: "C", text: "Add the Department Manager group to the catalog item's ACL", is_correct: false },
      { id: "D", text: "Only publish the item in the HR service catalog", is_correct: false }
    ]
  },
  {
    id: "D4-115",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Two departments want a shared 'event room set up' item in their separate catalogs. What do you do?",
    explanation: "A single Catalog Item can be published to multiple catalogs to prevent duplication of logic.",
    is_active: true,
    choices: [
      { id: "A", text: "Create two separate items", is_correct: false },
      { id: "B", text: "Create one Catalog Item; then publish to both Catalogs.", is_correct: true },
      { id: "C", text: "Publish to the Parent Catalog only", is_correct: false },
      { id: "D", text: "Use ACLs to control access.", is_correct: false }
    ]
  },
  {
    id: "D4-118",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    explanation: "Flow Designer is the modern tool for automating business processes in ServiceNow.",
    is_active: true,
    choices: [
      { id: "A", text: "Process Automation > Flow Designer", is_correct: true },
      { id: "B", text: "Process Automation > Flow Administration", is_correct: false },
      { id: "C", text: "Process Automation > Workflow Editor", is_correct: false },
      { id: "D", text: "Process Automation > Process Flow", is_correct: false }
    ]
  },
  {
    id: "D4-124",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which tab on the knowledge base record, would you use to identify the set of users who are able to read articles?",
    explanation: "The 'Can Read' tab uses User Criteria to define who has visibility of the Knowledge Base.",
    is_active: true,
    choices: [
      { id: "A", text: "Can Contribute", is_correct: false },
      { id: "B", text: "Cannot Author", is_correct: false },
      { id: "C", text: "Can Read", is_correct: true },
      { id: "D", text: "Cannot Write", is_correct: false }
    ]
  },
  {
    id: "D4-125",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "On the knowledge base record, which tab would you use to define which users are not able to write articles?",
    explanation: "The 'Cannot Contribute' tab allows for explicit exclusion from writing/managing articles.",
    is_active: true,
    choices: [
      { id: "A", text: "Can Contribute", is_correct: false },
      { id: "B", text: "Cannot Author", is_correct: false },
      { id: "C", text: "Cannot Contribute", is_correct: true },
      { id: "D", text: "Cannot Write", is_correct: false }
    ]
  },
  {
    id: "D4-126",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "On the knowledge base record, which tab would you use to define which users are able to write articles?",
    explanation: "The 'Can Contribute' tab defines the users allowed to create/edit articles.",
    is_active: true,
    choices: [
      { id: "A", text: "Can Contribute", is_correct: true },
      { id: "B", text: "Cannot Author", is_correct: false },
      { id: "C", text: "Can Read", is_correct: false },
      { id: "D", text: "Can Write", is_correct: false }
    ]
  },
  {
    id: "D4-128",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "Categories in the knowledge base, by default, can be created and edited by which knowledge workers? (Choose two.)",
    explanation: "Knowledge Managers and Knowledge Owners are responsible for the structure and taxonomy of the KB.",
    is_active: true,
    choices: [
      { id: "A", text: "Knowledge Authors", is_correct: false },
      { id: "D", text: "Knowledge Managers", is_correct: true },
      { id: "E", text: "Knowledge Category Managers", is_correct: false },
      { id: "G", text: "Knowledge Owners", is_correct: true }
    ]
  },
  {
    id: "D4-131",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What component causes a flow to run after a record has been created or updated?",
    explanation: "A Record-based trigger listens for database operations (Insert, Update) to start the flow.",
    is_active: true,
    choices: [
      { id: "A", text: "Date-based trigger", is_correct: false },
      { id: "B", text: "On-change trigger", is_correct: false },
      { id: "C", text: "Record-based trigger", is_correct: true },
      { id: "D", text: "Application-based trigger", is_correct: false }
    ]
  },
  {
    id: "D4-133",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which module is used to access the knowledge bases which are available to you?",
    explanation: "Self-Service > Knowledge is the main portal for users to search and browse articles.",
    is_active: true,
    choices: [
      { id: "A", text: "Knowledge > Home", is_correct: false },
      { id: "B", text: "Self Service > Knowledge", is_correct: true },
      { id: "C", text: "Knowledge > All", is_correct: false },
      { id: "D", text: "Knowledge > Knowledge Bases", is_correct: false }
    ]
  },
  {
    id: "D4-139",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
    explanation: "Flow Designer provides a natural-language interface for non-technical users to build logic.",
    is_active: true,
    choices: [
      { id: "A", text: "Flow Manager", is_correct: false },
      { id: "B", text: "Flow Designer", is_correct: true },
      { id: "C", text: "Flow Editor", is_correct: false },
      { id: "D", text: "Workflow Editor", is_correct: false }
    ]
  },
  {
    id: "D4-144",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When designing a flow, how do you reference data from a record, in that flow?",
    explanation: "Data Pills act as placeholders for variables that you can drag and drop between actions in a flow.",
    is_active: true,
    choices: [
      { id: "A", text: "Drag the table icon onto the flow", is_correct: false },
      { id: "B", text: "Use the condition builder", is_correct: false },
      { id: "C", text: "Specify source table on data pill list", is_correct: false },
      { id: "D", text: "Drag the data pill onto the flow definition", is_correct: true }
    ]
  },
  {
    id: "D4-146",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which ServiceNow capability provides assistance to help users via a messaging interface?",
    explanation: "Virtual Agent is the automated bot that interacts with users in chat.",
    is_active: true,
    choices: [
      { id: "A", text: "Agent Workspace", is_correct: false },
      { id: "B", text: "Chat bot", is_correct: false },
      { id: "C", text: "Virtual Agent", is_correct: true },
      { id: "D", text: "Knowledge Chat", is_correct: false }
    ]
  },
  {
    id: "D4-147",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which feature allows you to automate business logic for a particular application or process?",
    explanation: "Flows are the primary container for automated logic in Flow Designer.",
    is_active: true,
    choices: [
      { id: "A", text: "Flows", is_correct: true },
      { id: "B", text: "Action Sequences", is_correct: false },
      { id: "C", text: "Action Sets", is_correct: false },
      { id: "D", text: "Task Flows", is_correct: false }
    ]
  },
  {
    id: "D4-157",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What controls the publishing and retiring process for knowledge articles?",
    explanation: "Workflows (or KB Flows) manage the lifecycle of an article from draft to retirement.",
    is_active: true,
    choices: [
      { id: "A", text: "Approval Policies", is_correct: false },
      { id: "B", text: "Approval Definitions", is_correct: false },
      { id: "C", text: "Workflow Designer", is_correct: false },
      { id: "D", text: "Workflows", is_correct: true }
    ]
  },
  {
    id: "D4-159",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
    explanation: "One Request can have multiple RITMs, and one RITM can have multiple tasks or approvals.",
    is_active: true,
    choices: [
      { id: "B", text: "One Request can have many Requested Items", is_correct: true },
      { id: "C", text: "One Requested Item can have many Approvals", is_correct: true },
      { id: "D", text: "One Requested Item can have many Catalog Tasks", is_correct: true },
      { id: "A", text: "One Approval can have many Requests", is_correct: false }
    ]
  },
  {
    id: "D4-165",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "What are advantages of using Flow Designer? (Choose three.)",
    explanation: "Flow Designer reduces technical debt through low-code tools and simplifies complex integrations via spokes.",
    is_active: true,
    choices: [
      { id: "C", text: "Reduces technical debt", is_correct: true },
      { id: "D", text: "Less manual scripting", is_correct: true },
      { id: "E", text: "Smooth integration with 3rd party systems", is_correct: true },
      { id: "A", text: "Supports advanced developers", is_correct: false }
    ]
  },
  {
    id: "D4-167",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When a flow runs an action, it generates a runtime value. What is the name of this runtime value?",
    explanation: "Data Pills store the runtime values generated by previous steps for use in later steps.",
    is_active: true,
    choices: [
      { id: "A", text: "Trigger runtime value", is_correct: false },
      { id: "B", text: "Sequence runtime value", is_correct: false },
      { id: "C", text: "Starting runtime value", is_correct: false },
      { id: "D", text: "Data pill runtime value", is_correct: true }
    ]
  },
  {
    id: "D4-171",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What feature do you use to specify which users are able to access a Service Catalog Item?",
    explanation: "User Criteria is the universal standard for access control in Catalog and Knowledge.",
    is_active: true,
    choices: [
      { id: "A", text: "Can Read Role", is_correct: false },
      { id: "B", text: "Catalog User Role", is_correct: false },
      { id: "C", text: "Can Order Tab", is_correct: false },
      { id: "D", text: "User Criteria", is_correct: true }
    ]
  },
  {
    id: "D4-176",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    explanation: "Virtual Agent integrates with Knowledge to serve articles directly in a chat conversation.",
    is_active: true,
    choices: [
      { id: "A", text: "Agent Assist", is_correct: false },
      { id: "B", text: "Virtual Agent", is_correct: true },
      { id: "C", text: "Now Messenger", is_correct: false },
      { id: "D", text: "Connect Agent", is_correct: false }
    ]
  },
  {
    id: "D4-177",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which role can manage multiple knowledge bases?",
    explanation: "The 'knowledge_admin' role has overarching permissions to manage all Knowledge Bases.",
    is_active: true,
    choices: [
      { id: "A", text: "knowledge_base_admin", is_correct: false },
      { id: "B", text: "kb_admin", is_correct: false },
      { id: "C", text: "sn_kb_admin", is_correct: false },
      { id: "D", text: "knowledge_admin", is_correct: true }
    ]
  },
  {
    id: "D4-183",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Create a 'Get Help' option in Service Catalog that creates incident records. Which method would you use?",
    explanation: "Record Producers are designed to create records in task tables like Incident.",
    is_active: true,
    choices: [
      { id: "A", text: "Create Record Producer", is_correct: true },
      { id: "B", text: "Create Catalog Item", is_correct: false },
      { id: "C", text: "Create Order Guide", is_correct: false },
      { id: "D", text: "Create Content Item", is_correct: false }
    ]
  },
  {
    id: "D4-187",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles?",
    explanation: "The 'Can Read' related list defines the User Criteria for viewing the KB.",
    is_active: true,
    choices: [
      { id: "A", text: "Access List", is_correct: false },
      { id: "B", text: "Can Access", is_correct: false },
      { id: "C", text: "Accessible to", is_correct: false },
      { id: "D", text: "Can Read", is_correct: true }
    ]
  },
  {
    id: "D4-189",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What is used to determine user access to knowledge bases or a knowledge article?",
    explanation: "User Criteria is the mechanism used to grant or restrict access to articles and bases.",
    is_active: true,
    choices: [
      { id: "A", text: "sn_kb_read role", is_correct: false },
      { id: "B", text: "Privacy Settings", is_correct: false },
      { id: "C", text: "Read Access Flag", is_correct: false },
      { id: "D", text: "User Criteria", is_correct: true }
    ]
  },
  {
    id: "D4-193",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "If a knowledge base has no access details specified, what users are able to read articles?",
    explanation: "If no criteria are set, the KB is accessible to any logged-in user (Any active user).",
    is_active: true,
    choices: [
      { id: "A", text: "itil users", is_correct: false },
      { id: "B", text: "Any user with an article's permalink", is_correct: false },
      { id: "C", text: "Any active user", is_correct: true },
      { id: "D", text: "No users", is_correct: false }
    ]
  },
  {
    id: "D4-195",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What Service Catalog feature do you use to organize items into logical groups?",
    explanation: "Categories group related catalog items together (e.g., Software, Hardware).",
    is_active: true,
    choices: [
      { id: "A", text: "Categories", is_correct: true },
      { id: "B", text: "Variable Sets", is_correct: false },
      { id: "C", text: "Sections", is_correct: false },
      { id: "D", text: "Catalog items", is_correct: false }
    ]
  },
  {
    id: "D4-197",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "Which of these workflow (workflows) types are included in the ServiceNow platform?",
    explanation: "ServiceNow categorizes its main product lines into IT, Employee, and Customer workflows.",
    is_active: true,
    choices: [
      { id: "B", text: "Customer Workflows", is_correct: true },
      { id: "E", text: "Employee Workflows", is_correct: true },
      { id: "F", text: "IT Workflows", is_correct: true },
      { id: "D", text: "Manufacturing Workflows", is_correct: false }
    ]
  },
  {
    id: "D4-199",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "Configure a form so an employee could order tablet and select accessories. What approach would you take? (Choose three.)",
    explanation: "Best approaches involve creating items for the components and using variable sets or checkboxes to bundle them.",
    is_active: true,
    choices: [
      { id: "A", text: "Create Catalog Item for Tablet and add a variable set", is_correct: true },
      { id: "D", text: "Create one Catalog item for each accessory", is_correct: true },
      { id: "E", text: "Create Catalog Item for the tablet and add checkboxes", is_correct: true },
      { id: "B", text: "Create a Record producer", is_correct: false }
    ]
  },
  {
    id: "D4-204",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Create a way for users to order an iPhone with two levels of approval. What feature manages this?",
    explanation: "Flows are used to manage complex approval logic and multi-step fulfillment.",
    is_active: true,
    choices: [
      { id: "A", text: "Approval Chains", is_correct: false },
      { id: "B", text: "Flows", is_correct: true },
      { id: "C", text: "Approver Delegates", is_correct: false },
      { id: "D", text: "Parent-Child Approvers", is_correct: false }
    ]
  },
  {
    id: "D4-211",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What instance resource allows you to access guided tours and help with inputs/outputs in your flow?",
    explanation: "The Help Panel (accessed via the '?' icon) provides contextual documentation inside Flow Designer.",
    is_active: true,
    choices: [
      { id: "A", text: "Docs", is_correct: false },
      { id: "B", text: "Community", is_correct: false },
      { id: "C", text: "Help Panel (question mark icon)", is_correct: true },
      { id: "D", text: "Wiki", is_correct: false }
    ]
  },
  {
    id: "D4-223",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Employee On-boarding needs computers, monitors, and cards. How would you proceed?",
    explanation: "Order Guides are perfect for onboarding scenarios where multiple items are needed in a single order.",
    is_active: true,
    choices: [
      { id: "A", text: "Create Requested Item", is_correct: false },
      { id: "B", text: "Create Record Producer", is_correct: false },
      { id: "C", text: "Create On-boarding Bot", is_correct: false },
      { id: "D", text: "Create Order Guide", is_correct: true }
    ]
  },
  {
    id: "D4-228",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Building 80 items with the same 4 mandatory fields. Which feature should you use?",
    explanation: "Variable Sets allow you to create a group of variables once and reuse them across many items.",
    is_active: true,
    choices: [
      { id: "A", text: "Create a Variable Set Template", is_correct: false },
      { id: "B", text: "Create one Variable Set for the four variables", is_correct: true },
      { id: "C", text: "Create a Record Producer", is_correct: false },
      { id: "D", text: "Create a Flow Designer Action", is_correct: false }
    ]
  },
  {
    id: "D4-230",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What access does a user need to be able to import articles to a knowledge base?",
    explanation: "Users must be in the 'Can Contribute' list to import or create articles.",
    is_active: true,
    choices: [
      { id: "A", text: "sn_knowledge_import", is_correct: false },
      { id: "B", text: "sn_knowledge_contribute", is_correct: false },
      { id: "C", text: "Can contribute", is_correct: true },
      { id: "D", text: "Can import", is_correct: false }
    ]
  },
  {
    id: "D4-239",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which feature enables process owners to organize Flow content into cross-enterprise processes via a board interface?",
    explanation: "Process Automation Designer (PAD) provides the board interface for higher-level process orchestration.",
    is_active: true,
    choices: [
      { id: "A", text: "Flow Designer", is_correct: false },
      { id: "B", text: "Workflow Editor", is_correct: false },
      { id: "C", text: "Process Workflow Designer", is_correct: false },
      { id: "D", text: "Process Automation Designer", is_correct: true }
    ]
  },
  {
    id: "D4-244",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What catalog tool would you use to create a catalog item or record producer in a simplified way?",
    explanation: "Catalog Builder is the simplified interface for creating and managing catalog content.",
    is_active: true,
    choices: [
      { id: "A", text: "Catalog Builder", is_correct: true },
      { id: "B", text: "Workflow Designer", is_correct: false },
      { id: "C", text: "Catalog Designer", is_correct: false },
      { id: "D", text: "Catalog Formatter", is_correct: false }
    ]
  },
  {
    id: "D4-247",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What feature allows you to limit who is able to contribute or read knowledge?",
    explanation: "User Criteria is the foundation for knowledge base access control.",
    is_active: true,
    choices: [
      { id: "A", text: "Roles", is_correct: false },
      { id: "B", text: "Groups", is_correct: false },
      { id: "C", text: "User Criteria", is_correct: true },
      { id: "D", text: "Categories", is_correct: false }
    ]
  },
  {
    id: "D4-249",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "What are some frequently used core actions in Flow Designer? (Choose four.)",
    explanation: "Standard core actions include creating/looking up records, asking for approvals, and waiting for conditions.",
    is_active: true,
    choices: [
      { id: "B", text: "Create Record", is_correct: true },
      { id: "C", text: "Ask for Approval", is_correct: true },
      { id: "D", text: "Look Up Record", is_correct: true },
      { id: "E", text: "Wait for Condition", is_correct: true }
    ]
  },
  {
    id: "D4-250",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What role enables someone to authorize a request, with no other permissions?",
    explanation: "The 'approver_user' role allows users to view and authorize requests without requiring an ITIL license.",
    is_active: true,
    choices: [
      { id: "A", text: "Approval Group", is_correct: false },
      { id: "B", text: "Authorize", is_correct: false },
      { id: "C", text: "Reviewer", is_correct: false },
      { id: "E", text: "Approver [approver_user]", is_correct: true }
    ]
  },
  {
    id: "D4-263",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Criteria set: HR Department AND ACME Manager AND North America. Match All: Yes. Who has access?",
    explanation: "With 'Match All: Yes', the user must satisfy every single criterion in the list.",
    is_active: true,
    choices: [
      { id: "A", text: "Members who are in ACME Manager group, HR, and North America", is_correct: true },
      { id: "B", text: "Members who are in HR Department OR ACME Manager", is_correct: false },
      { id: "C", text: "Members in either group", is_correct: false },
      { id: "D", text: "HR and Manager regardless of geography", is_correct: false }
    ]
  },
  {
    id: "D4-264",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "In Flow Designer, where is the data from an action stored so it can be used later?",
    explanation: "Data Pills store values from previous steps for mapping into inputs of future steps.",
    is_active: true,
    choices: [
      { id: "A", text: "Data Pill", is_correct: true },
      { id: "B", text: "Data Element", is_correct: false },
      { id: "C", text: "Data Trigger", is_correct: false },
      { id: "D", text: "Field Value", is_correct: false }
    ]
  },
  {
    id: "D4-266",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What setting allows users to view a Knowledge article even if they are not logged in?",
    explanation: "The 'Public' checkbox/setting on an article makes it visible without authentication.",
    is_active: true,
    choices: [
      { id: "A", text: "The Public setting", is_correct: true },
      { id: "B", text: "The View All setting", is_correct: false },
      { id: "C", text: "The ESS role", is_correct: false },
      { id: "D", text: "The Allow All role", is_correct: false }
    ]
  },
  {
    id: "D4-279",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which flow components allow you to specify when a flow should be run?",
    explanation: "A combination of Trigger conditions and filters determines exactly when logic starts.",
    is_active: true,
    choices: [
      { id: "D", text: "Trigger and Condition", is_correct: true },
      { id: "A", text: "Trigger and Condition Pill", is_correct: false },
      { id: "B", text: "Condition and Table", is_correct: false },
      { id: "C", text: "Trigger Criteria and Clock", is_correct: false }
    ]
  },
  {
    id: "D4-283",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "When using Flow Designer, what is the Flow Execution initiated by?",
    explanation: "Execution is always started by a Trigger.",
    is_active: true,
    choices: [
      { id: "D", text: "A trigger", is_correct: true },
      { id: "A", text: "A flow logic", is_correct: false },
      { id: "B", text: "An existing subflow", is_correct: false },
      { id: "C", text: "An execution data pill", is_correct: false }
    ]
  },
  {
    id: "D4-286",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "What process allows centralized creating, categorizing, and browsing of important information?",
    explanation: "This describes Knowledge Management.",
    is_active: true,
    choices: [
      { id: "B", text: "Knowledge Management", is_correct: true },
      { id: "A", text: "Self Service Management", is_correct: false },
      { id: "C", text: "Business Information Management", is_correct: false },
      { id: "D", text: "Information Portal Management", is_correct: false }
    ]
  },
  {
    id: "D4-289",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which role inherits permissions of catalog and user_criteria_admin plus can create Items?",
    explanation: "The 'catalog_admin' role manages the catalog structure, items, and access criteria.",
    is_active: true,
    choices: [
      { id: "B", text: "Catalog Admin [catalog_admin]", is_correct: true },
      { id: "A", text: "Sys Admin", is_correct: false },
      { id: "C", text: "Catalog Author", is_correct: false },
      { id: "D", text: "Item Admin", is_correct: false }
    ]
  },
  {
    id: "D4-293",
    domain_id: 4,
    type: QuestionType.MULTI_SELECT,
    text: "A catalog order creates two records. Which are associated with the item ordered?",
    explanation: "The Requested Item (RITM) and the Catalog Task (SCTASK) are the standard records created.",
    is_active: true,
    choices: [
      { id: "A", text: "A record of sc_req_item table", is_correct: true },
      { id: "B", text: "A record of sc_task", is_correct: true },
      { id: "C", text: "An incident record", is_correct: false },
      { id: "D", text: "A change record", is_correct: false }
    ]
  },
  {
    id: "D4-295",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "How would you view the lists of requests after orders have been placed through Service Catalog?",
    explanation: "Service Catalog > Requests is the standard navigation path.",
    is_active: true,
    choices: [
      { id: "C", text: "All > Service Catalog > Requests", is_correct: true },
      { id: "A", text: "All > Tables and Columns > Tasks", is_correct: false },
      { id: "B", text: "requests.list", is_correct: false },
      { id: "D", text: "Open Records > Items", is_correct: false }
    ]
  },
  {
    id: "D4-310",
    domain_id: 4,
    type: QuestionType.MCQ,
    text: "Which allows the creation of a task-based record from Service Catalog?",
    explanation: "Record Producers create tasks like Incidents directly from the user-facing catalog.",
    is_active: true,
    choices: [
      { id: "A", text: "Record Producers", is_correct: true },
      { id: "B", text: "UI Builder", is_correct: false },
      { id: "E", text: "Flow Designer", is_correct: false },
      { id: "D", text: "UI Actions", is_correct: false }
    ]
  }
];
