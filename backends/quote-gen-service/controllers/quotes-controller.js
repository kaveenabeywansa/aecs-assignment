const { db, TABLE } = require('../configs/dynamo-db-config');

let Controller = function () {
    // Create or Update
    this.createOrUpdate = async (data = {}) => {
        const params = {
            TableName: TABLE,
            Item: data
        }

        try {
            await db.put(params).promise()
            return { success: true }
        } catch (error) {
            return { success: false }
        }
    }

    // Read all
    this.readAll = async () => {
        const params = {
            TableName: TABLE
        }

        try {
            const { Items = [] } = await db.scan(params).promise()
            return { success: true, data: Items }

        } catch (error) {
            return { success: false, data: null }
        }

    }

    // Add Quote to User
    this.addQuoteToUser = async (username, body = {}) => {
        const { success, data } = await this.getByUserId(username);
        let newObjBody;
        if (success && data.user_id) {
            newObjBody = data;
        } else {
            newObjBody = {
                user_id: username
            };
        }

        if (!newObjBody.quotes) {
            newObjBody.quotes = [];
        }
        newObjBody.quotes.push(body.label);

        const params = {
            TableName: TABLE,
            Item: newObjBody
        }

        try {
            await db.put(params).promise();
            return { success: true };
        } catch (error) {
            return { success: false };
        }
    }

    // Read by ID
    this.getByUserId = async (value, key = 'user_id') => {
        const params = {
            TableName: TABLE,
            Key: {
                [key]: value
            }
        }
        try {
            const { Item = {} } = await db.get(params).promise()
            return { success: true, data: Item }
        } catch (error) {
            return { success: false, data: null }
        }
    }

    // Delete by ID
    this.deleteById = async (value, key = 'user_id') => {
        const params = {
            TableName: TABLE,
            Key: {
                [key]: parseInt(value)
            }
        }

        try {
            await db.delete(params).promise()
            return { success: true }

        } catch (error) {
            return { success: false }
        }
    }
};

module.exports = new Controller();