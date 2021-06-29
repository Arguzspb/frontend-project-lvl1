import getRandomInt from '../randomInteger.js';
import executeGame from '../executeGame.js';

const startRound = () => {
  const firstInt = getRandomInt(1, 10);
  const secondInt = getRandomInt(firstInt, 10);
  const operands = ['+', '-', '*'];
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const chosenOperand = operands[getRandomInt(0, 2)];
  const chosenOperation = operations[chosenOperand];
  const correctAnswer = String((chosenOperation(secondInt, firstInt)));
  const expression = `${secondInt} ${chosenOperand} ${firstInt}`;
  return [expression, correctAnswer];
};

export default () => {
  const gameText = 'What is the result of the expression?';
  executeGame(startRound, gameText);
};
