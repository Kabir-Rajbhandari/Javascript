// object part 2

// multiple instances creation


// singleyon allows one single instance
// non-singleton allows multiple independent instances
const user = new Object (); // -> 1st way // -> singleton object
const userTwo = {}; // -> 2nd way -> non-singleton objects

console.log (user); // empty {}
console.log (userTwo); // empty {}



// multiple nested objects

const registerUser = {
    email: {
        officeEmail: "user1.official@gmail.com",
        personalEmail: "user01.personal@gmail.com"
    },
    name:{
        userName:{
            fullName:{
                firstName: "Multiple",
                lastName: "Nested objects"
            }
        }
    }
}


console.log (registerUser);

// => ? if that not exist then use ?
console.log (registerUser.name?.userName.fullName.lastName);


// concatinating obj
const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

console.log(obj1);
console.log(obj2);

// most usage with this spread way, 
const concatObj = {...obj1, ...obj2};

console.log (concatObj);

const empInfo1 = {
    userName: "userOne",
    email: "userone2001@gmail.com",
    
};

const empInfo2 = {
    position: "Junior Accountant",
    gender: "male"
};

const allUserInfo = Object.assign({},empInfo1, empInfo2);
console.log (allUserInfo);

// -> one thing to know that, if the objects key name is same to each other objects then the 2nd obj variable key value is set, (like which comes after), otherwise can be concatinate properly 


// when values are came from the database it basically cames out in array as object format: like

const users = [{
    id: 1,
    email: "user1@gmail.com"
},{
    id: 2,
    email: "user2@gmail.com"
},{
    id: 3,
    email: "user3@gmail.com"
}];

console.log (users[2].email);

// getting the object keys only, as it will store in an array


// i.e.

const customerDetail ={
    customerId: 1004,
    customerName: "Qwerty Zxcv",
    address: "Kathmandu, Nepal",
    noOfProductBuy: 11,
    totalPrice: 15023154,
    totalDiscount: 1245,
    phNo: "012478451963"
};

// => method or function (keys(), values(), entries()), length
console.log (Object.keys (customerDetail)); // keys store in array
console.log (Object.values (customerDetail)); // values store in array

// entries store in array of both key value
console.log (Object.entries (customerDetail));

console.log (Object.keys(customerDetail).length); // shows the length


// hasOwnProperty
console.log (customerDetail.hasOwnProperty("Full Name")); // => false