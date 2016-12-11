'use strict';

const sync = require('synchronize');
const mongojs = require('mongojs');

const db = require('../db');


function router(app) {
  app.get('/',  (req, res, next) => {
    res.send('Welcome!');
  });
}

module.exports = router;
