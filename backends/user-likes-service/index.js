require('dotenv').config();
const express = require('express');
const cors = require('cors');
const portNo = process.env.DEFAULT_PORT_NO || 5001;

const app = express();
app.use(cors());
app.listen(portNo, function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('User Like Service Running in Port ' + portNo);
});