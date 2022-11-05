let array = new Array(1, 2, 3, 4);
console.log(array);

// -------------------------- Class Excercises # 1-3 -------------------------- //
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(age){
        return `Hello. My name is ${this.name} and I am ${age} years old.`
    }

    speak(sound){
        return `${this.name} says ${sound}.`
    }
}
let kermit = new Animal('Kermit');
let msPiggy = new Animal('Ms. Piggy');
let fozzle = new Animal('Fozzle');
let rowlf = new Animal('Rowlf');
let bigBird = new Animal('Big Bird');

let animalsSpeak =

// console.log(kermit.speak('ribiit'));
// console.log(msPiggy.speak('oink'));
// console.log(fozzle.speak('wakka wakka'));
// console.log(rowlf.speak('arf arf'));
// console.log(bigBird.speak('cheep cheep'));

console.log(kermit.greet(41)) //> Hello. My name is Kermit and I am 41 years old.

// ---------------------------------------------------------------------------- //

// --------------------------- Class Excercises # 4 --------------------------- //

class Cat extends Animal {
    constructor(name){
        super(name)
    }
    meow(){
        return `${this.name} meows.`
    }
}

let whiskers = new Cat("Whiskers");

console.log(whiskers.speak("meow-ello")); //> "Whiskers says meow-ello."
console.log(whiskers.meow()); //> "Whiskers meows."