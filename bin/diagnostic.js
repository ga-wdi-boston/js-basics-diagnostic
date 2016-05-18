'use strict';

const ask = require('../lib/ask.js');

let answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer >= 1 && <= 10) {
   console.log("Your guess needs to be between 1 and 10");
   break;
  }
}
