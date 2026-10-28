function User(userName, password) {
  this._userName = userName;
  this._password = password;

  // getter and setter property
  Object.defineProperty(this, "userName", {
    get: function () {
      return this._userName.toUpperCase();
    },
    set: function (value) {
      this._userName = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const user1 = new User("JOhn doe", "John@0012");
console.log(user1.userName);
