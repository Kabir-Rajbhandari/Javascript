// loop:

// for loop

// => initialization ---> condition ---> increment
for (let i = 0; i <= 5; i++){
    console.log (`Printing ${i}`);
}

// nested loop
console.log('nested loop');


for (let i = 1; i < 4; i++){
    console.log(`Outer loop: ${i}`);
    for (let j = 1; j < 3; j++){
        console.log(`Inner loop: ${j}`);
    }
}

// sample multiplication: 

for (let i = 1; i <= 5; i++){
    console.log(`\nMultiplication of ${i}`);
    for (let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${(i*j)}`);
    }
}


const loopArrValue =  ["qwerty", 0, 45, 89, "john"];

for (let i = 0; i <= (loopArrValue.length - 1); i++){
    console.log("Array Value: " + loopArrValue[i]);

}

// break and continue

for (let i = 1; i <= 20; i++){
    if (i === 10){
        // break; // => print until 9 and then exit the loop
        continue; // => print until 9 and skip 10 and again start the print from 11
    }
    console.log(i);
    
}