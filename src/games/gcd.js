import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => (num2 === 0 ? num1 : getGCD(num2, num1 % num2));

const runRound = () => {
  const num1 = genRandom(1, 100);
  const num2 = genRandom(1, 100);
  const answer = getGCD(num1, num2);
  const expression = `${num1} ${num2}`;
  return [expression, String(answer)];
};

export default () => {
  executeGame(runRound, description);
};
