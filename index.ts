//function returned Hello + person.name with type

type Person = {
    name: string;
    age: number;
};

const person: Person = {
  name: "Adam",
  age: 15,
};

function greet(person: Person) {
  return "Hello " + person.name;
}

console.log(greet(person));
  

//function returned Hello + person.name with interface

interface Person1 {
  name: string;
  age: number;
};

const person1: Person1 = {
name: "Armen",
age: 15,
};

function greet1(person: Person1) {
return "Hello " + person.name;
}

console.log(greet1(person1));


//function returned Hello + person.name with class

class getPersonName {
  person2: string;

  constructor(name: string) {
    this.person2 = name;
  }

  greetPerson() {
    return "Hello " + this.person2;
  }
}

let person2 = new getPersonName("Abo");

console.log(person2.greetPerson());


//some types and never

function determineTheType(type: string | number | boolean) {
  if(typeof type === "string") {
    console.log(type)
  }else if(typeof type === "number") {
    console.log(type)
  }else if(typeof type === "boolean") {
    console.log(type)
  }else {
    console.log(type)
  }
}

//function returned number

function returnNumber(x: number, y: number) : number {
  return x + y
}


console.log(returnNumber(1,2))

//function returned string or number

function returnStrigOrNumber(x: number, y: string) : string | number {
  return x + y
}

console.log(returnStrigOrNumber(1000, " Barev"))

//function returned numbers array

function returnArray(x: number[]) : number[] {
  return x
}

console.log(returnArray([1, 2, 3, 4, 5]))

//function returned array any type array


function returnAnyTypeArray(x: number, y: string, z: boolean) : any[] {
  return [x, y, z]
}

console.log(returnAnyTypeArray(1000, "angam", true))