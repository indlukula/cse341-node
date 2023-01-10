/*jshint esversion: 6*/
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sifundo Maphosa');
});
routes.get('/test', (req, res) => {
  res.send('Jason Stantham');
});
routes.get('/test1', (req, res) => {
  res.send('Will Smith');
});

module.exports = routes;