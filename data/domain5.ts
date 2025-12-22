
import { Question, QuestionType } from '../types';

export const DOMAIN5_QUESTIONS: Question[] = [
  {
    id: "D5-026",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which statement is true about business rules?",
    explanation: "A Business Rule is a server-side script that runs when a record is displayed, inserted, updated, or deleted. It is written in JavaScript.",
    is_active: true,
    choices: [
      { id: "A", text: "A business rule must run before a database action occurs", is_correct: false },
      { id: "B", text: "A business rule can be a piece of Javascript", is_correct: true },
      { id: "C", text: "A business rule must not run before a database action occurs", is_correct: false },
      { id: "D", text: "A business rule monitors fields on a form", is_correct: false }
    ]
  },
  {
    id: "D5-027",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    explanation: "ServiceNow supports four types of Client Scripts: onLoad(), onChange(), onSubmit(), and onCellEdit().",
    is_active: true,
    choices: [
      { id: "A", text: "onSubmit", is_correct: true },
      { id: "B", text: "onUpdate", is_correct: false },
      { id: "C", text: "onCellEdit", is_correct: true },
      { id: "D", text: "onLoad", is_correct: true },
      { id: "E", text: "onEdit", is_correct: false },
      { id: "F", text: "onChange", is_correct: true },
      { id: "G", text: "onSave", is_correct: false }
    ]
  },
  {
    id: "D5-054",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Where can Admins check which release is running on an ServiceNow instance?",
    explanation: "The 'Stats' module (or typing 'stats.do' in the filter) provides system information including the current build and release version.",
    is_active: true,
    choices: [
      { id: "A", text: "Memory Stats module", is_correct: false },
      { id: "B", text: "Stats module", is_correct: true },
      { id: "C", text: "System.upgraded table", is_correct: false },
      { id: "D", text: "Transactions log", is_correct: false }
    ]
  },
  {
    id: "D5-085",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which of the following protects applications by identifying and restricting access to available files and data?",
    explanation: "Application Scope ensures that an application does not interfere with other applications and protects its data from unauthorized access by other apps.",
    is_active: true,
    choices: [
      { id: "A", text: "Application Configuration", is_correct: false },
      { id: "B", text: "Verbose Log", is_correct: false },
      { id: "C", text: "Access Control Rules", is_correct: false },
      { id: "D", text: "Application Scope", is_correct: true }
    ]
  },
  {
    id: "D5-094",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What do you activate when you want to add applications or functionality within your development instance?",
    explanation: "Plugins are software components that provide additional features and functionalities to a ServiceNow instance.",
    is_active: true,
    choices: [
      { id: "A", text: "App Package", is_correct: false },
      { id: "B", text: "Updated Pack", is_correct: false },
      { id: "C", text: "Patch", is_correct: false },
      { id: "D", text: "Plugin", is_correct: true },
      { id: "E", text: "App Updated Set", is_correct: false }
    ]
  },
  {
    id: "D5-099",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "What needs to be specified, when creating a Business Rule? (Choose four.)",
    explanation: "A Business Rule requires a Table, Timing (when to run), Conditions, and the Action/Script to execute.",
    is_active: true,
    choices: [
      { id: "B", text: "Table", is_correct: true },
      { id: "E", text: "Script to run", is_correct: true },
      { id: "H", text: "Timing", is_correct: true },
      { id: "I", text: "Condition to evaluate", is_correct: true },
      { id: "A", text: "Ul action", is_correct: false },
      { id: "G", text: "Update set", is_correct: false }
    ]
  },
  {
    id: "D5-107",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is a no-code approach to control the mandatory or read-only state of a form field?",
    explanation: "UI Policies offer a no-code way to dynamically change form field attributes like mandatory, read-only, and visible.",
    is_active: true,
    choices: [
      { id: "A", text: "UI Action", is_correct: false },
      { id: "B", text: "Client Script", is_correct: false },
      { id: "C", text: "UI Script", is_correct: false },
      { id: "E", text: "UI Policy", is_correct: true }
    ]
  },
  {
    id: "D5-127",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Which features allow you to update multiple records at one time? (Choose two.)",
    explanation: "Users can update multiple records simultaneously using the List Editor or by selecting records and using the 'Update Selected' context menu action.",
    is_active: true,
    choices: [
      { id: "A", text: "List Editor", is_correct: true },
      { id: "E", text: "Update Selected Action", is_correct: true },
      { id: "B", text: "Field Update Action", is_correct: false },
      { id: "C", text: "Bulk Record Update", is_correct: false }
    ]
  },
  {
    id: "D5-132",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What type of field is Boolean and appears as a check box?",
    explanation: "In ServiceNow, a Boolean field that renders as a checkbox on a form is called a 'True/False' field type.",
    is_active: true,
    choices: [
      { id: "A", text: "Yes/No", is_correct: false },
      { id: "B", text: "True/False", is_correct: true },
      { id: "C", text: "On/Off", is_correct: false },
      { id: "D", text: "Binary", is_correct: false }
    ]
  },
  {
    id: "D5-142",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "To change Priority values like P1, P2... consistently across Tasks, you right-click on Priority and select what?",
    explanation: "To manage the available options for a choice field, an admin uses the 'Show Choice List' or 'Configure Choices' option.",
    is_active: true,
    choices: [
      { id: "A", text: "Configure Lists", is_correct: false },
      { id: "B", text: "Show Options", is_correct: false },
      { id: "D", text: "Show Choices", is_correct: true },
      { id: "E", text: "Show Choice List", is_correct: false },
      { id: "F", text: "Configure Options", is_correct: false }
    ]
  },
  {
    id: "D5-153",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "On a Business Rule, the 'When' setting determines timing. What are the options?",
    explanation: "Business Rule timing options are: Before, After, Async, and Display.",
    is_active: true,
    choices: [
      { id: "A", text: "Before, After, Async, Display", is_correct: true },
      { id: "B", text: "Prior to, Synchronous, on Update", is_correct: false },
      { id: "C", text: "Insert, Update, Delete, Query", is_correct: false },
      { id: "D", text: "Before, Synchronous, Scheduled Job", is_correct: false }
    ]
  },
  {
    id: "D5-166",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Your customer requires monitoring users performing impersonations. What would you activate?",
    explanation: "The system property 'glide.sys.log_impersonation' enables logging of all impersonation events in the system log.",
    is_active: true,
    choices: [
      { id: "A", text: "Add role Log Write to Impersonator Group", is_correct: false },
      { id: "C", text: "Activate the glide.sys.log_impersonation property", is_correct: true },
      { id: "D", text: "From User icon, select Elevate Roles", is_correct: false },
      { id: "E", text: "On the role record, select Create Log", is_correct: false }
    ]
  },
  {
    id: "D5-178",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which statement correctly describes the differences between a Client Script and a Business Rule?",
    explanation: "Client Scripts run in the browser (client-side), while Business Rules run on the ServiceNow server (server-side).",
    is_active: true,
    choices: [
      { id: "A", text: "Client Script executes before load, Business Rule after load", is_correct: false },
      { id: "B", text: "Client Script executes on server, Business Rule on client", is_correct: false },
      { id: "C", text: "A Client Script executes on the client and a Business Rule executes on the server", is_correct: true },
      { id: "D", text: "Client Script executes before load, Business Rule after update", is_correct: false }
    ]
  },
  {
    id: "D5-226",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "What is the language used for scripting in ServiceNow?",
    explanation: "JavaScript is the primary language for both client-side and server-side scripting in the ServiceNow platform.",
    is_active: true,
    choices: [
      { id: "A", text: "C++", is_correct: false },
      { id: "B", text: "JavaScript", is_correct: true },
      { id: "C", text: "PHP", is_correct: false },
      { id: "D", text: "Python", is_correct: false }
    ]
  },
  {
    id: "D5-232",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "To apply a UI Policy to all views, which field should be set to true?",
    explanation: "If the 'Global' checkbox is checked, the UI Policy applies to all views of the form.",
    is_active: true,
    choices: [
      { id: "A", text: "Global", is_correct: true },
      { id: "B", text: "Reverse if false", is_correct: false },
      { id: "C", text: "On load", is_correct: false },
      { id: "D", text: "Inherit", is_correct: false }
    ]
  },
  {
    id: "D5-234",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which type of ServiceNow scripts runs in the browser?",
    explanation: "UI Policies and Client Scripts are the primary client-side logic containers that execute within the user's web browser.",
    is_active: true,
    choices: [
      { id: "A", text: "Script Include Scripts", is_correct: false },
      { id: "B", text: "Access Control Scripts", is_correct: false },
      { id: "C", text: "Business Rule Scripts", is_correct: false },
      { id: "D", text: "UI Policies and Client Scripts", is_correct: true }
    ]
  },
  {
    id: "D5-256",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "While showing a customer their Incident form, they ask to change Priority title to 'PValue'. How would you do that? (Choose two.)",
    explanation: "Changing the title (label) can be done via 'Configure Label' or by editing the field's 'Dictionary' entry.",
    is_active: true,
    choices: [
      { id: "A", text: "Right click on Priority and select Configure Label", is_correct: true },
      { id: "B", text: "Right click on Priority and select Configure Dictionary", is_correct: true },
      { id: "C", text: "Right click and select Configure Display Settings", is_correct: false },
      { id: "D", text: "Right click and select Configure Column", is_correct: false }
    ]
  },
  {
    id: "D5-265",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "A customer wants to make Resolution code Mandatory when state is Resolved and Hide a checkbox. What rule type would you use?",
    explanation: "UI Policies are ideal for managing field visibility and mandatory requirements based on other field values without scripting.",
    is_active: true,
    choices: [
      { id: "A", text: "Form Constraint", is_correct: false },
      { id: "B", text: "UI Design", is_correct: false },
      { id: "C", text: "Field Limiter", is_correct: false },
      { id: "D", text: "UI Policy", is_correct: true }
    ]
  },
  {
    id: "D5-268",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "How can Admins configure their instances to send an email at the end of an upgrade?",
    explanation: "Administrators can configure or update the existing system notification named 'System Upgraded' within the Notifications module.",
    is_active: true,
    choices: [
      { id: "A", text: "Update notification in System Logs", is_correct: false },
      { id: "B", text: "Update notification named 'System Upgraded' in Notifications module", is_correct: true },
      { id: "C", text: "Write a Client Script to send email", is_correct: false },
      { id: "D", text: "Write a Business Rule for Update completion", is_correct: false }
    ]
  },
  {
    id: "D5-272",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which type of ServiceNow script runs on the web browser?",
    explanation: "Client scripts execute on the client side (the browser) rather than the database or server side.",
    is_active: true,
    choices: [
      { id: "A", text: "Server script", is_correct: false },
      { id: "B", text: "Database script", is_correct: false },
      { id: "C", text: "Client script", is_correct: true },
      { id: "D", text: "Local script", is_correct: false }
    ]
  },
  {
    id: "D5-291",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Which data consistency settings can be achieved using UI Policy? (Choose three.)",
    explanation: "UI Policies can set fields to be Mandatory, Read-only, or Hidden (Visible: false).",
    is_active: true,
    choices: [
      { id: "C", text: "Setting fields hidden", is_correct: true },
      { id: "D", text: "Settings fields read-only", is_correct: true },
      { id: "E", text: "Setting fields mandatory", is_correct: true },
      { id: "A", text: "Setting expected format", is_correct: false }
    ]
  },
  {
    id: "D5-292",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "A customer wants to validate form data before submission to ensure it makes sense. Which script type?",
    explanation: "The onSubmit() client script is specifically designed to run when a user clicks Save/Submit, allowing validation to cancel the submission if needed.",
    is_active: true,
    choices: [
      { id: "A", text: "onSubmit()", is_correct: true },
      { id: "B", text: "onSubmission()", is_correct: false },
      { id: "C", text: "onUpdate()", is_correct: false },
      { id: "D", text: "onLoad()", is_correct: false }
    ]
  },
  {
    id: "D5-302",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which testing framework is used to test ServiceNow Applications?",
    explanation: "Automated Test Framework (ATF) is the OOTB tool used to create and run automated tests on ServiceNow instances.",
    is_active: true,
    choices: [
      { id: "A", text: "Test Driven Framework (TDF)", is_correct: false },
      { id: "B", text: "Junit", is_correct: false },
      { id: "C", text: "Selenium", is_correct: false },
      { id: "D", text: "Automated Test Framework (ATF)", is_correct: true }
    ]
  },
  {
    id: "D5-311",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "Which type of scripts run in the browser?",
    explanation: "UI Policies run in the user's browser to control form behavior dynamically.",
    is_active: true,
    choices: [
      { id: "A", text: "UI Policies", is_correct: true },
      { id: "B", text: "Script Include Scripts", is_correct: false },
      { id: "C", text: "Access Control Scripts", is_correct: false },
      { id: "D", text: "Business Rule Scripts", is_correct: false }
    ]
  },
  {
    id: "D5-315",
    domain_id: 5,
    type: QuestionType.MCQ,
    text: "UI Policy can make fields read-only, mandatory, or hidden.",
    explanation: "True. These are the three standard UI Policy Actions available for form fields.",
    is_active: true,
    choices: [
      { id: "A", text: "True", is_correct: true },
      { id: "B", text: "False", is_correct: false }
    ]
  },
  {
    id: "D5-317",
    domain_id: 5,
    type: QuestionType.MULTI_SELECT,
    text: "Which are states that you can make a field on a form using UI Policy? (Choose three.)",
    explanation: "UI Policies control field visibility (Hidden), whether data is required (Mandatory), and if it can be edited (Read-only).",
    is_active: true,
    choices: [
      { id: "A", text: "read-only", is_correct: true },
      { id: "D", text: "Mandatory", is_correct: true },
      { id: "F", text: "Hidden", is_correct: true },
      { id: "E", text: "Empty", is_correct: false }
    ]
  }
];
