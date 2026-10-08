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

// for-in loop in Map

const map2 = new Map();

map2.set ('NEP', "Nepal");
map2.set ('IN', "India");
map2.set ('FR', "France");

// not iterable
for (const key in map2){
    console.log(key);
}


// for-each loop -> Higher order function

const coding = ["py", "js", "cpp", "rb", "dart", "kt", "java"];

// => approach 1st

// => call back function no function name defined
coding.forEach(function (item){
    console.log(item);
    
});

// approach 2
// arrow function concept

coding.forEach(
    (item) => {
        console.log(item);
    }
);


function printMe (item){
    console.log(item);   
}


// => only reference printMe not the execution one printMe()
coding.forEach (printMe);


// => item -> each item from the array
// => index -> each item index of the array
// => arr -> overall arr value
coding.forEach((item,index,arr) => {
    console.log(item, index, arr);
});

// [{},{},{}]
// ["","",""]

const employeeList = [
    {
        employeeId: "E001",
        employeeName: "Qwerty Iop",
        employeeIsPresent: false
    },
    {
        employeeId: "E002",
        employeeName: "John Doe",
        employeeIsPresent: true
    },

    {
        employeeId: "E003",
        employeeName: "Asdfg Jkl",
        employeeIsPresent: true
    }
];

// from database the response cames in array and the value is always in the object format, so that the iteration for this type is necessary

employeeList.forEach((item) => {
    console.log(item.employeeId); // => log all the empId
    console.log(item.employeeIsPresent); //=> log all the empState
    
});


// => some more on forEach loop

const loops = ["for", "forEach", "for in", "for of", "while", "do while"];

// const storeValue = loops.forEach( (item) => {
//     console.log(item); 
//     return item; // without return or with return the item is not passed to the variable
// });

// console.log(storeValue);


// methods or functon

const myNum = [1,2,3,4,5,6,7,8];
// filter does the same work as forEach does but the forEach doesnot return the value whereas the filter return the value
const storemyNum = myNum.filter((num) => num > 4); //=> need to pass condition in filter
// const storemyNum = myNum.filter ( (num) => {
//     num > 4;
//     return num > 4;
// } ); // return empty array for successful return we need to include return because we have open the scope {}, 
// note: if we have open the scope {} we need to add return for the value, if their is no scope / implicit function then no need to write the return..
console.log(storemyNum);


// same with forEach loop

const newNum = [];

myNum.forEach( (num) => {
    if (num > 5){
        newNum.push(num);
    }
} );

console.log(newNum);



// simple concept of filter method:

const books = [
    {
        book:"Book 1", 
        genre: "Fiction",
        publish: 2001,
        edition: 2005
    },{
        book:"Book 2", 
        genre: "History",
        publish: 1986,
        edition: 1999
    },{
        book:"Book 3", 
        genre: "Non-Fiction",
        publish: 2003,
        edition: 2007
    },{
        book:"Book 4", 
        genre: "Fiction",
        publish: 2002,
        edition: 2008
    },{
        book:"Book 5", 
        genre: "History",
        publish: 2003,
        edition: 2009
    },{
        book:"Book 6", 
        genre: "History",
        publish: 2004,
        edition: 2012
    },{
        book:"Book 7", 
        genre: "Science",
        publish: 2001,
        edition: 2011
    },
];

const userFilter = books.filter(
    (bookItem) => bookItem.genre === "Fiction"
);

console.log(userFilter);


const publishAfter2k = books.filter ((bk) => {
    return (bk.publish >= 2000 && bk.genre === "Fiction");
});

console.log(publishAfter2k);

// another method => map ()


const numInArr = [1,2,3,4,5,6];

const additionNum = numInArr.map( (num) => {
    return num + 10;
});

console.log(additionNum);

const newAddArr = [];
numInArr.forEach((num) => {
    newAddArr.push (num + 10);
});

console.log(newAddArr);


// chainning method ()
const chainingArr = numInArr
                    .map((num) => num * 10)
                    .map((num) => num + 1);
console.log(chainingArr);

const anotherOne = numInArr
                   .filter((num) => num > 5)
                   .map ((num) => num * 100);
console.log(anotherOne);
