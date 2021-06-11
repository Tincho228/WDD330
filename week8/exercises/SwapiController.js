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

export default class SwapiController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.btnPrev = document.getElementById('btnPrev');
        this.btnNext = document.getElementById('btnNext');
        this.url = 'http://swapi.dev/api/people'
    }
    showResult() {
        this.getPeople(this.url)     
    }
    async getPeople(url) {
        try {
            const response = await fetch(url, {

            });
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                const data = await response.json();
                this.renderResult(data, this.parentElement)
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    }
    renderResult(data, result){
        for (var i=0; i<data.results.length; i++){
            console.log(data.results[i].name)
            const li = document.createElement("li");
            li.innerHTML = data.results[i].name
            result.appendChild(li);
        }
    }
}
/*
const url = 'http://swapi.dev/api/people'
getPeople(url);
async function getPeople(url){
    try {
        const response = await fetch (url, {

        });
        if (!response.ok){
            throw Error(response.statusText)
        } else{
        const data = await response.json();
        let result = document.getElementById('result')
        showResult(data, result);
        }
    } catch (error){
        console.log(error);}
}
function showResult (data, result){
    for (var i=0; i<data.results.length; i++){
        console.log(data.results[i].name)
        const li = document.createElement("li");
        li.innerHTML = data.results[i].name
        result.appendChild(li);

    }
}*/