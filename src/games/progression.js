import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'What number is missing in the progression?';

const getProgression = (initialNum, length, step) => {
  let num = initialNum;
  const result = [initialNum];
  for (let i = 0; i < length; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};
const runRound = () => {
  const lengthProgression = genRandom(5, 9);
  const stepProgression = genRandom(2, 10);
  const startNumProgression = genRandom(1, 100);
  const progression = getProgression(startNumProgression, lengthProgression, stepProgression);
  const randomElement = genRandom(0, progression.length - 1);
  const correctAnswer = String(progression[randomElement]);
  progression.splice(randomElement, 1, '..');
  const expression = progression.join(' ');
  return [expression, correctAnswer];
};

export default () => {
  executeGame(runRound, description);
};
