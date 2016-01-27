var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var flash = require('connect-flash');

var http = require('http');
var server = http.createServer(app);


var main = require('./routes/index');
var login = require('./routes/login');
var erHandlers = require('./middleware/errors');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', main);
app.use('/login', login);


app.use(erHandlers.error404);
app.use(erHandlers.error500(app));


server.listen(3000);

