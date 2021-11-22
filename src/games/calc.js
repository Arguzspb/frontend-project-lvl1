import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'What is the result of the expression?';

const calc = (num1, num2, operation) => {
  const operationMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  return operationMap[operation](num1, num2);
};

const runRound = () => {
  const num1 = genRandom(1, 10);
  const num2 = genRandom(num1, 10);
  const operations = ['+', '-', '*'];
  const chosenOperation = operations[genRandom(0, 2)];
  const correctAnswer = String((calc(num2, num1, chosenOperation)));
  const expression = `${num2} ${chosenOperation} ${num1}`;
  return [expression, correctAnswer];
};

export default () => {
  executeGame(runRound, description);
};
