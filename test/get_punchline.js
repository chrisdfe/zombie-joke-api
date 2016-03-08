'use strict';

let getPunchline = require('../lib/').getPunchline;
const _ = require('lodash');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

function testSentences(sentences) {
  console.log('sentences', sentences);

  for (let sentence of sentences) {
    let results = getPunchline(sentence.input);

    for (let i = 0; i < results.length; i++) {
      let punchline = results[i];

      it('- existence', function() {
        expect(punchline).not.be.undefined;
      });

      it('- correct formatting', function() {
        expect(sentence.punchlines).to.contain(results[i]);
      });
    }
  }
}

describe('getPunchline', function() {

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

  describe('should detect punchlines correctly', function() {
    context('for basic punchlines', function() {
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

    context('for punchlines with punctutation', function() {
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

    context('for mixed lower and uppercase words', function() {
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

    context('for multi-word punchlines', function() {
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
