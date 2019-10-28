import { cons } from 'hexlet-pairs';
import playGame from '..';
import generateNumber from '../utils';


const minrandom = 1;
const maxrandom = 9;
const ProgressionLineLength = 10;

const genProgressionLine = (firstNumOfProgression, MysteriousPosition, ProgressionStep) => {
  const iter = (counter, ProgressionLine) => {
    if (ProgressionLineLength === counter) return ProgressionLine;
    const nextnum = (counter === MysteriousPosition) ? '..' : String(firstNumOfProgression + (counter * ProgressionStep));
    return iter(counter + 1, `${ProgressionLine} ${nextnum}`);
  };
  return iter(1, `${firstNumOfProgression}`);
};

const RulesOfTheGame = 'What number is missing in the progression?';


const genQuestionAndAnswer = () => {
  const firstNumOfProgression = generateNumber(minrandom, maxrandom);
  const MysteriousPosition = generateNumber(minrandom, maxrandom);
  const ProgressionStep = generateNumber(minrandom, maxrandom);
  const Question = genProgressionLine(firstNumOfProgression, MysteriousPosition, ProgressionStep);
  const CorrectAnswer = String(firstNumOfProgression + (MysteriousPosition * ProgressionStep));
  return cons(Question, CorrectAnswer);
};

const playProgression = () => playGame(RulesOfTheGame, genQuestionAndAnswer);
export default playProgression;
