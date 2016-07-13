var express = require('express');
var app = express();
var port = 3000;

app.get('/name/:user_name', function(req, res) {
  res.status(200);
  res.set('Content-type', 'text/html');
  var content = `<html><body><h1>Hello ` + req.params.user_name + '</h1></body></html>';
  res.send(content);
});

app.get('*', function(req, res) {
  res.end('Hello World');
});

app.listen(port, function() {
  console.log('Ther server is running, ' + ' please, open your browser at http://localhost:%s', port);
});
