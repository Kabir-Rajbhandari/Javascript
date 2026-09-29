// objects: {key: value} pairs

let employeeData = {
    empName: "John Doe", 
    empAge: 31,
    empAddress: "Kathmandu, Nepal",
    empDoB: "01-01-2001",
    empIsActive: true,
    empSalary: 150000
}

console.log (employeeData);

// => Objects in depth
// => singleton



// object literals

// constructor method  => singleton 
// Object.create();

const mySym = Symbol ("Sync1");

const userInfo = {
    name: "Qwerty",
    // -> 2
    "full name": "Qwerty Asdfg",
    age: 26,
    location: "New York, USA",
    email: "qwerty@google.com",
    isLoggedIn: true,
    workingDays: ["Monday", "Wednesday", "Thursday", "Friday"],
    // adding symbol in object
    // this is string but
   // mySym : "String type", // -> String
    [mySym]: "Symbol type",
};

// accessing the object -> 1
console.log (userInfo.location); 

// -2
console.log (userInfo["isLoggedIn"]);
console.log (userInfo["full name"]); // can only get "full name", by using sqaure quotes 


console.log (typeof(userInfo["email"]));

console.log (userInfo[mySym]);

// override the value of the existing key

userInfo.email = "2026qwerty@yahoo.com";
console.log (userInfo["email"]);

// can't modify the object, use freeze in the particular object

// Object.freeze(userInfo);

// after the freeze unable to modify / override the value
// doesnot shows the error but also doesnot change the value
userInfo.name = "uniop";
console.log (userInfo.name);


console.log (userInfo);


// functions in js

userInfo.greeting = function(){
    console.log ("Hello World ...");
}

userInfo.greetingUser = function(){
    console.log (`Hello JS learner ${this["full name"]}, \nKeep on going, ${this.name} are good to goo...`);
}

userInfo.greeting(); 

userInfo.greetingUser();

console.log("After changes" + "\n");

console.log (userInfo);