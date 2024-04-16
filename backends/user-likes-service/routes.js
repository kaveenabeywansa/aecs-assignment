const express = require('express');
var Routes = express.Router();

const LikesRoutes = require('./routes/likes-router');

Routes.use('/likes/', LikesRoutes);

module.exports = Routes;