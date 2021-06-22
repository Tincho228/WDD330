import CircuitModel from '../models/CircuitModel.js';
import CircuitView from '../views/CircuitView.js';



export default class CircuitController {
    constructor(parentId) {
        this.circuitModel = new CircuitModel();
        this.circuitView = new CircuitView();
        this.parentElement = document.getElementById(parentId);
        
    }
  
    showCircuitList() {
      console.log("cirucit controller")  
      //full comment list
      this.parentElement.innerHTML = null;
      const circuitList = Array.from(this.circuitModel.getAllCircuits());
      if(circuitList.length === 0){
        this.parentElement.innerHTML = '<p class="text-danger text-center">No comments to show</p>'
      }else{
      this.circuitView.renderCircuitList(circuitList, this.parentElement);
      }/*
      this.btnForm.addEventListener('touchend', e => {
        e.stopImmediatePropagation();
        e.preventDefault();
        this.addComment(e.currentTarget.dataset.name);
      })
      
      // hide Comment Form
      utilitiesModule.elementHide(this.commentForm);
     */ 
    }
    showOneHikeComments(hikeName){
      const commentListbyName = this.commentModel.getComentByName(hikeName);
      // Clearing the list
      this.parentElement.innerHTML = null;
      // Show all comments by name
      this.commentView.renderCommentList(commentListbyName, this.parentElement);
    }
    addComment(hikeName, type) {
      const name = hikeName;
      const date = utilitiesModule.getDate();
      const content = document.getElementById('commentContent').value;
      if (content) {
        let newComment = {
          name: name,
          date: date,
          content: content
        }
        this.commentModel.writeCommentToLS(newComment);
        this.showOneHikeComments(hikeName);
        
      } else {
        console.log("Please insert a comment");
      }
    }
  
  }