import playGame from '..';
import { generateNumber, makeQuestionAndAnswer } from '../utils';

const minRandom = 1;
const maxRandom = 9;
const progressionLineLength = 10;

const generateQuestion = (first, mysteriousPosition, step) => {
  const iter = (counter, progressionLine) => {
    if (progressionLineLength === counter) return progressionLine;
    const nextnum = (counter === mysteriousPosition) ? '..' : String(first + (counter * step));
    return iter(counter + 1, `${progressionLine} ${nextnum}`);
  };
  return iter(1, `${first}`);
};

const description = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
  const first = generateNumber(minRandom, maxRandom);
  const mysteriousPosition = generateNumber(minRandom, maxRandom);
  const step = generateNumber(minRandom, maxRandom);
  const question = generateQuestion(first, mysteriousPosition, step);
  const correctAnswer = String(first + (mysteriousPosition * step));
  return makeQuestionAndAnswer(question, correctAnswer);
};

const playProgression = () => playGame(description, generateQuestionAndAnswer);
export default playProgression;
