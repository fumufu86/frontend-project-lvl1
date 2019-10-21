import { cons } from 'hexlet-pairs';
import playgame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 999;
const even = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// quanda is question and answer.
const qanda = () => {
  const question = generateNumber(minrandom, maxrandom);
  const answer = even(question);
  return cons(question, answer);
};

const gameeven = () => playgame(rules, qanda);
export default gameeven;
