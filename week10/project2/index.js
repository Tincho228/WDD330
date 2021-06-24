import CircuitController from "./controllers/CircuitController.js";
import WeatherController from "./controllers/WeatherController.js";
const circuitController = new CircuitController('circuit');
const weatherController = new WeatherController('weather');


circuitController.showCircuitList();
weatherController.showCurrentWeather()