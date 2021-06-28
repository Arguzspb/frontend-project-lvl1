import getRandomInt from '../randomInteger.js';
import executeGame from '../executeGame.js';

const startRound = () => {
  const randomInt = getRandomInt();
  const isEven = (integer) => integer % 2 === 0;
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [randomInt, correctAnswer];
};

export default () => {
  const gameText = 'Answer "yes" if the number is even, otherwise answer "no" ';
  executeGame(startRound, gameText);
};
