import { cons } from 'hexlet-pairs';
import playgame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 99;

const prime = (num) => {
  if (num <= 2) return (num === 2) ? 'yes' : 'no';
  const iter = (counter) => {
    if (num % counter === 0) return 'no';
    if (counter > (num / 2)) return 'yes';
    return iter(counter + 1);
  };
  return iter(2);
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const qanda = () => {
  const question = generateNumber(minrandom, maxrandom);
  const answer = prime(question);
  return cons(question, answer);
};

const gameprime = () => playgame(rules, qanda);
export default gameprime;
