const credentials = [{
    user: "admin_neo@gmail.com",
    password : "Bikeriders.2020"   
}]

export default class AccountModel {
    constructor(){
    this.key = credentials[0].user
    }
    getCredentials(){
        return credentials;
    }
    startSession(){
        sessionStorage.setItem(this.key, "loggedIn");
    }
    checkSession(){
        var result = sessionStorage.getItem(this.key);
        return result
    }
    destroySession(){
        sessionStorage.clear();
    }
}