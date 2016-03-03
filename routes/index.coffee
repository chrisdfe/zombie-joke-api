express = require 'express'
utils = require '../utils'

router = express.Router()

router.get '/', (req, res) ->
  res.render 'index', { title: 'Express' }

module.exports = router
