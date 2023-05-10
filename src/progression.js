#!/usr/bin/env node
import readlineSync from 'readline-sync';

const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n); // взято у друга

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let emptyAnsw = 1;
  while (emptyAnsw <= 3) {
    const randonCount = arithmeticProgression(Math.floor(Math.random() * (20 - 10)) + 2, Math.floor(Math.random() * (200 - 50)) + 50);
    const trytrue = randonCount[3];
    randonCount[3] = '..';
    console.log(`Question: ${randonCount.join(' ')}`);
    const newName = readlineSync.question('You answer: ');
    if (Number(newName) !== Number(trytrue)) {
      console.log(`'${newName}' is wrong answer ;(. Correct answer was '${trytrue}'.`);
      return console.log(`Let's try again, ${newName}!`);
    }
    emptyAnsw += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${newName}!`);
}
