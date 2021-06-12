
export default class SwapiController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId)
        this.btnPrev = document.getElementById('btnPrev');
        this.btnNext = document.getElementById('btnNext');
        this.url = 'http://swapi.dev/api/people'
    }
    showResult() {
        
        this.getPeople(this.url)     
    }
    async getPeople(url) {
        console.log(url)
        try {
            const response = await fetch(url, {
            });
            if (!response.ok) {
                throw Error(response.statusText)
            } else {
                const data = await response.json();
                this.parentElement.innerHTML = null
                this.renderResult(data, this.parentElement)
                this.btnNext.ontouchend = ()=>{
                    this.moveNext(data.next);
                }
                this.btnPrev.ontouchend = ()=>{
                    this.movePrev(data.previous)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    moveNext(url){
        if(url){
        this.getPeople(url)}
    }
    movePrev(url){
        if(url){
        this.getPeople(url)}
    }
    renderResult(data, result){
        for (var i=0; i<data.results.length; i++){
            const li = document.createElement("li");
            li.setAttribute("class", "list-group-item")
            li.innerHTML = data.results[i].name
            result.appendChild(li);
        }
    }
}
