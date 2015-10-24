'use strict';

let path = require('path');

module.exports = function() {
  global.use = function(name) {
    return require(path.normalize(`${__dirname}/../${name}`));
  };
};