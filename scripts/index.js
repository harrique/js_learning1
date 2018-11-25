"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

class Animal{
    constructor(voice){
        this.voice = voice || 'grunt';
    }

    speak(){
        display(this.voice);
    }
}

class Cat extends Animal{
    constructor(name, color){
        super('Meow');
        this.name = name;
        this.color = color;
    }
}

let fluffy = new Cat('Fluffy', 'white');
fluffy.speak(); //Meow

display(Object.keys(fluffy.__proto__.__proto__));