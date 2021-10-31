import getRandomInt from '../randomInteger.js';
import executeGame from '../game-engine.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const expression = num;
  return [expression, correctAnswer];
};

export default () => {
  executeGame(makeRound, gameDescription);
};
