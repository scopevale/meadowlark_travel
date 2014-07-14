var express = require('express');
var app = express();
var path = require('path');
//
// set up handlebars view engine
// 
var handlebars = require('express3-handlebars').create({
  defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//
// fortune messages
//
var fortunes = ["Conquer your fears or they will conquer you.", "Rivers need springs.", "Do not fear what you don't know.", "You will have a pleasant surprise.", "Whenever possible, keep it simple.", ];
//
// serve our static assets (css, js, img) from /public
// 
app.use(express.static(path.join(__dirname, 'public')));
//
// setup the port to listen on
// 
app.set('port', process.env.PORT || 3000);
//
// setup the routes
// 
app.get('/', function (req, res) {
  res.render('home');
});
app.get('/about', function (req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {
    fortune: randomFortune
  });
});
// 404 catch-all handler (middleware)
app.use(function (req, res, next) {
  res.status(404);
  res.render('404');
});
// 500 error handler (middleware)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
//
// start express http server
// 
app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});