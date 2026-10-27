// prototype

let myName = "John Doe";

console.log(myName.length);



let heros = ["SuperMan", "AntMan"];

let heropower = {
    SuperMan : "powerOne",
    AntMan : "powerTwo",

    getSuperManPower : function () {
        console.log(`SuperMan power is ${this.SuperMan}`);
        
    }
}

// factory function

Object.prototype.itsMe = function() {
    console.log("I'm present in all objects..");
}

heropower.itsMe(); // object 

// object: top hierarchy


heros.itsMe(); // array


Array.prototype.arr = function(){
    console.log("have boundaries to Array..");
}

heros.arr();


// => object (grand-parents) prototype can be accessible by any child properties, like String, Array, function whereas if we declare a prototype in a Array, Function, String can only be accessible with the specified object one... otherwise it shows typeerror: <> is not a function i.e.


String.prototype.strOne = function() {
    console.log('Only works within the String object..');
    
}


let a = "abcd";
a.strOne(); // => accessible

// heros.strOne(); // => not accessible


// heropower.strOne(); // => not accessible


// inheritance: 

const user = {
    fullName: "Qwerty",
    age: 25

};

const teacher = {
    guideSts: true
};


const teachingSupport = {
    isAvailable : false
};


const taSupport = {
    makeAssignment: "JS assignment",
    fullTime: true,

    // inherit but outdated approach
    __proto__:teachingSupport
};


teacher.__proto__ = user;

// can be access the user
console.log(teacher.fullName);



// new approach // modern syntax

Object.setPrototypeOf(taSupport, teacher)



let userInput = "abcde    ";

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

userInput.trueLength();