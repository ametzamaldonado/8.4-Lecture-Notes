/* Higher Order Native Array Methods

These lesson notes cover `.forEach()`, `.map()`, `.filter()`, and `.find()`.

 Learning Objectives

By the end of this lesson you should be able to:

- Describe the input and return values of `.forEach()`.
- Use `.forEach()` to solve code problems.
- Describe the input and return values of `.map()`.
- Use `.map()` to solve code problems.
- Describe the input and return values of `.filter()`.
- Use `.filter()` to solve code problems.
- Describe the input and return values of `.find()`.
- Use `.find()` to solve code problems.

---

 Guiding Questions

- What is a higher order function?
  // A function that accepts or returns another function - will pass calbacks to all higher order array methods

- What is a native array method?
// a built in method that can be used.  This comes out of the box in JS and allows us to do powerful things to our arrays. 

- What does it mean for a function to produce side effects?
// A function that modifies something outside its paramters - for example

- What does it mean for a function to return a value?
// allows us to save the value 

- Is it possible for functions that return values to also produce side effects?
// yes but it should be avoided

- The `.forEach()` method expects at least one argument. What data type is this argument?
// A callback function.  This function tells forEach what to do for each item in the array

- What is a callback function?  
//  A function that is passed as a parameter.  One way to think of a callback is 
// a set of instructions that we want our native array methods to execute

- The `.forEach()` method's callback function has up to three parameters. What are these parameters?
  The element (from the original array) that we want to execute the callback on
  The index current index of the array 
  The array on which forEach() was called

*/

const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: "False Knees", author: "Joshua Barkman", kind: "web" },
];

//  Update the code below so that it uses `.forEach()` instead of a `for` loop. Inside of `printAllComics()` you will have to write another, anonymous function.

// MAP stands for Make Array Plz 
const printAllComics = (comics) => {
  // TRADITIONAL WAY: 
  // for (let comic of comics){
  //     console.log(`${comic.title}) by ${comic.author}`)
  // }

  // ALTERNATIVE WAYS: 
  // (1)   
  comics.forEach((comic) => {
    console.log(`${comic.title} by ${comic.author}`)
  });

  /* (2)  
  comics.forEach(({ title, author }) => {console.log(`${title} by ${author}`)}); //> Another way of writing our code above!
  */

  /* (3)  
  // we can also destructure comic in our callback to shorten this:

  let result = comics.forEach(( comic, index, originalArray) => {
    console.log(`(${index + 1} out of ${originalArray.length}) ${comic.title} by  ${comic.author}`);
  })
  return result

  */
}
let allComics = printAllComics(comics);

console.log(allComics)
// allComics = null;
// console.log(comics)

// ------------------------------------------------------------------ //
/* - How can you update your `.forEach()` code so that it prints out the following?

1. "Calvin & Hobbes" by Bill Watterson
2. "Zen Pencils" by Gavin Aung Than
3. "Nancy" by Olivia James
4. "False Knees" by Joshua Barkman 

function printAllComics(comics) {
  comics.forEach(({ title, author }, index) => { console.log(`${index + 1}. ${title} by ${author}`) });
}

printAllComics(comics)
*/
// ------------------------------------------------------------------ //

/* How about this ??

  (1 out of 4) "Calvin & Hobbes" by Bill Watterson
  (2 out of 4) "Zen Pencils" by Gavin Aung Than
  (3 out of 4) "Nancy" by Olivia James
  (4 out of 4) "False Knees" by Joshua Barkman 

  function printAllComics(comics){
    //                     (element)      (index)  (array)
        comics.forEach(({ title, author }, index, theArray) => {console.log(`(${index + 1} our of ${theArray.length}) ${title} by ${author}`)}); 
    }  
    printAllComics(comics) 
*/
// ------------------------------------------------------------------ //

/*
- Replace the `.forEach()` in your code with `.map()`. Does the code still work? 
  YESSSSS!!!!
  // the code runs but map needs to be returned!  
  // additionally we need to return each item in our callback to populate the array that .map() returns

function printAllComics(comics){
  comics.map(({ title, author }, index, theArray) => {console.log(`(${index + 1} our of ${theArray.length}) ${title} by ${author}`)}); 
}  

printAllComics(comics)
//> (1 out of 3) Calvin & Hobes by Bill Watterson
//> (2 out of 3) Nimona by Noelle Stevenson
//> (3 out of 3) False Knees by Joshua Barkman 
*/

/*
- What are some of the differences between `.forEach()` and`.map()` ?
  map returns a new array - forEach returns undefined and is primarly for side effects

- Instead of logging, `return` inside of your callback function. How can you access the result of your `.map()` function call?
we can save this return value - a new array - in a variablwe
*/

// - Write a new function called `getAuthors()`.The function should take in an array of comics(like above) and return an array of just the authors' names.


function getAuthors(comics) {
//       (array)    (element/value at every index)
  return comics.map((comic) => {
    return comic.title
  })
}

const result = getAuthors(comics);
console.log(result); //> [ "Bill Watterson", "Gavin Aung Than", "Olivia James", "Joshua Barkman"]

