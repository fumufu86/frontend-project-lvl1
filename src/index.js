import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundCount = 3;
const getQuestion = (QuestionAndAnswer) => car(QuestionAndAnswer);
const getCorrectAnswer = (QuestionAndAnswer) => cdr(QuestionAndAnswer);

const playGame = (RulesOfTheGame, QuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(RulesOfTheGame);
  const PlayerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${PlayerName}!`);
  for (let count = roundCount; count > 0; count -= 1) {
    const getQuestionAndAnswer = QuestionAndAnswer();
    const Question = getQuestion(getQuestionAndAnswer);
    const CorrectAnswer = getCorrectAnswer(getQuestionAndAnswer);
    console.log(`Question: ${Question}`);
    const PlayerAnswer = readlineSync.question('Your answer: ');
    if (CorrectAnswer !== PlayerAnswer) {
      console.log(`'${PlayerAnswer}' is wrong answer ;(. Correct answer was '${CorrectAnswer}'.`);
      console.log(`Let's try again, ${PlayerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${PlayerName}!`);
};
export default playGame;
