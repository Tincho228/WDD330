

export default class CircuitView {
    constructor(elementId) {
        // will need this
        this.parentElement = document.getElementById(elementId);
        
    }
    renderCircuitList(circuitList, parentElement) {
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
        parentElement.innerHTML = `<h2 id="circuit-title" class="bg-highlight-green text-light text-title text-center"
        style="padding:5px;">Our Circuits</h2>`
        circuitList.forEach(circuit => {
            parentElement.appendChild(this.renderOneCircuit(circuit));
        })
    }
    renderOneCircuit(circuit) {
        const item = document.createElement("div");
        item.setAttribute("class", "card");
        item.style.width = "18rem";
        item.style.margin = "10px";
        item.style.border = "1px solid #40546a";
        item.innerHTML = `  <img class="card-img-top" src="./images/park.jpg" alt="Card image cap">
                            <h2 class="text-title text-light text-center"
                                 style="position:absolute; 
                                        top:25%;
                                        left:50%;
                                        transform: translate(-50%, -50%);"
                                        >${circuit.name}</h2>
                            <div class="card-body bg-main text-light">
                                <h5 class="card-title text-bodycopy">${circuit.day} ${circuit.date} <span class="text-warning">${circuit.hour}</span></h5>
                                <p class="card-text">${circuit.description}</p>
                                <a href="#" class="btn-sm btn-primary btnId" data-id ="${circuit.id}">Join Team</a>
                            </div> `
        return item;
    }
    renderOneCircuitFull(circuitById, parentElement){
        parentElement.innerHTML = 
                        `   <div class="col-sm-12 col-md-6">
                                <h2 class="text-title text-light">${circuitById[0].name}</h2>
                                <hr class="bg-light">
                                <span class="text-title text-success" style="font-size: 40px">${circuitById[0].day} ${circuitById[0].date}</span>
                                <span class="text-title text-warning blinking" style="font-size: 40px">&nbsp; ${circuitById[0].hour}</span>
                                <h4 class="text-light text-bodycopy">Team Leader</h4>
                                <p class="text-bodycopy text-light">${circuitById[0].teamLeader}</p>
                                <h4 class="text-light text-bodycopy">Description</h4>
                                <p class="text-bodycopy text-light">${circuitById[0].description}</p>
                                <h4 class="text-light text-bodycopy">${circuitById[0].directions}</h4>
                                
                                
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <h2 class="text-light text-title text-right">Circuit Loop</h2>
                                ${circuitById[0].map}
                            </div>`
    }
}