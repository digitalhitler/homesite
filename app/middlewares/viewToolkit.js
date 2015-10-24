'use strict';

/**
 viewToolkit.js

 @file Set of tools for using inside ejs views
 @author Sergey S Petrenko <spetrenko@me.com>
 */


module.exports = function(req, res, next) {

  res.locals.t = function(key){
    return app.intl.t(key);
  };

  res.locals.getTitle = function(){
    return 'Default title — ' + app.intl.t('commons.myName');
  };

  next();
  
}
