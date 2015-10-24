'use strict';

/**
 /app/controllers/PostsController.js

 @file Controller for posts and its categories
 @author Sergey S Petrenko <spetrenko@me.com>
 */

let Post = use('models/Post');
let PostCategory = require('../models/PostCategory');

// Create category:
//
//let myCategory = new PostCategory({
//  title: 'Черновики',
//  url: 'drafts',
//  image: 'http://placekitten.com/1920/1080/'
//});
//
//myCategory.save();


// Create post:
//
//PostCategory.findByTitle('Черновики', function(err, obj) {
//
//  if(obj !== null) {
//    console.log('I FOUND CATEGORY', obj);
//
//    let myPost = new Post({
//      title:    "Test 2",
//      tags:     ["bullshit","reallyr"],
//      body:     "Test post body!!!!",
//      category: obj
//    });
//
//    myPost.save();
//  }
//
//});

module.exports = {
  getItems: function ()  {

    let result = false;

    Post.find({  })
      .populate('category')
      .then(results => {
        result = results;
        console.log(results);
      });

    return result;
  },

  getPage: function (params, callback) {

    if(typeof params === 'number' || typeof params === 'undefined') {
      params = {
        page: params || 1
      };
    }

    let pageNum  = params.page || 1;
    let numLimit = params.limit || 10;
    let sortBy   = params.sort || { date: -1 };

    let skipItems = 0;

    if(pageNum !== 1) {
      skipItems = pageNum * numLimit;
    }



    Post.find({ visible: true })
      .skip(skipItems)
      .sort(sortBy)
      .limit(numLimit)
      .populate('category')
      .then(results => {
      //  console.log(results);
        if(typeof callback === 'function') {
          callback(results);
        }
      });
  }
};
