'use strict';

const countries = {
    brazil: 'Brasília',
    usa: 'DC'
};

console.log(countries['usa']);

const listCountries = Object.keys(countries);

listCountries.map((country) => {
    return console.log(country);
});

console.log('=================== MAPS ===================');

const countriesMap = new Map();
countriesMap.set('Brazil', 'Brasília');
countriesMap.set('usa', 'DC');

for (const [key, value] of countriesMap) {
    console.log(key, value);
}