const credentials = [{
    user: "admin_neo@gmail.com",
    password : "Bikeriders.2020"   
}]

export default class AccountModel {
    constructor(){

    }
    getCredentials(){
        return credentials;
    }
    startSession(){
        console.log("start session")
    }
}