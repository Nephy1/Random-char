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
    // TODO : Fix random array, not working
    const randomId = function(){
      //randomId.length = [Math.floor(Math.random() * randomId.length)];
      min = Math.ceil(0);
      max = Math.floor(671);
      return Math.floor(Math.random() * (max - min + 1) + min);
      
      };
    console.log(randomId.length);
    chars.innerHTML = `
    <figure>
    <h2>${data.results[randomId.length].name}</h2>
    <a href="${data.results[randomId.length].image}">
    <img src="${data.results[randomId.length].image}" alt="Random Character from Rick and Morty">
    </a>
    <figcaption>
    <h3>Information</h3>
    <ul>
    <li>Status: ${data.results[randomId.length].status}</li>
    <li>Species: ${data.results[randomId.length].species}</li>
    <li>Origin: ${data.results[randomId.length].origin.name}</li>
    <li>API Info: <a href="${data.results[randomId.length].url}">Click Me</a></li>
    </ul>
    </figcaption>
    </figure>
    `;
    console.log(data);
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    //alert('Something went wrong! Please refresh your page or come back later!')
    console.log(err);
  });