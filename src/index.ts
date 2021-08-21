const name = "Sung",
  age = 30,
  gender = "male";

const sayHi = (name:string, age:number, gender:string): string => {
  return `Hi, ${name}, you are ${age} and you are a ${gender}`;
}

console.log(sayHi("Catherine", 27, "female"));

export {};