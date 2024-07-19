1- Create DynamoDb Table On AWS
------------------------------------
-> table name: serverless_app
-> partition key: email
-> object {email(string), name(string), phone(string), won(string)}
---------------------------------------------------------------------------------

2- Create Lambda Function
------------------------------------
-> Create IAM Role [Access DynamoDB{AmazonDynamoDBFullAccess, AWSLambdaDynamoDBExecutionRole, AWSLambdaInvocation-DynamoDB} , Create Logs On CloudWatch{CloudWatchLogsFull Access}]
-> apply: Put Item in DynamoDB Table
-> count: Get Items Count
-> draw: Choose Three Random Items and Mark Them as Winners
---------------------------------------------------------------------------------

3-  Create API Gateway
------------------------------------
-> Create Domain Name
-> Create Certificate for this Domain from ACM
-> Add Domain as Custom Domain Name to API Gateway
-> Create DNS a Record Link with API Endpoint
-> Alias to API Gateway
-> Custom Domain API Mapping
-> Connect Lambda Function to with API Gateway
---------------------------------------------------------------------------------

4- enable mutual TLS Authentication For API Gateway
---------------------------------------------------------------------------------

5- Host HTML Pages on S3 and CloudFront