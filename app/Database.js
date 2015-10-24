'use strict';

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/getrixhome');

module.exports = mongoose;