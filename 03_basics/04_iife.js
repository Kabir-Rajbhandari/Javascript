// Immediately Invoked Function Expressions (IIFE)


// => iife uses is can run the function immediately and also sometimes their might occur global scope pollution problem so that it help to remove the problem.
(function dbConnector(){
    // named IIFE
    console.log(`DB connected`);
    
})(); // where to stop ";" after execute 

((dbName) => {
    // => simple IIFE
    console.log (`DB connected two ${dbName}`);
    
}) ("MongoDB");


// how does JS works behind the scene:
// -> JS - single threaded 
// JavaScript Execution Context:
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context: kind of global properties 

/*
file -> Global Execution Context (this) -> Memory Creation Phase (MCP) -> Execution Phase

 */

// {.file} -> Memory Creation Phase / Creation Phase: memory allocation
            // -> Execution Phase

// callstack -> LIFO concept : The Call Stack operates on a data structure principle called LIFO (Last In, First Out). This means that the last function pushed onto the stack is the very first one to be resolved and removed.
