'use strict';

/**
 * /app.js
 *
 * @file Entry point into the matrix
 * @author Sergey S Petrenko <spetrenko@me.com>
 */


// use() is a utility function helps me
// to require() modules from project root.
require('./app/utils/use.js')();

// initialize log environment based on winstonjs
let log = require('./app/utils/log.js');

log.info('Starting application...');

let express       = require('express');
let http          = require('http');

let Router        = use('Router');
let app           = express();
let server        = http.createServer(app);

// globalizing application and log-handler.
// (its not good practice but really useful, we're sorry)
app.log = log;
global.app = app;

app.intl          = use('Intl');

use('ViewToolkit');

require('./config/middleware')(app, express);


Router.forEach(route => {
 app.use(route.path, route.handler);
});

app.use((req, res, next) => {

  app.log.error("We got 404", {
    url: req.originalUrl,
    ipAddr: req.ip,
    hostname: req.hostname

  });

  res.status(404);
  res.render('error', {
    title: 'Page introuvable !',
  });
});

server.listen(8001);

app.log.info('Server started on localhost:8001');
