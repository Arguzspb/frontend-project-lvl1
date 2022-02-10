import generateRandom from '../utils.js';
import executeGame from '../game-engine.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, length, step) => {
  let currentNumber = startNumber;
  const result = [startNumber];
  for (let i = 0; i < length; i += 1) {
    currentNumber += step;
    result.push(currentNumber);
  }
  return result;
};
const generateRound = () => {
  const progressionLength = generateRandom(5, 9);
  const progressionStep = generateRandom(2, 10);
  const firstNumber = generateRandom(1, 100);
  const progression = getProgression(firstNumber, progressionLength, progressionStep);
  const randomElement = generateRandom(0, progression.length - 1);
  const answer = progression[randomElement];
  progression.splice(randomElement, 1, '..');
  const expression = progression.join(' ');
  return [expression, String(answer)];
};

export default () => {
  executeGame(generateRound, description);
};
