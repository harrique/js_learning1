"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

let cat = {
    name: {first: 'Vasya', last: 'The best'},
    age: 3,
    color: 'gray'
};

Object.defineProperty(cat, 'name', {enumerable: false});

for (let p in cat){
    display(p + ': ' + cat[p]);
}

display(Object.keys(cat));

display(JSON.stringify(cat));

/* result:
age: 3
color: gray

Array {
0: age
1: color
}

{"age":3,"color":"gray"}
*/