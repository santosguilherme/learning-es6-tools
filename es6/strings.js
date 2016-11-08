'use strict';

const food = 'hamburguer';

const isSubstring = food.indexOf('ham', -1) > -1;
console.log(isSubstring);

console.log('========== INCLUDES ==========');

console.log(food.includes('ham'));

console.log('====================');

let words = 'x';
let index = 0;
while (index < 3) {
    words += words;
    index++;
}

console.log(words);

console.log('========== REPEAT ==========');

console.log('x'.repeat(3));