/**************
 * 
 * THIS IS THE MAIN JS
 * 
 ***************/

function change(){

const links = [
    {
      label: "Week1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 Notes",
      url: "week2/index.html"
    }
  ]
for (var i=0; i < links.length; i++){
// Create an li element
var li = document.createElement("li");
li.setAttribute("class", "list-group-item list-group-item-action");
// Create an a element
var a = document.createElement("a");
a.setAttribute("href",links[i].url);
a.textContent = links[i].label;
a.setAttribute("class", "text-dark");
// Inserting a element inside the li
li.appendChild(a);
//Select ol list
var ol = document.getElementById("list");
// Inserting li element inside the ol
ol.appendChild(li);
}
}
change();