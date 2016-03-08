path = require 'path'
fs = require 'fs'
_ = require 'lodash'
Bluebird = require 'bluebird'
cheerio = require 'cheerio'
S = require 'string'
request = Bluebird.promisify require 'request'

{ getPunchline } = require '../../lib/'
utils = require '../../utils'

module.exports = ->

  request 'http://zombiejokes.com/'
  .then (response) ->
    $ = cheerio.load response.body

    jokes = _.map $("#browse li"), (element) ->
      question = $($(element).find('p')[0]).html().split('Q: ')[1]
      answer   = $($(element).find('p')[1]).html().split('A: ')[1]

      punchline = findCapPatterns answer

      question  : formatSentence question
      answer    : formatSentence answer
      punchline : punchline

    data = JSON.stringify jokes, null, 4
    fs.writeFileSync path.resolve('./data/jokes.json'), data
