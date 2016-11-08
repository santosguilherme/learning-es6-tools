"use strict";

var showMessage = function (message) {
    console.log('old', message);
};

showMessage('Using old method');

showMessage = (message) => {
    console.log('new', message);
};

showMessage('Using new method');


function Brazil(intro) {
    this.intro = intro;
}

Brazil.prototype.getStates = function (states) {
    return states.map(function (state) {
        return this.intro + state
    }.bind(this));
};

var brazil = new Brazil('Brazil with standard functions: ');
console.log(brazil.getStates(['SC', 'RS', 'PR']));

function NewBrazil(intro) {
    this.intro = intro;
}

NewBrazil.prototype.getStates = function (states) {
    return states.map((state) => this.intro + state);
};

var newBrazil = new NewBrazil('Brazil with arrow functions: ');
console.log(newBrazil.getStates(['SC', 'RS', 'PR']));