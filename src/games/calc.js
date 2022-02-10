import generateRandomNumber from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'What is the result of the expression?';

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return null;
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(number1, 10);
  const operator = ['+', '-', '*'];
  const chosenOperator = operator[generateRandomNumber(0, operator.length - 1)];
  const answer = calc(number2, number1, chosenOperator);
  const expression = `${number2} ${chosenOperator} ${number1}`;
  return [expression, String(answer)];
};

export default () => {
  executeGame(generateRound, description);
};
