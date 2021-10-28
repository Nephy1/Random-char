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
    const button = document.querySelector('.btn')
    let id ;


  function randomId(){
      id = [Math.floor(Math.random() * `${data.results.length}`)];
      console.log(id);
      return [Number(id)];
    }
    button.addEventListener("click", randomId);
    
    randomId();
    
    chars.innerHTML = `
    <figure>
    <h2>${data.results[Number(id)].name}</h2>
    <a href="${data.results[Number(id)].image}">
    <img src="${data.results[Number(id)].image}" alt="Random Character from Rick and Morty">
    </a>
    <figcaption>
    <h3>Information</h3>
    <ul>
    <li>Status: ${data.results[[Number(id)]].status}</li>
    <li>Species: ${data.results[Number(id)].species}</li>
    <li>Origin: ${data.results[Number(id)].origin.name}</li>
    <li>Created: ${data.results[Number(id)].created}</li>
    <li><a href="${data.results[Number(id)].url}">API Info</a></li>
    </ul>
    </figcaption>
    </figure>
    <button>New Character</button>
    `;
    console.log(data.results[Number(id)]);

  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    //alert('Something went wrong! Please refresh your page or come back later!')
    console.log(err);
  });

  