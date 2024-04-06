// TEST: Start
require('dotenv').config();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": process.env.AWS_REGION,
    "endpoint": process.env.AWS_DYNAMODB_ENDPOINT,
    "accessKeyId": process.env.AWS_ACCESS_KEY,
    "secretAccessKey": process.env.AWS_SECRET_ACCESS
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

//read
let fetchAll = () => {
    var params = {
        TableName: process.env.AWS_DYNAMODB_TABLE_NAME
    };
    docClient.scan(params, function (err, data) {
        if (err) {
            console.log("error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("success - " + JSON.stringify(data, null, 2));
        }
    })
};

// write
let save = function () {
    var input = {
        "user_id": "new_user" + new Date().getTime(),
        "likes": [
            "Testing 001",
            "Testing 002",
            "Testing 003"
        ]
    };
    var params = {
        TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
        Item: input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::save::success");
        }
    });
}

// update
let modify = function () {
    var params = {
        TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
        Key: {
            user_id: "testuser" 
        },
        UpdateExpression: "set likes = :likeList",
        ExpressionAttributeValues: {
            ":likeList": [
                "Updated by backend 01",
                "Updated by backend 02",
                "Updated by backend 03",
                "Updated by backend 04",
                "Updated by backend 05"
            ]
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            // console.log("users::update::error - " + JSON.stringify(err, null, 2));
            console.error(err);
            console.log(err.__type)
        } else {
            console.log("users::update::success " + JSON.stringify(data));
        }
    });
}

// read one
let fetchOneByKey = function () {
    var params = {
        TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
        Key: {
            "user_id": "testuser"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(data);
        }
    })
}

// exec Fns
// fetchAll();
// fetchOneByKey();
// save();
// modify();

// TEST: End