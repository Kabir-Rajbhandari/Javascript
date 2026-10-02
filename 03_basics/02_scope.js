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