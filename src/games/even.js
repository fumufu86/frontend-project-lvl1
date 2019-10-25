import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 999;
const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const RulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// quanda is question and answer.
const QuestionAndAnswer = () => {
  const Question = generateNumber(minrandom, maxrandom);
  const CorrectAnswer = isEven(Question);
  return cons(Question, CorrectAnswer);
};

const playEven = () => playGame(RulesOfTheGame, QuestionAndAnswer);
export default playEven;
