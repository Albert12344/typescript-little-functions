//function returned Hello + person.name with type
var person = {
    name: "Adam",
    age: 15,
};
function greet(person) {
    return "Hello " + person.name;
}
console.log(greet(person));
;
var person1 = {
    name: "Armen",
    age: 15,
};
function greet1(person) {
    return "Hello " + person.name;
}
console.log(greet1(person1));
//function returned Hello + person.name with class
var getPersonName = /** @class */ (function () {
    function getPersonName(name) {
        this.person2 = name;
    }
    getPersonName.prototype.greetPerson = function () {
        return "Hello " + this.person2;
    };
    return getPersonName;
}());
var person2 = new getPersonName("Abo");
console.log(person2.greetPerson());
//some types and never
function determineTheType(type) {
    if (typeof type === "string") {
        console.log(type);
    }
    else if (typeof type === "number") {
        console.log(type);
    }
    else if (typeof type === "boolean") {
        console.log(type);
    }
    else {
        console.log(type);
    }
}
//function returned number
function returnNumber(x, y) {
    return x + y;
}
console.log(returnNumber(1, 2));
//function returned string or number
function returnStrigOrNumber(x, y) {
    return x + y;
}
console.log(returnStrigOrNumber(1000, " Barev"));
//function returned numbers array
function returnArray(x) {
    return x;
}
console.log(returnArray([1, 2, 3, 4, 5]));
//function returned array any type array
function returnAnyTypeArray(x, y, z) {
    return [x, y, z];
}
console.log(returnAnyTypeArray(1000, "angam", true));
