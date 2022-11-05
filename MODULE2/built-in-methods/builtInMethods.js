// What is a built -in method ?
    // We did NOT have to write any code for them.
    // Functions stored directly on JavaScript's built-in objects (Classes)

// Which classes in JS have built-in methods
    // Arrays
    // Objects
    // Strings
    // Math
    // Numbers

// Documentation can sometimes be difficult to read, but is essential to your success as a developer.Take a look at the following page from the Mozilla Developer Network that describes the Math.max() method.Then, describe in your own words what the Math.max() method does.
//  MDN: Math.max()
    console.log(Math.max(12, 6, 50, 9, 11));
    // *****
        // Right click this doc. js & click 'open intergrated terminal'
        // Lastly type 'node builtInMethods.js' to see the result of the above code.

// Why is the Number.isNaN() method helpful ?
//  This method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN().

    let myNumber = "number" / 3;
    console.log(Number.isNaN(myNumber)); // true

// Why is the Array.isArray() method helpful ?
    
    let myArray = [1,2,3,4];
    console.log(typeof myArray); // object
    console.log(Array.isArray(myArray)); // true;

// What does the Math.random() method do?
    // Give us a float number that is anywhere between 0 and 1 (not inclusive of 1); 
    // AKA: a number from 0 to <1
    console.log(Math.random()); // EX: 0.537736924488218

// How can you return a random number between 0 and 9 ? (inclusive)
    // CORRECT
    console.log(Math.floor(Math.random() * 10)) 
    // Will allow us to get the number 9
    // Math.floor rounds the numbers down. 

    // WRONG
    console.log(Math.floor(Math.random() * 9)); // Will never give us the number 9!

// How can you return a random number between 0 and 99 ? (inclusive)
    console.log(Math.floor(Math.random() * 100));

// How can you return a random number between 1 and 100 ? (inclusive)
    console.log(Math.floor(Math.random() * 100) + 1);

// How can you return a random number between 1 and 50 ? (inclusive)
    // Math.ceil = always rounds a number up to the next largest integer. (1 <= x >= 50)
    console.log(Math.ceil(Math.random() * 50));

    // ALTERNATIVE
    console.log(Math.floor(Math.random() * 50) + 1);

// How can you return a random number between 10 and 20 ? (inclusive)
    console.log(Math.floor(Math.random() * 11) + 10);
    // Math.floor(Math.random() * 11) = #'s 0 through 10, not including 11. And then we add 10 to the random #. Ex. the #: 0 would be 10.

// What built -in method(s) do you think would help with the following problem ?
    // Given an array of integers where some numbers are strings, return the largest integer as a number.
    // e.g. [4, "10", 9]
    // Math.max
    // typeof
    // Number.parseInt()

let myArrTwo = [4, "10", 9, "15"];

function highestNumber (arr){
    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "number"){
           arr[i] = Number.parseInt(arr[i]);
        }
    }
    let highest = arr[0];
    for (number of arr) {
        number > highest ? highest = number : null;
    }
    return highest;
}

console.log(highestNumber(myArrTwo));



// // What built -in method(s) do you think would help with the following problem ?
//     //Given an object, verify that none of the values of those keys are NaN.
//     //e.g. { inStock: 11, maximum: 20 }

    let questionableObject = { inStock: 11, maximum: 20 };

    function isNotANumber (obj){
        // Object.values() - return values of the first level of an object. (method returns an array of all the values of the given object.)
        let myValues = Object.values(obj);

        for(let value of myValues){
            if(Number.isNaN(value)){
                return true;
            }
        }
        return false;
    }
    console.log(isNotANumber(questionableObject)) // false

// What built -in method(s) do you think would help with the following problem ?
    // Given an object with a number of keys, choose a key at random and return the value of that key.
        // e.g. { firstName: "Francisco", lastName: "Carrillo", age: 28 }