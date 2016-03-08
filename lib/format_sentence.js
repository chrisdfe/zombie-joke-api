'use strict';

/**
 * formatSentence
 */
module.exports = function (sentence) {
  return sentence
    .replace(/&apos;/g, '\'')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"');
}
