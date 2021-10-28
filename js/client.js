fetch('https://rickandmortyapi.com/api/character')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
    const chars = document.querySelector('.chars');
    const button = document.querySelector('button');

    let id ;
    // New Character Generator
    const newChar = function (){
      id = [Math.floor(Math.random() * `${data.results.length}`)];
      return id;
    }
    // Invoking Function
    newChar();
    // Button doesnt work
    button.addEventListener(`click`, newChar);

    chars.innerHTML = `
    <figure>
    <h2>${data.results[id].name}</h2>
    <a href="${data.results[id].image}">
    <img src="${data.results[id].image}" alt="Random Character from Rick and Morty">
    </a>
    <figcaption>
    <h3>Information</h3>
    <ul>
    <li>Status: ${data.results[id].status}</li>
    <li>Species: ${data.results[id].species}</li>
    <li>Origin: ${data.results[id].origin.name}</li>
    <li>Created: ${data.results[id].created}</li>
    <li><a href="${data.results[id].url}">API Info</a></li>
    </ul>
    </figcaption>
    </figure>
    <button>New Character</button>
    `;
    
  })
  
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    alert('Something went wrong! Please refresh your page or come back later!')
    console.log(err);
  });

  