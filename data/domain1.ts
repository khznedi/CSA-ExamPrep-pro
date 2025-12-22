
import { Question, QuestionType } from '../types';

export const DOMAIN1_QUESTIONS: Question[] = [
  {
    id: "D1-008",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which term refers to application menus and modules which you may want to access quickly and often?",
    explanation: "Favorites (star icon) allow users to pin frequently used modules and records for quick access from the sidebar or banner.",
    is_active: true,
    choices: [
      { id: "A", text: "Breadcrumb", is_correct: false },
      { id: "B", text: "Favorite", is_correct: true },
      { id: "C", text: "Tag", is_correct: false },
      { id: "D", text: "Bookmark", is_correct: false }
    ]
  },
  {
    id: "D1-021",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which one of the following statements is true about Column Context Menus?",
    explanation: "Right-clicking a column header opens the Column Context Menu, which provides options like sorting, grouping, configuring the list, and exporting data.",
    is_active: true,
    choices: [
      { id: "A", text: "It displays actions such as creating quick reports, configuring the list, and exporting data", is_correct: true },
      { id: "B", text: "It displays actions related to filtering options, assigning tags, and search", is_correct: false },
      { id: "C", text: "It displays actions related to viewing and filtering the entire list", is_correct: false },
      { id: "D", text: "It displays actions such as view form, view related task, and add relationship", is_correct: false }
    ]
  },
  {
    id: "D1-025",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "In what order should filter elements be specified?",
    explanation: "ServiceNow filters follow a logical Field -> Operator -> Value sequence (e.g., [Active] [is] [true]).",
    is_active: true,
    choices: [
      { id: "A", text: "Field, Operator, then Value", is_correct: true },
      { id: "B", text: "Field, Operator, then Condition", is_correct: false },
      { id: "C", text: "Operator, Condition, then Value", is_correct: false },
      { id: "D", text: "Value, Operator, then Field", is_correct: false }
    ]
  },
  {
    id: "D1-032",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is a formatter?",
    explanation: "A formatter is a form element used to display data that is not a standard field, such as the Activity Stream, Process Flow, or CI Relations.",
    is_active: true,
    choices: [
      { id: "A", text: "A formatter allows you to configure applications on your instance", is_correct: false },
      { id: "B", text: "A formatter is a form element used to display information that is not a field in the record", is_correct: true },
      { id: "C", text: "A formatter allows you to populate fields automatically", is_correct: false },
      { id: "D", text: "A formatter is a set of conditions applied to a table to help find and work with data", is_correct: false }
    ]
  },
  {
    id: "D1-033",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "When searching using the App Navigator search field, what can be returned? (Choose four)",
    explanation: "The filter navigator searches for Application names, Module names, Favorites, and recently accessed History items.",
    is_active: true,
    choices: [
      { id: "A", text: "Names of Applications and Modules", is_correct: true },
      { id: "B", text: "Names of Modules", is_correct: true },
      { id: "C", text: "Names of Applications", is_correct: true },
      { id: "D", text: "Favorites", is_correct: true },
      { id: "E", text: "History Records", is_correct: false },
      { id: "F", text: "Titles of Dashboard Gauges", is_correct: false }
    ]
  },
  {
    id: "D1-037",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three)",
    explanation: "UI16 allows branding customization like the Banner Image, Browser Tab Title, and System Date/Time formats.",
    is_active: true,
    choices: [
      { id: "A", text: "Banner Image", is_correct: true },
      { id: "B", text: "Record Number Format", is_correct: false },
      { id: "C", text: "Browser Tab Title", is_correct: true },
      { id: "D", text: "System Date Format", is_correct: true },
      { id: "E", text: "Form Header Size", is_correct: false }
    ]
  },
  {
    id: "D1-038",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is the function of user impersonation?",
    explanation: "Impersonation allows administrators to view the instance exactly as another user does for testing and troubleshooting permissions.",
    is_active: true,
    choices: [
      { id: "A", text: "Testing and visibility", is_correct: true },
      { id: "B", text: "Activate verbose logging", is_correct: false },
      { id: "C", text: "View custom perspectives", is_correct: false },
      { id: "D", text: "Unlock Application master list", is_correct: false }
    ]
  },
  {
    id: "D1-040",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When working on a form, what is the difference between Insert and Update operations?",
    explanation: "Insert creates a new record and returns to the list/previous page, while Update saves changes to an existing record and returns.",
    is_active: true,
    choices: [
      { id: "A", text: "Insert creates a new record and Update saves changes, both remain on the form", is_correct: false },
      { id: "B", text: "Insert creates a new record and Update saves changes, both exit the form", is_correct: true },
      { id: "C", text: "Insert saves changes and exits the form, Update saves changes and remains on the form", is_correct: false },
      { id: "D", text: "Insert saves changes and remains on the form, Update saves changes and exits the form", is_correct: false }
    ]
  },
  {
    id: "D1-010",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "From the User menu, which actions can a user select? (Choose three)",
    explanation: "The user menu in the banner frame provides options to Log Out, Elevate Roles (if available), and Impersonate Users (for admins).",
    is_active: true,
    choices: [
      { id: "A", text: "Send Notifications", is_correct: false },
      { id: "B", text: "Log Out ServiceNow", is_correct: true },
      { id: "C", text: "Elevate Roles", is_correct: true },
      { id: "D", text: "Impersonate Users", is_correct: true },
      { id: "E", text: "Order from Service Catalog", is_correct: false },
      { id: "F", text: "Approve Records", is_correct: false }
    ]
  },
  {
    id: "D1-017",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which would NOT appear in the History section of the Application Navigator?",
    explanation: "History tracks forms, lists, and records. UI Pages are structural components and usually don't appear in the simple navigation history.",
    is_active: true,
    choices: [
      { id: "A", text: "Records", is_correct: false },
      { id: "B", text: "UI Pages", is_correct: true },
      { id: "C", text: "Lists", is_correct: false },
      { id: "D", text: "Forms", is_correct: false }
    ]
  },
  {
    id: "D1-049",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following allows a user to edit field values in a list without opening the form?",
    explanation: "The List Editor allows double-clicking fields directly in a list to modify data, provided permissions are met.",
    is_active: true,
    choices: [
      { id: "A", text: "Data Editor", is_correct: false },
      { id: "B", text: "Edit Menu", is_correct: false },
      { id: "C", text: "List Editor", is_correct: true },
      { id: "D", text: "Form Designer", is_correct: false }
    ]
  },
  {
    id: "D1-011",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Buttons, form links, and context menu items are all examples of what type of functionality?",
    explanation: "UI Actions are the primary way to add interactive elements like buttons and links to the user interface.",
    is_active: true,
    choices: [
      { id: "A", text: "Business Rule", is_correct: false },
      { id: "B", text: "UI Action", is_correct: true },
      { id: "C", text: "Client Script", is_correct: false },
      { id: "D", text: "UI Policy", is_correct: false }
    ]
  },
  {
    id: "D1-062",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which section of the ServiceNow UI allows you to perform a global search?",
    explanation: "The global search (magnifying glass) is located in the Banner Frame at the top of the screen.",
    is_active: true,
    choices: [
      { id: "A", text: "Application Navigator", is_correct: false },
      { id: "B", text: "Banner frame", is_correct: true },
      { id: "C", text: "List pane", is_correct: false },
      { id: "D", text: "Content frame", is_correct: false }
    ]
  },
  {
    id: "D1-063",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "How do you make a list filter available to everyone?",
    explanation: "To share a filter globally, you must name it, set visibility to 'Everyone', and save it.",
    is_active: true,
    choices: [
      { id: "A", text: "Make active, assign a name, and save", is_correct: false },
      { id: "B", text: "Assign a group, set visibility, and save", is_correct: false },
      { id: "C", text: "Assign a name, set visibility, and save", is_correct: false },
      { id: "D", text: "Make active, set visibility, and save", is_correct: true }
    ]
  },
  {
    id: "D1-064",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What would NOT appear in the Application Navigator if 'service' is typed into the filter field?",
    explanation: "The filter navigator searches for exact string matches in module and application titles. 'Incident > Assigned to me' does not contain 'service'.",
    is_active: true,
    choices: [
      { id: "A", text: "Configuration > Business Services", is_correct: false },
      { id: "B", text: "Self-Service > Knowledge", is_correct: false },
      { id: "C", text: "Service Portal > Widgets", is_correct: false },
      { id: "D", text: "Incident > Assigned to me", is_correct: true }
    ]
  },
  {
    id: "D1-065",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which of the following is used to categorize, flag, and locate records?",
    explanation: "Tags allow users to categorize records manually for easy retrieval later across different tables.",
    is_active: true,
    choices: [
      { id: "A", text: "Search", is_correct: false },
      { id: "B", text: "Favorites", is_correct: false },
      { id: "C", text: "Tags", is_correct: true },
      { id: "D", text: "Bookmarks", is_correct: false }
    ]
  },
  {
    id: "D1-066",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which tool should be used to populate commonly used fields in a form?",
    explanation: "Templates allow admins and users to pre-fill fields on a record with one click, improving speed and data consistency.",
    is_active: true,
    choices: [
      { id: "A", text: "Template", is_correct: true },
      { id: "B", text: "Reference Qualifier", is_correct: false },
      { id: "C", text: "Formatter", is_correct: false },
      { id: "D", text: "Assignment Rule", is_correct: false }
    ]
  },
  {
    id: "D1-098",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The pencil icon next to a favorite allows you to edit its name, icon, and color.",
    is_active: true,
    choices: [
      { id: "A", text: "Clock", is_correct: false },
      { id: "B", text: "Hamburger", is_correct: false },
      { id: "C", text: "Pencil", is_correct: true },
      { id: "D", text: "Three dots", is_correct: false }
    ]
  },
  {
    id: "D1-104",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
    explanation: "Users can set their own local time zone using the System Settings (gear icon) to ensure all date/time fields reflect their local reality.",
    is_active: true,
    choices: [
      { id: "A", text: "Have them clear their cache.", is_correct: false },
      { id: "B", text: "Have them use the gear icon to set the employee's time zone.", is_correct: true },
      { id: "C", text: "Recommend they use Chrome, instead of Explorer.", is_correct: false },
      { id: "D", text: "Use the system properties to correct the instance's time zone.", is_correct: false },
      { id: "E", text: "Have them correct the time zone on their computer.", is_correct: false }
    ]
  },
  {
    id: "D1-110",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    explanation: "Double-clicking the Application icon (or name) in the navigator toggles all expanded applications.",
    is_active: true,
    choices: [
      { id: "A", text: "Star", is_correct: false },
      { id: "B", text: "Clock", is_correct: false },
      { id: "C", text: "Application", is_correct: true },
      { id: "D", text: "Funnel", is_correct: false }
    ]
  },
  {
    id: "D1-113",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A user wants to create a set of filter conditions... After clicking the Funnel icon, what should the user do?",
    explanation: "To combine filters, define the first condition, click 'AND' (or 'OR') for the second, then click 'Run'.",
    is_active: true,
    choices: [
      { id: "A", text: "Define the first condition; click AND button; define second condition; click Run", is_correct: true },
      { id: "B", text: "Define the first condition; click AND button; define second condition; press enter", is_correct: false },
      { id: "C", text: "Define the first condition; click OR button; define second condition; press enter", is_correct: false },
      { id: "D", text: "Define the first condition; click > icon on breadcrumb, define second condition; click Run", is_correct: false }
    ]
  },
  {
    id: "D1-122",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two)",
    explanation: "You can group records via the Column Context Menu (right-click header) or the List Context Menu (hamburger).",
    is_active: true,
    choices: [
      { id: "A", text: "On list Context Menu, select Group By > Category", is_correct: true },
      { id: "B", text: "On the Filter Menu, select Group By > Category", is_correct: false },
      { id: "C", text: "Click Group On icon, select Category", is_correct: false },
      { id: "D", text: "On Navigator Filter, type tablename.group.category and press enter", is_correct: false },
      { id: "E", text: "On the Category column title, click Context menu > Group By Category", is_correct: true }
    ]
  },
  {
    id: "D1-136",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which module would you use to customize your instances banner image, text and colors?",
    explanation: "Basic Configuration UI16 is the standard module for global instance branding.",
    is_active: true,
    choices: [
      { id: "A", text: "System UI > UI Pages > Branding", is_correct: false },
      { id: "B", text: "Service Portal > Portals > Branding", is_correct: false },
      { id: "C", text: "System Properties > Basic Configuration UI16", is_correct: true },
      { id: "D", text: "System Properties > Branding", is_correct: false },
      { id: "E", text: "Homepage Admin > Pages > Branding", is_correct: false }
    ]
  },
  {
    id: "D1-140",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    explanation: "Impersonating the user is the most reliable way to verify their specific navigation permissions.",
    is_active: true,
    choices: [
      { id: "A", text: "Look up their password, so you can login with their account", is_correct: false },
      { id: "B", text: "Initiate a Connect Chat session", is_correct: false },
      { id: "C", text: "Install the Bomgar plug-in", is_correct: false },
      { id: "D", text: "Impersonate the user", is_correct: true },
      { id: "E", text: "Launch a NowChat window", is_correct: false }
    ]
  },
  {
    id: "D1-148",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "From a form, what would you click to add additional fields to the form? (Choose two)",
    explanation: "Admins use Form Layout (shuttling fields) or Form Design (visual drag-and-drop) to modify form fields.",
    is_active: true,
    choices: [
      { id: "A", text: "Context Menu > Form > Layout", is_correct: false },
      { id: "B", text: "Context Menu > Configure > Form Layout", is_correct: true },
      { id: "C", text: "Context Menu > Configure > Form Design", is_correct: true },
      { id: "D", text: "Right click on header > Add > Field", is_correct: false },
      { id: "E", text: "Context Menu > Form > Designer", is_correct: false }
    ]
  },
  {
    id: "D1-150",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a Form header, what is the three bar icon called?",
    explanation: "The three horizontal lines represent the Context Menu or 'Additional Actions'.",
    is_active: true,
    choices: [
      { id: "A", text: "Pancake icon", is_correct: false },
      { id: "B", text: "Additional Actions or Context Menu", is_correct: true },
      { id: "C", text: "Hamburger icon", is_correct: false },
      { id: "D", text: "Cake icon", is_correct: false }
    ]
  },
  {
    id: "D1-152",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What function do you use to add buttons, links, and context menu items on forms and lists?",
    explanation: "UI Actions are used to define interactive elements like 'Submit', 'Resolve', or links like 'Show Related Records'.",
    is_active: true,
    choices: [
      { id: "A", text: "UI Policies", is_correct: false },
      { id: "B", text: "UI Settings", is_correct: false },
      { id: "C", text: "UI Actions", is_correct: true },
      { id: "D", text: "UI Config", is_correct: false }
    ]
  },
  {
    id: "D1-156",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
    explanation: "Select 'End Impersonation' from the user menu to return to your original admin session.",
    is_active: true,
    choices: [
      { id: "A", text: "Turn your computer off and on again", is_correct: false },
      { id: "B", text: "Clear browser cache", is_correct: false },
      { id: "C", text: "End Impersonation", is_correct: true },
      { id: "D", text: "Log out and back in", is_correct: false }
    ]
  },
  {
    id: "D1-160",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a filter condition, which component is always a choice list?",
    explanation: "The Operator (e.g., 'is', 'contains', 'greater than') is always selected from a fixed list of options.",
    is_active: true,
    choices: [
      { id: "A", text: "Operator", is_correct: true },
      { id: "B", text: "Filter Criteria", is_correct: false },
      { id: "C", text: "Operation", is_correct: false },
      { id: "D", text: "Match Criteria", is_correct: false }
    ]
  },
  {
    id: "D1-162",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application... What could be the cause?",
    explanation: "A broken link in the module configuration often results in a blank page or a 404 error.",
    is_active: true,
    choices: [
      { id: "A", text: "Create New module has a broken link", is_correct: true },
      { id: "B", text: "Known intermittent issue with UI15", is_correct: false },
      { id: "C", text: "User should be using Chrome instead of Explorer", is_correct: false },
      { id: "D", text: "User has read role, but not the write role", is_correct: false }
    ]
  },
  {
    id: "D1-168",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
    explanation: "A round-trip consists of the Request sent by the browser and the Response sent back by the server.",
    is_active: true,
    choices: [
      { id: "A", text: "Request + Response", is_correct: true },
      { id: "B", text: "Save + Update", is_correct: false },
      { id: "C", text: "Write + Read", is_correct: false },
      { id: "D", text: "Submit + Query", is_correct: false }
    ]
  },
  {
    id: "D1-181",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five)",
    explanation: "Basic Configuration covers Banner Image, Header Colors, Tab Title, Base Theme, and Module text colors.",
    is_active: true,
    choices: [
      { id: "A", text: "Browser tab title", is_correct: true },
      { id: "B", text: "Module text color", is_correct: true },
      { id: "C", text: "Preferred browser", is_correct: false },
      { id: "D", text: "Base theme", is_correct: true },
      { id: "E", text: "Font style", is_correct: false },
      { id: "F", text: "Animation style", is_correct: false },
      { id: "G", text: "Header background color", is_correct: true },
      { id: "H", text: "Banner Image", is_correct: true }
    ]
  },
  {
    id: "D1-188",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What are the main components of the Form Design interface? (Choose three)",
    explanation: "Form Design consists of the Page Header, Field Navigator (left sidebar), and Form Layout (canvas).",
    is_active: true,
    choices: [
      { id: "A", text: "Field Layout", is_correct: false },
      { id: "B", text: "Page Header", is_correct: true },
      { id: "C", text: "Field Navigator", is_correct: true },
      { id: "D", text: "Field Picker", is_correct: false },
      { id: "E", text: "Form Layout", is_correct: true }
    ]
  },
  {
    id: "D1-203",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
    explanation: "The 'Field' element of a filter determines which column of the table is being evaluated.",
    is_active: true,
    choices: [
      { id: "A", text: "Label", is_correct: false },
      { id: "B", text: "Column", is_correct: false },
      { id: "C", text: "Data Element", is_correct: false },
      { id: "D", text: "Field", is_correct: true },
      { id: "E", text: "Attribute", is_correct: false }
    ]
  },
  {
    id: "D1-206",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "When managing tags, you can adjust who is able to see it. What are the visibility options? (Choose three)",
    explanation: "Tags can be restricted to 'Me' (private), specific 'Groups and Users', or 'Everyone'.",
    is_active: true,
    choices: [
      { id: "A", text: "Groups and Users", is_correct: true },
      { id: "B", text: "Me", is_correct: true },
      { id: "C", text: "Roles and Permissions", is_correct: false },
      { id: "D", text: "Everyone", is_correct: true },
      { id: "E", text: "Admins", is_correct: false }
    ]
  },
  {
    id: "D1-208",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On the Form header, which icon do you use to access form templates?",
    explanation: "Templates are accessed via the 'More Options' (three dots) menu in the form header.",
    is_active: true,
    choices: [
      { id: "A", text: "Stamp", is_correct: false },
      { id: "B", text: "Pages", is_correct: false },
      { id: "C", text: "More Options (...)", is_correct: true },
      { id: "D", text: "Paperclip", is_correct: false }
    ]
  },
  {
    id: "D1-215",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the icon and color on a Favorite?",
    explanation: "The pencil icon on the favorites tab allows customizing the visual representation of a favorite.",
    is_active: true,
    choices: [
      { id: "A", text: "Clock", is_correct: false },
      { id: "B", text: "Pencil", is_correct: true },
      { id: "C", text: "Triangle", is_correct: false },
      { id: "D", text: "Star", is_correct: false }
    ]
  },
  {
    id: "D1-217",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When looking at a long list, you want to quickly filter to show only those which have Category of Hardware. How might you do that?",
    explanation: "Right-clicking a value in a list and selecting 'Show Matching' is the fastest way to filter.",
    is_active: true,
    choices: [
      { id: "A", text: "On the Category column header, right click and select Show > Hardware", is_correct: false },
      { id: "B", text: "Right click on magnifier, type Hardware", is_correct: false },
      { id: "C", text: "On the list, locate and right click on the value Hardware, select Show Matching", is_correct: true },
      { id: "D", text: "On Breadcrumb, click > icon, type Hardware", is_correct: false }
    ]
  },
  {
    id: "D1-218",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "When looking at a long list, you want to quickly filter to show only those which have Short Description containing email. How might you do that?",
    explanation: "Using the asterisk (*) as a wildcard in column search (e.g., *email) performs a 'contains' search.",
    is_active: true,
    choices: [
      { id: "A", text: "On Short Description, type email", is_correct: false },
      { id: "B", text: "On Search box, select text, type email", is_correct: false },
      { id: "C", text: "On Short Description, type *email", is_correct: true },
      { id: "D", text: "On Short Description, type %email", is_correct: false }
    ]
  },
  {
    id: "D1-225",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "From a related list, what would a user click to personalize the layout of the columns?",
    explanation: "The Gear icon on a related list allows individual users to choose which columns are visible.",
    is_active: true,
    choices: [
      { id: "A", text: "Gear", is_correct: true },
      { id: "B", text: "Context Menu", is_correct: false },
      { id: "C", text: "Pencil", is_correct: false },
      { id: "D", text: "Magnifier", is_correct: false }
    ]
  },
  {
    id: "D1-227",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What are examples of UI Actions, relating to Lists? (Choose four)",
    explanation: "UI Actions for lists include List Buttons, List Links, List Choices (bottom dropdown), and List Context Menu items.",
    is_active: true,
    choices: [
      { id: "A", text: "List Links", is_correct: true },
      { id: "B", text: "List Choices", is_correct: true },
      { id: "C", text: "List Buttons", is_correct: true },
      { id: "D", text: "List Override", is_correct: false },
      { id: "E", text: "List Context Menu", is_correct: true },
      { id: "F", text: "List Control", is_correct: false }
    ]
  },
  {
    id: "D1-241",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "On a related list, which buttons are commonly used for managing the records on the list? (Choose three)",
    explanation: "Common related list UI buttons are New (create), Edit (relate existing), and Add.",
    is_active: true,
    choices: [
      { id: "A", text: "Add", is_correct: true },
      { id: "B", text: "Edit", is_correct: true },
      { id: "C", text: "Publish", is_correct: false },
      { id: "D", text: "Manage", is_correct: false },
      { id: "E", text: "New", is_correct: true }
    ]
  },
  {
    id: "D1-243",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
    explanation: "The Application Navigator (left side) is the primary gateway to all modules and applications.",
    is_active: true,
    choices: [
      { id: "A", text: "Application Navigator", is_correct: true },
      { id: "B", text: "Service Desk Homepage", is_correct: false },
      { id: "C", text: "Self Service Module", is_correct: false },
      { id: "D", text: "Favorites", is_correct: false }
    ]
  },
  {
    id: "D1-245",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a form, which type of field has this icon which can be clicked, to see a preview of the associated record?",
    explanation: "Reference fields link to other tables and include a 'preview' icon to see details without leaving the page.",
    is_active: true,
    choices: [
      { id: "A", text: "Lookup", is_correct: false },
      { id: "B", text: "Preview", is_correct: false },
      { id: "C", text: "Reference", is_correct: true },
      { id: "D", text: "Snapshot", is_correct: false }
    ]
  },
  {
    id: "D1-246",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "While on an Incident record, how would you add a Tag for 'Special Handling' to the record?",
    explanation: "Tags can be added via the 'More Options' (...) menu in the banner or by typing in the tag field if visible.",
    is_active: true,
    choices: [
      { id: "A", text: "Click on the Context menu, select Add Tag", is_correct: false },
      { id: "B", text: "Click on the More options (...) icon, click Add Tag, type Special Handling", is_correct: true },
      { id: "C", text: "On the Tag field, select from choice list", is_correct: false },
      { id: "D", text: "Check the Special Handling box", is_correct: false }
    ]
  },
  {
    id: "D1-254",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    explanation: "The Gear icon in the banner frame provides access to individual user preferences and settings.",
    is_active: true,
    choices: [
      { id: "A", text: "Magnifier", is_correct: false },
      { id: "B", text: "Question mark", is_correct: false },
      { id: "C", text: "Gear", is_correct: true },
      { id: "D", text: "Chat bubbles", is_correct: false }
    ]
  },
  {
    id: "D1-258",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What section on the notes tab, shows the history of the work documented on the record?",
    explanation: "The Activity Stream (or Activity) displays a chronological log of all field changes and comments.",
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
    id: "D1-262",
    domain_id: 1,
    type: QuestionType.MULTI_SELECT,
    text: "What are examples of UI Actions relating to forms? (Choose three)",
    explanation: "Form-based UI Actions include Form Buttons (e.g. Save, Submit), Form Context Menu items, and Form Links.",
    is_active: true,
    choices: [
      { id: "A", text: "Form Columns", is_correct: false },
      { id: "B", text: "Form View", is_correct: false },
      { id: "C", text: "Form Buttons", is_correct: true },
      { id: "D", text: "Form Context Menu", is_correct: true },
      { id: "E", text: "Form Links", is_correct: true }
    ]
  },
  {
    id: "D1-277",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    explanation: "Impersonation is found within the User Menu (clicking your name/avatar in the banner frame).",
    is_active: true,
    choices: [
      { id: "A", text: "User Menu", is_correct: true },
      { id: "B", text: "Content Fame or Banner", is_correct: false },
      { id: "C", text: "Application Navigator", is_correct: false },
      { id: "D", text: "Module", is_correct: false }
    ]
  },
  {
    id: "D1-281",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "You are editing a new incident record and would like the 'Save' button to be located on the Form header. Which action would need to be taken?",
    explanation: "While UI Actions control the button itself, the standard admin path to modify form elements is often via Configure > Form Layout.",
    is_active: true,
    choices: [
      { id: "A", text: "Context Menu > Form Design > add button", is_correct: false },
      { id: "B", text: "Turn on glide.ui.advanced property", is_correct: false },
      { id: "C", text: "Turn on the 'Save' button in UI Properties", is_correct: false },
      { id: "D", text: "Context Menu > Form Layout > add the 'Save' button", is_correct: true }
    ]
  },
  {
    id: "D1-284",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What is the name of the string that displays filter criteria?",
    explanation: "The breadcrumb displays the active filter conditions at the top of a list (e.g., All > Active = true).",
    is_active: true,
    choices: [
      { id: "A", text: "Breadcrumb", is_correct: true },
      { id: "B", text: "Choice", is_correct: false },
      { id: "C", text: "Menu", is_correct: false },
      { id: "D", text: "Topic", is_correct: false }
    ]
  },
  {
    id: "D1-287",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "A colleague wants to rearrange the columns on their My Work List. Where should they navigate to arrange the columns?",
    explanation: "The 'Personalize List' (gear icon) is for individual user layout. 'Configure List Layout' is for global admin changes.",
    is_active: true,
    choices: [
      { id: "A", text: "Configure > List Layout", is_correct: false },
      { id: "B", text: "Click List Context Menu > Configure > List Layout", is_correct: false },
      { id: "C", text: "Click List Context Menu > Personalize List", is_correct: false },
      { id: "D", text: "Click Personalize List (Gear Icon)", is_correct: true }
    ]
  },
  {
    id: "D1-288",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "You are looking at a list of Active Incidents. You want to exclude Incidents with the state of Resolved. How might you do that?",
    explanation: "Right-clicking a cell value and selecting 'Filter Out' removes records with that specific value from the current view.",
    is_active: true,
    choices: [
      { id: "A", text: "On Search, select State, type not Resolved", is_correct: false },
      { id: "B", text: "On State column title, select Filter Out", is_correct: false },
      { id: "C", text: "On the record, locate and right-click on Resolved, select Filter Out", is_correct: true },
      { id: "D", text: "Locate and right-click Resolved, select Exclude", is_correct: false }
    ]
  },
  {
    id: "D1-294",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What action will allow you to personalize layouts of columns in a list?",
    explanation: "Individual users use the Gear Icon (Personalize List) to select and reorder columns for their own view.",
    is_active: true,
    choices: [
      { id: "A", text: "Context Menu > View > Personalize", is_correct: false },
      { id: "B", text: "Click Gear Icon > Select columns", is_correct: true },
      { id: "C", text: "Right click header > Choose options", is_correct: false },
      { id: "D", text: "Select column > Click Edit icon", is_correct: false }
    ]
  },
  {
    id: "D1-296",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "Which path would you take to access the table configuration page from a form?",
    explanation: "The 'Configure > Table' option in the form context menu takes you directly to the dictionary definition of the table.",
    is_active: true,
    choices: [
      { id: "A", text: "Form Context menu > View > Show Table", is_correct: false },
      { id: "B", text: "Form Context menu > View > Table", is_correct: false },
      { id: "C", text: "Form Context menu > Configure > Dictionary", is_correct: false },
      { id: "D", text: "Form Context menu > Configure > Table", is_correct: true }
    ]
  },
  {
    id: "D1-306",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "The customer has asked that you change the default layout of the Task list for everyone. Where would you click?",
    explanation: "Admins use Configure > List Layout to set the default system-wide column view.",
    is_active: true,
    choices: [
      { id: "A", text: "Click List Context Menu > Personalize List", is_correct: false },
      { id: "B", text: "Click List Context Menu > Configure > Columns", is_correct: false },
      { id: "C", text: "Right click List Gear icon", is_correct: false },
      { id: "D", text: "Right click header, Context Menu > Configure > List Layout", is_correct: true }
    ]
  },
  {
    id: "D1-308",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What icon do you use to change the label on a Favorite?",
    explanation: "The Pencil icon is the universal edit button for favorites in the sidebar.",
    is_active: true,
    choices: [
      { id: "A", text: "Star", is_correct: false },
      { id: "B", text: "Clock", is_correct: false },
      { id: "C", text: "Triangle", is_correct: false },
      { id: "D", text: "Pencil", is_correct: true }
    ]
  },
  {
    id: "D1-313",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "What section on a task record is used to see the most recent updates made to a record?",
    explanation: "The Activity Stream (Activity) allows users to quickly see work notes, comments, and field changes.",
    is_active: true,
    choices: [
      { id: "A", text: "Timeline", is_correct: false },
      { id: "B", text: "Related List", is_correct: false },
      { id: "C", text: "Activity Stream", is_correct: true },
      { id: "D", text: "Audit Log", is_correct: false }
    ]
  },
  {
    id: "D1-316",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "In addition to the admin role, which role allows a user to add or remove fields from a list?",
    explanation: "The 'personal_list' role allows non-admins to use the gear icon to customize their own list views.",
    is_active: true,
    choices: [
      { id: "A", text: "personalize.control", is_correct: false },
      { id: "B", text: "personal_list", is_correct: true },
      { id: "C", text: "ui_page_admin", is_correct: false },
      { id: "D", text: "ui_action_admin", is_correct: false }
    ]
  },
  {
    id: "D1-319",
    domain_id: 1,
    type: QuestionType.MCQ,
    text: "On a form header, what icon would you click to access Template features?",
    explanation: "The Template bar is toggled via the 'More Options' (three dots) menu in the banner.",
    is_active: true,
    choices: [
      { id: "A", text: "Context Menu", is_correct: false },
      { id: "B", text: "Paper clip", is_correct: false },
      { id: "C", text: "More options (...)", is_correct: true },
      { id: "D", text: "Stamp", is_correct: false }
    ]
  }
];
