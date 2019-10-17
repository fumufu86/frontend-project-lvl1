import readlineSync from 'readline-sync';

const minrandom = 1;
const maxrandom = 999;
const even = (num) => ((num % 2 === 0) ? 'yes' : 'no');
// const random = Math.floor(Math.random() * 1000);
const generateNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const gameeven = () => {
  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let count = 3; count > 0; count -= 1) {
    let num = generateNumber(minrandom, maxrandom);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (even(num) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even(num)}'.`);
      console.log(`Let's try again, ${actual}!`);
      return;
    }
    console.log('Correct!');
    num = Math.floor(Math.random() * 1000);
  }
  console.log(`Congratulations, ${actual}!`);
};

export default gameeven;
