// * sample code of interface

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "Sung",
//   age: 30,
//   gender:  "male"
// }


// * sample code of class

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const sung = new Human("Sung", 30, "male");


// * sample code of function
// $ tsc-watch src/index.ts

const sayHi = (person: Human, message?:string): string => {
  return `Hi, ${person.name}, you are ${person.age} and you are a ${person.gender}. ${message ? message : ""}`;
}

console.log(sayHi(sung));


// just write this to compile

export {};