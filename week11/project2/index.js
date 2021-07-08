import CircuitController from "./controllers/CircuitController.js";
import WeatherController from "./controllers/WeatherController.js";
import AccountController from "./controllers/AccountController.js";
const circuitController = new CircuitController('circuit');
const weatherController = new WeatherController('weather');
const accountController = new AccountController("accountLink","loginLink","logoutLink","hero");

circuitController.showCircuitList()
weatherController.showCurrentWeather()
accountController.accountInit()

/*
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  alert('Media Query Matched!')
}*/