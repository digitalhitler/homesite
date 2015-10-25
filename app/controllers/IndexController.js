'use strict';

/**
 IndexController.js

 @file Controller for route: /
 @author Sergey S Petrenko <spetrenko@me.com>
 */

module.exports = {
 index: {
  get(req, res) {

    let PostsController = require('../controllers/PostsController');

    PostsController.getPage(1, function(posts) {
      res.locals.posts = posts;
      res.render('indexPage');
    });
  },
 },
};
