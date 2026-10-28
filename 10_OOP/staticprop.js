// static properties (prop)

class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }

  isSocialAnimal() {
    if (this.animalName === "dog" || this.animalName === "Dog") {
      console.log(`${this.animalName} is a social animal`);
    } else {
      console.log(`${this.animalName} is category of animal..`);
    }
  }

  // static: not giving access (cannot access by the child also)
  static crateId() {
    return `0100`;
  }
}

const animalOne = new Animal("Dog");

// console.log(animalOne.crateId()); // => shows error
animalOne.isSocialAnimal();

class AnimalCategory extends Animal {
  constructor(animalName, reptile) {
    super(animalName);
    this.reptile = reptile;
  }
}

const animalTwo = new AnimalCategory("Lizard", true);
animalTwo.isSocialAnimal();
// animalTwo.crateId(); // shows error
