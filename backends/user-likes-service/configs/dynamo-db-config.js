require('dotenv').config();

const awsConfig = {
    "region": process.env.AWS_REGION,
    "endpoint": process.env.AWS_DYNAMODB_ENDPOINT,
    "accessKeyId": process.env.AWS_ACCESS_KEY,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS
};

const AWS = require("aws-sdk");
AWS.config.update(awsConfig);

const db = new AWS.DynamoDB.DocumentClient();
const TABLE = process.env.AWS_DYNAMODB_TABLE_NAME

module.exports = { db, TABLE };