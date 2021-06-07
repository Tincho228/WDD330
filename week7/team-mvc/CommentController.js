/* THIS IS THE CONTROLLER */
import CommentModel from './CommentModel.js';
import CommentView from './CommentView.js';

// Comment Controller
export default class CommentController {
    constructor(parentId) {
      this.parentElement = document.getElementById(parentId);
      // this is how our controller will know about the model and view...we add them right into the class as members.
      this.commentModel = new CommentModel();
      this.commentView = new CommentView(parentId);
      this.commentType = "hike";
    }
    
    showCommentList() {
      //full comment list
      this.parentElement.innerHTML = null;
      const commentList = Array.from(this.commentModel.getAllComents());
      this.commentView.renderCommentList(commentList, this.parentElement);
    }
}