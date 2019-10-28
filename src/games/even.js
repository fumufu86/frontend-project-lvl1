import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 999;
const isEven = (num) => num % 2 === 0;

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// quanda is question and answer.
const genQuestionAndAnswer = () => {
  const question = generateNumber(minrandom, maxrandom);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const playEven = () => playGame(rulesOfTheGame, genQuestionAndAnswer);
export default playEven;
