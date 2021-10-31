import getRandom from '../randomInteger.js';
import executeGame from '../game-engine.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (initialNum, length, step) => {
  let num = initialNum;
  const result = [initialNum];
  for (let i = 0; i < length; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};
const makeRound = () => {
  const lengthProgression = getRandom(5, 9);
  const stepProgression = getRandom(2, 10);
  const startNumProgression = getRandom(1, 100);
  const progression = getProgression(startNumProgression, lengthProgression, stepProgression);
  const randomElement = getRandom(0, progression.length - 1);
  const correctAnswer = String(progression[randomElement]);
  progression.splice(randomElement, 1, '..');
  const expression = progression.join(' ');
  return [expression, correctAnswer];
};

export default () => {
  executeGame(makeRound, gameDescription);
};
