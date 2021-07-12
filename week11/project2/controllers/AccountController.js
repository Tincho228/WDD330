// Import modules
import AccountModel from '../models/AccountModel.js';
import AccountView from '../views/AccountView.js';
import CircuitModel from '../models/CircuitModel.js';
import * as utilitiesModule from "../utilities.js";

export default class AccountController {
  constructor(accountLink, loginLink, logoutLink, hero, circuit) {
    this.circuitParent = document.getElementById(circuit)
    this.heroParent = document.getElementById(hero)
    this.accountLink = document.getElementById(accountLink)
    this.loginLink = document.getElementById(loginLink)
    this.logoutLink = document.getElementById(logoutLink)
    this.btnSubmit = document.getElementById("btnSubmit")
    this.errorMMessage = document.getElementById("errorMMessage")
    this.accountModel = new AccountModel()
    this.accountView = new AccountView(accountLink, loginLink, logoutLink)
    this.circuitModel = new CircuitModel()
  }
  accountInit() {
    const form = document.getElementsByTagName('form')[0];
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const passError = document.querySelector('#password +span.error');
    const emailError = document.querySelector('#email + span.error');
    let credentials = Array.from(this.accountModel.getCredentials())
    this.logoutLink.ontouchend = this.logout.bind(this)
    this.accountLink.ontouchend = this.account.bind(this)
    // while typing
    email.addEventListener('input', e => {
      if (email.validity.valid) {
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
      } else {
        this.showError(email, emailError);
      }
    });
    pass.addEventListener('input', e => {
      if (pass.validity.valid) {
        passError.textContent = ''; // Reset the content of the message
        passError.className = 'error'; // Reset the visual state of the message
      } else {
        this.showError(pass, passError);
      }
    });
    // after changing the whole value
    email.addEventListener('change', testEmail);
    pass.addEventListener('change', testPassword);

    //when the form gets submitted
    form.addEventListener('submit', e => {
      this.evaluate(e, pass, passError, email, emailError, credentials)
    });

    function testEmail(evt) {
      let email = evt.target;
      email.setCustomValidity(''); //clear old message
      //built-in test for error based on type, pattern, and other attrs
      let currently = email.checkValidity();
      if (currently) {
        let emReg = new RegExp('@gmail.com$', 'i');
        if (emReg.test(email.value) === false) {
          email.setCustomValidity("Must be a gmail address")
          email.reportValidity() // show the built in message
        }
      }
    }

    function testPassword(evt) {
      let password = evt.target
      password.setCustomValidity('')
      let currently = password.checkValidity()

    }
  }
  evaluate(e, pass, passError, email, emailError, credentials) {
    e.preventDefault()
    if (!pass.validity.valid) {
      this.showError(pass, passError);
      return
    }
    if (!(credentials[0].user === email.value)) {
      console.log("email does not match")
      this.errorMMessage.innerHTML = "Email incorrect, try again"
      return
    }
    if (!(credentials[0].password === pass.value)) {
      console.log("password does not match")
      this.errorMMessage.innerHTML = "Password incorrect, try again"
      return
    }

    this.accountModel.startSession()
    this.accountView.renderLoginChanges()
    $('#loginModal').modal('hide')
    return
  }
  showError(data, element) {
    if (data.validity.valueMissing) {
      element.textContent = 'This information is required';
    } else if (data.validity.typeMismatch) {
      element.textContent = 'Entered value needs to be valid, try again';
    } else if (data.validity.tooShort) {
      element.textContent =
        `Email should be at least ${ data.minLength } characters; you entered ${ data.value.length }.`;
    }
    element.className = 'error active';
  }
  logout() {
    this.accountModel.destroySession()
    var delayInMilliseconds = 1000; //1 second
    setTimeout( () =>{
      this.accountView.renderLogoutChanges()}
    , delayInMilliseconds);
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    utilitiesModule.clearInput(email)
    utilitiesModule.clearInput(pass)
  }
  account(){
    const infoSection = document.getElementById("infoSection")
    const parentWeather = document.getElementById("weather"); 
    const parentCircuit = document.getElementById("circuit"); 
    utilitiesModule.hide(infoSection) 
    utilitiesModule.hide(parentWeather)
    parentCircuit.innerHTML = null
    const circuitList = this.circuitModel.getAllCircuits()
    utilitiesModule.renderHeroAccount(this.heroParent)
    utilitiesModule.renderCircuitList(circuitList, this.circuitParent)

    
  }
  createCircuit(){
    console.log("create circuit")
  }
  deleteCircuit(){
    console.log("delete circuit")
  }
  editcircuit(){
    console.log("edit circuit")
  }
}
