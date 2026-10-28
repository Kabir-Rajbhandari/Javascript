// inheritance concept

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

// extends => inherits from the User class
class Student extends User {
  constructor(username, email, address) {
    super(username);
    this.email = email;
    this.address = address;
  }

  toDoTask() {
    console.log(`You have completed the task..`);
  }
}

let inst1 = new Student("JS", "js@gmail.com", "Nepal");
inst1.toDoTask();
inst1.logMe();

// another inst/obj

const user1 = new User("abcd");
user1.logMe();
// user1.toDoTask(); => shows error as the parent class (User) don't have access to function, as in inheritance there is always child-parent relations (is-a)

console.log(inst1 === user1); // false
console.log(user1 === inst1); // false

console.log(inst1 instanceof Student); // true
console.log(user1 instanceof User); // true

console.log(inst1 instanceof User); // true
console.log(user1 instanceof Student); // false
