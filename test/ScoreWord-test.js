import { assert } from 'chai';
import scoreWord from '../lib/ScoreWord';

describe('ScoreWords', function() {
  it('should be a function', function() {
    assert.isFunction(scoreWord);
  });

  it('should return 0  if empty string', function() {
    assert.equal(scoreWord(''), 0);
  });

  it('should return 0  if input is not a string', function() {
    assert.equal(scoreWord(123), 0);
  });

  it('should return the score of a word', function() {
    assert.equal(scoreWord('hello'), 8);
  });

  it('should return the score of a word, multiple cases', function() {
    assert.equal(scoreWord('HeLLo'), 8);
  });

  it('should return the score of a word, with spaces', function() {
    assert.equal(scoreWord('    HeLLo    '), 8);
  });

  it('should return the score of a word, if spaces inside', function() {
    assert.equal(scoreWord(' hel   lo '), 8);
  });

  it('should return the score of a word, if mult', function() {
    assert.equal(scoreWord('hello', 2), 16);
  });
});
