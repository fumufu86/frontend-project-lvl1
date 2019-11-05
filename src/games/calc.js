import playGame from '..';
import { generateNumber, makeQuestionAndAnswer } from '../utils';

const minRandom = 1;
const maxRandom = 99;
const operands = '+-*';

const description = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const first = generateNumber(minRandom, maxRandom);
  const last = generateNumber(minRandom, maxRandom);
  const operand = operands[generateNumber(0, operands.length - 1)];
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
  return makeQuestionAndAnswer(question, correctAnswer);
};

const playCalc = () => playGame(description, generateQuestionAndAnswer);

export default playCalc;
