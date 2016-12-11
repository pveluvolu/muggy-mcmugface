const express = require('express');
const app = express();


// Set up environment variables.
const config = require('./config');

// Set up bodyParser.
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Set up templating.
app.set('view engine', 'pug');
app.locals.moment = require('moment');

// Set up static file serving.
app.use(express.static('public'));
app.use(express.static('bower_components'));

// Require routes.
require('./routes')(app);

// Set locals for pug.
app.locals.env = {};
app.locals.env[process.env.ENVIRONMENT] = true;

// Start the app.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('app started. listening on', port);
});
