import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minRandom = 1;
const maxRandom = 999;
const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const question = generateNumber(minRandom, maxRandom);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const playEven = () => playGame(description, generateQuestionAndAnswer);
export default playEven;
