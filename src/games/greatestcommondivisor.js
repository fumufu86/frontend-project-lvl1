import playGame from '..';
import { generateNumber, makeQuestionAndAnswer } from '../utils';

const minRandom = 1;
const maxRandom = 9;

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

const description = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const first = generateNumber(minRandom, maxRandom);
  const last = generateNumber(minRandom, maxRandom);
  const question = `${first} ${last}`;
  const correctAnswer = String(getGreatestCommonDivisor(first, last));
  return makeQuestionAndAnswer(question, correctAnswer);
};

const playGreatestCommonDivisor = () => playGame(description, generateQuestionAndAnswer);

export default playGreatestCommonDivisor;
