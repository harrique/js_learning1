"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

let arr1 = ['red', 'blue', 'green'];
let arr2 = ['black', 'white', 'yellow', 'pink'];

Object.defineProperty(Array.prototype, 'last',
    {
        get: function(){
            return this[this.length - 1];
        }
    }
);

display(arr1.last);
display(arr2.last);