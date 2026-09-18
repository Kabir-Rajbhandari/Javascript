// single line comment
/*
 * multi line comment
 */

// declaring variables in js: 3 way of declaring variables in js

const accountId = 145745125;
let accountName = "John Doe";
let accountEmail = "john@doe.com";
var accountPassword = "123456";
accountCity = "Kathmandu";

// --> can only print the specific variable
console.log (accountId + "\n Here is the tabular one: ");


// --> help to print multiple varibales data at once in a tabular format
console.table([accountId, accountName, accountEmail, accountPassword, accountCity]);

// accountId = 145785944;  -> display eror
// this will throw an error because const variables are immutable
// prefer not to use var: because of issue in block scope and functional scope -> {}