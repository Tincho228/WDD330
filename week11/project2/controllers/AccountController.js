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
    utilitiesModule.eventWhiletyping(email, emailError, this.showError.bind(this))
    utilitiesModule.eventWhiletyping(pass, passError, this.showError.bind(this))

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
    /*
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
        }*/

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
        `Item should be at least ${ data.minLength } characters; you entered ${ data.value.length }.`;
    } else if (data.validity.patternMismatch) {
      element.textContent = "Type of value needs to be valid, try again"
    }
    element.className = 'error active';
  }
  logout() {
    this.accountModel.destroySession()
    var delayInMilliseconds = 1000; //1 second
    setTimeout(() => {
      this.accountView.renderLogoutChanges()
    }, delayInMilliseconds);
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    utilitiesModule.clearInput(email)
    utilitiesModule.clearInput(pass)
  }
  account() {
    const infoSection = document.getElementById("infoSection")
    const parentWeather = document.getElementById("weather");
    const parentCircuit = document.getElementById("circuit");
    utilitiesModule.hide(infoSection)
    utilitiesModule.hide(parentWeather)
    parentCircuit.innerHTML = null
    const circuitList = this.circuitModel.getAllCircuits()
    utilitiesModule.renderHeroAccount(this.heroParent)
    this.accountView.renderCircuitList(circuitList, this.circuitParent)
    const btnEdit = Array.from(document.querySelectorAll(".btnEdit"))
    const btnDelete = Array.from(document.querySelectorAll(".btnDelete"))
    const btnCreate = Array.from(document.querySelectorAll(".btnCreate"))
    btnEdit.forEach(btn => {
      btn.addEventListener('touchend', e => {
        this.editCircuit(e.currentTarget.dataset.id)
      })
    })
    btnDelete.forEach(btn => {
      btn.addEventListener('touchend', e => {
        this.deleteCircuit(e.currentTarget.dataset.id)
      })
    })
    btnCreate.forEach(btn => {
      btn.addEventListener('touchend', e => {
        this.createCircuit()
      })
    })
  }
  createCircuit() {
    const form = document.getElementsByTagName('form')[1];
    const name = document.getElementById('name');
    const nameError = document.querySelector('#name + span.error');
    let image = document.getElementById('image');
    const distance = document.getElementById('distance');
    const distanceError = document.querySelector('#distance + span.error');
    const difficulty = document.getElementById('difficulty');
    const directions = document.getElementById('directions');
    const directionsError = document.querySelector('#directions + span.error');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const map = document.getElementById('map');
    const leader = document.getElementById('leader');
    const leaderError = document.querySelector('#leader + span.error');
    // while typing
    utilitiesModule.eventWhiletyping(name, nameError, this.showError.bind(this))
    utilitiesModule.eventWhiletyping(distance, distanceError, this.showError.bind(this))
    utilitiesModule.eventWhiletyping(directions, directionsError, this.showError.bind(this))
    utilitiesModule.eventWhiletyping(leader, leaderError, this.showError.bind(this))
    
    //image file loading
    const newImage = image.addEventListener("change", function(){
      console.log(this.files)
      const reader = new FileReader()
      reader.addEventListener("load", () =>{
        return reader.result
      })

      reader.readAsDataURL(this.files[0])
    })
    // when submitting
    form.addEventListener('submit', e => {
      e.preventDefault();
      console.log(newImage)
      let object = {
        name: name,
        image: image,
        distance: distance,
        difficulty: difficulty,
        directions: directions,
        date: date,
        time: time,
        map: map,
        leader: leader
      }
      var result = utilitiesModule.testValue(object)
      if (result === true){

      // Constructing the final new object
      let newCircuit = {
          id: new Date().getTime(),
          name: name.value,
          imgSrc: newImage,
          imgAlt: "Image of " + name,
          distance: distance.value + "miles", 
          difficulty: difficulty.value,
          directions: directions.value,
          day: date.value,
          date: date.value,
          hour: time.value,
          map: map.value,
          teamLeader: leader.value
      }  
        this.circuitModel.writeCircuitToLS(newCircuit)
      }

    });

  }

  deleteCircuit(e) {
    console.log("delete circuit" + e)
  }
  editCircuit(e) {
    console.log("edit circuit" + e)
  }
  
}
