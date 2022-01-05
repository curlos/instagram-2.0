"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var db = require('./models');
db.sequelize.sync().then(function () {
    app.listen(3001, function () {
        console.log('Server running on port 3001');
    });
});
