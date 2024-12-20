import{_ as o,c as r,a1 as e,b as s,w as i,a2 as d,B as c,o as a,G as l,a as g}from"./chunks/framework.htKiKLP0.js";const b=JSON.parse('{"title":"Database Schema","description":"","frontmatter":{},"headers":[],"relativePath":"database_schema.md","filePath":"database_schema.md"}'),m={name:"database_schema.md"};function h(u,t,y,p,f,_){const n=c("Mermaid");return a(),r("div",null,[t[1]||(t[1]=e('<h1 id="database-schema" tabindex="-1">Database Schema <a class="header-anchor" href="#database-schema" aria-label="Permalink to &quot;Database Schema&quot;">​</a></h1><p>This document provides an overview of the database schema for the system, including descriptions of each entity and its properties, a relational database diagram, and a summary table of the components, required data, retrieval methods, and any necessary calculations. Additionally, this platform has the flexibility to integrate further data sources for enhanced functionality.</p><h2 id="future-data-sources" tabindex="-1">Future Data Sources <a class="header-anchor" href="#future-data-sources" aria-label="Permalink to &quot;Future Data Sources&quot;">​</a></h2><p>As the platform evolves, integrating additional data sources could enrich analytics, improve operational insights, and support more advanced forecasting. Potential data sources include:</p><ol><li><p><strong>Weather and Environmental Data</strong><br> Integrating real-time weather and environmental data could enhance sensor analysis (e.g., correlating temperature and humidity with facility data), allowing for predictive maintenance in response to environmental factors.</p></li><li><p><strong>Historical Claims Data</strong><br> External claims data could provide more accuracy in predictive modeling by enabling the platform to benchmark and identify claim trends across different types of facilities or regions.</p></li><li><p><strong>Financial Data</strong><br> Including financial data sources (e.g., operating costs, utility expenses) could enable more detailed analyses, such as cost-saving projections from risk mitigation efforts or sensor-based efficiency.</p></li><li><p><strong>Asset Health Monitoring</strong><br> Integrating data from IoT systems dedicated to asset monitoring (e.g., HVAC systems, electrical infrastructure) would allow for deeper insights into asset-specific risks, predictive maintenance needs, and operational longevity.</p></li><li><p><strong>Energy Consumption Data</strong><br> Data on energy consumption could be linked with sensor data and facility operations, supporting analyses on energy savings, efficiency, and the impact of maintenance tasks on consumption.</p></li></ol><p>Below is the updated markdown reflecting the new schema with the <strong>Company</strong> and <strong>User</strong> entities, as well as the updated associations to <code>company_id</code> across all entities and the additional fields for <strong>Claim Data</strong>.</p><h2 id="entity-descriptions" tabindex="-1">Entity Descriptions <a class="header-anchor" href="#entity-descriptions" aria-label="Permalink to &quot;Entity Descriptions&quot;">​</a></h2><h3 id="_1-company" tabindex="-1">1. <strong>Company</strong> <a class="header-anchor" href="#_1-company" aria-label="Permalink to &quot;1. **Company**&quot;">​</a></h3><blockquote><p>The <strong>Company</strong> entity represents an organization, which can be either a client or an insurer. Insurers may have a list of client companies they insure, and both types have associated staff (users).</p></blockquote><ul><li><strong>company_id</strong>: Unique identifier for the company (Primary Key).</li><li><strong>company_name</strong>: Name of the company.</li><li><strong>type</strong>: Company type, either <code>insurer</code> or <code>client</code>.</li><li><strong>clients</strong>: An array of company IDs representing the clients if this company is an insurer. Optional field.</li><li><strong>company_description</strong>: A brief description of the company.</li><li><strong>company_staff</strong>: An array of user IDs representing the staff (users) associated with this company.</li></ul><h3 id="_2-user" tabindex="-1">2. <strong>User</strong> <a class="header-anchor" href="#_2-user" aria-label="Permalink to &quot;2. **User**&quot;">​</a></h3><blockquote><p>The <strong>User</strong> entity contains information about users who are associated with a company. Each user belongs to exactly one company.</p></blockquote><ul><li><strong>user_id</strong>: Unique identifier for the user (Primary Key).</li><li><strong>email</strong>: The user’s email address.</li><li><strong>company_id</strong>: Identifier linking the user to a specific company (Foreign Key).</li><li><strong>first_name</strong>: The user’s first name.</li><li><strong>last_name</strong>: The user’s last name.</li><li><strong>middle_name</strong>: The user’s middle name (optional).</li><li><strong>title</strong>: A salutation or title, such as <code>Mr</code>, <code>Mrs</code>, <code>Dr</code>, or <code>Mdm</code>.</li></ul><h3 id="_3-facilities" tabindex="-1">3. <strong>Facilities</strong> <a class="header-anchor" href="#_3-facilities" aria-label="Permalink to &quot;3. **Facilities**&quot;">​</a></h3><blockquote><p>The <strong>Facilities</strong> entity holds information about the various facilities managed, such as warehouses or distribution centers. Facilities belong to a <strong>client</strong> company.</p></blockquote><ul><li><strong>facility_id</strong>: Unique identifier for each facility (Primary Key).</li><li><strong>facility_name</strong>: The name of the facility.</li><li><strong>company_id</strong>: Identifier linking the facility to the company that owns it (Foreign Key; must be a client company).</li><li><strong>location</strong>: Geographical location of the facility.</li><li><strong>status</strong>: Current operational status of the facility (<code>closed</code>, <code>maintenance</code>, <code>operational</code>).</li><li><strong>manager_name</strong>: Name of the manager in charge of the facility.</li><li><strong>digital_twin_status</strong>: Boolean indicating if a digital twin exists for the facility.</li><li><strong>digital_twin_link</strong>: URL linking to the digital twin resource of the facility.</li><li><strong>risk_level</strong>: Current risk level of the facility (<code>none</code>, <code>low</code>, <code>medium</code>, <code>high</code>).</li><li><strong>facility_size</strong>: Size of the facility in square meters.</li><li><strong>facility_type</strong>: Type of the facility (e.g., <code>Warehouse</code>).</li><li><strong>facility_description</strong>: Description of the facility.</li><li><strong>number_of_employees</strong>: Number of employees working at the facility.</li><li><strong>last_maintenance_date</strong>: Unix timestamp of the last maintenance activity.</li></ul><h3 id="_4-sensors-data" tabindex="-1">4. <strong>Sensors Data</strong> <a class="header-anchor" href="#_4-sensors-data" aria-label="Permalink to &quot;4. **Sensors Data**&quot;">​</a></h3><blockquote><p>The <strong>Sensors Data</strong> entity stores information about sensors deployed at facilities. Each sensor is associated with a facility and a company.</p></blockquote><ul><li><strong>sensor_id</strong>: Unique identifier for each sensor (Primary Key).</li><li><strong>facility_id</strong>: Identifier linking the sensor to a specific facility (Foreign Key).</li><li><strong>company_id</strong>: Identifier linking the sensor to the same company as the facility (Foreign Key).</li><li><strong>deployment_date</strong>: Unix timestamp or date of when the sensor was deployed.</li><li><strong>expense</strong>: Cost incurred for the sensor in dollars.</li><li><strong>status</strong>: Boolean indicating the operational status of the sensor.</li><li><strong>sensor_type</strong>: Type of the sensor (e.g., <code>Temperature Sensor</code>).</li><li><strong>sensor_unit</strong>: Unit in which the sensor measures (e.g., <code>Celsius</code>).</li><li><strong>sensor_location</strong>: Specific location within the facility where the sensor is installed.</li><li><strong>sensor_description</strong>: Additional information describing the purpose of the sensor.</li><li><strong>expected_lifespan</strong>: Expected lifespan of the sensor in months.</li><li><strong>calibration_date</strong>: Unix timestamp or date of the last calibration.</li></ul><h3 id="_5-sensor-data" tabindex="-1">5. <strong>Sensor Data</strong> <a class="header-anchor" href="#_5-sensor-data" aria-label="Permalink to &quot;5. **Sensor Data**&quot;">​</a></h3><blockquote><p>The <strong>Sensor Data</strong> entity contains time-series data collected from sensors.</p></blockquote><ul><li><strong>value</strong>: Recorded value from the sensor.</li><li><strong>ts</strong>: Unix timestamp when the data was recorded.</li><li><strong>sensor_id</strong>: Unique identifier for the sensor that generated the data (Foreign Key).</li><li><strong>sensor_type</strong>: Type of the sensor that provided the value.</li><li><strong>anomaly_flag</strong>: Boolean indicating if the data value is anomalous.</li></ul><h3 id="_6-risk-data" tabindex="-1">6. <strong>Risk Data</strong> <a class="header-anchor" href="#_6-risk-data" aria-label="Permalink to &quot;6. **Risk Data**&quot;">​</a></h3><blockquote><p>The <strong>Risk Data</strong> entity captures identified risks in facilities, including severity and mitigation information.</p></blockquote><ul><li><strong>risk_id</strong>: Unique identifier for each risk (Primary Key).</li><li><strong>facility_id</strong>: Identifier linking the risk to a specific facility (Foreign Key).</li><li><strong>company_id</strong>: Identifier linking the risk to the company that owns the facility (Foreign Key).</li><li><strong>check_id</strong>: Identifier for a related safety check, if applicable.</li><li><strong>severity</strong>: Severity level of the risk (<code>low</code>, <code>medium</code>, <code>high</code>).</li><li><strong>risk_type</strong>: Type of risk identified (e.g., <code>Fire Hazard</code>).</li><li><strong>date_of_discovery</strong>: Unix timestamp or date of when the risk was discovered.</li><li><strong>mitigation_status</strong>: Status of mitigation (<code>not mitigated</code>, <code>mitigating</code>, <code>mitigated</code>, <code>avoided</code>).</li><li><strong>estimated_cost_impact</strong>: Estimated financial impact of the risk in dollars.</li><li><strong>related_sensors</strong>: Array of sensor IDs related to the risk.</li><li><strong>risk_description</strong>: Description of the risk.</li></ul><h3 id="_7-risk-type" tabindex="-1">7. <strong>Risk Type</strong> <a class="header-anchor" href="#_7-risk-type" aria-label="Permalink to &quot;7. **Risk Type**&quot;">​</a></h3><blockquote><p>The <strong>Risk Type</strong> entity contains standardized risk types.</p></blockquote><ul><li><strong>risk_type</strong>: Name of the risk type (Primary Key).</li><li><strong>description</strong>: Description of the risk type.</li></ul><h3 id="_8-claim-data" tabindex="-1">8. <strong>Claim Data</strong> <a class="header-anchor" href="#_8-claim-data" aria-label="Permalink to &quot;8. **Claim Data**&quot;">​</a></h3><blockquote><p>The <strong>Claim Data</strong> entity tracks claims made due to incidents or risks. Each claim involves a claimant (client company) and an insurer company.</p></blockquote><ul><li><strong>claim_id</strong>: Unique identifier for each claim (Primary Key).</li><li><strong>facility_id</strong>: Identifier linking the claim to a specific facility (Foreign Key).</li><li><strong>company_id</strong>: Identifier linking the claim to the company that owns the facility (Foreign Key; typically the claimant’s company).</li><li><strong>claimant_company_id</strong>: Identifier of the company making the claim (Foreign Key; must be a client company).</li><li><strong>insurer_company_id</strong>: Identifier of the insurer company handling the claim (Foreign Key; must be an insurer company).</li><li><strong>incident_id</strong>: Identifier linking the claim to a specific incident, if applicable.</li><li><strong>risk_id</strong>: Identifier linking the claim to a specific risk, if applicable.</li><li><strong>actual_claim_amount</strong>: Actual amount claimed in dollars.</li><li><strong>predicted_claim_amount</strong>: Predicted claim amount in dollars.</li><li><strong>date</strong>: Unix timestamp or date of the claim.</li><li><strong>claim_category</strong>: Category of the claim (e.g., <code>Property Damage</code>).</li></ul><h3 id="_9-incident-data" tabindex="-1">9. <strong>Incident Data</strong> <a class="header-anchor" href="#_9-incident-data" aria-label="Permalink to &quot;9. **Incident Data**&quot;">​</a></h3><blockquote><p>The <strong>Incident Data</strong> entity contains information about incidents that occurred at facilities.</p></blockquote><ul><li><strong>incident_id</strong>: Unique identifier for each incident (Primary Key).</li><li><strong>facility_id</strong>: Identifier linking the incident to a specific facility (Foreign Key).</li><li><strong>company_id</strong>: Identifier linking the incident to the company that owns the facility (Foreign Key).</li><li><strong>sensor_id</strong>: Identifier linking the incident to a sensor, if applicable.</li><li><strong>check_id</strong>: Identifier linking the incident to a safety check, if applicable.</li><li><strong>incident_type</strong>: Type of incident (e.g., <code>Equipment Failure</code>).</li><li><strong>severity</strong>: Severity level of the incident (<code>low</code>, <code>medium</code>, <code>high</code>).</li><li><strong>date</strong>: Unix timestamp or date when the incident occurred.</li><li><strong>detection_method</strong>: How the incident was detected (e.g., <code>Sensor Alert</code>).</li><li><strong>impact_area</strong>: Area within the facility impacted by the incident.</li></ul><h3 id="_10-safety-check-data" tabindex="-1">10. <strong>Safety Check Data</strong> <a class="header-anchor" href="#_10-safety-check-data" aria-label="Permalink to &quot;10. **Safety Check Data**&quot;">​</a></h3><blockquote><p>The <strong>Safety Check Data</strong> entity records the results of safety inspections conducted at facilities.</p></blockquote><ul><li><strong>check_id</strong>: Unique identifier for each safety check (Primary Key).</li><li><strong>facility_id</strong>: Identifier linking the safety check to a specific facility (Foreign Key).</li><li><strong>company_id</strong>: Identifier linking the safety check to the company that owns the facility (Foreign Key).</li><li><strong>inspector_name</strong>: Name of the inspector who conducted the safety check.</li><li><strong>inspection_type</strong>: Type of inspection conducted (e.g., <code>Fire Safety</code>).</li><li><strong>status</strong>: Current status of the safety check (<code>not done</code>, <code>in progress</code>, <code>completed</code>, <code>skipped</code>).</li><li><strong>date_of_check</strong>: Unix timestamp or date of when the safety check was conducted.</li><li><strong>non_conformance_count</strong>: Number of non-conformances identified during the safety check.</li><li><strong>follow_up_required</strong>: Boolean indicating if follow-up is required.</li></ul><h3 id="_11-maintenance-task-data" tabindex="-1">11. <strong>Maintenance Task Data</strong> <a class="header-anchor" href="#_11-maintenance-task-data" aria-label="Permalink to &quot;11. **Maintenance Task Data**&quot;">​</a></h3><blockquote><p>The <strong>Maintenance Task Data</strong> entity tracks maintenance tasks conducted at facilities, including related incidents and severity.</p></blockquote><ul><li><strong>task_id</strong>: Unique identifier for each maintenance task (Primary Key).</li><li><strong>facility_id</strong>: Identifier linking the task to a specific facility (Foreign Key).</li><li><strong>company_id</strong>: Identifier linking the maintenance task to the company that owns the facility (Foreign Key).</li><li><strong>risk_id</strong>: Identifier linking the task to a specific risk, if applicable.</li><li><strong>incident_id</strong>: Identifier linking the task to a specific incident, if applicable.</li><li><strong>check_id</strong>: Identifier linking the task to a safety check, if applicable.</li><li><strong>task_type</strong>: Type of maintenance task conducted (e.g., <code>Repair</code>, <code>Inspection</code>).</li><li><strong>incident</strong>: Incident details associated with the maintenance task.</li><li><strong>severity</strong>: Severity level of the maintenance task (<code>low</code>, <code>medium</code>, <code>high</code>).</li><li><strong>status</strong>: Current status of the maintenance task (<code>not done</code>, <code>in progress</code>, <code>completed</code>, <code>skipped</code>).</li><li><strong>date</strong>: Unix timestamp or date when the task was conducted.</li><li><strong>cost_estimation</strong>: Estimated cost for the maintenance task in dollars.</li></ul><h2 id="database-relational-diagram" tabindex="-1">Database Relational Diagram <a class="header-anchor" href="#database-relational-diagram" aria-label="Permalink to &quot;Database Relational Diagram&quot;">​</a></h2>',41)),(a(),s(d,null,{default:i(()=>[l(n,{id:"mermaid-653",class:"mermaid",graph:"erDiagram%0A%20%20%20%20Company%20%7B%0A%20%20%20%20%20%20%20%20number%20company_id%20PK%0A%20%20%20%20%20%20%20%20string%20company_name%0A%20%20%20%20%20%20%20%20string%20type%0A%20%20%20%20%20%20%20%20number%5B%5D%20clients%0A%20%20%20%20%20%20%20%20string%20company_description%0A%20%20%20%20%20%20%20%20number%5B%5D%20company_staff%0A%20%20%20%20%7D%0A%0A%20%20%20%20User%20%7B%0A%20%20%20%20%20%20%20%20number%20user_id%20PK%0A%20%20%20%20%20%20%20%20string%20email%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20string%20first_name%0A%20%20%20%20%20%20%20%20string%20last_name%0A%20%20%20%20%20%20%20%20string%20middle_name%0A%20%20%20%20%20%20%20%20string%20title%0A%20%20%20%20%7D%0A%0A%20%20%20%20Facility%20%7B%0A%20%20%20%20%20%20%20%20number%20facility_id%20PK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20string%20facility_name%0A%20%20%20%20%20%20%20%20string%20location%0A%20%20%20%20%20%20%20%20string%20status%0A%20%20%20%20%20%20%20%20string%20manager_name%0A%20%20%20%20%20%20%20%20boolean%20digital_twin_status%0A%20%20%20%20%20%20%20%20string%20digital_twin_link%0A%20%20%20%20%20%20%20%20string%20risk_level%0A%20%20%20%20%20%20%20%20number%20facility_size%0A%20%20%20%20%20%20%20%20string%20facility_type%0A%20%20%20%20%20%20%20%20string%20facility_description%0A%20%20%20%20%20%20%20%20number%20number_of_employees%0A%20%20%20%20%20%20%20%20number%20last_maintenance_date%0A%20%20%20%20%7D%0A%0A%20%20%20%20SensorsData%20%7B%0A%20%20%20%20%20%20%20%20number%20sensor_id%20PK%0A%20%20%20%20%20%20%20%20number%20facility_id%20FK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20date%20deployment_date%0A%20%20%20%20%20%20%20%20number%20expense%0A%20%20%20%20%20%20%20%20boolean%20status%0A%20%20%20%20%20%20%20%20string%20sensor_type%0A%20%20%20%20%20%20%20%20string%20sensor_unit%0A%20%20%20%20%20%20%20%20string%20sensor_location%0A%20%20%20%20%20%20%20%20string%20sensor_description%0A%20%20%20%20%20%20%20%20number%20expected_lifespan%0A%20%20%20%20%20%20%20%20date%20calibration_date%0A%20%20%20%20%7D%0A%0A%20%20%20%20SensorData%20%7B%0A%20%20%20%20%20%20%20%20number%20sensor_id%20FK%0A%20%20%20%20%20%20%20%20number%20value%0A%20%20%20%20%20%20%20%20number%20ts%0A%20%20%20%20%20%20%20%20string%20sensor_type%0A%20%20%20%20%20%20%20%20boolean%20anomaly_flag%0A%20%20%20%20%7D%0A%0A%20%20%20%20RiskData%20%7B%0A%20%20%20%20%20%20%20%20number%20risk_id%20PK%0A%20%20%20%20%20%20%20%20number%20facility_id%20FK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20number%20check_id%20FK%0A%20%20%20%20%20%20%20%20string%20severity%0A%20%20%20%20%20%20%20%20string%20risk_type%0A%20%20%20%20%20%20%20%20date%20date_of_discovery%0A%20%20%20%20%20%20%20%20string%20mitigation_status%0A%20%20%20%20%20%20%20%20number%20estimated_cost_impact%0A%20%20%20%20%20%20%20%20number%5B%5D%20related_sensors%20FK%0A%20%20%20%20%20%20%20%20string%20risk_description%0A%20%20%20%20%7D%0A%0A%20%20%20%20RiskType%20%7B%0A%20%20%20%20%20%20%20%20string%20risk_type%20PK%0A%20%20%20%20%20%20%20%20string%20description%0A%20%20%20%20%7D%0A%0A%20%20%20%20ClaimData%20%7B%0A%20%20%20%20%20%20%20%20number%20claim_id%20PK%0A%20%20%20%20%20%20%20%20number%20facility_id%20FK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20number%20claimant_company_id%20FK%0A%20%20%20%20%20%20%20%20number%20insurer_company_id%20FK%0A%20%20%20%20%20%20%20%20number%20incident_id%20FK%0A%20%20%20%20%20%20%20%20number%20risk_id%20FK%0A%20%20%20%20%20%20%20%20number%20actual_claim_amount%0A%20%20%20%20%20%20%20%20number%20predicted_claim_amount%0A%20%20%20%20%20%20%20%20date%20date%0A%20%20%20%20%20%20%20%20string%20claim_category%0A%20%20%20%20%7D%0A%0A%20%20%20%20IncidentData%20%7B%0A%20%20%20%20%20%20%20%20number%20incident_id%20PK%0A%20%20%20%20%20%20%20%20number%20facility_id%20FK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20number%20sensor_id%20FK%0A%20%20%20%20%20%20%20%20number%20check_id%20FK%0A%20%20%20%20%20%20%20%20string%20incident_type%0A%20%20%20%20%20%20%20%20string%20severity%0A%20%20%20%20%20%20%20%20date%20date%0A%20%20%20%20%20%20%20%20string%20detection_method%0A%20%20%20%20%20%20%20%20string%20impact_area%0A%20%20%20%20%7D%0A%0A%20%20%20%20SafetyCheckData%20%7B%0A%20%20%20%20%20%20%20%20number%20check_id%20PK%0A%20%20%20%20%20%20%20%20number%20facility_id%20FK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20string%20inspector_name%0A%20%20%20%20%20%20%20%20string%20inspection_type%0A%20%20%20%20%20%20%20%20string%20status%0A%20%20%20%20%20%20%20%20date%20date_of_check%0A%20%20%20%20%20%20%20%20number%20non_conformance_count%0A%20%20%20%20%20%20%20%20boolean%20follow_up_required%0A%20%20%20%20%7D%0A%0A%20%20%20%20MaintenanceTaskData%20%7B%0A%20%20%20%20%20%20%20%20number%20task_id%20PK%0A%20%20%20%20%20%20%20%20number%20facility_id%20FK%0A%20%20%20%20%20%20%20%20number%20company_id%20FK%0A%20%20%20%20%20%20%20%20number%20risk_id%20FK%0A%20%20%20%20%20%20%20%20number%20incident_id%20FK%0A%20%20%20%20%20%20%20%20number%20check_id%20FK%0A%20%20%20%20%20%20%20%20string%20task_type%0A%20%20%20%20%20%20%20%20string%20incident%0A%20%20%20%20%20%20%20%20string%20severity%0A%20%20%20%20%20%20%20%20string%20status%0A%20%20%20%20%20%20%20%20date%20date%0A%20%20%20%20%20%20%20%20number%20cost_estimation%0A%20%20%20%20%7D%0A%0A%20%20%20%20Company%20%7C%7C--o%7B%20User%20%3A%20%22employs%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20Facility%20%3A%20%22owns%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20SensorsData%20%3A%20%22responsible%20for%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20RiskData%20%3A%20%22faces%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20IncidentData%20%3A%20%22experiences%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20SafetyCheckData%20%3A%20%22undergoes%20checks%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20MaintenanceTaskData%20%3A%20%22manages%20tasks%22%0A%20%20%20%20Company%20%7C%7C--o%7B%20ClaimData%20%3A%20%22involved%20in%20claims%20(as%20claimant%20or%20insurer)%22%0A%0A%20%20%20%20Facility%20%7C%7C--o%7B%20SensorsData%20%3A%20%22has%22%0A%20%20%20%20Facility%20%7C%7C--o%7B%20RiskData%20%3A%20%22has%22%0A%20%20%20%20Facility%20%7C%7C--o%7B%20ClaimData%20%3A%20%22has%22%0A%20%20%20%20Facility%20%7C%7C--o%7B%20IncidentData%20%3A%20%22can%20have%20unexpected%22%0A%20%20%20%20Facility%20%7C%7C--o%7B%20SafetyCheckData%20%3A%20%22has%22%0A%20%20%20%20Facility%20%7C%7C--o%7B%20MaintenanceTaskData%20%3A%20%22has%22%0A%0A%20%20%20%20SensorsData%20%7C%7C--o%7B%20SensorData%20%3A%20%22records%20readings%22%0A%0A%20%20%20%20RiskData%20%7C%7C--%7C%7C%20RiskType%20%3A%20%22categorizes%22%0A%0A%20%20%20%20RiskData%20%7C%7C--o%7B%20ClaimData%20%3A%20%22claims%20may%20arise%20from%22%0A%20%20%20%20RiskData%20%7C%7C--o%7B%20IncidentData%20%3A%20%22incidents%20may%20be%20related%22%0A%20%20%20%20RiskData%20%7C%7C--o%7B%20MaintenanceTaskData%20%3A%20%22tasks%20may%20mitigate%22%0A%0A%20%20%20%20IncidentData%20%7C%7C--o%7B%20ClaimData%20%3A%20%22can%20generate%22%0A%20%20%20%20IncidentData%20%7C%7C--o%7B%20MaintenanceTaskData%20%3A%20%22can%20prompt%22%0A%0A%20%20%20%20SafetyCheckData%20%7C%7C--o%7B%20RiskData%20%3A%20%22discovers%20risks%22%0A%0A%20%20%20%20MaintenanceTaskData%20%7C%7C--o%7B%20RiskData%20%3A%20%22can%20mitigate%2Freduce%22%0A%0A%20%20%20%20ClaimData%20%7Do--%7C%7C%20Company%20%3A%20%22claimant_company_id%22%0A%20%20%20%20ClaimData%20%7Do--%7C%7C%20Company%20%3A%20%22insurer_company_id%22%0A"})]),fallback:i(()=>t[0]||(t[0]=[g(" Loading... ")])),_:1})),t[2]||(t[2]=e('<h1 id="not-updated-yet" tabindex="-1">NOT UPDATED YET <a class="header-anchor" href="#not-updated-yet" aria-label="Permalink to &quot;NOT UPDATED YET&quot;">​</a></h1><h2 id="component-summary-table" tabindex="-1">Component Summary Table <a class="header-anchor" href="#component-summary-table" aria-label="Permalink to &quot;Component Summary Table&quot;">​</a></h2><table><thead><tr><th><strong>Component</strong></th><th><strong>Data Required</strong></th><th><strong>Retrieval Method</strong></th><th><strong>Calculation (if required)</strong></th></tr></thead><tbody><tr><td><strong>Card: Numbers of Sensors Deployed</strong></td><td>- Number of Sensors Last Month<br>- Number of Sensors This Month</td><td>Calculated</td><td>Count <code>Sensor_ID</code> per <code>Facility_ID</code> filtered by deployment month</td></tr><tr><td><strong>Card: Number of Facilities Serviced</strong></td><td>- Facilities Serviced Last Month<br>- Facilities Serviced This Month</td><td>Calculated</td><td>Count <code>Facility_ID</code> with <code>Status = Operational</code> by month</td></tr><tr><td><strong>Card: Pending Alerts to Review</strong></td><td>- Alerts with Status Pending</td><td>Calculated from <code>RISKS</code></td><td>Count <code>Risk_ID</code> where <code>Mitigation_Status = Unaddressed</code></td></tr><tr><td><strong>Card: Risks Addressed This Week</strong></td><td>- Risks Addressed This Week</td><td>Calculated</td><td>Count <code>Risk_ID</code> where <code>Mitigation_Status = Addressed</code> within the current week</td></tr><tr><td><strong>Chart: Risks VS Actions</strong></td><td>- Number of Risks<br>- Number of Actions<br>- Month</td><td>Calculated</td><td>Count <code>Risk_ID</code> and associated <code>MAINTENANCE_TASKS</code> by month</td></tr><tr><td><strong>Chart: Claims</strong></td><td>- Predicted Claims<br>- Actual Claims<br>- Month</td><td>Calculated</td><td>Count <code>Claim_ID</code> where <code>Actual_Claim_Amount != 0</code> (Actual Claims) and <code>Actual_Claim_Amount == 0</code> (Predicted Claims) by month</td></tr><tr><td><strong>Chart: (Risks) Avoided VS Mitigated</strong></td><td>- Risks Avoided<br>- Risks Mitigated<br>- Month</td><td>Calculated</td><td>Count <code>Risk_ID</code> where <code>Mitigation_Status</code> is <code>Avoided</code> or <code>Mitigated</code>, grouped by month</td></tr><tr><td><strong>Chart: Trend of Inbound Sensor Data</strong></td><td>- Sensor Data (Value, Type, Unit)<br>- Time</td><td>Directly Retrieved from <code>SENSORS</code></td><td>N/A</td></tr><tr><td><strong>Chart: Monthly Claim Amount Saved ($)</strong></td><td>- Monthly Claim Amount Saved<br>- Month</td><td>Calculated</td><td>Sum (<code>Predicted_Claim_Amount</code> - <code>Actual_Claim_Amount</code>) by month</td></tr><tr><td><strong>Chart: Monthly Anomaly Trend</strong></td><td>- Total Number of Anomalies<br>- Month</td><td>Calculated</td><td>Count of <code>Incident_ID</code> by month where anomalies are flagged</td></tr><tr><td><strong>Chart: Sensor Savings VS Expenses</strong></td><td>- Savings per Sensor<br>- Expenses per Sensor</td><td>Calculated</td><td>For each sensor, compute <code>Predicted_Claim_Amount - Actual_Claim_Amount</code> vs <code>Expense</code></td></tr><tr><td><strong>Chart: Number of Sensor Kit in Each Facility</strong></td><td>- Number of Sensors in each Facility</td><td>Calculated</td><td>Count <code>Sensor_ID</code> per <code>Facility_ID</code></td></tr><tr><td><strong>Table: Recent Safety Checks</strong></td><td>- Inspector Name<br>- Inspection Type<br>- Status</td><td>Directly Retrieved from <code>SAFETY_CHECKS</code></td><td>N/A</td></tr><tr><td><strong>Table: Facilities</strong></td><td>- Facility Name<br>- Location<br>- Status<br>- Manager Name<br>- Digital Twin Status</td><td>Directly Retrieved from <code>FACILITIES</code></td><td>N/A</td></tr><tr><td><strong>Table: Maintenance Tasks</strong></td><td>- Task Type<br>- Incident<br>- Severity<br>- Status<br>- Date<br>- Facility</td><td>Directly Retrieved from <code>MAINTENANCE_TASKS</code></td><td>N/A</td></tr><tr><td><strong>Table: Recent Incidents</strong></td><td>- Incident Type<br>- Severity<br>- Status<br>- Date<br>- Facility</td><td>Directly Retrieved from <code>INCIDENTS</code></td><td>N/A</td></tr><tr><td><strong>Chart: Risk Distribution</strong></td><td>- Number of Risk<br>- Type of Risk</td><td>Calculated</td><td>Group <code>Risk_ID</code> by <code>Risk_Type</code> and count</td></tr></tbody></table>',3))])}const k=o(m,[["render",h]]);export{b as __pageData,k as default};
