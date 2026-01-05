import { Question, QuestionType } from '../types';

export const DOMAIN1_QUESTIONS: Question[] = [
  // --- PART 1 (Questions 1 - 15) ---
  {
    id: "p1-q5",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "Reports can be created from which different places in the platform? (Choose two.)",
    explanation: "Reports can be generated from the column heading context menu in a list or via the View / Run module.",
    is_active: true,
    choices: [
      { id: "a", text: "List column heading", is_correct: true },
      { id: "b", text: "Metrics module", is_correct: false },
      { id: "c", text: "Statistics module", is_correct: false },
      { id: "d", text: "View / Run module", is_correct: true }
    ]
  },
  {
    id: "p1-q8",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which term refers to application menus and modules which you may want to access quickly and often?",
    explanation: "Favorites are intended for quick access to frequently used menus or records.",
    is_active: true,
    choices: [
      { id: "a", text: "Breadcrumb", is_correct: false },
      { id: "b", text: "Favorite", is_correct: true },
      { id: "c", text: "Tag", is_correct: false },
      { id: "d", text: "Bookmark", is_correct: false }
    ]
  },
  {
    id: "p1-q10",
    domain_id: 1,
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
    id: "p1-q11",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Buttons, form links, and context menu items are all examples of what type of functionality?",
    explanation: "UI Actions are used to add interactive elements like buttons and links to forms and lists.",
    is_active: true,
    choices: [
      { id: "a", text: "Business Rule", is_correct: false },
      { id: "b", text: "UI Action", is_correct: true },
      { id: "c", text: "Client Script", is_correct: false },
      { id: "d", text: "UI Policy", is_correct: false }
    ]
  },
  {
    id: "p1-q14",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Table Access Control rules are processed in the following order:",
    explanation: "ACLs are checked from most generic to most specific: Wildcard (*), Parent Table, then the specific Table Name.",
    is_active: true,
    choices: [
      { id: "a", text: "any table name (wildcard), parent table name, table name", is_correct: true },
      { id: "b", text: "table name, parent table name, any table name (wildcard)", is_correct: false },
      { id: "c", text: "parent table name, table name, any table name (wildcard)", is_correct: false },
      { id: "d", text: "any table name (wildcard), table name, parent table name", is_correct: false }
    ]
  },
  {
    id: "p1-q17",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which would NOT appear in the History section of the Application Navigator?",
    explanation: "History tracks records, lists, and forms, but does not track UI Pages.",
    is_active: true,
    choices: [
      { id: "a", text: "Records", is_correct: false },
      { id: "b", text: "UI Pages", is_correct: true },
      { id: "c", text: "Lists", is_correct: false },
      { id: "d", text: "Forms", is_correct: false }
    ]
  },
  {
    id: "p1-q18",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    explanation: "Avoid using the Default update set to move customizations between instances.",
    is_active: true,
    choices: [
      { id: "a", text: "Avoid using the Default Update set as an Update Set for moving customizations from instance to instance", is_correct: true },
      { id: "b", text: "Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions", is_correct: false },
      { id: "c", text: "Use the Baseline Update Set to store the contents of items after they are changed the first time", is_correct: false },
      { id: "d", text: "Once an Update Set is closed as 'Complete', change it back to 'In Progress' until it is applied to another instance", is_correct: false }
    ]
  },
  {
    id: "p1-q21",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which one of the following statements is true about Column Context Menus?",
    explanation: "The Column Context Menu allows creating reports, configuring lists, and exporting data.",
    is_active: true,
    choices: [
      { id: "a", text: "It displays actions such as creating quick reports, configuring the list, and exporting data", is_correct: true },
      { id: "b", text: "It displays actions related to filtering options, assigning tags, and search", is_correct: false },
      { id: "c", text: "It displays actions related to viewing and filtering the entire list", is_correct: false },
      { id: "d", text: "It displays actions such as view form, view related task, and add relationship", is_correct: false }
    ]
  },
  {
    id: "p1-q25",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "In what order should filter elements be specified?",
    explanation: "ServiceNow filters follow the pattern: Field, Operator, then Value.",
    is_active: true,
    choices: [
      { id: "a", text: "Field, Operator, then Value", is_correct: true },
      { id: "b", text: "Field, Operator, then Condition", is_correct: false },
      { id: "c", text: "Operator, Condition, then Value", is_correct: false },
      { id: "d", text: "Value, Operator, then Field", is_correct: false }
    ]
  },
  {
    id: "p1-q32",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is a formatter? Select one of the following.",
    explanation: "Formatters are elements used to display data that is not stored as a specific field in the record.",
    is_active: true,
    choices: [
      { id: "a", text: "A formatter allows you to configure applications on your instance", is_correct: false },
      { id: "b", text: "A formatter is a form element used to display information that is not a field in the record", is_correct: true },
      { id: "c", text: "A formatter allows you to populate fields automatically", is_correct: false },
      { id: "d", text: "A formatter is a set of conditions applied to a table to help find and work with data", is_correct: false }
    ]
  },
  {
    id: "p1-q33",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "When searching using the App Navigator search field, what can be returned? (Choose four.)",
    explanation: "The Navigator filter can return Applications, Modules, Favorites, and History.",
    is_active: true,
    choices: [
      { id: "a", text: "Names of Applications and Modules", is_correct: true },
      { id: "b", text: "Names of Modules", is_correct: true },
      { id: "c", text: "Names of Applications", is_correct: true },
      { id: "d", text: "Favorites", is_correct: true },
      { id: "e", text: "History Records", is_correct: false },
      { id: "f", text: "Titles of Dashboard Gauges", is_correct: false }
    ]
  },
  {
    id: "p1-q37",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    explanation: "Basic Configuration UI 16 manages the banner image, tab title, and system date formats.",
    is_active: true,
    choices: [
      { id: "a", text: "Banner Image", is_correct: true },
      { id: "b", text: "Record Number Format", is_correct: false },
      { id: "c", text: "Browser Tab Title", is_correct: true },
      { id: "d", text: "System Date Format", is_correct: true },
      { id: "e", text: "Form Header Size", is_correct: false }
    ]
  },
  {
    id: "p1-q38",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is the function of user impersonation?",
    explanation: "Impersonation is used for testing and visibility to see what a specific user can access.",
    is_active: true,
    choices: [
      { id: "a", text: "Testing and visibility", is_correct: true },
      { id: "b", text: "Activate verbose logging", is_correct: false },
      { id: "c", text: "View custom perspectives", is_correct: false },
      { id: "d", text: "Unlock Application master list", is_correct: false }
    ]
  },
  {
    id: "p1-q40",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When working on a form, what is the difference between Insert and Update operations?",
    explanation: "Insert creates a new record and remains on the form, while Update saves changes and exits.",
    is_active: true,
    choices: [
      { id: "a", text: "Insert creates a new record and Update saves changes, both remain on the form", is_correct: false },
      { id: "b", text: "Insert creates a new record and Update saves changes, both exit the form", is_correct: false },
      { id: "c", text: "Insert saves changes and exits the form, Update saves changes and remains on the form", is_correct: false },
      { id: "d", text: "Insert saves changes and remains on the form, Update saves changes and exits the form", is_correct: true }
    ]
  },
  {
    id: "p1-q49",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following allows a user to edit field values in a list without opening the form?",
    explanation: "The List Editor provides inline editing capabilities for fields in a list view.",
    is_active: true,
    choices: [
      { id: "a", text: "Data Editor", is_correct: false },
      { id: "b", text: "Edit Menu", is_correct: false },
      { id: "c", text: "List Editor", is_correct: true },
      { id: "d", text: "Form Designer", is_correct: false }
    ]
  },

  // --- PART 2 (Questions 16 - 30) ---
  {
    id: "p2-q54",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Where can Admins check which release is running on an ServiceNow instance?",
    explanation: "The System.upgraded table tracks the release history of the instance.",
    is_active: true,
    choices: [
      { id: "a", text: "Memory Stats module", is_correct: false },
      { id: "b", text: "Stats module", is_correct: false },
      { id: "c", text: "System.upgraded table", is_correct: true },
      { id: "d", text: "Transactions log", is_correct: false }
    ]
  },
  {
    id: "p2-q62",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which section of the ServiceNow UI allows you to perform a global search?",
    explanation: "Global Search is located in the banner frame at the top of the interface.",
    is_active: true,
    choices: [
      { id: "a", text: "Application Navigator", is_correct: false },
      { id: "b", text: "Banner frame", is_correct: true },
      { id: "c", text: "List pane", is_correct: false },
      { id: "d", text: "Content frame", is_correct: false }
    ]
  },
  {
    id: "p2-q63",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "How do you make a list filter available to everyone?",
    explanation: "To share a filter, you must give it a name, set visibility, and save it.",
    is_active: true,
    choices: [
      { id: "a", text: "Make active, assign a name, and save", is_correct: false },
      { id: "b", text: "Assign a group, set visibility, and save", is_correct: false },
      { id: "c", text: "Assign a name, set visibility, and save", is_correct: true },
      { id: "d", text: "Make active, set visibility, and save", is_correct: false }
    ]
  },
  {
    id: "p2-q64",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What would NOT appear in the Application Navigator if service is typed into the filter field?",
    explanation: "The filter navigator shows matches that contain the string. 'Incident > Assigned to me' does not contain the word 'service'.",
    is_active: true,
    choices: [
      { id: "a", text: "Configuration > Business Services", is_correct: false },
      { id: "b", text: "Self-Service > Knowledge", is_correct: false },
      { id: "c", text: "Service Portal > Widgets", is_correct: false },
      { id: "d", text: "Incident > Assigned to me", is_correct: true }
    ]
  },
  {
    id: "p2-q65",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following is used to categorize, flag, and locate records?",
    explanation: "Tags allow users to categorize records for quick retrieval.",
    is_active: true,
    choices: [
      { id: "a", text: "Search", is_correct: false },
      { id: "b", text: "Favorites", is_correct: false },
      { id: "c", text: "Tags", is_correct: true },
      { id: "d", text: "Bookmarks", is_correct: false }
    ]
  },
  {
    id: "p2-q66",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which tool should be used to populate commonly used fields in a form?",
    explanation: "Templates are designed to auto-populate fields with predefined values.",
    is_active: true,
    choices: [
      { id: "a", text: "Template", is_correct: true },
      { id: "b", text: "Reference Qualifier", is_correct: false },
      { id: "c", text: "Formatter", is_correct: false },
      { id: "d", text: "Assignment Rule", is_correct: false }
    ]
  },
  {
    id: "p2-q98",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The Pencil icon in the Favorites tab allows for editing the favorite's label and appearance.",
    is_active: true,
    choices: [
      { id: "a", text: "Clock", is_correct: false },
      { id: "b", text: "Hamburger", is_correct: false },
      { id: "c", text: "Pencil", is_correct: true },
      { id: "d", text: "Three dots", is_correct: false },
      { id: "e", text: "Triangle", is_correct: false },
      { id: "f", text: "Star", is_correct: false }
    ]
  },
  {
    id: "p2-q101",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is a quick way to create a report from a list view?",
    explanation: "Applying a filter and right-clicking a column header to select 'Create Report' is the fastest method.",
    is_active: true,
    choices: [
      { id: "a", text: "Click on filter breadcrumb, drag and drop on the Report > Create New module", is_correct: false },
      { id: "b", text: "Click Funnel, define filter conditions, click Create Report", is_correct: false },
      { id: "c", text: "Click Context Menu, select Create Report", is_correct: false },
      { id: "d", text: "Apply filter, right click on column header, select Bar Chart", is_correct: false },
      { id: "e", text: "Apply filter, right click on column header, select Create Report", is_correct: true }
    ]
  },
  {
    id: "p2-q110",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    explanation: "Double-clicking the Clock (History) icon is a known shortcut in some UI versions for expanding/collapsing all navigator categories.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: true },
      { id: "c", text: "Application", is_correct: false },
      { id: "d", text: "Funnel", is_correct: false }
    ]
  },
  {
    id: "p2-q119",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    explanation: "The 'Reports > Create New' module is the standard starting point for creating reports.",
    is_active: true,
    choices: [
      { id: "a", text: "Report Dashboard > Create New", is_correct: false },
      { id: "b", text: "Reports > Getting Started", is_correct: false },
      { id: "c", text: "Performance Analytics > Reports", is_correct: false },
      { id: "d", text: "Self-Service > Reports", is_correct: false },
      { id: "e", text: "Reports > Create New", is_correct: true }
    ]
  },
  {
    id: "p2-q122",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
    explanation: "Grouping can be achieved via the list Context Menu or the specific column's context menu.",
    is_active: true,
    choices: [
      { id: "a", text: "On list Context Menu, select Group By > Category", is_correct: true },
      { id: "b", text: "On the Filter Menu, select Group By > Category", is_correct: false },
      { id: "c", text: "Click Group On icon, select Category", is_correct: false },
      { id: "d", text: "On Navigator Filter, type tablename.group.category and press enter", is_correct: false },
      { id: "e", text: "On the Category column title, click Context menu > Group By Category", is_correct: true }
    ]
  },
  {
    id: "p2-q136",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which module would you use to customize your instances banner image, text and colors?",
    explanation: "Basic Configuration UI16 is used for primary instance branding.",
    is_active: true,
    choices: [
      { id: "a", text: "System UI > UI Pages > Branding", is_correct: false },
      { id: "b", text: "Service Portal > Portals > Branding", is_correct: false },
      { id: "c", text: "System Properties > Basic Configuration UI16", is_correct: true },
      { id: "d", text: "System Properties > Branding", is_correct: false },
      { id: "e", text: "Homepage Admin > Pages > Branding", is_correct: false }
    ]
  },
  {
    id: "p2-q140",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    explanation: "Impersonation is the best way to verify what another user sees based on their roles.",
    is_active: true,
    choices: [
      { id: "a", text: "Look up their password, so you can login with their account", is_correct: false },
      { id: "b", text: "Initiate a Connect Chat session", is_correct: false },
      { id: "c", text: "Install the Bomgar plug-in", is_correct: false },
      { id: "d", text: "Impersonate the user", is_correct: true },
      { id: "e", text: "Launch a NowChat window", is_correct: false }
    ]
  },
  {
    id: "p2-q142",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
    explanation: "The 'Show Choices' option allows administrators to edit the values and labels for choice fields.",
    is_active: true,
    choices: [
      { id: "a", text: "Configure Lists", is_correct: false },
      { id: "b", text: "Show Options", is_correct: false },
      { id: "c", text: "Configure Task", is_correct: false },
      { id: "d", text: "Show Choices", is_correct: true },
      { id: "e", text: "Show Choice List", is_correct: false },
      { id: "f", text: "Configure Options", is_correct: false }
    ]
  },
  {
    id: "p2-q150",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a Form header, what is the three bar icon called?",
    explanation: "The three horizontal lines are called the Additional Actions or Context Menu icon.",
    is_active: true,
    choices: [
      { id: "a", text: "Pancake icon", is_correct: false },
      { id: "b", text: "Additional Actions or Context Menu", is_correct: true },
      { id: "c", text: "Hamburger icon", is_correct: false },
      { id: "d", text: "Cake icon", is_correct: false }
    ]
  },

  // --- PART 3 (Questions 31 - 45) ---
  {
    id: "p3-q49",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following allows a user to edit field values in a list without opening the form?",
    explanation: "The List Editor enables quick data changes directly within the list pane.",
    is_active: true,
    choices: [
      { id: "a", text: "Data Editor", is_correct: false },
      { id: "b", text: "Edit Menu", is_correct: false },
      { id: "c", text: "List Editor", is_correct: true },
      { id: "d", text: "Form Designer", is_correct: false }
    ]
  },
  {
    id: "p3-q62",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which section of the ServiceNow UI allows you to perform a global search?",
    explanation: "Global Search is part of the banner frame at the top edge of the UI.",
    is_active: true,
    choices: [
      { id: "a", text: "Application Navigator", is_correct: false },
      { id: "b", text: "Banner frame", is_correct: true },
      { id: "c", text: "List pane", is_correct: false },
      { id: "d", text: "Content frame", is_correct: false }
    ]
  },
  {
    id: "p3-q63",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "How do you make a list filter available to everyone?",
    explanation: "To share a filter, define a name, set visibility to everyone, and save.",
    is_active: true,
    choices: [
      { id: "a", text: "Make active, assign a name, and save", is_correct: false },
      { id: "b", text: "Assign a group, set visibility, and save", is_correct: false },
      { id: "c", text: "Assign a name, set visibility, and save", is_correct: true },
      { id: "d", text: "Make active, set visibility, and save", is_correct: false }
    ]
  },
  {
    id: "p3-q64",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What would NOT appear in the Application Navigator if service is typed into the filter field?",
    explanation: "Filtered navigator displays items matching the text. 'Incident > Assigned to me' lacks the keyword 'service'.",
    is_active: true,
    choices: [
      { id: "a", text: "Configuration > Business Services", is_correct: false },
      { id: "b", text: "Self-Service > Knowledge", is_correct: false },
      { id: "c", text: "Service Portal > Widgets", is_correct: false },
      { id: "d", text: "Incident > Assigned to me", is_correct: true }
    ]
  },
  {
    id: "p3-q65",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following is used to categorize, flag, and locate records?",
    explanation: "Tags provide a metadata layer for categorizing and finding specific records.",
    is_active: true,
    choices: [
      { id: "a", text: "Search", is_correct: false },
      { id: "b", text: "Favorites", is_correct: false },
      { id: "c", text: "Tags", is_correct: true },
      { id: "d", text: "Bookmarks", is_correct: false }
    ]
  },
  {
    id: "p3-q66",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which tool should be used to populate commonly used fields in a form?",
    explanation: "Templates help speed up form completion by pre-filling standard values.",
    is_active: true,
    choices: [
      { id: "a", text: "Template", is_correct: true },
      { id: "b", text: "Reference Qualifier", is_correct: false },
      { id: "c", text: "Formatter", is_correct: false },
      { id: "d", text: "Assignment Rule", is_correct: false }
    ]
  },
  {
    id: "p3-q98",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The edit pencil is used to modify the favorite entry properties.",
    is_active: true,
    choices: [
      { id: "a", text: "Clock", is_correct: false },
      { id: "b", text: "Hamburger", is_correct: false },
      { id: "c", text: "Pencil", is_correct: true },
      { id: "d", text: "Three dots", is_correct: false },
      { id: "e", text: "Triangle", is_correct: false },
      { id: "f", text: "Star", is_correct: false }
    ]
  },
  {
    id: "p3-q110",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    explanation: "Double-clicking the Clock (History) icon is a navigation shortcut for collapsing categories.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: true },
      { id: "c", text: "Application", is_correct: false },
      { id: "d", text: "Funnel", is_correct: false }
    ]
  },
  {
    id: "p3-q119",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    explanation: "Reports > Create New is the intended entry point for creating custom reports.",
    is_active: true,
    choices: [
      { id: "a", text: "Report Dashboard > Create New", is_correct: false },
      { id: "b", text: "Reports > Getting Started", is_correct: false },
      { id: "c", text: "Performance Analytics > Reports", is_correct: false },
      { id: "d", text: "Self-Service > Reports", is_correct: false },
      { id: "e", text: "Reports > Create New", is_correct: true }
    ]
  },
  {
    id: "p3-q122",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
    explanation: "Records can be grouped using the list context menu or the column context menu.",
    is_active: true,
    choices: [
      { id: "a", text: "On list Context Menu, select Group By > Category", is_correct: true },
      { id: "b", text: "On the Filter Menu, select Group By > Category", is_correct: false },
      { id: "c", text: "Click Group On icon, select Category", is_correct: false },
      { id: "d", text: "On Navigator Filter, type tablename.group.category and press enter", is_correct: false },
      { id: "e", text: "On the Category column title, click Context menu > Group By Category", is_correct: true }
    ]
  },
  {
    id: "p3-q136",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which module would you use to customize your instances banner image, text and colors?",
    explanation: "Basic Configuration UI16 provides the interface for instance branding customization.",
    is_active: true,
    choices: [
      { id: "a", text: "System UI > UI Pages > Branding", is_correct: false },
      { id: "b", text: "Service Portal > Portals > Branding", is_correct: false },
      { id: "c", text: "System Properties > Basic Configuration UI16", is_correct: true },
      { id: "d", text: "System Properties > Branding", is_correct: false },
      { id: "e", text: "Homepage Admin > Pages > Branding", is_correct: false }
    ]
  },
  {
    id: "p3-q140",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    explanation: "Admins use Impersonate User to troubleshoot visibility issues exactly from the user's perspective.",
    is_active: true,
    choices: [
      { id: "a", text: "Look up their password, so you can login with their account", is_correct: false },
      { id: "b", text: "Initiate a Connect Chat session", is_correct: false },
      { id: "c", text: "Install the Bomgar plug-in", is_correct: false },
      { id: "d", text: "Impersonate the user", is_correct: true },
      { id: "e", text: "Launch a NowChat window", is_correct: false }
    ]
  },
  {
    id: "p3-q150",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a Form header, what is the three bar icon called?",
    explanation: "This icon opens the Context Menu or Additional Actions for the record.",
    is_active: true,
    choices: [
      { id: "a", text: "Pancake icon", is_correct: false },
      { id: "b", text: "Additional Actions or Context Menu", is_correct: true },
      { id: "c", text: "Hamburger icon", is_correct: false },
      { id: "d", text: "Cake icon", is_correct: false }
    ]
  },
  {
    id: "p3-q225",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "From a related list, what would a user click to personalize the layout of the columns?",
    explanation: "The Gear icon in a related list header allows individual users to choose and arrange columns.",
    is_active: true,
    choices: [
      { id: "a", text: "Gear", is_correct: true },
      { id: "b", text: "Context Menu", is_correct: false },
      { id: "c", text: "Pencil", is_correct: false },
      { id: "d", text: "Magnifier", is_correct: false }
    ]
  },
  {
    id: "p3-q287",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    explanation: "Clicking 'Personalize List' (via the Gear) is the way to rearrange columns for an individual user's view.",
    is_active: true,
    choices: [
      { id: "a", text: "Right click on any column header, Context Menu > Configure > List Layout", is_correct: false },
      { id: "b", text: "Click List Context Menu > Configure > List Layout", is_correct: false },
      { id: "c", text: "Click List Context Menu > Personalize List", is_correct: false },
      { id: "d", text: "Click Personalize List", is_correct: true }
    ]
  },

  // --- PART 4 (Questions 46 - 60) ---
  {
    id: "p4-q32",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is a formatter? Select one of the following.",
    explanation: "A formatter is a form element used to display information that is not a field in the record.",
    is_active: true,
    choices: [
      { id: "a", text: "A formatter allows you to configure applications on your instance", is_correct: false },
      { id: "b", text: "A formatter is a form element used to display information that is not a field in the record", is_correct: true },
      { id: "c", text: "A formatter allows you to populate fields automatically", is_correct: false },
      { id: "d", text: "A formatter is a set of conditions applied to a table to help find and work with data", is_correct: false }
    ]
  },
  {
    id: "p4-q37",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    explanation: "Basic Configuration UI 16 allows customizing the Banner Image, Browser Tab Title, and System Date Format.",
    is_active: true,
    choices: [
      { id: "a", text: "Banner Image", is_correct: true },
      { id: "b", text: "Record Number Format", is_correct: false },
      { id: "c", text: "Browser Tab Title", is_correct: true },
      { id: "d", text: "System Date Format", is_correct: true },
      { id: "e", text: "Form Header Size", is_correct: false }
    ]
  },
  {
    id: "p4-q49",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following allows a user to edit field values in a list without opening the form?",
    explanation: "The List Editor allows inline editing of field values in a list.",
    is_active: true,
    choices: [
      { id: "a", text: "Data Editor", is_correct: false },
      { id: "b", text: "Edit Menu", is_correct: false },
      { id: "c", text: "List Editor", is_correct: true },
      { id: "d", text: "Form Designer", is_correct: false }
    ]
  },
  {
    id: "p4-q54",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Where can Admins check which release is running on an ServiceNow instance?",
    explanation: "The System.upgraded table (and the stats module) indicates which release is running.",
    is_active: true,
    choices: [
      { id: "a", text: "Memory Stats module", is_correct: false },
      { id: "b", text: "Stats module", is_correct: false },
      { id: "c", text: "System.upgraded table", is_correct: true },
      { id: "d", text: "Transactions log", is_correct: false }
    ]
  },
  {
    id: "p4-q66",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which tool should be used to populate commonly used fields in a form?",
    explanation: "Templates are used to auto-populate fields with standard values.",
    is_active: true,
    choices: [
      { id: "a", text: "Template", is_correct: true },
      { id: "b", text: "Reference Qualifier", is_correct: false },
      { id: "c", text: "Formatter", is_correct: false },
      { id: "d", text: "Assignment Rule", is_correct: false }
    ]
  },
  {
    id: "p4-q98",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The Pencil icon in the Favorites tab is used to edit favorites.",
    is_active: true,
    choices: [
      { id: "a", text: "Clock", is_correct: false },
      { id: "b", text: "Hamburger", is_correct: false },
      { id: "c", text: "Pencil", is_correct: true },
      { id: "d", text: "Three dots", is_correct: false },
      { id: "e", text: "Triangle", is_correct: false },
      { id: "f", text: "Star", is_correct: false }
    ]
  },
  {
    id: "p4-q110",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    explanation: "Double-clicking the Clock icon (History tab) collapses/expands the navigator categories.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: true },
      { id: "c", text: "Application", is_correct: false },
      { id: "d", text: "Funnel", is_correct: false }
    ]
  },
  {
    id: "p4-q119",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    explanation: "The standard place to start report creation is Reports > Create New.",
    is_active: true,
    choices: [
      { id: "a", text: "Report Dashboard > Create New", is_correct: false },
      { id: "b", text: "Reports > Getting Started", is_correct: false },
      { id: "c", text: "Performance Analytics > Reports", is_correct: false },
      { id: "d", text: "Self-Service > Reports", is_correct: false },
      { id: "e", text: "Reports > Create New", is_correct: true }
    ]
  },
  {
    id: "p4-q136",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which module would you use to customize your instances banner image, text and colors?",
    explanation: "System Properties > Basic Configuration UI16 is used for primary instance branding.",
    is_active: true,
    choices: [
      { id: "a", text: "System UI > UI Pages > Branding", is_correct: false },
      { id: "b", text: "Service Portal > Portals > Branding", is_correct: false },
      { id: "c", text: "System Properties > Basic Configuration UI16", is_correct: true },
      { id: "d", text: "System Properties > Branding", is_correct: false },
      { id: "e", text: "Homepage Admin > Pages > Branding", is_correct: false }
    ]
  },
  {
    id: "p4-q140",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    explanation: "Impersonation allows admins to see exactly what the user sees.",
    is_active: true,
    choices: [
      { id: "a", text: "Look up their password, so you can login with their account", is_correct: false },
      { id: "b", text: "Initiate a Connect Chat session", is_correct: false },
      { id: "c", text: "Install the Bomgar plug-in", is_correct: false },
      { id: "d", text: "Impersonate the user", is_correct: true },
      { id: "e", text: "Launch a NowChat window", is_correct: false }
    ]
  },
  {
    id: "p4-q150",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a Form header, what is the three bar icon called?",
    explanation: "The icon with three lines on a form is the Additional Actions or Context Menu.",
    is_active: true,
    choices: [
      { id: "a", text: "Pancake icon", is_correct: false },
      { id: "b", text: "Additional Actions or Context Menu", is_correct: true },
      { id: "c", text: "Hamburger icon", is_correct: false },
      { id: "d", text: "Cake icon", is_correct: false }
    ]
  },
  {
    id: "p4-q225",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "From a related list, what would a user click to personalize the layout of the columns?",
    explanation: "The Gear icon in the related list header allows column personalization.",
    is_active: true,
    choices: [
      { id: "a", text: "Gear", is_correct: true },
      { id: "b", text: "Context Menu", is_correct: false },
      { id: "c", text: "Pencil", is_correct: false },
      { id: "d", text: "Magnifier", is_correct: false }
    ]
  },
  {
    id: "p4-q287",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    explanation: "Clicking 'Personalize List' (often via the Gear icon) allows rearranging columns.",
    is_active: true,
    choices: [
      { id: "a", text: "Right click on any column header, Context Menu > Configure > List Layout", is_correct: false },
      { id: "b", text: "Click List Context Menu > Configure > List Layout", is_correct: false },
      { id: "c", text: "Click List Context Menu > Personalize List", is_correct: false },
      { id: "d", text: "Click Personalize List", is_correct: true }
    ]
  },
  {
    id: "p4-q294",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What action will allow you to personalize layouts of columns in a list?",
    explanation: "Clicking the Gear Icon opens the Personalize window options where columns can be selected.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > View > Personalize", is_correct: false },
      { id: "b", text: "Click Gear Icon > Personalize window options > Select the appropriate columns", is_correct: true },
      { id: "c", text: "Select the column to be personalized and right at the header > Choose the options to personalize", is_correct: false },
      { id: "d", text: "Select the column to be personalized > Click Edit icon (Pencil) > Choose the options to personalize", is_correct: false }
    ]
  },
  {
    id: "p4-q300",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What do you click when you have made modifications to your report, and you want to see the results without saving?",
    explanation: "The Preview button in the report builder allows viewing results without committing a save.",
    is_active: true,
    choices: [
      { id: "a", text: "Preview", is_correct: true },
      { id: "b", text: "Test", is_correct: false },
      { id: "c", text: "Run", is_correct: false },
      { id: "d", text: "Try It", is_correct: false },
      { id: "e", text: "Execute", is_correct: false }
    ]
  },

  // --- PART 5 (Questions 61 - 75) ---
  {
    id: "p5-q71",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What are (are) best practice(s) regarding users/groups/roles? (Choose two.)",
    explanation: "Best practice is to assign roles to groups and add users to those groups, rather than assigning roles directly to individual users.",
    is_active: true,
    choices: [
      { id: "a", text: "You should never assign roles to groups.", is_correct: false },
      { id: "b", text: "You should assign roles to users.", is_correct: false },
      { id: "c", text: "You should add users to groups.", is_correct: true },
      { id: "d", text: "You should assign roles to groups", is_correct: true }
    ]
  },
  {
    id: "p5-q72",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What are two ways to generate an Event? (Choose two.)",
    explanation: "Events are typically generated by Business Rules (server-side script) or as part of a Workflow/Flow process.",
    is_active: true,
    choices: [
      { id: "a", text: "Business Rule", is_correct: true },
      { id: "b", text: "Workflow", is_correct: true },
      { id: "c", text: "Log entry", is_correct: false },
      { id: "d", text: "Knowledge article publication", is_correct: false }
    ]
  },
  {
    id: "p5-q75",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is a sys_id?",
    explanation: "A sys_id is a unique 32-character GUID (Globally Unique Identifier) assigned to every single record in the ServiceNow database.",
    is_active: true,
    choices: [
      { id: "a", text: "Unique 32-character identifier that is assigned to every record", is_correct: true },
      { id: "b", text: "A client-side Business Rule", is_correct: false },
      { id: "c", text: "A server-side Business Rule", is_correct: false },
      { id: "d", text: "Unique 64-character identifier that is assigned to every record", is_correct: false }
    ]
  },
  {
    id: "p5-q76",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When creating a global custom table named abc, what is the table name that is automatically assigned by the platform?",
    explanation: "Custom tables in the global scope are automatically prefixed with 'u_' followed by the name provided.",
    is_active: true,
    choices: [
      { id: "a", text: "snc_abc", is_correct: false },
      { id: "b", text: "abc", is_correct: false },
      { id: "c", text: "u_abc", is_correct: true },
      { id: "d", text: "sys_abc", is_correct: false }
    ]
  },
  {
    id: "p5-q78",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which is the primary application used to load data into ServiceNow?",
    explanation: "Import Sets are used to import data from various external data sources and map them into ServiceNow tables.",
    is_active: true,
    choices: [
      { id: "a", text: "Service Level Management", is_correct: false },
      { id: "b", text: "Configuration", is_correct: false },
      { id: "c", text: "System Import Sets", is_correct: true },
      { id: "d", text: "System Update Sets", is_correct: false }
    ]
  },
  {
    id: "p5-q85",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following protects applications by identifying and restricting access to available files and data?",
    explanation: "Access Control Rules (ACLs) are the primary security mechanism for restricting access to data and files based on roles and conditions.",
    is_active: true,
    choices: [
      { id: "a", text: "Application Configuration", is_correct: false },
      { id: "b", text: "Verbose Log", is_correct: false },
      { id: "c", text: "Access Control Rules", is_correct: true },
      { id: "d", text: "Application Scope", is_correct: false }
    ]
  },
  {
    id: "p5-q86",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which one statement correctly describes Access Control rule evaluation?",
    explanation: "For an operation to be allowed on a field, the user must pass both the Table-level (Row) ACL and the Field-level ACL.",
    is_active: true,
    choices: [
      { id: "a", text: "Table access rules are evaluated from the general to the specific", is_correct: false },
      { id: "b", text: "If more than one rule applies to a record, the older rule is evaluated first", is_correct: false },
      { id: "c", text: "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed", is_correct: true },
      { id: "d", text: "The role with the most permissions evaluates the rules first", is_correct: false }
    ]
  },
  {
    id: "p5-q90",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "The ServiceNow platform includes which types of interfaces? (Choose three.)",
    explanation: "ServiceNow offers various interfaces including Mobile Apps (Now Mobile), Service Portals, and the standard Now Platform UI.",
    is_active: true,
    choices: [
      { id: "a", text: "Now Mobile Apps", is_correct: true },
      { id: "b", text: "Agent Control Center", is_correct: false },
      { id: "c", text: "Back Office Dashboard", is_correct: false },
      { id: "d", text: "Service Portals", is_correct: true },
      { id: "e", text: "Now Platform® User Interfaces", is_correct: true },
      { id: "f", text: "Field Service Taskboard", is_correct: false }
    ]
  },
  {
    id: "p5-q91",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following are not included in an Update Set, by default? (Choose four.)",
    explanation: "Update Sets capture configuration changes, but do not capture Data (records), published Workflows (though their definitions are captured, standard operational data isn't), Schedules, or Scheduled Jobs.",
    is_active: true,
    choices: [
      { id: "a", text: "Homepages", is_correct: false },
      { id: "b", text: "Data", is_correct: true },
      { id: "c", text: "Published Workflows", is_correct: true },
      { id: "d", text: "Business Rules", is_correct: false },
      { id: "e", text: "Schedules", is_correct: true },
      { id: "f", text: "Database changes", is_correct: false },
      { id: "g", text: "Related Lists", is_correct: false },
      { id: "h", text: "Report Definitions", is_correct: false },
      { id: "i", text: "Scheduled Jobs", is_correct: true },
      { id: "j", text: "Client Scripts", is_correct: false },
      { id: "k", text: "Views", is_correct: false }
    ]
  },
  {
    id: "p5-q94",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What do you activate when you want to add applications or functionality within your development instance?",
    explanation: "Plugins are the mechanism used to activate additional features and applications in a ServiceNow instance.",
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
    id: "p5-q98",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The Pencil icon in the Favorites tab allows you to edit the label and other properties of the favorite.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: false },
      { id: "c", text: "Triangle", is_correct: false },
      { id: "d", text: "Pencil", is_correct: true }
    ]
  },
  {
    id: "p5-q99",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What needs to be specified, when creating a Business Rule? (Choose four.)",
    explanation: "A Business Rule requires a Table, the Timing (When), the Condition to evaluate, and the Script or Action to run.",
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
    id: "p5-q104",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
    explanation: "Users can personalize their own time zone settings using the Gear icon (System Settings) in the banner frame.",
    is_active: true,
    choices: [
      { id: "a", text: "Have them clear their cache.", is_correct: false },
      { id: "b", text: "Have them use the gear icon to set the employee's time zone.", is_correct: true },
      { id: "c", text: "Recommend they use Chrome, instead of Explorer.", is_correct: false },
      { id: "d", text: "Use the system properties to correct the instance's time zone.", is_correct: false },
      { id: "e", text: "Have them correct the time zone on their computer.", is_correct: false }
    ]
  },
  {
    id: "p5-q107",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is a no-code approach to control the mandatory or read-only state of a form field?",
    explanation: "UI Policies provide a no-code way to manage field attributes like visibility, mandatory, and read-only based on conditions.",
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
    id: "p5-q112",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which tool is used to change the order of fields on a form for all users?",
    explanation: "Administrators use Form Layout (or Form Designer) to change the organization and order of fields on a form globally.",
    is_active: true,
    choices: [
      { id: "a", text: "Personalize List", is_correct: false },
      { id: "b", text: "Form Layout", is_correct: true },
      { id: "c", text: "UI Policy", is_correct: false },
      { id: "d", text: "Form Filter", is_correct: false }
    ]
  },

  // --- PART 6 (Questions 76 - 90) ---
  {
    id: "p6-q110",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    explanation: "Double-clicking the Clock icon (History tab) in the Application Navigator collapses or expands all application menus.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: true },
      { id: "c", text: "Application", is_correct: false },
      { id: "d", text: "Funnel", is_correct: false }
    ]
  },
  {
    id: "p6-q111",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What do you call any component that needs to be managed in order to deliver services?",
    explanation: "A Configuration Item (CI) is any component or asset that needs to be managed in order to deliver an IT service.",
    is_active: true,
    choices: [
      { id: "a", text: "CSDM Items", is_correct: false },
      { id: "b", text: "CMDB", is_correct: false },
      { id: "c", text: "Configuration item", is_correct: true },
      { id: "d", text: "Service Offerings", is_correct: false },
      { id: "e", text: "Asset", is_correct: false }
    ]
  },
  {
    id: "p6-q119",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    explanation: "The Report Designer (Reports > Create New) is the primary starting point for creating reports in ServiceNow.",
    is_active: true,
    choices: [
      { id: "a", text: "Report Dashboard > Create New", is_correct: false },
      { id: "b", text: "Reports > Getting Started", is_correct: false },
      { id: "c", text: "Performance Analytics > Reports", is_correct: false },
      { id: "d", text: "Self-Service > Reports", is_correct: false },
      { id: "e", text: "Reports > Create New", is_correct: true }
    ]
  },
  {
    id: "p6-q122",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
    explanation: "Grouping can be done via the List Context Menu or by using the Column Title context menu.",
    is_active: true,
    choices: [
      { id: "a", text: "On list Context Menu, select Group By > Category", is_correct: true },
      { id: "b", text: "On the Filter Menu, select Group By > Category", is_correct: false },
      { id: "c", text: "Click Group On icon, select Category", is_correct: false },
      { id: "d", text: "On Navigator Filter, type tablename.group.category and press enter", is_correct: false },
      { id: "e", text: "On the Category column title, click Context menu > Group By Category", is_correct: true }
    ]
  },
  {
    id: "p6-q136",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which module would you use to customize your instances banner image, text and colors?",
    explanation: "Basic Configuration UI16 is the standard module for primary instance branding and styling.",
    is_active: true,
    choices: [
      { id: "a", text: "System UI > UI Pages > Branding", is_correct: false },
      { id: "b", text: "Service Portal > Portals > Branding", is_correct: false },
      { id: "c", text: "System Properties > Basic Configuration UI16", is_correct: true },
      { id: "d", text: "System Properties > Branding", is_correct: false },
      { id: "e", text: "Homepage Admin > Pages > Branding", is_correct: false }
    ]
  },
  {
    id: "p6-q140",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    explanation: "Impersonation allows administrators to view the instance exactly as the user does for troubleshooting visibility.",
    is_active: true,
    choices: [
      { id: "a", text: "Look up their password, so you can login with their account", is_correct: false },
      { id: "b", text: "Initiate a Connect Chat session", is_correct: false },
      { id: "c", text: "Install the Bomgar plug-in", is_correct: false },
      { id: "d", text: "Impersonate the user", is_correct: true },
      { id: "e", text: "Launch a NowChat window", is_correct: false }
    ]
  },
  {
    id: "p6-q142",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
    explanation: "The 'Show Choices' or 'Configure Choices' option allows editing the values and labels for choice fields.",
    is_active: true,
    choices: [
      { id: "a", text: "Configure Lists", is_correct: false },
      { id: "b", text: "Show Options", is_correct: false },
      { id: "c", text: "Configure Task", is_correct: false },
      { id: "d", text: "Show Choices", is_correct: true },
      { id: "e", text: "Show Choice List", is_correct: false },
      { id: "f", text: "Configure Options", is_correct: false }
    ]
  },
  {
    id: "p6-q150",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a Form header, what is the three bar icon called?",
    explanation: "The three horizontal bars represent the Additional Actions or Context Menu for the form.",
    is_active: true,
    choices: [
      { id: "a", text: "Pancake icon", is_correct: false },
      { id: "b", text: "Additional Actions or Context Menu", is_correct: true },
      { id: "c", text: "Hamburger icon", is_correct: false },
      { id: "d", text: "Cake icon", is_correct: false }
    ]
  },
  {
    id: "p6-q181",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
    explanation: "Basic Configuration UI16 manages the banner image, tab title, base theme, font style, and header color.",
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
    id: "p6-q203",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
    explanation: "The 'Field' is the specific attribute within a table that the filter logic evaluates.",
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
    id: "p6-q214",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
    explanation: "The 'Data' or 'Properties' section (depending on UI version/context provided) defines the report name and source table.",
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
    id: "p6-q215",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the icon and color on a Favorite?",
    explanation: "In the Navigator, the Pencil icon on the Favorites tab allows editing labels, icons, and colors.",
    is_active: true,
    choices: [
      { id: "a", text: "Clock", is_correct: false },
      { id: "b", text: "Pencil", is_correct: true },
      { id: "c", text: "Triangle", is_correct: false },
      { id: "d", text: "Star", is_correct: false }
    ]
  },
  {
    id: "p6-q243",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
    explanation: "The Application Navigator is the main menu for accessing applications and modules.",
    is_active: true,
    choices: [
      { id: "a", text: "Application Navigator", is_correct: true },
      { id: "b", text: "Service Desk Homepage", is_correct: false },
      { id: "c", text: "Self Service Module", is_correct: false },
      { id: "d", text: "Favorites", is_correct: false }
    ]
  },
  {
    id: "p6-q254",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    explanation: "The Gear icon (Settings) in the banner frame allows individual users to change their preferences.",
    is_active: true,
    choices: [
      { id: "a", text: "Magnifier", is_correct: false },
      { id: "b", text: "Question mark", is_correct: false },
      { id: "c", text: "Gear", is_correct: true },
      { id: "d", text: "Chat bubbles", is_correct: false }
    ]
  },
  {
    id: "p6-q287",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    explanation: "Clicking 'Personalize List' (often via the Gear icon) opens the column slushbucket for individual users.",
    is_active: true,
    choices: [
      { id: "a", text: "Right click on any column header, Context Menu > Configure > List Layout", is_correct: false },
      { id: "b", text: "Click List Context Menu > Configure > List Layout", is_correct: false },
      { id: "c", text: "Click List Context Menu > Personalize List", is_correct: true },
      { id: "d", text: "Click Personalize List", is_correct: false }
    ]
  },

  // --- PART 7 (Questions 91 - 117 — FINAL) ---
  {
    id: "p7-q300",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What do you click when you have made modifications to your report, and you want to see the results without saving?",
    explanation: "The Preview button allows you to see the current report state without committing changes to the record.",
    is_active: true,
    choices: [
      { id: "a", text: "Preview", is_correct: true },
      { id: "b", text: "Test", is_correct: false },
      { id: "c", text: "Run", is_correct: false },
      { id: "d", text: "Try It", is_correct: false },
      { id: "e", text: "Execute", is_correct: false }
    ]
  },
  {
    id: "p7-q303",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What module do you use to access the reports that are available to you?",
    explanation: "The Reports > View / Run module is the central place to see and access all reports you have permissions for.",
    is_active: true,
    choices: [
      { id: "a", text: "Self-Service > My Reports", is_correct: false },
      { id: "b", text: "Self-Service > My Dashboards", is_correct: false },
      { id: "c", text: "Reports > View / Run", is_correct: true },
      { id: "d", text: "Reports > Homepage", is_correct: false },
      { id: "e", text: "Reports > Overview", is_correct: false }
    ]
  },
  {
    id: "p7-q306",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The customer has asked that you change the default layout of the Task list. They would like these columns, in this order: • Number • Task Type • Parent • Short Description • Assignment Group • Assignee • Updated. After navigating to the list, where would you click, to meet this requirement?",
    explanation: "To change the layout for all users, an administrator must use the 'Configure > List Layout' option from the context menu.",
    is_active: true,
    choices: [
      { id: "a", text: "Click List Context Menu > Personalize List", is_correct: false },
      { id: "b", text: "Click List Context Menu > Configure > Columns", is_correct: false },
      { id: "c", text: "Right click List Gear icon > Configure > Columns", is_correct: false },
      { id: "d", text: "Right click on any column header, Context Menu > Configure > List Layout", is_correct: true }
    ]
  },
  {
    id: "p7-q308",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The Pencil icon in the Favorites tab of the Navigator is used to edit labels, icons, and colors.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: false },
      { id: "c", text: "Triangle", is_correct: false },
      { id: "d", text: "Pencil", is_correct: true }
    ]
  },
  {
    id: "p7-q309",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When moving a homepage or dashboard between instances, what must you remember?",
    explanation: "Homepages and dashboards are not automatically captured in update sets and must be manually added.",
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
    id: "p7-q319",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a form header, what icon would you click to access Template features?",
    explanation: "The Stamp icon in the form header bar is the toggle for the Template Bar.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu", is_correct: false },
      { id: "b", text: "Paper clip", is_correct: false },
      { id: "c", text: "More options (...)", is_correct: false },
      { id: "d", text: "Stamp", is_correct: true }
    ]
  },
  {
    id: "p7-q281",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "You are editing a new incident record and would like the 'Save' button to be located on the Form header. Which action would need to be taken for that button to appear?",
    explanation: "Activating advanced UI properties allows for more header buttons, including the standard 'Save' action.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > Form Design > add the “Save” button.", is_correct: false },
      { id: "b", text: "All > System Properties > UI Properties > Turn on the “glide.ui.advanced” property.", is_correct: true },
      { id: "c", text: "All > System Properties > UI Properties > Turn on the “Save” button.", is_correct: false },
      { id: "d", text: "Context Menu > Form Layout > add the “Save” button", is_correct: false }
    ]
  },
  {
    id: "p7-q287",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    explanation: "Users personalize their own list view using 'Personalize List' from the context menu.",
    is_active: true,
    choices: [
      { id: "a", text: "Right click on any column header, Context Menu > Configure > List Layout", is_correct: false },
      { id: "b", text: "Click List Context Menu > Configure > List Layout", is_correct: false },
      { id: "c", text: "Click List Context Menu > Personalize List", is_correct: true },
      { id: "d", text: "Click Personalize List", is_correct: false }
    ]
  },
  {
    id: "p7-q225",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "From a related list, what would a user click to personalize the layout of the columns?",
    explanation: "The Gear icon in a related list header provides column personalization for that specific user.",
    is_active: true,
    choices: [
      { id: "a", text: "Gear", is_correct: true },
      { id: "b", text: "Context Menu", is_correct: false },
      { id: "c", text: "Pencil", is_correct: false },
      { id: "d", text: "Magnifier", is_correct: false }
    ]
  },
  {
    id: "p7-q203",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
    explanation: "The Field element represents the actual database column selected for filtering.",
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
    id: "p7-q214",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
    explanation: "The Properties section (often within the 'Data' phase) is where the core report attributes are defined.",
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
    id: "p7-q212",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against the data?",
    explanation: "The 'Group by' or 'Configure' tab allows you to set aggregation and grouping logic.",
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
    id: "p7-q213",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, titles and legend layout?",
    explanation: "The Style tab is dedicated to the visual presentation aspects of the report.",
    is_active: true,
    choices: [
      { id: "a", text: "Layout", is_correct: false },
      { id: "b", text: "Format", is_correct: false },
      { id: "c", text: "Configure", is_correct: false },
      { id: "d", text: "Style", is_correct: true }
    ]
  },
  {
    id: "p7-q181",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
    explanation: "This module handles Banner Image, Tab Title, Base Theme, Font Style, and Header Background.",
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
    id: "p7-q254",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    explanation: "The Gear icon in the Banner Frame opens the System Settings menu.",
    is_active: true,
    choices: [
      { id: "a", text: "Magnifier", is_correct: false },
      { id: "b", text: "Question mark", is_correct: false },
      { id: "c", text: "Gear", is_correct: true },
      { id: "d", text: "Chat bubbles", is_correct: false }
    ]
  },
  {
    id: "p7-q243",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
    explanation: "The Application Navigator is the standard way to find and open application modules.",
    is_active: true,
    choices: [
      { id: "a", text: "Application Navigator", is_correct: true },
      { id: "b", text: "Service Desk Homepage", is_correct: false },
      { id: "c", text: "Self Service Module", is_correct: false },
      { id: "d", text: "Favorites", is_correct: false }
    ]
  },
  {
    id: "p7-q98_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the icon and color on a Favorite?",
    explanation: "The Pencil icon in the favorites navigator tab allows editing these properties.",
    is_active: true,
    choices: [
      { id: "a", text: "Clock", is_correct: false },
      { id: "b", text: "Pencil", is_correct: true },
      { id: "c", text: "Triangle", is_correct: false },
      { id: "d", text: "Star", is_correct: false }
    ]
  },
  {
    id: "p7-q110_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    explanation: "Double-clicking the Clock (History) icon is a navigation toggle for application menus.",
    is_active: true,
    choices: [
      { id: "a", text: "Star", is_correct: false },
      { id: "b", text: "Clock", is_correct: true },
      { id: "c", text: "Application", is_correct: false },
      { id: "d", text: "Funnel", is_correct: false }
    ]
  },
  {
    id: "p7-q136_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which module would you use to customize your instances banner image, text and colors?",
    explanation: "Basic Configuration UI16 is used for high-level instance branding.",
    is_active: true,
    choices: [
      { id: "a", text: "System UI > UI Pages > Branding", is_correct: false },
      { id: "b", text: "Service Portal > Portals > Branding", is_correct: false },
      { id: "c", text: "System Properties > Basic Configuration UI16", is_correct: true },
      { id: "d", text: "System Properties > Branding", is_correct: false },
      { id: "e", text: "Homepage Admin > Pages > Branding", is_correct: false }
    ]
  },
  {
    id: "p7-q142_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
    explanation: "The 'Show Choices' menu option allows editing choice labels and values.",
    is_active: true,
    choices: [
      { id: "a", text: "Configure Lists", is_correct: false },
      { id: "b", text: "Show Options", is_correct: false },
      { id: "c", text: "Configure Task", is_correct: false },
      { id: "d", text: "Show Choices", is_correct: true },
      { id: "e", text: "Show Choice List", is_correct: false },
      { id: "f", text: "Configure Options", is_correct: false }
    ]
  },
  {
    id: "p7-q150_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a Form header, what is the three bar icon called?",
    explanation: "This is the Context Menu icon for record-level actions.",
    is_active: true,
    choices: [
      { id: "a", text: "Pancake icon", is_correct: false },
      { id: "b", text: "Additional Actions or Context Menu", is_correct: true },
      { id: "c", text: "Hamburger icon", is_correct: false },
      { id: "d", text: "Cake icon", is_correct: false }
    ]
  },
  {
    id: "p7-q287_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    explanation: "Users personalize their views via 'Personalize List'.",
    is_active: true,
    choices: [
      { id: "a", text: "Right click on any column header, Context Menu > Configure > List Layout", is_correct: false },
      { id: "b", text: "Click List Context Menu > Configure > List Layout", is_correct: false },
      { id: "c", text: "Click List Context Menu > Personalize List", is_correct: true },
      { id: "d", text: "Click Personalize List", is_correct: false }
    ]
  },
  {
    id: "p7-q319_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a form header, what icon would you click to access Template features?",
    explanation: "The Stamp icon toggles the template selection bar.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu", is_correct: false },
      { id: "b", text: "Paper clip", is_correct: false },
      { id: "c", text: "More options (...)", is_correct: false },
      { id: "d", text: "Stamp", is_correct: true }
    ]
  },
  {
    id: "p7-q294_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What action will allow you to personalize layouts of columns in a list?",
    explanation: "The Gear icon in the list header opens personalization options.",
    is_active: true,
    choices: [
      { id: "a", text: "Context Menu > View > Personalize", is_correct: false },
      { id: "b", text: "Click Gear Icon > Personalize window options > Select the appropriate columns", is_correct: true },
      { id: "c", text: "Select the column to be personalized and right at the header > Choose the options to personalize", is_correct: false },
      { id: "d", text: "Select the column to be personalized > Click Edit icon (Pencil) > Choose the options to personalize", is_correct: false }
    ]
  },
  {
    id: "p7-q300_v2",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What do you click when you have made modifications to your report, and you want to see the results without saving?",
    explanation: "Preview allows immediate visual feedback of report changes.",
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
