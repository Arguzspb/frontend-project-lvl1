import getRandomInt from '../randomInteger.js';
import executeGame from '../executeGame.js';

const getArithProgression = (initialNum, length, step) => {
  let num = initialNum;
  const result = [initialNum];
  for (let i = 0; i < length; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};
const startRound = () => {
  const lengthProgression = getRandomInt(5, 9);
  const stepProgression = getRandomInt(2, 10);
  const startNumProgression = getRandomInt(1, 100);
  const progression = getArithProgression(startNumProgression, lengthProgression, stepProgression);
  const randomElement = getRandomInt(0, progression.length - 1);
  const correctAnswer = String(progression[randomElement]);
  progression.splice(randomElement, 1, '..');
  const expression = progression.join(' ');
  return [expression, correctAnswer];
};

export default () => {
  const gameText = 'What number is missing in the progression?';
  executeGame(startRound, gameText);
};
