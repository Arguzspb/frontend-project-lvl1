import getRandom from '../randomInteger.js';
import executeGame from '../game-engine.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const initialCountdown = firstNum > secondNum ? secondNum : firstNum;
  for (let divisor = initialCountdown; divisor >= 1; divisor -= 1) {
    if (firstNum % divisor === 0 && secondNum % divisor === 0) {
      return divisor;
    }
  }
  // опять же, линтер ругается на отсутствие возврата из функции
};
const makeRound = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const correctAnswer = String(getGreatestCommonDivisor(num1, num2));
  const expression = `${num1} ${num2}`;
  return [expression, correctAnswer];
};

export default () => {
  executeGame(makeRound, gameDescription);
};
