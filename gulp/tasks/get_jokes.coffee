path = require 'path'
fs = require 'fs'
_ = require 'lodash'
Bluebird = require 'bluebird'
cheerio = require 'cheerio'
S = require 'string'
request = Bluebird.promisify require 'request'

utils = require '../../utils'

module.exports = ->
  URL = 'http://zombiejokes.com/'
  CAPS_THRESHOLD = 2

  formatSentence = (sentence) ->
    sentence
      .replace /&apos;/g, '\''
      .replace /&amp;/g, '&'
      .replace /&quot;/g, '"'

  findCapPatterns = (sentence) ->
    current = []
    result = []

    for word in sentence.split ' '
      for character in word
        if S(character).isUpper()
          current.push(character)

      if current.length >= CAPS_THRESHOLD
        result.push formatSentence word

      current = []

    result = _.map result, (punchline) ->
      S(punchline).strip('!').s

    result

  request URL
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
    console.log 'success'