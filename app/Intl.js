'use strict';

/**
 {{}}

 @file {{}}
 @author Sergey S Petrenko <spetrenko@me.com>
 */

let i18n = require('i18next');

i18n.init({
  lng: 'en-US',
  debug: true
}, function(err, t) {

});

module.exports = i18n;