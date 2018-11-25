"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

function Cat(){
    this.name = "Vasya";
    this.age = 8;
    this.displayName = function () {
        display(this.name);
    };
}

let cat = new Cat();
cat.displayName();