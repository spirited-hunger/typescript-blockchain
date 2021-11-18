
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Sung",
  age: 30,
  gender:  "male"
}

const sayHi = (person: Human, message?:string): string => {
  return `Hi, ${person.name}, you are ${person.age} and you are a ${person.gender}. ${message ? message : ""}`;
}

console.log(sayHi(person));

export {};