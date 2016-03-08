'use strict';

const _ = require('lodash');
const formatSentence = require('./format_sentence');
const S = require('string');

/**
 * getPunchline
 */
module.exports = function(sentence) {
  const CAPS_THRESHOLD = 2;
  let result = [];
  let current = [];

  for (var character of sentence) {

    if (S(character).isUpper() || character === ' ') {
      current.push(character);
    } else {
      // if (current.length >= CAPS_THRESHOLD) {
      // }
      // console.log(result);
      // result.push(formatSentence(result));
      result.push(current.join());
      console.log('result', result);
      current = [];
    }
  }

  return _.map(result, function(punchline) {
    return S(punchline)
            .strip('!')
            .strip('"')
            .s;
  });
}
