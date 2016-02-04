// See console logs

// ES6 static property //////////////////
class Animal {
  constructor(name) {
    this.name = name; // public instance var
    this.notsecret = 'notsecretx'; // public instance var
    Animal.setCounter();
  }

  static getAnimal() { // class method
    return new Animal('No Name');
  }

  // static property, NICE
  static setCounter() {
    if (!this.counter && this.counter !== 0) {
      this.counter = 1;
    } else {
      this.counter++;
    }
    return this.counter;
  }

  static getCounter() {
    return this.counter;
  }
}

// private static property, welp now it's outside of the class
let secretCounter;
Animal.getSecretCounter = function () { // instead of static getSecretCounter() {
  if (!secretCounter) {
    secretCounter = 100; // init val
  } else {
    secretCounter++;
  }
  return secretCounter;
};

// const aAnimal = new Animal("haloo");

// console.log(aAnimal.name);
// console.log(aAnimal.notsecret);

// // console.log(aAnimal.getAnimal()); //err
// console.log(Animal.getAnimal());

const aAnimal = new Animal("haloo");
console.log(Animal.getCounter());
// console.log(Animal.getSecretCounter());
const bAnimal = new Animal("haloo2");
console.log(Animal.getCounter());
// console.log(Animal.getSecretCounter());

//

// ES6 bootlegged private property //////////////////
class Point {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;

    // private property, but all methods using these private property has to be decleared in the same scope (the constructor)
    const secret = 'secretxxx';

    this.getSecret = function () {
      return secret;
    };
  }

  getPos() {
    return `X: ${this.xPos}, Y: ${this.yPos}`;
  }
}

const point = new Point(100, 200);
console.log(point.getPos());
console.log(point.secret);
console.log(point.getSecret());


// not ES6, private variable, syntax doesnt work with es6 class //////////////////
function Agent(name) { //class
  this.name = name
  let secret = 'secretx';

  this.getSecret = function() {
    return secret;
  };
}

const aAgent = new Agent('sd');
const bAgent = new Agent('sd2');

// console.log(aAgent.name);
// console.log(aAgent.secret);
// console.log(aAgent.getSecret());


// class Person {
//   constructor(name) {
//     this.name = name
//     let secret = 'secretx';
//   }

//   this.getSecret = function() {
//     return secret;
//   };
// }

// const aPerson = new Person('myname');
// console.log(aPerson.getSecret());


