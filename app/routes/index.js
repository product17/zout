'use strict';

// Make an app to use as middleware
var express = require('express')
,   router  = express.Router()
,   path    = require('path')
,   __root  = process.cwd();

/**
Include each app through it's index file (which is the route file for that app)
*/

// Fitbit App
var fitbit = require(path.join(__root, 'components/fitbit'));

// Web App
var webapp = require('./webapp');

// Set the root routes
router.use('/fitbit', fitbit);

// web app routes go at the bottom to keep from conflicting with included Apps
router.use('/', webapp);

module.exports = router;
