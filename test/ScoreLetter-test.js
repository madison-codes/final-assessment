import { assert } from 'chai';
import scoreLetter from '../lib/ScoreLetter';

describe('ScoreLetter', function() {
  it('should be a function', function(){
    assert.isFunction(scoreLetter);
  });

  it('should return 0 if the input is not a letter', function(){
    assert.equal(scoreLetter(2), 0);
  });

  it('should return 0 for a none leter string', function(){
    assert.equal(scoreLetter('2'), 0);
  });

  it('should return the correct score for a lower case letter', function(){
    assert.equal(scoreLetter('a'), 1);
  });

  it('should return the correct score for an upper case letter', function(){
      assert.equal(scoreLetter('A'), 1);
    });
});
