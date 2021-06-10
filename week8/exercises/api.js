/*function api() {
    fetch('http://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            let result = document.getElementById('result')
            for (var i=0; i<data.results.length; i++){
                console.log(data.results[i].name)
            }
            
        });
}
api();*/
       
const url = 'http://swapi.dev/api/people'
getMovies(url);
async function getMovies(url){
    try {
        const response = await fetch (url, {

        });
        if (!response.ok){
            throw Error(response.statusText)
        } else{
        const data = await response.json();
        let result = document.getElementById('result')
            for (var i=0; i<data.results.length; i++){
                console.log(data.results[i].name)
                const li = document.createElement("li");
                li.innerHTML = data.results[i].name
                result.appendChild(li);

            }
        }
    } catch (error){
        console.log(error);}
}
