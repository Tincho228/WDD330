/*function api(){
let result = document.getElementById('result');

fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => console.log(data));
}
api();*/
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      body: 'JSON'
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  postData('https://swapi.dev/api/people', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
    let result = document.getElementById('result');
    result.innerHTML = data;
  });
