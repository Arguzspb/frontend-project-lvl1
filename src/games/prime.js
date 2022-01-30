import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const runRound = () => {
  const num = genRandom(1, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

export default () => {
  executeGame(runRound, description);
};
