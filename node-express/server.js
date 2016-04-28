var express = require('express');
var app = express();
var WORKERS = process.env.WEB_CONCURRENCY || 1;
var cluster = require('cluster');
var numCPUs = 4;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    var data = [];
    for(var i=0; i < 2000000;i++) {
        data.push(i);
    }
    res.render('index', { title: 'Hey', message: 'Hello there!', data: data.length});
});

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    var server = app.listen(8081, function () {

        var host = server.address().address;
        var port = server.address().port;

        console.log("Example app listening at http://%s:%s", host, port);

    });
}

