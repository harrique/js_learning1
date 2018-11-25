"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

function Animal(voice){
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function(){
  display(this.voice);
};

function Cat(name, color){
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

let fluffy = new Cat('Fluffy', 'white');

fluffy.speak(); //Meow

display(fluffy.__proto__ , fluffy.__proto__.__proto__); //Cat   Animal

