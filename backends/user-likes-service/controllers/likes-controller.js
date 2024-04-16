// import { db, TABLE } from '../configs/dynamo-db-config';
const {db, TABLE} = require('../configs/dynamo-db-config');

let Controller = function () {
    // Create or Update users
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

    // Read all users
    this.readAllUsers = async () => {
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

    // Read Users by ID
    this.getUserById = async (value, key = 'user_id') => {
        const params = {
            TableName: TABLE,
            Key: {
                [key]: value
            }
        }
        try {
            console.log('params', params);
            const { Item = {} } = await db.get(params).promise()
            return { success: true, data: Item }
        } catch (error) {
            return { success: false, data: null }
        }
    }

    // Delete User by ID
    this.deleteUserById = async (value, key = 'user_id') => {
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