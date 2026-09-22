// Memory allocation of code
/**
 * Types of memory: 
 * 1. Stack Memory - All the primitive data types uses stack memory -> get copy
 * 2. Heap Memory - All the non-primitive data types uses heap memory - get reference of original value
 */

// example: 
// stack memory

let myName = "john doe";

let userName = myName;

userName = "john doe 123";

console.log (myName); //  -> john doe
console.log (userName); // -> john doe 123


// heap memory

let employeeDetails = {
    id: 111,
    name: "userOne",
    email: "userone@gmail.com",
}

let assignedDetail = employeeDetails;

assignedDetail.email = "useroneupdatedgmail@yahoo.com";

console.log (employeeDetails); //-> updated one
console.log (assignedDetail); // -> updated one

