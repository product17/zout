'use strict';

var express = require('express')
,   router  = express.Router()
,   ctrl    = require('./controller');

router.route('/test')
    .get(ctrl.index);


module.exports = router;
