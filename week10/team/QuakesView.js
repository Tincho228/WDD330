// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
      console.log(quakeList)
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    /*  listElement.innerHTML = quakeList.features.map(quake => {
            return ` ${quake.properties.title}, ${new Date(quake.properties.time)}`;
      }).join('');*/
      listElement.innerHTML= null
      quakeList.features.forEach(quake => {
          const li = document.createElement("li")
          li.className = "list-group-item"
          li.setAttribute("data-id", quake.id)
          li.innerHTML =`<p class="text-info">${quake.properties.title}</p>
                        <p>${new Date(quake.properties.time)}</p>`
          listElement.appendChild(li)
      })
    } 
    renderQuake(quake, element) {
      const quakeProperties = Object.entries(quake.properties);
      element.innerHTML = quakeProperties;
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    }
  }