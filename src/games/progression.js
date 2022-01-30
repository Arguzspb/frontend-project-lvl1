import genRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, length, step) => {
  let num = startNumber;
  const result = [startNumber];
  for (let i = 0; i < length; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};
const runRound = () => {
  const progressionLength = genRandom(5, 9);
  const progressionStep = genRandom(2, 10);
  const firstNumber = genRandom(1, 100);
  const progression = getProgression(firstNumber, progressionLength, progressionStep);
  const randomElement = genRandom(0, progression.length - 1);
  const answer = progression[randomElement];
  progression.splice(randomElement, 1, '..');
  const expression = progression.join(' ');
  return [expression, String(answer)];
};

export default () => {
  executeGame(runRound, description);
};
