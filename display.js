var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
    res, send('get request');
    });
app.get('/display', function(req, res) {
    var json = JSON.parse(fs.readFileSync('./event.json', 'utf8'));
    res.send(json);
    });
    
app.listen(8080);
console.log('listening on port 8080');