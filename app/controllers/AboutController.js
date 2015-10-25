'use strict';

/**
 AboutController.js

 @file Controller for route: /about
 @author Sergey S Petrenko <spetrenko@me.com>
 */

module.exports = {
 index: {
  get(req, res) {
    res.render('aboutPage');
  },
 },
};
