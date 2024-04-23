const express = require('express');
var Routes = express.Router();

const QuotesRoutes = require('./routes/quotes-router');

Routes.use('/quotes/', QuotesRoutes);

module.exports = Routes;