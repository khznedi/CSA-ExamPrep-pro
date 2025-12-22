
import { Question, QuestionType } from '../types';

export const DOMAIN3_QUESTIONS: Question[] = [
  {
    id: "D3-002",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    explanation: "Coalescing on a field (or set of fields) tells the Transform Map to look for an existing record with a matching value. If found, it updates that record; otherwise, it creates a new one.",
    is_active: true,
    choices: [
      { id: "A", text: "If a match is found using the coalesce fields, the existing record is updated with the information being imported", is_correct: true },
      { id: "B", text: "If a match is not found using the coalesce fields, the system does not create a Transform Map", is_correct: false },
      { id: "C", text: "If a match is found using the coalesce fields, the system creates a new record", is_correct: false },
      { id: "D", text: "If a match is not found using the coalesce fields, the existing record is updated with the information being imported", is_correct: false }
    ]
  },
  {
    id: "D3-014",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Table Access Control rules are processed in the following order:",
    explanation: "ServiceNow evaluates ACLs from most specific to most general: Table name, Parent table name, and finally the wildcard (*).",
    is_active: true,
    choices: [
      { id: "A", text: "any table name (wildcard), parent table name, table name", is_correct: false },
      { id: "B", text: "table name, parent table name, any table name (wildcard)", is_correct: true },
      { id: "C", text: "parent table name, table name, any table name (wildcard)", is_correct: false },
      { id: "D", text: "any table name (wildcard), table name, parent table name", is_correct: false }
    ]
  },
  {
    id: "D3-015",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the platform name for the User table?",
    explanation: "The system table that stores user records is sys_user.",
    is_active: true,
    choices: [
      { id: "A", text: "u_users", is_correct: false },
      { id: "B", text: "sys_users", is_correct: false },
      { id: "C", text: "x_users", is_correct: false },
      { id: "D", text: "sys_user", is_correct: true }
    ]
  },
  {
    id: "D3-018",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    explanation: "It is a best practice to create named update sets for specific features or fixes and avoid using the 'Default' update set for moving changes between instances.",
    is_active: true,
    choices: [
      { id: "A", text: "Avoid using the Default Update set as an Update Set for moving customizations from instance to instance", is_correct: true },
      { id: "B", text: "Before moving customizations, ensure that both instances are different versions", is_correct: false },
      { id: "C", text: "Use the Baseline Update Set to store the contents of items", is_correct: false },
      { id: "D", text: "Once an Update Set is closed, change it back to In Progress until it is applied", is_correct: false }
    ]
  },
  {
    id: "D3-022",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
    explanation: "Discovery scans the network for CIs, and IntegrationHub ETL (Service Graph Connectors) imports data from external sources into the CMDB.",
    is_active: true,
    choices: [
      { id: "A", text: "Discovery", is_correct: true },
      { id: "B", text: "IntegrationHub ETL", is_correct: true },
      { id: "C", text: "Finder", is_correct: false },
      { id: "D", text: "CMDB Plug-in", is_correct: false },
      { id: "E", text: "CMDB Integration Dashboard", is_correct: false }
    ]
  },
  {
    id: "D3-023",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    explanation: "Mapping Assist provides a visual interface to link fields from the source (import set) table to the target table.",
    is_active: true,
    choices: [
      { id: "A", text: "Mapping fields using the Import Log", is_correct: false },
      { id: "B", text: "Mapping fields using Transform History", is_correct: false },
      { id: "C", text: "Mapping fields using an SLA", is_correct: false },
      { id: "D", text: "Mapping fields using a Field Map", is_correct: true }
    ]
  },
  {
    id: "D3-024",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    explanation: "The CMDB contains data about Configuration Items (CIs), which can be tangible (servers) or intangible (business services).",
    is_active: true,
    choices: [
      { id: "A", text: "The CMDB contains data about tangible and intangible business assets", is_correct: true },
      { id: "B", text: "The CMDB contains the Business Rules that direct assets", is_correct: false },
      { id: "C", text: "The CMDB archives all Service Management metadata", is_correct: false },
      { id: "D", text: "The CMDB contains ITIL process data pertaining to configuration items", is_correct: false }
    ]
  },
  {
    id: "D3-028",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which type of tables may be extended by other tables, but do not extend another table?",
    explanation: "Base tables are the root tables in a hierarchy (like Task). They can have children but do not have a parent.",
    is_active: true,
    choices: [
      { id: "A", text: "Base Tables", is_correct: true },
      { id: "B", text: "Core Tables", is_correct: false },
      { id: "C", text: "Extended Tables", is_correct: false },
      { id: "D", text: "Custom Tables", is_correct: false }
    ]
  },
  {
    id: "D3-031",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    explanation: "CMDB involves Service Processes, Tables/Fields for CI data, the Database itself, and the Dependency View for relationships.",
    is_active: true,
    choices: [
      { id: "A", text: "Service Processes", is_correct: true },
      { id: "B", text: "User Permissions", is_correct: false },
      { id: "C", text: "Tables and Fields", is_correct: true },
      { id: "D", text: "A Database", is_correct: true },
      { id: "E", text: "The Dependency View", is_correct: true }
    ]
  },
  {
    id: "D3-034",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which technique is used to get information from a series of referenced fields from different tables?",
    explanation: "Dot-walking allows you to reach through reference fields to access data on related records (e.g., incident.caller_id.location).",
    is_active: true,
    choices: [
      { id: "A", text: "Table-Walking", is_correct: false },
      { id: "B", text: "Sys_ID Pulling", is_correct: false },
      { id: "C", text: "Dot-Walking", is_correct: true },
      { id: "D", text: "Record-Hopping", is_correct: false }
    ]
  },
  {
    id: "D3-035",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a schema map?",
    explanation: "The Schema Map is a graphical tool that shows the relationships and hierarchy between tables in the database.",
    is_active: true,
    choices: [
      { id: "A", text: "A schema map enables admins to define trouble sources", is_correct: false },
      { id: "B", text: "A schema map graphically organizes visual task boards", is_correct: false },
      { id: "C", text: "A schema map displays CIs that support a service", is_correct: false },
      { id: "D", text: "A schema map displays the details of tables and their relationships in a visual manner", is_correct: true }
    ]
  },
  {
    id: "D3-036",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following statements best describes the purpose of an Update Set?",
    explanation: "Update Sets are used to bundle configuration changes (logic, UI, etc.) so they can be moved as a unit between instances (e.g., Dev to Test).",
    is_active: true,
    choices: [
      { id: "A", text: "An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit", is_correct: true },
      { id: "B", text: "By default, an Update Set includes customizations, Business Rules, and homepages", is_correct: false },
      { id: "C", text: "An Update Set is a group of customizations that is moved from Production to Development", is_correct: false },
      { id: "D", text: "By default, the changes are visible only in the instance where applied", is_correct: false }
    ]
  },
  {
    id: "D3-039",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What information does the System Dictionary contain?",
    explanation: "The System Dictionary (sys_dictionary) defines every table and column in the instance, including their types and properties.",
    is_active: true,
    choices: [
      { id: "A", text: "The human-readable labels and language settings", is_correct: false },
      { id: "B", text: "The definition for each table and column", is_correct: true },
      { id: "C", text: "The information on how tables relate to each other", is_correct: false },
      { id: "D", text: "The language dictionary used for spell checking", is_correct: false }
    ]
  },
  {
    id: "D3-042",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a Dictionary Override?",
    explanation: "A Dictionary Override allows an admin to change the behavior or properties of a field on an extended table without affecting the parent table.",
    is_active: true,
    choices: [
      { id: "A", text: "A Dictionary Override is an incoming customer update", is_correct: false },
      { id: "B", text: "A Dictionary Override is the addition/modification of anything affecting IT services", is_correct: false },
      { id: "C", text: "A Dictionary Override is a task within a flow", is_correct: false },
      { id: "D", text: "A Dictionary Override sets field properties in extended tables", is_correct: true }
    ]
  },
  {
    id: "D3-046",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the Import Set Table?",
    explanation: "Import set tables are temporary staging tables where data is stored immediately after being loaded from an external source.",
    is_active: true,
    choices: [
      { id: "A", text: "A table where data will be placed, post-transformation", is_correct: false },
      { id: "B", text: "A table that determines relationships", is_correct: false },
      { id: "C", text: "A staging area for imported records", is_correct: true },
      { id: "D", text: "A repository for Update Set information", is_correct: false }
    ]
  },
  {
    id: "D3-047",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a characteristic of importing data into ServiceNow?",
    explanation: "Transform Maps are reusable. Once defined, they can be applied to any Import Set that uses the same source data structure.",
    is_active: true,
    choices: [
      { id: "A", text: "An existing Transform Map can be used one time on the same import set", is_correct: false },
      { id: "B", text: "Coalesce fields are used only after running Transform", is_correct: false },
      { id: "C", text: "Any user can manage and set up import sets", is_correct: false },
      { id: "D", text: "An existing Transform Map can be used multiple times on the same import set", is_correct: true }
    ]
  },
  {
    id: "D3-053",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following statements is true when a new table is created by extending another table?",
    explanation: "Child tables inherit all fields from the parent table and can also have their own unique fields added.",
    is_active: true,
    choices: [
      { id: "A", text: "The new table archives the parent table", is_correct: false },
      { id: "B", text: "The new table inherits logic but none of the existing fields", is_correct: false },
      { id: "C", text: "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself", is_correct: true },
      { id: "D", text: "The new table inherits all of the fields, but does not inherit Access Control rules", is_correct: false }
    ]
  },
  {
    id: "D3-057",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the purpose of a Related List?",
    explanation: "Related Lists appear at the bottom of a form and show records in other tables that have a relationship with the current record.",
    is_active: true,
    choices: [
      { id: "A", text: "To create a one-to-many relationship", is_correct: false },
      { id: "B", text: "To dot-walk to a core table", is_correct: false },
      { id: "C", text: "To present related fields", is_correct: false },
      { id: "D", text: "To present related records", is_correct: true }
    ]
  },
  {
    id: "D3-060",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which are valid ServiceNow User Authentication Methods? (Choose three.)",
    explanation: "ServiceNow supports local database accounts, external LDAP, and Single Sign-On (SSO) protocols like SAML or OIDC.",
    is_active: true,
    choices: [
      { id: "A", text: "XML feed", is_correct: false },
      { id: "B", text: "Local database", is_correct: true },
      { id: "C", text: "LDAP", is_correct: true },
      { id: "D", text: "SSO", is_correct: true },
      { id: "E", text: "FTP authentication", is_correct: false }
    ]
  },
  {
    id: "D3-061",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
    explanation: "ACLs use a combination of Roles, Conditions (filter), and Scripts to determine access.",
    is_active: true,
    choices: [
      { id: "A", text: "Roles", is_correct: true },
      { id: "B", text: "Conditional Expressions", is_correct: true },
      { id: "C", text: "Assignment Rules", is_correct: false },
      { id: "D", text: "Scripts", is_correct: true },
      { id: "E", text: "User Criteria", is_correct: false }
    ]
  },
  {
    id: "D3-073",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which core table in the ServiceNow platform provides standard fields used on each of the tables that extend it?",
    explanation: "The Task [task] table is the primary base table for processes like Incident, Change, and Problem.",
    is_active: true,
    choices: [
      { id: "A", text: "Task [task]", is_correct: true },
      { id: "B", text: "Assignment [assignment]", is_correct: false },
      { id: "C", text: "Service [service]", is_correct: false },
      { id: "D", text: "Workflow [workflow]", is_correct: false }
    ]
  },
  {
    id: "D3-074",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following statements describes how data is organized in a table?",
    explanation: "In database terminology, columns represent fields and rows represent individual records.",
    is_active: true,
    choices: [
      { id: "A", text: "A column is a field in the database and a record is one user", is_correct: false },
      { id: "B", text: "A column is one field and a record is one row", is_correct: true },
      { id: "C", text: "A column is one field and a record is one column", is_correct: false },
      { id: "D", text: "A column contains data from one user and a record is one set of fields", is_correct: false }
    ]
  },
  {
    id: "D3-075",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a sys_id?",
    explanation: "A sys_id is a unique 32-character GUID (Global Unique Identifier) that uniquely identifies every record in every table.",
    is_active: true,
    choices: [
      { id: "A", text: "Unique 32-character identifier that is assigned to every record", is_correct: true },
      { id: "B", text: "A client-side Business Rule", is_correct: false },
      { id: "C", text: "A server-side Business Rule", is_correct: false },
      { id: "D", text: "Unique 64-character identifier that is assigned to every record", is_correct: false }
    ]
  },
  {
    id: "D3-076",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When creating a global custom table named 'abc', what is the table name that is automatically assigned?",
    explanation: "Custom tables in the Global scope are always prefixed with 'u_'.",
    is_active: true,
    choices: [
      { id: "A", text: "snc_abc", is_correct: false },
      { id: "B", text: "abc", is_correct: false },
      { id: "C", text: "u_abc", is_correct: true },
      { id: "D", text: "sys_abc", is_correct: false }
    ]
  },
  {
    id: "D3-077",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Access Control rules may provide access security for which of the following database objects?",
    explanation: "ACLs can be applied at the Table level (entire table), Row level (specific record), or Column level (specific field).",
    is_active: true,
    choices: [
      { id: "A", text: "For a specific role, group, or user", is_correct: false },
      { id: "B", text: "For a specific row, column, or table", is_correct: true },
      { id: "C", text: "For specific groups", is_correct: false },
      { id: "D", text: "For a specific CMDB Configuration item", is_correct: false }
    ]
  },
  {
    id: "D3-078",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the primary application used to load data into ServiceNow?",
    explanation: "System Import Sets is the core utility for importing data from spreadsheets, JDBC, XML, and more.",
    is_active: true,
    choices: [
      { id: "A", text: "Service Level Management", is_correct: false },
      { id: "B", text: "Configuration", is_correct: false },
      { id: "C", text: "System Import Sets", is_correct: true },
      { id: "D", text: "System Update Sets", is_correct: false }
    ]
  },
  {
    id: "D3-079",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
    explanation: "The standard sequence is: Load Data (creates import set table) -> Create Transform Map (mapping source to target) -> Run Transform.",
    is_active: true,
    choices: [
      { id: "A", text: "Select Data Source, Schedule Transform", is_correct: false },
      { id: "B", text: "Load Data, Create Transform Map, Run Transform", is_correct: true },
      { id: "C", text: "Define Data Source, Select Transform Map, Run Transform", is_correct: false },
      { id: "D", text: "Select Import Set, Select Transform Map, Run Transform", is_correct: false }
    ]
  },
  {
    id: "D3-080",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which tool is used for creating dependencies between configuration items in the CMDB?",
    explanation: "The CI Relationship Editor allows admins to manually define how CIs are connected (e.g., Server runs on OS).",
    is_active: true,
    choices: [
      { id: "A", text: "CI Relationship Editor", is_correct: true },
      { id: "B", text: "CMDB Builder", is_correct: false },
      { id: "C", text: "CI Service Manager", is_correct: false },
      { id: "D", text: "CI Class Manager", is_correct: false }
    ]
  },
  {
    id: "D3-081",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the difference between a UI Policy and Data Policy?",
    explanation: "UI Policies are for the browser/form only. Data Policies enforce rules at the server level, affecting imports and web services too.",
    is_active: true,
    choices: [
      { id: "A", text: "Data Policies run when data is entered through the form only", is_correct: false },
      { id: "B", text: "Data Policies can be converted into UI Policies", is_correct: false },
      { id: "C", text: "Data Policies run regardless of how data is entered, while UI Policies are for form interactions", is_correct: true },
      { id: "D", text: "Data Policies run only after UI Policies run successfully", is_correct: false }
    ]
  },
  {
    id: "D3-082",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one of the following is an accurate list of changes that are captured in an Update Set?",
    explanation: "Update Sets capture structural changes: Tables, Forms, Views, Fields (Dictionary entries), and Client-side logic.",
    is_active: true,
    choices: [
      { id: "A", text: "Changes made to: tables, forms, schedules, and client scripts", is_correct: false },
      { id: "B", text: "Changes made to: tables, forms, Business Rules, and data records", is_correct: false },
      { id: "C", text: "Changes made to: tables, forms, groups, and configuration items (CIs)", is_correct: false },
      { id: "D", text: "Changes made to: table, forms, views, and fields", is_correct: true }
    ]
  },
  {
    id: "D3-083",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What are the steps to retrieve an Update Set?",
    explanation: "The lifecycle for moving an update set is: Complete (on source) -> Retrieve (on target) -> Preview (on target) -> Commit (on target).",
    is_active: true,
    choices: [
      { id: "A", text: "Verify Update Set is Complete, Retrieve, Preview, Apply", is_correct: false },
      { id: "B", text: "Verify Update Set is Complete, Test Connection, Apply", is_correct: false },
      { id: "C", text: "Verify Update Set is Complete, Test Connection, Commit", is_correct: false },
      { id: "D", text: "Verify Update Set is Complete, Retrieve, Preview, Commit", is_correct: true }
    ]
  },
  {
    id: "D3-086",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which one statement correctly describes Access Control rule evaluation?",
    explanation: "If both a table-level rule and a field-level rule apply, the user must pass BOTH to perform the operation.",
    is_active: true,
    choices: [
      { id: "A", text: "Table access rules are evaluated from the general to the specific", is_correct: false },
      { id: "B", text: "If more than one rule applies to a record, the older rule is evaluated first", is_correct: false },
      { id: "C", text: "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed", is_correct: true },
      { id: "D", text: "The role with the most permissions evaluates the rules first.", is_correct: false }
    ]
  },
  {
    id: "D3-087",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "ServiceNow resource providing service-related definitions and a CMDB framework...",
    explanation: "The Common Services Data Model (CSDM) is the official framework and set of definitions for mapping services to the CMDB.",
    is_active: true,
    choices: [
      { id: "A", text: "Common Services Data Model (CSDM)", is_correct: true },
      { id: "B", text: "Information Technology Service Management (ITSM)", is_correct: false },
      { id: "C", text: "Configuration Management Database (CMDB)", is_correct: false },
      { id: "D", text: "Information Technology Infrastructure Library (ITIL)", is_correct: false }
    ]
  },
  {
    id: "D3-091",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which of the following are not included in an Update Set, by default? (Choose four.)",
    explanation: "Data records (Users, Incidents, CIs), Schedules, Scheduled Jobs (data part), and Homepages are standard exclusions.",
    is_active: true,
    choices: [
      { id: "A", text: "Homepages", is_correct: true },
      { id: "B", text: "Data", is_correct: true },
      { id: "E", text: "Schedules", is_correct: true },
      { id: "I", text: "Scheduled Jobs", is_correct: true },
      { id: "D", text: "Business Rules", is_correct: false },
      { id: "K", text: "Views", is_correct: false }
    ]
  },
  {
    id: "D3-093",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which ServiceNow resource ensures the data maps correctly to the appropriate CMDB tables?",
    explanation: "The CSDM (Common Service Data Model) provides the framework for CI and Service data alignment.",
    is_active: true,
    choices: [
      { id: "A", text: "Common Service Data Model (CSDM)", is_correct: true },
      { id: "B", text: "Service Mapping Utility (SMU)", is_correct: false },
      { id: "C", text: "Service Schema Map (SSM)", is_correct: false },
      { id: "D", text: "CMDB Class Manager (CMDBCM)", is_correct: false }
    ]
  },
  {
    id: "D3-095",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What field contains a record's 32-character, unique identifier?",
    explanation: "The field name for the GUID is sys_id.",
    is_active: true,
    choices: [
      { id: "A", text: "sn_rec_id", is_correct: false },
      { id: "B", text: "rec id", is_correct: false },
      { id: "C", text: "u_id", is_correct: false },
      { id: "D", text: "sys_id", is_correct: true }
    ]
  },
  {
    id: "D3-097",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is used frequently to move customizations from one instance to another?",
    explanation: "Update Sets are the primary mechanism for migrating structural changes between ServiceNow environments.",
    is_active: true,
    choices: [
      { id: "A", text: "Update Sets", is_correct: true },
      { id: "B", text: "Code Sets", is_correct: false },
      { id: "C", text: "Update Packs", is_correct: false },
      { id: "D", text: "Configuration Logs", is_correct: false }
    ]
  },
  {
    id: "D3-102",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What import utility do you use when field names on the import set match target fields?",
    explanation: "Automatic Mapping (Auto Map Matching Fields) quickly links fields that share the exact same names.",
    is_active: true,
    choices: [
      { id: "A", text: "Schema Mapping", is_correct: false },
      { id: "B", text: "Automatic Mapping", is_correct: true },
      { id: "C", text: "Mapping Assist", is_correct: false },
      { id: "D", text: "Mapping Dashboard", is_correct: false }
    ]
  },
  {
    id: "D3-105",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What are three security modules often used by the System Administrator? (Choose three.)",
    explanation: "Admins frequently use System Properties > Security, System Security > Access Control (ACL), and High Security Settings.",
    is_active: true,
    choices: [
      { id: "A", text: "System Properties > Security", is_correct: true },
      { id: "E", text: "System Security > Access Control (ACL)", is_correct: true },
      { id: "G", text: "System Security > High Security Settings", is_correct: true },
      { id: "C", text: "System Security > Security", is_correct: false },
      { id: "D", text: "Self-Service > My Access", is_correct: false }
    ]
  },
  {
    id: "D3-108",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When moving multiple update sets at one time, what might you do to facilitate the move?",
    explanation: "Batching update sets allows you to move related changes as a single parent-child group, simplifying commit order.",
    is_active: true,
    choices: [
      { id: "A", text: "Batch", is_correct: true },
      { id: "B", text: "Verify", is_correct: false },
      { id: "C", text: "Test", is_correct: false },
      { id: "D", text: "Preview", is_correct: false }
    ]
  },
  {
    id: "D3-109",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is specified in an Access Control rule?",
    explanation: "An ACL defines the Object (what), Operation (read/write/etc), and Permissions (who).",
    is_active: true,
    choices: [
      { id: "A", text: "Groups, Conditional Expressions and Workflows", is_correct: false },
      { id: "B", text: "Table Schema, CRUD, and User Authentication", is_correct: false },
      { id: "C", text: "Object and Operation being secured; Permissions required", is_correct: true },
      { id: "D", text: "security_admin", is_correct: false }
    ]
  },
  {
    id: "D3-111",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What do you call any component that needs to be managed in order to deliver services?",
    explanation: "In CMDB terms, these components are called Configuration Items (CIs).",
    is_active: true,
    choices: [
      { id: "A", text: "CSDM Items", is_correct: false },
      { id: "B", text: "CMDB", is_correct: false },
      { id: "C", text: "Configuration item", is_correct: true },
      { id: "D", text: "Service Offerings", is_correct: false }
    ]
  },
  {
    id: "D3-114",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
    explanation: "ServiceNow uses dot notation for specific field ACLs: [table].[field].",
    is_active: true,
    choices: [
      { id: "A", text: "Incident. Major_Incident", is_correct: false },
      { id: "B", text: "incident=>major_incident", is_correct: false },
      { id: "C", text: "incident<=>major_incident", is_correct: false },
      { id: "D", text: "incident.major_incident", is_correct: true }
    ]
  },
  {
    id: "D3-116",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "After finishing your work on High Security Settings, how do you return to normal admin security levels?",
    explanation: "If you used 'Elevate Roles' to get sec_admin, you can end the impersonation session if you were acting as another user, or log out and back in.",
    is_active: true,
    choices: [
      { id: "A", text: "Select Normal role", is_correct: false },
      { id: "B", text: "Log out and back in", is_correct: false },
      { id: "C", text: "Use System Administration > Normal Security", is_correct: false },
      { id: "E", text: "End Impersonation", is_correct: true }
    ]
  },
  {
    id: "D3-117",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What type of field allows you to look up values from one other table?",
    explanation: "A Reference field creates a link to a single record in another table.",
    is_active: true,
    choices: [
      { id: "A", text: "Reference", is_correct: true },
      { id: "B", text: "Verity", is_correct: false },
      { id: "C", text: "Options", is_correct: false },
      { id: "F", text: "Lookup", is_correct: false }
    ]
  },
  {
    id: "D3-120",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What are the steps for applying an update set to an instance?",
    explanation: "Once on the target instance: Retrieve -> Preview (checks for collisions) -> Commit (applies changes).",
    is_active: true,
    choices: [
      { id: "A", text: "Retrieve, Preview, Commit", is_correct: true },
      { id: "B", text: "Specify, Transform, Apply", is_correct: false },
      { id: "C", text: "Retrieve, Assess, Apply", is_correct: false },
      { id: "D", text: "Get, Test, Push", is_correct: false }
    ]
  },
  {
    id: "D3-121",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When importing spreadsheet data, in which step does the data get written to the receiving table?",
    explanation: "Data is physically moved from the staging (import set) table to the target table during the 'Run Transform' step.",
    is_active: true,
    choices: [
      { id: "A", text: "Run Transform", is_correct: true },
      { id: "B", text: "Run Import", is_correct: false },
      { id: "C", text: "Import Dataset", is_correct: false },
      { id: "D", text: "Execute Transform", is_correct: false }
    ]
  },
  {
    id: "D3-130",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What module would you use if you wanted to view a list of all of the fields on the Incident table? (Choose two.)",
    explanation: "The Dictionary (sys_dictionary) and the 'Tables & Columns' viewer both provide lists of fields per table.",
    is_active: true,
    choices: [
      { id: "A", text: "Tables & Columns", is_correct: true },
      { id: "B", text: "Dictionary", is_correct: true },
      { id: "C", text: "Data Class Manager", is_correct: false },
      { id: "F", text: "Schema", is_correct: false }
    ]
  },
  {
    id: "D3-134",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Mandatory fields on Insert and Read-only Incident numbers regardless of entry method. Which type of policy would you use?",
    explanation: "Data Policies are used for server-side enforcement that applies to UI, API, and Imports.",
    is_active: true,
    choices: [
      { id: "A", text: "Data Quality Policy", is_correct: false },
      { id: "C", text: "UI Data Policy", is_correct: false },
      { id: "D", text: "UI Policy", is_correct: false },
      { id: "F", text: "Data Policy", is_correct: true }
    ]
  },
  {
    id: "D3-137",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which database provides a logical model of your company infrastructure by identifying, controlling, and maintaining CIs?",
    explanation: "This is the core definition of the Configuration Management Database (CMDB).",
    is_active: true,
    choices: [
      { id: "A", text: "IMDB", is_correct: false },
      { id: "B", text: "ITSM", is_correct: false },
      { id: "D", text: "CMDB", is_correct: true },
      { id: "E", text: "LDAP", is_correct: false }
    ]
  },
  {
    id: "D3-138",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which module is used as the first step for importing data?",
    explanation: "The 'Load Data' module starts the import process by allowing you to upload a file and define the staging table.",
    is_active: true,
    choices: [
      { id: "A", text: "Coalesce Data", is_correct: false },
      { id: "B", text: "Transform Data", is_correct: false },
      { id: "C", text: "Import Data", is_correct: false },
      { id: "D", text: "Load Data", is_correct: true }
    ]
  },
  {
    id: "D3-145",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which tool is used to define relationships between fields in an import set table and a target table?",
    explanation: "A Transform Map defines the logic and field matching between source and destination.",
    is_active: true,
    choices: [
      { id: "A", text: "Transform Schema", is_correct: false },
      { id: "B", text: "Schema Map", is_correct: false },
      { id: "D", text: "Transform Map", is_correct: true },
      { id: "F", text: "Import Designer", is_correct: false }
    ]
  },
  {
    id: "D3-149",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the name of the relationship where two or more tables are related in a bi-directional way?",
    explanation: "A Many to Many (M2M) relationship allows multiple records in Table A to link to multiple records in Table B.",
    is_active: true,
    choices: [
      { id: "A", text: "Database View", is_correct: false },
      { id: "B", text: "Many to Many", is_correct: true },
      { id: "C", text: "One to Many", is_correct: false },
      { id: "D", text: "Extended", is_correct: false }
    ]
  },
  {
    id: "D3-154",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
    explanation: "ServiceNow supports File (Local/SFTP), JDBC, LDAP, and Web Services (REST/SOAP).",
    is_active: true,
    choices: [
      { id: "A", text: "Local Sources (XML, CSV, Excel)", is_correct: true },
      { id: "D", text: "JDBC Connection", is_correct: true },
      { id: "E", text: "Network Server", is_correct: true },
      { id: "F", text: "LDAP Connection", is_correct: true },
      { id: "B", text: "Implementation Spoke", is_correct: false }
    ]
  },
  {
    id: "D3-163",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What resource can you use to view details of tables and CIs associated with a particular use case?",
    explanation: "The CSDM Product View (in Class Manager) provides context-specific diagrams for various implementation use cases.",
    is_active: true,
    choices: [
      { id: "A", text: "Scenario Dashboard", is_correct: false },
      { id: "B", text: "CI Use Case Modeler", is_correct: false },
      { id: "C", text: "CMDB Use Case Modeler", is_correct: false },
      { id: "D", text: "Common Service Data Model (CSDM) product view", is_correct: true }
    ]
  },
  {
    id: "D3-169",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When importing data, what happens to imported rows if no coalesce field is specified?",
    explanation: "Without a coalesce field, ServiceNow cannot check for existing records and will simply insert every row as a new record.",
    is_active: true,
    choices: [
      { id: "A", text: "All rows are rejected", is_correct: false },
      { id: "B", text: "All rows are treated as new records. No existing records are updated.", is_correct: true },
      { id: "C", text: "Duplicate rows are rejected", is_correct: false },
      { id: "D", text: "All rows are treated as new, but errors will be flagged", is_correct: false }
    ]
  },
  {
    id: "D3-170",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the most common role that has access to almost all platform features, functions, and data?",
    explanation: "The 'admin' role grants full system-wide access to most features, except for specific high-security or encryption areas.",
    is_active: true,
    choices: [
      { id: "A", text: "Security Admin [security_admin]", is_correct: false },
      { id: "B", text: "Sys Admin [sys_admin]", is_correct: false },
      { id: "D", text: "System Administrator [admin]", is_correct: true },
      { id: "E", text: "Base Admin [base_admin]", is_correct: false }
    ]
  },
  {
    id: "D3-172",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which component of a table contains a piece of data for one record?",
    explanation: "A field is the smallest unit of data in a record, corresponding to a single cell in a spreadsheet.",
    is_active: true,
    choices: [
      { id: "A", text: "Factor", is_correct: false },
      { id: "B", text: "Field", is_correct: true },
      { id: "C", text: "Datapoint", is_correct: false },
      { id: "D", text: "Element", is_correct: false }
    ]
  },
  {
    id: "D3-173",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What type of field has a drop down list from which you can pick pre-defined options?",
    explanation: "A Choice field allows selection from a list of predefined strings.",
    is_active: true,
    choices: [
      { id: "A", text: "Choice", is_correct: true },
      { id: "B", text: "Picker", is_correct: false },
      { id: "C", text: "Drop down", is_correct: false },
      { id: "D", text: "Option", is_correct: false }
    ]
  },
  {
    id: "D3-182",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which field (or fields) is used as a unique key during imports?",
    explanation: "Coalesce fields serve as the 'unique key' to determine if an import row should create a new record or update an existing one.",
    is_active: true,
    choices: [
      { id: "A", text: "Match Fields", is_correct: false },
      { id: "B", text: "Coalesce Fields", is_correct: true },
      { id: "C", text: "Key Fields", is_correct: false },
      { id: "D", text: "Sys IDs", is_correct: false }
    ]
  },
  {
    id: "D3-184",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the result of the order in which access controls are evaluated?",
    explanation: "ServiceNow first ensures you can access the table itself before checking if you can access specific fields within that table.",
    is_active: true,
    choices: [
      { id: "A", text: "Ensures user has access to fields before the table", is_correct: false },
      { id: "B", text: "Ensures user can get to work as quickly as possible", is_correct: false },
      { id: "C", text: "Ensures user has access to application before module", is_correct: false },
      { id: "D", text: "Ensures user has access to a table, before evaluating access to a field in the table", is_correct: true }
    ]
  },
  {
    id: "D3-185",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which tool graphically displays an infrastructure view for a CI and its relationship with other CIs?",
    explanation: "The Dependency View uses a map to show how configuration items are interconnected.",
    is_active: true,
    choices: [
      { id: "A", text: "Schema Map", is_correct: false },
      { id: "B", text: "Dependency View", is_correct: true },
      { id: "C", text: "Dependency Map", is_correct: false },
      { id: "D", text: "Database View", is_correct: false }
    ]
  },
  {
    id: "D3-186",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What are examples of Core tables in the ServiceNow platform?",
    explanation: "User (sys_user), Task (task), and Incident (incident) are fundamental OOTB tables.",
    is_active: true,
    choices: [
      { id: "A", text: "Configuration, Connect, Chat", is_correct: false },
      { id: "B", text: "Team, Party, Awards", is_correct: false },
      { id: "C", text: "User, Task, Incident", is_correct: true },
      { id: "D", text: "Work, Caller, Timecard", is_correct: false }
    ]
  },
  {
    id: "D3-190",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What are the three key tables in an enterprise CMDB? (Choose three.)",
    explanation: "The primary CMDB tables are cmdb (base), cmdb_ci (CI base), and cmdb_rel_ci (relationships).",
    is_active: true,
    choices: [
      { id: "A", text: "cmdb", is_correct: true },
      { id: "C", text: "cmdb_rel_ci", is_correct: true },
      { id: "F", text: "cmdb_ci", is_correct: true },
      { id: "D", text: "sn_cmdb", is_correct: false }
    ]
  },
  {
    id: "D3-191",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the best practice related to using the Default Update Set for moving customizations?",
    explanation: "The Default update set is a catch-all. Changes intended for migration should always be placed in a specifically created and named update set.",
    is_active: true,
    choices: [
      { id: "A", text: "Merge Default update sets before moving", is_correct: false },
      { id: "B", text: "Submit Default update set to repository", is_correct: false },
      { id: "C", text: "You should not use the Default Update sets for moving between instances", is_correct: true },
      { id: "D", text: "Keep Default update set to maximum 20 records", is_correct: false }
    ]
  },
  {
    id: "D3-192",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which application is used primarily to load data into ServiceNow?",
    explanation: "System Import Sets is the module used for all bulk data loading activities.",
    is_active: true,
    choices: [
      { id: "A", text: "Import Hub", is_correct: false },
      { id: "B", text: "System Import Sets", is_correct: true },
      { id: "C", text: "Data Import Configuration", is_correct: false },
      { id: "D", text: "Import Management", is_correct: false }
    ]
  },
  {
    id: "D3-194",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "How would you define an Access Control to allow 'itil' role to create incident records?",
    explanation: "Table-level access is indicated by using the table name and '.None' (e.g. incident.None) for the 'create' operation.",
    is_active: true,
    choices: [
      { id: "A", text: "Name: incident. None; Operation: create; Role: itil", is_correct: true },
      { id: "B", text: "Name: incident. Any; Operation: write; Permission: itil", is_correct: false },
      { id: "C", text: "Name: incident:; Permission: write; Role: itil", is_correct: false },
      { id: "D", text: "Name: incident. None; Permission: create; Role: itil", is_correct: false }
    ]
  },
  {
    id: "D3-200",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which utility provides an interactive graphical interface to visualize configuration items?",
    explanation: "Dependency View is the standard graphical map for CMDB relationships.",
    is_active: true,
    choices: [
      { id: "A", text: "Dependency View", is_correct: true },
      { id: "B", text: "CI Class Map", is_correct: false },
      { id: "C", text: "Business Service Map", is_correct: false },
      { id: "D", text: "CSDM Schema", is_correct: false }
    ]
  },
  {
    id: "D3-207",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What module enables an administrator to define destinations for imported data on any table?",
    explanation: "A Transform Map maps source columns to target table fields.",
    is_active: true,
    choices: [
      { id: "A", text: "Field Transform", is_correct: false },
      { id: "B", text: "Schema Map", is_correct: false },
      { id: "C", text: "Transform Map", is_correct: true },
      { id: "D", text: "Import Map", is_correct: false }
    ]
  },
  {
    id: "D3-210",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "In what order are Access Controls evaluated?",
    explanation: "ServiceNow evaluates Table-level first (specific to general), then Row-level, and finally Field-level permissions.",
    is_active: true,
    choices: [
      { id: "A", text: "Field-level specific to general; then Table-level specific to general", is_correct: false },
      { id: "C", text: "Table-level specific to general; then Field-level - most specific to most general", is_correct: true },
      { id: "B", text: "Field-level general to specific; then Row-level", is_correct: false },
      { id: "D", text: "Table-level specific to general, then Row-level specific to general", is_correct: false }
    ]
  },
  {
    id: "D3-219",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When importing spreadsheet data, what is the first step in the process?",
    explanation: "The process begins with 'Load Data', which uploads the file and staging table.",
    is_active: true,
    choices: [
      { id: "A", text: "Run Data Scrubber", is_correct: false },
      { id: "B", text: "Set Coalesce", is_correct: false },
      { id: "C", text: "Select Import Set", is_correct: false },
      { id: "D", text: "Load Data", is_correct: true }
    ]
  },
  {
    id: "D3-221",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is a classic example of a Many to Many relationship?",
    explanation: "A vendor selling multiple products and products being sold by multiple vendors is a perfect M2M scenario.",
    is_active: true,
    choices: [
      { id: "A", text: "Vendors can sell multiple products; and products can be sold by multiple vendors", is_correct: true },
      { id: "B", text: "A Task can trigger many Workflows", is_correct: false },
      { id: "C", text: "Requests can contain many Items", is_correct: false },
      { id: "D", text: "CI belonging to multiple Classes", is_correct: false }
    ]
  },
  {
    id: "D3-224",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "On the CI Dependency View, what enables tracing from an item like a Server to dependent Services?",
    explanation: "Relationships (maintained in the cmdb_rel_ci table) enable the tracing of dependencies across the infrastructure.",
    is_active: true,
    choices: [
      { id: "A", text: "Automapping Utility", is_correct: false },
      { id: "B", text: "Relationships", is_correct: true },
      { id: "C", text: "Service Tracer", is_correct: false },
      { id: "D", text: "Transform Map", is_correct: false }
    ]
  },
  {
    id: "D3-231",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When importing data, which step defines where incoming data columns will be written?",
    explanation: "The 'Create Transform Map' step is where field-to-field matching is defined.",
    is_active: true,
    choices: [
      { id: "A", text: "Schedule Transform", is_correct: false },
      { id: "B", text: "Field Matching", is_correct: false },
      { id: "D", text: "Create Transform Map", is_correct: true },
      { id: "E", text: "Load Data", is_correct: false }
    ]
  },
  {
    id: "D3-233",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What are the steps for importing data using an import set?",
    explanation: "Correct order: Load data -> Create transform map -> Transform data -> Clean up staging table.",
    is_active: true,
    choices: [
      { id: "A", text: "Select source file; Run automap; Transform data", is_correct: false },
      { id: "D", text: "Load the data; Create transform map; Transform data; Clean up import table", is_correct: true },
      { id: "C", text: "Setup LDAP; Test map; Create update set", is_correct: false },
      { id: "E", text: "Create Transform Map, Load Data, Transform Data", is_correct: false }
    ]
  },
  {
    id: "D3-235",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Which modules can you use to create a new table? (Choose two.)",
    explanation: "New tables can be created via System Definition > Tables or the 'Tables & Columns' viewer.",
    is_active: true,
    choices: [
      { id: "C", text: "Tables", is_correct: true },
      { id: "D", text: "Tables & Columns", is_correct: true },
      { id: "A", text: "Dictionary", is_correct: false },
      { id: "B", text: "Schema Map", is_correct: false }
    ]
  },
  {
    id: "D3-236",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which describes the primary operations performed against tables in ServiceNow?",
    explanation: "The core operations are CRUD: Create, Read, Update (Write), and Delete.",
    is_active: true,
    choices: [
      { id: "A", text: "Create, Read, Upload, Delete", is_correct: false },
      { id: "B", text: "Capture, Rate, Write, Develop", is_correct: false },
      { id: "C", text: "Create, Rate, Update, Delete", is_correct: false },
      { id: "D", text: "Create, Read, Write, Delete", is_correct: true }
    ]
  },
  {
    id: "D3-238",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which utility allows an agent to trace from an service to supporting CIs with active issues?",
    explanation: "The CI Dependency View shows relationships and the health status of related configuration items.",
    is_active: true,
    choices: [
      { id: "A", text: "CI Dependency View", is_correct: true },
      { id: "B", text: "Event Management Homepage", is_correct: false },
      { id: "C", text: "Service Dashboard", is_correct: false },
      { id: "D", text: "CI Health Dashboard", is_correct: false }
    ]
  },
  {
    id: "D3-242",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Short Description should be mandatory and Incident numbers read only on Insert. Which policy?",
    explanation: "Data Policy enforces these field requirements at the server level for all entry methods.",
    is_active: true,
    choices: [
      { id: "A", text: "Data Quality Policy", is_correct: false },
      { id: "B", text: "Dictionary Design Policy", is_correct: false },
      { id: "C", text: "Data Policy", is_correct: true },
      { id: "D", text: "Field Criteria Policy", is_correct: false }
    ]
  },
  {
    id: "D3-252",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "How would you distinguish between a Base Class table and a Parent Class table?",
    explanation: "A Base Class is the top-most table in a hierarchy (not extended from any other). A Parent table is any table that has children extending it.",
    is_active: true,
    choices: [
      { id: "A", text: "Extended tables are always from Parent tables", is_correct: false },
      { id: "B", text: "Extended tables cannot be from both", is_correct: false },
      { id: "C", text: "Base Class tables always have children", is_correct: false },
      { id: "D", text: "Base Class table is not extended from another table, Parent class tables may be extended from another table", is_correct: true }
    ]
  },
  {
    id: "D3-253",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "When a custom table is created, which access control rules are automatically created? (Choose four.)",
    explanation: "ServiceNow automatically generates standard CRUD ACLs (Create, Read, Write, Delete) for new tables.",
    is_active: true,
    choices: [
      { id: "A", text: "create", is_correct: true },
      { id: "B", text: "delete", is_correct: true },
      { id: "E", text: "read", is_correct: true },
      { id: "F", text: "write", is_correct: true },
      { id: "C", text: "execute", is_correct: false }
    ]
  },
  {
    id: "D3-255",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "When building an extended table from a base table, which fields do you need to create? (Choose two.)",
    explanation: "You only need to define fields that are specific to the new child table and not already present in the parent.",
    is_active: true,
    choices: [
      { id: "A", text: "The fields that are not in the base table.", is_correct: true },
      { id: "C", text: "The fields that are specific to the extended table.", is_correct: true },
      { id: "B", text: "The mandatory fields for the base table.", is_correct: false },
      { id: "D", text: "The reference fields for the base table", is_correct: false }
    ]
  },
  {
    id: "D3-257",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "As administrator, what must you do to access features of High Security Settings?",
    explanation: "High Security features require the administrator to manually 'Elevate Roles' to 'security_admin' for the session.",
    is_active: true,
    choices: [
      { id: "A", text: "Impersonate Security Admin", is_correct: false },
      { id: "B", text: "Select Elevate Roles", is_correct: true },
      { id: "C", text: "Add security_admin role to account", is_correct: false },
      { id: "D", text: "Use Elevate Roles module", is_correct: false }
    ]
  },
  {
    id: "D3-259",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "How would you navigate to the Schema map for a table?",
    explanation: "Navigate to System Definition > Tables, open the table record, and use the 'Show Schema Map' related link.",
    is_active: true,
    choices: [
      { id: "A", text: "System Definition > Tables; Select Table; Related links > Show Schema Map", is_correct: true },
      { id: "B", text: "System Dictionary > Show Schema Map", is_correct: false },
      { id: "C", text: "System Definition > Show Schema Map", is_correct: false },
      { id: "D", text: "System Definition > Dictionary; Related links", is_correct: false }
    ]
  },
  {
    id: "D3-260",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which is the base table of the configuration management database hierarchy?",
    explanation: "The absolute root table of the CMDB hierarchy is the 'cmdb' table.",
    is_active: true,
    choices: [
      { id: "A", text: "cmdb_ci", is_correct: false },
      { id: "B", text: "cmdb", is_correct: true },
      { id: "C", text: "cmdb_rel_ci", is_correct: false },
      { id: "D", text: "ucmdb", is_correct: false }
    ]
  },
  {
    id: "D3-261",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which best describes a field in a ServiceNow table?",
    explanation: "A field is a single cell within a database record that stores a specific piece of data.",
    is_active: true,
    choices: [
      { id: "A", text: "A field is a table row.", is_correct: false },
      { id: "B", text: "A field is an item in a menu list.", is_correct: false },
      { id: "C", text: "A field is a table cell that stores data.", is_correct: true },
      { id: "D", text: "A field is a record in a table.", is_correct: false }
    ]
  },
  {
    id: "D3-269",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Track infrastructure supporting eCommerce service. What ServiceNow products support this? (Choose three.)",
    explanation: "CMDB stores CI data, Discovery finds the hardware, and Service Mapping connects it to a Business Service.",
    is_active: true,
    choices: [
      { id: "B", text: "Discovery", is_correct: true },
      { id: "C", text: "Configuration Management (CMDB)", is_correct: true },
      { id: "D", text: "Service Mapping", is_correct: true },
      { id: "A", text: "Asset Management", is_correct: false },
      { id: "E", text: "Performance Analytics", is_correct: false }
    ]
  },
  {
    id: "D3-270",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Task -> Incident -> Super Incident. Identify Parent, Child, and Base tables. (Choose five.)",
    explanation: "Task is the Base and a Parent. Incident is a Child of Task and Parent of Super Incident. Super Incident is a Child.",
    is_active: true,
    choices: [
      { id: "B", text: "Incident table is a Child table", is_correct: true },
      { id: "F", text: "Incident table is a Parent table", is_correct: true },
      { id: "G", text: "Super Incident table is a Child table", is_correct: true },
      { id: "H", text: "Task table is a Parent table", is_correct: true },
      { id: "I", text: "Task table is a Base table", is_correct: true }
    ]
  },
  {
    id: "D3-273",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "When selecting Target table for import, which can you select? (Choose three.)",
    explanation: "You can import into any Global scope table, application scope table, or tables allowing cross-app writes.",
    is_active: true,
    choices: [
      { id: "B", text: "Tables within the global scope", is_correct: true },
      { id: "D", text: "Tables which allow write access to other applications", is_correct: true },
      { id: "E", text: "Tables within the existing application scope", is_correct: true },
      { id: "A", text: "Tables outside of ServiceNow", is_correct: false }
    ]
  },
  {
    id: "D3-274",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "What are ways you can set permissions on a Table in ACLs? (Choose three.)",
    explanation: "ACL permissions are defined by Roles, Conditional expressions, or Advanced scripts.",
    is_active: true,
    choices: [
      { id: "A", text: "Conditional Expressions", is_correct: true },
      { id: "B", text: "Roles", is_correct: true },
      { id: "D", text: "Script that sets the answer variable", is_correct: true },
      { id: "C", text: "CRUD", is_correct: false },
      { id: "E", text: "Groups", is_correct: false }
    ]
  },
  {
    id: "D3-275",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What tool is used to import data and map it into ServiceNow tables?",
    explanation: "The System Import Set utility is used for importing and mapping data.",
    is_active: true,
    choices: [
      { id: "A", text: "Transform Set", is_correct: false },
      { id: "B", text: "Data Pack", is_correct: false },
      { id: "C", text: "Update Set", is_correct: false },
      { id: "D", text: "Import Set", is_correct: true }
    ]
  },
  {
    id: "D3-276",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Where does a policy that is applied to all data (UI, Import, Web Services) run by default?",
    explanation: "Data Policies run on the Server to ensure enforcement regardless of the source of data entry.",
    is_active: true,
    choices: [
      { id: "A", text: "Client", is_correct: false },
      { id: "B", text: "Network", is_correct: false },
      { id: "C", text: "Browser", is_correct: false },
      { id: "D", text: "Server", is_correct: true }
    ]
  },
  {
    id: "D3-278",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "How would you describe the relationship between the Incident and Task table?",
    explanation: "The Incident table extends the Task table, inheriting its fields and behavior.",
    is_active: true,
    choices: [
      { id: "A", text: "One to many relationship", is_correct: false },
      { id: "B", text: "Incident table is extended from Task table", is_correct: true },
      { id: "C", text: "Related via the INC number", is_correct: false },
      { id: "D", text: "Many to many relationship", is_correct: false }
    ]
  },
  {
    id: "D3-282",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Ensures data consistency while importing data using import sets. (Choose two.)",
    explanation: "Data Policies (server-side) and Business Rules are the primary ways to enforce data consistency during imports.",
    is_active: true,
    choices: [
      { id: "B", text: "Data Policy", is_correct: true },
      { id: "C", text: "Business Rule", is_correct: true },
      { id: "A", text: "UI Policy", is_correct: false },
      { id: "E", text: "CSDM", is_correct: false }
    ]
  },
  {
    id: "D3-285",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which property is set to true to see impersonation events in the System Log?",
    explanation: "The property glide.sys.log_impersonation controls the logging of impersonation starts and ends.",
    is_active: true,
    choices: [
      { id: "A", text: "glide.sys.all_impersonation", is_correct: false },
      { id: "D", text: "glide.sys.log_impersonation", is_correct: true },
      { id: "C", text: "glide.impersonation_setting", is_correct: false },
      { id: "E", text: "glide.sys.admin_login", is_correct: false }
    ]
  },
  {
    id: "D3-290",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What component of ServiceNow defines every table and field in the system?",
    explanation: "The Dictionary (sys_dictionary) contains metadata about all tables and fields.",
    is_active: true,
    choices: [
      { id: "A", text: "Schema", is_correct: false },
      { id: "B", text: "Field Map", is_correct: false },
      { id: "C", text: "Table Class Manager", is_correct: false },
      { id: "D", text: "Dictionary", is_correct: true }
    ]
  },
  {
    id: "D3-297",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which admin role is required to make changes to High Security Settings?",
    explanation: "The 'security_admin' role is required for high security tasks like modifying ACLs or system security properties.",
    is_active: true,
    choices: [
      { id: "A", text: "high_sec_admin", is_correct: false },
      { id: "B", text: "sn_acl_admin", is_correct: false },
      { id: "D", text: "security_admin", is_correct: true },
      { id: "C", text: "admin", is_correct: false }
    ]
  },
  {
    id: "D3-298",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "What is the most common role that has access to almost all platform features?",
    explanation: "The 'admin' role is the standard super-user role in ServiceNow.",
    is_active: true,
    choices: [
      { id: "A", text: "Super User [sn_super_user]", is_correct: false },
      { id: "B", text: "Security Admin [securty_admin]", is_correct: false },
      { id: "C", text: "System Administrator [admin]", is_correct: true },
      { id: "E", text: "System Manager [sys_manager]", is_correct: false }
    ]
  },
  {
    id: "D3-299",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When moving multiple update sets at one time, facilitate the move via:",
    explanation: "Batching organizes multiple update sets into a parent-child structure for easier migration.",
    is_active: true,
    choices: [
      { id: "A", text: "Preview", is_correct: false },
      { id: "B", text: "Batch", is_correct: true },
      { id: "C", text: "List", is_correct: false },
      { id: "D", text: "Map", is_correct: false }
    ]
  },
  {
    id: "D3-304",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Security rules defined to restrict viewing and interacting with data are called:",
    explanation: "Access Control Rules (ACLs) manage data visibility and interaction permissions.",
    is_active: true,
    choices: [
      { id: "A", text: "CRUD Rules", is_correct: false },
      { id: "B", text: "Access Control Rules", is_correct: true },
      { id: "C", text: "Role Assignment Rules", is_correct: false },
      { id: "E", text: "User Authentication Rules", is_correct: false }
    ]
  },
  {
    id: "D3-309",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "When moving a homepage or dashboard between instances:",
    explanation: "Homepages and Dashboards are not captured by default and must be manually added to an update set.",
    is_active: true,
    choices: [
      { id: "A", text: "Download as PDF", is_correct: false },
      { id: "B", text: "They cannot be moved", is_correct: false },
      { id: "D", text: "Manually add them to the update set", is_correct: true },
      { id: "E", text: "They are automatically added", is_correct: false }
    ]
  },
  {
    id: "D3-312",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Trace the connection from infrastructure item to dependent Services via:",
    explanation: "Relationships (managed in cmdb_rel_ci) define the linkage between items in the CMDB.",
    is_active: true,
    choices: [
      { id: "A", text: "Automapping Utility", is_correct: false },
      { id: "B", text: "Relationships or Service Mapping", is_correct: true },
      { id: "C", text: "Service Tracer", is_correct: false },
      { id: "D", text: "Transform Map", is_correct: false }
    ]
  },
  {
    id: "D3-314",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Component that needs to be managed in order to deliver services:",
    explanation: "This is the core definition of a Configuration Item (CI).",
    is_active: true,
    choices: [
      { id: "A", text: "Configuration Item", is_correct: true },
      { id: "B", text: "Asset", is_correct: false },
      { id: "C", text: "Catalog Items", is_correct: false },
      { id: "E", text: "Service Offerings", is_correct: false }
    ]
  },
  {
    id: "D3-318",
    domain_id: 3,
    type: QuestionType.MULTI_SELECT,
    text: "Tables can be characterized in multiple ways. Which combination is impossible?",
    explanation: "A table is either Core (Out-of-the-Box) or Custom. It cannot be both.",
    is_active: true,
    choices: [
      { id: "A", text: "Custom and core", is_correct: true },
      { id: "B", text: "Parent and child", is_correct: false },
      { id: "C", text: "Base and parent", is_correct: false },
      { id: "D", text: "Custom and parent", is_correct: false }
    ]
  },
  {
    id: "D3-320",
    domain_id: 3,
    type: QuestionType.MCQ,
    text: "Which framework can be used to manage the tables and CIs associated with a use case?",
    explanation: "The CSDM (Common Service Data Model) provides the framework for CI use-case modeling.",
    is_active: true,
    choices: [
      { id: "A", text: "Common Service Data Model (CSDM) product view", is_correct: true },
      { id: "B", text: "CMDB Use Case Modeler", is_correct: false },
      { id: "C", text: "CI Use Case Modeler", is_correct: false },
      { id: "D", text: "Scenario Dashboard", is_correct: false }
    ]
  }
];
