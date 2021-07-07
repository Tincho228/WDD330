import * as utilitiesModule from "../utilities.js";

export default class AccountView {
    constructor(accountLink, loginLink, logoutLink){
        this.accountLink = document.getElementById(accountLink)
        this.loginLink = document.getElementById(loginLink)
        this.logoutLink = document.getElementById(logoutLink)
    }
    
    renderLoginChanges(){
        utilitiesModule.hide(this.loginLink)
        utilitiesModule.show(this.logoutLink)
        this.accountLink.classList.remove("disabled");
        this.accountLink.classList.add("text-warning");
    }
    renderLogoutChanges(){
        utilitiesModule.show(this.loginLink)
        utilitiesModule.hide(this.logoutLink)
        this.accountLink.classList.remove("text-warning");
        this.accountLink.classList.add("disabled");
    }
}