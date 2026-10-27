// object literal

const user = {
    userName: "john doe",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from DB..');
        console.log(`Username:  ${this.userName}`);
        console.log(this);
    }

    // () => {}: arrow function do not have their own "this" binding. Instead they capture the this value of the enclosing lexicak context at the time they are created.
};

// console.log(user["userName"]);
// console.log(user.loginCount);
console.log(user.getUserDetails());

// indicating global scope
// console.log(this);

// indicating current context: use "this" keyword, 



// constructor function

function users(userName, userAge, isabletoVote){
    this.userName = userName
    this.userAge = userAge
    this.isabletoVote = isabletoVote
    
    this.gretting = function() {
        console.log(`Welcome ${this.userName}`);
    }

    // return this; => implicitly defined 
}

// this approach will override the value of the user1 variable with user2 value as we need to use new keyword

// => when a new keyword is declared an empty object is created which is known as instance.
// => working mechanism
// 1. an empty object is created,
// 2. constructor function is called 
// 3. inject into this keywords
// 4. access 

const user1 = new users("John Qwerty", 19, true);
const user2 = new users("John Doe", 17, false);
// console.log(user1);
// console.log(user2.gretting());


// constructor: initialize value and also the reference of the own class
console.log(user1.constructor);

// instanceOf operator

console.log(user1 instanceof users); // return true or false, check whether the object lies under the following es6 class to test against.

// => true 

console.log(user1 instanceof Object); // => true







