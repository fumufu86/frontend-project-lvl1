import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;

const getGreatestCommonDivisor = (first, last) => {
  const large = (first > last) ? first : last;
  const small = (last < first) ? last : first;
  if (first === 1 || last === 1) return 1;
  const iter = (acc) => {
    if (large % acc === 0 && small % acc === 0) return acc;
    return iter(acc - 1);
  };
  return iter(small);
};

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';


const genQuestionAndAnswer = () => {
  const first = generateNumber(minrandom, maxrandom);
  const last = generateNumber(minrandom, maxrandom);
  const question = `${first} ${last}`;
  const correctAnswer = String(getGreatestCommonDivisor(first, last));
  return cons(question, correctAnswer);
};

const playGreatestCommonDivisor = () => playGame(rulesOfTheGame, genQuestionAndAnswer);
export default playGreatestCommonDivisor;
