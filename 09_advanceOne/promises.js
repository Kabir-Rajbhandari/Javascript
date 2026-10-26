// all concept about asynchronous -> promise
// -> promise: .then() and .catch(), and another tool fetch() → mostly used..

/*
The **Promise** object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It’s basically done in future. 

A Promise is in one of these states:

1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.

=> most of the time we consume the promises instead of creating it..

*/

// => consume way
// fetch('https://www.randomme.com/api/').then().catch().finally();


// history of promise: Promise object is came onwards es6 as in the es5 programmer uses promise library like Q and bluebird
// creating promise: 

// promise requires a call-back, infact promise is like a call-back hell (nested call-back)
// promise 2 part: either resolve or reject

const promiseOne = new Promise((resolve, reject) => {
    // do an async tasks
    // - DB calls (anything)
    // - cryptography, netowrk related

    setTimeout(() => {
        // 
        console.log('Async task is complete..');
        // without connection the .then() will not execute so for the connection use resolve method..
        resolve();
    }, 2000)

});
// resolve has connection to .then() 
// reject has conncetion to .catch() / error

promiseOne.then(() => {
    // this will never cames at first as the task is finished of the async first and then only the "promise consumed" execute..
    console.log("promise consumed..");
    
});

// promise can be stored in variable and also not stored doesnot matter

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task2");
        resolve();
    }, 2000)
}).then(() => {
    console.log("Async 2 resolved..");
});


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                userName: "userOne",
                email: "userOne@example.com"
            }
        );

    }), 1000;
})

promiseThree.then((user) => {
    console.log(user);
    
});


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err){
            resolve({
                username: "abcd",
                password: "1234"
            });
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 3000);

});

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    // => chaining value: return value from the upper then()
    console.log(username);
})
.catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('The promise is either resolved or rejected..');
})


const promiseFive = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err){
            resolve(
                {fullName: 'John Doe', age: 20}
            )}
        else{
            reject('ERROR: JS went wrong..');
            }
    }, 5000)
});

// another approach // => accept
// => async and await kind of (similar to) .then .catch


async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }  
}

consumePromiseFive();



async function getAllUsers(){
    // => fetch 
    try {
        const response = await fetch('https://randomuser.me/api/');
        // conversion into json also takes time so that need to add await 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E: ' + error);
    }
}

// getAllUsers();

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then( (data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})