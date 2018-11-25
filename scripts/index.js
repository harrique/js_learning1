"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 4;

let fluffy = new Cat('Fluffy', 'white');
let muffin = new Cat('Muffin', 'brown');

display(fluffy.age, muffin.age);    // 4   4
display(Cat.prototype === fluffy.__proto__);    // true

Cat.prototype = {age: 6};

let snowbell = new Cat('Snowbell', 'black');
display(fluffy.age, snowbell.age);    // 4   6

display(Cat.prototype === fluffy.__proto__);    // false