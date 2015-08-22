'use strict';

// Maybe this should be the explorable call for the api
module.exports.index = function index (req, res) {
  console.log(req.baseUrl);
  res.json({
    message: 'connection protocal'
  });
}

// module.exports.
