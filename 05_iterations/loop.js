// loop:

// for loop

// => initialization ---> condition ---> increment
for (let i = 0; i <= 5; i++){
    console.log (`Printing ${i}`);
}

// nested loop
console.log('nested loop');


for (let i = 1; i < 4; i++){
    console.log(`Outer loop: ${i}`);
    for (let j = 1; j < 3; j++){
        console.log(`Inner loop: ${j}`);
    }
}

// sample multiplication: 

for (let i = 1; i <= 5; i++){
    console.log(`\nMultiplication of ${i}`);
    for (let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${(i*j)}`);
    }
}


const loopArrValue =  ["qwerty", 0, 45, 89, "john"];

for (let i = 0; i <= (loopArrValue.length - 1); i++){
    console.log("Array Value: " + loopArrValue[i]);

}

// break and continue

for (let i = 1; i <= 20; i++){
    if (i === 10){
        // break; // => print until 9 and then exit the loop
        continue; // => print until 9 and skip 10 and again start the print from 11
    }
    console.log(i);
    
}


console.log(`\nWhile Loop\n`);

// while and do-while loop

// => while loop

let i = 1;

while (i <= 10){
    console.log(i);
    i++;
}

let myArr = [1,2,3,4,5,6];
let arrIndex = 0;

while (arrIndex <= (myArr.length - 1)){
    console.log(`Array Value: ${myArr[arrIndex]}`);
    arrIndex ++;
}

// => do-while loop


// work first condition checking later, like simply the scope statement syntax usually run once
let score = 11;
do{
console.log ("Your Score is " + score);
score ++;
}while(score <= 10);


// => High Order Array loops

// => for of, for in, for each loop

// => for of loop

const numArr = [1,2,3,4,5,6,7];

for (const val of numArr){
    console.log(val);
    
}

const greetings = "Hello World";

for (const greet of greetings){
    console.log("each character " + greet );
}


// Maps => kind of Array but it does have iterations
// A JavaScript Map is an object that can store collections of key-value pairs, similar to a dictionary in other programming languages.Maps differ from standard objects in that keys can be of any data type. no duplicate value, only unique Map's collection.
const map = new Map();
map.set ('a', 1);
map.set ('b', 2);
map.set ('c',3);

// no duplicate value collections
map.set ('a', 1);

// but can update the key's value
map.set ('a', 5); // => it will update the key a to value 1 to 5.

console.log(map);

// for of loop in map

for (const key of map){
    console.log(key); //log in array   
}

for (const [key, value] of map){
    console.log(`${key}:- ${value}`);
}


// object poin of view: object is not iterable

const myObj = {
    a:1,
    b:2,
    c:3
}

// for (const key of myObj){
//     console.log(key); // display typeError (Object is not iterable 'myObj') but do have other iteration way not from for of..
// }


// for in loop

const programmingLang = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    cpp: 'C++',
    swift: 'swift',
    java: 'java'
}

for (const key in programmingLang){
    console.log(key); // => this will prints the key of an object in a for-in loop
    console.log(programmingLang[key]); // prints the value of an object in a for-in loop

    console.log(`${key} shortcut is for ${programmingLang[key]}`);   
}


// similarly in for loop only

const checking = {
    userLoggedIn: true,
    hasVoterCard: false,
    isAbove18: false,
    hasDrivingLicense: false,
    userAge: 17
}

console.log(checking["isAbove18"]);


// for-in loop in Array

const arr2 = [1,2,3,4,5,6];

for (const key in arr2){
    console.log(arr2[key]);
}