import readlineSync from 'readline-sync';
import userName from './cli.js';

export default (startRound, gameText) => {
  const name = userName();
  console.log(gameText);
  const turnCount = 3;
  for (let i = 0; i < turnCount; i += 1) {
    const [condition, correctAnswer] = startRound();
    console.log(`Question: ${condition}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
                Let's try again, ${name}`;
      return console.log(wrongAnswer);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}`);
};
