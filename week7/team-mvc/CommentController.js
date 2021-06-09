/* THIS IS THE CONTROLLER */
import CommentModel from './CommentModel.js';
import CommentView from './CommentView.js';
import * as utilitiesModule from "./utilities.js";

// Comment Controller
export default class CommentController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.commentModel = new CommentModel();
    this.commentView = new CommentView(parentId);
    this.commentForm = document.getElementById('commentForm');
    this.btnForm = document.getElementById('btnForm');
    this.type = "hike";
  }

  showCommentList() {
    //full comment list
    this.parentElement.innerHTML = null;
    const commentList = Array.from(this.commentModel.getAllComents());
    if(commentList.length === 0){
      this.parentElement.innerHTML = '<p class="text-danger text-center">No comments to show</p>'
    }else{
    this.commentView.renderCommentList(commentList, this.parentElement);
    }
    this.btnForm.addEventListener('touchend', e => {
      e.stopImmediatePropagation();
      e.preventDefault();
      this.addComment(e.currentTarget.dataset.name);
    })
    
    // hide Comment Form
    utilitiesModule.elementHide(this.commentForm);
    
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