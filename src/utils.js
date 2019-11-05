import { cons } from 'hexlet-pairs';

const generateNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const makeQuestionAndAnswer = (question, correctAnswer) => cons(question, correctAnswer);
export {
  generateNumber, makeQuestionAndAnswer,
};
