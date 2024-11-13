# AWS Resource Naming Conventions

Establishing consistent naming conventions for AWS resources is essential for maintaining organization, governance, and ease of identification within cloud environments. This document provides a recommended AWS naming convention designed to improve standardization, facilitate efficient management, and promote maintainability across AWS environments.

## Goals

An effective naming convention should:

1. Follow a clear, well-defined schema that supports parsing and filtering.
2. Enable easy sorting and identification of resources.
3. Include key metadata like usage, environment, and location.
4. Conform to AWS-imposed constraints on character length and case.

## General Format

Our recommended format for AWS resource names is as follows:

```
<prefix>-<usage>-<env>-<resource>-<location>-<description>-<suffix>
```

| **Component**   | **Description**                                  | **Required** | **Constraints**    |
| --------------- | ------------------------------------------------ | ------------ | ------------------ |
| **prefix**      | Fixed prefix (e.g., company or department)       | No           | `[a-z][a-z0-9]{3}` |
| **usage**       | Project, workload, application, or general usage | Yes          | `[a-z0-9]{4,10}`   |
| **env**         | Environment (e.g., `dev`, `prod`, `stg`)         | Yes          | `[a-z]{1,5}`       |
| **resource**    | Resource type (e.g., `vpc`, `ec2`, `rds`)        | Yes          | `[a-z0-9]{1,12}`   |
| **location**    | Region + Availability Zone (e.g., `use1a`)       | No           | `[a-z0-9]{1,5}`    |
| **description** | Optional description for clarification           | No           | `[a-z0-9]{1,20}`   |
| **suffix**      | Optional random suffix for uniqueness            | No           | `[a-z0-9]{4}`      |

## Naming Components

### 1. Prefix (Optional)

Use an abbreviated identifier for the company or department if needed.

- **Example**: `avg-` for a fictional company, Average Inc.

### 2. Usage

Identify the purpose, workload, or application served by the resource.

- **Examples**: `ecommerce`, `shrsvcs`, `app`

### 3. Environment

Specify the environment with a short identifier.

- **Options** include `dev`, `qas`, `prd` for a concise three-letter format, or `dev`, `test`, `prod` for more explicit naming.

### 4. Resource Type

Use a short descriptor for the resource, matching AWS terminology as closely as possible.

- **Common examples**:
  - `vpc` for Virtual Private Cloud
  - `subnet` for Subnet
  - `ec2` for EC2 Instances
  - `rds` for Relational Database Service instances

### 5. Location (Optional)

Incorporate the region abbreviation and Availability Zone, if applicable.

- Use the Amazon S3 region abbreviations (e.g., `usw1a` for `us-west-1` Availability Zone `a`).

### 6. Description (Optional)

Use this field for additional details that improve context and readability.

- **Examples**: `primary`, `web`, `private`

### 7. Suffix (Optional)

Use a four-character suffix for uniqueness in case of naming conflicts, especially for resources requiring global uniqueness, like S3 buckets.

## AWS Resource Naming Examples

Below are examples of naming conventions for specific AWS services following this structure.

### IAM

IAM resources often follow camel case or descriptive naming.

- **IAM Role**: `<usage>-<env>-IAMRole-<purpose>`

  - Example: `ecommerce-prod-IAMRole-DataProcessing`
  - Example: `shrsvcs-dev-IAMRole-EC2InstanceAccess`

- **IAM Policy**: `<usage>-<env>-IAMPolicy-<purpose>`
  - Example: `analytics-stg-IAMPolicy-S3Access`
  - Example: `app-prod-IAMPolicy-DynamoDBFullAccess`

### DynamoDB

For DynamoDB tables, the convention captures the table’s usage, environment, and purpose.

- **DynamoDB Table**: `<usage>-<env>-dynamodb-<description>`
  - Example: `ecommerce-prod-dynamodb-orders`
  - Example: `analytics-dev-dynamodb-userMetrics`

### RDS (Relational Database Service)

RDS instance naming incorporates usage, environment, and database engine type.

- **RDS Instance**: `<usage>-<env>-rds-<engine>-<purpose>`

  - Example: `app-stg-rds-mysql-userdata`
  - Example: `hr-prod-rds-postgres-employeeRecords`

