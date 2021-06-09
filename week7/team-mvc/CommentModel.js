
export default class CommentModel {
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    getAllComents() {
        // should return a list of all the hikes.
        let key = "hikes";
        let existing = JSON.parse(localStorage.getItem(key));
        if (existing) {
            return existing;    
        }
        existing = []
        localStorage.setItem(key, JSON.stringify(existing));
        return;
    }
    getComentByName(hikeName) {
        // filter the hikes for the record identified by hikeName and return it
        let key = "hikes"
        let existing = JSON.parse(localStorage.getItem(key));
        if(existing){
            return existing.filter(comment => comment.name === hikeName)
        }
    }
    writeCommentToLS(data) {
        let key = "hikes"
        let existing = JSON.parse(localStorage.getItem(key))
        if (existing) {
            existing[existing.length] = data;
            localStorage.setItem(key, JSON.stringify(existing));
            return;
        }
        existing = [];
        existing[existing.length] = data;
        localStorage.setItem(key, JSON.stringify(existing));
        return;
    }
}
