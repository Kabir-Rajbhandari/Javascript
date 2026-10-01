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
    if (!userName){
        return (`Please enter the username..`);
    }
    return (`${userName} just logged in`);

}

console.log(loginUserMessage("Fahhhhh"));
console.log (loginUserMessage()); // => undefined
console.log (loginUserMessage("")); // => empty 



// => REST operator / REST parameters "..." 
// => ... can be Rest parameter or spread, according to the use

function calculateCartPrice (...numbers){
    totalPrice = 0;
    for (i in numbers){
        totalPrice += numbers[i]
    }
    return `The total price is: ${totalPrice}.00`;
}

console.log (calculateCartPrice(800,500,9000,1500,8500)); // return values in array

// spread one
const arr1 = ["a","b","c","d"];
const arr2 = [1,2,3,4]

const newArr = new Array (...arr1, ...arr2);
console.log (newArr);


//object pass in function
const userInfo = {
    userName: "John Doe",
    age: 21,
    isEmployee: true
};


function passObjValue (anyObject){
    console.log (`Hello ${anyObject.userName}, you are ${anyObject.age} years old and you works`);
}


passObjValue(userInfo); // way 1: it works but sometimes can occur type-error
passObjValue ({
    userName: "Qwerty",
    age: 25
}); // way 2


const arr3 = [0,"abcd"];

function returnThirdValue (thirdValue){
    if (thirdValue.length > 2){
        return `${thirdValue[2]}`
    }
    else{
        return "out of bound";
    }
}

console.log (returnThirdValue (arr3)); // 
console.log (returnThirdValue (arr2)); // getting the 3rd position value
console.log (returnThirdValue([1,2,4,5,6,7,8,9,])); // can be also passed this way
