import generateRandomNumber from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  executeGame(generateRound, description);
};
