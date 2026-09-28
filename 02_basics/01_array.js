// array in js
// -> different type of element 
// -> can be mutable
const arr = ["How are you ?",2,7,8,9,10];
// -> indexing
console.log (arr[0]); 

// shallow copies & deep copies

// shallow copy: a copy whose properties share the same references as those of the source object from which the copy was made. -> changing can be done on copy one not on the orginal value

// deep copy: a copy whose properties do not share the same references as those of the source object from whih the copy was made.

// create array via obj
const arr2 = new Array (1,2,3,4,5,6,7);
console.log(arr2);


// array methods
// push () -> add element at the last
arr2.push(11);
arr2.push (14);
console.log (arr2);


// pop () -> remove the last element
arr2.pop ();
console.log(arr2);


// unshift () -> add element at the very first
arr2.unshift (17);

console.log(arr2);

// shift () -> remove the very first element
arr2.shift();
console.log (arr2);


// questionare methods => includes 
console.log (arr2.includes (4));
console.log (arr2.indexOf (20)); // -> -1

// join () -> bind the value in a String
const newArr = arr2.join();

console.log (arr2); // type: Array
console.log (newArr); // the value is same but the data type is String via comma seperated \\ type: string

// -> slice and splice

const marvelStudioHeros = ["Thor", "IronMan", "AntMan", "SpiderMan", "Dr.Strange", "SuperWomen"];

console.log (`Orginal Arr: ${marvelStudioHeros}`);

// slice () -> get the element from the array n-1

const sliceArr = marvelStudioHeros.slice(1,5);

console.log (sliceArr);
console.log (`O: ${marvelStudioHeros}`);


// splice () -> get the element from the start index to the ending index (0,4) and also update the orginal array elements after splice 
const spliceArr = marvelStudioHeros.splice (1,5);
console.log (spliceArr);

console.log (`O: ${marvelStudioHeros}`);


// nested array 

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

marvelHeros.push(dcHeros); // nested 

console.log (marvelHeros);
console.log (marvelHeros[3] [2]);


const allHeros = marvelHeros.concat(dcHeros); // concate two or more arrays and rweturn a new array elements

console.log (marvelHeros);
console.log (dcHeros);

console.log (allHeros);


// spread method ... : best way to combine 2 or more arrays in a real-world programming / developing

const newAllHrs = [...marvelHeros, ...dcHeros];
console.log (newAllHrs);


// flat method: return new single array element

const nestedArr = [1,2,3,4,5,[6,7,8,9],10,11,12,[13,14,[15,16,17],18],19,20];

console.log (nestedArr);

const flatArr = nestedArr.flat(Infinity); // -> how depth ()

console.log (flatArr);


// mostly used method

// isArray and from

console.log (Array.isArray ("JavaScript")); // false
console.log (Array.from ("JavaScript")); // convert to array

console.log (Array.from ({name: "John Doe"})); // interesting case, as we need to mention either from keys or values otherwise it shows empty array


// of 

let score1 = 100;
let score2 = 150;
let score3 = 200;

const newArrScore = Array.of(score1, score2, score3);
console.log (newArrScore);
