/**************
 * 
 * THIS IS THE MAIN JS
 * 
 ***************/

function change(){

const links = [
    {
      label: "Week1",
      url: "week1/index.html"
    },
    {
      label: "Week2",
      url: "week2/index.html"
    },
    {
      label: "Week3",
      url: "week3/index.html"
    },
    {
      label: "Week4",
      url: "week4/index.html"
    },
    {
      label: "Week5",
      url: "week5/index.html"
    },
    {
      label: "Week6 : Todo App",
      url: "week6/index.html"
    },
    {
      label: "Week7 : AJAX request",
      url: "week7/index.html"
    },
    {
      label: "Week8 : Transform, Transitions",
      url: "week8/index.html"
    }
  ]
for (var i=0; i < links.length; i++){
// Create an li element
var li = document.createElement("li");
li.setAttribute("class", "list-group-item list-group-item-action list-group-item-dark");
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
