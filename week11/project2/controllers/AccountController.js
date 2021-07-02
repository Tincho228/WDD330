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
    const credentials = Array.from(this.accountModel.getCredentials())
    // while typing
    email.addEventListener('input', function (event) {
      if (email.validity.valid) {
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
      } else {
        showError(email, emailError);
      }
    });
    pass.addEventListener('input', function (event) {
      if (pass.validity.valid) {
        passError.textContent = ''; // Reset the content of the message
        passError.className = 'error'; // Reset the visual state of the message
      } else {
        showError(pass, passError);
      }
    });
    // after changing the whole value
    email.addEventListener('change', testEmail);
    pass.addEventListener('change', testPassword);

    //when the form gets submitted
    form.addEventListener('submit', evaluate);
    

    

    /************** HELPER FUNCTIONS ******** */
    function evaluate(event){
      event.preventDefault();
      if (!email.validity.valid) {
        showError(email, emailError);
      }
      if (!pass.validity.valid) {
        showError(pass, passError);
        return
      }
      if (!(credentials[0].user === email.value)) {
        console.log("email does not match")
        return
      }
      if (!(credentials[0].password === pass.value)) {
        console.log("password does not match")
        return
      }
      console.log("welcome")
      return
    }

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

    function showError(data, element) {
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

  }


}
