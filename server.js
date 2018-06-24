var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var twitter_functions = require('./twitter/functions');
var openlibrary_functions = require('./open-library/functions');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/twitter/authorize', twitter_functions.authorize);
app.post('/twitter/search', twitter_functions.search);
app.post('/twitter/user', twitter_functions.user);

app.post('/open-library/search', openlibrary_functions.search);

app.listen(3000);