'use strict';

/**
 viewToolkit.js

 @file Set of tools for using inside ejs views
 @author Sergey S Petrenko <spetrenko@me.com>
 */



module.exports = function(req, res, next) {

  app.moment = require('moment');

  res.locals.t = function(key){
    return app.intl.t(key);
  };

  res.locals.getTitle = function(){
    return 'Default title — ' + app.intl.t('commons.myName');
  };

  res.locals.relativeDate = function(absDate) {
    //@todo: get it from i18next
    let locale = 'en-US';

    let nowIs = app.moment().unix();
    //let comparedWith = app.moment(date);
    //
    // if (parseInt(nowIs) - parseInt(comparedWith) > 172 800) { // 48 hours
    //   return moment.fromNow();
    // } else {
    //   return moment.format('LLL');
    // }

    return absDate;
  }

  next();

}