- **RDS Cluster**: `<usage>-<env>-rdscluster-<engine>-<purpose>`
  - Example: `ecommerce-prod-rdscluster-aurora-inventory`
  - Example: `app-dev-rdscluster-postgres-sessionData`

### Lambda

Lambda functions follow a format that includes usage, environment, and function purpose.

- **Lambda Function**: `<usage>-<env>-lambda-<purpose>`
  - Example: `ecommerce-dev-lambda-processOrder`
  - Example: `analytics-stg-lambda-aggregateData`

### Bedrock

AWS Bedrock-related naming conventions often include the model or project name.

- **Bedrock Model**: `<usage>-<env>-bedrock-<model>-<purpose>`
  - Example: `nlp-prod-bedrock-gpt-customerInsights`
  - Example: `ml-dev-bedrock-stable-diffusion-imageGen`

### S3

S3 bucket names must be globally unique. Using a company prefix and account ID (if necessary) is recommended.

- **S3 Bucket**: `<prefix>-<usage>-<env>-s3-<region>-<purpose>-<suffix>`
  - Example: `avg-ecommerce-prod-s3-usw1-images-111111111111`
  - Example: `hr-dev-s3-use1-employee-documents-222222222222`

### API Gateway

API Gateway naming follows usage and environment, and it may include a service or API type descriptor.

- **API Gateway**: `<usage>-<env>-apigw-<description>`
  - Example: `payment-prod-apigw-orderService`
  - Example: `social-dev-apigw-userProfile`

## Summary Table

| **Service** | **Resource Type** | **Example Naming Convention**                           | **Example**                                      |
| ----------- | ----------------- | ------------------------------------------------------- | ------------------------------------------------ |
| IAM         | Role              | `<usage>-<env>-IAMRole-<purpose>`                       | `ecommerce-prod-IAMRole-DataProcessing`          |
|             | Policy            | `<usage>-<env>-IAMPolicy-<purpose>`                     | `app-prod-IAMPolicy-DynamoDBFullAccess`          |
| DynamoDB    | Table             | `<usage>-<env>-dynamodb-<description>`                  | `ecommerce-prod-dynamodb-orders`                 |
| RDS         | Instance          | `<usage>-<env>-rds-<engine>-<purpose>`                  | `hr-prod-rds-postgres-employeeRecords`           |
|             | Cluster           | `<usage>-<env>-rdscluster-<engine>-<purpose>`           | `app-dev-rdscluster-postgres-sessionData`        |
| Lambda      | Function          | `<usage>-<env>-lambda-<purpose>`                        | `analytics-stg-lambda-aggregateData`             |
| Bedrock     | Model             | `<usage>-<env>-bedrock-<model>-<purpose>`               | `nlp-prod-bedrock-gpt-customerInsights`          |
| S3          | Bucket            | `<prefix>-<usage>-<env>-s3-<region>-<purpose>-<suffix>` | `avg-ecommerce-prod-s3-usw1-images-111111111111` |
| API Gateway | Gateway           | `<usage>-<env>-apigw-<description>`                     | `payment-prod-apigw-orderService`                |

## Special Cases

Certain AWS resources follow specific naming requirements that differ from the general convention:

1. **IAM Resources**:

   - AWS commonly uses camel case with descriptive names for IAM roles and policies.
   - **Example**: `IAMRoleForNetworkSecurity`

2. **CloudWatch Log Groups**:

   - CloudWatch uses a slash-separated naming pattern, e.g., `/aws/lambda/project-env-function`.
   - **Example**: `/aws/clientvpn/networking-prod-clientvpn-cac1`

3. **S3 Buckets**:
   - S3 bucket names must be globally unique, so use a prefix and/or suffix that ensures this.
   - **Example**: `avg-app-prod-s3-use1-assets-111111111111`

## Recommendations for Terraform

Terraform’s `null label` module can help generate consistent names and tags across resources. This module is cloud-agnostic and can be customized to reflect our naming convention.

## Conclusion

This naming convention provides a structured, maintainable approach to naming AWS resources. By following this convention, you’ll ensure that resources are easily identifiable, well-organized, and efficiently managed. Any deviations from this convention should be documented, especially for unique requirements or legacy resources, to keep governance and documentation cohesive.
