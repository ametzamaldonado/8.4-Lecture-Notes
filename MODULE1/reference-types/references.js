// What are the five most common primitive types?
// STRINGS
// NUMBERS
// BOOLEANS
// UNDEFINED
// NULL

// What other two data types are primitive types but are less commonly used?
// SYMBOL
// BIG INT

// Anything that is not a primitive type is a reference type. What data types have you already worked with in this class that is a reference type?
// OBJECTS
// ARRAYS
// FUNCTIONS

// Mentally evaluate the following code. What do you expect will be logged? Why?

let myHobby = "reading";
let yourHobby = myHobby; // remember: code reads from top to bottom
myHobby = "playing video games"; // also, this is a primitive type

console.log(myHobby, yourHobby);
//> playing video games, reading

// *** ------------------------------------------------------- ***
// HOW TO RUN FILE: 'node references.js)
// if we are in the 8-4-Lecture-Notes general file, in order to get into this file, use the following command:
// node MODULE1/reference-types/references.js
// *** ------------------------------------------------------- ***


// Mentally evaluate the following code. What do you expect will be logged? Why?

let myHobbies = ["reading"]; // ["playing video games"]
let yourHobbies = myHobbies; // ["reading"]
myHobbies[0] = "playing video games"; // myHobbies[0] changes the array from ['reading] to ['playing video games']

console.log(myHobbies, yourHobbies); 
//> ["playing video games"], ["playing video games"]


// What does it mean for a data type to be a reference type?

// primitive types create copies of the assigned value they are being equaled to. (like creating a photocopy of someones notes)
// a reference type WILL reassign if the assigned value they are being equaled to changes/is manipulated. 
//


// Will the code below throw an error? Why or why not? 
    // ANSWER : NO IT WONT!!!

const hobbies = ["reading", "playing video games"];
hobbies[hobbies.length] = "biking"; // biking will just be added to the end of the array, at index [2]

// console.log(hobbies)


// Why does the code below log false?

console.log({ hobbies: ["reading"] } === {});

// Why does the code below log false?

console.log({ hobbies: ["reading"] } === { hobbies: ["reading"] }); 
//> these two look identical but are not identical in memory


// Mentally evaluate the following code. What do you expect will be logged? Why?

const myHobbiesTwo = ["reading", "playing video games"];
const yourHobbiesTwo = myHobbiesTwo;
myHobbiesTwo.push("biking");


console.log(myHobbiesTwo, yourHobbiesTwo); // Outcome = ["reading", "playing video games", "biking"], ["reading", "playing video games", "biking"] 


// Mentally evaluate the following code. What do you expect will be logged? Why?

const videoGames = {
    //> declares variable : 'videoGames' which is equal to an object with a key, 'description'.
description: "playing video games",
}; 

const reading = videoGames; // this entanglement means that the object is linked to both. What is done to one, effects the other.

reading.description = "reading";

console.log(videoGames, reading); // ANSWER: {description : reading}, {description: reading} 


// Mentally evaluate the following code. What do you expect will be logged? Why?

const louie = {
name: "Louie James",
hobbies: ["reading", "playing video games", "biking"],
};

const jody = {
name: "Jody Hawkins",
hobbies: louie.hobbies,
};

console.log(louie === jody); 
// ANSWER - FALSE because they do not share the same memory location or "entangled". THEREFORE not strictly equal.


// Mentally evaluate the following code. What do you expect will be logged? Why?

const louieTwo = {
name: "Louie James",
hobbies: ["reading", "playing video games", "biking"],
};

const jodyTwo = {
name: "Jody Hawkins",
hobbies: louieTwo.hobbies,
};

console.log(louieTwo.hobbies === jodyTwo.hobbies); 
// ANSWER - TRUE because both objects are entangled. They are both equal to the same values.


// Mentally evaluate the following code. What do you expect will be logged? Why?

const louieThree = {
name: "Louie James",
hobbies: ["reading", "playing video games", "biking"],
};

const jodyThree = {
name: "Jody Hawkins",
hobbies: louieThree.hobbies,
};

louieThree.hobbies.pop(); // removes the last item in the array 
console.log(louieThree.hobbies, jodyThree.hobbies); 
//  ["reading", "playing video games"], ["reading", "playing video games"]


// Mentally evaluate the following code. What do you expect will be logged? Why?

const louieFour = {
name: "Louie James",
hobbies: ["reading", "playing video games", "biking"],
};

const jodyFour = {
name: "Jody Hawkins",
hobbies: louieFour.hobbies.slice(0, 2), // slice creates a new array in memory to return to us
};

console.log(louieFour.hobbies === jodyFour.hobbies);
// ANSWER - FALSE
    // ["reading", "playing video games", "biking"] === ["reading", "playing video games"] - WHICH IS NOT TRUE!!
console.log("LOUIE HOBBIES ->" ,louieFour.hobbies)
console.log("JODY HOBBIES ->" ,jodyFour.hobbies)

// Mentally evaluate the following code. What do you expect will be logged? Why?

const louieFive = {
    name: "Louie James",
    hobbies: ["reading", "playing video games", "biking"],
};
const jodyFive = {
    name: "Jody Hawkins",
    hobbies: louieFive.hobbies.slice(0, 2).concat("coding", "painting"),
};

console.log(jodyFive.hobbies); // ["reading", "playing video games", "coding", "painting"]