/*
- Now, update your `getAuthors()` function to make use of the `.map()` method. The function should produce the same result.

  Compare what you had written with what you have now. What is a benefit of using the `.map()` method?
*/

// - Mentally evaluate the code below before running it. What do you think will be logged out? Why?

function getTitle(comic) {
  return comic.title.toUpperCase(); // <---- we can add any JS operation here we like!
}

const result2 = comics.map((comic) => getTitle(comic));// < ----- notice here we can pass our already declared getTitle() to our callback in .map()
console.log(result2) //>

// ****** GROUP ACTIVITY! 20 minute challenge! *******

// Comic sales are down!  
// It's up to us to autmoate some reviews and map them to a new array we can use.

let reviews = [
  "Was amazing",
  "Is the best thing EVER",
  "Is such a good comic!",
  " - GET THIS COMIC!",
  " I. CAN'T. EVEN.",
  "is truly a masterpice of the genre"
];
// using .map() return a new array of strings such that 
// the titles of each comic are concatenated with a random string from the review array.

const makeFakeReviews = (comics, reviews) => {
  return comics.map((comic) => {
    // This function returns a new string of a comic and a random review from the outer scope of makeFakeReviews
    return `${comic.title} ${reviews[Math.floor(Math.random() * reviews.length)]}`;
  });
    // LONGWAY: 

    // let newArray = comics2.map((comic) => {
    //     return comic.title + " - " + reviews[Math.floor(Math.random() * reviews.length)]
    // });
    // return newArray;
};
let fakes = makeFakeReviews(comics, reviews);
console.log(fakes);


// How does the `.filter()` method differ from `.map()`? From `.forEach()`?
// Returns a NEW ARRAY like map BUT only elements that pass the provided function as truthy;
// Kinda like .map() but with a conditional

// ------------------------------------------------------------------ //

// Mentally evaluate the code below before running it. What do you think will be logged out? Why?

function isPrintComic(comic) {
  return comic.kind === "print";
}
// notice here we have => function and no {} on one line.  Thus, we need no return statement
const filtered = comics.filter(comic => isPrintComic(comic));

console.log(filtered);
// (2) [{…}, {…}]
// 0:{title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print'}
// 1:{title: 'Nancy', author: 'Olivia James', kind: 'print'}
// [[Prototype]]:Object
// length:2
// [[Prototype]]:Array(0)

// ------------------------------------------------------------------ //

// What would happen if the callback function had the code below instead? Why?


function isPrintComic(comic) {
  return comic.kind;
}
// Since every `comic` has a `kind` this would simply return a TRUTHY value to filter - thus every item would be passed into the array to be returned from filter()

// `type` _is not_ a key on each comic object. Keeping that in mind, would happen if the callback function had the code below instead? Why?

function isPrintComicTWO(comic) {
  return comic.type;
}


// Every invocation of comic.type would return `undefined` - which evaluates to falsy according to the rules of .filter().  Thuse NOTHING would be passed to the return array.  We would retrn AN EMPTY ARRAY



// ****** GROUP ACTIVITY! *******

// The following function represents a roll of a six sided die;
let rollDie = () => {
  return Math.floor(Math.random() * 6 + 1)
}
// rolls represents an array of numbers rolled
let rolls = [];
// As a group - write a function rolls 500 dice and records the results in rolls;
const roll500 = () => {
  let i = 0;
  while (i < 500) {
    rolls.push(rollDie());
    i++;
  }
}

roll500();
let wins = rolls.filter(roll => roll > 4);
let noWins = rolls.map((roll) => {
  return roll < 4 ? roll : 4
})







  // A five or a six is considered a winning roll
  // using .filter() how can we determine how many winning rolls there are?

  // using a .map() how can we return an array that has NO winning rolls?


  // How does the `.find()` method differ from `.filter()`? From `.map()` or `.forEach()`?

  //What will be the difference between `filterResult` and `findResult` after the code is run below?

function getJoshuaBarkmanComic(comic) {
  return comic.author === "Joshua Barkman"
}

const filterResult = comics.filter(comic => getJoshuaBarkmanComic(comic));
const findResult = comics.find(comic => getJoshuaBarkmanComic(comic));


console.log(filterResult); //> [{title: 'False Knees', author: 'Joshua Barkman', kind: 'web'}]
console.log(findResult)

// ------------------------------------------------------------------ //

function isWebComic(hotdog) {
  return hotdog.kind === "web"
}

const result3 = comics.find((comic) => isWebComic(comic));
const result4 = comics.find(isWebComic);

console.log(result3) //> {title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web'}
console.log(result4) //> {title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web'}



/* Take a look at the table below. What does each column mean?

  | Method       | Callback expected return value | Method return value | Destructive? |
  | ------------ | ------------------------------ | ------------------- | ------------ |
  | `.forEach()` | Nothing.                       | Nothing.            | No.          |
  | `.map()`     | Anything.                      | An array.           | No.          |
  | `.filter()`  | Boolean.                       | An array.           | No.          |
  | `.find()`    | Boolean.                       | Anything.           | No.          |

- Although none of the methods above are _inherently_ destructive methods, is it possible to cause mutations with those methods? Should you?

*/