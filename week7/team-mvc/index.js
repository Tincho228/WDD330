import HikesController from './HikesController.js';
import CommentController from './CommentController.js';

const myHikesController = new HikesController('hikes');
const myCommentController = new CommentController('comments');

myHikesController.showHikeList();
myCommentController.showCommentList();