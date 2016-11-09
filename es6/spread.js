'use strict';

/**
 * ES5
 */

var countries = ['Brazil', 'USA'];
var countriesFull = ['Mexico'].concat(countries);

console.log(countriesFull);


/**
 * ES6
 */

const newCountries = ['Canada', 'USA'];
const newCountriesFull = ['Mexico', ...countries];

console.log(newCountriesFull);