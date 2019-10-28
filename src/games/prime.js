import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 99;

const isPrime = (num) => {
  if (num <= 2) return (num === 2) ? 'yes' : 'no';
  const iter = (counter) => {
    if (num % counter === 0) return 'no';
    if (counter > (num / 2)) return 'yes';
    return iter(counter + 1);
  };
  return iter(2);
};

const RulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const genQuestionAndAnswer = () => {
  const Question = generateNumber(minrandom, maxrandom);
  const CorrectAnswer = isPrime(Question);
  return cons(Question, CorrectAnswer);
};

const playPrime = () => playGame(RulesOfTheGame, genQuestionAndAnswer);
export default playPrime;
