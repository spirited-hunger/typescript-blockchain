"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Sung",
    age: 30,
    gender: "male"
};
const sayHi = (person, message) => {
    return `Hi, ${person.name}, you are ${person.age} and you are a ${person.gender}. ${message ? message : ""}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map