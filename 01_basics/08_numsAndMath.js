const score = 10; 

// by explicitly
// new is a object 
const balance = new Number (999999);
console.log(balance);


// number function / method

console.log (balance.toString());

console.log (balance.toString().length);

//  / .00 float value 
console.log (balance.toFixed(2));


//precision value
const otherNum = 120.49;
console.log (otherNum.toPrecision(4));


// localeString
const currency = 1000000;
// => Indian currency ones, tens format
console.log(currency.toLocaleString('en-In'));

// => max value and min value
// => max_safe_ineteger and min_safe_integer

// => Maths concept -> import math library


console.log (Math);
// => absolute value (converts negative value to positive one)

console.log (Math.abs(-100));
console.log (Math.abs(500));

// => round function
console.log (Math.round(5.48)); // -> 5
console.log (Math.round(5.55)); // -> 6

// => ceil (top value) || => floor (base value/lowest)
console.log (Math.ceil(4.11)); // -> 5
console.log (Math.floor(4.10)); // -> 4


console.log (Math.min(0,1,-2,8,10)); // -> -2
console.log (Math.max(0,1,-2,8,10)); // -> 10

// random function
console.log (Math.random()); // => value must be within 0 - 1
console.log ((Math.random()* 10) + 1);



const min = 5;
const max = 25;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
 
