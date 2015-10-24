'use strict';

/**
 IndexRoute.js

 @file Route for /
 @author Sergey S Petrenko <spetrenko@me.com>
 */


let express    = require('express');
let Controller = require('../controllers/IndexController');
let router     = express.Router();

router.get('/', Controller.index.get);

module.exports = router;