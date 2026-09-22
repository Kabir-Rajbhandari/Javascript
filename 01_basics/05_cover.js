// data types
/**
 * Yes, JavaScript is a dynamically typed language. This means you do not need to explicitly declare a variable's data type (like int or string) when you create it. Instead, the data type is determined automatically at runtime based on the value currently assigned to the variable.
 */

/**
 * Primitive data types (Call by value): 7 types
 *  1. String
 *  2. number
 *  3. boolean
 *  4. null
 *  5. undefined
 *  6. bigInt
 *  7. symbol
 */

const name = "john doe"; // -> String
const age = 20; // -> number
const isEmployee = true; // -> boolean
let salary; // -> undefined
const phNo = null; // -> null
// const bigNum = 7465132n; // -> bigInt
const unique1 = Symbol('123'); // -> symbol
const unique2 = Symbol('123');

console.log(unique1 === unique2);


/**
 * Nono-Primitive data types / reference type (Call by reference):
 *  1. Array []
 *  2. Objects{}
 *  3. Functions
 * data type of the non-primitive is object
 */

// array (2d) []
const heros = ["Superman", "Batman", "Spiderman", "Antman"];

// objects (key:value) pair {}
const employeeDetails = {
    id: "001",
    name: "Employee1",
    age: 25,
    gender: "Male",
    salary: 15000.00
}

console.log(heros);
console.log(employeeDetails);

// variable in function
const myFunction = function (){
    console.log("Hello World !");
}

myFunction(); // function call
console.log(typeof(myFunction)); // type of the variable is object function / function object 


// parameterized function
function sumNum(num1, num2){
    return num1 + num2;
}

console.log(sumNum(100, 500));