import { cons } from 'hexlet-pairs';
import playgame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;
const operand = '+-*';


const rules = 'What is the result of the expression?';


const qanda = () => {
  const firstnumber = generateNumber(minrandom, maxrandom);
  const lasttnumber = generateNumber(minrandom, maxrandom);
  const generateoperand = generateNumber(0, 2);
  const question = `${firstnumber} ${operand[generateoperand]} ${lasttnumber}`;
  let answer;
  if (generateoperand === 0) answer = String(firstnumber + lasttnumber);
  if (generateoperand === 1) answer = String(firstnumber - lasttnumber);
  if (generateoperand === 2) answer = String(firstnumber * lasttnumber);
  return cons(question, answer);
};

const gamecalc = () => playgame(rules, qanda);
export default gamecalc;
