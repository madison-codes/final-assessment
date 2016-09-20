import scoreLetter from './ScoreLetter';

module.exports = (word, mult) => {
  if (word === '' || typeof word !== 'string') {
    return 0;
  }
  const wordArray = word.trim().toUpperCase().split('');
  let wordScore = 0;
  for(var i = 0; i < wordArray.length; i++) {
    wordScore = wordScore + scoreLetter(wordArray[i]);
  }
  if (!isNaN(mult)) { return wordScore * mult; }
  if (!mult) { return wordScore; }
};
