'use strict';

const isUpper = require('../utils').isUpper;

/**
 * getPunchline
 */
module.exports = function getPunchline(sentence) {
  // The number of caps a word needs in it to be officially deemed a punchline
  const CAPS_THRESHOLD = 2;

  let current = [];
  let result = [];
  let words = sentence.split(/[ |...]/);

  for (var word of words) {
    word = word.replace(/["|!]/g, '');

    let capCount = word.split('').filter(isUpper).length;

    if (capCount >= CAPS_THRESHOLD) {
      current.push(word);
    } else if (current.length) {
      result.push(current.join(' '));
      current = [];
    }
  }

  return result;
}
