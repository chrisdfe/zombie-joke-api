const fs      = require('fs');
const path    = require('path');
const express = require('express');
const utils   = require('../utils');

router = express.Router();

router.get('/', function (req, res) {
  res.json('go to /random_zombie_joke');
});

router.get('/random_zombie_joke', function (req, res) {
  jokes = fs.readFileSync(path.resolve('./data/jokes.json'));
  jokes = JSON.parse(jokes);
  index = Math.floor(Math.random() * jokes.length);
  res.json(jokes[index]);
});

module.exports = router;
