"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

let cat = {
    name: {first: 'Vasya', last: 'The best'},
    age: 3,
    color: 'gray'
};

display(cat.name);
Object.defineProperty(cat, 'name', {writable: false});
cat.name.first='Barsik';
display(cat.name);
Object.freeze(cat.name);
// cat.name.first='murzik'; - not possible
display(Object.getOwnPropertyDescriptor(cat, 'name'));