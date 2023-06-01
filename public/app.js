import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// First 10 lections are in sandbox.ts file
console.log("-------------------------------------------------------------------------------------------------");
// Lection 11: The DOM & Type Casting
const anchor = document.querySelector("a");
//console.log(anchor.href); //'anchor' is possibly 'null'
if (anchor) {
    console.log(anchor.href);
}
const anchor2 = document.querySelector("a");
// exclamation mark tells us that for sure anchor tag won't be null, so we can ignore error
console.log("Anchor => ", anchor2.href);
const form = document.querySelector(".new-item-form");
console.log("Form childrens => ", form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
console.log("type => ", type, ", toFrom => ", toFrom, ", details => ", details, ", amount => ", amount);
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //let valuesExample = [toFrom.value, details.value, amount.valueAsNumber];
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        //doc = new Invoice(...valuesExample); //A spread argument must either have a tuple type or be passed to a rest parameter.
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log('Form submit (Payment/Invoice) => ', doc);
    list.render(doc, type.value, 'start');
});
// Lection 12: Classes && Lection 13: Public, Private & Readonly
class InvoiceTest {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Mario", "work on the Mario website", 250);
const invTwo = new Invoice("Luigi", "work on the Luigi website", 300);
console.log("Invoice one => ", invOne);
console.log("Invoice one format func => ", invOne.format());
let invoices = [];
//invoices.push('Hello') //Argument of type 'string' is not assignable to parameter of type 'Invoice'
invoices.push(invOne);
invoices.push(invTwo);
//invOne.client = 'Yoshi'; //Cannot assign to 'client' because it is a read-only property.ts
invTwo.amount = 400;
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log('Person speaks => ', text);
    },
    spend(amount) {
        console.log('Person spend => ', amount);
        return amount;
    }
};
console.log('Is Person Interface => ', me);
const greetPerson = (person) => {
    console.log('Greet person => Hello', person.name);
};
greetPerson(me);
// Lection 16: Interfaces with Classes;
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 300);
let docs = [];
//docs.push(me); //Argument of type 'IsPerson' is not assignable to parameter of type 'HasFormatter'.
docs.push(docOne);
docs.push(docTwo);
docs.push(invOne);
console.log('Docs => ', docs);
// Lection 18: Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: 'yoshi', age: 40 });
console.log('docThree with UID => ', docThree);
// with intefaces
// Lection 19: Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 2] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 4] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 5] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'shaun' }
};
const docFive = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['apple', 'juice', 'milk']
};
console.log('docFour generic data with object => ', docFour);
console.log('docFour generic data with strings array => ', docFive);
// Lection 20: Tuples
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, true];
//tup[0] = false; //Type 'boolean' is not assignable to type 'string'
tup[0] = 'ken';
tup[1] = 30;
let student;
student = ['chun-li', 23242];
