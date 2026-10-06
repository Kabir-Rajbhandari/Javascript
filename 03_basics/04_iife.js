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
