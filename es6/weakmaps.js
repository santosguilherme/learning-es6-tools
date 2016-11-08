"use strict";

const _name = new WeakMap();

class Person {
    constructor(name) {
        _name.set(this, name);
    }

    sayName() {
        return _name.get(this);
    }
}

const me = new Person('Guilherme');
console.log(me.sayName());
console.log(_name.get(this));