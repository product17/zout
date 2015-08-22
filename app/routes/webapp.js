'use strict';

// Make an app to use as middleware
var express   = require('express')
,   router    = express.Router()
,   indexCtrl = require('../controllers');

router.route('/')
    .get(indexCtrl.index);

// Export the router
module.exports = router;
