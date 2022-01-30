import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'What is the result of the expression?';

const calc = (num1, num2, operation) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return null;
  }
};

const runRound = () => {
  const num1 = genRandom(1, 10);
  const num2 = genRandom(num1, 10);
  const operation = ['+', '-', '*'];
  const chosenOperation = operation[genRandom(0, operation.length - 1)];
  const answer = calc(num2, num1, chosenOperation);
  const expression = `${num2} ${chosenOperation} ${num1}`;
  return [expression, String(answer)];
};

export default () => {
  executeGame(runRound, description);
};
