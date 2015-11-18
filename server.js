var express = require('express');
var bodyParser = require('body-parser')
var fs = require("fs");
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser());
app.use(function(request, response, next) {
    console.log('GOT request: ' + request.url);
    return next();
});

app.post('/authentication', function(req, res) {
    console.log('username : ', req.body.username);
    console.log('password : ',  req.body.password);

    if ((req.body.username == "narmatha") && (req.body.password == "123")) {
        res.send({"success": true, "user": 1});
    } else if ((req.body.username == "sujeewa") && (req.body.password == "1234")) {
        res.send({"success": true, "user": 2});
    } else {
        res.send({"success": false});
    }
})

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
