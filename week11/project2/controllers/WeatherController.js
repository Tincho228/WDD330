import WeatherView from '../views/WeatherView.js';
import WeatherModel from '../models/WeatherModel.js';
import * as utilitiesModule from "../utilities.js";

export default class WeatherController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId)
        this.url = "https://api.openweathermap.org/data/2.5/onecall?lat=-34.61463299186993&lon=-68.34168977379773&exclude=hourly,minutely&units=imperial&appid=0bd1671316868f5ad2775ab7ede5bf47"
        this.imgUrlpath = "http://openweathermap.org/img/wn/"
        this.weatherModel = new WeatherModel();
        this.weatherView = new WeatherView(parentId);
    }
  
    async showCurrentWeather() {
      utilitiesModule.getLocation();
      const result = await utilitiesModule.getJSON(this.url)
      const pathIcon = this.imgUrlpath+result.current.weather[0].icon+"@2x.png";
      this.parentElement.innerHTML = null;
      this.weatherView.renderCurrentWeather(this.parentElement, result, pathIcon);
      
    }
    async showWeatherDetail(circuit){
      const result = await this.weatherModel.filterWeather(circuit)
      // Send the data to the weather view
      const parentElemment = document.getElementById("weather")
      this.weatherView.renderWeatherDetail(result, parentElemment)
    }
  
  }