#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const gg = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gg}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let result = 1;
  while (result <= 3) {
    function gcd(a, b) {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    }

    let logic;
    const min = 0;
    const max = 100;

    const random1 = `${Math.floor(Math.random() * (max - min) + min)}`;
    const random2 = `${Math.floor(Math.random() * (max - min) + min)}`;

    console.log(`Question: ${random1} ${random2}`);

    const userAnsw = readlineSync.question('Your answer: ');

    if (userAnsw === `${gcd(random1, random2)}`) { logic = 'Correct!'; } else if (userAnsw !== `${gcd(random1, random2)}`) {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${gcd(random1, random2)}'.`);
      return console.log(`Let's try again, ${gg}!`);
    }

    if (logic !== 'Correct!') { result = 0; }
    console.log(logic);
    result += 1;
  }
  console.log(`Congratulations, ${gg}!`);
}
