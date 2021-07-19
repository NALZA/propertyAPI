var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var propertiesRouter = require('./routes/properties');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/properties', propertiesRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(5000, () => console.log(`Server started on port ${5000}`));

module.exports = app;
