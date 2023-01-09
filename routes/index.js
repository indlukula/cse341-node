/*jshint esversion: 6*/
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sifundo Maphosa');
});

module.exports = routes;