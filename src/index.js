import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;
const getQuestion = (questionAndAnswer) => car(questionAndAnswer);
const getCorrectAnswer = (questionAndAnswer) => cdr(questionAndAnswer);

const playGame = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  for (let count = 0; count === roundsCount; count += 1) {
    const getQuestionAndAnswer = generateQuestionAndAnswer();
    const question = getQuestion(getQuestionAndAnswer);
    const correctAnswer = getCorrectAnswer(getQuestionAndAnswer);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default playGame;
