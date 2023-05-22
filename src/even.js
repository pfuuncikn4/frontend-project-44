#!/usr/bin/env node
import readlineSync from 'readline-sync';

function evenOrNot(numb) {
  const number = numb;
  if (Math.floor(number / 2) === number / 2) {
    // Чётное
    return true;
  }
  // Нечётное
  return false;
}

// eslint-disable-next-line consistent-return
export default function even() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const minNum = 0;
  const maxNum = 100;

  let rounds = 0;
  while (rounds <= 2) {
    let roundAnswer;

    const randomNumbers = `${Math.floor(Math.random() * (maxNum - minNum)) + minNum}`;

    console.log(`Question: ${randomNumbers}`);
    const userAnswer = readlineSync.question('Your answer:  ');

    if (evenOrNot(randomNumbers) === true && userAnswer === 'yes') {
      roundAnswer = ('Correct!');
    } else if (evenOrNot(randomNumbers) === false && userAnswer === 'no') {
      roundAnswer = ('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${Number(randomNumbers) % 2 === 0 ? 'yes' : 'no'}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (roundAnswer !== 'Correct!') { rounds = 0; }

    console.log(roundAnswer);
    rounds += 1;
  }

  console.log(`Congratulations, ${name}!`);
}
