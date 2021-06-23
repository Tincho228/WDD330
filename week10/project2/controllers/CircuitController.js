// Import modules
import CircuitModel from '../models/CircuitModel.js';
import CircuitView from '../views/CircuitView.js';
import * as utilitiesModule from "../utilities.js";

export default class CircuitController {
    constructor(parentId) {
        this.circuitModel = new CircuitModel();
        this.circuitView = new CircuitView();
        this.parentElement = document.getElementById(parentId);
        this.infoSection = document.getElementById("infoSection")
        this.btnBack = document.getElementById("btnBack")
        
    }
  
    showCircuitList() {
      //full circuit list
      utilitiesModule.hide(this.btnBack)
      this.parentElement.innerHTML = null
      const circuitList = Array.from(this.circuitModel.getAllCircuits())
      if(circuitList.length === 0){
        this.parentElement.innerHTML = '<p class="text-danger text-center">No comments to show</p>'
      }else{
      this.circuitView.renderCircuitList(circuitList, this.parentElement)
      }
      this.addListenerbyClass(".btnId");
    }
    showOneCircuit(id){
      const circuitById = this.circuitModel.getCircuitById(id)
      // Clearing the list
      this.parentElement.innerHTML = null
      utilitiesModule.hide(this.infoSection)
      // Show all comments by name
      this.circuitView.renderOneCircuitFull(circuitById, this.parentElement)
      utilitiesModule.show(this.btnBack)
    }
    addListenerbyClass(selector) {
      // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
      const items = document.querySelectorAll(selector);
        items.forEach(btn => {
        btn.addEventListener('click', e => {this.showOneCircuit(e.currentTarget.dataset.id);});
      })
    }
  
  }