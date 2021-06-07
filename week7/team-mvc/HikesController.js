/* THIS IS THE CONTROLLER */
import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
import CommentController from './CommentController.js';
import CommentModel from './CommentModel.js';
import CommentView from './CommentView.js';
// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
    this.btnBack = document.getElementById("btnBack");
    // Search for comment Parent in the DOM
    this.commentParentById = document.getElementById('comments');
    // Adding the comments variables
    this.commentController = new CommentController('comments');
    this.commentModel = new CommentModel(this.commentParentById);
    this.commentView = new CommentView();
  }
  
  showHikeList() {
    this.parentElement.innerHTML = null;
    this.elementHide(this.btnBack);
    const hikeList = Array.from(this.hikeModel.getAllHikes());
    this.hikesView.renderHikeList(hikeList, this.parentElement);
    this.addHikeListener();
    this.addGoBackListener(this.btnBack, this.showHikeList.bind(this));
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    this.commentController.showCommentList();
  }

  showOneHike(hikeName){
    const hikeByName = this.hikeModel.getHikeByName(hikeName);
    this.parentElement.innerHTML = null;
    this.hikesView.renderOneHikeFull(hikeByName, this.parentElement);
    this.elementShow(this.btnBack);
    // Show the comment of the chosen hike
    const commentListbyName = this.commentModel.getComentByName(hikeName);
    // Clearing the list
    this.commentParentById.innerHTML = null;
    this.commentView.renderCommentList(commentListbyName, this.commentParentById);
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const items = document.querySelectorAll(".image");
      items.forEach(item => {
      item.addEventListener('click', e => {this.showOneHike(e.currentTarget.dataset.name);});
    })
  }
  elementHide(element){
    element.style.display = "none";
  }
  elementShow(element){
    element.style.display = "block";
  }
  addGoBackListener(element, callback){
    element.addEventListener("touchend", function(evt) {
      evt.preventDefault();
      callback()
    })
  }
}