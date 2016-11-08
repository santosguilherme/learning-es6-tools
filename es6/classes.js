'use strict';

class Brazil {
    constructor() {
        this._states = ['SC', 'PR', 'RS'];
    }

    get states() {
        return this._states.map((state) => this._intro + state);
    }

    set intro(intro) {
        this._intro = `Hello, getting started: ${intro} - `;
    }
}

var brazil = new Brazil();
brazil.intro = 'Wtf! Classes?';
console.log(brazil.states);


class User {
    constructor(login) {
        this._login = login;
    }

    login() {
        console.log(`Welcome ${this._login}`);
    }

    logout() {
        console.log(`Bye ${this._login}`);
    }
}

class Person extends User {
    constructor(login) {
        super(login);
    }

    login() {
        console.log(`Welcome Sir/Mrs. ${this._login}`);
    }

    logout() {
        console.log(`Bye Sir/Mrs. ${this._login}`);
    }
}

const john = new Person('johnjohn');
john.login();
john.logout();