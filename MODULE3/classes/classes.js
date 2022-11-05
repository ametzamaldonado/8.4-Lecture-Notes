class Animal {
    constructor(name, age){
        // inside our constructor lets give our Animal class instance a name using the `this` keyword

        this.name = name ;   // setup => var.name (name here is a class)
        this.age = age ;  
    }
    // constructor goes here  - takes in a name for our animal instance that gets passed in at creation

    // create a method called speak that returns a string of the Animal instance's name says the words passed as an argument

    speak(words){
        return `${this.name} says ${words}.`
    }

    eat(food){
        return `${this.name} eats ${food}`
    }
    // create a method called speak that returns a string of the 
    // Animal instance's name says the words passed as an argument

}

// create an instance of animal using the new keyword
let leo = new Animal("Leo");
console.log(leo.name) //> Leo

// call the Animal class' .speak method on the instance of animal
console.log(leo.speak('roar')) //> "Leo says roar"

let dex = new Animal("Dex")

// access the Animal instances' .name property
console.log(dex.name) //> "Dex"




class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age)
        // calls the super function to pass the arguments
        // required by the parent class
        this.breed = breed;
        // creates an property breed specific to the dog class
    }

    bark() {
        return `${this.name} barks.`
    }
    // creates the bark method specific to the dog class
}

// create an instance of dog
let rex = new Dog("Rex", "poodle", 42)

// call the Animal class' .speak method on the instance of dog

console.log(rex.speak("grrr")) //> "Rex says grrr"

// note: we didn't have to define this in the dog class

// call the Dog class' .bark method on our instance of dog

console.log(rex.bark()) //> "Rex barks."
console.log(rex.age)
console.log(rex.breed)