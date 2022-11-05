// What is the definition of a higher order function?
    // A function that returns a function or takes a function as a parameter

// Why are anonymous functions useful for higher order functions ?

// Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so ? If not, why not ?

    function truthy() {
        return true;
    }

    function falsy() {
        return !truthy();
    }

    console.log(falsy()); //> false


// Take a look at the functions below.Are any of the functions a higher order function? If so, which ones and why so ? If not, why not ?

    function left() {
        return "Left";
    }

    function right() {
        return "Right";
    }
// BELOW IS A HIGHER ORDER FUNCTION:
    function go(goLeft = true) {
        return goLeft ? left : right;
    }

    console.log(go(false)); //> [Function: right];
    console.log(go()) //> [Function: left]


// Take a look at the functions below.Are any of the functions a higher order function? If so, which ones and why so ? If not, why not ?

    const directions = [];

    // takes our above directions array and pushes in the direction received as a parameter
    function storeDirections(direction) {
        directions.push(direction);
    }
    // BELOW IS A HIGHER ORDER FUNCTION:
    // Operation is a placeholder - it’s there for any function we want to pass in

    // takes in a direction and a function and calls our function with our direction
    function goTwo(direction, operation) {
        operation(direction);
        return direction;
    }

    console.log(goTwo("Left", storeDirections));
    console.log(goTwo("Right", storeDirections));
    console.log(goTwo("Up", storeDirections));
    console.log(directions); //> ["Left", "Right", "Up"]

// Take a look at the higher order function below. The transform() function expects, as its second argument, a function that accepts at least one argument.

    function transform(text, fn) {
        if (typeof fn !== "function") {
            return text;
        }

        return fn(text);
    }

// Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.

// "left" -> "LEFT"
    const myUpcaseCallback = (text) => {
         return text.toUpperCase();
    };

console.log(transform("left", myUpcaseCallback));

// "RiGhT" -> "right"
    const myLowercaseCallback = text => text.toLowerCase();

console.log(transform("RiGhT", myLowercaseCallback))

// "left right left" -> "left-right-left"

    const myKebabCaseCallBack = text => text.replaceAll(" ", "-"); // <- Very NEW method!
    // const myKebabCaseCallBack = text => text.replace(/ /g, "-"); <- Regex (difficult)
    // const myKebabCaseCallBack = text => text.split(' ').join('-'); <- Another way


console.log(transform("left right left", myKebabCaseCallBack));

// "up Down left" -> "UDL"
    const myAcroynmCallback = text => {
        let words = text.split(" ");
        
        let newWord = "";
        for (let word of words){
            newWord += word[0].toUpperCase();
            // newWord += word.charAt(0).toUpperCase(); <- works as well
        }
        return newWord
    };

console.log(transform("up Down left", myAcroynmCallback));


function myFunc (){

    myArr = [1, 2, 3]
    myArr.forEach((el) => console.log(this));
    myArr.forEach(function (el) {
        console.log(this)
    });
}

let thisFunc = () => {

    console.log(this);
}

myFunc();
// thisFunc();

