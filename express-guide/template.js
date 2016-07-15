var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function (req, res) {
  res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
