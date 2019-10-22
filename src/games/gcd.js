import { cons } from 'hexlet-pairs';
import playgame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;

const gcd = (a, b) => {
  const large = (a > b) ? a : b;
  const small = (b < a) ? b : a;
  if (a === 1 || b === 1) return 1;
  const iter = (acc) => {
    if (large % acc === 0 && small % acc === 0) return acc;
    return iter(acc - 1);
  };
  return iter(small);
};

const rules = 'Find the greatest common divisor of given numbers.';


const qanda = () => {
  const firstnumber = generateNumber(minrandom, maxrandom);
  const lasttnumber = generateNumber(minrandom, maxrandom);
  const question = `${firstnumber} ${lasttnumber}`;
  const answer = String(gcd(firstnumber, lasttnumber));
  return cons(question, answer);
};

const gamegcd = () => playgame(rules, qanda);
export default gamegcd;
