#!/usr/bin/env node
// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
};
const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
export default function calc() {
  console.log('What is the result of the expression?');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const num1 = getRandomNumber(1, 50);
    const num2 = getRandomNumber(1, 50);
    const operator = getOperator();
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateExpression(num1, num2, operator).toString();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    correctAnswers += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
