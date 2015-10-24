'use strict';

module.exports = function(req, res, next) {
  res.locals.currentDate = new Date();
  next();
};
