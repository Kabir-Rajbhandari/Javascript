const User = {
  _email: "Johnny Johny",
  _pass: "johnny@123",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

// based on User
const user1 = Object.create(User);
console.log((user1.email = "qwerty")); // => set
console.log(user1.email); // => get

// use either _<> or <> doesnot matter as the get and set method done the process..

// Private properties in JavaScript (standardized in ES2022) are defined using the hash (#) prefix.
