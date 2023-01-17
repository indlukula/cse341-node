const express = required('express');
const router = express.Router();

const infoSchema = require('../models/info');

//create a new entry
router.post('create', (req, res) )