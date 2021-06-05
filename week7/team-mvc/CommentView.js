// It handles all the views - Receives data from the controller.

export default class CommentView {
    constructor(elementId) {
        // will need this
        this.parentElement = document.getElementById(elementId);
    }
  renderCommentList(commentList) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
      commentList.forEach(comment => {
      this.parentElement.appendChild(this.renderOneComment(comment));
    })
  }
  renderOneComment(comment){
    const item = document.createElement("li");
    item.setAttribute("class", "list-group-item list-group-item-action");
    item.innerHTML = ` <p class="bg-lightgray" style="padding: 10px 20px;border-radius: 15px;">${comment.name} ${comment.date}</p>
    <div class="d-flex">
            <div>
                <p style="font-style:italic">${comment.content}</p>
            </div>
    </div>`;
    return item;
  }
}