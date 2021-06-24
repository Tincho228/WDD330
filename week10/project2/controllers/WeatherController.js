import WeatherView from '../views/WeatherView.js';
import * as utilitiesModule from "../utilities.js";

export default class WeatherController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId)
        this.url = "https://api.openweathermap.org/data/2.5/onecall?lat=-34.61463299186993&lon=-68.34168977379773&exclude=hourly,minutely&units=imperial&appid=0bd1671316868f5ad2775ab7ede5bf47"
        this.imgUrlpath = "http://openweathermap.org/img/wn/"
        

        this.weatherView = new WeatherView();
    }
  
    async showCurrentWeather() {
      utilitiesModule.getLocation();
      const result = await utilitiesModule.getJSON(this.url)
      const pathIcon = this.imgUrlpath+result.current.weather[0].icon+"@2x.png";
      this.parentElement.innerHTML = null;
      this.weatherView.renderCurrentWeather(this.parentElement, result, pathIcon);
    }
    showWeekWeather(){
      const circuitById = this.circuitModel.getCircuitById(id)
      // Clearing the list
      this.parentElement.innerHTML = null
      utilitiesModule.hide(this.infoSection)
      // Show all comments by name
      this.circuitView.renderOneCircuitFull(circuitById, this.parentElement)
      utilitiesModule.hide(this.parentWeather)
      utilitiesModule.show(this.btnBack)
    }
    async filterWeather(circuit){
      const result = await utilitiesModule.getJSON(this.url)
      for (var i = 0; i < result.daily.length ; i++){
        const date = utilitiesModule.getDay(result.daily[i].dt)
        if (date === circuit[0].date){
          console.log("match found")
          // show weather on that day
        }
      }
      
      
      
    }
    addListenerbyClass(selector) {
      // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
      const items = document.querySelectorAll(selector);
        items.forEach(btn => {
        btn.addEventListener('click', e => {this.showOneCircuit(e.currentTarget.dataset.id);});
      })
    }
  
  }