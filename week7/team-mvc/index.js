import HikesController from './HikesController.js';

const myHikesController = new HikesController('hikes');

myHikesController.showHikeList();

/*

 The last step is go back in our model, view, and controller
 and finish writing the methods as indicated in the comments. 
 I would recommend starting with the Model. Complete the 
 getAllHikes method first (model), test it, then move on to
 the showAllHikes and renderHikeList methods. Test again.

After that work on the controller or View methods as it makes sense. I would recommend following the same order...finish a method, then test. It will keep your errors under control and make your code easier to troubleshoot.



const imgBasePath = "https://byui-cit.github.io/cit261/examples/";

window.addEventListener("load", () => {
  showHikeList();
});

function showHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";
  renderHikeList(hikeList, hikeListElement);
}

function renderHikeList(hikes, parent) {
  hikes.forEach(hike => {
    parent.appendChild(renderOneHike(hike));
  });
}
function renderOneHike(hike) {
  const item = document.createElement("li");

  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

  return item;
}
*/