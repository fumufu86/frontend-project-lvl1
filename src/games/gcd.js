import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;

const getGreatestCommonDivisor = (FirstNumber, LastNumber) => {
  const large = (FirstNumber > LastNumber) ? FirstNumber : LastNumber;
  const small = (LastNumber < FirstNumber) ? LastNumber : FirstNumber;
  if (FirstNumber === 1 || LastNumber === 1) return 1;
  const iter = (acc) => {
    if (large % acc === 0 && small % acc === 0) return acc;
    return iter(acc - 1);
  };
  return iter(small);
};

const RulesOfTheGame = 'Find the greatest common divisor of given numbers.';


const QuestionAndAnswer = () => {
  const FirstNumber = generateNumber(minrandom, maxrandom);
  const LastNumber = generateNumber(minrandom, maxrandom);
  const Question = `${FirstNumber} ${LastNumber}`;
  const CorrectAnswer = String(getGreatestCommonDivisor(FirstNumber, LastNumber));
  return cons(Question, CorrectAnswer);
};

const playGreatestCommonDivisor = () => playGame(RulesOfTheGame, QuestionAndAnswer);
export default playGreatestCommonDivisor;
