/*jshint esversion: 6*/
const express = require('express');
const app = express();
const port = process.env.PORT || 3008;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});