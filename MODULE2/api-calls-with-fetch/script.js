const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

const error = document.querySelector('.error')

function getPokemonbyId(pokeID) {
    fetch(`${BASE_URL}/${pokeID}`)
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            const section = document.querySelector('.pokemon');
            section.append(createPokemon(json));
        })
        .catch((error) => {
            // calls our createErrorMessage function that creates our error section 
            const errorSection = createErrorMessage(error)
            // query for "main" element
            const main = document.querySelector('main')
            // append error section to main
            main.append(errorSection);
        })
}

function createPokemon(json){
    const article = document.createElement('article');
    const image = document.createElement('img');
    const header = document.createElement('h2');
    image.setAttribute('src', json.sprites.front_default);
    image.setAttribute('alt', json.name);
    header.textContent = `${json.name} ${json.order}`;
    article.append(image, header);
    return article;
}


function createErrorMessage(error) {
    const section = document.createElement('section');
    section.classList.add('error');
    const err = document.createElement('p');
    const errorMessage = document.createElement('p');
    err.textContent = "There was an error!";
    errorMessage.textContent = `${error}`;
    section.append(err);
    section.append(errorMessage);
    return section;
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const pokeID = event.target.id.value;
    // console.log(event.target["id"].value) <-- works too!
    getPokemonbyId(pokeID);
    form.reset();
});