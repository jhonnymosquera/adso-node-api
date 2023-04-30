const instructor = require('./instructor');
const day = require('./day');
const job = require('./job');
const task = require('./task');
const adso = require('./adso');

const routes = [day, instructor, job, task, adso];

routes.forEach((rute) => rute);

module.exports = routes;
