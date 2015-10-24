'use strict';

/**
 ViewToolkit.js

 @file Set of tools for using inside ejs views
 @author Sergey S Petrenko <spetrenko@me.com>
 */

app.locals.t = function(key){
  return app.intl.t(key);
};


app.locals.getTitle = function(){
  return 'Default title — ' + app.intl.t('commons.myName');
};