// class constructor
// ES6
// mostly classed bassed syntax is used,..

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  // encryptPassword

  encryptPassword() {
    return `${this.password}@79465`;
  }

  capitalizeUserName() {
    return `${this.userName.toUpperCase()}`;
  }
}

// new instance/obj for a class
const userMe = new User("John the don", "johnthedon-2000.com", "2001453");
console.log(userMe);
console.log(userMe.encryptPassword());
console.log(userMe.capitalizeUserName());

// behind the scene:

function userF(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

userF.prototype.encryptPassword = function () {
  return `${this.password}@79465`;
};

userF.prototype.capitalizeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const userU = new userF("Jonny", "johnny.com", "124587");
console.log(userU);
console.log(userU.encryptPassword());
console.log(userU.capitalizeUserName());
