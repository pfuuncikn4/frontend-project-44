import readlineSync from "readline-sync";
 
 export default function isEven() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
      console.log(`Hello, ${name}`);
      console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let i = 0;
  while (i < 3) {
    const random = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${random}`)
    const name = readlineSync.question('Your answer: ');
    let reversename = '';
    if (name === 'yes') {reversename ='no'}
    else if (name === 'no') {reversename = 'yes'}
 
    if (random % 2 === 0 && name === 'yes') {i += 1, console.log('Correct!')}
    else if (random % 2 !== 0 && name === "no") {i += 1,  console.log('Correct!')}
    else {return console.log(`Answer "${name}" if the number is even, otherwise answer "${reversename}".`)}
  }
  console.log(`Congratulations, ${name}!`)
};