import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no" ';

const isEven = (integer) => integer % 2 === 0;

const genRound = () => {
  const num = genRandom(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

export default () => {
  executeGame(genRound, description);
};
