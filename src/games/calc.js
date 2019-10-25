import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 99;
const operandString = '+-*';


const RulesOfTheGame = 'What is the result of the expression?';


const QuestionAndAnswer = () => {
  const FirstNumber = generateNumber(minrandom, maxrandom);
  const LastNumber = generateNumber(minrandom, maxrandom);
  const Operand = generateNumber(0, 2);
  const Question = `${FirstNumber} ${operandString[Operand]} ${LastNumber}`;
  let CorrectAnswer;
  if (Operand === 0) CorrectAnswer = String(FirstNumber + LastNumber);
  if (Operand === 1) CorrectAnswer = String(FirstNumber - LastNumber);
  if (Operand === 2) CorrectAnswer = String(FirstNumber * LastNumber);
  return cons(Question, CorrectAnswer);
};

const playCalc = () => playGame(RulesOfTheGame, QuestionAndAnswer);
export default playCalc;
