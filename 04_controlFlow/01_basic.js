// control flow / logic flow


// -> if statement

// -> incase of true - inner code is execute
// -> incase of false - inner code is not execute
// if(true){

// }


// simple traffic-light concept:

function followRules(whichColorAreuFacing){

    if (whichColorAreuFacing === "Red" || whichColorAreuFacing === "red"){
        console.log(`Hey, you can't able to go.. Stop!`);
    }
    else if(whichColorAreuFacing === "Yellow" || whichColorAreuFacing === "yellow"){
        console.log(`Hey, be ready to go.. Start the vehicle engine`);   
    }
    else if (whichColorAreuFacing === "Green" || whichColorAreuFacing === "green"){
        console.log(`Hey, you can go now.. Go`);   
    }
    else{
        console.log(`Not fear, something is issue within the light or system..`); 
    }
}

followRules("yellow");

// shorthand notation: 

// can executable without error but it is unreadable code, not good for a coder
const userAge = 20;
if (userAge > 18) console.log("You can able to vote.."),
console.log("You are an adult..");
;


