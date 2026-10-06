// arrow function 
// => ES6 launched in 2015

// => arrow function does not have <this>
// objects
// => this represents currect context refer

const user = {
    userName: "John Doe",
    price: 1111,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website.`);
        // console.log(this);
        
    }
}

console.log (user["userName"]);
user.welcomeMessage(); // it's method as the welcomeMessage stores the function


//what if the userName value is changed what will prints by <this>

user.userName = "Qwerty Lee";
user.welcomeMessage();

console.log(this); // empty


// in browser the global object is Window object

// function one(){
//     let num = 150
//     // cant work, this keyword only use in objects
//     console.log(this);
    
// }
// one();


// arrow function
// -> in arrow function the this keyword return the empty object where as in the default function the <this>keyword return the function gloabl objects
const employee = () => {
    let name = "abcd";
    console.log (this);
}

employee();


// -> arrow function syntax: () => {}

const addTwoNum = (num1, num2) => {
    return (num1 + num2);
}

console.log(addTwoNum(10,15));

// => if their is {} curlibasis their must be have return keyword, if their is () parenthesis or not any bracket then not need to use return in the arrow function

// implicit return concept: 
const subsTot = (num1, num2) =>  num1 - num2;
console.log(subsTot(5,10));


// => object must be in parenthesis in the implicit return concept
const objPass = (num1, num2) => ({userName: "John"});
console.log (objPass(2,4));


// explicit return concept: {return }


// const arr = [1,4,5,6,9];

// // valid
// arr.forEach(function (){

// });

// //valid
// arr.forEach(
//     () =>{

//     }
// );
