import '../styles/index.scss';
import cdisplay from "./modules/display.js";

console.log('OK');

let a = {
  b: 5,
  c: 10,
};

let d = [1,2,"333"];
let e = function(x){
    console.log(x);
};

cdisplay("Hello world" , a, d, e);