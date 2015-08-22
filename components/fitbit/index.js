'use strict';

var express = require('express')
,   router  = express.Router()
,   ctrl    = require('./controller');

router.route('/')
    .get(ctrl.index);


module.exports = router;
