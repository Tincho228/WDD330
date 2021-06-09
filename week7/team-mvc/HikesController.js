/* THIS IS THE CONTROLLER */
import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
import CommentController from './CommentController.js';
import CommentModel from './CommentModel.js';
import CommentView from './CommentView.js';
import * as utilitiesModule from "./utilities.js";
// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    this.btnBack = document.getElementById("btnBack");
    this.btnForm = document.getElementById('btnForm');
    this.commentForm = document.getElementById('commentForm');
    // Search for comment Parent in the DOM
    this.commentParentById = document.getElementById('comments');
    // Adding the comments variables
    this.commentController = new CommentController('comments');
    this.commentModel = new CommentModel(this.commentParentById);
    this.commentView = new CommentView();
  }
  
  showHikeList() {
    this.parentElement.innerHTML = null;
    utilitiesModule.elementHide(this.btnBack)
    const hikeList = Array.from(this.hikeModel.getAllHikes());
    this.hikesView.renderHikeList(hikeList, this.parentElement);
    this.addHikeListener();
    // Add a listener to the back button
    utilitiesModule.onTouch(this.btnBack, this.showHikeList.bind(this))
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    this.commentController.showCommentList();
  }

  showOneHike(hikeName){
    const hikeByName = this.hikeModel.getHikeByName(hikeName);
    this.parentElement.innerHTML = null;
    this.hikesView.renderOneHikeFull(hikeByName, this.parentElement);
    utilitiesModule.elementShow(this.btnBack);
    this.commentController.showOneHikeComments(hikeName)
    // Show the comment of the chosen hike 
    // const commentListbyName = this.commentModel.getComentByName(hikeName);
    // Clearing the list
    // this.commentParentById.innerHTML = null;
    // Show all comments by name
    // this.commentView.renderCommentList(commentListbyName, this.commentParentById);
    // Show the comment Form
    utilitiesModule.elementShow(this.commentForm)
    // Add name to the button
    this.btnForm.setAttribute('data-name', hikeName);
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const items = document.querySelectorAll(".image");
      items.forEach(item => {
      item.addEventListener('click', e => {this.showOneHike(e.currentTarget.dataset.name);});
    })
  }
}