"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

let cat = {
    name: {first: 'Vasya', last: 'The best'},
    age: 3,
    color: 'gray'
};

Object.defineProperty(cat, 'fullName', {
   get: function () {
       return this.name.first + " " + this.name.last;
   },
   set: function (value) {
       let nameParts = value.split(' ');
       this.name.first = nameParts[0];
       this.name.last = nameParts[1];
   } 
});

display(cat.fullName);

cat.fullName = "John Doe";

display(cat.fullName);

/* result:
Vasya The best
John Doe
*/