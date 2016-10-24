var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost/3000');

var Feedback = mongoose.model('Feedback', {
    name: String,
    mail: String,
    body: String
});

var jsonParser = bodyParser.json();

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/addItem', jsonParser, function (req, res) {
    var feedbacks = new Feedback ({req.body});
    feedbacks.save(function(err){
        if(err) {
            res.send('ошибка')ж
        } else {
            res.send('ok');
        }
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});