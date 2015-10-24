'use strict';

/**
 Router.js

 @file Routing file
 @author Sergey S Petrenko <spetrenko@me.com>
 */

module.exports = [
  {
    path: '/',
    layout: 'pageWithSidebar',
    handler: use('routes/IndexRoute'),
  },
  //{
  // path: '/posts',
  // handler: use('routes/PostsListRoute'),
  //},
];
