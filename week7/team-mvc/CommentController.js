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
    this.commentType = "hike";
  }

  showCommentList() {
    //full comment list
    this.parentElement.innerHTML = null;
    const commentList = Array.from(this.commentModel.getAllComents());
    this.commentView.renderCommentList(commentList, this.parentElement);
    utilitiesModule.onTouch(this.btnForm, this.addComment);
    // hide Comment Form
    utilitiesModule.elementHide(this.commentForm);
  }
  addComment(hikename) {
    const name = hikename
    const id = new Date();
    const content = document.getElementById('commentContent').value;
    if (content) {
      let newComment = {
        name: name,
        date: date,
        content: content
      }
      console.log(newComment);
    } else {
      console.log("Please insert a comment");
    }
    
  }
}