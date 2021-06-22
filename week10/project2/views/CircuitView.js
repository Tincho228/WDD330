

export default class CircuitView {
    constructor(elementId) {
        // will need this
        this.parentElement = document.getElementById(elementId);
    }
    renderCircuitList(circuitList, parentElement) {
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
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
                                <h5 class="card-title text-bodycopy">${circuit.date}</h5>
                                <p class="card-text">${circuit.description}</p>
                                <a href="#" class="btn-sm btn-primary">Go somewhere</a>
                            </div> `
        return item;
    }
}