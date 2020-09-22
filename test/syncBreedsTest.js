const expect = require('chai').expect;
const breedDetails = require('../readFileSync');

describe('#breedDetails',() => {
  it('return breed details for Bombay breed', () => {
    let expd = '  \'Bombay\': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver\'s shoulder."'
    const bombay = breedDetails('Bombay');
    expect(bombay).to.eql(expd);
  });

})