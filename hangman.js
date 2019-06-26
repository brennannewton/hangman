/* eslint-disable no-console */
const readlineSync = require('readline-sync');

const words = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];

// Choose word, init blank array
const x = Math.floor(Math.random() * words.length);
const word = words[x];
const letters = word.split('');
const size = letters.length;
const blanks = new Array(size);
for (let i = 0; i < size; i++) {
  blanks[i] = '_';
}
console.clear();
console.log(blanks);

// Prompt user to guess letters until they guess the word or make 5 strikes
let charInput = readlineSync.question('Guess a letter: ');

let isRight = false;
let tries = 5;
let isFinished = false;
let count = 0;

while (isFinished === false) {
  if (!blanks.includes(charInput)) {
    for (let j = 0; j < size; j++) {
      if (letters[j] === charInput) {
        blanks[j] = charInput;
        isRight = true;
        count += 1;
        if (count === size) {
          isFinished = true;
        }
      }
    }
  }
  if (isRight === false) {
    tries -= 1;
    console.log(`Wrong guess! You have ${tries} tries left`);
  }
  if (tries === 0) {
    isFinished = true;
  }
  if (isFinished === false) {
    console.log(blanks);
    charInput = readlineSync.question('Guess a letter: ');
  }
  isRight = false;
}

// Output the results of the game
if (tries === 0) {
  console.log('Too many strikes (>.<)');
  console.log();
} else {
  console.log(blanks);
  console.log('You guessed it (^v^)');
  console.log();
}
