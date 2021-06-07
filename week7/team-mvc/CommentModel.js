/*   Data that we are going to work with  */

const commentList = [{
        name: "Bechler Falls",
        date: "falls.jpg",
        content: "Image of Bechler Falls"
    },
    {
        name: "Bechler Falls",
        date: "falls.jpg",
        content: "Image of Bechler Falls"
    },
    {
        name: "Teton Canyon",
        date: "falls.jpg",
        content: "Image of Bechler Falls"
    },
    {
        name: "Denanda Falls",
        date: "falls.jpg",
        content: "Image of Bechler Falls"
    },
    {
        name: "Denanda Falls",
        date: "falls.jpg",
        content: "Image of Bechler Falls"
    }

];

export default class CommentModel {
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    getAllComents() {
        // should return a list of all the hikes.
        return commentList;
    }
    getComentByName(hikeName) {
            // filter the hikes for the record identified by hikeName and return it
        return commentList.filter(comment => comment.name === hikeName);
     
            
    }
}