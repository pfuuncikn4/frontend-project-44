#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumbers = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

function prime(num) {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
}

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let rounds = 0;
  while (rounds <= 3) {
    if (rounds >= 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const question = randomNumbers();
    console.log(`Question: ${question}`);
    let answer = readlineSync.question('Your answer: ');

    if (String(answer) === 'yes') {
      answer = true;
    } else if (String(answer) === 'no') {
      answer = false;
    } else {
      answer = null;
    }

    if (prime(question) === answer) {
      rounds += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${prime(question)}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
}
