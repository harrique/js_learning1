"use strict";

import '../styles/index.scss';
import display from "./modules/display.js";

let cat =Object.create(Object.prototype,
    {
        name: {
            value: 'Vasya',
            enumerable: true,
            writable: true,
            configurable: true
        },
        age: {
            value: 8,
            enumerable: true,
            writable: true,
            configurable: true
        },
        displayName:{
            value: function(){ display(this.name); },
            enumerable: true,
            writable: true,
            configurable: true
        }
    }
    );

cat.displayName();