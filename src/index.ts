console.log('Hello there')
console.log('Naenda shambani by jioni')

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    console.log(input);
})

let greet = ( ) => {
    console.log('Hey there')
}

let green: Function;
let animals = (a: number, b: number, c: string | boolean = 'Yes'){
    console.log(a + b);
    console.log(c)
}

animals(33, 30);

//signature
type stringOrNumber = string | number;
type objectWithName = {name: string, uid: stringOrNumber};

// type person = {
//     name: string,
//     age: number
// }
// let logDetails: (obj: {
//     name: string, 
//     age: number
//     }
// ) => void;

// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} in ${ninja.age} years old`);
// }

//  logDetails('Aidan', 40);

 let logContact: (obj: {name: string, age: number}) => void;
 type contact = {name: string, age: number};

 logContact = (psaa: contact) => {
    console.log(`${psaa.name} is ${psaa.age} years old`);
 }
