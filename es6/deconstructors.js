'use strict';

const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const _sunday = daysOfWeek[0];
const _monday = daysOfWeek[1];
const _tuesday = daysOfWeek[2];

console.log(_sunday, _monday, _tuesday);

console.log('========== ES6 ==========');

const [sunday, monday, tuesday] = daysOfWeek;
console.log(sunday, monday, tuesday);


console.log('====================');

const countries = {
    brazil: 'Brasilia',
    eua: 'DC'
};

const {
    brazil,
    eua
    } = countries;

console.log(brazil);
console.log(eua);