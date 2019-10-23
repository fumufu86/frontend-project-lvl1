import { cons } from 'hexlet-pairs';
import playgame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;
const proglength = 10;

const progline = (first, pos, step) => {
  const iter = (counter, acc) => {
    if (proglength === counter) return acc;
    const nextnum = (counter === pos) ? '..' : String(first + (counter * step));
    return iter(counter + 1, `${acc} ${nextnum}`);
  };
  return iter(1, `${first}`);
};

const rules = 'What number is missing in the progression?';


const qanda = () => {
  const startnum = generateNumber(minrandom, maxrandom);
  const position = generateNumber(minrandom, maxrandom);
  const stepprog = generateNumber(minrandom, maxrandom);
  const question = progline(startnum, position, stepprog);
  const answer = String(startnum + (position * stepprog));
  return cons(question, answer);
};

const gamegcd = () => playgame(rules, qanda);
export default gamegcd;
