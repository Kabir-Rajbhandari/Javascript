// part 1
// scope statement
// => function / block scope, global scope and lexical scope {}

/**
 * function-scoped: var is function-scoped or global-scoped and ignores block boundaries
 * let and const are strictly block-scoped
 * whereas, all the three are governed by lexical scope, meaning accessibility is determined by where the code is written in the physical source file.
 * 
 * lexical scope: means that a nested inner block or function can reach outward to access variables defined in outer scopes, based entirely on the physical layout of the code in the editor.
 */

// => block scope
function scopeConcept (){
    let a = 10;
    const b = 20;
    var c = 30;
}

if (true){
    let a = 40;
    const b = 50;
    var c = 60;
}

for (let i = 0; i <= 10; i++){

} 

// console.log (a); // => undefined
// console.log (b); // => undefined
console.log (c); // => 60 scope doesnot works in the var case


// => scope part 2
// => nested scope

function one (){
    const userName = "qwerty";

    function two(){
        const website = "youtube.com";
        console.log (userName);
    }
    // console.log(website); => display error
    two(); // => userName
}

one(); // => empty output

// closure concept


if (true){
    const userName = "qwerty";
    if (userName === "qwerty"){
        const website = "youtube.com";
        console.log (userName + " " + website);
    }

    //console.log(website); // => error
}

//console.log(userName); // => error

// mini-hoisting:
// in JS, variables can hold anything such as JSON value, function

// can executable: 
addOne(3);

function addOne(num){
    return num + 1;
}
addOne (3);

// also called as expressions
// but in this shows error
addTwo (7);
const addTwo = function (num){
    return num + 2;
}
addTwo (6);