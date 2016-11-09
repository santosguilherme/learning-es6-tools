'use strict';

console.log('========== Optional Parameters ==========');

/**
 * ES5
 */

function person(name) {
    name = name || 'Guilherme';
    return name;
}

console.log(person());
console.log(person('John'));


/**
 * ES6
 */

function newPerson(name = 'Guilherme Santos') {
    return name;
}

console.log(newPerson());
console.log(newPerson('John John'));


console.log('========== Infinite Parameters ==========');

/**
 * ES5
 */

function countries() {
    for (var index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}

countries('Brazil');
countries('Canada', 'USA', 'Mexico');


/**
 * ES6
 */

function newCountries(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

countries('Brazil');
countries('Canada', 'USA', 'Mexico');