// Constants and Variables
const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);
console.log("Area:", PI * radius * radius);

// Type Coercion
const one = 1;
const two = '2';

console.log("one + two:", one + two); // "12" (string)
console.log("one + Number(two):", one + Number(two)); // 3 (number)

// Global and Block Scope
let course = "CSE131"; // global scope

if (true) {
    let student = "John";
    console.log(course);  // works
    console.log(student); // works
}

console.log(course); // works
// console.log(student); // ❌ would cause an error
