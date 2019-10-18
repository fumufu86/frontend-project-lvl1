import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countround = 3;
const getquestion = (qa) => car(qa);
const getcorrectanswer = (qa) => cdr(qa);

const playgame = (rules, qanda) => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log(rules);
  for (let count = countround; count > 0; count -= 1) {
    const getQandA = qanda();
    const question = getquestion(getQandA);
    const correctanswer = getcorrectanswer(getQandA);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctanswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctanswer}'.`);
      console.log(`Let's try again, ${actual}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${actual}!`);
};
export default playgame;
