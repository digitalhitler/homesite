'use strict';

/**
 * app/utils/log.js
 *
 * @file Utility file to bootstrap logging in application based on winstonjs
 * @author Sergey S Petrenko <spetrenko@me.com>
 */

// requiring all we need
let path    = require('path');
let fs      = require('fs');
let appDir  = path.dirname(require.main.filename);
let logDir  = appDir + '/logs';
let maxSize = 1024 * 1024;
let winston = require('winston');

// create /logs directory if its not present
if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

// transports configuration
// see https://github.com/winstonjs/winston for details
let mainLogger = new (winston.Logger)({
   exitOnError: false,
   transports: [
     // output to console
    new (winston.transports.Console)({
      handleExceptions: true,
      humanReadableUnhandledException: true
    }),

     // output everything to app.log
    new (winston.transports.File)({
      name: 'log-file',
      filename: logDir + '/app.log'
    }),

     // output errors only to error.log
    new (winston.transports.File)({
      name: 'error-file',
      filename: logDir + '/error.log',
      level: 'error'
    }),

  ],

  // output JS-exceptions to _separate_ file for easy error-solving:
  exceptionHandlers: [
      new winston.transports.File({
        filename: logDir + '/exceptions.log'
      })
    ]
 });

module.exports = mainLogger;
