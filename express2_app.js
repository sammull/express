var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world');
    });
app.get('/helloworld2', function(req, res) {
    res.send('Hello world2');
    });
app.get('/helloworld3', function(req, res) {
    res.send('Hello world3');
    });
    
    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
        
        console.log('example app listening at http://%s:%s', host, port);
        });