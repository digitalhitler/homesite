'use strict';

/**
 middleware.js

 @file Middlewares for Express
 @author Sergey S Petrenko <spetrenko@me.com>
 */

let path           = require('path');
let session        = require('express-session');
let compression    = require('compression');

module.exports = function(app, express) {

  if (global.PROD_ENV) {
    app.use(compression());
  }

  /*
   * Use PUT / DELETE HTTP
   * app.use(methodOverride());
   **/

  app.use(session({
    secret: 'itsMySup3rS3cr3t',
    saveUninitialized: true,
    resave: true,
  }));

  /*
   * Views & templates
   */

  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view engine', 'ejs');
  app.use(express.static(path.join(__dirname, '../assets')));
};