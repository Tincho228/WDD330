/* THIS IS THE CONTROLLER */
import CommentModel from './CommentModel.js';
//import HikesView from './HikesView.js';

// Comment Controller
export default class CommentController {
    constructor(parentId) {
      this.parentElement = document.getElementById(parentId);
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.commentModel = new CommentModel();
      /*this.commentView = new CommentView(parentId);*/
    }
    
    showCommentList() {
      //full comment list
      this.parentElement.innerHTML = null;
      console.log("we are in the comments controller");
      const commentList = Array.from(this.commentModel.getAllComents());
      console.log(commentList)
      document.getElementById("comments").innerHTML = "Render list of comments";
    }
}