import getRandomInt from '../randomInteger.js';
import executeGame from '../executeGame.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const initialCountdown = firstNum > secondNum ? secondNum : firstNum;
  for (let divisor = initialCountdown; divisor >= 1; divisor -= 1) {
    if (firstNum % divisor === 0 && secondNum % divisor === 0) {
      return divisor;
    }
  }
  return NaN;
};
const startRound = () => {
  const firstInt = getRandomInt(1, 100);
  const secondInt = getRandomInt(1, 100);
  const correctAnswer = String(getGreatestCommonDivisor(firstInt, secondInt));
  const expression = `${firstInt} ${secondInt}`;
  return [expression, correctAnswer];
};

export default () => {
  const gameText = 'Find the greatest common divisor of given numbers.';
  executeGame(startRound, gameText);
};
