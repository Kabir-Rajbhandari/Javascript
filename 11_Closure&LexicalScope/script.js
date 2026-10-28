// closure and lexical scope

// lexical scope

function init() {
  let name = "Open-source";

  function displayName() {
    console.log(`Hello ${name}`);
  }
  displayName(); //=> child function call
}

init(); // => call main mention

// only nested can be accessible
function outer() {
  let firstName = "Claude";

  function inner() {
    let innerVal = 45;
    console.log("innerOne: " + firstName); // firstName is accessible
  }

  function innerTwo() {
    console.log(`innerTwo: ${firstName}`);
    // console.log(innerVal); //=> cannot accessible
  }
  inner();
  innerTwo();

  //console.log(innerVal); // cannot accessible by the outer function
}

outer();

// console.log(firstName); // => shows error as the firstName is not global scope

// closure
function makeFunc() {
  const browser = "chrome";
  function display() {
    console.log(`${browser}`);
  }
  return display;
}

// function return, overall lexical scope return
// transfer overall lexical scope
const myFunc = makeFunc();
myFunc();

// document.querySelector("#orange").addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// });

// document.getElementById("green").addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

function clickHandler(color) {
  //   document.body.style.backgroundColor = `${color}`;

  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

// document
//   .querySelector("#orange")
//   .addEventListener("click", () => clickHandler("orange"));

document.getElementById("orange").onclick = clickHandler("orange");
document.getElementById("green").onclick = clickHandler("green");
