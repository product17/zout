'use strict';

// Make an app to use as middleware
var express = require('express')
,   router  = express.Router()
,   path    = require('path')
,   __root  = process.cwd();

// Include all the modules
var fitbit = require(path.join(__root, 'components/fitbit'));


// Set the root routes
router.use('/fitbit', fitbit);

module.exports = router;
