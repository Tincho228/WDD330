  /* VIEW MODULE */
  
  // It handles all the views - Receives data from the controller.

  export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
        
    }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    hikeList.forEach(hike => {
      listElement.appendChild(this.renderOneHikeLight(hike));
    })
    
  }
  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
    const item = document.createElement("li");
    item.setAttribute("class", "list-group-item list-group-item-action");
    item.innerHTML = ` <h2 class="text-center bg-dark text-light" style="padding: 30px auto">${hike.name}</h2>
    <div class="row">
    <div class="col-sm-6 image" data-name ="${hike.name}"><img class="img-fluid" src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div></div>`;
    return item;   
  }
  renderOneHikeFull(hike, parentElement) {
    const item = document.createElement("li");
    console.log(hike[0].name);/*
    item.setAttribute("class", "list-group-item list-group-item-action");
    item.innerHTML = ` <h2 class="text-center bg-dark text-light" style="padding: 30px auto">${hike.name}</h2>
    <div class="row">
    <div class="col-sm-6 image" data-name ="${hike.name}"><img class="img-fluid" src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div></div>`;*/
    parentElement.appendChild(item);
  }
}
            