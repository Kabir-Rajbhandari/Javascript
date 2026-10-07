// switch statement

const month = 4;

switch (month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Out of range..");
        break;
}


// truthy case: 


// const userEmail = undefined; // => False 0
// const userEmail = null; //=> False 0
// const userEmail = ""; // => False 0
const userEmail = []; // => True

if (userEmail){
    console.log("True");   
}
else if (!userEmail){
    console.log("False ");
}


// truthy and falsy values:
/**
 * . false, 0, -0, BigInt 0n, "", null, undefined, NaN
 * . true, "0", 'false', " ", [], {}, function(){}
 */

// checking the empty value in array and object

const empArr = [];
const empObj = {};

if (empArr.length === 0){
    console.log("Empty Array");    
}

if (Object.keys(empObj).length === 0){
    console.log("Empty Object");
}



// Nullish Coalescing Operator (??): null, undefined


let sampleVal; // => undefined

// sampleVal = 2 ?? 5; // => 2
// sampleVal = null ?? 6; // => 6

sampleVal = undefined ?? 7; // => 7

// sampleVal = null ?? 9 ?? 11 // => 9 - which value came after the null || undefined
console.log(sampleVal);


// => Terniary Operator

// condition ? true : false

const pizzaPrice = 560;

pizzaPrice >= 500 ? console.log("Expensive Pizza..") : console.log("Budget Friendly Pizza..");
