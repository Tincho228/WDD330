// It handles all the views - Receives data from the controller.

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
        item.innerHTML = `  <img class="card-img-top" src="./images/park.jpg" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div> `

        console.log(circuit.imgSrc)
        return item;
    }
}