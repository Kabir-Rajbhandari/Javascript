// Operations in js

let value = 10;
let negValue = -value; // negative value conversion

console.log(value); // 10
console.log (negValue); // -10 

/**
 * Operations:
 *  1. Arithmetic Operations 
 *      - Addition +
 *      - Substraction - 
 *      - Division /
 *      - Multiplication *
 *      - Modulus %
 *      - sqaure ** 
 */

console.log (2+2); // -> add
console.log (2-2); // -> substract
console.log (2*2); // -> multiply
console.log (2/2); // -> divide
console.log (2%2); // -> reminder /modulus
console.log (2**2); // -> sqaure


// => String concatenation 
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " "+ str2); // => Hello World
console.log ("1" + 2); // 12
console.log (1 + "2"); // 12
console.log ("1" + "2"); // 12
console.log ("1" + 2 + 2); // 122
console.log (1 + 2 + "2"); // 32


// => tricky conversion, basically not usage for  real-world code
console.log(+true); // 1
console.log(+""); // 0



// prefix and postfix operator

let encounter = 100;
encounter++; // postfix  -> increment later 
++encounter; // prefix -> increment at the very first
console.log(encounter);


// increment operator example:

let x = 4;
const y = x++;

// 5,4
console.log(`x:${x}, y:${y}`);


let p = 8;
const q = ++p;

//9,9
console.log(`p:${p}, q:${q}`);


/**
 * Operations:
 *  2. Comparison Operation
 *      - greater than >
 *      - less than <
 *      - greater than or equal to >= 
 *      - less than or eqaul to <= 
 *      - equals === (validate with value and data type)
 *      - not equal to != 
 */

console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<=1); // false
console.log(2===1); // false

console.log ("2" > 1); // true
console.log ("02" > 1); // true

// -> mostly avoid this comparison in real-world 
console.log (null > 0); // false
console.log (null == 0); // false
console.log (null >= 0); // true

console.log (undefined > 0); // false


// === strict check (value + data type)