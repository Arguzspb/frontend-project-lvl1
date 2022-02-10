import generateRandomNumber from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (integer) => integer % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  executeGame(generateRound, description);
};
