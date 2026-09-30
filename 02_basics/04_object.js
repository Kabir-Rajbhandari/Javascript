// Destructuring of objects:

const course = {
    courseName: "JavaScript",
    price: 1000,
    courseInstructor: "Open Source - Online"
};

// accessing the values with the help of '.' or '[""]'
console.log(course.courseInstructor); // => courseInstructor
console.log (course["courseName"]); // => courseName


// for easy way => do this
const {price: coursePrice} = course; // => can also change the keyname: like from price: coursePrice with the help of ':'
console.log(coursePrice); // => price


// destructuring can be done in array also but in rare case

// API concept: 
/*
    JSON: JavaScript Object Notation
    {

    "courseName": "JavaScript",
    "price": "free",
    "instructor": "Anyone"

    } or also

    => array in objects => JSON
[
    {},
    {},
    {}
]

*/