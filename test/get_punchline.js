'use strict';

let getPunchline = require('../lib/').getPunchline;
const _ = require('lodash');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

function testSentences(sentences) {
  for (var sentence of sentences) {
    let result = getPunchline(sentence.input);
    result.length.should.equal(sentence.punchlines.length);

    for (let i = 0; i < sentence.punchlines.length; i++) {
      expect(result[i]).not.be.undefined;
      expect(sentence.punchlines).to.contain(result[i]);
    }
  }
}

describe('Get Punchline', function() {

  it('exists', function() {
    should.exist(getPunchline);
  });

  it('is a function', function() {
    getPunchline.should.be.a('function');
  });

  it('returns an array', function() {
    let result = getPunchline('');
    result.should.be.an('array');
  });

  describe('detects punchlines correctly', function() {
    it('for basic punchlines', function() {
      testSentences([
        {
          input: 'You forgot your HEAD because it wasn\'t attached!',
          punchlines: ['HEAD']
        },
        {
          input: 'We\'re DYING to have YOU for dinner!',
          punchlines: ["DYING", "YOU"]
        },
        {
          input: 'I\'m GREEN with envy!',
          punchlines: ['GREEN']
        },
      ]);
    });

    it('for punchlines with punctutation', function() {
      testSentences([
        {
          input: 'I\'m coming to get you, BARBARA!',
          punchlines: ['BARBARA']
        },
        {
          input: '"CHOMPING On The Stars!"',
          punchlines: ['CHOMPING']
        },
        {
          input: "GRAAAINS...more GRAAAAAAINS!",
          punchlines: ["GRAAAINS", "GRAAAAAAINS"]
        }
      ]);
    });

    it('for mixed lower and uppercase words', function() {
      testSentences([
        {
          input: "They use megaBITES!",
          punchlines: ["megaBITES"]
        },
        {
          input: "The DEADiterranean Sea!",
          punchlines: ["DEADiterranean"]
        },
        {
          input: "BRAAAINcoats",
          punchlines: ["BRAAAINcoats"]
        },
        {
          input: "A shot of To-KILL-Ya!",
          punchlines: ["To-KILL-Ya"]
        }
      ]);
    })

    it('for multi-word punchlines', function() {
      testSentences([
        {
          input: "He had NO LEG to STAND ON!",
          punchlines: ["NO LEG", "STAND ON"]
        },
        {
          input: "A zombie LEAVING the PET STORE!",
          punchlines: ["LEAVING", "PET STORE"]
        },
        {
          input: "None, zombies CAN'T FIT in a light bulb & they DON'T screw!",
          punchlines: ["CAN'T FIT", "DON'T"]
        }
      ]);
    });
  });
});
