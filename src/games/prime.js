import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minRandom = 1;
const maxRandom = 99;

const isPrime = (num) => {
  if (num <= 2) return num === 2;
  const iter = (counter) => {
    if (num % counter === 0) return false;
    if (counter > (num / 2)) return true;
    return iter(counter + 1);
  };
  return iter(2);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const question = generateNumber(minRandom, maxRandom);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const playPrime = () => playGame(description, genQuestionAndAnswer);
export default playPrime;
