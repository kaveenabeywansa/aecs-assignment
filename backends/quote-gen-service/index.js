require('dotenv').config()
const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');
const portNo = process.env.DEFAULT_PORT_NO || 5002;

const app = express();
app.use(BodyParser.json());
app.use(cors());
app.listen(portNo, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Quote Generating Service Running in Port ' + portNo);
});