'use strict';

/**
 {{}}

 @file {{}}
 @author Sergey S Petrenko <spetrenko@me.com>
 */


let db = use('Database');

let Post = db.model('Post', {
  date:     { type: Date, default: Date.now },
  visible:  { type: Boolean, default: true },
  category: { type: db.Schema.Types.ObjectId, ref: 'PostCategory' },
  tags:     [String],
  url:      String,
  title:    String,
  short:    String,
  body:     String,
});


module.exports = Post;
