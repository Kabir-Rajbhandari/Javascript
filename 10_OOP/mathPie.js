const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI);

console.log(descriptor);

// const objcreation = Object.create(null);

const coffee = {
  coffeeName: "BlackCoffee",
  price: 450,
  isAvailable: false,

  canAddSugar: function () {
    console.log(`Yes u can..`);
  },
};

console.log(coffee);

console.log(Object.getOwnPropertyDescriptor(coffee, "isAvailable"));
Object.defineProperty(coffee, "price", {
  writable: false,
  enumerable: false,
  // as the isAvailable is not iterrable now
});

console.log(Object.getOwnPropertyDescriptor(coffee, "price"));

// err: is not iterable
// use Object.entries()
for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// "know about the Object properties as own created object's can be set to writeable, enumerable, configurable as false with the help of Object.defineProperties/property, as
// example the Math.PI value cannot able to change as it's all properties are set 'false'
