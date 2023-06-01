let character = 'mario'; //string
let age = 30; //number
let isBlackBelt = false; //boolean;

//character = 20; //Type 'number' is not assignable to type 'string'
character = 'luigi';

//age = 'yoshi'; //Type 'string' is not assignable to type 'number'
age = 40;

//isBlackBelt = 20; //Type 'number' is not assignable to type 'boolean'
isBlackBelt = false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

//console.log(circ('hello')); //Argument of type 'string' is not assignable to parameter of type 'number'
console.log('Func circ() => ', circ(7.5));


// #4 Lection: Object & Arrays
//arrays
let names = ['luigi', 'mario', 'yoshi'];

//names.push(3); //Argument of type 'number' is not assignable to parameter of type 'string'
names.push('toad');

let numbers = [10, 20, 30, 40];

//numbers.push('shaun'); //Argument of type 'string' is not assignable to parameter of type 'number'
numbers.push(25);

let mixed = ['ken', 4, 'chun-li', 8, 9];

//mixed.push(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'
mixed.push(3);
mixed.push('marko');
mixed[0] = 3;

//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

//ninja['name'] = 30; //Type 'number' is not assignable to type 'string'
//ninja.age = 'mario' //Type 'string' is not assignable to type 'number'
//ninja.skills = ['fighting', 'sneaking']; //Property 'skills' does not exist on type '{ name: string; belt: string; age: number; }'
ninja['name'] = 'marko';
ninja.age = 40;

/* ninja = {
    name: 'yoshi',
    belt: 'orange',
    //age: 40
} //Property 'age' is missing in type '{ name: string; belt: string; }' but required in type '{ name: string; belt: string; age: number; }' */

/* ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['hiding', 'fighting'];
} //Type '{ name: string; belt: string; age: number; skills: string[]; }' is not assignable to type '{ name: string; belt: string; age: number; }' */

// #5 Lection: Explicit types
let character2: string;
let age2: number;
let isLoggedIn: boolean;

//age2 = 'luigi'; //Type 'string' is not assignable to type 'number'
age2 = 30;
//isLoggedIn = 'yes'; //Type 'string' is not assignable to type 'boolean'
isLoggedIn = true;

//arays
//let ninjas: string[];
//ninjas.push('ninja1'); //Uncaught TypeError: Cannot read properties of undefined (reading 'push')
//ninjas = [10, 23]; //Type 'number' is not assignable to type 'string'
let ninjas: string[] = [];
ninjas.push('shaun');

// union types
let mixed2: (string|number|boolean)[] = [];
//mixed2.push({}) //Argument of type '{}' is not assignable to parameter of type 'string | number | boolean'
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log('mixed2 => ', mixed);

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};
//ninjaOne = 'hello'; //Type 'string' is not assignable to type 'object'

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}
//ninjaTwo = {name: 'mario', age: 20, beltColour: 'black', skills: ['figthing']} //  Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; age: number; beltColour: string; }'
ninjaTwo = {name: 'mario', age: 20, beltColour: 'black'}

// #6 Lection: any type
let age3: any = 25;
console.log('age3 (number) => ', age3)
age3 = '25';
console.log('age3 (string) => ', age3)
age3 = false;
console.log('age3 (boolean) => ', age3)
age3 = {name: 'luigi'}
console.log('age3 (object) => ', age3)

let mixed3: any[] = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log('mixed3 (any[]) => ', mixed3);

let ninja2: { name: any, age: any };
ninja2 = { name: 25, age: 'yoshi'};
console.log('ninja2 (any{}) => ', ninja2);

// Lection 8: Functions Basics

let greet = () => {
    console.log('Greet => hello world')
}

// greet = 'hello' //Type 'string' is not assignable to type '() => void'

let greet2: Function;

greet2 = () => {
    console.log('Greet2 => hello, again')
}


// void represents complete lack of return in function
const add = (a: number, b: number, c?: number | string): void => {
    console.log('Add function => ', a+b);
    console.log('Check if optional parametar is defined in add function => ', c);
}

// add(5, '10'); //Argument of type 'string' is not assignable to parameter of type 'number'
add(5, 10);
add(5, 10, 'defined');

const minus = (a: number, b: number) => {
    return a+b;
}

// result will become type of return value of minus function
let result = minus(10, 7);

//result = '25'; //Type 'string' is not assignable to type 'number'
result = 25;

// if we want we can also explicity define type of function

const minus2 = (a: number, b: number): number => {
    return a+b;
}

// Lection 9: Type Aliases

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet3 = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}

const greet3Again = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}

// Lection 10: Function Signatures

//example 1

let greetEx1: (a: string, b:string) => void; 
greetEx1 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`) 
}
greetEx1('Marko', 'hii!')

//example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string): number => {
    if(action === "add") {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

console.log(calc(10, 20, 'add'));

//example 3

let logDetails2: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};

logDetails2 = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
}

logDetails2({name: "Marko", age: 27})

