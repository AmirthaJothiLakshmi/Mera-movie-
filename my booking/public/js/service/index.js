'use strict';

var app = require('angular').module('movieApp');

app.service('MovieList', require('./movie-list-service'));
app.service('TodoService', require('./todos'));
