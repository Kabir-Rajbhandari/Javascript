// object literal

const user = {
  userName: "john doe",
  loginCount: 4,
  signedIn: true,

  getUserDetails: function () {
    // console.log('Got user details from DB..');
    console.log(`Username:  ${this.userName}`);
    console.log(this);
  },

  // () => {}: arrow function do not have their own "this" binding. Instead they capture the this value of the enclosing lexicak context at the time they are created.
};

// console.log(user["userName"]);
// console.log(user.loginCount);
console.log(user.getUserDetails());

// indicating global scope
// console.log(this);

// indicating current context: use "this" keyword,

// constructor function

function users(userName, userAge, isabletoVote) {
  this.userName = userName;
  this.userAge = userAge;
  this.isabletoVote = isabletoVote;

  this.gretting = function () {
    console.log(`Welcome ${this.userName}`);
  };

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

// prototypical behavior refers to how objects inherit properties and methods from other objects via an internal link known as the prototype chain.

// js default behaviour is prototypical behaviour

// most of the things in JS are object i.e. Array, Promise

// Array ---> Object ---> null & String  ----> Object ----> null

// Object:

// is function is also an object? ==> well, a function is a function and also an Object in JS.like the functionality behaves like a function and a function can behave as a object.. can also be done
function multiple(num) {
  return num * 5;
}

multiple.power = 2;
console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const obj1 = new createUser("obj1", 5);
const obj2 = new createUser("obj2", 10);

console.log(createUser);

// need to tell the variable about the additional properties with the help of new keyword
obj1.printMe();
console.log(obj2.increment());

// => Here's what happens behind the scenes when the new keyword is used:
/*
    A new object is created: The new keyword initiates the creation of a new JavaScript object.
    A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be the intended return value.

    The new object is returned: After the constructor function has been called, if it doesnot return a non-primitive value (object, array, function, etc.) the newly created object is returned.
 */
