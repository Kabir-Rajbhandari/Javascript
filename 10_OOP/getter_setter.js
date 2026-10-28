class Vehicle {
  constructor(type, category, manufacturedDate) {
    this.type = type;
    this.category = category;
    this.manufacturedDate = manufacturedDate;
  }
  // getter and setter method

  get type() {
    return this._type;
  }

  get category() {
    return this._category.toUpperCase();
  }

  get manufacturedDate() {
    return this._manufacturedDate;
  }

  set type(type) {
    this._type = type;
  }

  set category(category) {
    this._category = category;
  }

  set manufacturedDate(manufacturedDate) {
    this._manufacturedDate = manufacturedDate;
  }
}

const obj1 = new Vehicle("Scooter", "Fuel", "2025-10-15");
console.log(obj1.type);
console.log(obj1.category);
