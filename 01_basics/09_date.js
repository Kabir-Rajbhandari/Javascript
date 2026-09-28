// => Date & Time

/**
 * JavaScript Date objects represent a single moment in time in a platform-independent format.
 */

let myDate = new Date ();

console.log (myDate.toString());
console.log (myDate.toDateString());
console.log (myDate.toLocaleDateString());
console.log (myDate.toISOString());
console.log (myDate.toJSON());

console.log (typeof(myDate));


// => particular set of date
console.log (new Date (2001, 0, 1).toDateString());


// => specified format wise date

let todaysDate = new Date ("2026-09-28");
console.log(todaysDate.toLocaleString());

console.log("MM-DD-YYYY" + "\n");

// mm-dd-yyyy
let customDate = new Date ("01-01-2001");
console.log (customDate.toDateString());   


// time stamp:

let myTimeStamp = Date.now();

console.log (`My time-stamp: ${myTimeStamp}`);
console.log (customDate.getTime());


console.log (Math.floor(Date.now() / 1000));

// some more methods / sections:
let specifiedDate = new Date ();

// prints 8 as the indexing is begins from 0th position so + 1 is necessary to get month
console.log (specifiedDate.getMonth() + 1 );

// getFullYear(), getMonth(), getDay()

// mostly used methods => toLocaleString()

specifiedDate.toLocaleString ('default', {
    weekday: "long"
});
console.log (specifiedDate);