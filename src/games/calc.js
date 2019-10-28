import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 99;
const operandString = '+-*';


const rulesOfTheGame = 'What is the result of the expression?';


const genQuestionAndAnswer = () => {
  const first = generateNumber(minrandom, maxrandom);
  const last = generateNumber(minrandom, maxrandom);
  const operand = operandString[generateNumber(0, 2)];
  const question = `${first} ${operand} ${last}`;
  let correctAnswer;
  switch (operand) {
    case '+':
      correctAnswer = String(first + last);
      break;
    case '-':
      correctAnswer = String(first - last);
      break;
    default:
      correctAnswer = String(first * last);
      break;
  }
  return cons(question, correctAnswer);
};

const playCalc = () => playGame(rulesOfTheGame, genQuestionAndAnswer);
export default playCalc;
