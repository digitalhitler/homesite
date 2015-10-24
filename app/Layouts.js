'use strict';

/**
 Layouts.js

 @file Layout middlewares
 @author Sergey S Petrenko <spetrenko@me.com>
 */

module.exports = {

  default: 'pageWithSidebar',

  pageWithSidebar: {
    requires: [
      'viewToolkit',
      'currentDate',
      'randomString'
    ]
  }
}
