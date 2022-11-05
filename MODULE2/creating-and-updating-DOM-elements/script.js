const span = document.createElement("span");
console.log(span);

// we can add elements with:
// .prepend
// .append
// .after
// .before

const h1 = document.querySelector('h1');
console.log(h1);
h1.append(span);

// updated our span element to have text
span.textContent = "They're all good dogs!"
console.log(span);

// Add class to span & underline element: 
span.setAttribute('class', 'underline');

// Second Method:
span.classList.add('underline');

// Adding the commented out HTML code:

// Main tag - 'article'
const article = document.createElement('article');

// Creates the 'img' attributes
const img = document.createElement('img');
img.setAttribute('class', 'animated');
img.setAttribute('src', 'https://placedog.net/500/450');
img.setAttribute('alt', 'Image of Amber the dog');

// Creates the information 'h2' in the tag
const h2 = document.createElement('h2');
h2.textContent = "Amber";

// Creates the information inside 'p' tag
const p = document.createElement('p');
p.textContent = 'A sweet little doggo that belongs to my friend.';

// Connects/appends the created const: 'img', 'h2', and 'p' to the 'article'
article.append(img);
article.append(h2);
article.append(p);

// Alternatively : article.append(img, h2, p);

// After all the elements are within the 'article' tag, we add 'article' into the 'main' tag in the HTML
const main = document.querySelector('main');
main.append(article);

// Adding another doggie article
const articleTwo = document.createElement('article');
const imgTwo = document.createElement('img');
const header = document.createElement('h2');
const pTwo = document.createElement('p');


imgTwo.setAttribute('class', 'animated');
imgTwo.setAttribute('src', 'https://placedog.net/500/441');
imgTwo.setAttribute('alt', 'Image of Betty the dog');
header.textContent = 'Betty';
pTwo.textContent = 'A sweet doggo that belongs to you.';
articleTwo.classList.add('featured');
main.append(articleTwo);
articleTwo.append(imgTwo, header, pTwo);


// What other way can we write the above code using a function?
// Example: 

const myDogs = [
    {
        name: "Amber",
        description: "A sweet little doggo that belongs to my friend.",
        imageNum: 450,
        featured: false,
    },
    {
        name: "Betty",
        description: "A sweet doggo that belongs to you.",
        imageNum: 441,
        featured: true,
    }
];

const createDogs = (dogs) => {
    dogs.forEach((dog) => {
        const mainExample = document.querySelector('main')
        const articleExample = document.createElement('article');
        const imgExample = document.createElement('img');
        const h2Example = document.createElement('h2');
        const pExample = document.createElement('p');

        dog.featured ?  articleExample.classList.add('featured') : imgExample.classList.add('class', 'animated');
        
        imgExample.setAttribute('src', `https://placedog.net/500/${dog.imageNum}`);
        imgExample.setAttribute('alt', `Image of ${dog.name} the dog`);
        
        h2Example.textContent = `${dog.name}`;
        
        pExample.textContent = `${dog.description}`;
        
        articleExample.append(imgExample, h2Example, pExample);

        mainExample.append(articleExample);
    });
};

createDogs(myDogs);

