import * as utilitiesModule from "../utilities.js";

export default class AccountView {
    constructor(accountLink, loginLink, logoutLink) {
        this.accountLink = document.getElementById(accountLink)
        this.loginLink = document.getElementById(loginLink)
        this.logoutLink = document.getElementById(logoutLink)
    }

    renderLoginChanges() {
        utilitiesModule.hide(this.loginLink)
        utilitiesModule.show(this.logoutLink)
        this.accountLink.classList.remove("disabled");
        this.accountLink.classList.add("text-warning");
    }
    renderLogoutChanges() {
        utilitiesModule.show(this.loginLink)
        utilitiesModule.hide(this.logoutLink)
        this.accountLink.classList.remove("text-warning");
        this.accountLink.classList.add("disabled");
    }
    renderCircuitList(circuitList, parent) {
        circuitList.forEach(circuit => {
            parent.appendChild(this.renderOneCircuitList(circuit));
        });
        const item = document.createElement("div")
        item.setAttribute("class", "list-group-item");
        item.innerHTML = ` <div class="d-flex align-items-center justify-content-between">
                                <span class="text-success">Create a new Circuit</span>
                                <button class="btn btn-success btnCreate" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create circuit" data-toggle="modal" data-target="#createModal"><i class="fa fa-plus" aria-hidden="true"></i></button>  
                            </div> `

        parent.appendChild(item)

    }
    renderOneCircuitList(circuit) {
        const item = document.createElement("li");
        item.style.marginBottom = "5px"
        item.setAttribute("class", "list-group-item");
        item.innerHTML = ` <div class="d-flex align-items-center justify-content-between">
              <span id="${circuit.id}">${circuit.name}</span>
              <div class="d-flex">
                  <button class="btn btn-secondary btnEdit" data-id=${circuit.id} style="margin-right:5px" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit circuit"><i class="fas fa-edit"></i></i>
                  <button class="btn btn-secondary btnDelete" data-id=${circuit.id} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
          </div> `;
        return item;
    }
}