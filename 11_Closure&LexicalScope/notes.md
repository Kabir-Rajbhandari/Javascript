# Closure & Lexical Scope

### Closure Scope

"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JS, closures are created everytime a function is created, at function creation time."

### Lexical Scope

"Nested function, as the name is local variable in which the displayName() can access the name and also both the functions are sharing same memory reference.
"

```JavaScript
function init() {
  let name = "Open-source";

  function displayName() {
    console.log(`Hello ${name}`);
  }
  displayName(); //=> child function call
}

init();

```
