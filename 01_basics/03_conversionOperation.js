// conversion in js
let score = "35";
let userInput = true;

/* => type is number but the value is set accordingly:
 =>  if the value is set to be String then when conversion into Number the value set to be NaN.
 => if the value is set to be null then when conversion into Number the value set to be 0.
 => if the value is set to be undefined then when conversion into Number the value set to be NaN.
 => if the value is set to be true / false then when conversion into Number the value set to be 1 / 0 . ( True = 1, False = 0)
 */

console.log (typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof(valueInNumber)); 

// Nan => Not a number
let typeConversion = Number (userInput);
console.log (typeof (typeConversion)); // => data type is number
console.log(typeConversion); // => Not a Number
// NaN is also a special type

// type conversion to Boolean

let isLoggedIn = "concept";
console.log(typeof isLoggedIn);
let boolResult = Boolean(isLoggedIn);
console.log (boolResult);
console.log(typeof (boolResult));

/*
    => if the value is empty string while conversion to Boolean then the value is set to be false,
    => if the value is string while conversion to Boolean then the value is set to be true,

    1 => true & 0 => false
 */

    // and more conversion can be done