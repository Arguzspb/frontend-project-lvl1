import getRandomInt from '../randomInteger.js';
import executeGame from '../game-engine.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no" ';

const makeRound = () => {
  const randomInt = getRandomInt(1, 100);
  const isEven = (integer) => integer % 2 === 0;
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [randomInt, correctAnswer];
};

export default () => {
  executeGame(makeRound, gameDescription);
};
