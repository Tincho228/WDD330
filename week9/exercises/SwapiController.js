import * as utilitiesModule from "./utilities.js"
export default class SwapiController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId)
        this.pageElement = document.getElementById("pageElement")
        this.btnPrev = document.getElementById('btnPrev');
        this.btnNext = document.getElementById('btnNext');
        this.url = 'http://swapi.dev/api/people'
        

    }
    async showResult(url) {
        const data = await this.getPeople(url)
        const pageCounter = utilitiesModule.pagination(data.count, 10)
        this.renderResult(data, this.parentElement)
        this.renderPagination(pageCounter, this.pageElement);
        this.btnNext.ontouchend = () => {
            this.move(data.next);
        }
        this.btnPrev.ontouchend = () => {
            this.move(data.previous)
        }
        //Adding event listeners to the li 
        const list = document.querySelectorAll(".list-id")
        list.forEach(item => {
            item.addEventListener("touchend", e => this.showOnePerson(e.currentTarget.dataset.name))
        })
        const btnPage = document.querySelectorAll(".btnPage")
        btnPage.forEach(btn =>{
            btn.addEventListener("touchend", e => this.showThisPage(e.currentTarget.dataset.number))
        } )
    }
    async showThisPage(number){
        let url = this.url + "/?page=" + number
        this.showResult(url)
        
    }
    getPeople(url) {
        return utilitiesModule.getJSON(url)
        
    }
  
    async showOnePerson(name) {
        let url = this.url + '/?search=' + name
        const data = await this.getPeople(url)
        this.renderDetails(data, this.parentElement)
    }
    move(url) {
        if (url) {
            this.showResult(url)
        }
    }
    
    renderResult(data, result) {
        this.parentElement.innerHTML = null
        for (var i = 0; i < data.results.length; i++) {
            const li = document.createElement("li");
            li.setAttribute("class", "list-group-item list-id")
            li.setAttribute("data-name", data.results[i].name)
            li.innerHTML = data.results[i].name
            result.appendChild(li);
        }
    }
    renderDetails(data, result) {
        this.parentElement.innerHTML = null
        result.innerHTML = `<h3 class="text-center bg-light text-secondary" >${data.results[0].name}</h3>
                            <p>Birthdate: ${data.results[0].birth_year}</p>
                            <p>Gender: ${data.results[0].gender}</p>
                            <p>Hair color: ${data.results[0].hair_color}</p>
                            <p>Eye color: ${data.results[0].eye_color}</p>
                            <p>Height: ${data.results[0].height}</p>
                            <p>Mass: ${data.results[0].mass}</p>
                            <p>Skin color: ${data.results[0].skin_color}</p>
                            `                
    }
    renderPagination(pageCounter, pageElement){
        pageElement.innerHTML = null
        for(var i = 1; i<= pageCounter ; i++){
            const button = document.createElement("button")
            button.setAttribute("class", "btn btn-light btnPage")
            button.setAttribute("data-number", i )
            button.innerHTML = `${i}`
            pageElement.appendChild(button)

        }
    }
}
