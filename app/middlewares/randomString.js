'use strict';

module.exports = function(req, res, next) {
  console.log('randomString called');
  res.locals.randomString = "getrix";
  next();
};
