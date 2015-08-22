var express   = require('express')
,   app       = express()
,   path      = require('path')
,   mongoose  = require('mongoose')
,   routes    = require('./app/routes')
,   expConf   = require('./config/express')
,   dbConf    = require('./config/mongo');

// Set the database
// mongoose.connect(dbConf.db);

app.use(express.static(path.join(__dirname, 'public')));

// Include all apps through the routes index file
app.use(routes);


var server = app.listen(process.env.PORT, function () {
    var port = server.address().port;

    console.log('Example app listening at http://localhost:%s', port);
});
