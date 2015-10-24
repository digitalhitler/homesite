'use strict';

/**
 {{}}

 @file {{}}
 @author Sergey S Petrenko <spetrenko@me.com>
 */


let db = use('Database');


let PostCategorySchema = new db.Schema({

  title:     String,
  desc:      String,
  url:       String,
  image:     String,
  textColor: { type: String, default: 'black' },
  bgColor:   { type: String, default: 'transparent' },
  dropShadow:{ type: Boolean, default: true },

});

PostCategorySchema.statics.findByTitle = function(title, callback) {
  if (typeof title !== 'string') return false;
  else return this.findOne(
    {
      title: title
    }, callback);

};

let PostCategory = db.model('PostCategory', PostCategorySchema);

module.exports = PostCategory;
