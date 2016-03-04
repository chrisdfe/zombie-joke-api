fs = require 'fs'
path = require 'path'
express = require 'express'
utils = require '../utils'

router = express.Router()

router.get '/', (req, res) ->
  res.json 'go to /random_zombie_joke'

router.get '/random_zombie_joke', (req, res) ->
  jokes = fs.readFileSync path.resolve './data/jokes.json'
  jokes = JSON.parse jokes
  index = Math.floor Math.random() * jokes.length
  res.json jokes[index]

module.exports = router
