const mongojs = require('mongojs');
const sync = require('synchronize');

const DB_STRING = process.env.MONGODB_URI || 'muggy';
const db = mongojs(DB_STRING);

module.exports = db;
