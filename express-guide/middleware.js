var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
}

app.use(myLogger);
app.use(requestTime);
app.use(function (req, res, next) {
  console.log('Time : ', Date.now());
  next();
}, function (req, res, next) {
  console.log('Request URL : ', req.originalUrl);
  console.log('Request Type : ', req.method);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at : ' + req.requestTime + '';
  res.send(responseText);
})

app.listen(3000);
