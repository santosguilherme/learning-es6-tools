'use strict';

function* countries(){
    yield 'Pretoria';
    yield 'Brasilia';
    yield 'DC';
    yield 'Lisboa';
}

var generator = countries();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


/**
 * ASYNC
 */

import request from 'request';

function* getData() {
    const api1 = yield request('http://jsonplaceholder.typicode.com/users');
    const dadosApi1 = JSON.parse(api1);
    var api2 = yield request('http://jsonplaceholder.typicode.com/albums');
    var dadosApi2 = JSON.parse(api2);
}