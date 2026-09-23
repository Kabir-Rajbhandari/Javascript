// more on String (data types)
// => String Concatenation

// => function or method of String

const userName = "Random User";
console.log(userName.length);
console.log(userName.endsWith("r"));
console.log(userName[4]);
const repoScore = 5;

console.log("Hello" + " " + "World");

// => String interpolation (like adding a placeholder for the variable value)
// => follow the following string format 
console.log(`Hello ${userName.toUpperCase()}, your total score is ${repoScore}.`);

const repoName =  new String ("newday-newbegin");

console.log(repoName);
console.log(repoName.length);
console.log(repoName.endsWith("r"));
console.log(repoName[4]);


console.log("\n" + repoName.charAt(3));
console.log(repoName.indexOf('b'));

// => since the orginal value of the variable won't change as the primtive data types variable value is store in stack memory:
console.log (repoName.__proto__);

// start and ending, output must be ew
console.log(repoName.substring(1,3));

// slice method: can able to pass the negative value
console.log(repoName.slice(-7,12));

// => remove white space from the string (beginning and the ending part)
const trimString = "    hello-world.   ";
console.log(trimString.trim());


// => in the URL if their is a white space then the url autimatically add %20 

const url = "https://www.personalportfolio%20project.com"

console.log(url.replace("%20", "-"));
console.log(url.includes(".com"));


const splitString = "abcd efgh ijkl";
console.log(splitString.split(" "));