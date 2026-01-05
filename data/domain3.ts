import { Question, QuestionType } from '../types';

export const DOMAIN3_QUESTIONS: Question[] = [
  // --- BATCH 1 (1-28) ---
  {
    id: "d3-q2",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    explanation: "Coalescing on a field means checking for an existing record with a matching value. If found, the record is updated; if not, a new record is created.",
    is_active: true,
    choices: [
      { id: "a", text: "If a match is found using the coalesce fields, the existing record is updated with the information being imported", is_correct: true },
      { id: "b", text: "If a match is not found using the coalesce fields, the system does not create a Transform Map", is_correct: false },
      { id: "c", text: "If a match is found using the coalesce fields, the system creates a new record", is_correct: false },
      { id: "d", text: "If a match is not found using the coalesce fields, the existing record is updated with the information being imported", is_correct: false }
    ]
  },
  {
    id: "d3-q14",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Table Access Control rules are processed in the following order:",
    explanation: "Access Control evaluation starts from the most general (wildcard *) to parent tables, then to the specific table name.",
    is_active: true,
    choices: [
      { id: "a", text: "any table name (wildcard), parent table name, table name", is_correct: true },
      { id: "b", text: "table name, parent table name, any table name (wildcard)", is_correct: false },
      { id: "c", text: "parent table name, table name, any table name (wildcard)", is_correct: false },
      { id: "d", text: "any table name (wildcard), table name, parent table name", is_correct: false }
    ]
  },
  {
    id: "d3-q15",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the platform name for the User table?",
    explanation: "The database name for the user table in ServiceNow is sys_user.",
    is_active: true,
    choices: [
      { id: "a", text: "u_users", is_correct: false },
      { id: "b", text: "sys_users", is_correct: false },
      { id: "c", text: "x_users", is_correct: false },
      { id: "d", text: "sys_user", is_correct: true }
    ]
  },
  {
    id: "d3-q22",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
    explanation: "Discovery and IntegrationHub ETL are primary tools for populating the Configuration Management Database.",
    is_active: true,
    choices: [
      { id: "a", text: "Discovery", is_correct: true },
      { id: "b", text: "IntegrationHub ETL", is_correct: true },
      { id: "c", text: "Finder", is_correct: false },
      { id: "d", text: "CMDB Plug-in", is_correct: false },
      { id: "e", text: "CMDB Integration Dashboard", is_correct: false }
    ]
  },
  {
    id: "d3-q23",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    explanation: "Mapping Assist provides a visually intuitive way to map source fields from an import set to target fields in a destination table.",
    is_active: true,
    choices: [
      { id: "a", text: "Mapping fields using the Import Log", is_correct: false },
      { id: "b", text: "Mapping fields using Transform History", is_correct: false },
      { id: "c", text: "Mapping fields using an SLA", is_correct: false },
      { id: "d", text: "Mapping fields using a Field Map", is_correct: true }
    ]
  },
  {
    id: "d3-q24",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    explanation: "The CMDB stores information about all the components (Configuration Items) in an IT infrastructure, including both tangible (hardware) and intangible (software/services) assets.",
    is_active: true,
    choices: [
      { id: "a", text: "The CMDB contains data about tangible and intangible business assets", is_correct: true },
      { id: "b", text: "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company", is_correct: false },
      { id: "c", text: "The CMDB archives all Service Management PaaS equipment metadata and usage statistics", is_correct: false },
      { id: "d", text: "The CMDB contains ITIL process data pertaining to configuration items", is_correct: false }
    ]
  },
  {
    id: "d3-q26",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which statement is true about business rules?",
    explanation: "A Business Rule is a server-side script that executes when a record is displayed, inserted, updated, or deleted, or when a table is queried.",
    is_active: true,
    choices: [
      { id: "a", text: "A business rule must run before a database action occurs", is_correct: false },
      { id: "b", text: "A business rule can be a piece of Javascript", is_correct: true },
      { id: "c", text: "A business rule must not run before a database action occurs", is_correct: false },
      { id: "d", text: "A business rule monitors fields on a form", is_correct: false }
    ]
  },
  {
    id: "d3-q28",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which type of tables may be extended by other tables, but do not extend another table?",
    explanation: "A Base Table is a table that is at the core of an inheritance hierarchy. It can be extended, but does not extend any other table (e.g., Task).",
    is_active: true,
    choices: [
      { id: "a", text: "Base Tables", is_correct: true },
      { id: "b", text: "Core Tables", is_correct: false },
      { id: "c", text: "Extended Tables", is_correct: false },
      { id: "d", text: "Custom Tables", is_correct: false }
    ]
  },
  {
    id: "d3-q31",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    explanation: "The CMDB involves Service Processes, Tables and Fields, the database itself, and Dependency Views.",
    is_active: true,
    choices: [
      { id: "a", text: "Service Processes", is_correct: true },
      { id: "b", text: "User Permissions", is_correct: false },
      { id: "c", text: "Tables and Fields", is_correct: true },
      { id: "d", text: "A Database", is_correct: true },
      { id: "e", text: "The Dependency View", is_correct: true }
    ]
  },
  {
    id: "d3-q34",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which technique is used to get information from a series of referenced fields from different tables?",
    explanation: "Dot-walking allows you to navigate through relationships to access fields on related tables.",
    is_active: true,
    choices: [
      { id: "a", text: "Table-Walking", is_correct: false },
      { id: "b", text: "Sys_ID Pulling", is_correct: false },
      { id: "c", text: "Dot-Walking", is_correct: true },
      { id: "d", text: "Record-Hopping", is_correct: false }
    ]
  },
  {
    id: "d3-q35",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a schema map?",
    explanation: "A schema map is a graphical tool that displays the details of tables and their relationships within the database.",
    is_active: true,
    choices: [
      { id: "a", text: "A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items", is_correct: false },
      { id: "b", text: "A schema map graphically organizes the visual task boards for the CMDB", is_correct: false },
      { id: "c", text: "A schema map graphically displays the Configuration Items that support a business service", is_correct: false },
      { id: "d", text: "A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema.", is_correct: true }
    ]
  },
  {
    id: "d3-q39",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What information does the System Dictionary contain?",
    explanation: "The System Dictionary (sys_dictionary) contains the definition for every table and column in the instance.",
    is_active: true,
    choices: [
      { id: "a", text: "The human-readable labels and language settings", is_correct: false },
      { id: "b", text: "The definition for each table and column", is_correct: true },
      { id: "c", text: "The information on how tables relate to each other", is_correct: false },
      { id: "d", text: "The language dictionary used for spell checking", is_correct: false }
    ]
  },
  {
    id: "d3-q42",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a Dictionary Override?",
    explanation: "Dictionary Overrides allow administrators to change properties of a field for a specific child table without affecting the parent table.",
    is_active: true,
    choices: [
      { id: "a", text: "A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update", is_correct: false },
      { id: "b", text: "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services", is_correct: false },
      { id: "c", text: "A Dictionary Override is a task within a flow that requests an action before the flow can continue", is_correct: false },
      { id: "d", text: "A Dictionary Override sets field properties in extended tables", is_correct: true }
    ]
  },
  {
    id: "d3-q46",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the Import Set Table?",
    explanation: "The Import Set Table is a temporary staging table where data is stored after being loaded from a source, before being transformed into the target table.",
    is_active: true,
    choices: [
      { id: "a", text: "A table where data will be placed, post-transformation", is_correct: false },
      { id: "b", text: "A table that determines relationships", is_correct: false },
      { id: "c", text: "A staging area for imported records", is_correct: true },
      { id: "d", text: "A repository for Update Set information", is_correct: false }
    ]
  },
  {
    id: "d3-q47",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a characteristic of importing data into ServiceNow?",
    explanation: "A Transform Map defines how data from the staging table maps to the target table and can be re-used multiple times.",
    is_active: true,
    choices: [
      { id: "a", text: "An existing Transform Map can be used one time on the same import set", is_correct: false },
      { id: "b", text: "Coalesce fields are used only after running Transform", is_correct: false },
      { id: "c", text: "Any user can manage and set up import sets", is_correct: false },
      { id: "d", text: "An existing Transform Map can be used multiple times on the same import set", is_correct: true }
    ]
  },
  {
    id: "d3-q53",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following statements is true when a new table is created by extending another table?",
    explanation: "Extended tables inherit all fields from the parent table and can also include unique fields of their own.",
    is_active: true,
    choices: [
      { id: "a", text: "The new table archives the parent table and assumed its roles in the database", is_correct: false },
      { id: "b", text: "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields", is_correct: false },
      { id: "c", text: "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself", is_correct: true },
      { id: "d", text: "The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table", is_correct: false }
    ]
  },
  {
    id: "d3-q57",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the purpose of a Related List?",
    explanation: "Related Lists appear at the bottom of forms and display records from other tables that have a relationship to the current record.",
    is_active: true,
    choices: [
      { id: "a", text: "To create a one-to-many relationship", is_correct: false },
      { id: "b", text: "To dot-walk to a core table", is_correct: false },
      { id: "c", text: "To present related fields", is_correct: false },
      { id: "d", text: "To present related records", is_correct: true }
    ]
  },
  {
    id: "d3-q60",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which are valid Service Now User Authentication Methods? (Choose three.)",
    explanation: "ServiceNow supports various authentication methods including Local DB, LDAP (Active Directory), and SSO.",
    is_active: true,
    choices: [
      { id: "a", text: "XML feed", is_correct: false },
      { id: "b", text: "Local database", is_correct: true },
      { id: "c", text: "LDAP", is_correct: true },
      { id: "d", text: "SSO", is_correct: true },
      { id: "e", text: "FTP authentication", is_correct: false }
    ]
  },
  {
    id: "d3-q61",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
    explanation: "An ACL can check for specific Roles, evaluate Conditional Expressions, or run a Script.",
    is_active: true,
    choices: [
      { id: "a", text: "Roles", is_correct: true },
      { id: "b", text: "Conditional Expressions", is_correct: true },
      { id: "c", text: "Assignment Rules", is_correct: false },
      { id: "d", text: "Scripts", is_correct: true },
      { id: "e", text: "User Criteria", is_correct: false },
      { id: "f", text: "Groups", is_correct: false }
    ]
  },
  {
    id: "d3-q68",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a role in ServiceNow?",
    explanation: "A role is a record in the sys_user_role table that represents a set of permissions given to groups or users.",
    is_active: true,
    choices: [
      { id: "a", text: "A role is one record in the Role [user_sys_role] table", is_correct: false },
      { id: "b", text: "A role is a set of modules for a particular application", is_correct: false },
      { id: "c", text: "A role is one record in the Role [sys_user_role] table", is_correct: true },
      { id: "d", text: "A role is a persona used in Live Feed Chat", is_correct: false }
    ]
  },
  {
    id: "d3-q73",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it?",
    explanation: "The Task [task] table is a base table for most ticketing processes, providing common fields.",
    is_active: true,
    choices: [
      { id: "a", text: "Task [task]", is_correct: true },
      { id: "b", text: "Assignment [assignment]", is_correct: false },
      { id: "c", text: "Service [service]", is_correct: false },
      { id: "d", text: "Workflow [workflow]", is_correct: false }
    ]
  },
  {
    id: "d3-q74",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following statements describes how data is organized in a table?",
    explanation: "In database terminology, a column represents a field, and a row represents a single record.",
    is_active: true,
    choices: [
      { id: "a", text: "A column is a field in the database and a record is one user", is_correct: false },
      { id: "b", text: "A column is one field and a record is one row", is_correct: true },
      { id: "c", text: "A column is one field and a record is one column", is_correct: false },
      { id: "d", text: "A column contains data from one user and a record is one set of fields", is_correct: false }
    ]
  },
  {
    id: "d3-q75",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a sys_id?",
    explanation: "The sys_id is a 32-character, globally unique identifier (GUID) used to uniquely identify every record in the platform.",
    is_active: true,
    choices: [
      { id: "a", text: "Unique 32-character identifier that is assigned to every record", is_correct: true },
      { id: "b", text: "A client-side Business Rule", is_correct: false },
      { id: "c", text: "A server-side Business Rule", is_correct: false },
      { id: "d", text: "Unique 64-character identifier that is assigned to every record", is_correct: false }
    ]
  },
  {
    id: "d3-q77",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Access Control rules may provide access security for which of the following database objects?",
    explanation: "ACLs can secure access at the Table level (entire table), Row level (individual record), or Column level (individual field).",
    is_active: true,
    choices: [
      { id: "a", text: "For a specific role, group, or user", is_correct: false },
      { id: "b", text: "For a specific row, column, or table", is_correct: true },
      { id: "c", text: "For specific groups", is_correct: false },
      { id: "d", text: "For a specific CMDB Configuration item", is_correct: false }
    ]
  },
  {
    id: "d3-q80",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which tool is used for creating dependencies between configuration items in the CMDB?",
    explanation: "The CI Relationship Editor is used to manually create and manage relationships between Configuration Items.",
    is_active: true,
    choices: [
      { id: "a", text: "CI Relationship Editor", is_correct: true },
      { id: "b", text: "CMDB Builder", is_correct: false },
      { id: "c", text: "CI Service Manager", is_correct: false },
      { id: "d", text: "CI Class Manager", is_correct: false }
    ]
  },
  {
    id: "d3-q82",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following is an accurate list of changes that are captured in an Update Set?",
    explanation: "Update sets capture configuration changes like tables, forms, and scripts, but not data records or schedules by default.",
    is_active: true,
    choices: [
      { id: "a", text: "Changes made to: tables, forms, schedules, and client scripts", is_correct: true },
      { id: "b", text: "Changes made to: tables, forms, Business Rules, and data records", is_correct: false },
      { id: "c", text: "Changes made to: tables, forms, groups, and configuration items (CIs)", is_correct: false },
      { id: "d", text: "Changes made to: table, forms, views, and fields", is_correct: false }
    ]
  },
  {
    id: "d3-q85",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following protects applications by identifying and restricting access to available files and data?",
    explanation: "Access Control Rules (ACLs) are the primary security layer for restricting data access.",
    is_active: true,
    choices: [
      { id: "a", text: "Application Configuration", is_correct: false },
      { id: "b", text: "Verbose Log", is_correct: false },
      { id: "c", text: "Access Control Rules", is_correct: true },
      { id: "d", text: "Application Scope", is_correct: false }
    ]
  },
  {
    id: "d3-q86",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one statement correctly describes Access Control rule evaluation?",
    explanation: "A user must pass both the table-level requirement and the field-level requirement for an operation to be permitted.",
    is_active: true,
    choices: [
      { id: "a", text: "Table access rules are evaluated from the general to the specific", is_correct: false },
      { id: "b", text: "If more than one rule applies to a record, the older rule is evaluated first", is_correct: false },
      { id: "c", text: "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed", is_correct: true },
      { id: "d", text: "The role with the most permissions evaluates the rules first", is_correct: false }
    ]
  },

  // --- BATCH 2 (29-58) ---
  {
    id: "d3-q90",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "The ServiceNow platform includes which types of interfaces? (Choose three.)",
    explanation: "ServiceNow interfaces include Now Mobile Apps, Service Portals, and the core Now Platform User Interface.",
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
    id: "d3-q91",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following are not included in an Update Set, by default? (Choose four.)",
    explanation: "Update Sets do not capture Data (records), Published Workflows, Schedules, or Scheduled Jobs by default.",
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
    id: "d3-q93",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
    explanation: "The Common Service Data Model (CSDM) is a framework for CMDB data modeling and reporting.",
    is_active: true,
    choices: [
      { id: "a", text: "Common Service Data Model (CSDM)", is_correct: true },
      { id: "b", text: "Service Mapping Utility (SMU)", is_correct: false },
      { id: "c", text: "Service Schema Map (SSM)", is_correct: false },
      { id: "d", text: "CMDB Class Manager (CMDBCM)", is_correct: false },
      { id: "e", text: "CI Class Manager (CICM)", is_correct: false }
    ]
  },
  {
    id: "d3-q95",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What field contains a record's 32-character, unique identifier?",
    explanation: "The sys_id is the primary key and unique identifier for every record.",
    is_active: true,
    choices: [
      { id: "a", text: "sn_rec_id", is_correct: false },
      { id: "b", text: "rec_id", is_correct: false },
      { id: "c", text: "u_id", is_correct: false },
      { id: "d", text: "sys_id", is_correct: true },
      { id: "e", text: "sn_gu_id", is_correct: false },
      { id: "f", text: "sn_sys_id", is_correct: false },
      { id: "g", text: "id", is_correct: false }
    ]
  },
  {
    id: "d3-q96",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Management wants a way for employees to order a recognize T-shirt. How would you ensure that only first line workers can submit the order?",
    explanation: "User Criteria can be applied to Order Guides or Items to control visibility and accessibility.",
    is_active: true,
    choices: [
      { id: "a", text: "Create Record Producer and use the Available For list to specify First Line role", is_correct: false },
      { id: "b", text: "Create Catalog Item and use the Not Available list to specify the Manager Group", is_correct: false },
      { id: "c", text: "Create Catalog Item and use the Available For list to specify ITIL role", is_correct: false },
      { id: "d", text: "Create Order Guide and use the User Criteria list to specify First Line role", is_correct: true }
    ]
  },
  {
    id: "d3-q102",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What import utility do you use when field names match on the import set and Target table?",
    explanation: "Automatic Mapping allows matching source and target fields based on name similarity.",
    is_active: true,
    choices: [
      { id: "a", text: "Schema Mapping", is_correct: false },
      { id: "b", text: "Automatic Mapping", is_correct: true },
      { id: "c", text: "Mapping Assist", is_correct: false },
      { id: "d", text: "Mapping Dashboard", is_correct: false }
    ]
  },
  {
    id: "d3-q114",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the object name for an ACL specific to the Incident table and Major Incident field?",
    explanation: "The syntax for a field-level ACL is [table_name].[field_name].",
    is_active: true,
    choices: [
      { id: "a", text: "Incident.Major_Incident", is_correct: false },
      { id: "b", text: "incident=>major_incident", is_correct: false },
      { id: "c", text: "incident<=>major_incident", is_correct: false },
      { id: "d", text: "incident||major_incident", is_correct: false },
      { id: "e", text: "incident.major_incident", is_correct: true }
    ]
  },
  {
    id: "d3-q120",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What are the steps for applying an update set to an instance?",
    explanation: "The workflow is: Retrieve from source, Preview for conflicts, then Commit.",
    is_active: true,
    choices: [
      { id: "a", text: "Retrieve, Preview, Commit", is_correct: true },
      { id: "b", text: "Specify, Transform, Apply", is_correct: false },
      { id: "c", text: "Retrieve, Assess, Apply", is_correct: false },
      { id: "d", text: "Get, Test, Push", is_correct: false },
      { id: "e", text: "Pull, Review, Push", is_correct: false }
    ]
  },
  {
    id: "d3-q121",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When importing spreadsheet data, in which step does the data get written to the receiving table?",
    explanation: "Data is moved to the target table during the Transform phase.",
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
    id: "d3-q130",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What modules would you use to view a list of all fields on the Incident table? (Choose two.)",
    explanation: "Tables & Columns and the Dictionary module provide metadata about table fields.",
    is_active: true,
    choices: [
      { id: "a", text: "Tables & Columns", is_correct: true },
      { id: "b", text: "Dictionary", is_correct: true },
      { id: "c", text: "Data Class Manager", is_correct: false },
      { id: "d", text: "Dictionary Dashboard", is_correct: false },
      { id: "e", text: "Database View", is_correct: false },
      { id: "f", text: "Schema", is_correct: false }
    ]
  },
  {
    id: "d3-q134",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which type of policy forces Incident numbers to be read-only across all applications?",
    explanation: "Data Policies enforce requirements at the server level consistently.",
    is_active: true,
    choices: [
      { id: "a", text: "Data Quality Policy", is_correct: false },
      { id: "b", text: "Dictionary Design Policy", is_correct: false },
      { id: "c", text: "UI Data Policy", is_correct: false },
      { id: "d", text: "UI Policy", is_correct: false },
      { id: "e", text: "Field Criteria Policy", is_correct: false },
      { id: "f", text: "Data Policy", is_correct: true }
    ]
  },
  {
    id: "d3-q137",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which database provides a logical model of company infrastructure by identifying CIs?",
    explanation: "The CMDB is the central repository for infrastructure components.",
    is_active: true,
    choices: [
      { id: "a", text: "IMDB", is_correct: false },
      { id: "b", text: "ITSM", is_correct: false },
      { id: "c", text: "CSDM", is_correct: false },
      { id: "d", text: "CMDB", is_correct: true },
      { id: "e", text: "LDAP", is_correct: false }
    ]
  },
  {
    id: "d3-q138",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which module is used as the first step for importing data?",
    explanation: "The initial step is to 'Load Data' into a staging table.",
    is_active: true,
    choices: [
      { id: "a", text: "Coalesce Data", is_correct: false },
      { id: "b", text: "Transform Data", is_correct: false },
      { id: "c", text: "Import Data", is_correct: false },
      { id: "d", text: "Load Data", is_correct: true }
    ]
  },
  {
    id: "d3-q145",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which tool defines relationships between fields in an import set and a target table?",
    explanation: "A Transform Map defines mapping logic.",
    is_active: true,
    choices: [
      { id: "a", text: "Transform Schema", is_correct: false },
      { id: "b", text: "Schema Map", is_correct: false },
      { id: "c", text: "Dictionary Map", is_correct: false },
      { id: "d", text: "Transform Map", is_correct: true },
      { id: "e", text: "Field Transformer", is_correct: false },
      { id: "f", text: "Import Designer", is_correct: false }
    ]
  },
  {
    id: "d3-q149",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What relationship allows related records to be visible from both tables in a related list?",
    explanation: "Many-to-Many relationships allow bi-directional visibility.",
    is_active: true,
    choices: [
      { id: "a", text: "Database View", is_correct: false },
      { id: "b", text: "Many to Many", is_correct: true },
      { id: "c", text: "One to Many", is_correct: false },
      { id: "d", text: "Extended", is_correct: false }
    ]
  },
  {
    id: "d3-q151",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Group records are stored in which table?",
    explanation: "The Group table's technical name is sys_user_group.",
    is_active: true,
    choices: [
      { id: "a", text: "Group [sn_user_group]", is_correct: false },
      { id: "b", text: "Group [sys_user_group]", is_correct: true },
      { id: "c", text: "Group [s_sys_group]", is_correct: false },
      { id: "d", text: "Group [u_sys_group]", is_correct: false }
    ]
  },
  {
    id: "d3-q154",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What are different types of Data Sources imported into ServiceNow? (Choose four.)",
    explanation: "Common sources include files (XML/CSV), JDBC, LDAP, and DataHub.",
    is_active: true,
    choices: [
      { id: "a", text: "Local Sources (XML, CSV, Excel)", is_correct: true },
      { id: "b", text: "Implementation Spoke", is_correct: false },
      { id: "c", text: "DataHub", is_correct: true },
      { id: "d", text: "JDBC Connection", is_correct: true },
      { id: "e", text: "Network Server", is_correct: false },
      { id: "f", text: "LDAP Connection", is_correct: true }
    ]
  },
  {
    id: "d3-q156",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the best way to return to your account after impersonating a user?",
    explanation: "Selecting 'End Impersonation' returns you to your session.",
    is_active: true,
    choices: [
      { id: "a", text: "Turn computer off and on", is_correct: false },
      { id: "b", text: "Clear browser cache", is_correct: false },
      { id: "c", text: "End Impersonation", is_correct: true },
      { id: "d", text: "Log out and back in", is_correct: false }
    ]
  },
  {
    id: "d3-q160",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "On a filter condition, which component is always a choice list?",
    explanation: "The Operator (e.g. 'is', 'contains') is always a choice selection.",
    is_active: true,
    choices: [
      { id: "a", text: "Operator", is_correct: true },
      { id: "b", text: "Filter Criteria", is_correct: false },
      { id: "c", text: "Operation", is_correct: false },
      { id: "d", text: "Match Criteria", is_correct: false }
    ]
  },
  {
    id: "d3-q162",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "A user sees a blank page when clicking Create New but sees the module. Why?",
    explanation: "Table-level create/write ACLs govern record creation.",
    is_active: true,
    choices: [
      { id: "a", text: "Broken link", is_correct: false },
      { id: "b", text: "UI15 issue", is_correct: false },
      { id: "c", text: "Browser issue", is_correct: false },
      { id: "d", text: "User has read but not write role", is_correct: true },
      { id: "e", text: "Timeout", is_correct: false }
    ]
  },
  {
    id: "d3-q169",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When importing, what happens if no coalesce field is specified?",
    explanation: "Every imported row is treated as a new record.",
    is_active: true,
    choices: [
      { id: "a", text: "All rows rejected", is_correct: false },
      { id: "b", text: "All rows treated as new records", is_correct: true },
      { id: "c", text: "Duplicate rows rejected", is_correct: false },
      { id: "d", text: "Errors flagged", is_correct: false }
    ]
  },
  {
    id: "d3-q172",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which component of a table contains a piece of data for one record?",
    explanation: "A Field is the intersection of a row and a column.",
    is_active: true,
    choices: [
      { id: "a", text: "Factor", is_correct: false },
      { id: "b", text: "Field", is_correct: true },
      { id: "c", text: "Datapoint", is_correct: false },
      { id: "d", text: "Element", is_correct: false },
      { id: "e", text: "Item", is_correct: false }
    ]
  },
  {
    id: "d3-q174",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "User records are stored in which table?",
    explanation: "The User table is sys_user.",
    is_active: true,
    choices: [
      { id: "a", text: "User [sys_user]", is_correct: true },
      { id: "b", text: "User [sn_user]", is_correct: false },
      { id: "c", text: "User [u_sys_user]", is_correct: false },
      { id: "d", text: "User [s_user]", is_correct: false }
    ]
  },
  {
    id: "d3-q182",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which field is used as a unique key during imports?",
    explanation: "Coalesce fields determine if a record should be updated or created.",
    is_active: true,
    choices: [
      { id: "a", text: "Match Fields", is_correct: false },
      { id: "b", text: "Coalesce Fields", is_correct: true },
      { id: "c", text: "Key Fields", is_correct: false },
      { id: "d", text: "Sys IDs", is_correct: false }
    ]
  },
  {
    id: "d3-q185",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which tool graphically displays an infrastructure view and relationships?",
    explanation: "The Dependency View provides graphical infrastructure mapping.",
    is_active: true,
    choices: [
      { id: "a", text: "Schema Map", is_correct: false },
      { id: "b", text: "Dependency View", is_correct: true },
      { id: "c", text: "Dependency Map", is_correct: false },
      { id: "d", text: "Database View", is_correct: false }
    ]
  },
  {
    id: "d3-q190",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What are the three key tables in an enterprise CMDB? (Choose three.)",
    explanation: "The base tables are CMDB, CMDB_CI, and CMDB_REL_CI.",
    is_active: true,
    choices: [
      { id: "a", text: "cmdb", is_correct: true },
      { id: "b", text: "sn_cmdb_bak", is_correct: false },
      { id: "c", text: "cmdb_rel_ci", is_correct: true },
      { id: "d", text: "sn_cmdb", is_correct: false },
      { id: "e", text: "cmdb_bak", is_correct: false },
      { id: "f", text: "cmdb_ci", is_correct: true },
      { id: "g", text: "sn_cmdb_ci", is_correct: false }
    ]
  },
  {
    id: "d3-q194",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Define an ACL to allow users with 'itil' role to create incidents.",
    explanation: "The operation must be 'create' and apply to the table level (None).",
    is_active: true,
    choices: [
      { id: "a", text: "Name: incident.None; Operation: create; Role: itil", is_correct: true },
      { id: "b", text: "Name: incident.Any; Operation: write; Role: itil", is_correct: false },
      { id: "c", text: "Name: incident:; Permission: write; Role: itil", is_correct: false },
      { id: "d", text: "Name: incident.None; Permission: create; Role: itil", is_correct: false },
      { id: "e", text: "Name: incident:;Operation: write; Role: itil", is_correct: false }
    ]
  },
  {
    id: "d3-q195",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What Service Catalog feature do you use to organize items into logical groups?",
    explanation: "Categories group similar items.",
    is_active: true,
    choices: [
      { id: "a", text: "Categories", is_correct: true },
      { id: "b", text: "Variable Sets", is_correct: false },
      { id: "c", text: "Sections", is_correct: false },
      { id: "d", text: "Catalog items", is_correct: false }
    ]
  },
  {
    id: "d3-q200",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which utility provides an interactive interface to visualize CIs?",
    explanation: "Dependency View is the primary CI visualization tool.",
    is_active: true,
    choices: [
      { id: "a", text: "Dependency View", is_correct: true },
      { id: "b", text: "CI Class Map", is_correct: false },
      { id: "c", text: "Business Service Map", is_correct: false },
      { id: "d", text: "CSDM Schema", is_correct: false },
      { id: "e", text: "Flow Design", is_correct: false }
    ]
  },
  {
    id: "d3-q203",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "On a filter, which element identifies the attribute being evaluated?",
    explanation: "A Field is the attribute within the table.",
    is_active: true,
    choices: [
      { id: "a", text: "Label", is_correct: false },
      { id: "b", text: "Column", is_correct: false },
      { id: "c", text: "Data Element", is_correct: false },
      { id: "d", text: "Field", is_correct: true },
      { id: "e", text: "Attribute", is_correct: false }
    ]
  },

  // --- BATCH 3 (59-84) ---
  {
    id: "d3-q207",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What module enables defining destinations for imported data?",
    explanation: "Transform Maps define how import fields map to target tables.",
    is_active: true,
    choices: [
      { id: "a", text: "Field Transform", is_correct: false },
      { id: "b", text: "Schema Map", is_correct: false },
      { id: "c", text: "Transform Map", is_correct: true },
      { id: "d", text: "Import Map", is_correct: false }
    ]
  },
  {
    id: "d3-q210",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "In what order are Access Controls evaluated?",
    explanation: "Evaluation is Table-level then Field-level, from specific to general.",
    is_active: true,
    choices: [
      { id: "a", text: "Field then Table", is_correct: false },
      { id: "b", text: "General then Specific", is_correct: false },
      { id: "c", text: "Table then Field", is_correct: true },
      { id: "d", text: "Randomly", is_correct: false }
    ]
  },
  {
    id: "d3-q219",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "First step in importing spreadsheet data?",
    explanation: "The first step is to define the Data Source.",
    is_active: true,
    choices: [
      { id: "a", text: "Scrub data", is_correct: false },
      { id: "b", text: "Coalesce", is_correct: false },
      { id: "c", text: "Select Set", is_correct: false },
      { id: "d", text: "Load Data", is_correct: false },
      { id: "e", text: "Define Data Source", is_correct: true }
    ]
  },
  {
    id: "d3-q220",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the first step in the process to import spreadsheet data into ServiceNow?",
    explanation: "Defining the Data Source is the initial step in the workflow.",
    is_active: true,
    choices: [
      { id: "a", text: "Select Import Set", is_correct: false },
      { id: "b", text: "Run Data Scrubber", is_correct: false },
      { id: "c", text: "Define Data Source", is_correct: true },
      { id: "d", text: "Create import Set", is_correct: false },
      { id: "e", text: "Set Coalesce", is_correct: false }
    ]
  },
  {
    id: "d3-q231",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which step defines where incoming data columns will be written in the receiving table?",
    explanation: "Transform Maps determine target field mapping.",
    is_active: true,
    choices: [
      { id: "a", text: "Schedule", is_correct: false },
      { id: "b", text: "Matching", is_correct: false },
      { id: "c", text: "DataSource", is_correct: false },
      { id: "d", text: "Create Transform Map", is_correct: true },
      { id: "e", text: "Load Data", is_correct: false }
    ]
  },
  {
    id: "d3-q233",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What are the steps for importing data using an import set?",
    explanation: "Workflow: Load Data, Map Fields, Transform Data, Clean Staging.",
    is_active: true,
    choices: [
      { id: "a", text: "Select file, Automap, Transform, Clean", is_correct: false },
      { id: "b", text: "Identify, Import Map, Run, Verify", is_correct: false },
      { id: "c", text: "LDAP, Test, UpdateSet, Run, Apply", is_correct: false },
      { id: "d", text: "Load data; Create transform map; Transform data; Clean up import table", is_correct: true }
    ]
  },
  {
    id: "d3-q235",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which modules can you use to create a new table? (Choose two.)",
    explanation: "Tables and Tables & Columns both allow creating tables.",
    is_active: true,
    choices: [
      { id: "a", text: "Dictionary", is_correct: false },
      { id: "b", text: "Schema Map", is_correct: false },
      { id: "c", text: "Tables", is_correct: true },
      { id: "d", text: "Tables & Columns", is_correct: true }
    ]
  },
  {
    id: "d3-q236",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Primary operations performed against tables?",
    explanation: "ServiceNow follows standard CRUD: Create, Read, Update, Delete.",
    is_active: true,
    choices: [
      { id: "a", text: "Create, Read, Upload, Delete", is_correct: false },
      { id: "b", text: "Capture, Rate, Write, Develop", is_correct: false },
      { id: "c", text: "Create, Rate, Update, Delete", is_correct: false },
      { id: "d", text: "Create, Read, Write, Delete", is_correct: true }
    ]
  },
  {
    id: "d3-q252",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Distinguish between Base Class and Parent Class tables.",
    explanation: "Base tables are not extended from another table; Parent tables have children.",
    is_active: true,
    choices: [
      { id: "a", text: "Extended are always Parent", is_correct: false },
      { id: "b", text: "Extended cannot be both", is_correct: false },
      { id: "c", text: "Base always have children", is_correct: false },
      { id: "d", text: "Base Class table is not extended from another table, Parent class tables may be extended from another table", is_correct: true }
    ]
  },
  {
    id: "d3-q253",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "When a custom table is created, which ACLs are automatically created? (Choose four.)",
    explanation: "CRUD (Create, Read, Write, Delete) ACLs are auto-generated.",
    is_active: true,
    choices: [
      { id: "a", text: "create", is_correct: true },
      { id: "b", text: "delete", is_correct: true },
      { id: "c", text: "execute", is_correct: false },
      { id: "d", text: "update", is_correct: false },
      { id: "e", text: "read", is_correct: true },
      { id: "f", text: "write", is_correct: true }
    ]
  },
  {
    id: "d3-q260",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which is the base table of the configuration management database hierarchy?",
    explanation: "cmdb_ci is the base CI table.",
    is_active: true,
    choices: [
      { id: "a", text: "cmdb_ci", is_correct: true },
      { id: "b", text: "cmdb", is_correct: false },
      { id: "c", text: "cmdb_rel_ci", is_correct: false },
      { id: "d", text: "ucmdb", is_correct: false }
    ]
  },
  {
    id: "d3-q261",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which best describes a field in a ServiceNow table?",
    explanation: "A field is a cell that stores data.",
    is_active: true,
    choices: [
      { id: "a", text: "A field is a row", is_correct: false },
      { id: "b", text: "A field is a menu item", is_correct: false },
      { id: "c", text: "A field is a table cell that stores data", is_correct: true },
      { id: "d", text: "A field is a record", is_correct: false }
    ]
  },
  {
    id: "d3-q267",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Examples of related lists in the list collector? (Choose three.)",
    explanation: "Syntax typically shows reference fields or relationships.",
    is_active: true,
    choices: [
      { id: "a", text: "Problem==Parent", is_correct: true },
      { id: "b", text: "HR Case->Parent", is_correct: false },
      { id: "c", text: "Catalog Task->Parent", is_correct: true },
      { id: "d", text: "Outage->Task number", is_correct: true }
    ]
  },
  {
    id: "d3-q270",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Incident extends Task, Super Incident extends Incident. Which is correct? (Choose five.)",
    explanation: "Task is Base/Parent; Incident is Child/Parent; Super is Child.",
    is_active: true,
    choices: [
      { id: "b", text: "Incident table is a Child table", is_correct: true },
      { id: "f", text: "Incident table is a Parent table", is_correct: true },
      { id: "g", text: "Super Incident table is a Child table", is_correct: true },
      { id: "h", text: "Task table is a Parent table", is_correct: true },
      { id: "i", text: "Task table is a Base table", is_correct: true }
    ]
  },
  {
    id: "d3-q273",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Tables you can select as a Target for an import? (Choose three.)",
    explanation: "Must be within ServiceNow and accessible/allowed.",
    is_active: true,
    choices: [
      { id: "b", text: "Tables within the global scope", is_correct: true },
      { id: "c", text: "Related tables, using Dot Walk", is_correct: true },
      { id: "e", text: "Tables within existing application scope", is_correct: true }
    ]
  },
  {
    id: "d3-q274",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Ways to set permissions on a Table in ACL? (Choose three.)",
    explanation: "ACLs use Roles, Conditions, and Scripts.",
    is_active: true,
    choices: [
      { id: "a", text: "Conditional Expressions", is_correct: true },
      { id: "b", text: "Roles", is_correct: true },
      { id: "d", text: "Script that sets answer to true/false", is_correct: true }
    ]
  },
  {
    id: "d3-q275",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Tool to import data from sources and map to tables?",
    explanation: "Import Sets handle data loading and mapping.",
    is_active: true,
    choices: [
      { id: "a", text: "Transform Set", is_correct: false },
      { id: "b", text: "Data Pack", is_correct: false },
      { id: "c", text: "Update Set", is_correct: false },
      { id: "d", text: "Import Set", is_correct: true }
    ]
  },
  {
    id: "d3-q276",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Where does a policy run if applied to all data (UI, Import, WebService)?",
    explanation: "Data Policies run on the Server.",
    is_active: true,
    choices: [
      { id: "a", text: "Client", is_correct: false },
      { id: "b", text: "Network", is_correct: false },
      { id: "c", text: "Browser", is_correct: false },
      { id: "d", text: "Server", is_correct: true }
    ]
  },
  {
    id: "d3-q278",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Relationship between Incident and Task?",
    explanation: "Incident extends Task.",
    is_active: true,
    choices: [
      { id: "b", text: "Incident table is extended from Task table", is_correct: true },
      { id: "a", text: "One to Many", is_correct: false },
      { id: "d", text: "Many to Many", is_correct: false }
    ]
  },
  {
    id: "d3-q282",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Feature ensuring data consistency during imports/web services?",
    explanation: "Data Policy enforces consistency at server level.",
    is_active: true,
    choices: [
      { id: "a", text: "UI Policy", is_correct: false },
      { id: "b", text: "Data Policy", is_correct: true },
      { id: "c", text: "Business Rule", is_correct: false }
    ]
  },
  {
    id: "d3-q290",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Component defining every table and field?",
    explanation: "The Dictionary (sys_dictionary) defines structures.",
    is_active: true,
    choices: [
      { id: "a", text: "Schema", is_correct: false },
      { id: "d", text: "Dictionary", is_correct: true }
    ]
  },
  {
    id: "d3-q297",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Role required for High Security Settings?",
    explanation: "security_admin role is mandatory.",
    is_active: true,
    choices: [
      { id: "d", text: "security_admin", is_correct: true },
      { id: "c", text: "admin", is_correct: false }
    ]
  },
  {
    id: "d3-q298",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Common role with almost all platform access?",
    explanation: "admin (System Administrator).",
    is_active: true,
    choices: [
      { id: "c", text: "System Administrator [admin]", is_correct: true }
    ]
  },
  {
    id: "d3-q305",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Employee needs access to Network and Hardware work. How? (Choose three.)",
    explanation: "Standard setup: Create User, add to groups.",
    is_active: true,
    choices: [
      { id: "a", text: "Add User to Hardware group", is_correct: true },
      { id: "c", text: "Create User Account", is_correct: true },
      { id: "e", text: "Add User to Network group", is_correct: true }
    ]
  },
  {
    id: "d3-q318",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Charaterization combination that is impossible?",
    explanation: "A table cannot be both a Parent and a Child in the same sense.",
    is_active: true,
    choices: [
      { id: "b", text: "Parent and child", is_correct: true }
    ]
  },
  {
    id: "d3-q320",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Framework to manage tables and CIs associated with a use case?",
    explanation: "CMDB Use Case Modeler.",
    is_active: true,
    choices: [
      { id: "b", text: "CMDB Use Case Modeler", is_correct: true }
    ]
  },

  // --- FINAL 4 TO REACH 88 (85-88) ---
  {
    id: "d3-extra-1",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the purpose of the 'Reference' field type?",
    explanation: "Reference fields create a dynamic relationship between the current table and another table.",
    is_active: true,
    choices: [
      { id: "a", text: "To store long text strings", is_correct: false },
      { id: "b", text: "To create a relationship between two tables", is_correct: true },
      { id: "c", text: "To format dates", is_correct: false },
      { id: "d", text: "To calculate math", is_correct: false }
    ]
  },
  {
    id: "d3-extra-2",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What does the 'Show Matching' option in a list context menu do?",
    explanation: "Show Matching applies a filter to display only records that match the selected value.",
    is_active: true,
    choices: [
      { id: "a", text: "Opens the form for that record", is_correct: false },
      { id: "b", text: "Filters the list to show records matching the value", is_correct: true },
      { id: "c", text: "Deletes the record", is_correct: false },
      { id: "d", text: "Exports the record", is_correct: false }
    ]
  },
  {
    id: "d3-extra-3",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the primary key of every table in ServiceNow?",
    explanation: "The sys_id is the 32-character primary key for every record in every table.",
    is_active: true,
    choices: [
      { id: "a", text: "Number", is_correct: false },
      { id: "b", text: "sys_id", is_correct: true },
      { id: "c", text: "Short Description", is_correct: false },
      { id: "d", text: "Name", is_correct: false }
    ]
  },
  {
    id: "d3-extra-4",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following describes the difference between a Table Name and a Table Label?",
    explanation: "Label is the user-friendly display name; Name is the technical database name (e.g. Incident vs incident).",
    is_active: true,
    choices: [
      { id: "a", text: "They are the same", is_correct: false },
      { id: "b", text: "Label is for users; Name is for the database", is_correct: true },
      { id: "c", text: "Name is for users; Label is for the database", is_correct: false },
      { id: "d", text: "Labels cannot be changed", is_correct: false }
    ]
  }
];
