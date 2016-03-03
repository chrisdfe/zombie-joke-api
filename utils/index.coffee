
module.exports =
  isPunctuation: (pattern) ->
    console.log 'is punctuation', RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g).test pattern
    RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g).test pattern