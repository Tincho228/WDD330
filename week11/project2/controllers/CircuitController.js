// Import modules
import CircuitModel from '../models/CircuitModel.js';
import CircuitView from '../views/CircuitView.js';

import WeatherController from '../controllers/WeatherController.js';
import * as utilitiesModule from "../utilities.js";

export default class CircuitController {
  constructor(parentId) {
    this.circuitModel = new CircuitModel();
    this.circuitView = new CircuitView();
    this.weatherController = new WeatherController();
    this.parentElement = document.getElementById(parentId);
    this.infoSection = document.getElementById("infoSection")
    this.btnBack = document.getElementById("btnBack")
    this.parentWeather = document.getElementById("weather");
    this.heroParent = document.getElementById("hero");
    this.homeLink = document.getElementById("homeLink")
  }
  init(){
    this.showCircuitList()
    this.weatherController.showCurrentWeather()
  }

  showCircuitList() {
    //full circuit list
    this.homeLink.ontouchend = this.init.bind(this)
    utilitiesModule.renderHeroCircuit(this.heroParent)
    utilitiesModule.hide(this.btnBack)
    this.parentElement.innerHTML = null
    const circuitList = Array.from(this.circuitModel.getAllCircuits())
    if (circuitList.length === 0) {
      this.parentElement.innerHTML = '<p class="text-danger text-center">No comments to show</p>'
    } else {
      this.circuitView.renderCircuitList(circuitList, this.parentElement)
    }
    this.addListenerbyClass(".btnId");
    this.weatherController.showCurrentWeather();
  }
  showOneCircuit(id) {
    const circuitById = this.circuitModel.getCircuitById(id)
    // Clearing the list
    this.parentElement.innerHTML = null
    utilitiesModule.hide(this.infoSection)
    // Show all comments by name
    this.circuitView.renderOneCircuitFull(circuitById, this.parentElement)
    utilitiesModule.show(this.btnBack)
    this.btnBack.ontouchend = this.showCircuitList.bind(this);
    this.weatherController.showWeatherDetail(circuitById)
  }
  addListenerbyClass(selector) {

    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const items = Array.from(document.querySelectorAll(selector))
    items.forEach(btn => {
      btn.ontouchend = e => {
        this.showOneCircuit(e.currentTarget.dataset.id);
      }
    })
  }

}