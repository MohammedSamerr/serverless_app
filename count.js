import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event, context) => {
    console.log("---serverless_app---start-handler");
    console.log("---serverless_app---event", event);
    let TableName = "serverless_app";
    try {
        const command = new ScanCommand({
            TableName: TableName,
            Select: "COUNT"
        });
        
        const response = await client.send(command);

        console.log("---serverless_app---count", response);
        return response.Count;
    } catch (e) {
        console.log("---serverless_app---e", e);
        return e.message;
    }
};

