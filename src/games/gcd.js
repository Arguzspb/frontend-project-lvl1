import generateRandomNumber from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => (number2 === 0 ? number1 : getGCD(number2, number1 % number2));

const generateRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const answer = getGCD(number1, number2);
  const expression = `${number1} ${number2}`;
  return [expression, String(answer)];
};

export default () => {
  executeGame(generateRound, description);
};
