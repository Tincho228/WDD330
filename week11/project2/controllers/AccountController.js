// Import modules
import AccountModel from '../models/AccountModel.js';
//import CircuitView from '../views/CircuitView.js';

export default class AccountController {
  constructor(accountLink, loginLink) {
    this.accountLink = document.getElementById(accountLink)
    this.loginLink = document.getElementById(loginLink)
    this.btnSubmit = document.getElementById("btnSubmit")
    this.errorMMessage = document.getElementById("errorMMessage")
    this.accountModel = new AccountModel()
  }
  accountInit() {
    const form = document.getElementsByTagName('form')[0];
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const passError = document.querySelector('#password +span.error');
    const emailError = document.querySelector('#email + span.error');
    const credentials = this.accountModel.getCredentials()
    // while typing
    email.addEventListener('input', function (event) {
      if (email.validity.valid) {
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
      } else {
        showError();
      }
    });
    pass.addEventListener('input', function (event) {
      console.log(pass.validity)
      if (pass.validity.valid) {
        passError.textContent = ''; // Reset the content of the message
        passError.className = 'error'; // Reset the visual state of the message
      } else {
        showErrorPass();
      }
    });
    // after changing the whole value
    email.addEventListener('change', testEmail);
    pass.addEventListener('change', testPassword);

    //when the form gets submitted
    form.addEventListener('submit', function (event) {
      if (!email.validity.valid) {
        event.preventDefault();
        showError();  
      }
    });

    function testEmail(evt){
      let email = evt.target;
      email.setCustomValidity(''); //clear old message
      //built-in test for error based on type, pattern, and other attrs
      let currently = email.checkValidity();
      if(currently){
        let emReg = new RegExp('@gmail.com$','i');
        if(emReg.test(email.value)=== false ){
          email.setCustomValidity("Must be a gmail address")
          email.reportValidity() // show the built in message
        }
      }
    }
    function testPassword(evt){
      let password =evt.target
      email.setCustomValidity('')
      let currently = password.checkValidity()
      
    }
    function showError() {
      if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address.';
      } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
      } else if (email.validity.tooShort) {
        emailError.textContent =
          `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
      }
      emailError.className = 'error active';
    }
    function showErrorPass(){
      if (pass.validity.valueMissing) {
        passError.textContent = 'You need to enter an e-mail address.';
      } else if (pass.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
      } else if (pass.validity.tooShort) {
        passError.textContent =
          `Email should be at least ${ pass.minLength } characters; you entered ${ pass.value.length }.`;
      }
      passError.className = 'error active';
    }
    
  }


}