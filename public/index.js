"use strict";
console.log('Hello there');
console.log('Naenda shambani by jioni');
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
let greet = () => {
    console.log('Hey there');
};
let green;
let animals = (a, b, c = 'Yes') => {
    console.log(a + b);
    console.log(c);
};
animals(33, 30);
let logContact;
logContact = (psaa) => {
    console.log(`${psaa.name} is ${psaa.age} years old`);
};
