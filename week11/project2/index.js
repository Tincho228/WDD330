import CircuitController from "./controllers/CircuitController.js";
import AccountController from "./controllers/AccountController.js";
const circuitController = new CircuitController('circuit');
const accountController = new AccountController("accountLink","loginLink","logoutLink","hero","circuit");

circuitController.init()
accountController.accountInit()

/*
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  alert('Media Query Matched!')
}*/