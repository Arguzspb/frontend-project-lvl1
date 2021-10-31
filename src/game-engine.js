import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const turnCount = 3;

export default (makeRound, gameDescription) => {
  const name = getUserName();
  console.log(gameDescription);
  for (let i = 0; i < turnCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`); // если убрать return, ругается линтер
};
