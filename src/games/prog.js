import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;
const progressionLineLength = 10;

const genProgressionLine = (firstNumOfProgression, mysteriousPosition, progressionStep) => {
  const iter = (counter, progressionLine) => {
    if (progressionLineLength === counter) return progressionLine;
    const nextnum = (counter === mysteriousPosition) ? '..' : String(firstNumOfProgression + (counter * progressionStep));
    return iter(counter + 1, `${progressionLine} ${nextnum}`);
  };
  return iter(1, `${firstNumOfProgression}`);
};

const rulesOfTheGame = 'What number is missing in the progression?';


const genQuestionAndAnswer = () => {
  const firstNumOfProgression = generateNumber(minrandom, maxrandom);
  const mysteriousPosition = generateNumber(minrandom, maxrandom);
  const progressionStep = generateNumber(minrandom, maxrandom);
  const question = genProgressionLine(firstNumOfProgression, mysteriousPosition, progressionStep);
  const correctAnswer = String(firstNumOfProgression + (mysteriousPosition * progressionStep));
  return cons(question, correctAnswer);
};

const playProgression = () => playGame(rulesOfTheGame, genQuestionAndAnswer);
export default playProgression;
