"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

function Cat(name, color){
    this.name = name;
    this.color = color;
}

let fluffy = new Cat('Fluffy', 'white');
let muffin = new Cat('Muffin', 'brown');

Cat.prototype.age = 3;

display(fluffy.age, muffin.__proto__.age);
/* result:
3
3
*/

display(Cat.prototype === muffin.__proto__); // true

fluffy.age = 5;
display(fluffy.age, fluffy.__proto__.age); // 5   3

display(Object.keys(fluffy), Object.keys(muffin));
/* result:
Array {
    0: name
    1: color
    2: age
}
Array {
    0: name
    1: color
}
*/
display(fluffy.hasOwnProperty('age'), muffin.hasOwnProperty('age'));
display(JSON.stringify(fluffy), JSON.stringify(muffin));
/*result:
{"name":"Fluffy","color":"white","age":5}
{"name":"Muffin","color":"brown"}
*/
Cat.prototype.age = 4;
display(fluffy.age, muffin.age); // 5   4


