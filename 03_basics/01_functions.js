// functions in JS

// => parameterised function || {} => scope 
function addition (a, b) {
    let total = 0;
    total = (a + b);
    return total;
}
// => both are diff: 
// addition => reference
// addition () => execution

console.log (`The addition of two number is: ${addition(99,999)}`); // => argument 


// => different way to add argument

function loginUserMessage(userName){
    return (`${userName} just logged in`);
}

console.log(loginUserMessage("Fahhhhh"));
console.log (loginUserMessage()); // => undefined
console.log (loginUserMessage("")); // => empty 




