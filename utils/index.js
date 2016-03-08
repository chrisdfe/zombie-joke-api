'use strict';

const PUNCTUATION = /[.,\/#!$%\^&\*;:{}=\-_`~()]/;
const S = require('string');

module.exports = {
  PUNCTUATION: PUNCTUATION,

  isPunctuation: function isPunctuation(pattern) {
    return PUNCTUATION.test(pattern);
  },

  // Determines whether character is uppercase
  isUpper: function isUpper(character) {
    return S(character).isUpper();
  }
}
